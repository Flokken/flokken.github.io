(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{411:function(_,v,t){"use strict";t.r(v);var s=t(4),r=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"引-键入网址到网页显示-期间发生了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引-键入网址到网页显示-期间发生了什么"}},[_._v("#")]),_._v(" 引：键入网址到网页显示，期间发生了什么？")]),_._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://blog.csdn.net/weixin_45639224/article/details/127150234",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考"),v("OutboundLink")],1)])]),_._v(" "),v("p",[_._v("主要有以下过程：")]),_._v(" "),v("ul",[v("li",[_._v("首先是解析域名(DNS)，\n"),v("ul",[v("li",[_._v("DNS协议----向指定DNS域名服务器发送DNS请求报文，以解析域名www.baidu.com对应的IP地址。")]),_._v(" "),v("li",[_._v("UDP协议：DNS（Domain Name System）协议在传输层通常使用UDP（User Datagram Protocol）作为其传输协议。虽然DNS也可以使用TCP来进行通信，"),v("strong",[_._v("但大多数DNS请求和响应都是通过UDP进行传输。")]),_._v(" "),v("ul",[v("li",[_._v("原因：UDP协议更快响应（实时性要求高），负载轻(DNS是短暂数据交换)")])])])])]),_._v(" "),v("li",[_._v("通过三次握手建立TCP连接\n"),v("ul",[v("li",[_._v("TCP协议")])])]),_._v(" "),v("li",[_._v("建立TCP连接后发起Http请求\n"),v("ul",[v("li",[_._v("Http协议：应用层协议，用于传输超文本数据。")]),_._v(" "),v("li",[_._v("ARP协议：ARP协议工作在网络协议栈的"),v("strong",[_._v("链路层")]),_._v("，用于解决局域网内设备的"),v("strong",[_._v("IP地址到MAC地址的映射")])]),_._v(" "),v("li",[_._v("ICMP协议：提供网络传输中的差错检测。")])])]),_._v(" "),v("li",[_._v("服务器响应http请求，浏览器得到html代码")]),_._v(" "),v("li",[_._v("浏览器解析html代码，并请求html中的各种资源，（比如css，js图片）等等")]),_._v(" "),v("li",[_._v("浏览器对页面进行解析")])]),_._v(" "),v("h2",{attrs:{id:"网络模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络模型"}},[_._v("#")]),_._v(" 网络模型")]),_._v(" "),v("h3",{attrs:{id:"tcp-ip模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip模型"}},[_._v("#")]),_._v(" TCP/IP模型")]),_._v(" "),v("ul",[v("li",[_._v("应用层")]),_._v(" "),v("li",[_._v("传输层")]),_._v(" "),v("li",[_._v("网络层")]),_._v(" "),v("li",[_._v("网络接口层")])]),_._v(" "),v("h3",{attrs:{id:"osi七层网络模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#osi七层网络模式"}},[_._v("#")]),_._v(" OSI七层网络模式")]),_._v(" "),v("ul",[v("li",[_._v("应用层，负责给应用程序提供统一的接口；")]),_._v(" "),v("li",[_._v("表示层，负责把数据转换成兼容另一个系统能识别的格式；")]),_._v(" "),v("li",[_._v("会话层，负责建立、管理和终止表示层实体之间的通信会话；")]),_._v(" "),v("li",[_._v("传输层，负责端到端的数据传输；")]),_._v(" "),v("li",[_._v("网络层，负责数据的路由、转发、分片；")]),_._v(" "),v("li",[_._v("数据链路层，负责数据的封帧和差错检测，以及 MAC 寻址；")]),_._v(" "),v("li",[_._v("物理层，负责在物理网络中传输数据帧；")])]),_._v(" "),v("p",[_._v("每一层的封装格式如下")]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240524102714571.png",alt:"image-20240524102714571"}}),_._v(" "),v("p",[_._v("网络接口层的传输单位是帧（frame），IP 层的传输单位是包（packet），TCP 层的传输单位是段（segment），HTTP 的传输单位则是消息或报文（message）。但这些名词并没有什么本质的区分，可以统称为数据包。")]),_._v(" "),v("h2",{attrs:{id:"http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[_._v("#")]),_._v(" Http协议")]),_._v(" "),v("p",[_._v("HTTP 是超文本传输协议，也就是"),v("strong",[_._v("H")]),_._v("yperText "),v("strong",[_._v("T")]),_._v("ransfer "),v("strong",[_._v("P")]),_._v("rotocol。")]),_._v(" "),v("p",[v("strong",[_._v("Http状态码")])]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240519210823098.png",alt:"image-20240519210823098"}}),_._v(" "),v("h3",{attrs:{id:"https和http的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https和http的区别"}},[_._v("#")]),_._v(" Https和Http的区别")]),_._v(" "),v("p",[_._v("HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。")]),_._v(" "),v("p",[_._v("区别如下：")]),_._v(" "),v("ul",[v("li",[_._v("HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP 三次握手之后，还需进行 "),v("strong",[_._v("SSL/TLS")]),_._v(" 的握手过程，才可进入加密报文传输。\n"),v("ul",[v("li",[_._v("记住SSL和TLS，很重要")])])]),_._v(" "),v("li",[_._v("两者的默认端口不一样，HTTP 默认端口号是 80，HTTPS 默认端口号是 443。")]),_._v(" "),v("li",[_._v("HTTPS 协议需要向 CA（证书权威机构）申请数字证书，来保证服务器的身份是可信的。")])]),_._v(" "),v("p",[_._v("Https的好处：")]),_._v(" "),v("p",[_._v("首先看Http的问题，主要就是不安全，有风险")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("窃听风险(窃取通信内容)")]),_._v("，比如通信链路上可以获取通信内容，用户号容易没。")]),_._v(" "),v("li",[v("strong",[_._v("篡改风险（篡改通信内容）")]),_._v("，比如强制植入垃圾广告，视觉污染，用户眼容易瞎。")]),_._v(" "),v("li",[v("strong",[_._v("冒充风险(网站是假冒的)")]),_._v("，比如冒充淘宝网站，用户钱容易没。")])]),_._v(" "),v("p",[_._v("HTTP"),v("strong",[_._v("S")]),_._v(" 在 HTTP 与 TCP 层之间加入了 "),v("code",[_._v("SSL/TLS")]),_._v(" 协议，可以很好的解决了上述的风险：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("信息加密")]),_._v("：交互信息无法被窃取，但你的号会因为「自身忘记」账号而没。\n"),v("ul",[v("li",[v("strong",[_._v("混合加密，对称加密与非对称加密。具体使用哪种根据具体的SSL/TLS套件决定")])])])]),_._v(" "),v("li",[v("strong",[_._v("校验机制")]),_._v("：无法篡改通信内容，篡改了就不能正常显示，但百度「竞价排名」依然可以搜索垃圾广告。\n"),v("ul",[v("li",[v("strong",[_._v("使用摘要算法实现完整性，对数据生成独一无二的指纹，指纹可以校验数据完整性")])])])]),_._v(" "),v("li",[v("strong",[_._v("身份证书")]),_._v("：证明淘宝是真的淘宝网，但你的钱还是会因为「剁手」而没。\n"),v("ul",[v("li",[v("strong",[_._v("把服务器公钥放到数字证书中，解决了冒充的风险。")])])])])]),_._v(" "),v("h3",{attrs:{id:"对称加密和非对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密和非对称加密"}},[_._v("#")]),_._v(" 对称加密和非对称加密")]),_._v(" "),v("h4",{attrs:{id:"对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[_._v("#")]),_._v(" 对称加密")]),_._v(" "),v("p",[v("strong",[_._v("对称加密算法是指加密和解密使用同一个密钥的算法，也叫共享密钥加密算法。")])]),_._v(" "),v("p",[_._v("常见的对称加密算法有 DES、3DES、AES 等。")]),_._v(" "),v("p",[_._v("DES（Data Encryption Standard）使用 64 位的密钥(有效秘钥长度为 56 位,8 位奇偶校验位)和 64 位的明文进行加密。")]),_._v(" "),v("p",[_._v("AES（Advanced Encryption Standard）算法是一种更先进的对称密钥加密算法，它使用 128 位、192 位或 256 位的密钥对数据进行加密或解密，密钥越长，安全性越高。")]),_._v(" "),v("h4",{attrs:{id:"非对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[_._v("#")]),_._v(" 非对称加密")]),_._v(" "),v("p",[v("strong",[_._v("非对称加密算法是指加密和解密使用不同的密钥的算法")]),_._v("，也叫公开密钥加密算法。这两个密钥互不相同，一个称为公钥，另一个称为私钥。")]),_._v(" "),v("ul",[v("li",[_._v("公钥可以公开给任何人使用，私钥则要保密。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240519212806780.png",alt:"image-20240519212806780"}})]),_._v(" "),v("p",[_._v("如果用公钥加密数据，只能用对应的私钥解密（加密）；如果用私钥加密数据，只能用对应的公钥解密（签名）。这样就可以实现数据的安全传输和身份认证。")]),_._v(" "),v("p",[v("strong",[_._v("RSA算法")])]),_._v(" "),v("p",[_._v("RSA（Rivest–Shamir–Adleman algorithm）"),v("strong",[_._v("算法是一种基于大数分解的困难性的非对称加密算法，它需要选择两个大素数作为私钥的一部分")]),_._v("，然后计算出它们的乘积作为公钥的一部分（寻求两个大素数比较简单，而将它们的乘积进行因式分解却极其困难）")]),_._v(" "),v("ul",[v("li",[_._v("RSA 算法的优点是简单易用，可以用于数据加密和数字签名；缺点是运算速度慢，不适合大量数据的加密。")]),_._v(" "),v("li",[_._v("RSA 算法是是目前应用最广泛的非对称加密算法，像 SSL/TLS、SSH 等协议中就用到了 RSA 算法。")])]),_._v(" "),v("h2",{attrs:{id:"tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[_._v("#")]),_._v(" TCP")]),_._v(" "),v("p",[_._v("TCP 是"),v("strong",[_._v("面向连接的、可靠的、基于字节流")]),_._v("的传输层通信协议。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("面向连接")]),_._v("：一定是「一对一」才能连接，不能像 UDP 协议可以一个主机同时向多个主机发送消息，也就是一对多是无法做到的；")]),_._v(" "),v("li",[v("strong",[_._v("可靠的")]),_._v("：无论的网络链路中出现了怎样的链路变化，TCP 都可以保证一个报文一定能够到达接收端；")]),_._v(" "),v("li",[v("strong",[_._v("字节流")]),_._v("：用户消息通过 TCP 协议传输时，消息可能会被操作系统「分组」成多个的 TCP 报文，如果接收方的程序如果不知道「消息的边界」，是无法读出一个有效的用户消息的。并且 TCP 报文是「有序的」，当「前一个」TCP 报文没有收到的时候，即使它先收到了后面的 TCP 报文，那么也不能扔给应用层去处理，同时对「重复」的 TCP 报文会自动丢弃。")])]),_._v(" "),v("h3",{attrs:{id:"头部格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#头部格式"}},[_._v("#")]),_._v(" 头部格式")]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240524103442472.png",alt:"image-20240524103442472"}}),_._v(" "),v("p",[_._v("需要记住TCP主要的头部字段")]),_._v(" "),v("ul",[v("li",[_._v("端口号：源端口号和目的端口号")]),_._v(" "),v("li",[_._v("序列号：解决网络包乱序问题")]),_._v(" "),v("li",[_._v("确认应答号：下一次期望收到的数据的序列号")]),_._v(" "),v("li",[_._v("窗口大小：指示发送端可以发送多少数据而不需要等待确认。窗口大小的概念是为了优化数据传输的效率，允许发送方在不等待确认的情况下连续发送多个数据段。\n"),v("ul",[v("li",[_._v("作用是：流量控制；拥塞控制；自适应调整")])])]),_._v(" "),v("li",[_._v("控制位：控制TCP连接的行为，比如强制断开RST，确认应答ACK")])]),_._v(" "),v("p",[v("strong",[_._v("序列号")]),_._v("：在建立连接时由计算机生成的"),v("strong",[_._v("随机数")]),_._v("作为其初始值，通过 SYN 包传给接收端主机，每发送一次数据，就「累加」一次该「数据字节数」的大小。"),v("strong",[_._v("用来解决网络包乱序问题。")])]),_._v(" "),v("ul",[v("li",[_._v("注意序列号初始是随机值")])]),_._v(" "),v("p",[v("strong",[_._v("确认应答号")]),_._v("：指下一次「期望」收到的数据的序列号，发送端收到这个确认应答以后可以认为在这个序号以前的数据都已经被正常接收。"),v("strong",[_._v("用来解决丢包的问题。")])]),_._v(" "),v("p",[v("strong",[_._v("控制位：")])]),_._v(" "),v("ul",[v("li",[v("em",[_._v("ACK")]),_._v("：该位为 "),v("code",[_._v("1")]),_._v(" 时，「确认应答」的字段变为有效，TCP 规定除了最初建立连接时的 "),v("code",[_._v("SYN")]),_._v(" 包之外该位必须设置为 "),v("code",[_._v("1")]),_._v(" 。")]),_._v(" "),v("li",[v("em",[_._v("RST")]),_._v("：该位为 "),v("code",[_._v("1")]),_._v(" 时，表示 TCP 连接中出现异常必须强制断开连接。")]),_._v(" "),v("li",[v("em",[_._v("SYN")]),_._v("：该位为 "),v("code",[_._v("1")]),_._v(" 时，表示希望建立连接，并在其「序列号」的字段进行序列号初始值的设定。")]),_._v(" "),v("li",[v("em",[_._v("FIN")]),_._v("：该位为 "),v("code",[_._v("1")]),_._v(" 时，表示今后不会再有数据发送，希望断开连接。当通信结束希望断开连接时，通信双方的主机之间就可以相互交换 "),v("code",[_._v("FIN")]),_._v(" 位为 1 的 TCP 段。")])]),_._v(" "),v("h3",{attrs:{id:"三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),v("p",[_._v("TCP 是面向连接的协议，所以使用 TCP 前必须先建立连接，而"),v("strong",[_._v("建立连接是通过三次握手来进行的")]),_._v("。三次握手的过程如下图：")]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240325202141242.png",alt:"image-20240325202141242"}}),_._v(" "),v("ul",[v("li",[_._v("一开始，客户端和服务端都处于 "),v("code",[_._v("CLOSE")]),_._v(" 状态。先是服务端主动监听某个端口，处于 "),v("code",[_._v("LISTEN")]),_._v(" 状态")]),_._v(" "),v("li",[_._v("客户端会随机初始化序号（"),v("code",[_._v("client_isn")]),_._v("），将此序号置于 TCP 首部的「序号」字段中，同时把 "),v("code",[_._v("SYN")]),_._v(" 标志位置为 "),v("code",[_._v("1")]),_._v("，表示 "),v("code",[_._v("SYN")]),_._v(" 报文。接着把第一个 SYN 报文发送给服务端，表示向服务端发起连接，该报文不包含应用层数据，之后客户端处于 "),v("code",[_._v("SYN-SENT")]),_._v(" 状态。\n"),v("ul",[v("li",[_._v("SYN（同步信号）:  Synchronize Sequence Numbers")]),_._v(" "),v("li",[_._v("服务端发起一个syn，客户端接受一次握手")])])]),_._v(" "),v("li",[_._v("服务端收到客户端的 "),v("code",[_._v("SYN")]),_._v(" 报文后，首先服务端也随机初始化自己的序号（"),v("code",[_._v("server_isn")]),_._v("），将此序号填入 TCP 首部的「序号」字段中，其次把 TCP 首部的「确认应答号」字段填入 "),v("code",[_._v("client_isn + 1")]),_._v(", 接着把 "),v("code",[_._v("SYN")]),_._v(" 和 "),v("code",[_._v("ACK")]),_._v(" 标志位置为 "),v("code",[_._v("1")]),_._v("。最后把该报文发给客户端，该报文也不包含应用层数据，之后服务端处于 "),v("code",[_._v("SYN-RCVD")]),_._v(" 状态。\n"),v("ul",[v("li",[_._v("SYN+ACK")]),_._v(" "),v("li",[_._v("客户端回应syn+ack，客户端接收，两次握手。此时客户端进入 "),v("code",[_._v("ESTABLISHED")]),_._v(" 状态。")])])]),_._v(" "),v("li",[_._v("客户端收到服务端报文后，还要向服务端回应最后一个应答报文，首先该应答报文 TCP 首部 "),v("code",[_._v("ACK")]),_._v(" 标志位置为 "),v("code",[_._v("1")]),_._v(" ，其次「确认应答号」字段填入 "),v("code",[_._v("server_isn + 1")]),_._v(" ，最后把报文发送给服务端，这次报文可以携带客户到服务端的数据，之后客户端处于 "),v("code",[_._v("ESTABLISHED")]),_._v(" 状态。\n"),v("ul",[v("li",[_._v("客户端发送一个ack，服务端接受，三次握手，双方也建立好了连接。")])])]),_._v(" "),v("li",[_._v("服务端收到客户端的应答报文后，也进入 "),v("code",[_._v("ESTABLISHED")]),_._v(" 状态。")])]),_._v(" "),v("p",[_._v("从上面的过程可以发现"),v("strong",[_._v("第三次握手是可以携带数据的，前两次握手是不可以携带数据的")]),_._v("，这也是面试常问的题。")]),_._v(" "),v("p",[_._v("一旦完成三次握手，双方都处于 "),v("code",[_._v("ESTABLISHED")]),_._v(" 状态，此时连接就已建立完成，客户端和服务端就可以相互发送数据了。")]),_._v(" "),v("p",[_._v("三次握手才能保证双方具有接收和发送的能力。因为客户端和服务端都有一次发送和一次接受")]),_._v(" "),v("ul",[v("li",[_._v("三次握手才可以阻止重复历史连接的初始化（主要原因）")]),_._v(" "),v("li",[_._v("三次握手才可以同步双方的初始序列号")]),_._v(" "),v("li",[_._v("三次握手才可以避免资源浪费")])]),_._v(" "),v("p",[_._v("Question："),v("strong",[_._v("为什么不是两次？")])]),_._v(" "),v("p",[_._v("我们考虑一个"),v("strong",[_._v("场景")]),_._v("，客户端先发送了 SYN（seq = 90）报文，然后客户端宕机了，而且这个 SYN 报文还被网络阻塞了，服务端并没有收到，接着客户端重启后，又重新向服务端建立连接，发送了 SYN（seq = 100）报文（"),v("em",[_._v("注意！不是重传 SYN，重传的 SYN 的序列号是一样的")]),_._v("）。")]),_._v(" "),v("p",[_._v("但是旧的90比100先到服务端，导致客户端先收到91，但是客户端希望收到的是101，所以客户端发起RST终止")]),_._v(" "),v("p",[_._v("直到101到了客户端，客户端才建立连接，"),v("strong",[_._v("避免了建立一个历史连接")])]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240325203839668.png",alt:"image-20240325203839668"}}),_._v(" "),v("p",[_._v("但是"),v("strong",[_._v("两次握手就不行")]),_._v("，以同样的例子")]),_._v(" "),v("p",[_._v("因为两次握手，服务端第一次接受到旧连接100就会建立连接，白白发送数据。")]),_._v(" "),v("p",[_._v("但是客户端发现这是历史连接（接受到101），发起RST终止连接。这样"),v("strong",[_._v("白白浪费了一次连接建立和发送的数据")])]),_._v(" "),v("p",[_._v("最后服务端接受到200，发送ACK201，然后客户端接受到，建立起新连接")]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240325203209153.png",alt:"image-20240325203209153"}}),_._v(" "),v("p",[_._v("Question：为什么不是四次？")]),_._v(" "),v("p",[_._v("「四次握手」：三次握手就已经理论上最少可靠连接建立，所以不需要使用更多的通信次数。")]),_._v(" "),v("h4",{attrs:{id:"第一次握手丢失会怎么样"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第一次握手丢失会怎么样"}},[_._v("#")]),_._v(" 第一次握手丢失会怎么样？")]),_._v(" "),v("p",[_._v("当客户端想和服务端建立 TCP 连接的时候，首先第一个发的就是 SYN 报文，然后进入到 "),v("code",[_._v("SYN_SENT")]),_._v(" 状态。")]),_._v(" "),v("p",[_._v("在这之后，如果客户端迟迟收不到服务端的 SYN-ACK 报文（第二次握手），就会触发「"),v("strong",[_._v("超时重传")]),_._v("」机制，重传 SYN 报文，而且"),v("strong",[_._v("重传的 SYN 报文的序列号都是一样的")]),_._v("。")]),_._v(" "),v("p",[_._v("具体来说：有一个超时时间"),v("code",[_._v("time")]),_._v("，一旦超过"),v("code",[_._v("time")]),_._v("没有收到SYN-ACK报文，就会触发重传")]),_._v(" "),v("blockquote",[v("p",[_._v("在 Linux 里，客户端的 SYN 报文最大重传次数由 "),v("code",[_._v("tcp_syn_retries")]),_._v("内核参数控制，这个参数是可以自定义的，默认值一般是 5。")])]),_._v(" "),v("ul",[v("li",[_._v("第一次1s，第二次2s,第三次4s。\n"),v("ul",[v("li",[_._v("这是时间也是可以调的")])])]),_._v(" "),v("li",[_._v("所以，总耗时是 1+2+4+8+16+32=63 秒，大约 1 分钟左右。")])]),_._v(" "),v("h4",{attrs:{id:"第二次握手丢失会怎么样"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二次握手丢失会怎么样"}},[_._v("#")]),_._v(" 第二次握手丢失会怎么样？")]),_._v(" "),v("p",[_._v("当服务端收到客户端的第一次握手后，就会回 SYN-ACK 报文给客户端，这个就是第二次握手，"),v("strong",[_._v("此时服务端会进入 "),v("code",[_._v("SYN_RCVD")]),_._v(" 状态。")])]),_._v(" "),v("p",[_._v("第二次握手的 "),v("code",[_._v("SYN-ACK")]),_._v(" 报文其实有两个目的 ：")]),_._v(" "),v("ul",[v("li",[_._v("第二次握手里的 ACK， 是对第一次握手的确认报文；\n"),v("ul",[v("li",[_._v("此时客户端期望接受到这个ACK")])])]),_._v(" "),v("li",[_._v("第二次握手里的 SYN，是服务端发起建立 TCP 连接的报文；\n"),v("ul",[v("li",[_._v("此时服务端期望接收到客户端回复的ACK")])])])]),_._v(" "),v("p",[_._v("所以这个包丢了，服务端和客户端都会触发超时重传机制，具体机制和上面第一次的一样，都是每次时间翻倍，默认5次")]),_._v(" "),v("ul",[v("li",[_._v("客户端会重传 SYN 报文，也就是第一次握手，最大重传次数由 "),v("code",[_._v("tcp_syn_retries")]),_._v("内核参数决定；")]),_._v(" "),v("li",[_._v("服务端会重传 SYN-ACK 报文，也就是第二次握手，最大重传次数由 "),v("code",[_._v("tcp_synack_retries")]),_._v(" 内核参数决定。")])]),_._v(" "),v("h4",{attrs:{id:"第三次握手丢失会怎么样"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第三次握手丢失会怎么样"}},[_._v("#")]),_._v(" 第三次握手丢失会怎么样？")]),_._v(" "),v("p",[_._v("客户端收到服务端的 SYN-ACK 报文后，就会给服务端回一个 ACK 报文，也就是第三次握手，此时客户端状态进入到 "),v("code",[_._v("ESTABLISH")]),_._v(" 状态。")]),_._v(" "),v("p",[_._v("因为这个第三次握手的 ACK 是对第二次握手的 SYN 的确认报文，所以当第三次握手丢失了，如果服务端那一方迟迟收不到这个确认报文，就会触发超时重传机制，重传 SYN-ACK 报文，直到收到第三次握手，或者达到最大重传次数。")]),_._v(" "),v("ul",[v("li",[_._v("注意是服务端重传SYN-ACK，而客户端不用重传")])]),_._v(" "),v("p",[v("font",{attrs:{color:"red",size:"3"}},[_._v("ACK 报文是不会有重传的，当 ACK 丢失了，就由对方重传对应的报文")])],1),_._v(" "),v("h4",{attrs:{id:"syn攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#syn攻击"}},[_._v("#")]),_._v(" SYN攻击")]),_._v(" "),v("h3",{attrs:{id:"四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[_._v("#")]),_._v(" 四次挥手")]),_._v(" "),v("p",[_._v("TCP 四次挥手过程是怎样的？")]),_._v(" "),v("p",[_._v("天下没有不散的宴席，对于 TCP 连接也是这样， TCP 断开连接是通过"),v("strong",[_._v("四次挥手")]),_._v("方式。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("重点，主动关闭连接的一方才会进入time-wait状态，这个状态长度是2MSL")])])]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240325215916825.png",alt:"image-20240325215916825"}}),_._v(" "),v("ul",[v("li",[_._v("客户端打算关闭连接，此时会发送一个 TCP 首部 "),v("code",[_._v("FIN")]),_._v(" 标志位被置为 "),v("code",[_._v("1")]),_._v(" 的报文，也即 "),v("code",[_._v("FIN")]),_._v(" 报文，之后"),v("strong",[_._v("客户端进入 "),v("code",[_._v("FIN_WAIT_1")]),_._v(" 状态。")])]),_._v(" "),v("li",[_._v("服务端收到该报文后，就向客户端发送 "),v("code",[_._v("ACK")]),_._v(" 应答报文，"),v("strong",[_._v("接着服务端进入 "),v("code",[_._v("CLOSE_WAIT")]),_._v(" 状态。")])]),_._v(" "),v("li",[_._v("客户端收到服务端的 "),v("code",[_._v("ACK")]),_._v(" 应答报文后，"),v("strong",[_._v("之后进入 "),v("code",[_._v("FIN_WAIT_2")]),_._v(" 状态")]),_._v("。")]),_._v(" "),v("li",[_._v("等待服务端处理完数据后，也向客户端发送 "),v("code",[_._v("FIN")]),_._v(" 报文，之后"),v("strong",[_._v("服务端进入 "),v("code",[_._v("LAST_ACK")]),_._v(" 状态。")])]),_._v(" "),v("li",[_._v("客户端收到服务端的 "),v("code",[_._v("FIN")]),_._v(" 报文后，回一个 "),v("code",[_._v("ACK")]),_._v(" 应答报文，"),v("strong",[_._v("之后进入 "),v("code",[_._v("TIME_WAIT")]),_._v(" 状")]),_._v("态")]),_._v(" "),v("li",[_._v("服务端收到了 "),v("code",[_._v("ACK")]),_._v(" 应答报文后，就进入了 "),v("code",[_._v("CLOSE")]),_._v(" 状态，至此服务端已经完成连接的关闭。")]),_._v(" "),v("li",[_._v("客户端在经过 "),v("code",[_._v("2MSL")]),_._v(" 一段时间后，自动进入 "),v("code",[_._v("CLOSE")]),_._v(" 状态，至此客户端也完成连接的关闭。\n"),v("ul",[v("li",[v("code",[_._v("MSL")]),_._v(" 是 Maximum Segment Lifetime，"),v("strong",[_._v("报文最大生存时间")]),_._v("，它是任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃。")])])])]),_._v(" "),v("p",[_._v("你可以看到，每个方向都需要"),v("strong",[_._v("一个 FIN 和一个 ACK")]),_._v("，因此通常被称为"),v("strong",[_._v("四次挥手")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("注意：time_wait状态")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("TIME_WAIT")]),_._v(" 是一种连接状态，用于管理连接的关闭过程。它确保所有在连接关闭过程中可能丢失或延迟的数据包都能被正确处理，并防止旧的重复数据包影响新的连接。")]),_._v(" "),v("li",[v("code",[_._v("TIME_WAIT")]),_._v(" 状态的持续时间一般为 2 倍的 MSL(报文最大生存时间)")]),_._v(" "),v("li",[v("strong",[_._v("主动发起关闭连接的一方，才会有 "),v("code",[_._v("TIME-WAIT")]),_._v(" 状态。")])])]),_._v(" "),v("p",[v("strong",[_._v("Question：为什么需要四次挥手？")])]),_._v(" "),v("p",[_._v("再来回顾下四次挥手双方发 "),v("code",[_._v("FIN")]),_._v(" 包的过程，就能理解为什么需要四次了。")]),_._v(" "),v("ul",[v("li",[_._v("关闭连接时，客户端向服务端发送 "),v("code",[_._v("FIN")]),_._v(" 时，仅仅表示客户端不再发送数据了但是还能接收数据。\n"),v("ul",[v("li",[_._v("客户端发送一个fin,服务端接受，一次握手")]),_._v(" "),v("li",[_._v("服务端发送一个ack，客户端接受，两次握手")])])]),_._v(" "),v("li",[_._v("服务端收到客户端的 "),v("code",[_._v("FIN")]),_._v(" 报文时，先回一个 "),v("code",[_._v("ACK")]),_._v(" 应答报文，而服务端可能还有数据需要处理和发送，"),v("strong",[_._v("等服务端不再发送数据时，才发送 "),v("code",[_._v("FIN")]),_._v(" 报文给客户端来表示同意现在关闭连接。")]),_._v(" "),v("ul",[v("li",[_._v("服务端发送一个fin，客户端接受 （"),v("strong",[_._v("然后处于time_wait状态")]),_._v("），三次握手")]),_._v(" "),v("li",[_._v("客户端发送一个ack，服务端接受，四次握手")])])])]),_._v(" "),v("p",[_._v("服务端通常需要等待完成数据的发送和处理，"),v("strong",[_._v("所以服务端的 "),v("code",[_._v("ACK")]),_._v(" 和 "),v("code",[_._v("FIN")]),_._v(" 一般都会分开发送，因此是需要四次挥手")]),_._v("。")]),_._v(" "),v("h4",{attrs:{id:"第一次挥手丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第一次挥手丢失"}},[_._v("#")]),_._v(" 第一次挥手丢失？")]),_._v(" "),v("p",[_._v("当**客户端（主动关闭方）调用 close 函数后，就会向服务端发送 FIN 报文，**试图与服务端断开连接，此时客户端的连接进入到 "),v("code",[_._v("FIN_WAIT_1")]),_._v(" 状态。")]),_._v(" "),v("p",[_._v("正常情况下，如果能及时收到服务端（被动关闭方）的 ACK，则会很快变为 "),v("code",[_._v("FIN_WAIT2")]),_._v("状态。")]),_._v(" "),v("p",[v("strong",[_._v("如果客户端没有收到服务端的ACK报文，就会触发超时重传机制。")])]),_._v(" "),v("ul",[v("li",[_._v("重传参数"),v("code",[_._v("tcp_orphan_retries")]),_._v("，每一次重传后，"),v("strong",[_._v("重传时间是上一次重传时间的两倍(和握手一样)")])])]),_._v(" "),v("h4",{attrs:{id:"第二次挥手丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二次挥手丢失"}},[_._v("#")]),_._v(" 第二次挥手丢失?")]),_._v(" "),v("p",[_._v("如果服务端收到客户端的FIn报文后，会回复一个ACK报文("),v("strong",[_._v("第二次挥手")]),_._v(")。"),v("strong",[_._v("如果这个ACK报文丢失了")]),_._v("，也就是客户端没有收到ACK报文。")]),_._v(" "),v("ul",[v("li",[_._v("注意，ACK报文不会重传，所以服务端是不会重传ACK报文的")])]),_._v(" "),v("p",[_._v("所以仍然是客户端触发超时重传机制，"),v("strong",[_._v("重传 FIN 报文，直到收到服务端的第二次挥手，或者达到最大的重传次数。")])]),_._v(" "),v("ul",[v("li",[_._v("最后就会断开连接")])]),_._v(" "),v("h4",{attrs:{id:"第三次挥手丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第三次挥手丢失"}},[_._v("#")]),_._v(" 第三次挥手丢失?")]),_._v(" "),v("p",[_._v("第三次挥手即服务端也处理完数据后，向客户端(主动关闭方)发送的FIN报文。")]),_._v(" "),v("ul",[v("li",[_._v("发送后，服务端(被动关闭方)处于LAST_ACK状态，等待客户端的ACK报文")])]),_._v(" "),v("p",[_._v("如果这个FIN报文丢失，那么服务端肯定收不到ACK报文，服"),v("strong",[_._v("务端就会重发 FIN 报文，重发次数仍然由 "),v("code",[_._v("tcp_orphan_retrie")]),_._v("s 参数控制，这与客户端重发 FIN 报文的重传次数控制方式是一样的")])]),_._v(" "),v("ul",[v("li",[_._v("重传时间也是一样，每次是上一次超时时间的两倍")])]),_._v(" "),v("h4",{attrs:{id:"第四次挥手丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第四次挥手丢失"}},[_._v("#")]),_._v(" 第四次挥手丢失？")]),_._v(" "),v("p",[_._v("第四次挥手指的是，当客户端收到服务端的第三次挥手的 FIN 报文后，"),v("strong",[_._v("就会回 ACK 报文，也就是第四次挥手")]),_._v("，此时客户端连接"),v("strong",[_._v("进入 "),v("code",[_._v("TIME_WAIT")]),_._v(" 状态。")])]),_._v(" "),v("ul",[v("li",[_._v("在 Linux 系统，TIME_WAIT 状态会持续 2MSL 后才会进入关闭状态。")])]),_._v(" "),v("p",[_._v("如果这次挥手丢失，那么就是服务端不会收到ACK报文，"),v("strong",[_._v("服务端就会重发 FIN 报文，重发次数仍然由前面介绍过的 "),v("code",[_._v("tcp_orphan_retries")]),_._v(" 参数控制。")])]),_._v(" "),v("ul",[v("li",[_._v("对于客户端，对他来说已经完成了挥手过程，现在在Time_WAIT状态所以他在2MSL后,会关闭连接\n"),v("ul",[v("li",[_._v("**如果客户端途中再次收到第三次挥手（FIN 报文）后，就会重置定时器，**当等待 2MSL 时长后，客户端就会断开连接")])])]),_._v(" "),v("li",[_._v("对于服务端，会和之前的重发过程一样一直重传fin报文，直到收到ACK报文或者达到最大重传次数\n"),v("ul",[v("li",[_._v("达到最大重传次数就会断开连接")])])])]),_._v(" "),v("h4",{attrs:{id:"time-wait状态和2msl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#time-wait状态和2msl"}},[_._v("#")]),_._v(" Time_WAIT状态和2MSL")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("TCP连接中，"),v("strong",[_._v("主动发起关闭连接的那一端最后会进入TIME_WAIT状态(收到另一端的FIN后)")])])]),_._v(" "),v("li",[v("p",[_._v("进入TIME_WAIT后，该端在等待2MSL的时间就会关闭连接，所以这里会开启一个2MSL的计时器")]),_._v(" "),v("ul",[v("li",[_._v("如果再收到另一端重传的FIN报文，会重置这个定时器为2MSL")])])]),_._v(" "),v("li",[v("p",[v("code",[_._v("MSL")]),_._v(" 是 Maximum Segment Lifetime，"),v("strong",[_._v("报文最大生存时间")]),_._v("，它是任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("TIME_WAIT 等待 2 倍的 MSL，比较合理的解释是： 网络中可能存在来自发送方的数据包，当这些发送方的数据包被接收方处理后又会向对方发送响应，所以"),v("strong",[_._v("一来一回需要等待 2 倍的时间")]),_._v("。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("2MSL时长")]),_._v(" 这其实是相当于"),v("strong",[_._v("至少允许报文丢失一次")])])])])])]),_._v(" "),v("p",[_._v("拓展：TTL又是什么？")]),_._v(" "),v("p",[_._v("IP 头中有一个 "),v("code",[_._v("TTL")]),_._v(" 字段，是 IP 数据报可以经过的最大路由数，每经过一个处理他的路由器此值就减 1，当此值为 0 则数据报将被丢弃，同时发送 ICMP 报文通知源主机。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("MSL 与 TTL 的区别： MSL 的单位是时间，而 TTL 是经过路由跳数。所以 "),v("strong",[_._v("MSL 应该要大于等于 TTL 消耗为 0 的时间")]),_._v("，以确保报文已被自然消亡。")]),_._v(" "),v("p",[v("strong",[_._v("TTL 的值一般是 64，Linux 将 MSL 设置为 30 秒，意味着 Linux 认为数据报文经过 64 个路由器的时间不会超过 30 秒，如果超过了，就认为报文已经消失在网络中了")]),_._v("。")])])]),_._v(" "),v("p",[_._v("问题：")]),_._v(" "),v("p",[v("strong",[_._v("1.TIME_WAIT状态有什么用？")])]),_._v(" "),v("ul",[v("li",[_._v("防止历史连接中的数据，被后面相同四元组的连接错误的接收；\n"),v("ul",[v("li",[_._v("这里有点复杂，具体来说就是新的TCP连接可能会错误接收上一个连接的数据包")])])]),_._v(" "),v("li",[v("strong",[_._v("保证「被动关闭连接」的一方，能被正确的关闭；")]),_._v(" "),v("ul",[v("li",[_._v("TIME-WAIT 作用是"),v("strong",[_._v("等待足够的时间以确保最后的 ACK 能让被动关闭方接收，从而帮助其正常关闭。")])]),_._v(" "),v("li",[_._v("如果客户端（主动关闭方）最后一次 ACK 报文（第四次挥手）在网络中丢失了，那么按照 TCP 可靠性原则，服务端（被动关闭方）会重发 FIN 报文。\n"),v("ul",[v("li",[_._v("正是因为有TIME_WAIT状态，客户端才会再重新回一个ACK报文，同时从重置计时器为2MSL。")]),_._v(" "),v("li",[_._v("如果没有TIME_WAIT状态，客户端直接进入CLOSE状态，回复的就是RST，"),v("strong",[_._v("那么客户端就不是正常终止连接而是异常终止")])])])])])])]),_._v(" "),v("p",[v("strong",[_._v("2.TIME_WAIT状态过多的危害")])]),_._v(" "),v("ul",[v("li",[_._v("第一是"),v("strong",[_._v("占用系统资源")]),_._v("，比如文件描述符、内存资源、CPU 资源、线程资源等；")]),_._v(" "),v("li",[_._v("第二是"),v("strong",[_._v("占用端口资源")]),_._v("，端口资源也是有限的，一般可以开启的端口为 "),v("code",[_._v("32768～61000")]),_._v("，也可以通过 "),v("code",[_._v("net.ipv4.ip_local_port_range")]),_._v("参数指定范围。不过根据是客户端和服务端TIME_WAIT不同，影响并不一样，\n"),v("ul",[v("li",[v("strong",[_._v("如果客户端（主动发起关闭连接方）的 TIME_WAIT 状态过多，占满了所有端口资源")]),_._v("，那么就无法对「目的 IP+ 目的 PORT」都"),v("strong",[_._v("一样的服务端")]),_._v("发起连接了。但是可以跟不一样的服务端再建立起连接")]),_._v(" "),v("li",[v("strong",[_._v("如果服务端（主动发起关闭连接方）的 TIME_WAIT 状态过多，并不会导致端口资源受限")]),_._v("，因为服务端只监听一个端口，而且由于一个四元组唯一确定一个 TCP 连接，因此理论上服务端可以建立很多连接，但是 TCP 连接过多，会占用系统资源，比如文件描述符、内存资源、CPU 资源、线程资源等。")])])])]),_._v(" "),v("h3",{attrs:{id:"tcp重传-滑动窗口-流量控制-拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp重传-滑动窗口-流量控制-拥塞控制"}},[_._v("#")]),_._v(" TCP重传，滑动窗口，流量控制，拥塞控制")]),_._v(" "),v("p",[_._v("Question：TCP如何保证可靠性的呢？")]),_._v(" "),v("p",[_._v("为了实现可靠性传输，需要考虑很多事情，"),v("strong",[_._v("例如数据的破坏、丢包、重复以及分片顺序混乱等问题")]),_._v("。如不能解决这些问题，也就无从谈起可靠传输。")]),_._v(" "),v("p",[_._v("为了可靠性实现的机制包括："),v("strong",[_._v("重传机制、滑动窗口、流量控制、拥塞控制。")])]),_._v(" "),v("ul",[v("li",[_._v("其中重传机制还依赖了序列号与确认应答")])]),_._v(" "),v("h4",{attrs:{id:"重传机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重传机制"}},[_._v("#")]),_._v(" "),v("strong",[_._v("重传机制")])]),_._v(" "),v("p",[v("strong",[_._v("TCP 实现可靠传输的方式之一，是通过序列号与确认应答。")])]),_._v(" "),v("ul",[v("li",[_._v("在 TCP 中，当发送端的数据到达接收主机时，接收端主机会返回一个确认应答消息，表示已收到消息。")]),_._v(" "),v("li",[_._v("比如主机A发送1000的序号给主机B，那么主机B应该回复应答序号为1001")])]),_._v(" "),v("p",[_._v("在数据丢失时，会用重传机制解决。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("超时重传")]),_._v(" "),v("ul",[v("li",[_._v("重传机制的其中一个方式，就是在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 "),v("code",[_._v("ACK")]),_._v(" 确认应答报文，就会重发该数据，也就是我们常说的"),v("strong",[_._v("超时重传")]),_._v("。")])])]),_._v(" "),v("li",[v("p",[_._v("快速重传")]),_._v(" "),v("ul",[v("li",[_._v("TCP 还有另外一种"),v("strong",[_._v("快速重传（Fast Retransmit）机制")]),_._v("，它"),v("strong",[_._v("不以时间为驱动，而是以数据驱动重传")]),_._v("。")]),_._v(" "),v("li",[v("strong",[_._v("如果主机A收到三次相同序号的应答（ACK），就会触发快速重传")])]),_._v(" "),v("li",[_._v("问题：不知道重传一个还是全部")])])]),_._v(" "),v("li",[v("p",[_._v("SACK")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("选择性确认")]),_._v("。")]),_._v(" "),v("p",[_._v("这种方式需要在 TCP 头部「选项」字段里加一个 "),v("code",[_._v("SACK")]),_._v(" 的东西，它"),v("strong",[_._v("可以将已收到的数据的信息发送给「发送方」")]),_._v("，这样发送方就可以知道哪些数据收到了，哪些数据没收到，知道了这些信息，就可以"),v("strong",[_._v("只重传丢失的数据")]),_._v("。")])])])]),_._v(" "),v("li",[v("p",[_._v("D-SACK")]),_._v(" "),v("ul",[v("li",[_._v("Duplicate SACK 又称 "),v("code",[_._v("D-SACK")]),_._v("，其主要"),v("strong",[_._v("使用了 SACK 来告诉「发送方」有哪些数据被重复接收了。")])])])])]),_._v(" "),v("h4",{attrs:{id:"滑动窗口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[_._v("#")]),_._v(" 滑动窗口")]),_._v(" "),v("p",[v("strong",[_._v("场景：")])]),_._v(" "),v("p",[_._v("TCP 是每发送一个数据，都要进行一次确认应答。当上一个数据包收到了应答了， 再发送下一个**。这样的话，效率并不高**")]),_._v(" "),v("ul",[v("li",[_._v("数据包的"),v("strong",[_._v("往返时间越长，通信的效率就越低")]),_._v("。")])]),_._v(" "),v("p",[_._v("为解决这个问题，TCP 引入了"),v("strong",[_._v("窗口")]),_._v("这个概念。即使在往返时间较长的情况下，它也不会降低网络通信的效率。")]),_._v(" "),v("p",[_._v("那么有了窗口，就可以指定窗口大小，"),v("strong",[_._v("窗口大小就是指无需等待确认应答，而可以继续发送数据的最大值。")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("窗口的实现实际上是"),v("strong",[_._v("操作系统开辟的一个缓存空间")]),_._v("，发送方主机在等到确认应答返回之前，必须在缓冲区中保留已发送的数据。如果按期收到确认应答，此时数据就可以从缓存区清除。")]),_._v(" "),v("ul",[v("li",[_._v("如果没有收到应答，也可以从缓冲区读取数据重发")])])]),_._v(" "),v("li",[v("p",[_._v("这里说的是发送窗口和接受窗口")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("通常滑动窗口的大小是通过接收方的窗口大小决定的")])]),_._v(" "),v("li",[_._v("接收窗口的大小是"),v("strong",[_._v("约等于")]),_._v("发送窗口的大小的")])])])]),_._v(" "),v("p",[v("strong",[_._v("滑动窗口到底是什么？")])]),_._v(" "),v("p",[_._v("具体来说：滑动窗口协议中"),v("strong",[_._v("发送方和接收方维护一个动态的窗口大小，用于控制发送数据的数量，并确保数据的按序接收和流畅传输")]),_._v("。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("窗口大小就是指无需等待确认应答，而可以继续发送数据的最大值。")])]),_._v(" "),v("li",[_._v("TCP 头里有一个字段叫 "),v("code",[_._v("Window")]),_._v("，也就是窗口大小。"),v("strong",[_._v("这个字段是接收端告诉发送端自己还有多少缓冲区可以接收数据。于是发送端就可以根据这个接收端的处理能力来发送数据，而不会导致接收端处理不过来。")])]),_._v(" "),v("li",[_._v("窗口的实现实际上是"),v("strong",[_._v("操作系统开辟的一个缓存空间")]),_._v("，发送方主机在等到确认应答返回之前，必须在缓冲区中保留已发送的数据。如果按期收到确认应答，此时数据就可以从缓存区清除。")])]),_._v(" "),v("h4",{attrs:{id:"流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[_._v("#")]),_._v(" 流量控制")]),_._v(" "),v("p",[_._v("发送方如果一直无脑的发数据给对方，"),v("strong",[_._v("但对方处理不过来，那么就会导致触发重发机制")]),_._v("，从而导致网络流量的无端的浪费。")]),_._v(" "),v("p",[_._v("为了解决这个问题，"),v("strong",[_._v("TCP 提供一种机制可以让「发送方」根据「接收方」的实际接收能力控制发送的数据量，这就是所谓的流量控制。")])]),_._v(" "),v("p",[_._v("流量控制的核心是"),v("strong",[_._v("接收方根据其接收窗口的大小，通知发送方调整数据的发送速率。当接收方处理能力不足或缓冲区接近满状态时，它会将接收窗口大小设置得较小，发送方据此减少发送的数据量，避免数据溢出。")])]),_._v(" "),v("h4",{attrs:{id:"拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[_._v("#")]),_._v(" 拥塞控制")]),_._v(" "),v("p",[_._v("流量控制是避免「发送方」的数据填满「接收方」的缓存，但是并不知道网络的中发生了什么。")]),_._v(" "),v("p",[_._v("一般来说，计算机网络都处在一个共享的环境。因此也有可能会因为其他主机之间的通信使得网络拥堵。")]),_._v(" "),v("p",[_._v("场景：")]),_._v(" "),v("p",[v("strong",[_._v("在网络出现拥堵时，如果继续发送大量数据包，可能会导致数据包时延、丢失等，这时 TCP 就会重传数据，但是一重传就会导致网络的负担更重，于是会导致更大的延迟以及更多的丢包，这个情况就会进入恶性循环被不断地放大....")])]),_._v(" "),v("p",[_._v("为了避免上面的场景，所以TCP引入拥塞控制，")]),_._v(" "),v("p",[v("strong",[_._v("拥塞控制")]),_._v("，控制的目的就是"),v("strong",[_._v("避免「发送方」的数据填满整个网络。")])]),_._v(" "),v("ul",[v("li",[_._v("为了在「发送方」调节所要发送数据的量，定义了一个叫做「"),v("strong",[_._v("拥塞窗口")]),_._v("」的概念。")])]),_._v(" "),v("p",[v("strong",[_._v("拥塞窗口 cwnd")]),_._v("是发送方维护的一个的状态变量，它会根据"),v("strong",[_._v("网络的拥塞程度动态变化的")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("Question :拥塞窗口和滑动窗口的关系？")])]),_._v(" "),v("ul",[v("li",[_._v("我们在前面提到过发送窗口 "),v("code",[_._v("swnd")]),_._v(" 和接收窗口 "),v("code",[_._v("rwnd")]),_._v(" 是约等于的关系，"),v("strong",[_._v("那么由于加入了拥塞窗口的概念后，此时发送窗口的值是swnd = min(cwnd, rwnd)，也就是拥塞窗口和接收窗口中的最小")]),_._v("值。")]),_._v(" "),v("li",[_._v("只要网络中没有出现拥塞，"),v("code",[_._v("cwnd")]),_._v(" 就会增大；但网络中出现了拥塞，"),v("code",[_._v("cwnd")]),_._v(" 就减少；")])]),_._v(" "),v("p",[_._v("那么怎么知道当前网络是否出现了拥塞呢？")]),_._v(" "),v("ul",[v("li",[_._v("其实只要「发送方」没有在规定时间内接收到 ACK 应答报文，也就是"),v("strong",[_._v("发生了超时重传，就会认为网络出现了拥塞。")])])]),_._v(" "),v("p",[_._v("拥塞控制主要是四个算法：")]),_._v(" "),v("p",[v("strong",[_._v("主要就是对cwnd拥塞窗口做控制")])]),_._v(" "),v("ul",[v("li",[_._v("慢启动\n"),v("ul",[v("li",[_._v("TCP 在刚建立连接完成后，首先是有个慢启动的过程，这个慢启动的意思就是一点一点的提高发送数据包的数量，如果一上来就发大量的数据，这不是给网络添堵吗？")]),_._v(" "),v("li",[_._v("慢启动的算法记住一个规则就行："),v("strong",[_._v("当发送方每收到一个 ACK，拥塞窗口 cwnd 的大小就会加 1。")]),_._v(" "),v("ul",[v("li",[_._v("这是指数增长的，比如cwnd=2，那么收到2，就会增长到4......")])])]),_._v(" "),v("li",[_._v("上限是多少？\n"),v("ul",[v("li",[_._v("有一个叫慢启动门限 "),v("code",[_._v("ssthresh")]),_._v(" （slow start threshold）状态变量。\n"),v("ul",[v("li",[_._v("当 "),v("code",[_._v("cwnd")]),_._v(" < "),v("code",[_._v("ssthresh")]),_._v(" 时，使用慢启动算法。")]),_._v(" "),v("li",[_._v("当 "),v("code",[_._v("cwnd")]),_._v(" >= "),v("code",[_._v("ssthresh")]),_._v(" 时，就会使用「拥塞避免算法」。")])])])])])])]),_._v(" "),v("li",[_._v("拥塞避免\n"),v("ul",[v("li",[_._v("当拥塞窗口 "),v("code",[_._v("cwnd")]),_._v(" 「超过」慢启动门限 "),v("code",[_._v("ssthresh")]),_._v(" 就会进入拥塞避免算法。\n"),v("ul",[v("li",[_._v("一般来说 "),v("code",[_._v("ssthresh")]),_._v(" 的大小是 "),v("code",[_._v("65535")]),_._v(" 字节。那么进入拥塞避免算法后，它的规则是："),v("strong",[_._v("每当收到一个 ACK 时，cwnd 增加 1/cwnd。")])]),_._v(" "),v("li",[_._v("也就是拥塞窗口的增长从指数增长变成了线性增长")])])])])]),_._v(" "),v("li",[_._v("拥塞发生\n"),v("ul",[v("li",[_._v("当网络出现拥塞，也就是会发生数据包重传，重传机制主要有两种：\n"),v("ul",[v("li",[_._v("超时重传\n"),v("ul",[v("li",[v("code",[_._v("ssthresh")]),_._v(" 设为 "),v("code",[_._v("cwnd/2")]),_._v("，")]),_._v(" "),v("li",[v("code",[_._v("cwnd")]),_._v(" 重置为 "),v("code",[_._v("1")]),_._v(" （是恢复为 cwnd 初始化值，我这里假定 cwnd 初始化值 1）")])])]),_._v(" "),v("li",[_._v("快速重传\n"),v("ul",[v("li",[_._v("TCP认为这种情况不严重")]),_._v(" "),v("li",[v("code",[_._v("cwnd = cwnd/2")]),_._v(" ，也就是设置为原来的一半;")]),_._v(" "),v("li",[v("code",[_._v("ssthresh = cwnd")]),_._v(";")]),_._v(" "),v("li",[_._v("进入快速恢复算法")])])])])])])]),_._v(" "),v("li",[_._v("快速恢复\n"),v("ul",[v("li",[_._v("拥塞窗口 "),v("code",[_._v("cwnd = ssthresh + 3")]),_._v(" （ 3 的意思是确认有 3 个数据包被收到了）；")]),_._v(" "),v("li",[_._v("重传丢失的数据包；")]),_._v(" "),v("li",[_._v("如果再收到重复的 ACK，那么 cwnd 增加 1；")]),_._v(" "),v("li",[_._v("如果收到新数据的 ACK 后，把 cwnd 设置为第一步中的 ssthresh 的值，原因是该 ACK 确认了新的数据，说明从 duplicated ACK 时的数据都已收到，该恢复过程已经结束，可以回到恢复之前的状态了，也即再次进入拥塞避免状态；")])])])]),_._v(" "),v("h2",{attrs:{id:"ip"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[_._v("#")]),_._v(" IP")]),_._v(" "),v("h3",{attrs:{id:"dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[_._v("#")]),_._v(" DNS")]),_._v(" "),v("p",[_._v("DNS（Domain Name System）即域名系统。主要作用是将域名（如example.com）解析为与之对应的 IP 地址。")]),_._v(" "),v("p",[v("strong",[_._v("工作原理：")])]),_._v(" "),v("ul",[v("li",[_._v("当用户查询域名时，会向DNS服务器发送一个查询请求，DNS服务器返回域名对应IP地址。")]),_._v(" "),v("li",[_._v("注意DNS服务器采用分布式数据库，，信息不集中存储，而是分布在全球各地的 DNS 服务器中，以提高查询效率和容错性。")])]),_._v(" "),v("p",[v("strong",[_._v("作用：")])]),_._v(" "),v("p",[_._v("除了域名解析，DNS还可以有下面三个用处")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("负载均衡")]),_._v("：DNS 也可用于负载均衡，"),v("strong",[_._v("通过将一个域名映射到多个 IP 地址，DNS 服务器可以将流量分发到多个服务器上")]),_._v("，实现负载均衡，提高性能和可靠性。")]),_._v(" "),v("li",[v("strong",[_._v("反向解析")]),_._v("：除了将域名解析为 IP 地址，"),v("strong",[_._v("DNS 还支持反向解析，即将 IP 地址解析为对应的域名。")])]),_._v(" "),v("li",[v("strong",[_._v("缓存")]),_._v("：DNS 可以缓存解析结果，减少网络流量和提高解析速度**。客户端和中间 DNS 服务器会缓存最近的解析结果**，当再次访问相同的域名时，可以直接从缓存中获取，而不必再次查询 DNS 服务器。")])]),_._v(" "),v("h3",{attrs:{id:"dhcp协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dhcp协议"}},[_._v("#")]),_._v(" DHCP协议")]),_._v(" "),v("p",[_._v("DHCP（Dynamic Host Configuration Protocol）即"),v("strong",[_._v("动态主机配置协议")]),_._v("，用于"),v("strong",[_._v("自动分配 IP 地址、子网掩码、默认网关、DNS 服务器等网络配置信息")]),_._v("给网络中的设备。")]),_._v(" "),v("p",[v("strong",[_._v("DHCP 服务器是负责分配 IP 地址和其他网络配置信息的设备")]),_._v("，通常在网络中的路由器、交换机或专门的 DHCP 服务器上运行。")]),_._v(" "),v("p",[_._v("工作原理：")]),_._v(" "),v("ul",[v("li",[_._v("当设备连接到网络时，"),v("strong",[_._v("它发送一个 DHCP 请求广播包，请求获取网络配置信息")]),_._v("。")]),_._v(" "),v("li",[_._v("DHCP 服务器收到请求后，为设备分配一个可用的 IP 地址，并"),v("strong",[_._v("返回包含网络配置信息的 DHCP 报文")]),_._v("。")]),_._v(" "),v("li",[_._v("分配的 IP 地址具有租期，设备在租期结束前需要向 DHCP 服务器请求续约。")])]),_._v(" "),v("h3",{attrs:{id:"arp协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#arp协议"}},[_._v("#")]),_._v(" ARP协议")]),_._v(" "),v("p",[_._v("ARP（Address Resolution Protocol，地址解析协议）是一种用于"),v("strong",[_._v("将网络层的P地址解析为数据链路层的MAC地址的协议")]),_._v("。ARP协议在局域网（LAN）中起着至关重要的作用，它帮助设备在同一网络中找到目标设备的MAC地址，以便正确地将数据包发送到目标设备。")]),_._v(" "),v("p",[_._v("重要特点：")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("广播通信")]),_._v("：ARP请求消息通常以广播形式发送到网络上的所有设备，目标设备收到请求后会回复包含自己MAC地址的ARP响应消息。")]),_._v(" "),v("li",[v("strong",[_._v("缓存机制")]),_._v("：设备在收到ARP响应后会将IP地址和对应的MAC地址存储在"),v("strong",[_._v("本地ARP缓存")]),_._v("中，以提高后续通信效率。")])]),_._v(" "),v("p",[v("strong",[_._v("ARP攻击是什么？")])]),_._v(" "),v("p",[v("strong",[_._v("APR欺骗")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("攻击者发送虚假的ARP响应消息到局域网中，声称自己拥有另一设备的IP地址对应的MAC地址。当其他设备需要与目标设备通信时，会根据收到的虚假ARP响应消息将数据发送到攻击者的设备上。攻击者可以利用这种方式窃取数据、监视通信或进行"),v("strong",[_._v("中间人攻击")]),_._v("。")])]),_._v(" "),v("p",[v("strong",[_._v("ARP泛洪")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("攻击者发送"),v("strong",[_._v("大量虚假的ARP请求消息到局域网中，以淹没网络中所有设备的ARP缓存")]),_._v("。这会使网络设备无法正确解析IP地址和MAC地址的映射关系，导致网络通信受阻。")])]),_._v(" "),v("h3",{attrs:{id:"icmp协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#icmp协议"}},[_._v("#")]),_._v(" ICMP协议")]),_._v(" "),v("p",[_._v("ICMP 全称是 "),v("strong",[_._v("Internet Control Message Protocol")]),_._v("，也就是"),v("strong",[_._v("互联网控制报文协议")]),_._v("。")]),_._v(" "),v("p",[_._v("ICMP协议用于"),v("strong",[_._v("在IP网络上发送控制消息和错误报告")]),_._v("。ICMP消息通常由网络设备（如路由器、防火墙）或网络操作系统生成和处理。")]),_._v(" "),v("p",[v("strong",[_._v("重要消息类型：")])]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("ICMP Echo Request / Reply")]),_._v("：用于执行"),v("strong",[_._v("Ping测试")]),_._v("，发送Echo请求并等待目标主机的Echo回复。")]),_._v(" "),v("li",[v("strong",[_._v("ICMP Destination Unreachable")]),_._v("：当数据包无法到达目标主机时，目标主机发送此消息给源主机。")]),_._v(" "),v("li",[v("strong",[_._v("ICMP Time Exceeded")]),_._v("：当数据包生存时间（TTL）超过时，路由器会发送此消息给源主机。")]),_._v(" "),v("li",[v("strong",[_._v("ICMP Redirect")]),_._v("：用于通知主机一个更好的路由选择。")])]),_._v(" "),v("h2",{attrs:{id:"面试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试"}},[_._v("#")]),_._v(" 面试")]),_._v(" "),v("p",[_._v("1.TCP中在三次握手建立连接时，如果第三次握手时的ACK丢失了会怎么样？")]),_._v(" "),v("p",[_._v("客户端收到服务端的 SYN-ACK 报文后，就会给服务端回一个 ACK 报文，也就是第三次握手，"),v("strong",[_._v("此时客户端状态进入到 "),v("code",[_._v("ESTABLISH")]),_._v(" 状态。")])]),_._v(" "),v("p",[_._v("因为这个第三次握手的 ACK 是对第二次握手的 SYN 的确认报文，所以当第三次握手丢失了，"),v("strong",[_._v("如果服务端那一方迟迟收不到这个确认报文，就会触发超时重传机制，重传 SYN-ACK 报文，直到收到第三次握手，或者达到最大重传次数。")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("简单来说，就是如果第三次握手时，如果客户端回复的ack丢失了。那么出发服务端的重传机制，重传"),v("code",[_._v("syn+ack")]),_._v("，然后客户端再传a")])]),_._v(" "),v("li",[v("p",[_._v("注意，"),v("strong",[_._v("ACK 报文是不会有重传的，当 ACK 丢失了，就由对方重传对应的报文")]),_._v("。也就是"),v("code",[_._v("syn+ack")]),_._v("，然后再传对应的"),v("code",[_._v("ack")]),_._v("回去")])])]),_._v(" "),v("p",[_._v("2.多个TCP连接可以绑定同一个端口吗？UDP连接和TCP连接可以共用一个端口吗？")]),_._v(" "),v("p",[_._v("多个TCP连接不能绑定同一个端口，但是TCP连接和UDP连接可以共用一个端口。")]),_._v(" "),v("p",[_._v("在数据链路层中，"),v("strong",[_._v("通过 MAC 地址来寻找局域网中的主机。在网际层中，通过 IP 地址来寻找网络中互连的主机或路由器。在传输层中，需要通过端口进行寻址，来识别同一计算机中同时通信的不同应用程序")]),_._v("。")]),_._v(" "),v("p",[_._v("而TCP和UDP是不同的模块，")]),_._v(" "),v("p",[_._v("当主机收到数据包后，"),v("strong",[_._v("可以在 IP 包头的「协议号」字段知道该数据包是 TCP/UDP")]),_._v("，所以可以根据这个信息确定送给哪个模块（TCP/UDP）处理，送给 TCP/UDP 模块的报文根据「端口号」确定送给哪个应用程序处理。")]),_._v(" "),v("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240825212953649.png",alt:"image-20240825212953649"}}),_._v(" "),v("h3",{attrs:{id:"ping的工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ping的工作原理"}},[_._v("#")]),_._v(" Ping的工作原理")]),_._v(" "),v("p",[_._v("ping 是基于 "),v("code",[_._v("ICMP")]),_._v(" 协议工作的，所以要明白 ping 的工作，首先我们先来熟悉 "),v("strong",[_._v("ICMP 协议")]),_._v("。")]),_._v(" "),v("p",[_._v("主机 A 执行"),v("code",[_._v("ping")]),_._v(" 主机 B 后，")]),_._v(" "),v("p",[_._v("ping 命令执行的时候，源主机首先会构建一个 "),v("strong",[_._v("ICMP 回送请求消息")]),_._v("数据包。")]),_._v(" "),v("p",[_._v("ICMP 数据包内包含多个字段，最重要的是两个：")]),_._v(" "),v("ul",[v("li",[_._v("第一个是"),v("strong",[_._v("类型")]),_._v("，对于回送请求消息而言该字段为 "),v("code",[_._v("8")]),_._v("；")]),_._v(" "),v("li",[_._v("另外一个是"),v("strong",[_._v("序号")]),_._v("，主要用于区分连续 ping 的时候发出的多个数据包。")])]),_._v(" "),v("p",[_._v("如果目标主机B收到了这个数据包，会构建一个 "),v("strong",[_._v("ICMP 回送响应消息")]),_._v("数据包")]),_._v(" "),v("ul",[v("li",[_._v("回送响应数据包的"),v("strong",[_._v("类型")]),_._v("字段为 "),v("code",[_._v("0")]),_._v("，"),v("strong",[_._v("序号")]),_._v("为接收到的请求数据包中的序号，然后再发送出去给主机 A")])])])}),[],!1,null,null,null);v.default=r.exports}}]);