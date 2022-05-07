---
title: QuickStart
sidebar_position: 2
---

# Quick start

This article discusses how to perform synchronization / SQL computing tasks using ChunJun in different scenarios.This article takes Stream -> Stream as an example, If you need to build other data source tasks, please modify them according to the plug-in document.

# Preparation

os:unlimited

system version:unlimited

Environment tools:JDK 1.8,Git,maven

(The environment has been configured with JAVA_HOME and maven by default)

# Get the plugin

ChunJun provides already compiled plug-in compressed packages([chunjun-dist.tar](https://github.com/DTStack/chunjun/releases)),This compressed package contains all the current script cases, task submission scripts, plug-in packages, etc., so that users can download directly, configure tasks as needed, and use them out of the box.

In addition, you can download the source code([address of github](https://github.com/DTStack/chunjun)),You can also compile the source code yourself and submit tasks.

## Archive

The compressed package (chunjun-dist.tar) provided by Chunjun contains four parts: bin (including task submission script), flinkx-dist (chunjun task plugin package), flinkx-example (chunjun task script template), lib (task submission client), users can submit tasks directly through the submission script in the bin and use the compiled plugin jar package without worrying about the plugin compilation process, which is suitable for research and use.

## Source code compilation

### 1.Install dependencies

ChunJun is mainly written in Java language, packaged and compiled by maven. After downloading the source code from the warehouse through git, first enter the bin directory, and execute different install_jars scripts according to the system. The linux/mac system uses install_jars.sh, and the windows
The system uses install_jars.bat to install some of the dependencies in the ChunJun project into the local warehouse to avoid the problem of not finding dependencies during the source code compilation process.

### 2.Compile the source code

In the root directory of the pure average project, execute the mvn compilation command ``` mvn clean package -Dmaven.test.skip``` to generate the directory **flinkx-dist** (plug-in package path) in the root directory

### 3.Problems that may arise

* Dependency does not exist during compilation

​ First execute the install_jars script in the bin directory. If there is still a dependency problem, check whether the configured maven environment is available and whether the project pom file has been modified.

* Failed to execute goal com.diffplug.spotless:spotless-maven-plugin:2.4.2:check (spotless-check) error occurred during compilation

​ In the compilation path, execute ``` mvn spotless:apply``` to format the project code.

# Task submission

ChunJun all supports multiple modes of submitting tasks. In the production environment, the commonly used modes are yarn-session and yarn-pre-job modes.

## Parameter Description

mode:The type of task submission, not required, the types are: local (default value), standalone, yarn-session, yarn-per-job, kubernetes-session, kubernetes-application, corresponding to the enumeration class **ClusterMode** in the source code;

jobType:ChunJun task type, required, the synchronization task is: sync, and the SQL calculation task is: sql;

job:Pure average task script address, required;

flinkxDistDir:ChunJun plugin package address;

confProp:ChunJun task configuration parameters, Flink related configuration is also configured here;

flinkConfDir:flink-conf.yaml address,In non-local mode, you need to configure;

## Local

The mode does not depend on the Flink environment and the Hadoop environment, and starts a JVM process in the local environment to perform pure tasks.

### Submission steps

Go to the chunjun-dist directory and execute the command

``` sh ./bin/flinkx -mode local -jobType sync -job ./flinkx-examples/json/stream/stream.json -flinkxDistDir ./flinkx-dist```

A simple **stream -> stream** synchronization task can be executed, and the task results can be viewed in the log file **nohup.out**;

## Standalone

Standalone mode depends on the Flink Standalone environment and does not depend on the Hadoop environment.

### Submission steps

#### 1. Start the Flink Standalone environment

Before starting the flink standalone environment, you need to deploy the pure-play plugin package to the flink lib directory and start the flink standalone cluster. You can observe that the classpath loaded by the flink standalone cluster contains the pure-play plug-in package.

#### 2. Submit a task

Go to the chunjun-dist directory and execute the command

```shell
sh ./bin/flinkx -mode standalone -jobType sync -job $CHUNJUN_DIST/flinkx-examples/json/stream/stream.json -flinkxDistDir $CHUNJUN_DIST/flinkx-dist -flinkConfDir $FLINK_HOME/conf
```

After the submission is successful, you can observe the task status on the flink web ui;

### FAQ

Q1. Caused by: java.lang.IllegalStateException: Trying to access closed classloader. Please check if you store
classloaders directly or indirectly in static fields. If the stacktrace suggests that the leak occurs in a third
party library and cannot be fixed immediately, you can disable this check with the configuration '
classloader.check-leaked-classloader'.

The detailed error message is as follows:

``` java
Caused by: java.lang.IllegalStateException: Trying to access closed classloader. Please check if you store classloaders directly or indirectly in static fields. If the stacktrace suggests that the leak occurs in a third party library and cannot be fixed immediately, you can disable this check with the configuration 'classloader.check-leaked-classloader'.
	at org.apache.flink.runtime.execution.librarycache.FlinkUserCodeClassLoaders$SafetyNetWrapperClassLoader.ensureInner(FlinkUserCodeClassLoaders.java:164)
	at org.apache.flink.runtime.execution.librarycache.FlinkUserCodeClassLoaders$SafetyNetWrapperClassLoader.loadClass(FlinkUserCodeClassLoaders.java:178)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:405)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:351)
	at com.dtstack.flinkx.util.DataSyncFactoryUtil.lambda$discoverDirty$3(DataSyncFactoryUtil.java:125)
	at com.dtstack.flinkx.classloader.ClassLoaderSupplierCallBack.callbackAndReset(ClassLoaderSupplierCallBack.java:33)
	at com.dtstack.flinkx.classloader.ClassLoaderManager.newInstance(ClassLoaderManager.java:56)
	at com.dtstack.flinkx.util.DataSyncFactoryUtil.discoverDirty(DataSyncFactoryUtil.java:122)
	... 14 more
```

A:We have fixed this problem internally, but we are still going through the internal testing process; the temporary solution is to restart the cluster;

Q2. After the Flink standalone cluster loads the jar package in flinkx-dist, the cluster cannot be started and the log reports an error:Exception in thread "main" java.lang.NoSuchFieldError:
EMPTY_BYTE_ARRAY.

The detailed error message is as follows:

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

This error is caused by inconsistent log4j versions, because some plug-ins in flinkx-dist still refer to the old version of log4j dependencies, resulting in class conflicts during cluster startup;

A:The temporary solution is to add the character 'a' to the name of the log4j-related jar package in the flink lib, so that the flink standalone jvm will be loaded first.

## Yarn Session

The YarnSession mode depends on the Flink and Hadoop environments, and the corresponding yarn session needs to be started before the task is submitted;

### Submission steps

#### 1. Start the yarn session environment

Before starting the yarn session, you need to configure the chunjun-dist under the HADOOP_CLASSPATH environment variable, start the yarn session, and you can observe that the Chunjun plug-in package is loaded in the yarn session.

#### 2. Submit a task

View the application $SESSION_APPLICATION_ID corresponding to the session through yarn web ui, enter the local chunjun-dist directory, and execute the command

```shell
sh ./bin/flinkx -mode yarn -jobName chunjun_session -jobType sync -job $CHUNJUN_DIST/flinkx-examples/json/stream/stream.json -hadoopConfDir $HADOOP_CONF_DIR -flinkxDistDir $CHUNJUN_DIST/flinkx-dist -confProp {\"yarn.application.id\":\"$SESSION_APPLICATION_ID\"}
```

yarn.application.id can also be set in flink-conf.yaml; after the submission is successful, the task status can be observed on the yarn web ui;

## Yarn Pre-Job

Yarn Pre-Job mode relies on Flink and Hadoop environments, and confirms whether resources are sufficient before submitting tasks;

### Submission steps

The Yarn Pre-Job submission task can be submitted after the configuration is correct. Enter the local chunjun-dist directory and execute the command to submit the task.

```shell
sh ./bin/flinkx -mode yarn-per-job -jobType sync -job $CHUNJUN_DIST/flinkx-examples/json/stream/stream.json -flinkxDistDir $CHUNJUN_DIST/flinkx-dist -flinkConfDir $FLINK_CONF_DIR -hadoopConfDir $HADOOP_CONF_DIR -flinkLibDir $FLINK_HOME/lib -jobName chunjun-pre-job
```

After the submission is successful, you can observe the task status on the yarn web ui;