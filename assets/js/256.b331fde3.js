(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{583:function(e,r,v){"use strict";v.r(r);var s=v(4),n=Object(s.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"lecture3-谷歌文件系统gfs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture3-谷歌文件系统gfs"}},[e._v("#")]),e._v(" Lecture3 谷歌文件系统GFS")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://baike.baidu.com/item/GFS/1813072?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[e._v("GFS(Google文件系统) - 百度百科"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("GFS是一个可扩展的"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F/1250388?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[e._v("分布式文件系统"),r("OutboundLink")],1),e._v("，用于大型的、分布式的、对大量数据进行访问的应用。它运行于廉价的普通硬件上，并提供容错功能。它可以给大量的用户提供总体性能较高的服务。")])]),e._v(" "),r("p",[e._v("本章节主要讨论点：")]),e._v(" "),r("ul",[r("li",[e._v("storage：存储")]),e._v(" "),r("li",[e._v("GFS：GFS的设计")]),e._v(" "),r("li",[r("strong",[e._v("consistency：一致性")])])]),e._v(" "),r("h2",{attrs:{id:"问题引入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题引入"}},[e._v("#")]),e._v(" 问题引入：")]),e._v(" "),r("p",[e._v("如果集群有上千台机器，那么总有电脑崩溃，如果每台电脑都崩溃一次/year，那每天都有平均3台电脑不能用。")]),e._v(" "),r("p",[e._v("因此分布式系统必须有容错性的设计。")]),e._v(" "),r("p",[e._v("存储系统上的容错设计的传统方法是复制（备份）"),r("strong",[e._v("，但是数据是存储在多个节点上的，可能产生数据不一致的问题；并且，节点之间备份数据，会有额外的开销")]),e._v(";")]),e._v(" "),r("p",[e._v("因此，提出了一些持久化协议，（但是持久化操作时很昂贵的）同时这个协议也可能会带来性能的降低。")]),e._v(" "),r("p",[r("strong",[e._v("因此，一致性，高性能，容错性之间本就是冲突的，一般实现时需要找到一个平衡。")])]),e._v(" "),r("h2",{attrs:{id:"_3-1-storage设计难点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-storage设计难点"}},[e._v("#")]),e._v(" 3.1 Storage设计难点")]),e._v(" "),r("p",[e._v("构建(fault tolerance)可容错的系统，需要可靠的storage存储实现。")]),e._v(" "),r("blockquote",[r("p",[e._v("这里讨论可容错的存储系统")])]),e._v(" "),r("p",[e._v("通常应用开发保持无状态stateless，而底层存储负责永久保存数据。")]),e._v(" "),r("p",[e._v("下面是渴望一些系统性能时，会遇到的问题")]),e._v(" "),r("ul",[r("li",[e._v("高性能(high perference)\n"),r("ul",[r("li",[e._v("shard：需要分片（并发读取）")]),e._v(" "),r("li",[e._v("data across server：跨多个服务机器存储数据（单机的网卡、CPU等硬件吞吐量限制）")])])]),e._v(" "),r("li",[e._v("多实例/多机器(many servers)\n"),r("ul",[r("li",[e._v("constant faults：单机故障率低，但是足够多的机器则出现部分故障的概率高，在GFS论文上千台机器规模下，每天总会有3个机器出现失败/故障。因此需要有容错设计")])])]),e._v(" "),r("li",[e._v("容错(fault tolerance)\n"),r("ul",[r("li",[e._v("replication：通常通过复制数据保证容错性，即当前磁盘数据异常/缺失等情况，尝试从另一个磁盘获取数据")])])]),e._v(" "),r("li",[e._v("复制(replication)\n"),r("ul",[r("li",[e._v("potential inconsistencies：潜在的数据不一致问题需要考虑")])])]),e._v(" "),r("li",[e._v("强一致性(strong consistency)：\n"),r("ul",[r("li",[e._v("lower performance：一般需要通过一些消息机制保证一致性，这会稍微带来一些性能影响，但一般底层为了保证数据一致性而额外进行的网络通信等操作在整体性能的开销中占比并不会很高。其中可能涉及需要将通信的一些结果写入存储中，这是相对昂贵的操作。")])])])]),e._v(" "),r("h2",{attrs:{id:"_3-2-一致性-consistency"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-一致性-consistency"}},[e._v("#")]),e._v(" 3.2 一致性(consistency)")]),e._v(" "),r("p",[e._v("理想的一致性，即整个分布式系统对外表现时像单个机器一样运作。")]),e._v(" "),r("p",[e._v("**并发性(concurrency)"),r("strong",[e._v("和")]),e._v("故障/失败(failures)**是两个实现一致性时需要考虑的难点。")]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[e._v("并发性问题举例： W1写1，W2写2；R1和R2准备读取数据。W1和W2并发写，在不关心谁先谁后的情况下，考虑一致性，则我们希望R1和R2都读取到1或者都读取到2，"),r("strong",[e._v("R1和R2读取的值应该一致。（可通过分布式锁等机制解决）")])])]),e._v(" "),r("p",[e._v("一般为了容错性，会通过复制的方式解决。"),r("strong",[e._v("而不成熟的复制操作，会导致读者在不做修改的情况下读取到两次不同的数据")])]),e._v(" "),r("p",[e._v("故障/失败问题举例：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230922092540911.png",alt:"image-20230922092540911"}})]),e._v(" "),r("p",[e._v("比如，"),r("strong",[e._v("这里我们这里没有一个成熟的复制协议")]),e._v("，我的C1和C2会同时向S1和S2写入数据（即并发写入）。")]),e._v(" "),r("p",[r("strong",[e._v("那么其他client从S1或S2读数时结果可能是1也可能是2，也就是不确定（不一致）的，所以我们需要协议来保证复制读写时的一致性")])]),e._v(" "),r("h2",{attrs:{id:"_3-3-gfs-简述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-gfs-简述"}},[e._v("#")]),e._v(" 3.3 GFS-简述")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1971701",target:"_blank",rel:"noopener noreferrer"}},[e._v("谷歌Colossus文件系统的设计经验 - 腾讯云开发者社区-腾讯云 (tencent.com)"),r("OutboundLink")],1),e._v(" <= 可供拓展阅读")])]),e._v(" "),r("p",[e._v("**GFS旨在保持高性能，且有复制、容错机制，但很难保持一致性。**google确实曾使用GFS，虽然后继被新的文件系统Colossus取代。")]),e._v(" "),r("blockquote",[r("p",[e._v("GFS两点问题，1是只有一个master（可能导致单点故障），2是可能有不一致")])]),e._v(" "),r("p",[e._v("在论文中可以看到mapper从GFS系统(上千个磁盘)能够以超过10000MB/s的速度读取数据（并行读取）。")]),e._v(" "),r("blockquote",[r("p",[e._v("论文发表时，当时单个磁盘的读取速度大概是30MB/s，一般在几十MB/s左右。")])]),e._v(" "),r("p",[e._v("GFS的几个主要特征：")]),e._v(" "),r("ul",[r("li",[e._v("Big：large data set，巨大的数据集")]),e._v(" "),r("li",[e._v("Fast：automatic sharding，自动把文件分片到多个磁盘")]),e._v(" "),r("li",[e._v("Gloal：all apps see same files，"),r("strong",[e._v("所有应用程序从GFS读取数据时看到相同的文件（一致性）")])]),e._v(" "),r("li",[e._v("Fault tolerance：automic**，尽可能自动地采取一些容错恢复操作**")])]),e._v(" "),r("h2",{attrs:{id:"_3-4-gfs-数据读取流程简述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-gfs-数据读取流程简述"}},[e._v("#")]),e._v(" 3.4 GFS-数据读取流程简述")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://sq.sf.163.com/blog/article/172834757163061248",target:"_blank",rel:"noopener noreferrer"}},[e._v("GFS文件系统剖析（中）一致性模型及读写流程介绍-社区博客-网易数帆 (163.com)"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/68747470733a2f2f6e6f732e6e6574656173652e636f6d2f636c6f75642d776562736974652d6275636b65742f323031383037303431333332343733623231626635382d353236642d343634382d613739652d6434656532643561616639382e706e67",alt:"img"}})]),e._v(" "),r("p",[r("strong",[e._v("看一下里面的东西有：Client，Chunkserver（就是linux服务器），master")])]),e._v(" "),r("p",[e._v("GFS通过Master管理文件系统的元数据等信息，其他Client只能往GFS写入或读取数据。当应用通过GFS Client读取数据时，大致流程如下：")]),e._v(" "),r("ol",[r("li",[e._v("Client向Master发起读数据请求")]),e._v(" "),r("li",[e._v("Master查询需要读取的数据对 应的目录等信息，汇总文件块访问句柄、这些文件块所在的服务器节点信息给Client（"),r("strong",[e._v("大文件通常被拆分成多个块Chunk存放到不同服务器上")]),e._v("，单个Chunk很大， 这里是64MB）")]),e._v(" "),r("li",[e._v("Client得知需要读取的Chunk的信息后，"),r("strong",[e._v("直接和拥有这些Chunk的服务器网络通信传输Chunks")])])]),e._v(" "),r("p",[r("strong",[e._v("注意：")])]),e._v(" "),r("p",[r("strong",[e._v("stabblestorge  （稳定存储的实现）：")])]),e._v(" "),r("p",[r("strong",[e._v("log+checkponit ->stabblestorge   日志和检查点需要持久化存储，这样当master奔溃时可以从日志和检查点中恢复状态。")])]),e._v(" "),r("blockquote",[r("p",[e._v("Master会定期存储存储点")]),e._v(" "),r("p",[e._v("日志中还会存储ichunk handle列表（就是要获取的chunk handle列表）")])]),e._v(" "),r("p",[e._v("Q1: 从文件名到chunk handle的映射需要持久化存储嘛")]),e._v(" "),r("p",[e._v("A: no，因为日志中有chunk handle的列表，可以去chunk server再过得文件名 到handle的映射")]),e._v(" "),r("p",[e._v("Q2：chunk handle 到 chunk server的映射需要持久化保存嘛？")]),e._v(" "),r("p",[e._v("A: no，因为master如果崩溃了，再启动时要求server告诉他，server拥有的块")]),e._v(" "),r("p",[e._v("Q3: chunk handle的version需要持久化存储吗？")]),e._v(" "),r("p",[e._v("A：需要，必须在磁盘上维护版本号，来区分哪个块有最新的信息")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("问题的内容需要去看论文")])])]),e._v(" "),r("p",[e._v("Q:如果master崩溃了，他重启会连接所有块服务器，此时能找到的最大版本号是？")]),e._v(" "),r("p",[e._v("A：有能力找到最新的，他会尝试与所有服务器交互，但是有可能有的块服务器已经挂了，但是最新的信息在那个服务器上")]),e._v(" "),r("h2",{attrs:{id:"_3-5-gfs-master简述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-gfs-master简述"}},[e._v("#")]),e._v(" 3.5 GFS-Master简述")]),e._v(" "),r("p",[e._v("这里大致介绍Master负责的工作：")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("维护文件名到块句柄数组的映射")]),e._v("(file name => chunk handles)")]),e._v(" "),r("p",[e._v("这些信息大多数存放在内存中，所以Master可以快速响应客户端Client")])]),e._v(" "),r("li",[r("p",[e._v("维护每个块句柄(chunk handle)的版本(version)")])]),e._v(" "),r("li",[r("p",[e._v("维护块存储服务器列表(list of chunk servers)")]),e._v(" "),r("ul",[r("li",[e._v("主服务器(primary)\n"),r("ul",[r("li",[e._v("Master还需维护每一个主服务器(primary)的租赁时间(lease time)")])])]),e._v(" "),r("li",[e._v("次要服务器(secondaries)")])]),e._v(" "),r("p",[e._v("典型配置即将chunk存储到3台服务器上")])]),e._v(" "),r("li",[r("p",[e._v("log+check point：通过日志和检查点机制维护文件系统。所有变更操作会先在log中记录，后续才响应Client。这样即使Master崩溃/故障，重启时也能通过log恢复状态。"),r("strong",[e._v("master会定期创建自己状态的检查点，并持久性存储")]),e._v("，重启/恢复状态时只需重放log中最后一个check point检查点之后的所有操作，所以恢复也很快。")])])]),e._v(" "),r("p",[r("strong",[e._v("这里需要思考的是，哪些数据需要放到稳定的存储中(比如磁盘)？")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("比如file name => chunk hanles的映射，平时已经在内存中存储了，还有必要存在稳定的存储中吗？")]),e._v(" "),r("p",[e._v("需要，否则崩溃后恢复时，内存数据丢失，master无法索引某个具体的文件，相当于丢失了文件。")])]),e._v(" "),r("li",[r("p",[e._v("chunk handle 到 存放chunk的服务器列表，这一层映射关系，master需要稳定存储吗？")]),e._v(" "),r("p",[e._v("不需要，master重启时会要求其他存储chunk数据的服务器说明自己维护的chunk handles数据。这里master只需要内存中维护即可。同样的，主服务器(primary)、次要服务器(secondaries)、主服务器(primary)的租赁时间(lease time)也都只需要在内存中即可。")])]),e._v(" "),r("li",[r("p",[e._v("chunk handle的version版本号信息呢，master需要稳定存储吗？")]),e._v(" "),r("p",[e._v("需要。否则master崩溃重启时，"),r("strong",[e._v("master无法区分哪些chunk server存储的chunk最新的")]),e._v("。比如可能有服务器存储的chunk version是14，由于网络问题，该服务器还没有拿到最新version 15的数据，master必须能够区分哪些server有最新version的chunk。")])])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("问题：Master崩溃重启后，会连接所有的chunk server，找到最大的version？")]),e._v(" "),r("p",[e._v("回答：Master会尝试和所有chunk server通信，"),r("strong",[e._v("尽量获取最新version")]),e._v("。当然有可能拥有最新version的chunk server由于网络等原因正好联系不上，"),r("strong",[e._v("此时能联系上的存活最久的chunk server的version会比master存储的version小。")])]),e._v(" "),r("blockquote",[r("p",[e._v("后面讲到一种情况，存在场景就是Client要读取旧version的数据？比如Client自己存储的version就是旧版本，所以读取数据时，拥有旧version的chunk server反而能够响应数据？")]),e._v(" "),r("p",[e._v("假设这里有P(primary)，S1(secondary 1)，S2(secondary 2)和C(Client)，S2由于网络等问题和P、S1断开联系，此时重新选出Primary(假设还是原本的P)，version变为11，而S2断联所以还是version10的数据。一个本地cache了version10和list of chunk sevrers的Client正好直接从S2请求读取数据（因为S2最近），而S2的version和Client一致，所以直接读取到S2的数据。")]),e._v(" "),r("p",[e._v("所以master也不一定直接用最新的")])]),e._v(" "),r("h2",{attrs:{id:"_3-6-gfs-文件读取"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-gfs-文件读取"}},[e._v("#")]),e._v(" 3.6 GFS-文件读取")]),e._v(" "),r("ol",[r("li",[e._v("Client向Master发请求，要求读取X文件的Y偏移量的数据")]),e._v(" "),r("li",[e._v("Master回复Client，"),r("strong",[e._v("X文件Y偏移量相关的块句柄、块服务器列表、版本号(chunk handle, list of chunk servers, version)")])]),e._v(" "),r("li",[e._v("Client 缓存cache块服务器列表(list of chunk servers)")]),e._v(" "),r("li",[e._v("Client从最近的服务器请求chunk数据(reads from closest servers)")]),e._v(" "),r("li",[e._v("被Client访问的chunk server检查version，version正确则返回数据")])]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("为什么这里Client要缓存list of chunk server信息呢？")])]),e._v(" "),r("p",[r("strong",[e._v("因为在这里的设计中，Master只有一台服务器，我们希望尽量减少Client和Server之间的通信次数，客户端缓存可以大大减少Master机器的负载")]),e._v("。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("为什么Client尽量访问最近的服务器来获取数据(reads from closest servers)？")])]),e._v(" "),r("p",[r("strong",[e._v("因为这样在宛如拓扑结构的网络中可以最大限度地减少网络流量(mininize network traffic)，提高整体系统的吞吐量。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("为什么在Client访问chunk server时，chunk server需要检查verison？")])]),e._v(" "),r("p",[r("strong",[e._v("为了尽量避免客户端读到过时数据的情况。")])])])]),e._v(" "),r("h2",{attrs:{id:"_3-7-gfs-文件写入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-gfs-文件写入"}},[e._v("#")]),e._v(" 3.7 GFS-文件写入")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"http://t.zoukankan.com/yorkyang-p-9889525.html",target:"_blank",rel:"noopener noreferrer"}},[e._v('谷歌技术"三宝"之GFS'),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("这里主要关注文件写入中的"),r("strong",[e._v("append操作")]),e._v("，因为把记录追加到文件中这个在他们的业务中很常见（因为一般是追加而不是修改）。"),r("strong",[e._v("在mapreduce中，reducer将处理后的记录数据(计算结果)很快地追加(append)到file中")]),e._v("。")]),e._v(" "),r("blockquote",[r("p",[e._v("lease（租约），Replica（复制），chunk handle（句柄）")])]),e._v(" "),r("p",[e._v("["),r("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/68747470733a2f2f696d67323031382e636e626c6f67732e636f6d2f626c6f672f313033383631382f3230313831312f313033383631382d32303138313130313135323430343632362d313530323735363630302e706e67",alt:"img"}})]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Client向Master发出请求，查询应该往哪里写入filename对应的文件。")])]),e._v(" "),r("li",[r("p",[e._v("Master查询filename到chunk handle映射关系的表，找到需要修改的chunk handle后，再查询chunk handle到chunk server数组映射关系的表，以list of chunk servers(primary、secondaries、version信息)作为Client请求的响应结果")]),e._v(" "),r("p",[e._v("接下去有两种情况，已有primary和没有primary(假设这是系统刚启动后不久，还没有primary)")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("有primary")]),e._v(" "),r("p",[e._v("继续后续流程")])]),e._v(" "),r("li",[r("p",[e._v("无primary")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("master在看用chunk servers中选出一个作为primary，其余的chunk server作为secondaries")])]),e._v(" "),r("p",[e._v("。(暂时不考虑选出的细节和步骤)")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("master会增加version（"),r("strong",[e._v("每次有新的primary时，都需要考虑时进入了一个new epoch，所以需要维护新的version")]),e._v("），然后向primary和secondaries发送新的version，"),r("strong",[e._v("并且会发给primary有效期限的租约lease")]),e._v("。"),r("strong",[e._v("这里primary和secondaries需要将version存储到磁盘")]),e._v("，否则重启后内存数据丢失，无法让master信服自己拥有最新version的数据("),r("strong",[e._v("同理Master也是将version存储在磁盘中")]),e._v(")。")]),e._v(" "),r("blockquote",[r("p",[e._v("也就是都要持久化version")])])])])])])])])]),e._v(" "),r("li",[r("p",[e._v("Client发送数据到想写入的chunk servers(primary和secondaries)，有趣的是，"),r("strong",[e._v("这里Client只需访问最近的secondary，而这个被访问的secondary会将数据也转发到列表中的下一个chunk server")]),e._v("，"),r("strong",[e._v("此时数据还不会真正被chunk severs存储")]),e._v("。（即上图中间黑色粗箭头，secondary收到数据后，马上将数据推送到其他本次需要写的chunk server）")]),e._v(" "),r("p",[r("strong",[e._v("这么做提高了Client的吞吐量，避免Client本身需要消耗大量网络接口资源往primary和多个secondaries都发送数据")]),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("数据传递完毕后，Client向primary发送一个message，表明本次为append操作。")]),e._v(" "),r("p",[e._v("primary此时需要做几件事：")]),e._v(" "),r("ol",[r("li",[e._v("primary此时会检查version，如果version不匹配，那么Client的操作会被拒绝")]),e._v(" "),r("li",[r("strong",[e._v("primary检查lease是否还有效，如果自己的lease无效了，则不再接受任何mutation operations（因为租约无效时，外部可能已经存在一个新的primary了）")])]),e._v(" "),r("li",[e._v("如果version、lease都有效，那么primary会选择一个offset用于写入")]),e._v(" "),r("li",[e._v("primary将前面接收到的数据写入稳定存储中")])])]),e._v(" "),r("li",[r("p",[e._v("primary发送消息到secondaries，表示需要将之前接收的数据写入指定的offset")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("secondaries写入数据到primary指定的offset中，并回应primary已完成数据写入")])])]),e._v(" "),r("li",[r("p",[e._v("primary回应Client，你想append追加的数据已完成写入")]),e._v(" "),r("p",[e._v("当然，存在一些情况导致数据append失败，此时primary本身写入成功，但是后续存在某些/某个secondaries写入失败，此时会向Client返回错误error。"),r("strong",[e._v("Client遇到这种错误后，通常会retry整个流程直到数据成功append，这也就是所谓的最少一次语义(do at-least-once)")])])])]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("需要注意的是，假设append失败，Client再次重试，此时流程中primary指定写入的offset（偏移量，用来确定追加数据的位置）和上一次会是一样的吗？")])]),e._v(" "),r("p",[e._v("不**，primary会指定一个新的offse"),r("strong",[e._v("t。假设primary+2台secondaries，可能上一次p和s1都写成功，仅s2失败。此时retry需要用新的offset，或许p、s1、s2就都写入成功了。这里可以看出来")]),e._v("副本记录是可以重复的(replicates records can be duplicated)**，"),r("strong",[e._v("这和我们常见的操作系统中标准的文件系统不一样。")])]),e._v(" "),r("p",[e._v("原因："),r("strong",[e._v("在应用程序不需要直接和这种特殊的文件系统交互，而是通过库操作，库的内部实现隐藏了这些细节，用户不会看到曾经失败的副本记录数据")]),e._v("。如果你append数据，库会给数据绑定一个id，如果库读取到相同id的数据，会跳过前面的一个。同时库内通过checksums检测数据的变化，同时保"),r("strong",[e._v("证数据不会被篡改。")])])])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("问题：比起重写每一个副本(replica)，直接记住某个副本(replica)失败了不是更好吗？")]),e._v(" "),r("p",[e._v("回答：是的，有很多不同的实现方式。上面流程中假设遇到短暂的网络问题等，也不一定会直接判定会写入失败，可能过一会chunk server会继续写入，并且最后判定为写入成功。")]),e._v(" "),r("p",[e._v("问题：所有的这些服务器都是可信的吗？（换言之，流程中好像没说明一些权限问题）")]),e._v(" "),r("p",[e._v("回答：是的，这很重要，这里不像Linux文件系统，有权限和访问控制写入(permissions and access control writes)一类的东西，"),r("strong",[e._v("服务器完全可信（因为这完全是一个内部系统）。")])]),e._v(" "),r("p",[r("strong",[e._v("问题：写入流程中提到需要校验version，是否存在场景就是Client要读取旧version的数据？比如Client自己存储的version就是旧版本，所以读取数据时，拥有旧version的chunk server反而能够响应数据。")])]),e._v(" "),r("p",[r("strong",[e._v("回答：假设这里有P(primary)，S1(secondary 1)，S2(secondary 2)和C(Client)，S2由于网络等问题和P、S1断开联系，此时重新选出Primary(假设还是原本的P)，version变为11，而S2断联所以还是version10的数据。一个本地cache了version10和list of chunk sevrers的Client正好直接从S2请求读取数据（因为S2最近），而S2的version和Client一致，所以直接读取到S2的数据。")])]),e._v(" "),r("p",[e._v("问题：上面这个举例中，为什么version11这个信息不会返回到Client呢？")]),e._v(" "),r("p",[e._v("回答：原因可能是Client设置的cache时间比较长，并且协议中没有要求更新version。")]),e._v(" "),r("p",[r("strong",[e._v("问题：上面举例中，version更新后，不会推送到S2吗？即通知S2应该记录最新的version为11")])]),e._v(" "),r("p",[e._v("**回答：version版本递增是在master中维护的，version只会在选择新的primary的时候更新。**论文中还提到serial number序列号的概念，不过这个和version无关，这个用于表示写入顺序。")]),e._v(" "),r("p",[e._v("问题：primary完成写入前，怎么知道要检查哪一些secondaries（是否完成了写入）？")]),e._v(" "),r("p",[e._v("回答：master告知的。master告诉primary需要更新secondaries，这形成了new replica group for that chunk。")]),e._v(" "),r("h2",{attrs:{id:"_3-8-gfs-一致性-consistency"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-gfs-一致性-consistency"}},[e._v("#")]),e._v(" 3.8 GFS-一致性(Consistency)")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://baike.baidu.com/item/spanner/6763355?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[e._v("spanner(谷歌公司研发的数据库) - 百度百科"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("这里一致性问题，可以简单地归结于，当你完成一个append操作后，进行read操作会读取到什么数据？")]),e._v(" "),r("p",[e._v("这里假设一个场景，我们讨论一下可能产生的一致性问题，这里有一个M（maseter），P（primary），S（Secondary）：")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("某时刻起，M得不到和P之间的ping-pong通信的响应，什么时候Master会指向一个新的P？")])]),e._v(" "),r("ol",[r("li",[e._v("M比如等待P的lease到期，否则会出现两个P")]),e._v(" "),r("li",[e._v("此时可能有些Client还在和这个P交互")])]),e._v(" "),r("p",[r("strong",[e._v("假设我们此时选出新P，有两个P同时存在，这种场景被称为脑裂(split-brain)，此时会出现很多意料外的情况，比如数据写入顺序混乱等问题，严重的脑裂问题可能会导致系统最后出现两个Master")]),e._v("。")]),e._v(" "),r("p",[e._v("这里M知道P的lease期限，在P的lease期限结束之前，不会选出新P，即使M无法和P通信，但其他Client可能还能正常和P通信。")])])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("这里扩展一下问题，"),r("strong",[e._v("如何达到更强的一致性(How to get stronger consistency)？")])]),e._v(" "),r("p",[e._v("比如这里GFS有时候写入会失败，导致一部分S有数据，一部分S没数据（虽然对外不可见这种失败的数据）。"),r("strong",[e._v("我们或许可以做到要么所有S都成功写入，要么所有S都不写入。")])]),e._v(" "),r("p",[e._v("事实上Google还有很多其他的文件系统，有些具有更强的一致性，比如Spanner有更强的一致性，且支持事务，其应用场景和这里不同。"),r("strong",[e._v("我们知道这里GFS是为了运行mapreduce而设计的。")])])])}),[],!1,null,null,null);r.default=n.exports}}]);