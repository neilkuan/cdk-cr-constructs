# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomResourceGetEIP <a name="CustomResourceGetEIP" id="cdk-cf-constructs.CustomResourceGetEIP"></a>

#### Initializers <a name="Initializers" id="cdk-cf-constructs.CustomResourceGetEIP.Initializer"></a>

```typescript
import { CustomResourceGetEIP } from 'cdk-cf-constructs'

new CustomResourceGetEIP(scope: Construct, id: string, props?: ICustomResourceGetEIPOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cf-constructs.CustomResourceGetEIP.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-cf-constructs.CustomResourceGetEIP.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cf-constructs.CustomResourceGetEIP.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-cf-constructs.ICustomResourceGetEIPOptions">ICustomResourceGetEIPOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-cf-constructs.CustomResourceGetEIP.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-cf-constructs.CustomResourceGetEIP.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-cf-constructs.CustomResourceGetEIP.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-cf-constructs.ICustomResourceGetEIPOptions">ICustomResourceGetEIPOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cf-constructs.CustomResourceGetEIP.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-cf-constructs.CustomResourceGetEIP.getips">getips</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-cf-constructs.CustomResourceGetEIP.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getips` <a name="getips" id="cdk-cf-constructs.CustomResourceGetEIP.getips"></a>

```typescript
public getips(): string[]
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cf-constructs.CustomResourceGetEIP.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-cf-constructs.CustomResourceGetEIP.isConstruct"></a>

```typescript
import { CustomResourceGetEIP } from 'cdk-cf-constructs'

CustomResourceGetEIP.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-cf-constructs.CustomResourceGetEIP.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cf-constructs.CustomResourceGetEIP.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-cf-constructs.CustomResourceGetEIP.property.outputs">outputs</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-cf-constructs.CustomResourceGetEIP.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-cf-constructs.CustomResourceGetEIP.property.outputs"></a>

```typescript
public readonly outputs: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---




## Protocols <a name="Protocols" id="Protocols"></a>

### ICustomResourceGetEIPOptions <a name="ICustomResourceGetEIPOptions" id="cdk-cf-constructs.ICustomResourceGetEIPOptions"></a>

- *Implemented By:* <a href="#cdk-cf-constructs.ICustomResourceGetEIPOptions">ICustomResourceGetEIPOptions</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cf-constructs.ICustomResourceGetEIPOptions.property.companyIps">companyIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-cf-constructs.ICustomResourceGetEIPOptions.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `companyIps`<sup>Optional</sup> <a name="companyIps" id="cdk-cf-constructs.ICustomResourceGetEIPOptions.property.companyIps"></a>

```typescript
public readonly companyIps: string[];
```

- *Type:* string[]

---

##### `regions`<sup>Optional</sup> <a name="regions" id="cdk-cf-constructs.ICustomResourceGetEIPOptions.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

