# DB2 Sink

## 1. Introduction
DB2 Sink

## 2. Support Version


## 3. Plugin Name
| Sync | db2source、db2reader |
| --- | --- |
| SQL | db2-x |


## 4. Parameter
### 1、Sync
- **connection**
  - Description:param for Database connection,including jdbcUrl、schema、table and so on
  - Required:required
  - Type:List
  - Default:none
    ```json
    "connection": [{
        "jdbcUrl": ["jdbc:db2://hostname:port/test"],
        "table": ["table"],
        "schema":"public"
    }]
    ```
 <br />
    
- **jdbcUrl**
  - Description：JDBC connection string for a relational database
  - Required：required
  - Type：String
  - Default：none
<br />

- **schema**
  - Description:Database schema
  - Required:optional
  - Type:string
  - Default: none
<br />

- **table**
  - Description: target table name, only support one table in a single work at the moment.
  - Required:required
  - Type:List
  - Default:none
<br />

- **username**
  - Description: user name
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
  - 描述：the mode of  writing data, insert into or replace into or ON DUPLICATE KEY UPDATE 
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
  - Description：connector type
  - Required：required
  - Type：String
  - value：db2-x
<br />

- **url**
  - Description：jdbc:db2://hostname:port/test
  - Required：required
  - Type：String
  - Default：none
<br />

- **schema**
  - Description:Database schema
  - Required:optional
  - Type:string
  - Default: none
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
  - Attention:
    -If this parameter is blank, phase two commit is not enabled by default,which means sink operators do not support exactly-once semantics;
    -Currently only supported exactly-once and at-least-once
  - Required:optional
  - Type:String
    - for example:"semantic": "exactly-once"
  - Default:at-least-once
<br />

## 5. Supported data type
| Whether or not Supported | Type Name |
| ---| ---|
| Supported | INT,BIGINT,SMALLINT,DOUBLE,DECFLOAT,DECIMAL,VARCHAR,CHAR,CLOB,DECIMAL,TIMESTAMP,DATETIME,DATE,TIME,BYTES|
| Not supported |  |


## 6. Demo
see details in`flinkx-examples` directory.
