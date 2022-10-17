import * as path from 'path';
import {
  Stack,
  aws_lambda,
  aws_lambda_nodejs,
  aws_iam,
  custom_resources,
  aws_logs,
  CustomResource,
  Token,
  region_info,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface ICustomResourceGetEIPOptions {
  companyIps?: string[];
  regions?: string[];
}
export class CustomResourceGetEIP extends Construct {
  outputs: CustomResource;
  constructor(scope: Construct, id: string, props?: ICustomResourceGetEIPOptions) {
    super(scope, id);
    const onEvent = new aws_lambda_nodejs.NodejsFunction(this, `${id}GetEIP`, {
      entry: path.join(__dirname, 'lambda/geteip-handler.ts'),
      handler: 'handler',
      runtime: aws_lambda.Runtime.NODEJS_16_X,
      bundling: {
        forceDockerBundling: false,
        minify: true,
      },
    });

    const myProvider = new custom_resources.Provider(this, `${id}MyProvider`, {
      onEventHandler: onEvent,
      logRetention: aws_logs.RetentionDays.ONE_DAY,
    });

    onEvent.addToRolePolicy(new aws_iam.PolicyStatement({
      actions: ['ec2:DescribeAddresses'],
      resources: ['*'],
    }));

    if (props?.regions) {
      let right_regions: string[] =[];
      region_info.RegionInfo.regions.forEach(r=>{
        right_regions.push(r.name);
      });
      props.regions.forEach(r=>{
        if (!right_regions.includes(r)) {
          throw new Error(`Fault region code ${r}`);
        }
      });
    }

    this.outputs = new CustomResource(this, `${id}CustomGetEIP`, {
      resourceType: 'Custom::GetEIP',
      serviceToken: myProvider.serviceToken,
      properties: {
        STACK_NAME: Stack.of(this).stackName,
        COMPANY_IPS: Stack.of(this).toJsonString(props?.companyIps),
        REGIONS: Stack.of(this).toJsonString(props?.regions),
      },
    });

  }

  /**
   *
   * @returns Token.asList(this.outputs.getAtt('IP_LIST'));
   *
   */
  public ipList() {
    return Token.asList(this.outputs.getAtt('IP_LIST'));
  }
}