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

对于基本数据类型而言，其存储的值是真实的数据，就在栈里面，**也就是和这个变量在同一空间内**

特点：当基本类型的数据赋值给其他变量时，也是赋真实的值

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911163952538.png" style="zoom:70%">

#### 引用数据类型

java中除了上面的8种基本类型都是引用类型。

> 只要new出来的，都是引用数据类型，包括数组，字符串等等

**引用指的是用了其他空间数据的意思**

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911165007030.png" style="zoom:70%">

**引用数据类型与基本数据类型比较如图**

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911164851774.png" style="zoom:60%">

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

### 运算符

算术运算符：基本和C++一样，+-*/%等等。也有++,--。

关系运算符：==，!=,>=等等

逻辑运算符，&,!,^,|

短路逻辑运算符, && ，||

> 这里注意与C++的区别，java中单个&，既可以按位与，也可以逻辑与，取决于两边的数据类型。而C++ &只能进行按位与

**三元运算符：**	关系表达式 ？ 表达式1 ：表达式2 ；比如：`a > b ? a : b`

#### 隐式转换

也叫自动类型提升。

​	**就是把一个取值范围小的数据或者变量，赋值给另一个取值范围大的变量**。此时不需要我们额外写代码单独实现，是程序自动帮我们完成的。

* 取值范围小的，和取值范围大的进行运算，小的会先提升为大的，再进行运算。
  * 取值范围大小  double>float>long>int>short>byte
* byte、short、char三种类型的数据在运算的时候，都会直接先提升为int，然后再进行运算。
  * 注意chat类型，比如`char x = 'a'; x>='a'`,这种是成立的，`'a'`会自动的转成ascii码表的对应数字来进行运算，**常用的有，字母大小写判断，字符'0-9'和数字0-9的判断等等**


~~~java
byte b = 100;
int i = b;//可以成功赋值
~~~

#### 强制类型转换

​	如果要把一个取值范围大的数据或者变量赋值给另一个取值范围小的变量。是不允许直接操作。

​	**如果一定要这么干，就需要加入强制转换。(就是要显式加上类型强制转换）**

~~~java
public class OperatorDemo2 {
    public static void main(String[] args) {
        double a = 12.3;
        int b = (int) a;
        System.out.println(b);//12
    }
}
~~~

### 流程控制语句

if-else,while,switch,for,do-while， continue ,break等等。  C有的，Java也都有

但是也有不一样的点

- 条件判断式，必须是boolean型的，像C++的一些写法是不行的，比如

~~~java
imt tmp=0;
while(tmp){xxxxxx}//错误
while(tmp!=0){xxxx}//正确
~~~

- 无限循环

  ~~~java
  //for形式
  for(;;){
      System.out.println("xxxx");
  }
  //while形式
  while(true){
      System.out.println("xxxx");
  }
  ~~~

一些经典例题

**案例一：回文数**

需求：给你一个整数 x 。

​           如果 x 是一个回文整数，打印 true ，否则，返回 false 。

解释：回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。

~~~java
public class Test{
	public static void main(String[] args){
		int x=121;
		int tmp=x;
		int num=0;
		while(tmp!=0){//这里不能直接写tmp，
			int y=tmp%10;
			//把数评接到右边
			num = num *10+y;
			tmp/=10;
		}
		System.out.println(num==x);
	}
}
~~~

### 数组

>指的是一种容器，可以同来存储同种数据类型的多个值。	但是数组容器在存储数据的时候，需要结合隐式转换考虑
>
>​	定义了一个int类型的数组。那么boolean。double类型的数据是不能存到这个数组中的，
>
>​	但是byte类型，short类型，int类型的数据是可以存到这个数组里面的。

**定义数组：**

- ​	数据类型 [] 数组名    比如：int [] array（常用）

- ​	数据类型  数组名 []   比如： int array []

**静态初始化：**

>​	数据类型[] 数组名 = new 数据类型[]{元素1，元素2，元素3，元素4...};

`int[] arr = new int[]{11,22,33}`;

可以简化（因为静态初始化已经指定了大小），省略去new和类型，比如`int[] array = {1,2,3,4,5}; double[] array = {1.1,1.2,1.3};`

**数组的地址：**

~~~java
int[] arr = {1,2,3,4,5};
System.out.println(arr);//[I@6d03e736
~~~

​	数组的地址值：就表示数组在内存中的位置。

​	以[I@6d03e736为例：

- [ ：表示现在打印的是一个数组。
- I：表示现在打印的数组是int类型的。

**动态初始化**

> ​	数据类型[] 数组名 = new 数据类型[数组的长度];
>
> 动态数组后面的那坨new 不能省略了，因为要指定大小，

例子

~~~java
//1.定义一个数组，存3个人的年龄，年龄未知
int[] agesArr = new int[3];
//二维数组
int [][] arr = new int [3][3];
~~~

**数组的默认初始化值**

- 整数类型：0

- 小数类型：0.0

- 布尔类型：false

- 字符类型：'\u0000'

- 引用类型：null

**两种初始化区别**

- 静态初始化：手动指定数组的元素，系统会根据元素的个数，计算出数组的长度。

- 动态初始化：手动指定数组长度，由系统给出默认初始化值。

#### 数组的内存分布

这个得涉及到jvm的内存分配，首先复习一下

jvm一般把内存分为如下区域（jdk8及其之后）,方法区换成了元空间

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911160937913.png" style="zoom:50%">

- 栈：方法运行时使用的内存，**比如有main方法运行，进入方法栈中运行**
- 堆：存储对象或者数组，**new来创建，都存储在堆内存**
- 方法区：存储可以运行的class文件
- 本地方法栈：JVM在使用操作系统功能时使用，与开发无关
- 寄存器：cpu使用，与开发无关

我们先看没有new的代码，所以没有在堆中开辟空间，因此只用到了栈。首先这段代码只有main方法，所以main方法入栈，其中的a,b,c的值也是在栈里面，可以直接用。

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911161843846.png" style="zoom:70%">

下面定义两个数组，因为new了空间，也就会在堆中开辟空间来存储

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911161659477.png" style="zoom:70%">

下面再来一个比较特殊的情况，两个数组指向同一个地址

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911162142642.png" style="zoom:70%">





### 方法

> 感觉当成函数来用影响也不大
>
> 注意：方法定义位置和在main中的使用顺序无关，也即是main里先调用了method,然后后面再定义method也是可以的
>
> ~~~java
> public class MyClass {
>     public static void main(String[] args) {
>         // 调用名为method的方法
>         method();
>     }
> 
>     // 定义名为method的方法
>     public static void method() {
>         // 这里放置方法的代码
>         System.out.println("这是method方法的内容");
>     }
> }
> ~~~
>
> 

**方法（method）是程序中最小的执行单元**

无参方法

~~~java
public static 返回类型 方法名 (   ) {
	// 方法体;
    return;
}
~~~

有参方法

~~~java
public static 返回类型 方法名 (参数1, 参数2, 参数3...) {
	方法体;
    return;
}
~~~

1. 形参：方法定义中的参数

​          等同于变量定义格式，例如：int number

2. 实参：方法调用中的参数

​          等同于使用变量或常量，例如： 10  number

#### 方法重载

方法重载指同一个类中定义的多个方法之间的关系，满足下列条件的多个方法相互构成重载

* 多个方法在同一个类中
* 多个方法具有相同的方法名
* **多个方法的参数不同，不同指的是 ：个数不同、类型不同、顺序不同**
  * **jvm会根据参数的不同来区分同名的方法**

> **简单记：**同一个类中，方法名相同，参数不同的方法就是重载，与返回值无关。
>
> 返回值无关指的是返回值类型可以一样也可以不一样，重载跟他没关系

注意，参数必须有不一样，仅仅返回类型不一样，参数一样不能重载！

~~~java
public class MethodDemo {
	public static void fn(int a) {
    	//方法体
    }
    public static int fn(int a) { 	/*错误原因：重载与返回值无关*/
    	//方法体
    }
}

public class MethodDemo {
	public static void fn(int a) {
    	//方法体
    }
    public static int fn(double a) {//正确的示例
    	//方法体
    }
}
~~~

#### 方法调用时内存图

栈具有先进后出的特性，因此在里面的方法也是一样的，被最后调用的那个方法先执行玩，然后先出去。<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911163611223.png" style="zoom:70%">

#### 值传递与引用传递

对于基本数据来说，都是值传递：实参的值的改变不会影响形参

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911170552166.png" style="zoom:70%">

对于引用数据类型来说，当然也就是传引用了：实参的值的会影响形参，因为两者指向同一地址

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911170830553.png" style="zoom:70%">



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

**5IDEA项目结构**

一个idea项目结构如下

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20230911104620688.png" style="zoom:70%">