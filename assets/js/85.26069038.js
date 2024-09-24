(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{415:function(t,v,_){"use strict";_.r(v);var a=_(4),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("操作系统的核心在于内核，这里主要了解Linux内核")]),t._v(" "),v("h2",{attrs:{id:"内核"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内核"}},[t._v("#")]),t._v(" 内核")]),t._v(" "),v("p",[t._v("计算机是由各种外部硬件设备组成的，比如内存、cpu、硬盘等，如果每个应用都要和这些硬件设备对接通信协议，那这样太累了，所以这个中间人就由内核来负责，"),v("strong",[t._v("让内核作为应用连接硬件设备的桥梁")]),t._v("，应用程序只需关心与内核交互，不用关心硬件的细节。")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240331100258548.png",alt:"image-20240331100258548"}}),t._v(" "),v("p",[t._v("现代操作系统，内核一般会提供 4 个基本能力：")]),t._v(" "),v("ul",[v("li",[t._v("管理进程、线程，决定哪个进程、线程使用 CPU，也就是"),v("strong",[t._v("进程调度")]),t._v("的能力；")]),t._v(" "),v("li",[t._v("管理内存，决定内存的分配和回收，也就是"),v("strong",[t._v("内存管理")]),t._v("的能力；")]),t._v(" "),v("li",[t._v("管理硬件设备，为进程与硬件设备之间提供通信能力，也就是"),v("strong",[t._v("硬件通信能力")]),t._v("；")]),t._v(" "),v("li",[t._v("提供系统调用，如果应用程序要运行更高权限运行的服务，那么就需要有"),v("strong",[t._v("系统调用，它是用户程序与操作系统之间的接口")])])]),t._v(" "),v("h3",{attrs:{id:"linux设计理念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux设计理念"}},[t._v("#")]),t._v(" Linux设计理念")]),t._v(" "),v("ul",[v("li",[t._v("MultiTask，多任务")]),t._v(" "),v("li",[t._v("SMP，对称多处理")]),t._v(" "),v("li",[t._v("ELF，可执行文件链接格式")]),t._v(" "),v("li",[t._v("Monolithic Kernel，宏内核")])]),t._v(" "),v("h4",{attrs:{id:"multitask"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#multitask"}},[t._v("#")]),t._v(" MultiTask")]),t._v(" "),v("p",[t._v("MultiTask 的意思是"),v("strong",[t._v("多任务")]),t._v("，代表着 Linux 是一个多任务的操作系统。")]),t._v(" "),v("p",[t._v("多任务意味着可以有多个任务同时执行，这里的「同时」可以是并发或并行：")]),t._v(" "),v("ul",[v("li",[t._v("对于单核 CPU 时，可以让每个任务执行一小段时间，时间到就切换另外一个任务，从宏观角度看，一段时间内执行了多个任务，这被称为并发。")]),t._v(" "),v("li",[t._v("对于多核 CPU 时，多个任务可以同时被不同核心的 CPU 同时执行，这被称为并行。")])]),t._v(" "),v("h4",{attrs:{id:"smp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#smp"}},[t._v("#")]),t._v(" SMP")]),t._v(" "),v("p",[t._v("SMP 的意思是"),v("strong",[t._v("对称多处理")]),t._v("，代表着每个 CPU 的地位是相等的，对资源的使用权限也是相同的，多个 CPU 共享同一个内存，每个 CPU 都可以访问完整的内存和硬件资源。")]),t._v(" "),v("p",[t._v("这个特点决定了 Linux 操作系统不会有某个 CPU 单独服务应用程序或内核程序，而是每个程序都可以被分配到任意一个 CPU 上被执行。")]),t._v(" "),v("h4",{attrs:{id:"elf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#elf"}},[t._v("#")]),t._v(" ELF")]),t._v(" "),v("p",[t._v("ELF 的意思是"),v("strong",[t._v("可执行文件链接格式")]),t._v("，它是 Linux 操作系统中可执行文件的存储格式，你可以从下图看到它的结构：")]),t._v(" "),v("p",[t._v("ELF 把文件分成了一个个分段，每一个段都有自己的作用。ELF 文件有两种索引，Program header table 中记录了「运行时」所需的段，而 Section header table 记录了二进制文件中各个「段的首地址」。")]),t._v(" "),v("h4",{attrs:{id:"monolithic-kernel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#monolithic-kernel"}},[t._v("#")]),t._v(" Monolithic Kernel")]),t._v(" "),v("p",[t._v("Monolithic Kernel 的意思是"),v("strong",[t._v("宏内核")]),t._v("，Linux 内核架构就是宏内核，意味着 Linux 的内核是一个完整的可执行程序，且拥有最高的权限。")]),t._v(" "),v("p",[t._v("宏内核的特征是系统内核的所有模块，比如进程调度、内存管理、文件系统、设备驱动等，都运行在内核态。")]),t._v(" "),v("blockquote",[v("p",[t._v("与宏内核相反的是"),v("strong",[t._v("微内核")]),t._v("，微内核架构的内核只保留最基本的能力，比如进程调度、虚拟机内存、中断等，把一些应用放到了用户空间，比如驱动程序、文件系统等。这样服务与服务之间是隔离的")])])])}),[],!1,null,null,null);v.default=s.exports}}]);