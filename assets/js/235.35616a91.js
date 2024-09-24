(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{565:function(s,n,a){"use strict";a.r(n);var l=a(4),e=Object(l.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("这个环境配置主要是给CMU15445的环境做支撑，网上看了很多博客，但是写的都很粗略，不适合我等小白")]),s._v(" "),n("p",[n("strong",[s._v("1.选择开发方式")])]),s._v(" "),n("p",[s._v("这个项目要求用ubuntun22.04+clang来开发，当然我们一般用的是windows，这里看很多人用的wsl。也可以用linux服务器。")]),s._v(" "),n("p",[s._v("注意，linux服务器性能一定要够，我本来买了2核2g的阿里云去做这个实验，结果build项目直接死机了（几次都这样）。")]),s._v(" "),n("p",[s._v("最后无奈，我选择的方法也是"),n("code",[s._v("vscode +wsl")]),s._v("来做这个项目")]),s._v(" "),n("blockquote",[n("p",[s._v("vscode debug也很麻烦，最后还是建议用clion")])]),s._v(" "),n("p",[n("strong",[s._v("下面开始装各种环境")])]),s._v(" "),n("p",[s._v("首先是"),n("code",[s._v("win+r")]),s._v("打开cmd，安装一个"),n("code",[s._v("wsl --install -d Ubuntun-22.04")]),s._v("装上ubuntu22.04。")]),s._v(" "),n("p",[s._v("然后vscode也装一个插件"),n("code",[s._v("wsl")]),s._v(",并且连接上子系统的ubuntu22.04。")]),s._v(" "),n("p",[s._v("首先"),n("code",[s._v("sudo apt update")]),s._v(",")]),s._v(" "),n("p",[s._v("然后"),n("code",[s._v("sudo apt install cmake clang-12 gdb")])]),s._v(" "),n("p",[n("strong",[s._v("配置git环境")])]),s._v(" "),n("p",[s._v("设置用户")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('git config --global user.name "xxx"\ngit config --global user.email "xxx.com"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("每次提交都还要输入账号密码，因此这里我们配置ssh密钥来免输入密码。")]),s._v(" "),n("p",[s._v("首先再wsl中输入"),n("code",[s._v('ssh-keygen -t rsa -C "xxx@qq.com"')]),s._v("生成公钥与私钥。")]),s._v(" "),n("p",[s._v("然后复制公钥到gittee平台之上。公钥在"),n("code",[s._v("~/.ssh/id_rsa.pub")])]),s._v(" "),n("blockquote",[n("p",[s._v("如果出现验证错误的情况，可能是没缓存刷新，关闭窗口重新打开即可")]),s._v(" "),n("p",[s._v("按F1，输入"),n("code",[s._v("reload")]),s._v(",可以选择重新加载窗口的命令")])]),s._v(" "),n("p",[s._v("配置IDE")]),s._v(" "),n("p",[s._v("安装clashd")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("安装clangd服务器\nsudo apt-get install clangd-12\n将clangd-12设为默认clangd\nsudo update-alternatives --install /usr/bin/clangd clangd /usr/bin/clangd-12 100\n帮助clangd理解你的代码，任意目录执行\nln -sf /build/compile_commands.json .   \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("strong",[s._v("2.clion的使用")])]),s._v(" "),n("p",[s._v("注意编译器设置为wsl即可，因为我们的wsl装了clang环境的")])])}),[],!1,null,null,null);n.default=e.exports}}]);