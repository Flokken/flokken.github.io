(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{572:function(t,a,o){"use strict";o.r(a);var r=o(4),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("从这一节开始，开始讨论的是DBMS如何执行查询。")]),t._v(" "),a("p",[t._v("我们的课程是自底向上的，前面学习了磁盘管理，缓冲池，访问方法（其实就是索引的数据结构?），接下来学习"),a("code",[t._v("operator execution")]),t._v("(操作执行)")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215110041563.png",alt:"image-20231215110041563"}}),t._v(" "),a("h2",{attrs:{id:"disk-oriented-dbms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disk-oriented-dbms"}},[t._v("#")]),t._v(" Disk-Oriented  DBMS")]),t._v(" "),a("p",[t._v("我们这个课程研究的是面对硬盘的数据库。所以我们不能考虑把查询都放到内存中")]),t._v(" "),a("ul",[a("li",[t._v("我们应该结合使用缓存池和磁盘（比如中间结果也可能存磁盘）")]),t._v(" "),a("li",[t._v("我们希望算子（算法）能最大化的顺序读取磁盘的次数")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215111159948.png",alt:"image-20231215111159948"}}),t._v(" "),a("h3",{attrs:{id:"为啥要排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥要排序"}},[t._v("#")]),t._v(" 为啥要排序？")]),t._v(" "),a("p",[t._v("关系模型(Relational Model)是"),a("code",[t._v("unsorted")]),t._v("的,但是查询很多时候要求返回的结果有序，或者进行分组啥的，我们需要进行排序，比如")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215112741939.png",alt:"image-20231215112741939"}}),t._v(" "),a("h3",{attrs:{id:"external-merge-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-merge-sort"}},[t._v("#")]),t._v(" External  Merge Sort")]),t._v(" "),a("blockquote",[a("p",[t._v("外部归并排序")])]),t._v(" "),a("p",[t._v("我们知道很多排序算法，比如冒泡，快排等等，但是他都有一个问题， "),a("strong",[t._v("就是他们需要把数据都加载到内存，但是数据库数据太多了，不能都加载到内存中")])]),t._v(" "),a("p",[t._v("所以我们需要一种方法，先把数据分块，然后把这一块数据先排序了，然后再把所有的块排序。")]),t._v(" "),a("p",[t._v("而归并排序是就将数据先分块，然后块内有序之后再排序。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215112615037.png",alt:"image-20231215112615037"}}),t._v(" "),a("h4",{attrs:{id:"sorted-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sorted-run"}},[t._v("#")]),t._v(" Sorted Run")]),t._v(" "),a("blockquote",[a("p",[t._v("这里理解为排序怎么进行的")])]),t._v(" "),a("p",[t._v("在数据库之中，我们排序实际上就是要排序KV对")]),t._v(" "),a("blockquote",[a("p",[t._v("因为我们存的都是kv对")]),t._v(" "),a("p",[t._v("materialization,物化")])]),t._v(" "),a("p",[t._v("在给定排序属性k的情况下，value有两种排序选择")]),t._v(" "),a("ul",[a("li",[t._v("早物化，值得是元组都跟着这个属性被排序")]),t._v(" "),a("li",[t._v("晚物化，只有ID跟着Key被排序，如果访问到这个ID，再去查他原来的tuple")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215113518132.png",alt:"image-20231215113518132"}}),t._v(" "),a("h4",{attrs:{id:"_2-way-external-merge-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-way-external-merge-sort"}},[t._v("#")]),t._v(" 2-Way  External  Merge Sort")]),t._v(" "),a("blockquote",[a("p",[t._v("way可以理解为度/阶")])]),t._v(" "),a("ul",[a("li",[t._v("n-way代表数据被分为n页")]),t._v(" "),a("li",[t._v("B代表DBMS缓冲池需要的页数（frame 数）")])]),t._v(" "),a("blockquote",[a("p",[t._v("比如2度，对应就需要B=3，也就是3页就够了")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215140756256.png",alt:"image-20231215140756256"}}),t._v(" "),a("p",[a("strong",[t._v("外部排序过程示例")])]),t._v(" "),a("p",[t._v("简单说来就是磁盘里有两个页，那么先读一个页到内存并把排序后的结果写回磁盘，另一个页也这么干；然后从磁盘把这两个页的排序结果读取到内存再进行merge，得到最终的结果。")]),t._v(" "),a("blockquote",[a("p",[t._v("PPT上是递归的写法")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215141133367.png",alt:"image-20231215141133367"}}),t._v(" "),a("p",[t._v("Pass指的是读取所有页然后排序后写回磁盘")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215141545612.png",alt:"image-20231215141545612"}}),t._v(" "),a("h5",{attrs:{id:"double-buffering-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-buffering-optimization"}},[t._v("#")]),t._v(" Double Buffering   Optimization")]),t._v(" "),a("p",[t._v("这里我们想到一个事情，对于2阶的外部归并排序，我们发现只需要B=3，三个缓冲池页就可以了。但是数据库缓冲池肯定没这么小，比如Mysql一页才几k，3页才几十k，而缓冲池几个G很正常。")]),t._v(" "),a("blockquote",[a("p",[t._v("2个input页，一个output输出页。")])]),t._v(" "),a("p",[t._v("所以我们应该进行一些优化充分利用内存。")]),t._v(" "),a("p",[a("strong",[t._v("预取")])]),t._v(" "),a("p",[t._v("所以有一种方法就是使用两倍大小的buffer页（比如2路，B原来为3，现在B=6），把下一次要读的装到第二个buffer页里，可以减少I/O")]),t._v(" "),a("blockquote",[a("p",[t._v("但是显然的，好像也没利用多少")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215142118737.png",alt:"image-20231215142118737"}}),t._v(" "),a("h5",{attrs:{id:"general-external-merage-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-external-merage-sort"}},[t._v("#")]),t._v(" General  External  Merage Sort")]),t._v(" "),a("p",[t._v("这里的思想是每次使用所有的buffer页进行读写pages，每次passes  减1.")]),t._v(" "),a("blockquote",[a("p",[t._v("之前都是一次只读一页/两页，然后写回去")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215142908813.png",alt:"image-20231215142908813"}}),t._v(" "),a("p",[t._v("举例")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215143235988.png",alt:"image-20231215143235988"}}),t._v(" "),a("h3",{attrs:{id:"b-tree-for-sorting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-for-sorting"}},[t._v("#")]),t._v(" B+ Tree  For  Sorting")]),t._v(" "),a("p",[t._v("B+树叶子节点就是有序的，所以当然也可以拿来做排序")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215145521192.png",alt:"image-20231215145521192"}}),t._v(" "),a("p",[t._v("这里还要考虑聚簇和非聚簇")]),t._v(" "),a("blockquote",[a("p",[t._v("聚簇和前面的materialization一样的含义，聚簇就是整个tuple一起，非聚簇就是只有ID，你用到这条记录时，根据ID去查。")]),t._v(" "),a("p",[t._v("早物化可以看成聚簇")]),t._v(" "),a("p",[t._v("晚物化看成非聚簇")])]),t._v(" "),a("p",[t._v("聚簇索引")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215145401834.png",alt:"image-20231215145401834"}}),t._v(" "),a("p",[t._v("非聚簇索引，还需要去找数据，需要额外的磁盘I/O")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215145432791.png",alt:"image-20231215145432791"}}),t._v(" "),a("h3",{attrs:{id:"aggregations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregations"}},[t._v("#")]),t._v(" Aggregations")]),t._v(" "),a("p",[t._v("聚集就是对多个单一用某种计算，得到一个值")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215145617624.png",alt:"image-20231215145617624"}}),t._v(" "),a("p",[t._v("有两种实现方案：")]),t._v(" "),a("ul",[a("li",[t._v("Hash")]),t._v(" "),a("li",[t._v("Sort")])]),t._v(" "),a("h4",{attrs:{id:"sorting-aggregation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sorting-aggregation"}},[t._v("#")]),t._v(" Sorting Aggregation")]),t._v(" "),a("p",[t._v("如果结果需要排序，比如下面的query，将成绩为B，C的cid查询出来并排序，并且不能重复")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215145746788.png",alt:"image-20231215145746788"}}),t._v(" "),a("h4",{attrs:{id:"hashing-aggreation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashing-aggreation"}},[t._v("#")]),t._v(" Hashing  Aggreation")]),t._v(" "),a("p",[t._v("如果结果不涉及排序，那么我们可以考虑用Hash进行聚集")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215145931008.png",alt:"image-20231215145931008"}}),t._v(" "),a("p",[t._v("Hash需要两步：分块和reHash")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215150045691.png",alt:"image-20231215150045691"}}),t._v(" "),a("p",[a("strong",[t._v("下面是External  Hashing")])]),t._v(" "),a("blockquote",[a("p",[t._v("下面以Distinct操作来考虑hash如何完成")])]),t._v(" "),a("h5",{attrs:{id:"partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partition"}},[t._v("#")]),t._v(" Partition")]),t._v(" "),a("p",[t._v("首先使用第一个hash函数将元组分到磁盘上的不同块/bucket里")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215150128010.png",alt:"image-20231215150128010"}}),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215150335929.png",alt:"image-20231215150335929"}}),t._v(" "),a("h5",{attrs:{id:"rehash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rehash"}},[t._v("#")]),t._v(" Rehash")]),t._v(" "),a("p",[t._v("rehash指的是用h2(另一个hash函数)，把数据从磁盘读到内存")]),t._v(" "),a("blockquote",[a("p",[t._v("为什么要rehash?没有太理解")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215150357076.png",alt:"image-20231215150357076"}}),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215150447125.png",alt:"image-20231215150447125"}}),t._v(" "),a("h5",{attrs:{id:"summarization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summarization"}},[t._v("#")]),t._v(" Summarization")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215150553221.png",alt:"image-20231215150553221"}}),t._v(" "),a("p",[t._v("对于不同的计算函数，中间值是不一样的")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215151557926.png",alt:"image-20231215151557926"}}),t._v(" "),a("h3",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当前用排序还是哈希，取决于每个阶段用的什么")])]),t._v(" "),a("li",[a("p",[t._v("排序优化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("增大I/O块（比如prefetch）")])]),t._v(" "),a("li",[a("p",[t._v("双倍缓冲页平衡I/O和CPU")])])])])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231215150700258.png",alt:"image-20231215150700258"}})])}),[],!1,null,null,null);a.default=s.exports}}]);