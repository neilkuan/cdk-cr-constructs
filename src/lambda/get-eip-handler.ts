import { DescribeAddressesCommand, EC2Client, DescribeAddressesCommandOutput } from '@aws-sdk/client-ec2';
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
    return LookUpEips(regionList, ipList, stackName );
  }

  return {
    PhysicalResourceId: `Custom::GetEIP${stackName}`,
    Data: {
      IP_LIST: ipList,
    },
  };
}

export async function LookUpEips(regionList: any, ipList: string[], stackName: string) {
  try {
    const regionListJson: string[] = JSON.parse(regionList);
    let promises: Promise<DescribeAddressesCommandOutput>[] = [];
    for (const region of regionListJson) {
      console.log('Now Run region: ', region);
      const client = new EC2Client({ region: region });

      promises.push(client.send(new DescribeAddressesCommand({})));
    }
    const addresses = await Promise.all(promises);
    for (const address of addresses) {
      if (address.Addresses) {
        for (const ip of address.Addresses) {
          ipList.push(`${ip.PublicIp}/32`);
        }
      }
    }

    console.log('lookupEips', ipList);
    const uniqIpList = [...new Set(ipList)];
    console.log('Unit Ips Values', uniqIpList);
    return {
      PhysicalResourceId: `Custom::GetEIP${stackName}`,
      Data: {
        IP_LIST: uniqIpList,
      },
    };
  } catch (e) {
    console.log(e);
    throw e;
  }

}