# KingBase Sink

## 1、Introduce
KingBase Sink supports writing data to the database specified by Kingbase.

## 2、Version Support
KingBase v8


## 3、Connector name
| Type | Name |
| --- | --- |
| Sync | gbasesink、gbasewriter |
| SQL | gbase-x |


## 4、Parameter description
### 1、Sync
- **connection**
  - Description:param for Database connection,including jdbcUrl、schema、table and so on
  - Required:required
  - Type:List
  - Default:none
    ```json
       "connection": [{
          "jdbcUrl":["jdbc:kingbase8://localhost:54321/MOWEN"],
          "table": ["table"],
          "schema":"public"
      }]
    ```
 <br />

- **jdbcUrl**
  - Description：jdbc connection string for relational database,jdbcUrl reference：[Kingbase](https://help.kingbase.com.cn/login#id0)
  - Required: required
  - Type: string
  - Default: none
      <br />

- **schema**
  - Description:Database schema
  - Required:optional
  - Type:string
  - Default:none
      <br />

- **table**
  - Description：The table name of the target table. Currently only single table is supported, and multiple tables will be supported in the future
  - Required:required
  - Type:List
  - Default:none
    <br />

- **username**
  - Description:user name
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

- **column**
    - Description：The fields that the destination table needs to write data into, and the fields are separated by commas.for example: "column": ["id","name","age"]
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
    - Description：Controls writing data to the target table using insert into or replace into or ON DUPLICATE KEY UPDATE 
  - Required:required
  - All options:insert/replace/update
  - Type:String
  - Default:insert
      <br />

- **batchSize**
  - Description:The number of records submitted in batch at one time. This value can greatly reduce the number of network interactions between flinkx and the database and improve the overall throughput,Setting this value too large may cause the flinkx process to run oom
  - Required:optional
  - Type:int
  - Default:1024
      <br />

- **updateKey**
  - Description:When the write mode is update, you need to specify the value of this parameter as the unique index field
  - attention:
    - If this parameter is empty and the write mode is update, the application will automatically obtain the unique index in the database;
    - If the data table does not have a unique index, but the required write mode is configured as update and, the application will write data in the way of insert;
  - Required:optional
  - Type:Map<String,List>
    - for example:"updateKey": {"key": ["id"]}
  - Default:none
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
<br />

### 2、SQL
- **connector**
  - Description:kingbase-x
  - Required:required
  - Type:String
  - Default:none
      <br />

- **url**
    - Description：jdbc:kingbase8://localhost:54321/MOWEN
  - Required:required
  - Type:String
  - Default:none
      <br />

- **schema**
  - Description:Database schema
  - Required:optional
  - Type:string
  - Default:none
    <br />

- **table-name**
  - Description: table name
  - Required:required
  - Type:String
  - Default:none
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
  - Description:Number of data pieces written in batch,Unit:piece.
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
    - Description：whether to replace all data in the database(If the original value in the database is not null, the new value is null, if it is true, it will be replaced with null)
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
      


## 五、数据类型
| Whether to support | Data Type                                                                                                                                                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Supported          | SMALLINT、SMALLSERIAL、INT2、INT、INTEGER、SERIAL、INT4、BIGINT、BIGSERIAL、OID、INT8、REAL、FLOAT4、FLOAT、DOUBLE PRECISION、FLOAT8、DECIMAL、NUMERIC、 CHARACTER VARYING、VARCHAR、CHARACTER、CHAR、TEXT、NAME、BPCHAR、BYTEA、TIMESTAMP、TIMESTAMPTZ、DATE、TIME、TIMETZ、 BOOLEAN、BOOL |
| Unsupported        | ARRAY etc.                                                                                                                                                                                                                                                  |

## 6. Example
The details are in flinkx-examples dir.
