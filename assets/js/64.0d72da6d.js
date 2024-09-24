(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{395:function(a,s,e){"use strict";e.r(s);var t=e(4),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"查找镜像和容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找镜像和容器"}},[a._v("#")]),a._v(" 查找镜像和容器")]),a._v(" "),s("p",[s("code",[a._v("docker ps")])]),a._v(" "),s("p",[s("code",[a._v("docker exec -it 947b /bin/bash")]),a._v(" 在bash里控制容器")]),a._v(" "),s("p",[a._v("docker stop ID")]),a._v(" "),s("p",[a._v("docker restart ID")]),a._v(" "),s("p",[a._v("docker logs Id  #查看某个容器运行日志")]),a._v(" "),s("p",[a._v("docker ps - a grep | name #根据名字查找容器")]),a._v(" "),s("h2",{attrs:{id:"删除容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[a._v("#")]),a._v(" "),s("strong",[a._v("删除容器：")])]),a._v(" "),s("p",[a._v("首先需要停止容器")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("删除容器")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"删除镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[a._v("#")]),a._v(" "),s("strong",[a._v("删除镜像：")])]),a._v(" "),s("p",[s("code",[a._v("docker rmi id")])]),a._v(" "),s("blockquote",[s("p",[a._v("docker中一般都要设置配置文件，可以使用vim来完成，记录一些vim操作")])]),a._v(" "),s("p",[s("strong",[a._v("vim 复制所有")]),a._v("\nggvG,选中全部")]),a._v(" "),s("p",[a._v("​\tyy，把选中内容复制到临时区")]),a._v(" "),s("p",[a._v("​\tP（大写），复制")]),a._v(" "),s("p",[a._v("vim 打开新文件")]),a._v(" "),s("p",[a._v("​\t:n a.txt    命令模式下:n  文件名，即可切换到新文件")]),a._v(" "),s("h2",{attrs:{id:"查看镜像日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像日志"}},[a._v("#")]),a._v(" 查看镜像日志")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--since")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2023-01-01"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v("  45505813ce0b（容器的名称，即NAMES）\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("-f 参数是持续查看日志")]),a._v(" "),s("p",[a._v("docker logs --help 查看帮助")])]),a._v(" "),s("h2",{attrs:{id:"进入容器-bash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入容器-bash"}},[a._v("#")]),a._v(" 进入容器 bash")]),a._v(" "),s("p",[a._v("首先要保证容器处于启动状态")]),a._v(" "),s("p",[a._v("如果没有启动，可以"),s("code",[a._v("docker start name/id")])]),a._v(" "),s("p",[a._v("之后用如下命令进入bash")]),a._v(" "),s("p",[s("code",[a._v("docker exec -i -t name/id /bin/bash")])]),a._v(" "),s("p",[a._v("exit可以退出")]),a._v(" "),s("p",[a._v("但是一般docker镜像里没有可以编辑文件的工具，此时可以使用docker cp命令把数据拷贝到主机，修改了在拷贝回去")]),a._v(" "),s("p",[s("code",[a._v("docker cp id:/www /tmp")]),a._v("把docker的id容器的/www目录拷贝到/tmp目录")]),a._v(" "),s("p",[a._v("如果要拷贝回去，只需要对调一下目录位置即可也就是"),s("code",[a._v("docker cp /tmp id:/www")])]),a._v(" "),s("h2",{attrs:{id:"目录映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录映射"}},[a._v("#")]),a._v(" 目录映射")]),a._v(" "),s("h2",{attrs:{id:"springboot-docker-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot-docker-部署"}},[a._v("#")]),a._v(" springboot docker 部署")]),a._v(" "),s("h3",{attrs:{id:"先打包为jar包-再用docker命令打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先打包为jar包-再用docker命令打包"}},[a._v("#")]),a._v(" 先打包为jar包，再用docker命令打包")]),a._v(" "),s("p",[a._v("先打包jar包，")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230602112227508.png",alt:"image-20230602112227508"}})]),a._v(" "),s("p",[a._v("然后在项目的根目录的"),s("code",[a._v("target")]),a._v("目录下就会出现打包的jar包")]),a._v(" "),s("p",[a._v("创建文件dockerfile，放在根目录")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230602110917912.png",alt:"image-20230602110917912"}})]),a._v(" "),s("p",[s("strong",[a._v("这里最后一条命令是配置jar包从外部读取配置文件。")])]),a._v(" "),s("p",[a._v("具体来说：docker创建容器后，有"),s("code",[a._v("\\etc")]),a._v("这个目录，此时我的命令会导致jar包去读取这个指定目录的配置文件")]),a._v(" "),s("div",{staticClass:"language-dockerfile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" openjdk:17")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXPOSE")]),a._v(" 8086")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WORKDIR")]),a._v(" /src")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v("  target/sbomDataGet-*.jar sbomDataGet.jar")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENTRYPOINT")]),a._v(" ["),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java"')]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-jar"')]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--spring.config.location=\\etc\\application.yml"')]),a._v("]")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("这里可以在本地打包，也可以上传到服务器打包")]),a._v(" "),s("p",[a._v("一般来说本地打包的docker比较大，所以最好上传jar包去服务器打包")]),a._v(" "),s("p",[a._v("两者后面的步骤完全相同，dockerfile可能有一点差异")]),a._v(" "),s("p",[s("strong",[a._v("必须先把jdk拉到本地")])]),a._v(" "),s("blockquote",[s("p",[a._v("上面用到了openjdk:17,就必须先在本地拉取了才能构建，不然报错，注意docker下载jdk的话，可以去直接"),s("code",[a._v("docker pull openjdk:17")]),a._v("（因为有openjdk维护jdk的仓库）")])]),a._v(" "),s("p",[a._v("然后到Dockerfile的目录")]),a._v(" "),s("p",[s("code",[a._v("docker build -t sbom-data-get .")])]),a._v(" "),s("blockquote",[s("p",[a._v("注意docker名字一般小写")])]),a._v(" "),s("p",[a._v("镜像位置查看")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230602112847059.png",alt:"image-20230602112847059"}})]),a._v(" "),s("p",[a._v("它是放在虚拟环境中的，如果要导出镜像（tar文件），再放到服务器。")]),a._v(" "),s("p",[s("code",[a._v("docker save -o sbom-data-get.tar sbom-data-get:latest")])]),a._v(" "),s("blockquote",[s("p",[a._v("会把镜像放在当前目录")])]),a._v(" "),s("p",[a._v("然后服务器上加载上传的image(先到镜像目录)")]),a._v(" "),s("div",{staticClass:"language-undefined line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker load --input sbom-data-get.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("运行docker（后台运行）")]),a._v(" "),s("p",[s("code",[a._v("docker run -d -p 8086:8086 sbom-data-get")])]),a._v(" "),s("blockquote",[s("p",[a._v("加-d 后台，否则前台，关了bash就停止")])]),a._v(" "),s("h2",{attrs:{id:"docker-redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-redis"}},[a._v("#")]),a._v(" Docker redis")]),a._v(" "),s("blockquote",[s("p",[a._v("参考https://blog.csdn.net/weixin_45821811/article/details/11621172")])]),a._v(" "),s("p",[a._v("需求：在服务器上运行一个redis，并且要求以自己定义的redis.conf运行，同时要进行数据卷挂载")]),a._v(" "),s("p",[a._v("首先docker pull redis,默认拉去一个最新版docker")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run  --log-opt max-size"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("100m --log-opt max-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6472")]),a._v(":6379 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" sbom-redis "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/wj/sbom-redis/redis.conf:/etc/redis/redis.conf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/wj/sbom-redis/data:/data "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" redis redis-server /etc/redis/redis.conf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--requirepass")]),a._v(" inet\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("--log是日志方面的")]),a._v(" "),s("li",[a._v("-p 6472:6379 ，左侧是宿主机端口，右侧是容器内端口，也就是容器内的6379端口映射到主机6472端口")]),a._v(" "),s("li",[a._v("--name 给这个容器取一个名字")])]),a._v(" "),s("p",[a._v("-v 数据卷挂载")]),a._v(" "),s("ul",[s("li",[a._v("-v /root/wj/sbom-redis/redis.conf:/etc/redis/redis.conf 这里是将 liunx 路径下的redis.conf 和redis下的redis.conf 挂载在一起。")]),a._v(" "),s("li",[a._v("/home/redis/myredis/data:/data 这个同上（先linux路径，再试容器路径）")]),a._v(" "),s("li",[a._v("-d redis 表示后台启动redis")]),a._v(" "),s("li",[a._v("redis-server /etc/redis/redis.conf 以配置文件启动redis，加载容器内的conf文件，最终找到的是挂载的目录的redis.conf")])]),a._v(" "),s("blockquote",[s("p",[a._v("如果设置了密码，可以加上  --requirepass xxxx")]),a._v(" "),s("p",[a._v("--restart=always 总是开机启动")]),a._v(" "),s("p",[a._v("–appendonly yes 开启redis 持久化")])]),a._v(" "),s("p",[a._v("准备一个redis.conf,下面是几个需要设置的参数，大部分都默认即可")]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# bind 192.168.1.100 10.0.0.1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# bind 127.0.0.1 ::1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#bind 127.0.0.1")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("protected-mode")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("6379")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("tcp-backlog")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("511")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#密码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("requirepass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("inet")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("timeout")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("tcp-keepalive")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("300")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("daemonize")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("supervised")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("pidfile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/var/run/redis_6379.pid")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("loglevel")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("notice")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("logfile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("databases")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("30")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("always-show-logo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("save")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("900 1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("save")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("300 10")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("save")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("60 10000")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("stop-writes-on-bgsave-error")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("rdbcompression")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("rdbchecksum")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("dbfilename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("dump.rdb")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#工作目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("dir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("./")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("replica-serve-stale-data")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("replica-read-only")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("repl-diskless-sync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("repl-disable-tcp-nodelay")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("replica-priority")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("100")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("lazyfree-lazy-eviction")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("lazyfree-lazy-expire")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("lazyfree-lazy-server-del")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("replica-lazy-flush")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("appendonly")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("appendfilename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"appendonly.aof"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("no-appendfsync-on-rewrite")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("no")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("auto-aof-rewrite-percentage")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("100")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("auto-aof-rewrite-min-size")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("64mb")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("aof-load-truncated")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("aof-use-rdb-preamble")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("lua-time-limit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("5000")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("slowlog-max-len")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("128")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("notify-keyspace-events")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("hash-max-ziplist-entries")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("512")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("hash-max-ziplist-value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("64")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("list-max-ziplist-size")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("-2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("list-compress-depth")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("set-max-intset-entries")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("512")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("zset-max-ziplist-entries")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("128")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("zset-max-ziplist-value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("64")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("hll-sparse-max-bytes")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("3000")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("stream-node-max-bytes")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("4096")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("stream-node-max-entries")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("100")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("activerehashing")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("hz")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("10")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("dynamic-hz")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("aof-rewrite-incremental-fsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("rdb-save-incremental-fsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("yes")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br"),s("span",{staticClass:"line-number"},[a._v("60")]),s("br"),s("span",{staticClass:"line-number"},[a._v("61")]),s("br"),s("span",{staticClass:"line-number"},[a._v("62")]),s("br")])]),s("p",[a._v("注意：")]),a._v(" "),s("h3",{attrs:{id:"赋予权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#赋予权限"}},[a._v("#")]),a._v(" 赋予权限")]),a._v(" "),s("p",[a._v("有可能没有权限读配置文件redis.conf,可以chmod 777赋予所有用户操作该文件最大权限")]),a._v(" "),s("p",[a._v("chmod 777 /root/wj/sbom-redis")]),a._v(" "),s("h3",{attrs:{id:"如果启动失败-查看docker日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果启动失败-查看docker日志"}},[a._v("#")]),a._v(" 如果启动失败，查看docker日志")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker logs --since 30m ID/Name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);