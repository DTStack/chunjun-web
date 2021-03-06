---
slug: dirty-data-management
title: 任务脏数据插件化管理
authors: tiezhu
tags: [Principle]
---
# 背景
目前任务对脏数据的处理仅仅是日志打印，这样显然是无法应对客户多变的使用场景。
# 方案
整体架构采用**生产者-消费者**模式，任务启动过程中，同时将Manager初始化并启动Consumer异步线程池，仅需在BaseRichInputFormat 和 BaseRichOutputFormat 调用 Manager的collect() 方法收集脏数据即可。
## 流程图
![image.png](image-1.png)
![image.png](image-2.png)



## 详细描述
### 任务配置参数
对应Java 实体类 - DirtyConf
```json
 "dirty": {
        "type": "log",
        "printRate": 500,
        "errorLimit": 1000,
        "totalLimit": 1000,
        "properties": {
          "store": true,
          "fileName": "dirty.csv",
          "filePath": "~/dirty"
        }
      }
```

- type

插件类型，**必填项**，根据type动态加载对应的插件；

- printRate

脏数据在日志中的打印频率，默认值是**Long.MAX_VALUE**，即：**不打印**脏数据信息在日志文件中（因为客户的数据不宜暴露）；
**改（2022-01-13 by tiezhu**）：默认值修改为1，表示默认脏数据信息都会打印到日志文件中，同时，如果printRate <= 0，表示不打印任何脏数据信息；

- errorLimit

脏数据在插件中，处理失败的条数限制，当处理失败的脏数据条数超过这个限制时，任务抛出NoRestartException，即任务失败且不重试；默认值是**Long.MAX_VALUE**；
**改（2022-01-13 by tiezhu）**：默认值修改为1，如果errorLimit < 0，表示任务容忍所有的异常，不失败；

- totalLimit

脏数据总条数限制，即收集到的脏数据超过这个限制时，任务抛出NoRestartException，即任务失败且不重试；**默认值是Long.MAX_VALUE**；
**改（2022-01-13 by tiezhu）**：默认值修改为1，如果totalLimit < 0，表示任务容忍所有的异常，不失败；

- properties

各自插件的参数配置

### 脏数据插件管理者
对应Java 实体类 - DirtyManager
Manager主要维护着脏数据消费者Consumer 和 一个异步线程池；

- 主要作用是**收集脏数据**，并下发到Consumer队列中

![image.png](image-3.png)

- 调用 collect() 方法

BaseRichInputFormat
![image.png](image-4.png)

### 脏数据插件消费者
对应Java 实体类 - AbstractDirtyConsumer
Consumer主要维护着一个消息队列，中间缓存着脏数据信息；

- run() 方法

主要逻辑是消费队列中的脏数据，consume() 方法交给子类去实现；如果在consume过程中出现了异常，那么errorCounter 计数加一。
![image.png](image-5.png)

- consume() 方法

处理脏数据的具体逻辑，交由子类实现，根据插件的不同，对脏数据处理逻辑也会有所不同。
 

# 接口规范
启动参数
```sql
 "dirty": {
        "type": "log",
        "printRate": 500,
        "errorLimit": 1000,
        "totalLimit": 1000,
        "properties": {
          "store": true,
          "fileName": "dirty.csv",
          "filePath": "~/dirty"
        }
      }

# 以下参数在FlinkX 启动参数-confProp中
flinkx.dirty-data.output-type = log/jdbc
flinkx.dirty-data.max-rows = 1000 // total limit
flinkx.dirty-data.max-collect-failed-rows = 1000 // error limit

flinkx.dirty-data.jdbc.url= 
flinkx.dirty-data.jdbc.username= 
flinkx.dirty-data.jdbc.password=
flinkx.dirty-data.jdbc.database=   // database 可以写在 url
flinkx.dirty-data.jdbc.table=

flinkx.dirty-data.log.print-interval= 500
```
JDBC 建表语句（MySQL）
```sql
job_id
job_name 
表名 operator_name
数据 data
错误原因 error_msg
字段名 field_name

CREATE TABLE IF NOT EXISTS flinkx_dirty_data
(
    job_id        VARCHAR(32)                               NOT NULL COMMENT 'Flink Job Id',
    job_name      VARCHAR(255)                              NOT NULL COMMENT 'Flink Job Name',
    operator_name VARCHAR(255)                              NOT NULL COMMENT '出现异常数据的算子名，包含表名',
    dirty_data    TEXT                                      NOT NULL COMMENT '脏数据的异常数据',
    error_message TEXT COMMENT '脏数据中异常原因',
    field_name    VARCHAR(255) COMMENT '脏数据中异常字段名',
    create_time    TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) NOT NULL ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '脏数据出现的时间点'
)
    COMMENT '存储脏数据';

CREATE INDEX idx_job_id ON flinkx_dirty_data (job_id);
CREATE INDEX idx_operator_name ON flinkx_dirty_data(operator_name);
CREATE INDEX idx_create_time ON flinkx_dirty_data(create_time);
```
#### Metircs
```sql
flinkx_DirtyData_count
flinkx_DirtyData_collectFailedCount
```
#### 风险
数据同步JSON脏数据配置



#### 项目目录结构
父模块
flinkx-dirtydata-collectors

子模块
flinkx-dirtydata-collector-jdbc
flinkx-dirtydata-collector-log

#### 打包目录
flinkx-dist
dirtydata-collector
jdbc
log

