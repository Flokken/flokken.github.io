## Gremlin

参考

> https://tinkerpop.apache.org/docs/current/reference/#basic-gremlin
>
> https://blog.csdn.net/javeme/article/details/82631834



## 基础属性

### 图基本概念

- 图Graph：指关系图，就是整张图，包括边与与节点以及各自的属性.
- 顶点Vertex：一般指实体。比如person
- 边Edge：一般指关系。比如person与person直接，可以有knows，表示两个人认识的关系
- 属性Property：顶点或边可以包含属性，比如person是一个节点，可以有属性name.

这里以hugegraph官网的示例图为例,

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230509220512416.png" styl="zoom:70%">

**节点类型：**

Person,属性有name,age,city

software,属性有name ,price

**边类型**

knows,属性有date

created，无属性

### 图基本操作

> 这里仅根据本人的已掌握信息记录使用方法，与一些需要注意的点

示例：

```groovy
// 注意：g 代表的是整个图
// 一切查询都是以图开始
g.V()
//查询顶点，一般作为图查询的第1步,开头的g表示graph，V()表示选择顶点

g.E()
//查询所有边

g.V('3:云服务器CVM')
//注意，这里的id，如果建图时没有，会自动加上，格式是x:name，x是json的结构

g.V().label()
// 查询所有顶点的label

g.V().properties()
// 查询所有顶点的属性

g.V().properties('name')
// 查询所有顶点的“name”属性
// 如果无“name”属性的顶点将跳过

g.V().properties().value()
// 查询所有顶点的属性值

g.V().valueMap()
// 查询所有顶点的属性

g.V().values('name')
// 查询所有顶点的“name”属性
// 效果等同于：
// g.V().properties('name').value()
//边也有类似操作，g.E().values()


```

## 边的遍历

以顶点为基准（也就是先有顶点，再去访问相关的边）

**out(label):** 根据指定的EdgeLabel来访问顶点的OUT方向邻接点（可以是零个EdgeLabel，代表所有类型边；也可以一个或多个**EdgeLabel**，代表任意给定EdgeLabel的边，下同）
**in(label):** 根据指定的EdgeLabel来访问顶点的IN方向邻接点
**both(label):** 根据指定的EdgeLabel来访问顶点的双向邻接点
**outE(label):** 根据指定的EdgeLabel来访问顶点的OUT方向邻接边
**inE(label):** 根据指定的EdgeLabel来访问顶点的IN方向邻接边
**bothE(label):** 根据指定的EdgeLabel来访问顶点的双向邻接边

比如

~~~groovy
g.V().out()
//该图所有顶点的所有出边方向的邻接点，出边指该点->相邻的点，如果加上label，就是访问label类型的出边的邻接点
g.V().in('company')
//访问所有顶点的入边方向的类型为company的邻接点
g.V().outE('company')
//访问所有顶点的company类型出边
~~~

以边为基准（也就是从边开始去访问顶点）

**outV():** 访问边的出顶点，出顶点是指边的起始顶点
**inV():** 访问边的入顶点，入顶点是指边的目标顶点，也就是箭头指向的顶点
**bothV():** 访问边的双向顶点

## has条件过滤

has语句是filter类型语句的代表，能够以顶点和边的属性作为过滤条件，决定哪些对象可以通过。

-  **hasLabel(label1，label2…):** object的label与**labels列表**中任何一个匹配就可以通过（可以只填一个）

- **hasId(id1，id2…):** object的id满足ids列表中的任何一个就可以通过(可以只填一个)

- **has(key, value)**: 包含属性“key=value”的object通过，作用于顶点或者边

  - 

- has(label, key, value): 包含属性“key=value”且label值匹配的object通过，作用于顶点或者边

  - ~~~groovy
    // 查询“name”属性值为“云服务器 CVM”的顶点
    g.V().has('name', '云服务器 CVM')
    ~~~

  - 注意，要求对应节点的key必须建立了二级索引

- has(key, predicate): 包含键为key且对应的value满足predicate的object通过，作用于顶点或者边

  - ~~~groovy
    // 查询“belongCloud”属性值为“腾讯云”的顶点
    g.V().has('belongCloud', gt('腾讯云'))
    ~~~

  - 只有当belongCloud是全文索引时支持这么搞

- hasKey(keys…): object的属性键包含所有的keys列表成员才能通过，作用于顶点属性

- hasValue(values…): object的属性值包含所有的values列表成员才能通过，作用于顶点属性

  - 要求property

- has(key): 包含键为key的属性的object通过，**作用于顶点或者边的properties值**

  - ex:`g.V().properties().hasKey('name')`

  - ###### 特殊用法：直接将`hasKey()`作用于顶点，仅后端是`Cassandra`时支持

    ```groovy
    // 查询包含属性“age”的顶点
    g.V().hasKey('age')
    ```

- hasNot(key): 不包含键为key的属性的object通过，作用于顶点或者边

### 结果数限制

**limit(x):**只返回结果中的x个

