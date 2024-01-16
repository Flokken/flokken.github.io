---
title: spring原理学习06-实现应用上下文，资源加载，扩展机制
date: 2024-01-15 
tags: 
  - Java
categories: 
  - 后端开发
  - Java开发
  - Springboot
---

## 目标

**bg：**

使用spring时，我们有时会继承或者实现了 Spring 对外暴露的类或接口，在接口的实现中获取了 BeanFactory 以及 Bean 对象的获取等内容，并对这些内容做一些操作，例如：修改 Bean 的信息，添加日志打印、处理数据库路由对数据源的切换、给 RPC 服务连接注册中心等。

在对容器中 Bean 的实例化过程添加扩展机制的同时，还需要把目前关于 Spring.xml 初始化和加载策略进行优化，因为我们不太可能让面向 Spring 本身开发的 `DefaultListableBeanFactory` 服务，直接给予用户使用。修改点如下：

![img](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/spring-7-01.png)

目标（开发应用上下文和Bean拓展机制）：

- DefaultListableBeanFactory、XmlBeanDefinitionReader，是我们在目前 Spring 框架中对于服务功能测试的使用方式，它能很好的体现出 Spring 是如何对 xml 加载以及注册Bean对象的操作过程，**但这种方式是面向 Spring 本身的，还不具备一定的扩展性**。
- 就像我们现在需要提供出一个可以在 Bean 初始化过程中，完成对 Bean 对象的扩展时，就很难做到自动化处理**。所以我们要把 Bean 对象扩展机制功能和对 Spring 框架上下文的包装融合起来，对外提供完整的服务。**

> Q:什么是上下文?
>
> A:上下文（Context）是指在特定环境或背景下，某个事件、事物或概念所处的情境、条件或状态。它提供了相关信息和背景，使得事件或事物能够被理解、解释和处理。
>
> 比如Spring中常见的应用程序上下文（Application Context）。**应用程序上下文是Spring的核心容器，负责加载、配置和管理应用程序中的所有bean（对象）。它是一个构建在BeanFactory之上的更高级的抽象，提供了更多的功能和特性。**
>
> Q:Bean扩展机制?
>
> A:指的是用户获取bean并对齐做一些修改,比如修改属性，Spring需要实现可以在实例化这个Bean之前完成修改操作，也可以在实例化这个Bean之后完成修改操作（利用反射）

## 设计

**为了能满足于在 Bean 对象从注册到实例化的过程中执行用户的自定义操作，就需要在 Bean 的定义和初始化过程中插入接口类，这个接口再有外部去实现自己需要的服务。**那么在结合对 Spring 框架上下文的处理能力，就可以满足我们的目标需求了。整体设计结构如下图：

<img src="https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/spring-7-02.png" alt="img" style="zoom:80%;" />

- `BeanFactoryPostProcessor` 以及`BeanPostProcessor`用于满足Bean对象拓展的两个接口（Spring源码），并且也是大家在使用 Spring 框架额外新增开发自己组建需求的两个必备接口。
- `BeanFactoryPostProcessor`是由 Spring 框架组建提供的容器扩展机制，**允许在 Bean 对象注册后但未实例化之前，**对 Bean 的定义信息 `BeanDefinition` 执行修改操作。
- `BeanPostProcessor`，也是 Spring 提供的扩展机制，**不过 BeanPostProcessor 是在 Bean 对象实例化之后修改 Bean 对象，**也可以替换 Bean 对象。这部分与后面要实现的 AOP 有着密切的关系。

- 为了方便使用，我们希望于开发 **Spring 的上下文操作类，把相应的 XML 加载 、注册、实例化以及新增的修改和扩展都融合进去，让 Spring 可以自动扫描到我们的新增服务，便于用户使用。****

**Spring 应用上下文和对Bean对象扩展机制的类关系**

> -表示属性，+表示实现方法，#表示抽象方法

![Bean06.drawio](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/Bean06.drawio.png)

- 这里实现了应用上下文类，可以方便的加载配置环境
  - 应用上下文就是这个应用所需的各种支持环境，比如变量值，位置等等。
- 同时在实现应用上下文的过程中，通过定义接口：`BeanFactoryPostProcessor`、`BeanPostProcessor` 两个接口，把关于对 Bean 的扩展机制串联进去了。

## 工程结构

```java
small-spring-step-06
└── src
    ├── main
    │   └── java
    │       └── cn.bugstack.springframework
    │           ├── beans
    │           │   ├── factory
    │           │   │   ├── config
    │           │   │   │   ├── AutowireCapableBeanFactory.java
    │           │   │   │   ├── BeanDefinition.java
    │           │   │   │   ├── BeanFactoryPostProcessor.java
    │           │   │   │   ├── BeanPostProcessor.java
    │           │   │   │   ├── BeanReference.java
    │           │   │   │   ├── ConfigurableBeanFactory.java
    │           │   │   │   └── SingletonBeanRegistry.java
    │           │   │   ├── support
    │           │   │   │   ├── AbstractAutowireCapableBeanFactory.java
    │           │   │   │   ├── AbstractBeanDefinitionReader.java
    │           │   │   │   ├── AbstractBeanFactory.java
    │           │   │   │   ├── BeanDefinitionReader.java
    │           │   │   │   ├── BeanDefinitionRegistry.java
    │           │   │   │   ├── CglibSubclassingInstantiationStrategy.java
    │           │   │   │   ├── DefaultListableBeanFactory.java
    │           │   │   │   ├── DefaultSingletonBeanRegistry.java
    │           │   │   │   ├── InstantiationStrategy.java
    │           │   │   │   └── SimpleInstantiationStrategy.java  
    │           │   │   ├── support
    │           │   │   │   └── XmlBeanDefinitionReader.java
    │           │   │   ├── BeanFactory.java
    │           │   │   ├── ConfigurableListableBeanFactory.java
    │           │   │   ├── HierarchicalBeanFactory.java
    │           │   │   └── ListableBeanFactory.java
    │           │   ├── BeansException.java
    │           │   ├── PropertyValue.java
    │           │   └── PropertyValues.java 
    │           ├── context//上下文
    │           │   ├── support
    │           │   │   ├── AbstractApplicationContext.java 
    │           │   │   ├── AbstractRefreshableApplicationContext.java 
    │           │   │   ├── AbstractXmlApplicationContext.java 
    │           │   │   └── ClassPathXmlApplicationContext.java 
    │           │   ├── ApplicationContext.java 
    │           │   └── ConfigurableApplicationContext.java
    │           ├── core.io//自动配置包
    │           │   ├── ClassPathResource.java 
    │           │   ├── DefaultResourceLoader.java 
    │           │   ├── FileSystemResource.java 
    │           │   ├── Resource.java 
    │           │   ├── ResourceLoader.java 
    │           │   └── UrlResource.java
    │           └── utils
    │               └── ClassUtils.java
    └── test
        └── java
            └── cn.bugstack.springframework.test
                ├── bean
                │   ├── UserDao.java
                │   └── UserService.java  
                ├── common
                │   ├── MyBeanFactoryPostProcessor.java
                │   └── MyBeanPostProcessor.java
                └── ApiTest.java

```

### 定义 BeanFactoryPostProcessor

```java
public interface BeanFactoryPostProcessor {

    /**
     * 在所有的 BeanDefinition 加载完成后，实例化 Bean 对象之前，提供修改 BeanDefinition 属性的机制
     *
     */
    void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException;

}

```

- 所有的 BeanDefinition 加载完成后，实例化 Bean 对象之前，提供修改 BeanDefinition 属性的机制

### 定义BeanPostProcessor

```java
public interface BeanPostProcessor {

    /**
     * 在 Bean 对象执行初始化方法之前，执行此方法
     */
    Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException;

    /**
     * 在 Bean 对象执行初始化方法之后，执行此方法
     */
    Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException;

}

```

- 提供了修改新实例化 Bean 对象的扩展点。
- 另外此接口提供了两个方法：`postProcessBeforeInitialization` 用于在 Bean 对象执行初始化方法之前，执行此方法、`postProcessAfterInitialization`用于在 Bean 对象执行初始化方法之后，执行此方法。

### 定义上下文接口

```java
public interface ApplicationContext extends ListableBeanFactory {
}
```

- context 是本次实现应用上下文功能新增的服务包
- ApplicationContext，继承于 ListableBeanFactory，也就继承了关于 BeanFactory 方法，比如一些 getBean 的方法。另外 ApplicationContext 本身是 Central 接口，但目前还不需要添加一些获取ID和父类上下文，所以暂时没有接口方法的定义。

```java
public interface ConfigurableApplicationContext extends ApplicationContext {

    /**
     * 刷新容器
     */
    void refresh() throws BeansException;

}

```

- ConfigurableApplicationContext 继承自 ApplicationContext，并提供了 refresh 这个核心方法。*如果你有看过一些 Spring 源码，那么一定会看到这个方法。* 接下来也是需要在上下文的实现中完成刷新容器的操作过程。

### 应用上下文抽象类实现

```java
package com.inet.context.support;

import com.inet.beans.BeansException;
import com.inet.beans.factory.ConfigurableListableBeanFactory;
import com.inet.beans.factory.config.BeanFactoryPostProcessor;
import com.inet.beans.factory.config.BeanPostProcessor;
import com.inet.beans.factory.config.ConfigurableBeanFactory;
import com.inet.context.ConfigurableApplicationContext;
import com.inet.core.io.DefaultResourceLoader;

import java.util.Map;

/**
 *
 */
public abstract class AbstractApplicationContext extends DefaultResourceLoader implements ConfigurableApplicationContext {
    @Override
    public void refresh() throws BeansException{
        // 1. 创建 BeanFactory，并加载 BeanDefinition
        refreshBeanFactory();
        //2.获取BeanFactory
        ConfigurableListableBeanFactory beanFactory = getBeanFactory();
        //3.在Bean实例化之前，执行 BeanFactoryPostProcessor (Invoke factory processors registered as beans in the context.)
        invokeBeanFactoryPostProcessors(beanFactory);
        //4. BeanPostProcessor需要提前于其他Bean对象实例化之前执行注册操作
        registerBeanPostProcessors(beanFactory);
        //5. 提前实例化单例Bean对象
        beanFactory.preInstantiateSingletons();
    }

    protected abstract void refreshBeanFactory() throws BeansException;
    protected abstract ConfigurableListableBeanFactory getBeanFactory();

    private void invokeBeanFactoryPostProcessors(ConfigurableListableBeanFactory beanFactory){
        Map<String, BeanFactoryPostProcessor>beanFactoryPostProcessorMap = beanFactory.getBeansOfType(BeanFactoryPostProcessor.class);
        for(BeanFactoryPostProcessor beanFactoryPostProcessor:beanFactoryPostProcessorMap.values()){
            beanFactoryPostProcessor.postProcessBeanFactory(beanFactory);
        }
    }

    private void registerBeanPostProcessors(ConfigurableListableBeanFactory beanFactory){
        Map<String, BeanPostProcessor> beanPostProcessorMap = beanFactory.getBeansOfType(BeanPostProcessor.class);
        for(BeanPostProcessor beanPostProcessor:beanPostProcessorMap.values()){
            beanFactory.addBeanPostProcessor(beanPostProcessor);
        }
    }

    //获取某一类型的所用Bean对象
     //... getBean、getBeansOfType、getBeanDefinitionNames 方法

}

```

- AbstractApplicationContext 继承 DefaultResourceLoader 是为了处理 `spring.xml` 配置资源的加载。
  - 这里也考虑到了可能有多个修改，所以利用map保存了Bean可能的多个修改
- 之后是在 refresh() 定义实现过程，包括：
  - 创建 BeanFactory，并加载 BeanDefinition
  - 获取 BeanFactory
  - 在 Bean 实例化之前，执行 BeanFactoryPostProcessor (Invoke factory processors registered as beans in the context.)
  - BeanPostProcessor 需要提前于其他 Bean 对象实例化之前执行注册操作
  - 提前实例化单例Bean对象
- 另外把定义出来的抽象方法，refreshBeanFactory()、getBeanFactory() 由后面的继承此抽象类的其他抽象类实现。

###   获取Bean工厂和加载资源

```java
public abstract class AbstractRefreshableApplicationContext extends AbstractApplicationContext {

    private DefaultListableBeanFactory beanFactory;

    @Override
    protected void refreshBeanFactory() throws BeansException {
        DefaultListableBeanFactory beanFactory = createBeanFactory();
        loadBeanDefinitions(beanFactory);
        this.beanFactory = beanFactory;
    }

    private DefaultListableBeanFactory createBeanFactory() {
        return new DefaultListableBeanFactory();
    }

    protected abstract void loadBeanDefinitions(DefaultListableBeanFactory beanFactory);

    @Override
    protected ConfigurableListableBeanFactory getBeanFactory() {
        return beanFactory;
    }

}

```

- 在 refreshBeanFactory() 中主要是获取了 `DefaultListableBeanFactory` 的实例化以及对资源配置的加载操作 `loadBeanDefinitions(beanFactory)`，在加载完成后即可完成对 spring.xml 配置文件中 Bean 对象的定义和注册，同时也包括实现了接口 BeanFactoryPostProcessor、BeanPostProcessor 的配置 Bean 信息。
- 但此时资源加载还只是定义了一个抽象类方法 `loadBeanDefinitions(DefaultListableBeanFactory beanFactory)`，继续由其他抽象类继承实现。

### 上下文中对配置信息的加载

```java
public abstract class AbstractXmlApplicationContext extends AbstractRefreshableApplicationContext {

    @Override
    protected void loadBeanDefinitions(DefaultListableBeanFactory beanFactory) {
        XmlBeanDefinitionReader beanDefinitionReader = new XmlBeanDefinitionReader(beanFactory, this);
        String[] configLocations = getConfigLocations();
        if (null != configLocations){
            beanDefinitionReader.loadBeanDefinitions(configLocations);
        }
    }

    protected abstract String[] getConfigLocations();

}

```

- 在 AbstractXmlApplicationContext 抽象类的 loadBeanDefinitions 方法实现中，使用 XmlBeanDefinitionReader 类，处理了关于 XML 文件配置信息的操作。
- 同时这里又留下了一个抽象类方法，getConfigLocations()，此方法是为了从入口上下文类，拿到配置信息的地址描述。

###  应用上下文实现类(ClassPathXmlApplicationContext)

> 这个类实际上继承了DefaultResourceLoader的功能，只不过面对用户，所以直接给一个配置文件，就把应用上下文加载进来了。
>
> 比起用读取配置文件的类来加载配置文件更方便。

```java
public class ClassPathXmlApplicationContext extends AbstractXmlApplicationContext {

    private String[] configLocations;

    public ClassPathXmlApplicationContext() {
    }

    /**
     * 从 XML 中加载 BeanDefinition，并刷新上下文
     *
     */
    public ClassPathXmlApplicationContext(String configLocations) throws BeansException {
        this(new String[]{configLocations});
    }

    /**
     * 从 XML 中加载 BeanDefinition，并刷新上下文
     */
    public ClassPathXmlApplicationContext(String[] configLocations) throws BeansException {
        this.configLocations = configLocations;
        refresh();
    }

    @Override
    protected String[] getConfigLocations() {
        return configLocations;
    }

}

```

- ClassPathXmlApplicationContext，是具体对外给用户提供的应用上下文方法。
- 在继承了 AbstractXmlApplicationContext 以及层层抽象类的功能分离实现后，在此类 ClassPathXmlApplicationContext 的实现中就简单多了，**主要是对继承抽象类中方法的调用和提供了配置文件地址信息。**

###  在Bean创建时完成前置和后置处理

AbstractAutowireCapableBeanFactory 这个类实现了Bean的创建和管理，因此我们要拓展Bean自然要修改这个类的一些流程

```java
public abstract class AbstractAutowireCapableBeanFactory extends AbstractBeanFactory implements AutowireCapableBeanFactory {

    private InstantiationStrategy instantiationStrategy = new CglibSubclassingInstantiationStrategy();

    @Override
    protected Object createBean(String beanName, BeanDefinition beanDefinition, Object[] args) throws BeansException {
        Object bean = null;
        try {
            bean = createBeanInstance(beanDefinition, beanName, args);
            // 给 Bean 填充属性
            applyPropertyValues(beanName, bean, beanDefinition);
            // 执行 Bean 的初始化方法和 BeanPostProcessor 的前置和后置处理方法
            bean = initializeBean(beanName, bean, beanDefinition);
        } catch (Exception e) {
            throw new BeansException("Instantiation of bean failed", e);
        }

        addSingleton(beanName, bean);
        return bean;
    }

    public InstantiationStrategy getInstantiationStrategy() {
        return instantiationStrategy;
    }

    public void setInstantiationStrategy(InstantiationStrategy instantiationStrategy) {
        this.instantiationStrategy = instantiationStrategy;
    }

    private Object initializeBean(String beanName, Object bean, BeanDefinition beanDefinition) {
        // 1. 执行 BeanPostProcessor Before 处理
        Object wrappedBean = applyBeanPostProcessorsBeforeInitialization(bean, beanName);

        // TODO：invokeInitMethods(beanName, wrappedBean, beanDefinition);
        //利用反射对已经实例化的bean进行更改
        invokeInitMethods(beanName, wrappedBean, beanDefinition);

        // 2. 执行 BeanPostProcessor After 处理
        wrappedBean = applyBeanPostProcessorsAfterInitialization(bean, beanName);
        return wrappedBean;
    }

    private void invokeInitMethods(String beanName, Object wrappedBean, BeanDefinition beanDefinition) {

    }

    @Override
    public Object applyBeanPostProcessorsBeforeInitialization(Object existingBean, String beanName) throws BeansException {
        Object result = existingBean;
        for (BeanPostProcessor processor : getBeanPostProcessors()) {
            Object current = processor.postProcessBeforeInitialization(result, beanName);
            if (null == current) return result;
            result = current;
        }
        return result;
    }

    @Override
    public Object applyBeanPostProcessorsAfterInitialization(Object existingBean, String beanName) throws BeansException {
        Object result = existingBean;
        for (BeanPostProcessor processor : getBeanPostProcessors()) {
            Object current = processor.postProcessAfterInitialization(result, beanName);
            if (null == current) return result;
            result = current;
        }
        return result;
    }

}

```

- 实现 BeanPostProcessor 接口后，会涉及到两个接口方法，`postProcessBeforeInitialization`、`postProcessAfterInitialization`，分别作用于 Bean 对象执行初始化前后的额外处理。
- 也就是需要在创建 Bean 对象时，在 createBean 方法中添加 `initializeBean(beanName, bean, beanDefinition);` 操作。而这个操作主要主要是对于方法 `applyBeanPostProcessorsBeforeInitialization`、`applyBeanPostProcessorsAfterInitialization` 的使用。
- 另外需要提一下，applyBeanPostProcessorsBeforeInitialization、applyBeanPostProcessorsAfterInitialization 两个方法是在接口类 `AutowireCapableBeanFactory` 中新增加的。

## 测试

### 准备

```java
public class UserDao {

    private static Map<String, String> hashMap = new HashMap<>();

    static {
        hashMap.put("10001", "小傅哥");
        hashMap.put("10002", "八杯水");
        hashMap.put("10003", "阿毛");
    }

    public String queryUserName(String uId) {
        return hashMap.get(uId);
    }

}

public class UserService {

    private String uId;
    private String company;
    private String location;
    private UserDao userDao;

    public String queryUserInfo() {
        return userDao.queryUserName(uId)+", 公司："+company+", 地点"+location;
    }

    // ...get/set
}


```

- 这里新增加了 company、location，两个属性信息，便于测试 BeanPostProcessor、BeanFactoryPostProcessor 两个接口对 Bean 属性信息扩展的作用。

###  实现 BeanPostProcessor 和 BeanFactoryPostProcessor

我们实现之前暴露Bean拓展的接口

```java
public class MyBeanFactoryPostProcessor implements BeanFactoryPostProcessor {

    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {

        BeanDefinition beanDefinition = beanFactory.getBeanDefinition("userService");
        PropertyValues propertyValues = beanDefinition.getPropertyValues();

        propertyValues.addPropertyValue(new PropertyValue("company", "改为：字节跳动"));
    }

}

public class MyBeanPostProcessor implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        if ("userService".equals(beanName)) {
            UserService userService = (UserService) bean;
            userService.setLocation("改为：北京");
        }
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

}

```

- 分别是实例化之前和实例化之后的操作

### 配置文件

**基础配置，无BeanFactoryPostProcessor、BeanPostProcessor，实现类**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans>

    <bean id="userDao" class="cn.bugstack.springframework.test.bean.UserDao"/>

    <bean id="userService" class="cn.bugstack.springframework.test.bean.UserService">
        <property name="uId" value="10001"/>
        <property name="company" value="腾讯"/>
        <property name="location" value="深圳"/>
        <property name="userDao" ref="userDao"/>
    </bean>

</beans>

```

**增强配置，有BeanFactoryPostProcessor、BeanPostProcessor，实现类**

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans>

    <bean id="userDao" class="cn.bugstack.springframework.test.bean.UserDao"/>

    <bean id="userService" class="cn.bugstack.springframework.test.bean.UserService">
        <property name="uId" value="10001"/>
        <property name="company" value="腾讯"/>
        <property name="location" value="深圳"/>
        <property name="userDao" ref="userDao"/>
    </bean>
	<!--这个应该即时所谓的应用上下文?-->
    <bean class="cn.bugstack.springframework.test.common.MyBeanPostProcessor"/>
    <bean class="cn.bugstack.springframework.test.common.MyBeanFactoryPostProcessor"/>

</beans>

```

- 这里提供了两个配置文件，一个是不包含BeanFactoryPostProcessor、BeanPostProcessor，另外一个是包含的。**之所以这样配置主要对照验证，在运用 Spring 新增加的应用上下文和不使用的时候，都是怎么操作的。**

### 对比

本节主要开发了应用上下文类，以及实现Bean的拓展机制。

这里开发的应用上下文类，主要就是可以通过加载配置文件来使用`BeanFactoryPostProcessor`和`BeanPostProcessor`接口的实现类。

这样就不用用户手动来操作这两个接口实现类的使用 ，而是直接加载配置文件即可自动执行，**便于用户。**

#### 不使用应用上下文

```java
   @Test
    public void test_BeanFactoryPostProcessorAndBeanPostProcessor() {
        //1.初始化BeanFactory
        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
        // 2. 读取配置文件&注册Bean
        XmlBeanDefinitionReader reader =  new XmlBeanDefinitionReader(beanFactory);
        reader.loadBeanDefinitions("classpath:spring.xml");
        //这个类加载下面这个配置文件也执行不了对应操作，得用上文文加载类才能加载
        //        reader.loadBeanDefinitions("classpath:springPostProcessor.xml");
        // 3. BeanDefinition 加载完成 & Bean实例化之前，修改 BeanDefinition 的属性值
        MyBeanFactoryPostProcessor beanFactoryPostProcessor = new MyBeanFactoryPostProcessor();
        beanFactoryPostProcessor.postProcessBeanFactory(beanFactory);
        //4. Bean实例化之后，修改Bean的属性信息
        //TODO 对实例化的bean对象进行属性填充，需要用到反射，对应方法还没实现，下一节再说
//        MyBeanPostProcessor beanPostProcessor = new MyBeanPostProcessor();
//        beanFactory.addBeanPostProcessor(beanPostProcessor);
        //5.获取Bean对象调用方法
        UserService userService = beanFactory.getBean("userService",UserService.class);
        String result = userService.queryUserInfo();
        System.out.println("测试结果：" + result);

    }
```

- DefaultListableBeanFactory 创建 beanFactory 并使用 XmlBeanDefinitionReader 加载配置文件。
- 接下来就是对 MyBeanFactoryPostProcessor 和 MyBeanPostProcessor 的处理，一个是在BeanDefinition 加载完成 & Bean实例化之前，修改 BeanDefinition 的属性值，另外一个是在Bean实例化之后，修改 Bean 属性信息。

> 用户还需要了解这两个类内部怎么去使用，很不方便，因此应用上下文加载类很有必要

#### 使用应用上下文

```java
 @Test
    public void test_xml() {
        // 1.初始化 BeanFactory
        ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:springPostProcessor.xml");

        // 2. 获取Bean对象调用方法
        UserService userService = applicationContext.getBean("userService", UserService.class);
        String result = userService.queryUserInfo();
        System.out.println("测试结果：" + result);
    }
```

- 另外使用新增加的 ClassPathXmlApplicationContext 应用上下文类，再操作起来就方便多了，*这才是面向用户使用的类*，在这里可以一步把配置文件交给 ClassPathXmlApplicationContext，也不需要管理一些自定义实现的 Spring 接口的类。

#### 结果：

上面两个测试的结果都是下面这样。

地点没有改变，因为对实例化的bean对象进行属性填充，需要用到反射，对应方法还没实现，下一节再说。

但是可以看到应用上下文和Bean的拓展机制的确生效了

![image-20240116091705878](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240116091705878.png)



## STAR法则总结

### Situation

创建ApplicationContext 并且实现加载配置文件实现应用上下文，同时融合实现Bean拓展机制。

### Task

 1、创建Application上下文类体系

 2、实现BeanFactoryPostProcessor，以及BeanPostProcessor处理 

### Aciton

**一、什么是应用上下文** 

spring源码中的解释:`Central interface to provide configuration for an application`。应用上下文是为应用提供环境/配置的。

这里的代码中，主要体现在这个应用上下文可以通过修改`BeanFactory`的方式，来为BeanFactory提供用户所给的修改。

 **二、应用上下文在干些什么**

 a. 加载XML 

b. 修改BeanDefinition

 c. Bean的扩展 

d. Bean的实例化

 **三、两大类接口** 

- -BeanFactoryPostProcess:如名，在Factory之后的处理器，那就是在BeanDefinition初始化之后。
-  -BeanPostProcessor:如名，在Bean之后的处理器，那就是在Bean初始化之后，但这个接口提供了在Bean初始化前后都有 这一章的操作也基本上环绕着这两个接口需要的操作以及应用上下文在干什么去进行

**四、如何实现**

1.处理两个接口 

BeanFactoryPostProcessor

- 提供postProcessBeanFactory去处理postProcessBeanFactory 

BeanPostProcessor

-  提供postProcessBeforeInitialization以及postProcessAfterInitialization方法，去处理Bean实例化前后的处理。

2.应用上下文处理

 ApplicationContext：应用上下文接口，继承了一个ListableBeanFactory，也就继承了一些BeanFactory的方法，包括getBean等。 -ConfigurableApplicationContext：继承ApplicationContext接口，内置refresh，这是一个核心方法，用来刷新容器。

> 刷新容器，顾名思义，就是对容器中的bean对象进行改变、刷新 **因为拓展Bean就是用户对Bean有了修改，所以刷新就是应用这些修改**

AbstractApplicationContext：这里应用了模板模式，实现类`refresh()`的流程，其实也就是上下文干了什么。

- a. 创建BeanFactory，加载注册BeanDefinition 
- b. 获取BeanFactory
-  c. 执行BeanFactoryPostProcessor
-  d.注册、 把Bean中载入的BeanPostProcessor加载进BeanFactory，在createBean的时候再去调用
-  e. 直接调用方法，创建Bean对象 

它像是对BeanFatory的包装，它里面藏了一个新建的BeanFactory，并对他进行读取XML、加载/修改BeanDefinition、扩展Bean对象、Bean的实例化。并对外提供Bean的获取方法，那么以后对bean的管理就完全可以通过Context来进行。 

并且这个模板模式就需要把抽象方法让下面的子类一个个完成了，这里用了多次继承，**就是想让一个抽象类完成一类方法，让类的职责更加清晰：**

- AbstractRefreshableApplicationContext-它来进行DefaultListableBeanFactory的创建
- AbstractXmlApplicationContext-他来调用xmlBeanDefinitionReader进行BeanFactory的xml资源加载，ApplicationContex是继承了DefaultResourceLoader的，所以可以解析资源。 
- ClassPathXmlApplicationContext，这里是最终向外提供的接口，用来让应用中提供配置文件具体在哪，并返回用户上下文。

 最后，回到AbstractAutowireCapableBeanFactory，它是专门负责创建bean的抽象类，在createBean的时候要来调用我们的BeanPostProcessor，遍历调用所有BeanPostProcessor，并分别执行before和after方法。 

- 这里注意，`BeanPostProcessor`放在了AbstractBeanFactory中，`private final List<BeanPostProcessor> beanPostProcessors = new ArrayList<BeanPostProcessor>();`,并且提供add,remove等方法
- 这里我们需要知道，BeanPostProcessor和BeanFactoryPostProcessor也是BeanFactory可以管理的类，**只不过他们的实现类是用户实现**，当用户实现后，可以注册BeanDefinition去取得已经初始化好的bean实例。
- 如下所示，我们加载配置文件之后，读取了这两个节点实现类的BeanDefinition，并且实例化为了单例Bean对象
  - ![image-20240116102519864](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240116102519864.png)

### Result

这节主要就是应用上下文在容器内部是怎么实现的，通过包装BeanFactory使得其可以加载xml，并且处理Bean的拓展以及实例化。

虽然笔记很多，但是不一定再有时间看，所以总结和流程图很重要！还有就是借鉴别人总结的知识也很重要，不要故步自封。

这也是第一次看到STAR法则，内容也是搬砖别人的，之后尽量自己也要能写出来。
