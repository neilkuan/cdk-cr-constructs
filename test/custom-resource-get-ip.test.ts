import { assertions, Stack, App } from 'aws-cdk-lib';
import { CustomResourceGetEIP } from '../src';


let stack: Stack;
beforeEach(() => {
  const app = new App();
  stack = new Stack(app, 'TestStack');
});

test('CustomResourceGetEIP testing', () => {

  const cr =new CustomResourceGetEIP(stack, 'TestCR', {
    regions: ['us-east-1'],
    companyIps: ['1.2.3.4'],
  });
  cr.getIps();


  expect(assertions.Template.fromStack(stack).toJSON()).toMatchSnapshot();
});


test('CustomResourceGetEIP testing not correct region', () => {
  expect(()=>{
    new CustomResourceGetEIP(stack, 'TestCR', {
      regions: ['us-east-99'],
      companyIps: ['1.2.3.4'],
    });
  }).toThrowError('Fault region code us-east-99');
});