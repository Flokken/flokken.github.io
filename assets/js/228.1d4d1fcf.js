(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{556:function(_,v,t){"use strict";t.r(v);var e=t(4),l=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"引言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[_._v("#")]),_._v(" 引言")]),_._v(" "),v("p",[_._v("我们在应用Redis做缓存时，主要是想让他缓存会被反复访问的数据（比如热点key），那就能加速业务应用的访问。")]),_._v(" "),v("p",[_._v("但是，如果发生了缓存污染，那么，缓存对业务应用的加速作用就减少了。")]),_._v(" "),v("blockquote",[v("p",[_._v("回看这篇文章，其实缓存的这么多策略啊啥的，就是要尽量提高应该程序访问缓存时的命中率，这样缓存才有意义。")])]),_._v(" "),v("p",[_._v("**什么是缓存污染呢？**在一些场景下，有些数据被访问的次数非常少，甚至只会被访问一次。当这些数据服务完访问请求后，如果还继续留存在缓存中的话，就只会白白占用缓存空间。这种情况，就是缓存污染。")]),_._v(" "),v("p",[_._v("当缓存污染不严重时，只有少量数据占据缓存空间，此时，对缓存系统的影响不大。但是，缓存污染一旦变得严重后，就会有大量不再访问的数据滞留在缓存中。如果这时数据占满了缓存空间，我们再往缓存中写入新数据时，就需要先把这些数据**逐步淘汰出缓存，**这就会引入额外的操作时间开销，进而会影响应用的性能。")]),_._v(" "),v("h2",{attrs:{id:"如何解决缓存污染问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何解决缓存污染问题"}},[_._v("#")]),_._v(" 如何解决缓存污染问题？")]),_._v(" "),v("p",[_._v("要解决缓存污染，"),v("strong",[_._v("那就是得把不会再被访问的数据筛选出来并淘汰掉")])]),_._v(" "),v("blockquote",[v("p",[_._v("这样就不用等到缓存被写满以后，再逐一淘汰旧数据之后，才能写入新数据了")])]),_._v(" "),v("p",[_._v("这时候我们就想起了之前了解过的8种缓存淘汰策略，noeviction、volatile-random、volatile-ttl、volatile-lru、volatile-lfu、allkeys-lru、allkeys-random和allkeys-lfu策略。")]),_._v(" "),v("blockquote",[v("p",[_._v("volatile 意思是不稳定的，容易变化的。")]),_._v(" "),v("p",[_._v("上面的策略中，后面的random，ttl，lru等代表删除方法，前缀代表删除的"),v("code",[_._v("key-value")]),_._v("的范围")]),_._v(" "),v("p",[_._v("以"),v("code",[_._v("volatile")]),_._v("为前缀的策略范围是设置了过期时间的key")]),_._v(" "),v("p",[_._v("以"),v("code",[_._v("allkeys")]),_._v("为前缀的策略范围是所有key")])]),_._v(" "),v("p",[_._v("noeviction策略（也是默认策略，满了直接报错，不能写入了）是不会进行数据淘汰的。所以，它肯定不能用来解决缓存污染问题。其他的7种策略，都会按照一定的规则来淘汰数据，我们分析一下那些策略有效。")]),_._v(" "),v("p",[_._v("我们可以先给这些方法分组，分别是random,ttl,lru,lfu。")]),_._v(" "),v("p",[_._v("先分析简单点的random和ttl。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("volatile-random和allkeys-random")]),_._v("这两种策略:")])]),_._v(" "),v("p",[_._v("它们都是采用随机挑选数据的方式，来筛选即将被淘汰的数据。")]),_._v(" "),v("p",[_._v("既然是随机挑选，那么Redis就不会根据数据的访问情况来筛选数据。如果被淘汰的数据又被访问了，就会发生缓存缺失。也就是说，应用需要到后端数据库中访问这些数据，降低了应用的请求响应速度。所以，volatile-random和allkeys-random策略，在避免缓存污染这个问题上的效果非常有限。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("volatile-ttl")])])]),_._v(" "),v("p",[_._v("volatile-ttl针对的是设置了过期时间的数据，把这些数据中剩余存活时间最短的筛选出来并淘汰掉。")]),_._v(" "),v("p",[_._v("剩余存活时间并不能直接反映数据再次访问的情况。所以，按照volatile-ttl策略淘汰数据，和按随机方式淘汰数据类似，也可能出现数据被淘汰后，被再次访问导致的缓存缺失问题。")]),_._v(" "),v("blockquote",[v("p",[_._v("不过也可以想到一种例外的情况：业务应用在给数据设置过期时间的时候，就明确知道数据被再次访问的情况，并根据访问情况设置过期时间。此时，Redis按照数据的剩余最短存活时间进行筛选，是可以把不会再被访问的数据筛选出来的，进而避免缓存污染。例如，业务部门知道数据被访问的时长就是一个小时，并把数据的过期时间设置为一个小时后。这样一来，被淘汰的数据的确是不会再被访问了。")])]),_._v(" "),v("p",[_._v("除了在明确知道数据被再次访问的情况下，volatile-ttl可以有效避免缓存污染。在其他情况下，volatile-random、allkeys-random、volatile-ttl这三种策略并不能应对缓存污染问题。")]),_._v(" "),v("h2",{attrs:{id:"lru缓存策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lru缓存策略"}},[_._v("#")]),_._v(" LRU缓存策略")]),_._v(" "),v("p",[_._v("先复习下LRU（最少最近使用）策略的核心思想：如果一个数据刚刚被访问，那么这个数据肯定是热数据，还会被再次访问。")]),_._v(" "),v("p",[_._v("按照这个核心思想，Redis中的LRU策略，会在每个数据对应的RedisObject结构体中设置一个lru字段，用来记录数据的访问时间戳。在进行数据淘汰时，LRU策略会在候选数据集中淘汰掉lru字段值最小的数据（也就是访问时间最久的数据）。在数据被频繁访问的业务场景中，LRU策略的确能有效留存访问时间最近的数据。而且，因为留存的这些数据还会被再次访问，所以又可以提升业务应用的访问速度。")]),_._v(" "),v("p",[_._v("正是"),v("strong",[_._v("因为只看数据的访问时间，使用LRU策略在处理扫描式单次查询操作时，无法解决缓存污染")]),_._v("。所谓的扫描式单次查询操作，就是指应用对大量的数据进行一次全体读取，每个数据都会被读取，"),v("strong",[_._v("而且只会被读取一次")]),_._v("。此时，因为这些被查询的数据刚刚被访问过，所以lru字段值都很大。")]),_._v(" "),v("blockquote",[v("p",[_._v("扫描式单体查询其实就是说的缓存污染的情况了，感觉爬虫好像就很容易导致这个情况？")])]),_._v(" "),v("p",[_._v("举例如下：数据6被访问后，被写入Redis缓存。但是，在此之后，数据6一直没有被再次访问，这就导致数据6滞留在缓存中，造成了污染。")]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"C:/Users/28788/AppData/Roaming/Typora/typora-user-images/image-20231118192135095.png",alt:"image-20231118192135095"}}),_._v(" "),v("p",[_._v("对于采用了LRU策略的Redis缓存来说，扫描式单次查询会造成缓存污染。为了应对这类缓存污染问题，"),v("strong",[_._v("Redis从4.0版本开始增加了LFU淘汰策略。")])]),_._v(" "),v("blockquote",[v("p",[_._v("Tips：实现LRU算法只需要一个双向链表就行了，每次把新访问的加到头，如果超出容量就把最后面的扔了就行。")])]),_._v(" "),v("h2",{attrs:{id:"lfu缓存策略的优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lfu缓存策略的优化"}},[_._v("#")]),_._v(" LFU缓存策略的优化")]),_._v(" "),v("p",[_._v("与LRU策略相比，LFU策略中会从两个维度来筛选并淘汰数据："),v("strong",[_._v("一是，数据访问的时效性（访问时间离当前时间的远近）；二是，数据的被访问次数。")])]),_._v(" "),v("blockquote",[v("p",[_._v("least frequently used (LFU) 最不经常使用，其实就是多考虑了频率。这是很显然的，我们缓存就是为了存经常访问的数据，所以当然要考虑一下频率")])]),_._v(" "),v("p",[_._v("所以LFU缓存策略是在LRU策略基础上，为每个数据增加了一个计数器，来统计这个数据的访问次数。")]),_._v(" "),v("p",[_._v("LFU流程：")]),_._v(" "),v("p",[_._v("首先会根据数据的访问次数进行筛选，把访问次数最低的数据淘汰出缓存。如果两个数据的访问次数相同，LFU策略再比较这两个数据的访问时效性，把距离上一次访问时间更久的数据淘汰出缓存。")]),_._v(" "),v("p",[_._v("我们具体看看怎么Redis实现LFU。")]),_._v(" "),v("p",[_._v("由于LFU是改进的LRU，所以我们复习一下之前了解的Redis怎么实现的LRU。")]),_._v(" "),v("blockquote",[v("p",[_._v("注意Redis没有维护全局的链表，因为很占空间，而是采取了近似的办法来做")])]),_._v(" "),v("p",[v("strong",[_._v("为了避免操作链表的开销，Redis在实现LRU策略时使用了两个近似方法：")])]),_._v(" "),v("ul",[v("li",[_._v("Redis是用RedisObject结构来保存数据的，RedisObject结构中设置了一个"),v("strong",[_._v("lru字段")]),_._v("，用来记录数据的访问时间戳；")]),_._v(" "),v("li",[_._v("Redis"),v("strong",[_._v("并没有为所有的数据维护一个全局的链表，而是通过随机采样方式，选取一定数量（例如10个）的数据放入候选集合，后续在候选集合中根据lru字段值的大小进行筛选。")])])]),_._v(" "),v("p",[_._v("在此基础上，"),v("strong",[_._v("Redis在实现LFU策略的时候，只是把原来24bit大小的lru字段，又进一步拆分成了两部分")]),_._v("。")]),_._v(" "),v("ol",[v("li",[_._v("ldt值：lru字段的前16bit，表示数据的访问时间戳；")]),_._v(" "),v("li",[_._v("counter值：lru字段的后8bit，表示数据的访问次数。")])]),_._v(" "),v("p",[_._v("总结一下：当LFU策略筛选数据时，Redis会在候选集合中，根据数据lru字段的后8bit选择访问次数最少的数据进行淘汰。当访问次数相同时，再根据lru字段的前16bit值大小，选择访问时间最久远的数据进行淘汰。")]),_._v(" "),v("p",[_._v("到这里，还没结束，"),v("strong",[_._v("Redis只使用了8bit记录数据的访问次数，而8bit记录的最大值是255")]),_._v("，这样可以吗？")]),_._v(" "),v("p",[_._v("在实际应用中，一个数据可能会被访问成千上万次。如果每被访问一次，counter值就加1的话，那么，只要访问次数超过了255，数据的counter值就一样了。在进行数据淘汰时，LFU策略就无法很好地区分并筛选这些数据，反而还可能会把不怎么访问的数据留存在了缓存中。")]),_._v(" "),v("p",[v("strong",[_._v("非线性递增的counter")])]),_._v(" "),v("p",[_._v("Redis也注意到了这个问题。因此，"),v("strong",[_._v("在实现LFU策略时，Redis并没有采用数据每被访问一次，就给对应的counter值加1的计数规则，而是采用了一个更优化的计数规则")]),_._v("。")]),_._v(" "),v("p",[_._v("简单来说，"),v("strong",[_._v("LFU策略实现的计数规则是：每当数据被访问一次时，首先，用计数器当前的值乘以配置项lfu_log_factor再加1，再取其倒数，得到一个p值；然后，把这个p值和一个取值范围在（0，1）间的随机数r值比大小，只有p值大于r值时，计数器才加1。")])]),_._v(" "),v("p",[_._v("下面这段Redis的部分源码，显示了LFU策略增加计数器值的计算逻辑。其中，baseval是计数器当前的值。计数器的初始值默认是5（由代码中的LFU_INIT_VAL常量设置），而不是0，这样可以避免数据刚被写入缓存，就因为访问次数少而被立即淘汰。")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("double r = (double)rand()/RAND_MAX;\n...\ndouble p = 1.0/(baseval*server.lfu_log_factor+1);\nif (r < p) counter++;   \n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br")])]),v("p",[_._v("使用了这种计算规则后，我们可以通过设置不同的lfu_log_factor配置项，来控制计数器值增加的速度，避免counter值很快就到255了。")]),_._v(" "),v("p",[_._v("这是Redis"),v("a",{attrs:{href:"https://redis.io/topics/lru-cache",target:"_blank",rel:"noopener noreferrer"}},[_._v("官网"),v("OutboundLink")],1),_._v("上提供的一张表，它记录了当lfu_log_factor取不同值时，在不同的实际访问次数情况下，计数器的值是如何变化的。")]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20231118193122672.png",alt:"image-20231118193122672"}}),_._v(" "),v("p",[_._v("当lfu_log_factor取值为1时，实际访问次数为100K后，counter值就达到255了，无法再区分实际访问次数更多的数据了。而当lfu_log_factor取值为100时，当实际访问次数为10M时，counter值才达到255，"),v("strong",[_._v("此时，实际访问次数小于10M的不同数据都可以通过counter值区分出来。")])]),_._v(" "),v("p",[v("strong",[_._v("counter的衰减机制")])]),_._v(" "),v("p",[_._v("前面我们也提到了，应用负载的情况是很复杂的。"),v("strong",[_._v("在一些场景下，有些数据在短时间内被大量访问后就不会再被访问了。那么再按照访问次数来筛选的话，这些数据会被留存在缓存中，但不会提升缓存命中率")]),_._v("。为此，Redis在实现LFU策略时，还设计了一个counter值的衰减机制。")]),_._v(" "),v("p",[_._v("简单来说，LFU策略使用衰减因子配置项lfu_decay_time来控制访问次数的衰减。LFU策略会计算当前时间和数据最近一次访问时间的差值，并把这个差值换算成以分钟为单位。然后，LFU策略再把这个差值除以lfu_decay_time值，所得的结果就是数据counter要衰减的值。")]),_._v(" "),v("p",[_._v("简单举个例子，假设lfu_decay_time取值为1，如果数据在N分钟内没有被访问，那么它的访问次数就要减N。如果lfu_decay_time取值更大，那么相应的衰减值会变小，衰减效果也会减弱。所以，如果业务应用中有短时高频访问的数据的话，建议把lfu_decay_time值设置为1，这样一来，LFU策略在它们不再被访问后，会较快地衰减它们的访问次数，尽早把它们从缓存中淘汰出去，避免缓存污染。")]),_._v(" "),v("h2",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),v("p",[_._v("当我们使用LRU策略时，由于LRU策略只考虑数据的访问时效，对于只访问一次的数据来说，LRU策略无法很快将其筛选出来。而LFU策略在LRU策略基础上进行了优化，在筛选数据时，首先会筛选并淘汰访问次数少的数据，然后针对访问次数相同的数据，再筛选并淘汰访问时间最久远的数据。")]),_._v(" "),v("p",[_._v("在具体实现上，相对于LRU策略，Redis只是把原来24bit大小的lru字段，又进一步拆分成了16bit的ldt和8bit的counter，分别用来表示数据的访问时间戳和访问次数。为了避开8bit最大只能记录255的限制，LFU策略设计使用非线性增长的计数器来表示数据的访问次数。")]),_._v(" "),v("p",[_._v("在实际业务应用中，LRU和LFU两个策略都有应用。LRU和LFU两个策略关注的数据访问特征各有侧重，LRU策略更加关注数据的时效性，而LFU策略更加关注数据的访问频次。通常情况下，实际应用的负载具有较好的时间局部性，所以LRU策略的应用会更加广泛。但是，在扫描式查询的应用场景中，LFU策略就可以很好地应对缓存污染问题了，建议你优先使用。")]),_._v(" "),v("p",[_._v("此外，如果业务应用中有短时高频访问的数据，除了LFU策略本身会对数据的访问次数进行自动衰减以外，我再给你个小建议：你可以优先使用volatile-lfu策略，并根据这些数据的访问时限设置它们的过期时间，以免它们留存在缓存中造成污染。")]),_._v(" "),v("h2",{attrs:{id:"q-a"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[_._v("#")]),_._v(" Q&A")]),_._v(" "),v("p",[_._v("1.使用了LFU策略后，你觉得缓存还会被污染吗")])])}),[],!1,null,null,null);v.default=l.exports}}]);