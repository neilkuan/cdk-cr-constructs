const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '2.44.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-cr-constructs',
  repositoryUrl: 'https://github.com/neilkuan/cdk-cr-constructs.git',
  deps: [
    'aws-lambda',
    '@types/aws-lambda',
    '@aws-sdk/client-ec2@^3.363.0',
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
    distName: 'cdk-cr-constructs',
    module: 'cdk_cr_constructs',
  },
  workflowNodeVersion: '^16.20.0',
  majorVersion: 2,
  devDeps: [
    'aws-sdk-client-mock@^3',
    'aws-sdk-client-mock-jest@^3',
    'esbuild',
    'jsii-rosetta@5.0.x',
  ],
  bundledDeps: [
    '@aws-sdk/client-ec2',
    '@types/aws-lambda',
    'aws-lambda',
  ],
  typescriptVersion: '4.9.5',
  jsiiVersion: '~5.0.0',
  tsconfigDev: {
    compilerOptions: {
      strictFunctionTypes: true,
    },
  },
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude);
project.package.addDevDeps(...['jest@^29', '@types/jest@^29', 'ts-jest@^29']);
project.synth();
