import { DescribeAddressesCommand, EC2Client } from '@aws-sdk/client-ec2';
import { CloudFormationCustomResourceEvent } from 'aws-lambda';

export async function handler(event: CloudFormationCustomResourceEvent) {
  console.log({ ...event, ResponseURL: '...' });

  const companyIps = event.ResourceProperties.COMPANY_IPS;
  const stackName = event.ResourceProperties.STACK_NAME;
  const regionList = event.ResourceProperties.REGIONS;

  let ipList: string[] = [];


  if (companyIps) {
    try {
      const companyIpsList: string[] = JSON.parse(companyIps);
      companyIpsList.forEach(ip => {
        if (ip.includes('/32')) {
          ipList.push(`${ip}`);
        } else {
          ipList.push(`${ip}/32`);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  if (regionList) {
    await LookUpEips(regionList, ipList);
  }

  console.log(ipList);
  const uniqIpList = [...new Set(ipList)];
  console.log('Unit Ips Values', uniqIpList);

  return {
    PhysicalResourceId: `Custom::GetEIP${stackName}`,
    Data: {
      IP_LIST: uniqIpList,
    },
  };
}

export async function LookUpEips(regionList: any, ipList: string[]) {
  try {
    const regionListJson: string[] = JSON.parse(regionList);
    regionListJson.forEach(async region => {
      console.log('Now Run region: ', region);
      const client = new EC2Client({ region: region });

      const address = await client.send(new DescribeAddressesCommand({}));
      if (address.Addresses) {
        address.Addresses.forEach(ip => {
          ipList.push(`${ip.PublicIp}/32`);
        });
      }
    });
  } catch (e) {
  }

}