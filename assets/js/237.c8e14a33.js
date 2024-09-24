(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{564:function(t,a,e){"use strict";e.r(a);var o=e(4),s=Object(o.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("名词")]),t._v(" "),a("p",[t._v("volatile 易失的")]),t._v(" "),a("p",[t._v("non-volatile   非易失的")]),t._v(" "),a("p",[t._v("Sequential Access  连续存取")]),t._v(" "),a("p",[t._v("Random access   随机存取")]),t._v(" "),a("blockquote",[a("p",[t._v("易失就是断电之后就没了")])]),t._v(" "),a("h2",{attrs:{id:"存储体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储体系"}},[t._v("#")]),t._v(" 存储体系")]),t._v(" "),a("p",[a("strong",[t._v("存储体系(Storage Hierarchy)")])]),t._v(" "),a("p",[t._v("根据是否易失来分")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231207144316354.png",alt:"image-20231207144316354"}}),t._v(" "),a("p",[t._v("按设备类型来说")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231207144413049.png",alt:"image-20231207144413049"}}),t._v(" "),a("p",[a("strong",[t._v("访问速度")])]),t._v(" "),a("p",[t._v("第二列是把1ns当成1s来看，这些时间对应的时长")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231207144817896.png",alt:"image-20231207144817896"}}),t._v(" "),a("blockquote",[a("p",[t._v("Network Storage是云硬盘")]),t._v(" "),a("p",[t._v("Tape Archives  磁带")])]),t._v(" "),a("h2",{attrs:{id:"顺序存储和随机存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顺序存储和随机存储"}},[t._v("#")]),t._v(" 顺序存储和随机存储")]),t._v(" "),a("p",[t._v("随机存储在非易失的介质上（disk）是比顺序存取慢的。"),a("strong",[t._v("所以DBMS的目标是最大化顺序存储(sequential access)")])]),t._v(" "),a("ul",[a("li",[t._v("可以通过算法去尝试减少随机写的次数，从而让数据存在连续的磁盘块中")]),t._v(" "),a("li",[t._v("一次收集多个页，拓展的时候（？）")])]),t._v(" "),a("h2",{attrs:{id:"系统设计目标-指dbms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统设计目标-指dbms"}},[t._v("#")]),t._v(" 系统设计目标（指DBMS）")]),t._v(" "),a("ul",[a("li",[t._v("允许DBMS管理超出可用内存大小的内存（因为DBMS可用读写磁盘来置换内存）")]),t._v(" "),a("li",[t._v("读写磁盘是代价昂贵的，所以我们应该尽量减小读写磁盘的次数")]),t._v(" "),a("li",[t._v("顺序读写磁盘比随机读写磁盘快，所以DBMS应该最大化顺序读写（也就是把随机转换成顺序）")])]),t._v(" "),a("p",[a("strong",[t._v("面向硬盘的数据库系统（Disk-ORIENTED DBMS）")])]),t._v(" "),a("blockquote",[a("p",[t._v("大多数数据库都会有硬盘操作，当然也有完全建立在内存上的，比如redis")])]),t._v(" "),a("p",[a("strong",[t._v("数据库的存储的文件在磁盘中是以page为存储的，使用的时候也是将page加载到"),a("code",[t._v("Buffer pool")]),t._v("里面")])]),t._v(" "),a("p",[t._v("但是存在一个问题，就是内存肯定比磁盘小的多，不能把所有磁盘里的数据都加载到内存吧。所以后面就涉及到一系列问题，比如换页，优化等等。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208091947745.png",alt:"image-20231208091947745"}}),t._v(" "),a("h3",{attrs:{id:"mmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mmap"}},[t._v("#")]),t._v(" mmap")]),t._v(" "),a("p",[t._v("这里讨论一个问题**，就是我们知道操作系统比如linux，提供了虚拟内存技术，虚拟内存的大小可以和磁盘一样大，那么我们是否可以利用虚拟内存技术来存储数据库文件？**")]),t._v(" "),a("p",[t._v("这种方法就叫做Memory Mapping，也就是让数据库去存数据到虚拟内存上，"),a("strong",[t._v("让操作系统来管理哪些问页该置换等等")]),t._v("。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208093236677.png",alt:"image-20231208093236677"}}),t._v(" "),a("p",[a("strong",[t._v("但是这样是行不通的")]),t._v("，")]),t._v(" "),a("p",[t._v("1.首先假如磁盘已经满了，但是数据库还在申请新的页，那么操作系统就不知道该怎么办（因为他不知道哪些页可以扔掉。）")]),t._v(" "),a("p",[t._v("2.如果是在并发写发的情况下，情况会变得非常复杂。")]),t._v(" "),a("p",[t._v("不过仍然有一些办法，改良这种方法并应用到一些数据库上。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208093523588.png",alt:"image-20231208093523588"}}),t._v(" "),a("h3",{attrs:{id:"dbms应该自己管理内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dbms应该自己管理内存"}},[t._v("#")]),t._v(" "),a("strong",[t._v("DBMS应该自己管理内存")])]),t._v(" "),a("p",[t._v("根据上面的分析，我们应该知道数据库应该自己管理操作系统。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208093628525.png",alt:"image-20231208093628525"}}),t._v(" "),a("p",[t._v("要达成目标， 这方面需要解决两个问题")]),t._v(" "),a("ul",[a("li",[t._v("How the DBMS represents the database file on disk\n"),a("ul",[a("li",[t._v("File Storge  文件存储")]),t._v(" "),a("li",[t._v("Page Layout  页布局")]),t._v(" "),a("li",[t._v("Tuple Layout  元组（行）布局")])])]),t._v(" "),a("li",[t._v("How the DBMS manages its memory and moves data back-and-forth from disk")])]),t._v(" "),a("h4",{attrs:{id:"file-storege-数据库如何在磁盘上组织数据库文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-storege-数据库如何在磁盘上组织数据库文件"}},[t._v("#")]),t._v(" File Storege(数据库如何在磁盘上组织数据库文件)")]),t._v(" "),a("p",[a("strong",[t._v("FileStorage")]),t._v("： DBMS在磁盘上用一种预先定义的格式存储他的database file")]),t._v(" "),a("p",[a("strong",[t._v("Stograge manager:")]),t._v(" 存储管理器负责组织保持数据库文件")]),t._v(" "),a("ul",[a("li",[t._v("他们需要对读写操作进行一些scheduling，提升这些操作涉及到的页时空局部性。\n"),a("ul",[a("li",[t._v("我感觉就是通过调度读写操作，让这些操作尽量满足时空局部性原理，进而减少内存的页的置换提升效率？")])])]),t._v(" "),a("li",[t._v("It   organizes the files as a collection of pages\n"),a("ul",[a("li",[t._v("Tracks data  read/written to pages")]),t._v(" "),a("li",[t._v("Tracks the available space")])])])]),t._v(" "),a("p",[t._v("**DataBase Pages：**数据库的页")]),t._v(" "),a("ul",[a("li",[t._v("一个页实际上就是一个fix-size  block of data（固定大小的数据块）\n"),a("ul",[a("li",[t._v("他可以包含tuples，meta-data，index，log records")]),t._v(" "),a("li",[t._v("大多数数据库不会混合使用不同类型的页。也就是每个页是有类型的，比如哪种页存数据，就只存数据，哪种页存索引就只存索引，"),a("strong",[t._v("不会混合使用")])]),t._v(" "),a("li",[t._v("一些数据库要求页是self-contained （独立的），这里大概是这个页会有一些说明，告诉使用者自己到底存的什么。")])])]),t._v(" "),a("li",[t._v("每一个页都需要一个"),a("code",[t._v("unique identifier")]),t._v("，也就是pages ID\n"),a("ul",[a("li",[t._v("DBMS使用一种indirection laye 去映射 pages ID和physical Location（物理位置）")])])]),t._v(" "),a("li",[t._v("在DBMS中页的不同的概念,"),a("strong",[t._v("其中Hardware Pages是可以保证原子写操作的最小单位")]),t._v("（比如我写4KB的数据失败了，因为硬件页最小，所以我知道是4KB都失败了，但是我写16KB失败了，我就不知道16KB中哪些写成功，哪些写失败）\n"),a("ul",[a("li",[t._v("Hardware Page( usually  4KB)")]),t._v(" "),a("li",[t._v("OS Page(usually 4KB)")]),t._v(" "),a("li",[t._v("Database Page(512B-16KB)")]),t._v(" "),a("li",[t._v("下面是一些常见的数据库对页大小的定义")]),t._v(" "),a("li",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208100735390.png",alt:"image-20231208100735390"}})])])])]),t._v(" "),a("p",[a("strong",[t._v("DataBase Heap：数据库的堆文件，是一个元组按随机序列存储的关于页的无序集合")])]),t._v(" "),a("ul",[a("li",[t._v("拓展解释一下，就是说，"),a("strong",[t._v("这个堆就是页组成的文件，也即是一些页的集合(bags)")]),t._v("，因为页里面就是元组，所以堆也是元组的无序的集合")]),t._v(" "),a("li",[t._v("对于一个堆文件，应该支持以下操作\n"),a("ul",[a("li",[t._v("Create/Get/Write/Delete Page")]),t._v(" "),a("li",[t._v("支持迭代这个堆文件中所有的页")])])]),t._v(" "),a("li",[t._v("组织页称为堆文件的方式\n"),a("ul",[a("li",[a("strong",[t._v("挑战：如果只有一个heap里面，那么找一个页很容易。但是如何从多个heap中找到某一页呢？")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("需要使用"),a("code",[t._v("meta-data")]),t._v("来keep track（追踪）file存的页以及空页。")])])])]),t._v(" "),a("li",[t._v("Linked List  链表\n"),a("ul",[a("li",[t._v("比如链表，分别会用将空页链表起来并存个header，数据页也连接起来存个header")]),t._v(" "),a("li",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208102123328.png",alt:"image-20231208102123328"}})])])]),t._v(" "),a("li",[t._v("Page Directory 目录\n"),a("ul",[a("li",[t._v("这个更好理解了，就是直接来一个表，存了page的指针，直接去查就行")]),t._v(" "),a("li",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208103403948.png",alt:"image-20231208103403948"}})])])])])])]),t._v(" "),a("h4",{attrs:{id:"page-layout-页布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-layout-页布局"}},[t._v("#")]),t._v(" Page Layout(页布局)")]),t._v(" "),a("p",[a("strong",[t._v("PageHeader")])]),t._v(" "),a("p",[t._v("page的header会存一些数据，比如size，checkcum（校验码），事务可见性,压缩信息等等。")]),t._v(" "),a("p",[t._v("一些系统也要求page是"),a("code",[t._v("self-contained")]),t._v("的（比如Oracle），就是页要描述自己存的什么")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208103545498.png",alt:"image-20231208103545498"}}),t._v(" "),a("p",[a("strong",[t._v("PageLayout")])]),t._v(" "),a("p",[t._v("为了有结构的将页组织起来，我们还需要思考页里面的数据怎么存，这里依然假设页里面只存tuple。")]),t._v(" "),a("p",[t._v("页布局有两种方法（对于不同的数据）。")]),t._v(" "),a("ul",[a("li",[t._v("tuple oriented（"),a("strong",[t._v("主要是Slotted Pages模型")]),t._v("），存tuple")]),t._v(" "),a("li",[t._v("Log Structured(存log)")])]),t._v(" "),a("h5",{attrs:{id:"tuple-oriented-slotted-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuple-oriented-slotted-page"}},[t._v("#")]),t._v(" Tuple Oriented(Slotted page*)")]),t._v(" "),a("p",[t._v("这里先只看"),a("strong",[t._v("Tuple Oriented")]),t._v("。")]),t._v(" "),a("p",[t._v("如果存元组，最简单的想法就是直接把元组一行行存进去。")]),t._v(" "),a("ul",[a("li",[t._v("但是存在问题，比如"),a("strong",[t._v("删除")]),t._v("tuple2，插入tuple4。有可能tuple4比tuple2长，存不进去。并且可能打乱他本来有的顺序。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208111132886.png",alt:"image-20231208111132886"}})]),t._v(" "),a("p",[a("strong",[t._v("所以想出了Slotted Pages")])]),t._v(" "),a("blockquote",[a("p",[t._v("我喜欢英文讲义的一句话概括: "),a("strong",[t._v("Page  maps slots to offsets")])]),t._v(" "),a("p",[t._v("这也是现在用的最多的数据库的页布局的方法。")])]),t._v(" "),a("p",[a("strong",[t._v("Slotted pages")]),t._v(":  "),a("strong",[t._v("Header后面存的是slot，slot里记录tuple的索引(slot应该时有序的)，这样的好处就是tuple可以随便存，只要维护slot即可")])]),t._v(" "),a("ul",[a("li",[t._v("这样最大的好处就是"),a("strong",[t._v("不用管后面的tuple的的 长度和顺序")]),t._v("，可以随便存")]),t._v(" "),a("li",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208111219834.png",alt:"image-20231208111219834"}})])]),t._v(" "),a("p",[a("strong",[t._v("Records IDS")])]),t._v(" "),a("p",[t._v("对于数据库来说，一条记录的ID是一般两部分组成"),a("code",[t._v("page_id+offset/slot")]),t._v(".")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208105319130.png",alt:"image-20231208105319130"}}),t._v(" "),a("h5",{attrs:{id:"log-structured-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-structured-storage"}},[t._v("#")]),t._v(" Log-Structured Storage")]),t._v(" "),a("p",[t._v("在面向tuple存储的方法中（就是指slot page）的设计中，存在一些问题：")]),t._v(" "),a("ul",[a("li",[t._v("Fragmentation（碎片化）：Deletion of tuples can leave gaps in the pages（删除元组会在页之间留下一些间隔）")]),t._v(" "),a("li",[t._v("Useless Disk I/O（无用的磁盘I/O）: Due to the block-oriented nature of non-volatile storage, the whole block needs to be read to fetch a tuple。\n"),a("ul",[a("li",[t._v("解释：由于非易失性存储的面向块的性质，需要读取整个块才能获取元组")])])]),t._v(" "),a("li",[t._v("Random Disk I/O（随机的磁盘I/O）:The disk reader could have to jump to 20 different places to update 20 different tuples, which can be very slow\n"),a("ul",[a("li",[t._v("解释：磁盘读取器可能必须跳转到 20 个不同的位置来更新 20 个不同的元组，这可能非常慢")])])])]),t._v(" "),a("p",[t._v("因此我们另一种模型，不存tuple，存log records。")]),t._v(" "),a("p",[a("strong",[t._v("Log-Streuctured")])]),t._v(" "),a("p",[t._v("从上往下的加入Entry，那么读的时候就从下往上")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"C:/Users/28788/AppData/Roaming/Typora/typora-user-images/image-20231208150014259.png",alt:"image-20231208150014259"}}),t._v(" "),a("p",[t._v("建立索引，允许去随机的访问log")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"C:/Users/28788/AppData/Roaming/Typora/typora-user-images/image-20231208150107181.png",alt:"image-20231208150107181"}}),t._v(" "),a("p",[a("strong",[t._v("日志压缩")])]),t._v(" "),a("p",[t._v("但是如果记录所有的日志，肯定会很大，所以一般会周期性的进行日志压缩。")]),t._v(" "),a("p",[t._v("这种Log Structured的方法一般用于KV数据库")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"C:/Users/28788/AppData/Roaming/Typora/typora-user-images/image-20231208150358080.png",alt:"image-20231208150358080"}}),t._v(" "),a("p",[t._v("压缩可以有多种思路，这里稍微介绍一下分层压缩(RocksDB的思路)")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"C:/Users/28788/AppData/Roaming/Typora/typora-user-images/image-20231208150610786.png",alt:"image-20231208150610786"}}),t._v(" "),a("h4",{attrs:{id:"tuple-layout-数据本身布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuple-layout-数据本身布局"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Tuple Layout（数据本身布局）")])]),t._v(" "),a("p",[a("strong",[t._v("Tuple header")])]),t._v(" "),a("p",[t._v("这里关注null。这里用一个bitmap来记录。比如这里是8个字节大小的数据，我就用8bit的bitmap表示其是否为null。")]),t._v(" "),a("blockquote",[a("p",[t._v("为什么需要预先定义一个bitmap表示是否为null？为了提前知道这个数据是否为null，避免读的时候发生一些错误")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208105145340.png"}}),t._v(" "),a("p",[t._v("对于tuple其中的列，"),a("strong",[t._v("一般典型的做法都是按顺序存")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208111848304.png",alt:"image-20231208111848304"}}),t._v(" "),a("p",[a("strong",[t._v("Denormalized Tuple Data:")]),t._v("（拓展，不是重点）")]),t._v(" "),a("blockquote",[a("p",[t._v("非正规的  Denormalized")])]),t._v(" "),a("p",[t._v("曾经出现过的一些奇葩的想法。")]),t._v(" "),a("p",[t._v("对于两个连表，比如下面的foo和bar，其实可以合成一张表。但是定义时是两张表。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208112026503.png",alt:"image-20231208112026503"}}),t._v(" "),a("p",[t._v("那么在数据库就把他弄成一张表，因为可能他们经常一起使用。")]),t._v(" "),a("p",[a("strong",[t._v("但是这样不好，今天基本没有这么做的")])]),t._v(" "),a("blockquote",[a("p",[t._v("因为这有点越界了，这不是数据库该管的，而是业务人员的事")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231208104904025.png",alt:"image-20231208104904025"}}),t._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("ul",[a("li",[t._v("Database  is organized in pages")]),t._v(" "),a("li",[t._v("Different ways to track pages")]),t._v(" "),a("li",[t._v("Different ways to store pages")]),t._v(" "),a("li",[t._v("Different ways to store tuples")])])])}),[],!1,null,null,null);a.default=s.exports}}]);