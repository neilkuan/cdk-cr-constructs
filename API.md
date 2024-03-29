## `cdk-cr-constructs`
This Construct is collect custom resource

### Example for CustomResourceGetEIP
```ts
import { App, Stack, CfnOutput, Duration, aws_iam } from 'aws-cdk-lib';
import { CustomResourceGetEIP } from 'cdk-cr-constructs';
const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};
const app = new App();
const stack = new Stack(app, 'testing-stack', { env });
const getIps = new CustomResourceGetEIP(stack, 'CustomResourceGetEIP', {
  /**
   * Discovery us-east-1 Elastic Ips.
   */
  regions: ['us-east-1'],
  /**
   * Add Company Ips.
   */
  companyIps: ['1.2.3.4'],
});
const role = new aws_iam.Role(stack, 'DemoRole', {
  assumedBy: new aws_iam.AccountRootPrincipal(),
});
/**
 * Example create an assume role, allow all action from ip address.
*/
role.addToPolicy(new aws_iam.PolicyStatement({
  effect: aws_iam.Effect.ALLOW,
  resources: ['*'],
  actions: ['*'],
  conditions: {
    IpAddress: {
      'aws:SourceIp': getIps.ipList(),
    },
  },
}));
```
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomResourceGetEIP <a name="CustomResourceGetEIP" id="cdk-cr-constructs.CustomResourceGetEIP"></a>

#### Initializers <a name="Initializers" id="cdk-cr-constructs.CustomResourceGetEIP.Initializer"></a>

```typescript
import { CustomResourceGetEIP } from 'cdk-cr-constructs'

new CustomResourceGetEIP(scope: Construct, id: string, props?: ICustomResourceGetEIPOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cr-constructs.CustomResourceGetEIP.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-cr-constructs.CustomResourceGetEIP.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cr-constructs.CustomResourceGetEIP.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-cr-constructs.ICustomResourceGetEIPOptions">ICustomResourceGetEIPOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-cr-constructs.CustomResourceGetEIP.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-cr-constructs.CustomResourceGetEIP.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-cr-constructs.CustomResourceGetEIP.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-cr-constructs.ICustomResourceGetEIPOptions">ICustomResourceGetEIPOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cr-constructs.CustomResourceGetEIP.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-cr-constructs.CustomResourceGetEIP.ipList">ipList</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-cr-constructs.CustomResourceGetEIP.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `ipList` <a name="ipList" id="cdk-cr-constructs.CustomResourceGetEIP.ipList"></a>

```typescript
public ipList(): string[]
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cr-constructs.CustomResourceGetEIP.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-cr-constructs.CustomResourceGetEIP.isConstruct"></a>

```typescript
import { CustomResourceGetEIP } from 'cdk-cr-constructs'

CustomResourceGetEIP.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-cr-constructs.CustomResourceGetEIP.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cr-constructs.CustomResourceGetEIP.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-cr-constructs.CustomResourceGetEIP.property.outputs">outputs</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-cr-constructs.CustomResourceGetEIP.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-cr-constructs.CustomResourceGetEIP.property.outputs"></a>

```typescript
public readonly outputs: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---




## Protocols <a name="Protocols" id="Protocols"></a>

### ICustomResourceGetEIPOptions <a name="ICustomResourceGetEIPOptions" id="cdk-cr-constructs.ICustomResourceGetEIPOptions"></a>

- *Implemented By:* <a href="#cdk-cr-constructs.ICustomResourceGetEIPOptions">ICustomResourceGetEIPOptions</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cr-constructs.ICustomResourceGetEIPOptions.property.alwaysUpdate">alwaysUpdate</a></code> | <code>boolean</code> | Indicate whether always update the custom resource to get the new stack output. |
| <code><a href="#cdk-cr-constructs.ICustomResourceGetEIPOptions.property.companyIps">companyIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-cr-constructs.ICustomResourceGetEIPOptions.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `alwaysUpdate`<sup>Optional</sup> <a name="alwaysUpdate" id="cdk-cr-constructs.ICustomResourceGetEIPOptions.property.alwaysUpdate"></a>

```typescript
public readonly alwaysUpdate: boolean;
```

- *Type:* boolean
- *Default:* true

Indicate whether always update the custom resource to get the new stack output.

---

##### `companyIps`<sup>Optional</sup> <a name="companyIps" id="cdk-cr-constructs.ICustomResourceGetEIPOptions.property.companyIps"></a>

```typescript
public readonly companyIps: string[];
```

- *Type:* string[]

---

##### `regions`<sup>Optional</sup> <a name="regions" id="cdk-cr-constructs.ICustomResourceGetEIPOptions.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

