---
read_time: true
show_date: true
title: "HBase与Hive介绍"
date: 2023-01-14
tags: [HBase]
author: flokken
description: "Learning"
sidebar: 'auto'
categories: 
---

>参考：
>
>https://zhuanlan.zhihu.com/p/413300832
>
>https://baijiahao.baidu.com/s?id=1722997552630773696&wfr=spider&for=pc

HBase是一个分布式、可扩展、支持海量数据存储的NoSQL数据库。底层物理存储是以Key-Value的数据格式存储的，HBase中的所有数据文件都存储在Hadoop HDFS文件系统上。

**一、主要组件**



HBase详细架构图解



![img](https://pic.rmb.bdstatic.com/bjh/down/c4221555e65fd6d066fb7920dd4302f1.png)**注意**：HBase是依赖ZooKeeper和HDFS的，需要启动ZooKeeper和HDFS。

Client

提供了访问HBase的一系列API接口，如Java Native API、Rest风格http API、Thrift API、scala等，并维护cache来加快对HBase的访问。

Zookeeper：

HBase 通过 Zookeeper 来做 Master 的高可用，保证任何时候集群中只有一个Master 、实时监控RegionServer的上线和下线信息，并实时通知Master、元数据的入口以及集群配置的维护等工作。

HDFS：

HDFS 为 HBase 提供最终的底层数据存储服务，同时为 HBase 提供高可用的支持。

Master：（是所有 RegionServer 的管理者，其实现类为 HMaster）

（1）为RegionServer分配Region





（2）负责RegionServer的负载均衡





（3）发现失效的RegionServer并重新分配其上的Region





（4）管理用户对table的增删改操作（对于表的操作（DDL）create, delete, alter）





\5. RegionServer：（是 Region 的管理者，其实现类为 HRegionServer）





（1）RegionServer维护Region，处理对这些Region的IO请求，向HDFS文件系统中读写数据。





一个RegionServer由多个Region组成，一个Region由多个Store组成，一个Store对应一个CF（列族），而一个store包括位于内存中的Mem Store和位于磁盘的StoreFile，每个StoreFile以HFile格式保存在HDFS上。写操作先写入Mem Store，当Mem Store中的数据达到某个阈值时，RegionServer会启动flashcache进程写入StoreFile，每次写入形成单独的一个StoreFile。





（2）RegionServer负责切分在运行过程中变得过大的Region。





每个表一开始只有一个Region，随着表数据不断插入，数据越来越多，StoreFile也越来越大，当StoreFile文件的数量增长到一定阈值后，系统会进行合并（minor、major compaction），minor主要是合并一些小的文件，不做删除，清理操作，而majar在合并过程中会进行版本合并和删除工作，形成更大的StoreFile。





当一个Region所有StoreFile的大小和数量超过一定阈值后，会把当前的Region分割为两个新的Region（裂变），每个Region保存一段连续的数据片段，如此往复，就会有越来越多的region，并由Master分配到相应的RegionServer服务器，这样一张完整的表被保存在多个RegionServer 上，实现负载均衡。





（3）对于数据的操作：（DML）get, put, delete；





\6. Region：





Hbase表的切片，HBase表会根据RowKey值被切分成不同的Region存储在RegionServer中，在一个RegionServer中可以有多个不同的Region。





HRegion由一个或者多个Store组成，每个Store保存一个Column Family。每个Store又由一个Mem Store和0至多个StoreFile组成，每个StoreFile以HFile格式保存在HDFS上，HFile是Hadoop的二进制格式文件，实际上StoreFile就是对HFile做了轻量级包装，即StoreFile底层就是HFile





\7. Hlog：又称Write Ahead logs（WAL）预写入日志。





HBase的修改记录，当对HBase读写数据的时候，数据不是直接写进磁盘，它会在内存中保留一段时间（时间以及数据量阈值可以设定）。由于数据要经 Mem Store 排序后才能刷写到 StoreFile，但把数据保存在内存中可能有更高的概率引起数据丢失，为了解决这个问题，数据会先写在一个叫做Write-Ahead logFile的文件中，然后再写入内存中。所以在系统出现故障的时候，可以通过这个日志文件来恢复数据。





\8. Store：





StoreFile存储在Store中，一个Store对应HBase表中的一个列族(列簇， Column Family)。





\9. MemStore：





写缓存，由于 StoreFile中的数据要求是有序的，所以数据是先存储在 Mem Store 中，排好序后，等到达刷写时机才会刷写到 StoreFile，每次刷写都会形成一个新的 StoreFile。





\10. StoreFile：





这是在磁盘上保存原始数据的实际的物理文件，是实际的存储文件。StoreFile是以HFile的形式存储在HDFS的。每个 Store 会有一个或多个 StoreFile，数据在每个 StoreFile 中都是有序的（按照RowKey的字典顺序排序）。





\11. HFile：





可以理解成一种文件格式（其他的文件格式txt，orc，parquet...），StoreFile是以HFile格式存储的。





**二、HBase数据模型**





逻辑结构图



![img](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/6a600c338744ebf891874bc205d51d236159a70b.png@f_auto)



物理存储结构



![img](https://pics4.baidu.com/feed/d31b0ef41bd5ad6e9fb6ace94ce7f3d2b6fd3c18.png@f_auto?token=97aa6f1dd98dd042fbf98afc102940f3)



\1. Name Space





命名空间，类似于关系型数据库的 DatabBase 概念，每个命名空间下有多个表。HBase有两个自带的命名空间，分别是“hbase” 和 “default”，“hbase” 中存放的是 HBase 内置的表，“default”表是用户默认使用的命名空间。





\2. Region





类似于关系型数据库的表的概念（实际上Region在HBase数据库中是表的切片）。建表时不同的是，HBase定义表时只需要声明列簇即可，不需要声明具体的列。这意味着，往HBase中写入数据时，字段可以动态、按需指定。因此，和关系型数据库相比，HBase能够轻松应对字段变更的场景。





\3. Row





HBase 表中的每行数据都由一个 RowKey 和多个 Column（列）组成，数据是按照 RowKey的字典顺序存储的，并且查询数据时只能根据 RowKey 进行检索，所以 RowKey 的设计十分重要。





\4. Column





HBase 中的每个列都是由Column Family(列簇)和 Column Qualifier(列限定符)运行限定，例如：info: name，info: age 。建表时，只需声明列簇，而列限定符无需预先定义。





\5. Time Stamp





用于标识数据的不同版本（version），每条数据写入时，如果不指定时间戳，系统会自动为其加上该字段，其值为写入 HBase 的时间。





\6. Cell





由{RowKey, Column Family：Column Qualifier, Time Stamp} 唯一确定的单元。cell 中的数据是没有类型的，全部是字节码形式存储（byte[]数组）。