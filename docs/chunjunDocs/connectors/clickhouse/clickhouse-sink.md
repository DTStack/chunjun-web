# Clickhouse Sink

## 1、Introduce
clickhouse sink

## 2、Version Support
ClickHouse 19.x and above

## 3、Connector name
| SYNC | clickhousesink, clickhousewriter |
| --- | --- |
| SQL | clickhouse-x |


## 4、Parameter description

### 1、sync

- **connection**
  - Description:param for Database connection,including jdbcUrl、schema、table and so on
  - Required:required
  - Type:List
  - Default:none
  ```json
  "connection": [{
     "jdbcUrl": ["jdbc:clickhouse://localhost:8123/default"],
  	 "schema": "public",
     "table": ["table"]
    }]
  ```
  <br />

- **jdbcUrl**
   - Description:jdbc url,See for details[clickhouse-jdbc](https://github.com/ClickHouse/clickhouse-jdbc)
   - Required:required
   - Type:string
   - Default:none
   <br />

- **schema**
  - Description:Database schema
  - Required:optional
  - Type:string
  - Default：none
  <br />

- **table**
  - Description: clickhouse table name, only support one table in a single work at the moment.
  - Required:required
  - Type:List
  - Default:none
  <br />

- **username**
  - Description: username
  - Required:required
  - Type:String
  - Default:none
  <br />


- **password**
  - Description: password
  - Required:required
  - Type:String
  - Default:none
  <br />

- **column**
  - Description:the fields to be written to the destination table,which is separated by English commas.for example: "column": ["id","name","age"]
  - Required:required
  - Type:List
  - Default:none
    <br />

- **fullcolumn**
  - Description:All fields in the destination table ,which is separated by English commas.for example: "column": ["id","name","age","hobby"],if not configured, it will be obtained in the system table
  - Required:optional
  - Type:List
  - Default:none
    <br />

- **preSql**
  - Description:the sql executed  before writing data into the destination table
  - Required:optional
  - Type:List
  - Default:none
    <br />

- **postSql**
  - Description:the sql executed  after writing data into the destination table
  - Required:optional
  - Type:List
  - Default:none
    <br />

- **writeMode**
  - Description:the mode of  writing data, insert into or merge into
  - Required:required
  - All options:insert
  - Type:String
  - Default:insert
    <br />

- **batchSize**
  - Description:The number of records submitted in batch at one time. This value can greatly reduce the number of network interactions between flinkx and the database and improve the overall throughput,Setting this value too large may cause the flinkx process to run oom
  - Required:optional
  - Type:int
  - Default:1024
    <br />

- **semantic**
  - Description:sink operator support phase two commit
  - attention:
    -If this parameter is blank, phase two commit is not enabled by default,which means sink operators do not support exactly-once semantics
    -Currently only supported exactly-once and at-least-once
  - Required:optional
  - Type:String
    - for example:"semantic": "exactly-once"
  - Default:at-least-once


### 2、sql

- **connector**
   - Description：clickhouse-x
   - Required：required
   - Type：String
   - Default：none
   <br />

- **url**
  - Description:jdbc:clickhouse://localhost:8123/default
  - Required:required
  - Type:String
  - Default:none
    <br />

- **table-name**
  - Description: table name
  - Required:required
  - Type:String
  - Default:none:
    <br />

- **username**
  - Description:username
  - Required:required
  - Type:String
  - Default:none
    <br />

- **password**
  - Description:password
  - Required:required
  - Type:String
  - Default:none
    <br />

- **sink.buffer-flush.max-rows**
  - Description:Number of data pieces written in batch
  - Required:optional
  - Type:String
  - Default:1024
    <br />

- **sink.buffer-flush.interval**
  - Description:Batch write interval,Unit: ms
  - Required:optional
  - Type:String
  - Default:10000
    <br />

- **sink.all-replace**
  - Description: whether to replace all data in the database
  - Required:optional
  - Type:String
  - Default:false
    <br />

- **sink.parallelism**
  - Description:the parallelism of sink operator
  - Required:optional
  - Type:String
  - Default:none
    <br />

- **sink.semantic**
  - Description:sink operator support phase two commit
  - attention:
    -If this parameter is blank, phase two commit is not enabled by default,which means sink operators do not support exactly-once semantics;
    -Currently only supported exactly-once and at-least-once
  - Required:optional
  - Type:String
    - for example:"semantic": "exactly-once"
  - Default:at-least-once
    <br />



## 5、Data type


| supported | data type                                                                                          |
|-----------|----------------------------------------------------------------------------------------------------|
| yes       | BOOLEAN、TINYINT、SMALLINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL、STRING、VARCHAR、TIMESTAMP、DATE、BINARY、NULL |
| no        | ARRAY、MAP、STRUCT、UNION                                                                             |

## 6、Demo
see details in `flinkx-examples` dir of project flinkx.
