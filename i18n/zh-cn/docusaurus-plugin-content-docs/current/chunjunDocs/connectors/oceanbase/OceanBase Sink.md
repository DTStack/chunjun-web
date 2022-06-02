# OceanBase Sink

## 一、介绍

OceanBase sink

## 二、支持版本

OceanBase3.1.x

## 三、插件名称

| Sync | oceanbasesink、oceanbasewriter |
| ---- |-------------------------------|
| SQL  | oceanbase-x                   |

## 四、参数说明

### 1、Sync

- **connection**
  - 描述：数据库连接参数，包含 jdbcUrl、schema、table 等参数
  - 必选：是
  - 参数类型：List
  - 默认值：无
    ```text
    "connection": [{
     "jdbcUrl": ["jdbc:oceanbase://hostname:port/test"],
     "table": ["table"]
    }]
    ```
    <br />

- **jdbcUrl**

  - 描述：针对关系型数据库的 jdbc 连接字符串
  - 必选：是
  - 参数类型：string
  - 默认值：无
    <br />
  

- **table**

  - 描述：目的表的表名称。目前只支持配置单个表，后续会支持多表
  - 必选：是
  - 参数类型：List
  - 默认值：无
    <br />

- **username**

  - 描述：数据源的用户名，指定租户连接可在用户名后加上租户名称，例如"root@test"。目前只支持Mysql租户
  - 必选：是
  - 参数类型：String
  - 默认值：无
    <br />

- **password**

  - 描述：数据源指定用户名的密码
  - 必选：是
  - 参数类型：String
  - 默认值：无
    <br />

- **column**

  - 描述：目的表需要写入数据的字段。例如: "column": [{"name":"id",type:"varchar"}]
  - 必选：是
  - 参数类型：List
  - 默认值：无
    <br />

- **fullColumn**

  - 描述：目的表中的所有字段，字段之间用英文逗号分隔。例如: "column": ["id","name","age","hobby"]，如果不配置，将在系统表中获取
  - 必选：否
  - 参数类型：List
  - 默认值：无
    <br />

- **preSql**

  - 描述：写入数据到目的表前，会先执行这里的一组标准语句
  - 必选：否
  - 参数类型：List
  - 默认值：无
    <br />

- **postSql**

  - 描述：写入数据到目的表后，会执行这里的一组标准语句
  - 必选：否
  - 参数类型：List
  - 默认值：无
    <br />

- **writeMode**

  - 描述：控制写入数据到目标表采用 insert into 或者 replace into 或者 ON DUPLICATE KEY UPDATE 语句
  - 必选：是
  - 所有选项：insert/replace/update
  - 参数类型：String
  - 默认值：insert
    <br />

- **allReplace**
  - 描述: writeMode=upsert时，为null的值是否覆盖原有值
    - true：ON DUPLICATE KEY UPDATE column=VALUES(column)
    - false：ON DUPLICATE KEY UPDATE column=IFNULL(VALUES(column),column)
  - 必选：否
  - 参数类型：String
  - 默认值：true
    <br />

- **batchSize**

  - 描述：一次性批量提交的记录数大小，该值可以极大减少 FlinkX 与数据库的网络交互次数，并提升整体吞吐量。但是该值设置过大可能会造成 FlinkX 运行进程 OOM 情况
  - 必选：否
  - 参数类型：int
  - 默认值：1
    <br />

- **updateKey**

  - 描述：当写入模式为 update 和 replace 时，需要指定此参数的值为唯一索引字段
  - 注意：
    - 如果此参数为空，并且写入模式为 update 和 replace 时，应用会自动获取数据库中的唯一索引；
    - 如果数据表没有唯一索引，但是写入模式配置为 update 和 replace，应用会以 insert 的方式写入数据；
  - 必选：否
  - 参数类型：List< String >
    - 示例："updateKey": ["id"]
  - 默认值：无
    <br />

- **semantic**
  - 描述：sink 端是否支持二阶段提交
  - 注意：
    - 如果此参数为空，默认不开启二阶段提交，即 sink 端不支持 exactly_once 语义；
    - 当前只支持 exactly-once 和 at-least-once
  - 必选：否
  - 参数类型：String
    - 示例："semantic": "exactly-once"
  - 默认值：at-least-once
    <br />

### 2、SQL

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

- **sink.buffer-flush.max-rows**

  - 描述：批量写数据条数，单位：条
  - 必选：否
  - 参数类型：String
  - 默认值：1024
    <br />

- **sink.buffer-flush.interval**

  - 描述：批量写时间间隔，单位：毫秒
  - 必选：否
  - 参数类型：String
  - 默认值：10000
    <br />

- **sink.all-replace**

  - 描述：是否全部替换数据库中的数据(如果数据库中原值不为 null,新值为 null,如果为 true 则会替换为 null)
  - 必选：否
  - 参数类型：String
  - 默认值：false
    <br />

- **sink.parallelism**

  - 描述：写入结果的并行度
  - 必选：否
  - 参数类型：String
  - 默认值：无
    <br />

- **sink.semantic**
  - 描述：sink 端是否支持二阶段提交
  - 注意：
    - 如果此参数为空，默认不开启二阶段提交，即 sink 端不支持 exactly_once 语义；
    - 当前只支持 exactly-once 和 at-least-once
  - 必选：否
  - 参数类型：String
    - 示例："semantic": "exactly-once"
  - 默认值：at-least-once
    <br />

## 五、数据类型

| OceanBase Data Type                                          | Flink Data Type | Description                                                  |
| ------------------------------------------------------------ | --------------- | ------------------------------------------------------------ |
| BOOLEAN                                                      | BOOLEAN         |                                                              |
| TINYINT                                                      | TINYINT         |                                                              |
| SMALLINT                                                     | SMALLINT        |                                                              |
| MEDIUMINT<br>INT<br>INTEGER                                  | INT             |                                                              |
| BIGINT                                                       | BIGINT          |                                                              |
| FLOAT                                                        | FLOAT           |                                                              |
| DOUBLE                                                       | DOUBLE          |                                                              |
| DECIMAL(p,s)<br>NUMERIC(p,s)                                 | DECIMAL(p,s)    | support maximum precision DECIMAL(38,18)                     |
| TIME                                                         | TIME            |                                                              |
| DATE                                                         | DATE            |                                                              |
| TIMESTAMP<br>DATETIME                                        | TIMESTAMP       |                                                              |
| BIT<br>BINARY<br>VARBINARY<br>TINYBLOB<br>BLOB<br>MEDIUMBLOB<br>LONGBLOB | BYTES           | SQL job type currently does not support bit type length of 1, because the database will be converted to Boolean, it is recommended to directly set the database field to boolean |
| CHAR<br/>VARCHAR<br/>TINYTEXT<br/>MEDIUMTEXT<br/>LONGTEXT<br/>ENUM<br/>SET | STRING          |                                                              |

## 六、脚本示例

见项目内`flinkx-examples`文件夹。
