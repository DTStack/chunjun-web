# SAP HANA Sink

## 1、Introduce
SAP HANA sink

## 2、Version Support
SAP HANA 2.0 and above


## 3、Connector name
| Sync | saphanasink、saphanawriter |
| --- | --- |
| SQL | saphana-x |


## 四、参数说明
### 1、Sync
- **connection**
  - Description:param for Database connection,including jdbcUrl、schema、table and so on
  - Required:required
  - Type:List
  - Default:none
    ```text
    "connection": [{
     "jdbcUrl": ["jdbc:sap://localhost:39015"],
     "table": ["table"],
     "schema":"public"
    }]
    ```
 <br />

- **jdbcUrl**
  - Description:jdbc url,See for details[saphana document](https://help.sap.com/viewer/4359a0ef221e4a1098bae432bdd982c1/4.3.1/en-US/45f1b6846e041014910aba7db0e91070.html?q=jdbc%20connect)
  - Required:required
  - Type:string
  - Default:none
    <br />

- **schema**
  - Description:Database schema
  - Required:optional
  - Type:string
  - Default:saphana user name
    <br />

- **table**
  - Description: saphana table name, only support one table in a single work at the moment.
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
  - All options:insert/update
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
  - Description:saphana-x
  - Required:required
  - Type:String
  - Default:none
    <br />

- **url**
  - Description:jdbc:sap://localhost:39015
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

## 5、Supported data type

|  supported  |                                                                       data type                                                                       |
|:-----------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|     yes     | DATE、TIME、SECONDDATE、TIMESTAMP、TINYINT、SMALLINT、INTEGER、BIGINT、DECIMAL、SMALLDECIMAL、REAL、DOUBLE、VARCHAR、NVARCHAR、ALPHANUM、SHORTTEXT、VARBINARY、BOOLEAN |
|     no      |           ARRAY、ST_CircularString、ST_GeometryCollection、ST_LineString、ST_MultiLineString、ST_MultiPoint、ST_MultiPolygon、ST_Point、ST_Polygon等           |
| Supported only in Sync |                                                                CLOB、NCLOB、TEXT、BINTEXT                                                                |




## 6、Demo
see details in `flinkx-examples` dir of project flinkx.
