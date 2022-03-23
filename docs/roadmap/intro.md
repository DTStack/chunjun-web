---
title: 2022 roadmap-1
sidebar_position: 1
---

[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

#### 优先级1
  * 数据还原的支持
    * 监听ddl， 并支持外部执行对应的ddl 然后触发后续dml 的放行；
    * 支持同构数据源直接的ddl 监听和目标库的执行；
   支持异构构数据源直接的ddl 监听和目标库的执行；
  * 文档框架改进   
    * doc  (重点梳理：chunjun 的快速使用)
    * download （包括各个版本的可以执行包 减少编译信息）
    * 设计文档  
    * roadmap 了解社区的未来发展和规划
    * 技术方案（分片逻辑，断点续传，脏数据, 增量同步，logminer 实现）
  * 离线和实时无缝切换
  * ftp 对文件系统提供文件格式抽象（比如支持csv, excel等）
  * 插件隔离的支持（比如对多个版本的kafka 的支持）
  * chunjun-1.12 各个模块的维护，性能改进, 易用性
      * eg: jdbc 模块提供更丰富的分片逻辑，运行过程中的错误给出报错信息，同时给出正确格式的提示。
  很多 catch 都是打出日志。每个 error 日志再加上抛异常的代码，
  * 间隔轮询: startLocation 不仅支持  promethues，还可以增加其他数据源，方便其他系统进行集成


#### 优先级2:
* flink1.14版本的支持
* 提供对dophinscheduler的支持；

