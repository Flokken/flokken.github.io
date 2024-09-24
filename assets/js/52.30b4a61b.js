(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{381:function(t,v,n){"use strict";n.r(v);var _=n(4),N=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("参考")]),t._v(" "),v("blockquote",[v("p",[t._v("https://zhuanlan.zhihu.com/p/435866777")]),t._v(" "),v("p",[t._v("https://zhuanlan.zhihu.com/p/71200936")]),t._v(" "),v("p",[t._v("[原文博客]https://tkipf.github.io/graph-convolutional-networks/")]),t._v(" "),v("p",[t._v("并非为了学术学习，因此重在理解并应用")])]),t._v(" "),v("p",[t._v("在扎进GCN的汪洋大海前，我们先搞清楚这个玩意儿是做什么的，有什么用。")]),t._v(" "),v("p",[t._v("深度学习一直都是被几大经典模型给统治着，如CNN、RNN等等，它们无论再CV还是NLP领域都取得了优异的效果，那这个GCN是怎么跑出来的？是因为我们发现了很多CNN、RNN无法解决或者效果不好的问题——图结构的数据。")]),t._v(" "),v("p",[t._v("回忆一下，我们做图像识别，对象是图片，是一个二维的结构，于是人们发明了CNN这种神奇的模型来提取图片的特征。CNN的核心在于它的kernel，kernel是一个个小窗口，在图片上平移，通过卷积的方式来提取特征。这里的关键在于图片结构上的"),v("strong",[t._v("平移不变性")]),t._v("：一个小窗口无论移动到图片的哪一个位置，其内部的结构都是一模一样的，因此CNN可以实现"),v("strong",[t._v("参数共享")]),t._v("。这就是CNN的精髓所在。")]),t._v(" "),v("p",[t._v("再回忆一下RNN系列，它的对象是自然语言这样的序列信息，是一个一维的结构，RNN就是专门针对这些序列的结构而设计的，通过各种门的操作，使得序列前后的信息互相影响，从而很好地捕捉序列的特征。")]),t._v(" "),v("p",[t._v("上面讲的图片或者语言，都属于"),v("strong",[t._v("欧式空间")]),t._v("的数据，因此才有维度的概念，欧式空间的数据的特点就是结构很规则。但是现实生活中，其实有很多很多不规则的数据结构，典型的就是图结构，或称拓扑结构，如社交网络、化学分子结构、知识图谱等等；即使是语言，实际上其内部也是复杂的树形结构，也是一种图结构；而像图片，在做目标识别的时候，我们关注的实际上只是二维图片上的部分关键点，这些点组成的也是一个图的结构。")]),t._v(" "),v("p",[t._v("图的结构一般来说是十分不规则的，可以认为是"),v("strong",[t._v("无限维")]),t._v("的一种数据，所以它"),v("strong",[t._v("没有平移不变性")]),t._v("。每一个节点的周围结构可能都是独一无二的，这种结构的数据，就让传统的CNN、RNN瞬间失效。所以很多学者从上个世纪就开始研究怎么处理这类数据了。这里涌现出了很多方法，例如GNN、DeepWalk、node2vec等等，GCN只是其中一种，这里只讲GCN，其他的后面有空再讨论。GCN，图卷积神经网络，实际上跟CNN的作用一样，就是一个特征提取器，只不过它的对象是图数据。GCN精妙地设计了一种从图数据中提取特征的方法，从而让我们可以使用这些特征去对图数据进行"),v("strong",[t._v("节点分类（node classification）、图分类（graph classification）、边预测（link prediction）")]),t._v("，还可以顺便得到"),v("strong",[t._v("图的嵌入表示（graph embedding）")]),t._v("，可见用途广泛。因此现在人们脑洞大开，让GCN到各个领域中发光发热。")])])}),[],!1,null,null,null);v.default=N.exports}}]);