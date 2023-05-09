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

图基本操作



### 图基本操作

> 这里仅根据本人的已掌握信息记录使用方法，与一些需要注意的点

示例：

```text
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

如果是查询，必须保证属性上有索引，并且全文索引和二级索引不一样