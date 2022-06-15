---
title: QuickStart
sidebar_position: 2


---

# 快速入门

本文讨论如何在不同场景下使用纯均进行同步/SQL计算任务。本文中以 Stream -> Stream 为例子说明，如需构建其他数据源任务，请根据插件文档具体修改。

# 准备开始

操作系统：无限制

系统版本：无限制

### 环境要求

#### java

- JDK1.8
- 配置好JAVA_HOME环境变量

> jdk安装步骤这里不做介绍

#### Flink

- 推荐flink1.12.7
- 官网下载压缩包直接解压即可
   - 下载地址：https://dlcdn.apache.org/flink/flink-1.12.7/flink-1.12.7-bin-scala_2.12.tgz
- 需要在提交机器上配置FLINK_HOME环境变量

> local模式不需要安装Flink

#### Hadoop

- 推荐hadoop2.7.5
- 需要在提交机器上配置HAOOP_HOME环境变量

> local模式和standalone模式无需依赖Hadoop环境

# 获取插件

纯均提供了已经编译好的插件压缩包（[chunjun-dist.tar](https://github.com/DTStack/chunjun/releases)），里面包含目前所有的脚本案例，任务提交脚本，插件包等内容，使得用户可以直接下载，根据需要配置任务，开箱即用。

另外，可以下载源码（[github地址](https://github.com/DTStack/chunjun)），自行编译源码，提交任务。

## 压缩包

纯均提供的压缩包（chunjun-dist.tar）里包含四部分内容：bin（包含任务提交脚本），chunjun-dist（纯均任务插件包），chunjun-example（纯均任务脚本模版），lib（任务提交客户端），用户可以通过bin里的提交脚本，使用已经编译好的插件jar包直接提交任务，无需关心插件编译过程，适合调研使用。

## 源码编译

### 1.安装依赖

纯均主要使用Java语言编写，通过maven打包编译。从仓库中通过git下载源码之后，首先进入bin目录，根据系统执行不同的install_jars脚本，linux/mac 系统使用 install_jars.sh，windows
系统使用install_jars.bat，把纯均项目中部分依赖安装到本地仓库中，避免编译源码过程中，出现依赖找不到问题。

### 2.编译源码

在纯均项目根目录下，执行mvn 编译命令 ，在根目录下生成目录 **chunjun-dist**（插件包路径）
,chunjun根据cdp等不同平台对应的插件提供了不同的profile，所以在打包的时候根据所需要的插件包执行不同的mvn命令

| 平台类型 |                                              | 含义                                    |
| -------- | -------------------------------------------- | --------------------------------------- |
| tdh      | mvn clean package -DskipTests -P default,tdh | 打包出inceptor插件以及default支持的插件 |
| default  | mvn clean package -DskipTests -P default     | 除了inceptor插件之外的所有插件          |


### 3.可能出现的问题

* 编译过程中出现依赖不存在问题

先执行bin目录下install_jars脚本，如果还存在依赖问题，检查配置的maven环境是否可用，是否修改了项目pom文件。

* 编译过程中出现 Failed to execute goal com.diffplug.spotless:spotless-maven-plugin:2.4.2:check (spotless-check) 报错

在编译路径下，执行``` mvn spotless:apply```，对项目代码进行格式化。

# 任务提交

纯均支持多种模式提交任务，在生产环境中，常用的模式有yarn-session和 yarn-pre-job 模式。

## 参数说明

mode：任务提交的类型，非必填项，类型有：local（默认值），standalone，yarn-session，yarn-per-job，kubernetes-session，kubernetes-application，对应源码中枚举类 **
ClusterMode**；

jobType：纯均任务类型，必填项，同步任务为：sync，SQL计算任务为：sql；

job：纯均任务脚本地址，必填项；

chunjunDistDir：纯均插件包地址；

confProp：纯均任务配置参数，Flink相关配置也是在这里配置；

flinkConfDir：flink-conf.yaml 地址，在非local模式时，需要配置；

## Local

Local 模式不依赖Flink环境和Hadoop环境，在本地环境启动一个JVM进程执行纯均任务。

### 提交步骤

进入到chunjun-dist 目录，执行命令

```shell
sh bin/chunjun-local.sh  -job chunjun-examples/json/stream/stream.json
```

即可执行一个简单的 **stream -> stream** 同步任务

## Standalone

Standalone模式依赖Flink Standalone环境，不依赖Hadoop环境。

### 提交步骤

#### 1. 启动Flink Standalone环境

```shell
sh $FLINK_HOME/bin/statrt-cluster.sh
```

#### 2. 提交任务

进入到本地chunjun-dist目录，执行命令

```shell
sh bin/chunjun-standalone.sh -job chunjun-examples/json/stream/stream.json
```

提交成功之后，可以在flink web ui 上观察任务情况；

### 存在问题

1. 提交相同任务报错：Caused by: java.lang.IllegalStateException: Trying to access closed classloader. Please check if you store
   classloaders directly or indirectly in static fields. If the stacktrace suggests that the leak occurs in a third
   party library and cannot be fixed immediately, you can disable this check with the configuration '
   classloader.check-leaked-classloader'.

详细报错信息如下：

``` java
Caused by: java.lang.IllegalStateException: Trying to access closed classloader. Please check if you store classloaders directly or indirectly in static fields. If the stacktrace suggests that the leak occurs in a third party library and cannot be fixed immediately, you can disable this check with the configuration 'classloader.check-leaked-classloader'.
	at org.apache.flink.runtime.execution.librarycache.FlinkUserCodeClassLoaders$SafetyNetWrapperClassLoader.ensureInner(FlinkUserCodeClassLoaders.java:164)
	at org.apache.flink.runtime.execution.librarycache.FlinkUserCodeClassLoaders$SafetyNetWrapperClassLoader.loadClass(FlinkUserCodeClassLoaders.java:178)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:405)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:351)
	at com.dtstack.chunjun.util.DataSyncFactoryUtil.lambda$discoverDirty$3(DataSyncFactoryUtil.java:125)
	at com.dtstack.chunjun.classloader.ClassLoaderSupplierCallBack.callbackAndReset(ClassLoaderSupplierCallBack.java:33)
	at com.dtstack.chunjun.classloader.ClassLoaderManager.newInstance(ClassLoaderManager.java:56)
	at com.dtstack.chunjun.util.DataSyncFactoryUtil.discoverDirty(DataSyncFactoryUtil.java:122)
	... 14 more
```

方案：这个问题我们内部已经修复了，但是现在还在走内部测试流程；临时解决方案是重启集群；

2. Flink standalone 集群加载chunjun-dist里jar包之后，集群无法启动，日志报错：Exception in thread "main" java.lang.NoSuchFieldError:
   EMPTY_BYTE_ARRAY.

详细报错信息如下：

```text
Exception in thread"main"java.lang.NoSuchFieldError:EMPTY_BYTE_ARRAY
        at org.apache.logging.log4j.core.config.ConfigurationSource.<clinit>(ConfigurationSource.java:56)
        at org.apache.logging.log4j.core.config.NullConfiguration.<init>(NullConfiguration.java:32)
        at org.apache.logging.log4j.core.LoggerContext.<clinit>(LoggerContext.java:85)
        at java.lang.Class.forName0(Native Method)
        at java.lang.Class.forName(Class.java:264)
        at org.apache.log4j.LogManager.<clinit>(LogManager.java:72)
        at org.slf4j.impl.Log4jLoggerFactory.getLogger(Log4jLoggerFactory.java:73)
        at org.slf4j.LoggerFactory.getLogger(LoggerFactory.java:285)
        at org.slf4j.LoggerFactory.getLogger(LoggerFactory.java:305)
        at org.apache.flink.runtime.entrypoint.ClusterEntrypoint.<clinit>(ClusterEntrypoint.java:107)
```

这个报错是因为log4j 版本不统一导致的，因为chunjun-dist 中部分插件引用的还是旧版本的log4j依赖，导致集群启动过程中，出现了类冲突问题；

方案：临时方案是将flink lib 中 log4j 相关的jar包名字前加上字符‘a‘，使得flink standalone jvm 优先加载。

## Yarn Session

YarnSession 模式依赖Flink 和 Hadoop 环境，需要在任务提交之前启动相应的yarn session；

### 提交步骤

#### 1. 启动yarn session环境

Yarn Pre-Job 模式依赖Flink 和 Hadoop 环境，需要在提交机器中提前设置好$HADOOP_HOME和$FLINK_HOME

我们需要使用yarn-session -t参数上传chunjun-dist

```shell
cd $FLINK_HOME/bin
./yarn-session -t $CHUNJUN_HOME -d
```

#### 2. 提交任务

通过yarn web ui 查看session 对应的application $SESSION_APPLICATION_ID，进入到本地chunjun-dist目录，执行命令

```shell
sh ./bin/chunjun-yarn-session.sh -job chunjun-examples/json/stream/stream.json -confProp {\"yarn.application.id\":\"SESSION_APPLICATION_ID\"}
```

yarn.application.id 也可以在 flink-conf.yaml 中设置；提交成功之后，可以通过 yarn web ui 上观察任务情况。

## Yarn Pre-Job

Yarn Pre-Job 模式依赖Flink 和 Hadoop 环境，需要在提交机器中提前设置好$HADOOP_HOME和$FLINK_HOME。

### 提交步骤

Yarn Pre-Job 提交任务配置正确即可提交。进入本地chunjun-dist目录，执行命令提交任务。

```shell
sh ./bin/chunjun-yarn-perjob.sh -job chunjun-examples/json/stream/stream.json
```

提交成功之后，可以通过 yarn web ui 上观察任务情况；