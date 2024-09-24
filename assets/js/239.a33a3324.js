(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{568:function(t,a,o){"use strict";o.r(a);var s=o(4),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"buffer-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool"}},[t._v("#")]),t._v(" Buffer Pool")]),t._v(" "),a("p",[t._v("这里的Buffer Pool其实就是内存池。")]),t._v(" "),a("p",[t._v("概括一下今天的问题：DBMS如何管理数据在内存和磁盘之间的流动？")]),t._v(" "),a("blockquote",[a("p",[t._v("How the DBMS manages its memory and move datra back-and-forth from disk?")])]),t._v(" "),a("p",[t._v("内存中永远只能存磁盘的一部分，用户会读写数据库，内存中的数据就需要和磁盘的数据进行置换，这就是要进行的数据流动。")]),t._v(" "),a("p",[t._v("这个问题涉及两个方面：")]),t._v(" "),a("ul",[a("li",[t._v("Spatial Control:空间上的控制\n"),a("ul",[a("li",[t._v("页应该写到磁盘的哪里")]),t._v(" "),a("li",[t._v("我们的目标应该要把用户经常用的数据读到内存中")])])]),t._v(" "),a("li",[t._v("Temporal Control:\n"),a("ul",[a("li",[t._v("什么时候把磁盘上的页读到内存，什么时候把他们写回硬盘")]),t._v(" "),a("li",[t._v("我们的目标是最大限度的减少用户等待磁盘的时间")])])])]),t._v(" "),a("p",[t._v("Disk-Oriented DBMS(面向磁盘的DBMS底层)")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210093729830.png",alt:"image-20231210093729830"}}),t._v(" "),a("h3",{attrs:{id:"buffer-pool-organization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool-organization"}},[t._v("#")]),t._v(" Buffer Pool  Organization")]),t._v(" "),a("p",[t._v("内存池的基本单元叫做Frame(帧)，一般来说，一帧就可以存磁盘上的一页。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210094049561.png",alt:"image-20231210094049561"}}),t._v(" "),a("h3",{attrs:{id:"buffer-pool-meta-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool-meta-data"}},[t._v("#")]),t._v(" Buffer Pool Meta-data")]),t._v(" "),a("p",[t._v("内存池一般也有几个G，也会有非常多的帧，管理起来当然很麻烦，所以有一个page table来记录内存中的页(对应的帧)。")]),t._v(" "),a("p",[a("strong",[t._v("Pagetable还会管理页的锁")]),t._v("。（比如我们内存页写入时，肯定时并发操作，所以要用到锁避免冲突）")]),t._v(" "),a("p",[t._v("每个页还有一些元数据。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Dirty Flag")])]),t._v(" "),a("li",[a("strong",[t._v("Pin/reference Counter")])])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210094345419.png",alt:"image-20231210094345419"}}),t._v(" "),a("h4",{attrs:{id:"locks-vs-latches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#locks-vs-latches"}},[t._v("#")]),t._v(" Locks  Vs Latches")]),t._v(" "),a("p",[t._v("Lock是抽象的，逻辑上的锁。（比如我要安一个锁）")]),t._v(" "),a("p",[t._v("Latches是具体的手段（比如我把门锁了），"),a("strong",[t._v("也称为Mutex")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210094755491.png",alt:"image-20231210094755491"}}),t._v(" "),a("h4",{attrs:{id:"pagetable-vs-page-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagetable-vs-page-directory"}},[t._v("#")]),t._v(" PageTable  vs Page Directory")]),t._v(" "),a("p",[t._v("这个很简单，内存池里的页索引表是page table，磁盘上页的索引表是page directory")]),t._v(" "),a("h3",{attrs:{id:"multiple-buffer-bools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-buffer-bools"}},[t._v("#")]),t._v(" Multiple Buffer Bools")]),t._v(" "),a("p",[t._v("很多数据库对于不同的模块有专门的内存池，而不是只用一个。")]),t._v(" "),a("blockquote",[a("p",[t._v("这样做可以降低Latch contention，如果只有一个缓存池，并发操作时可能会有很多冲突。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210095444534.png",alt:"image-20231210095444534"}}),t._v(" "),a("p",[a("strong",[t._v("两种实现不同缓存池的策略")]),t._v("：不同的缓存池其实也是逻辑上的划分，因此我们需要建立一种逻辑到物理上的映射。才能让页存取时实现多个缓存池的效果。")]),t._v(" "),a("ul",[a("li",[t._v("Id")]),t._v(" "),a("li",[t._v("Hash")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210095647264.png",alt:"image-20231210095647264"}}),t._v(" "),a("h3",{attrs:{id:"pre-fetching-预读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-fetching-预读取"}},[t._v("#")]),t._v(" Pre-Fetching(预读取)")]),t._v(" "),a("p",[t._v("对于一些场景，比如全表扫描，DBMS可以进去预读取操作，来进行优化")]),t._v(" "),a("p",[t._v("Sequence Scan")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210095949101.png",alt:"image-20231210095949101"}}),t._v(" "),a("p",[t._v("index-Scan：这个跟我们底部索引的组织有关系。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210100403506.png",alt:"image-20231210100403506"}}),t._v(" "),a("p",[t._v("因为我们一般索引都是树形结构，所以我们也可以根据当前的结果，知道下面要读哪些节点，进而把哪些page预加载进来。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210100206177.png",alt:"image-20231210100206177"}}),t._v(" "),a("h3",{attrs:{id:"scan-sharing-共享扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scan-sharing-共享扫描"}},[t._v("#")]),t._v(" SCAN Sharing(共享扫描)")]),t._v(" "),a("p",[t._v("共享扫描，也是一种优化策略。就是指如果有多个查询再查一个表，那么可以把他们合成一个扫描，也叫"),a("code",[t._v("synchronized scans")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210100846907.png",alt:"image-20231210100846907"}}),t._v(" "),a("p",[t._v("比如下面的场景：一个查询在扫描一个表，这个时候又来一个查询做同样的操作，那么这两个操作可以合成一个，（注意这里的公用一个索引）")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210100650218.png",alt:"image-20231210100650218"}}),t._v(" "),a("p",[t._v("EX：")]),t._v(" "),a("p",[t._v("Q1，Q2合成一个共享扫描")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210101138915.png",alt:"image-20231210101138915"}}),t._v(" "),a("p",[t._v("但是这是有可能出现一些问题，比如如果Q2限制100个的平均值，他可能返回的结果不是前100个数据的均值。")]),t._v(" "),a("p",[t._v("因为共享扫描的时候，他的"),a("strong",[t._v("cursor")]),t._v("是跟着Q1一起的，比如下面是从第二个开始的。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210101117097.png",alt:"image-20231210101117097"}}),t._v(" "),a("h3",{attrs:{id:"buffer-pool-bypass-旁路缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool-bypass-旁路缓存"}},[t._v("#")]),t._v(" Buffer Pool Bypass(旁路缓存)")]),t._v(" "),a("blockquote",[a("p",[t._v("bypass 可以翻译成旁路或者绕过")])]),t._v(" "),a("p",[t._v("也是针对一些场景的优化。在一些操作中，我们只使用一次数据，那么我们就不用维护这些数据跟磁盘页的关系。"),a("strong",[t._v("所以可以把这些数据读入一些不是缓冲池的内存，用完了就释放，不进内存池")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210101731890.png",alt:"image-20231210101731890"}}),t._v(" "),a("h3",{attrs:{id:"os-page-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-page-cache"}},[t._v("#")]),t._v(" OS Page CACHE")]),t._v(" "),a("p",[t._v("操作系统很多时候在我们的DBMS进行磁盘IO时也会有缓存，但是它是冗余的，和我们DBMS的缓存冲突，需要bypass(绕过)")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210102050579.png",alt:"image-20231210102050579"}}),t._v(" "),a("h2",{attrs:{id:"buffer-replacement-policies-缓存替换策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-replacement-policies-缓存替换策略"}},[t._v("#")]),t._v(" Buffer Replacement Policies（缓存替换策略）")]),t._v(" "),a("p",[t._v("当我们的缓存满了，但是要插入一个新页时，就需要决定"),a("code",[t._v("evict")]),t._v("（驱逐）缓冲池里的那个页。")]),t._v(" "),a("p",[a("strong",[t._v("goal")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("Correctness")]),t._v(" "),a("li",[t._v("accuracy")]),t._v(" "),a("li",[t._v("speed")]),t._v(" "),a("li",[t._v("meta-data  overhead(元数据开销)")])]),t._v(" "),a("h3",{attrs:{id:"least-recently-used-lru"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#least-recently-used-lru"}},[t._v("#")]),t._v(" Least-RecentLy Used(LRU)")]),t._v(" "),a("p",[a("strong",[t._v("很出名的最近做少使用替换算法，LRU")])]),t._v(" "),a("p",[t._v("这个算法思想也很朴素：")]),t._v(" "),a("p",[t._v("对所有的页维护一个timestamp记录上次访问时间，然后进行排序，把最久没使用的丢了就行。"),a("strong",[t._v("但是这样做开销非常大，因为要维护所有页的时间，并进行整个page table的排序")])]),t._v(" "),a("h4",{attrs:{id:"sequential-floofing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequential-floofing"}},[t._v("#")]),t._v(" Sequential Floofing")]),t._v(" "),a("p",[t._v("在一些workloads（理解为工作情况）里，LRU不一定好用，比如全表扫描，刚刚读进来的数据也是再也用不到了，但是他的优先级最高。")]),t._v(" "),a("p",[t._v("下面是举例：")]),t._v(" "),a("p",[t._v("假如Q1对page0进行点查询，Q2进行全表扫描。当Q2扫描到page3时，page0由于最久没使用，丢掉了。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210105027651.png",alt:"image-20231210105027651"}}),t._v(" "),a("p",[t._v("但是这时候，又来一个Q3，查page0，那么又得把page1踢掉，把page0加载进来。")]),t._v(" "),a("p",[t._v("这就很浪费了，刚刚踢掉，然后马上又加载回来。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210103342087.png",alt:"image-20231210103342087"}}),t._v(" "),a("p",[t._v("所以可以对LRU进行一些优化，下面是一些方法：")]),t._v(" "),a("h4",{attrs:{id:"lru-k"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lru-k"}},[t._v("#")]),t._v(" LRU-K")]),t._v(" "),a("p",[a("strong",[t._v("对于页，不是只记录上一次使用的时间，而是记录K次，然后从这k次来判断这个页的优先级")])]),t._v(" "),a("blockquote",[a("p",[t._v("这里还讲了一个中clock的置换方法，大同小异，为了让篇幅短点，没有记录")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210105334230.png",alt:"image-20231210105334230"}}),t._v(" "),a("h4",{attrs:{id:"localization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localization"}},[t._v("#")]),t._v(" Localization")]),t._v(" "),a("p",[t._v("其实很好理解，某个query  evict pages时，不要直接清楚，还要看看其他Query是不是也用了这个页，不要随便清理别人也用的")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210105657229.png",alt:"image-20231210105657229"}}),t._v(" "),a("h4",{attrs:{id:"priority-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priority-hints"}},[t._v("#")]),t._v(" Priority Hints")]),t._v(" "),a("p",[t._v("就是DBMS直接发出指令，那些缓存更重要")]),t._v(" "),a("p",[a("strong",[t._v("比如根节点基本都会一直存在于缓存")])]),t._v(" "),a("blockquote",[a("p",[t._v("基本所有数据库都会开机就把根节点加载到缓存，然后从不清理")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210105630332.png",alt:"image-20231210105630332"}}),t._v(" "),a("h2",{attrs:{id:"dirty-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dirty-pages"}},[t._v("#")]),t._v(" Dirty Pages")]),t._v(" "),a("p",[t._v("Dirty Pages，指的是我们修改了但是还没保存的页，就叫脏页。")]),t._v(" "),a("p",[t._v("这里就有一个trade-off:我们是马上写回脏页还是等待一会找合适的时机写回数据库。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210110100286.png",alt:"image-20231210110100286"}}),t._v(" "),a("p",[t._v("一般来说常用的是不会马上写，而是后面找机会写回**，也叫刷脏**")]),t._v(" "),a("p",[t._v("但是这样脏页持久化也会有问题，比如脏页还没有写回，但是断电了，就会导致丢失。")]),t._v(" "),a("p",[t._v("所以常常也会写一个日志来维护脏页，同通常是先写了log到磁盘，才能持久化脏页的操作")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210110310268.png",alt:"image-20231210110310268"}}),t._v(" "),a("h2",{attrs:{id:"other-memory-pools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-memory-pools"}},[t._v("#")]),t._v(" other memory pools")]),t._v(" "),a("p",[t._v("数据库不止要缓存数据，还应该缓存日志，目录，query等等")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210110330210.png",alt:"image-20231210110330210"}}),t._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("DBMS管理缓存总是优于数据库帮我们管理的")]),t._v(" "),a("blockquote",[a("p",[t._v("因为数据库知道页的使用情况，所以能做出更好的策略")])]),t._v(" "),a("p",[t._v("还讲了一些优化方法，比如evict数据，pre-fetch等等")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231210104259206.png",alt:"image-20231210104259206"}})])}),[],!1,null,null,null);a.default=r.exports}}]);