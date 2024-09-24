(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{389:function(t,a,s){"use strict";s.r(a);var r=s(4),v=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-命令"}},[t._v("#")]),t._v(" Linux 命令")]),t._v(" "),a("h2",{attrs:{id:"一些技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些技巧"}},[t._v("#")]),t._v(" 一些技巧")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612213044166.png",alt:"image-20230612213044166"}})]),t._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("h3",{attrs:{id:"文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[t._v("#")]),t._v(" 文件")]),t._v(" "),a("p",[a("code",[t._v("touch filename")]),t._v(" "),a("strong",[t._v("如果文件不存在，则新建文件")])]),t._v(" "),a("p",[a("code",[t._v("ls [-al][dir]")]),t._v(" "),a("strong",[t._v("显示指定目录下内容")])]),t._v(" "),a("ul",[a("li",[t._v("-a显示所有文件及目录（.开头的隐藏目录也会显示）")]),t._v(" "),a("li",[t._v("-l 除文件名之外，同时将文件型态（d是目录，-是文件），权限，拥有者，文件大小的等详细信息列出")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612213615583.png",alt:"image-20230612213615583"}})]),t._v(" "),a("p",[a("code",[t._v("cd [dir]")]),t._v(" "),a("strong",[t._v("切换目录")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612213716362.png",alt:"image-20230612213716362"}})]),t._v(" "),a("p",[a("code",[t._v("cat [-n] fileName")]),t._v(" "),a("strong",[t._v("查看文件内容")])]),t._v(" "),a("ul",[a("li",[t._v("-n：由1开始对所有输出的行数编号")]),t._v(" "),a("li",[t._v("cat /etc/profile 查看/etc目录下的profile文件内容")])]),t._v(" "),a("p",[a("code",[t._v("more fileName")]),t._v("  以分页形式展示文件内容")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612214020013.png",alt:"image-20230612214020013"}})]),t._v(" "),a("p",[a("code",[t._v("tail [-f] fileName")]),t._v(" "),a("strong",[t._v("查看文件末尾内容")])]),t._v(" "),a("ul",[a("li",[t._v("-f :"),a("strong",[t._v("动态读取文件末尾内容并显示")]),t._v("，"),a("strong",[t._v("通常用于日志文件的内容输出")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612214221325.png",alt:"image-20230612214221325"}})]),t._v(" "),a("h3",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("p",[a("code",[t._v("mkdir [-p] dirName")]),t._v(" "),a("strong",[t._v("创建目录")])]),t._v(" "),a("ul",[a("li",[t._v("-p:确保文件目录存在，不存在则创建。"),a("strong",[t._v("通过此选项，可以创建多级目录")])])]),t._v(" "),a("blockquote",[a("p",[t._v("例如mkdir -p /1/2/3 在当前目录创建一个分级目录1->2->3")])]),t._v(" "),a("p",[a("code",[t._v("rmdir [-p] dirName")]),t._v(" "),a("strong",[t._v("删除空目录")]),t._v("（有文件删不了）")]),t._v(" "),a("ul",[a("li",[t._v("-p:当子目录被删除后使父目录为空目录时，一并删除")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612214811276.png",alt:"image-20230612214811276"}})]),t._v(" "),a("p",[a("code",[t._v("rm [-rf] name")]),t._v(" "),a("strong",[t._v("删除文件或者目录")])]),t._v(" "),a("ul",[a("li",[t._v("-r: 将目录及目录中所有文件逐一删除，也就是递归删除")]),t._v(" "),a("li",[t._v("-f:无需确认，直接删除")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612215209322.png",alt:"image-20230612215209322"}})]),t._v(" "),a("p",[a("code",[t._v("cp [-r] source dest")]),a("strong",[t._v("用于复制文件或目录")])]),t._v(" "),a("ul",[a("li",[t._v("-r:如果复制的是目录时加上该参数，表示复制该目录所有子目录和文件、")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612215456804.png",alt:"image-20230612215456804"}})]),t._v(" "),a("p",[a("code",[t._v("mv source dest")]),t._v(" "),a("strong",[t._v("为文件或者目录改名。或者将文件/目录移动到其他地方（也能同时进行改名和移动）")])]),t._v(" "),a("blockquote",[a("p",[t._v("根据输入的参数自动判断是改名还是移动")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612215735355.png",alt:"image-20230612215735355"}})]),t._v(" "),a("h3",{attrs:{id:"解压-打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压-打包"}},[t._v("#")]),t._v(" 解压/打包")]),t._v(" "),a("p",[a("code",[t._v("tar [-zcxvf] fileName [files]")]),t._v(" "),a("strong",[t._v("对文件进行打包，解包，压缩，解压")])]),t._v(" "),a("blockquote",[a("p",[t._v("包后缀为.tar表示只是完成了打包，没有压缩")]),t._v(" "),a("p",[t._v("包后缀为.tar.gz表示打包的同时还进行了压缩")])]),t._v(" "),a("ul",[a("li",[t._v("-z: z代表gzip,通过gzip命令处理文件，gzip可以对文件压缩或者解压")]),t._v(" "),a("li",[t._v("-c:c代表的是craeate，即创建新的包文件")]),t._v(" "),a("li",[t._v("-x:x代表的是extract，实现从包文件中还原文件")]),t._v(" "),a("li",[t._v("-v:v代表的是verbose，显示命令执行过程")]),t._v(" "),a("li",[t._v("-f:f代表file，用于指定包文件名称")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612223242944.png",alt:"image-20230612223242944"}})]),t._v(" "),a("p",[a("strong",[t._v("案例")]),t._v("：假设在当前目录下有一个sbom目卢，我想把他下面的文件都打包")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tar -czvf sbom.tar.gz sbom\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240303150722027.png",alt:"image-20240303150722027"}})]),t._v(" "),a("p",[a("code",[t._v("find dirName -option fileName")]),t._v(" "),a("strong",[t._v("在指定目录下查找文件")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612223657228.png",alt:"image-20230612223657228"}})]),t._v(" "),a("p",[a("code",[t._v("grep word fileName")]),t._v(" "),a("strong",[t._v("从指定文件中从查找指定文本内容")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230612223808735.png",alt:"image-20230612223808735"}})]),t._v(" "),a("h2",{attrs:{id:"如何在服务器后台运行程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何在服务器后台运行程序"}},[t._v("#")]),t._v(" "),a("strong",[t._v("如何在服务器后台运行程序")])]),t._v(" "),a("p",[t._v("nohup命令 英文全程no hang up,"),a("strong",[t._v("作用是在后台运行程序")])]),t._v(" "),a("p",[t._v("基本格式为"),a("code",[t._v("nohup command [arg … ] [ & ]")])]),t._v(" "),a("p",[t._v("一般我们linux运行可以直接，"),a("code",[t._v("python test.py")]),t._v(" 这样，但是在窗口关闭的时候，这段命令也就失效了")]),t._v(" "),a("p",[t._v("这时候我们可以用："),a("code",[t._v("nohup python test.py")]),t._v(" &来运行，"),a("strong",[t._v("并且会把控制台输出打印到nohup.out（就是print）")])]),t._v(" "),a("p",[a("strong",[t._v("重定向输出")])]),t._v(" "),a("p",[a("code",[t._v("nohup python main.py &>main.log &")]),t._v("  运行main.py，并将日志输出到main.log")]),t._v(" "),a("p",[a("strong",[t._v("补充")]),t._v("：")]),t._v(" "),a("p",[t._v("ps -a可以查看所有进程，kill pid可以杀掉该进程")]),t._v(" "),a("h2",{attrs:{id:"路径问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径问题"}},[t._v("#")]),t._v(" 路径问题")]),t._v(" "),a("h3",{attrs:{id:"打印路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打印路径"}},[t._v("#")]),t._v(" "),a("strong",[t._v("打印路径")])]),t._v(" "),a("p",[a("code",[t._v("pwd")]),t._v("，打印当前路径")]),t._v(" "),a("p",[t._v("这是个通用问题，路径中不要有中文，不要有空格，或者特殊符号，一定不能有")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("wsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--import")]),t._v(" docker-desktop D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Program Files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-desktop docker-desktop.tar\n\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--import")]),t._v(" docker-desktop-data D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Program Files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-desktop-data docker-desktop-data.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2023.03.28  因为Program Files中有一个空格，导致参数识别错误（因为命令靠空格识别参数）命令一直不生效")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"查找某个进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找某个进程"}},[t._v("#")]),t._v(" 查找某个进程")]),t._v(" "),a("p",[t._v("lsof -i:8182")]),t._v(" "),a("p",[t._v("查找那个进程占用8182端口")]),t._v(" "),a("h2",{attrs:{id:"为用户授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为用户授权"}},[t._v("#")]),t._v(" 为用户授权")]),t._v(" "),a("p",[a("strong",[t._v("chomd (change mode)控制用户对文件的权限的命令")])]),t._v(" "),a("p",[t._v("Linux 中权限为2：读（r），写（w），执行（x）三种权限")]),t._v(" "),a("p",[t._v("文件调用分为三级：文件所有者（Owner）,用户组(Group),其他用户(other user)")]),t._v(" "),a("p",[t._v("只有root和owner可以修改文件目录的权限")]),t._v(" "),a("p",[t._v("要执行shell脚本需要有对此脚本的执行权限，如果没有就不能执行")]),t._v(" "),a("blockquote",[a("p",[t._v("如果没有，报错permmsion denied")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230613091826290.png",alt:"image-20230613091826290"}})]),t._v(" "),a("h2",{attrs:{id:"下载文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载文件"}},[t._v("#")]),t._v(" 下载文件")]),t._v(" "),a("p",[t._v("可以先pwd打印当前路径，然后sz +目录，会弹出下载窗口，可以下载")]),t._v(" "),a("p",[a("code",[t._v("sz /root/wj/redis-7.0.11/redis.conf")])]),t._v(" "),a("h2",{attrs:{id:"调试相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试相关"}},[t._v("#")]),t._v(" 调试相关")]),t._v(" "),a("p",[t._v("top命令")]),t._v(" "),a("blockquote",[a("p",[t._v("top命令 可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具。通过top命令所提供的互动式界面，用热键可以管理。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);