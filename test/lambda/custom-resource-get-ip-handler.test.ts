import { DescribeAddressesCommand, EC2Client } from '@aws-sdk/client-ec2';
import { mockClient } from 'aws-sdk-client-mock';
import { handler } from '../../src/lambda/geteip-handler';
import 'aws-sdk-client-mock-jest';
// https://github.com/m-radzikowski/aws-sdk-client-mock

describe('snapshot-cleanup-handler', () => {
  const ec2Mock = mockClient(EC2Client);

  beforeEach(() => {
    ec2Mock.reset();
  });

  it('Test give commany ip', async () => {
    ec2Mock.on(DescribeAddressesCommand).resolves({
      Addresses: [{
        PublicIp: '1.1.1.1',
      }],
    });
    const res = await handler({
      RequestType: 'Create',
      ServiceToken: '',
      ResponseURL: '',
      StackId: '',
      RequestId: '',
      LogicalResourceId: '',
      ResourceType: '',
      ResourceProperties: {
        ServiceToken: '',
        STACK_NAME: 'TestStack',
        COMPANY_IPS: '[\"1.2.3.4\"]',
      },
    });
    expect(res).toMatchObject({
      PhysicalResourceId: 'Custom::GetEIPTestStack',
      Data: {
        IP_LIST: ['1.2.3.4/32'],
      },
    });
  });

  it('Test not give commany ip', async () => {
    ec2Mock.on(DescribeAddressesCommand).resolves({});
    const res = await handler({
      RequestType: 'Create',
      ServiceToken: '',
      ResponseURL: '',
      StackId: '',
      RequestId: '',
      LogicalResourceId: '',
      ResourceType: '',
      ResourceProperties: {
        ServiceToken: '',
        STACK_NAME: 'TestStack',
        COMPANY_IPS: '[\"1.2.3.4\"]',
      },
    });
    expect(res).toMatchObject({
      PhysicalResourceId: 'Custom::GetEIPTestStack',
      Data: {
        IP_LIST: ['1.2.3.4/32'],
      },
    });
  });

  it('Test give region', async () => {
    ec2Mock.on(DescribeAddressesCommand).resolves({
      Addresses: [{
        PublicIp: '1.1.1.1',
      }],
    });
    const res = await handler({
      RequestType: 'Create',
      ServiceToken: '',
      ResponseURL: '',
      StackId: '',
      RequestId: '',
      LogicalResourceId: '',
      ResourceType: '',
      ResourceProperties: {
        ServiceToken: '',
        STACK_NAME: 'TestStack',
        COMPANY_IPS: '[\"1.2.3.4\"]',
        REGIONS: '[\"ap-northeast-1\", \"us-east-1\"]',
      },
    });
    expect(res).toMatchObject({
      PhysicalResourceId: 'Custom::GetEIPTestStack',
      Data: {
        IP_LIST: ['1.2.3.4/32', '1.1.1.1/32'],
      },
    });
  });
});
