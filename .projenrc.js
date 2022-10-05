const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '2.44.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-cf-constructs',
  repositoryUrl: 'https://github.com/neilkuan/cdk-cf-constructs.git',

  deps: [
    'aws-lambda',
    '@types/aws-lambda',
    '@aws-sdk/client-ec2',
  ],
  description: 'aws cdk library for custom resource constructs.',
  keywords: ['awscdk', 'eip', 'custom-resource', 'lambda'],
  compat: true,
  stability: 'experimental',
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
  publishToPypi: {
    distName: 'cdk-cf-constructs',
    module: 'cdk_cf_constructs',
  },
  workflowNodeVersion: '^14.17.0',
  majorVersion: 2,
  devDeps: [
    'aws-sdk-client-mock@^2.0.0',
    'aws-sdk-client-mock-jest@^2.0.0',
    'esbuild',
  ],
  bundledDeps: [
    '@aws-sdk/client-ec2',
    '@types/aws-lambda',
    'aws-lambda',
  ],
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude);

project.synth();