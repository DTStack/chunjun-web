# OceanBase Lookup

## 一、介绍
OceanBase维表，支持全量和异步方式<br />
全量缓存:将维表数据全部加载到内存中，建议数据量大不使用。<br />
异步缓存:使用异步方式查询数据，并将查询到的数据使用lru缓存到内存中，建议数据量大使用。

## 二、支持版本
oceanbase3.1.x


## 三、插件名称
| SQL | oceanbase-x |
| --- | --- |

## 四、参数说明
- **connector**
  - 描述：oceanbase-x
  - 必选：是
  - 参数类型：String
  - 默认值：无
<br />

- **url**
  - 描述：jdbc:oceanbase://hostname:port/database
  - 必选：是
  - 参数类型：String
  - 默认值：无
<br />

- **table-name**
  - 描述：表名
  - 必选：是
  - 参数类型：String
  - 默认值：无：
<br />

- **username**
  - 描述：数据源的用户名，指定租户连接可在用户名后加上租户名称，例如"root@test"。目前只支持Mysql租户
  - 必选：是
  - 参数类型：String
  - 默认值：无
<br />

- **password**
  - 描述：password
  - 必选：是
  - 参数类型：String
  - 默认值：无
<br />

- **lookup.cache-type**
  - 描述：维表缓存类型(NONE、LRU、ALL)，默认LRU
  - 必选：否
  - 参数类型：string
  - 默认值：LRU
<br />
  
- **vertx.worker-pool-size**
  - 描述：LRU缓存的线程池大小
  - 必选：否
  - 参数类型：Integer
  - 默认值：5
<br />

- **lookup.cache-period**
  - 描述：ALL维表每隔多久加载一次数据，默认3600000毫秒(一个小时)
  - 必选：否
  - 参数类型：string
  - 默认值：3600000
<br />

- **lookup.cache.max-rows**
  - 描述：lru维表缓存数据的条数，默认10000条
  - 必选：否
  - 参数类型：string
  - 默认值：10000
<br />

- **lookup.max-retries**
  - 描述：查找数据库失败时的最大重试次数
  - 必选：否
  - 参数类型：Integer
  - 默认值：3
<br />

- **lookup.cache.ttl**
  - 描述：lru维表缓存数据的时间，默认60000毫秒(一分钟)
  - 必选：否
  - 参数类型：string
  - 默认值：60000
<br />

- **lookup.fetch-size**
  - 描述：ALL维表每次从数据库加载的条数，默认1000条
  - 必选：否
  - 参数类型：string
  - 默认值：1000
<br />

- **lookup.parallelism**
  - 描述：维表并行度
  - 必选：否
  - 参数类型：string
  - 默认值：无
<br />

## 五、数据类型

| OceanBase数据类型                                            | Flink 数据类型 | 描述                                                         |
| ------------------------------------------------------------ | -------------- | ------------------------------------------------------------ |
| BOOLEAN                                                      | BOOLEAN        |                                                              |
| 不TINYINT                                                    | TINYINT        |                                                              |
| SMALLINT                                                     | SMALLINT       |                                                              |
| MEDIUMINT<br>INT<br>INTEGER                                  | INT            |                                                              |
| BIGINT                                                       | BIGINT         |                                                              |
| FLOAT                                                        | FLOAT          |                                                              |
| DOUBLE                                                       | DOUBLE         |                                                              |
| DECIMAL(p,s)<br>NUMERIC(p,s)                                 | DECIMAL(p,s)   | 支持最大精度DECIMAL(38,18)                                   |
| TIME                                                         | TIME           |                                                              |
| DATE                                                         | DATE           |                                                              |
| TIMESTAMP<br>DATETIME                                        | TIMESTAMP      |                                                              |
| BIT<br>BINARY<br>VARBINARY<br>TINYBLOB<br>BLOB<br>MEDIUMBLOB<br>LONGBLOB | BYTES          | sql模式目前不支持bit类型长度为1，因为数据库会转成Boolean，建议直接将数据库字段设置成boolean |
| CHAR<br/>VARCHAR<br/>TINYTEXT<br/>MEDIUMTEXT<br/>LONGTEXT<br/>ENUM<br/>SET | STRING         |                                                              |


## 六、脚本示例
见项目内`flinkx-examples`文件夹。
