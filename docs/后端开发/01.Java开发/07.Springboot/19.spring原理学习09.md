---
title: spring原理学习09-Bean对象作用域以及FactoryBean
date: 2024-01-21
tags: 
  - Java
categories: 
  - 后端开发
  - Java开发
  - Springboot
---

## 目标

交给 Spring 管理的 Bean 对象，一定就是我们用类创建出来的 Bean 吗？创建出来的 Bean 就永远是单例的吗，没有可能是原型模式吗？

>之前在Spring框架中，我们在一个类之中（TODO:补充类名）,定义了两个种类型的Bean，即单例和原型模式（实际spring中这也是最基本的两种，其他种类是这两种的衍生），现在解释一下：
>
>- singletonScope，即单例Bean，顾名思义具有单例模式的所有特性，`在spring容器里面只会初始化出一个bean实例`，存于缓存中。后续的请求都公用这个对象。
>   - 最简单的创建单例bean的方式，就是直接在类名上面加@Service注解。
>
>- prototypeScope，即原型Bean，`每次请求时都会创建新的bean实例`直接使用。
>   - 创建原型Bean，需要显示指定scope属性。
>
>
>

在集合 Spring 框架下，我们使用的 MyBatis 框架中，它的核心作用是可以满足用户不需要实现 Dao 接口类，就可以通过 xml 或者注解配置的方式完成对数据库执行 CRUD 操作，那么在实现这样的 ORM 框架中，是怎么把一个数据库操作的 Bean 对象交给 Spring 管理的呢。

因为我们在使用 Spring、MyBatis 框架的时候都可以知道，并没有手动的去创建任何操作数据库的 Bean 对象，有的仅仅是一个接口定义，而这个接口定义竟然可以被注入到其他需要使用 Dao 的属性中去了.

那么这一过程最核心待解决的问题**，就是需要完成把复杂且以代理方式动态变化的对象，注册到 Spring 容器中。而为了满足这样的一个扩展组件开发的需求，就需要我们在现有手写的 Spring 框架中，添加这一能力**。

## 方案

**提供一个能让使用者定义复杂的 Bean 对象意义重大**，因为这样做了之后 Spring 的生态种子孵化箱就此提供了，谁家的框架都可以在此标准上完成自己服务的接入。

但这样的功能逻辑设计上并不复杂，因为整个 Spring 框架在开发的过程中就已经提供了各项扩展能力的`接茬`，你只需要在合适的位置提供一个接茬的处理接口调用和相应的功能逻辑实现即可。

**像这里的目标实现就是对外提供一个可以二次从 FactoryBean 的 getObject 方法中获取对象的功能即可，这样所有实现此接口的对象类，就可以扩充自己的对象功能了**。*MyBatis 就是实现了一个 MapperFactoryBean 类，在 getObject 方法中提供 SqlSession 对执行 CRUD 方法的操作* 整体设计结构如下图：

![img](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/spring-10-01.png)

- 整个的实现过程包括了两部分，一**个解决创建对象时单例还是原型对象，另外一个处理 FactoryBean 类型对象创建过程中关于获取具体调用对象的 `getObject` 操作。**
- `SCOPE_SINGLETON`、`SCOPE_PROTOTYPE`，对象类型的创建获取方式，主要区分在于 `AbstractAutowireCapableBeanFactory#createBean` **创建完成对象后是否放入到内存中，如果不放入则每次获取都会重新创建**。
  - 放入内存就是放入缓存，如果是单例，我们每次就是用的一开始创建那个Bean
- createBean 执行对象创建、属性填充、依赖加载、前置后置处理、初始化等操作后，就要开始做执行判断整个对象是否是一个 FactoryBean 对象。**如果是这样的对象，就需要再继续执行获取 FactoryBean 具体对象中的 `getObject` 对象了。整个 getBean 过程中都会新增一个单例类型的判断`factory.isSingleton()`，用于决定是否使用内存存放对象信息。**

FactoryBean以及Bean作用域类之间关系如下：

![image-20240122144905474](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/image-20240122144905474.png)

## 工程结构

```java
small-spring-step-09
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
    │           │   │   │   ├── DisposableBeanAdapter.java
    │           │   │   │   ├── FactoryBeanRegistrySupport.java
    │           │   │   │   ├── InstantiationStrategy.java
    │           │   │   │   └── SimpleInstantiationStrategy.java  
    │           │   │   ├── support
    │           │   │   │   └── XmlBeanDefinitionReader.java
    │           │   │   ├── Aware.java
    │           │   │   ├── BeanClassLoaderAware.java
    │           │   │   ├── BeanFactory.java
    │           │   │   ├── BeanFactoryAware.java
    │           │   │   ├── BeanNameAware.java
    │           │   │   ├── ConfigurableListableBeanFactory.java
    │           │   │   ├── DisposableBean.java
    │           │   │   ├── FactoryBean.java
    │           │   │   ├── HierarchicalBeanFactory.java
    │           │   │   ├── InitializingBean.java
    │           │   │   └── ListableBeanFactory.java
    │           │   ├── BeansException.java
    │           │   ├── PropertyValue.java
    │           │   └── PropertyValues.java 
    │           ├── context
    │           │   ├── support
    │           │   │   ├── AbstractApplicationContext.java 
    │           │   │   ├── AbstractRefreshableApplicationContext.java 
    │           │   │   ├── AbstractXmlApplicationContext.java 
    │           │   │   ├── ApplicationContextAwareProcessor.java 
    │           │   │   └── ClassPathXmlApplicationContext.java 
    │           │   ├── ApplicationContext.java 
    │           │   ├── ApplicationContextAware.java 
    │           │   └── ConfigurableApplicationContext.java
    │           ├── core.io
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
                └── ApiTest.java

```

Spring 单例、原型以及 `FactoryBean` 功能实现类关系如图

![图 10-2](https://typora-1309665611.cos.ap-nanjing.myqcloud.com/typora/spring-10-02.png)

- 以上整个类关系图展示的就是添加 Bean 的实例化是单例还是原型模式以及 FactoryBean 的实现。
- 其实整个实现的过程并不复杂，只是在现有的 AbstractAutowireCapableBeanFactory 类以及继承的抽象类 AbstractBeanFactory 中进行扩展。
- 不过这次我们把 AbstractBeanFactory 继承的 DefaultSingletonBeanRegistry 类，中间加了一层 FactoryBeanRegistrySupport，这个类在 Spring 框架中主要是处理关于 FactoryBean 注册的支撑操作。

###  Bean的作用范围定义和xml解析

```java
public class BeanDefinition {

    String SCOPE_SINGLETON = ConfigurableBeanFactory.SCOPE_SINGLETON;

    String SCOPE_PROTOTYPE = ConfigurableBeanFactory.SCOPE_PROTOTYPE;

    private Class beanClass;

    private PropertyValues propertyValues;

    private String initMethodName;

    private String destroyMethodName;

    private String scope = SCOPE_SINGLETON;

    private boolean singleton = true;

    private boolean prototype = false;
    
    //在xml注册Bean定义时，通过scope字段来判断是单例还是原型
    public void setScope(String scope) {
        this.scope = scope;
        this.singleton = SCOPE_SINGLETON.equals(scope);
        this.prototype = SCOPE_PROTOTYPE.equals(scope);
    }
    
    // ...get/set
}

```

- singleton、prototype，是本次在 BeanDefinition 类中新增加的两个属性信息，用于把从 spring.xml 中解析到的 Bean 对象作用范围填充到属性中。

```java
public class XmlBeanDefinitionReader extends AbstractBeanDefinitionReader {

    protected void doLoadBeanDefinitions(InputStream inputStream) throws ClassNotFoundException {
      
        for (int i = 0; i < childNodes.getLength(); i++) {
            // 判断元素
            if (!(childNodes.item(i) instanceof Element)) continue;
            // 判断对象
            if (!"bean".equals(childNodes.item(i).getNodeName())) continue;

            // 解析标签
            Element bean = (Element) childNodes.item(i);
            String id = bean.getAttribute("id");
            String name = bean.getAttribute("name");
            String className = bean.getAttribute("class");
            String initMethod = bean.getAttribute("init-method");
            String destroyMethodName = bean.getAttribute("destroy-method");
            String beanScope = bean.getAttribute("scope");

            // 获取 Class，方便获取类中的名称
            Class<?> clazz = Class.forName(className);
            // 优先级 id > name
            String beanName = StrUtil.isNotEmpty(id) ? id : name;
            if (StrUtil.isEmpty(beanName)) {
                beanName = StrUtil.lowerFirst(clazz.getSimpleName());
            }

            // 定义Bean
            BeanDefinition beanDefinition = new BeanDefinition(clazz);
            beanDefinition.setInitMethodName(initMethod);
            beanDefinition.setDestroyMethodName(destroyMethodName);

            if (StrUtil.isNotEmpty(beanScope)) {
                beanDefinition.setScope(beanScope);
            }
            
            // ...
            
            // 注册 BeanDefinition
            getRegistry().registerBeanDefinition(beanName, beanDefinition);
        }
    }

}

```

- 在解析 XML 处理类 XmlBeanDefinitionReader 中，新增加了关于 Bean 对象配置中 scope 的解析，并把这个属性信息填充到 Bean 定义中。`beanDefinition.setScope(beanScope)`
  - scpoe属性作用?

### 创建和修改，销毁对象时候判断单例和原型模式

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

        // 注册实现了 DisposableBean 接口的 Bean 对象
        registerDisposableBeanIfNecessary(beanName, bean, beanDefinition);

        // 判断 SCOPE_SINGLETON、SCOPE_PROTOTYPE
        if (beanDefinition.isSingleton()) {
            addSingleton(beanName, bean);
        }
        return bean;
    }

    protected void registerDisposableBeanIfNecessary(String beanName, Object bean, BeanDefinition beanDefinition) {
        // 非 Singleton 类型的 Bean 不执行销毁方法
        if (!beanDefinition.isSingleton()) return;

        if (bean instanceof DisposableBean || StrUtil.isNotEmpty(beanDefinition.getDestroyMethodName())) {
            registerDisposableBean(beanName, new DisposableBeanAdapter(bean, beanName, beanDefinition));
        }
    }
    
    // ... 其他功能
}

```

- 单例模式和原型模式的区别就在于是否存放到内存中，**如果是原型模式那么就不会存放到内存（单例Map）中，每次获取都重新创建对象**
- **另外非 Singleton 类型的 Bean 不需要执行销毁方法**
- 所以这里的代码会有两处修改，
  - 一处是 createBean 中判断是否添加到 addSingleton(beanName, bean);
  - 另外一处是 registerDisposableBeanIfNecessary 销毁注册中的判断 `if (!beanDefinition.isSingleton()) return;`。


### 定义 FactoryBean 接口

```java
public interface FactoryBean<T> {

    T getObject() throws Exception;

    Class<?> getObjectType();

    boolean isSingleton();

}

```

- FactoryBean 中需要提供3个方法，获取对象、对象类型，以及是否是单例对象，如果是单例对象依然会被放到内存（factoryBeanObjectCache）中。
- FactoryBean是用户要自己拓展Bean对象功能时，就去实现这个接口，在`getObject()`中进行Bean对象功能拓展

> 看到这个东西，我想到了beanFactory，这里看一下区别
>
> - BeanFactory：Bean工厂，是一个工厂(Factory)，我们Spring IoC容器的最顶层接口就是这个BeanFactory，它的作用是管理Bean，即实例化、定位、配置应用程序中的对象及建立这些对象间的依赖。
>
>
> - FactoryBean：工厂Bean，是一个Bean，作用是产生其他bean实例。通常情况下，这种bean没有什么特别的要求，仅需要提供一个工厂方法`getObject`，该方法用来返回其他bean实例。

### 实现一个 FactoryBean 注册服务

>这里的注册就是指从缓存中获取 FactoryBean创建的单例对象，或者缓存中没有，调用factoryBean去创建一个对象（抽象）

```java
public abstract class FactoryBeanRegistrySupport extends DefaultSingletonBeanRegistry {

    /**
     * Cache of singleton objects created by FactoryBeans: FactoryBean name --> object
     */
    private final Map<String, Object> factoryBeanObjectCache = new ConcurrentHashMap<String, Object>();

    protected Object getCachedObjectForFactoryBean(String beanName) {
        Object object = this.factoryBeanObjectCache.get(beanName);
        return (object != NULL_OBJECT ? object : null);
    }

    protected Object getObjectFromFactoryBean(FactoryBean factory, String beanName) {
        if (factory.isSingleton()) {
            //如果是单例对象，从缓存中获取
            Object object = this.factoryBeanObjectCache.get(beanName);
            if (object == null) {
                object = doGetObjectFromFactoryBean(factory, beanName);
                this.factoryBeanObjectCache.put(beanName, (object != null ? object : NULL_OBJECT));
            }
            return (object != NULL_OBJECT ? object : null);
        } else {
            //否则新建一个Bean对象
            return doGetObjectFromFactoryBean(factory, beanName);
        }
    }

    private Object doGetObjectFromFactoryBean(final FactoryBean factory, final String beanName){
        try {
            return factory.getObject();
        } catch (Exception e) {
            throw new BeansException("FactoryBean threw exception on object[" + beanName + "] creation", e);
        }
    }

}

```

- FactoryBeanRegistrySupport 类**主要处理的就是关于 FactoryBean 此类对象的注册操作**，之所以放到这样一个单独的类里，就是希望做到不同领域模块下只负责各自需要完成的功能，避免因为扩展导致类膨胀到难以维护。
- **同样这里也定义了缓存操作 factoryBeanObjectCache，用于存放单例类型的对象，避免重复创建。在日常使用用，基本也都是创建的单例对象**
- doGetObjectFromFactoryBean 是具体的获取 FactoryBean#getObject() 方法，**因为既有缓存的处理也有对象的获取，所以额外提供了 getObjectFromFactoryBean 进行逻辑包装**，这部分的操作方式类似从Redis取数据，如果为空就从数据库获取并写入Redis。
  - class#method代表这个类下的这个method方法


### 扩展 AbstractBeanFactory 创建对象逻辑

```java
public abstract class AbstractBeanFactory extends FactoryBeanRegistrySupport implements ConfigurableBeanFactory {

   public <T> T doGetBean(final String name, final Object[] args) throws BeansException{
        //先去单例对象集合查询是否有，如果没有，会在单例对象集合创建一个Bean
        Object sharedInstance = getSingleton(name);
        if(sharedInstance!=null){
            // 如果是 FactoryBean，则需要调用 FactoryBean#getObject
            return (T) getObjectForBeanInstance(sharedInstance, name);
        }

        BeanDefinition beanDefinition = getBeanDefinition(name);
        Object bean = createBean(name,beanDefinition,args);
        //这里 return bean;也可以因为这里返回的是BeanFactory创建的对象，只不过getObjectForBeanInstance对非FactoryBean对象不会做出什么处理
        return (T) getObjectForBeanInstance(bean, name);
    }
   
    private Object getObjectForBeanInstance(Object beanInstance, String beanName) {
        if (!(beanInstance instanceof FactoryBean)) {
            return beanInstance;
        }

        Object object = getCachedObjectForFactoryBean(beanName);

        if (object == null) {
            FactoryBean<?> factoryBean = (FactoryBean<?>) beanInstance;
            object = getObjectFromFactoryBean(factoryBean, beanName);
        }

        return object;
    }
        
    // ...
}

```

- 首先这里把 AbstractBeanFactory 原来继承的 DefaultSingletonBeanRegistry，修改为继承 FactoryBeanRegistrySupport。因为需要扩展出创建 FactoryBean 对象的能力，所以这就想一个链条服务上，截出一个段来处理额外的服务，并把链条再链接上。
  - FactoryBeanRegistrySupport继承自DefaultSingletonBeanRegistry
- 此处新增加的功能主要是在 doGetBean 方法中，添加了调用 `(T) getObjectForBeanInstance(sharedInstance, name)` 对获取 FactoryBean 的操作。
- 在 getObjectForBeanInstance 方法中做具体的 instanceof 判断，另外还会从 FactoryBean 的缓存中获取对象，如果不存在则调用 FactoryBeanRegistrySupport#getObjectFromFactoryBean，执行具体的操作。



## 测试

### 定义 FactoryBean 对象

```java
public class ProxyBeanFactory implements FactoryBean<IUserDao> {

    
    //    //使用Lambda表达式实现了invoke()方法。在invoke()方法中，根据传入的方法名和参数，返回一个固定的字符串，该字符串由一个HashMap根据参数值查找得到。
    //接下来，通过Proxy.newProxyInstance()方法创建了一个代理对象，该代理对象实现了IUserDao接口，并使用之前创建的InvocationHandler作为参数。

    @Override
    public IUserDao getObject() throws Exception {
        InvocationHandler handler = (proxy, method, args) -> {

            Map<String, String> hashMap = new HashMap<>();
            hashMap.put("10001", "小傅哥");
            hashMap.put("10002", "八杯水");
            hashMap.put("10003", "阿毛");
            
            return "你被代理了 " + method.getName() + "：" + hashMap.get(args[0].toString());
        };
        return (IUserDao) Proxy.newProxyInstance(Thread.currentThread().getContextClassLoader(), new Class[]{IUserDao.class}, handler);
    }

    @Override
    public Class<?> getObjectType() {
        return IUserDao.class;
    }

    @Override
    public boolean isSingleton() {
        return true;
    }

}

```

- 从测试结果来看，我们的代理类 ProxyBeanFactory 已经完美替换掉了 UserDao 的功能。
- 虽然看上去这一点实现并不复杂，甚至有点简单。但就是这样一点点核心内容的设计了，解决了所有需要和 Spring 结合的其他框架交互链接问题



### 结果

```java
Aware ClassLoader:sun.misc.Launcher$AppClassLoader@b4aac2
Aware Bean name is userService
执行：UserService.afterPropertiesSet
Aware ClassLoader:sun.misc.Launcher$AppClassLoader@b4aac2
Aware Bean name is userService
执行：UserService.afterPropertiesSet
Aware ClassLoader:sun.misc.Launcher$AppClassLoader@b4aac2
Aware Bean name is userService
执行：UserService.afterPropertiesSet
com.inet.bean.UserService$$EnhancerByCGLIB$$c647553b@134affc
com.inet.bean.UserService$$EnhancerByCGLIB$$c647553b@d041cf
com.inet.bean.UserService$$EnhancerByCGLIB$$c647553b@134affc 十六进制哈希：134affc
com.inet.bean.UserService$$EnhancerByCGLIB$$c647553b object internals:
 OFFSET  SIZE                                  TYPE DESCRIPTION                                               VALUE
      0     4                                       (object header)                                           09 fe 57 9a (00001001 11111110 01010111 10011010) (-1705509367)
      4     4                                       (object header)                                           a0 3c 12 16 (10100000 00111100 00010010 00010110) (370293920)
      8     4   com.inet.context.ApplicationContext UserService.applicationContext                            (object)
     12     4    com.inet.beans.factory.BeanFactory UserService.beanFactory                                   (object)
     16     4                      java.lang.String UserService.uId                                           (object)
     20     4                      java.lang.String UserService.company                                       (object)
     24     4                      java.lang.String UserService.location                                      (object)
     28     4                com.inet.bean.IUserDao UserService.userDao                                       (object)
     32     1                               boolean UserService$$EnhancerByCGLIB$$c647553b.CGLIB$BOUND        true
     33     3                                       (alignment/padding gap)                                  
     36     4               net.sf.cglib.proxy.NoOp UserService$$EnhancerByCGLIB$$c647553b.CGLIB$CALLBACK_0   (object)
Instance size: 40 bytes
Space losses: 3 bytes internal + 0 bytes external = 3 bytes total

```





## STAR总结

> 参考：https://wx.zsxq.com/dweb2/index/topic_detail/585551445252444

### situation：

bean对象不仅仅只有单例，可能还会是原型，并且使用者应该可以自己定义并注册复杂或者**动态代理**的Bean对象到Spring中，满足扩展组件开发的需求。

### Task：

- 增加Bean的作用域，不仅仅是单例。

- 实现FactoryBean，使得用户可以自己拓展Bean对象的功能

### Action

bean的作用域：

1. BeanDefinition类中增加作用域相关字段 
2. 加载解析资源时增加解析作用域参数 
3.  生成bean时进行判断，若是BeanDefinition标记为单例模式的bean放入单例缓存池中，原型模式的bean则每次重新生成

FactoryBean：

1. 创建 FactoryBean<T>  接口 

   a. 提供给使用者自定义生成bean的方法<精髓>  

   b. 获取bean的class类型的方法  

   c. 判断是否为单例

2. 创建 FactoryBeanRegistrySupport抽象类，继承自 DefaultSingletonBeanRegistry   

   a. 内部持有一个由FactoryBean提供给使用者自定义生成bean构建出的对象的缓存池

   b. 根据beanName获取缓存池中的对象  

   c. 根据factoryBean和beanName获取生成的对象，若是缓存池中没有bean则进行生成，同样会判断是否时单例bean，若是则生成后放入缓存池中

​		d.调用实现FactoryBean构建对象的方法，生成时实则调用本方法

> 这个getObject的具体内容是用户实现，因为用户实现这个接口就是为了拓展Bean功能

