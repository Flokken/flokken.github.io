---
title: javaSE基础知识
date: 2023-09-10 
tags: 
  - Java
categories: 
  - 后端开发
  - Java开发
  - JavaSE
---

> 参考黑马的**从入门到起飞教程**

## Hello World

新建一个`HelloWorld.java`，

~~~C++
public class HelloWorld{
	public static void main(String[] args){
		System.out.println("Hello World");
	}
}
~~~

切换到这个文件所在目录，编译`javac HelloWorld.java`,然后执行`java HelloWorld`

![image-20230910173314188](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910173314188.png)

![image-20230910173217053](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910173217053.png)

> 注意，文件名和类名必须完全一样，不然会报错`Helloworld.java:1: 错误: 类 HelloWorld 是公共的, 应在名为 HelloWorld.java 的文件中声明`

## 基础概念

**关键字**

> java关键字就是java预留的，有一定意义的单词，变量不能和他重名

java的关键字的字母都是全小写的，比如`void`,`public`

### **常量**

常量是指其值在程序运行期间不可更改的标识符或变量。**Java中有两种主要类型的常量：字面量常量和命名常量。**

**字面量**(字面量常量)

字面量（literal）是用于表达源代码中一个固定值的表示法（natation）

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910212026626.png" style="zoom:70%">

举例

~~~java
//字符
System.out.println('男');
//字符串
System.out.println("aaaa");
//布尔
System.out.println(true)
//特殊,null
//null不能直接打印，也就是说System.out.println(null)是不行的
~~~

**命名常量（Named Constants）**

- 命名常量是由程序员定义的具有固定值的变量，其值在定义后不能被修改。通常使用`final`关键字来声明命名常量。

- 命名常量通常用大写字母来表示，以便与变量和方法名区分开来。

- ~~~java
  final int MAX_VALUE = 100;
  final double PI = 3.14159;
  final String GREETING = "Hello";
  ~~~

**区别命名常量和字面量：**如果有`final int NUM=100;`**那么NUM是命名常量，100是字面量常量**

### **变量**

java变量和C++差不多:

- **使用前必须初始化，否则编译失败(C++没初始化就用是随机值)**

#### 标识符

就是给**类，方法，变量名**取得名字，就叫标识符

命名规则有

- 由数字，字母，下划线_和$组成
- 不能以数字开头
- 区分大小写
- 不能是关键字，也不能是标准库中已经有的标识符(比如`String`)

**规范：驼峰命名法**

小驼峰命名法（方法和变量）：

- 只有一个单词时，都小写，比如`int age=10;`
- 多个单词，第一个单词首字母小写，后面大写，如`firstName`

大驼峰命名法(类名):

- 只有一个单词时，首字母大写，比如`class Student`
- 多个单词，每个单词首字母大写，如`class FirstName`

### 数据类型

java的数据类型分为**基本数据类型和引用数据类型**

#### **基本数据类型**

有四类八种

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910220017291.png" style="zoom:80%">

注意：

- 取值范围大小关系:double>float>long>int>short>byte

- long类型变量后面要加L，float加F（大小写都可以，推荐大写），比如

  ~~~java
  float x = 10.1F;
  long y = 9999L;
  double x= 10.2;//double不用加，只用long和float需要加
  ~~~

#### 引用数据类型

### Scanner类（键盘录入）

标准类之一，导入这个类后可以接收键盘读入

使用步骤：

第一步：

​	导包：其实就是表示先找到Scanner这个类在哪。

​	`import java.util.Scanner;`

第二步：

​	创建对象：其实就表示申明一下，我准备开始用Scanner这个类了。

​	`Scanner sc = new Scanner(System.in);`

第三步：

​	接收数据：也是真正干活的代码。

​	`int i = sc.nextInt();`

~~~C++
//导包，其实就是先找到Scanner这个类在哪
import java.util.Scanner;
public class ScannerDemo1{
	public static void main(String[] args){
		//2.创建对象，其实就是申明一下，我准备开始用Scanner这个类了。
		Scanner sc = new Scanner(System.in);
		//3.接收数据
		//当程序运行之后，我们在键盘输入的数据就会被变量i给接收了
		System.out.println("请输入一个数字");
		int i = sc.nextInt();
		System.out.println(i);
	}
}
~~~



## 杂

**1JDK下面的文件夹**

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910171337851.png" style="zoom:50%">

**2 java是编译型还是解释型语言？**

都不是，是混合型。先编译出class文件，然后再执行

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910174217237.png" style="zoom:70%">

**3JRE和JDK**

JDK（Java Development Kit）：java开发工具包

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910174409028.png" style="zoom:70%">

有些时候，我们已经得到了编译好的`.class`文件，那么这时候只需要JRE就能运行程序

JRE(Java Runtime Environment): java的运行环境

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910174648696.png" style="zoom:70%">

**4 注释分类**

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230910174839191.png" style="zoom:70%">