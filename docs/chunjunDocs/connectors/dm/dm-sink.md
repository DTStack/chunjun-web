# DM Sink

## 1、Introduce

DM sink

## 2、Version Support

DM7、DM8


## 3、Connector name

| Sync | dmsink、dmwriter |
| ---- |-----------------|
| SQL  |                 |


## 4、Parameter description

### 1、Sync

- **connection**
    - Description:param for Database connection,including jdbcUrl、schema、table and so on
    - Required:required
    - Type:List
    - Default:none
      ```text
      "connection": [{
       "jdbcUrl": ["jdbc:dm://localhost:5236"],
       "table": ["table"],
       "schema":"public"
      }]
      ```
 <br />

- **jdbcUrl**
  - Description:jdbc url,See for details,[dm document](http://www.dameng.com/down.aspx?TypeId=12&FId=t14:12:14)
  - Required:required
  - Type:string
  - Default:none
  <br />

- **schema**
    - Description:Database schema
    - Required:optional
    - Type:string
    - Default:dm user name
      <br />

- **table**
    - Description: dm table name, only support one table in a single work at the moment.
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


## 5、Supported data type


| supported | data type                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| yes       | CHAR、CHARACTER、VARCHAR、VARCHAR2、CLOB、TEXT、LONG、LONGVARCHAR、ENUM、SET、JSON、DECIMAL、NUMBERIC、DEC、NUMER、INT、INTEGER、TINYINT、BYTE、BYTES、SMALLINT、BIGINT、BINARY、VARBINARY、BLOB、TINYBLOB、MEDIUMBLOB、LONGBLOB、GEOMETER、IMAGE、REAL、FLOAT、DOUBLE、DOUBLE PRECISION、BIT、YEAR、DATE、TIME、TIMESTAMP、DATETIME                                                                                                                                    |
| no        | PLS_INTEGER、LONGVARBINARY、BFILE、TIME WITH TIME ZONE、TIMESTAMP WITH TIME ZONE、TIME WITH LOCAL TIME ZONE、INTERVAL YEAR、INTERVAL YEAR、INTERVAL MONTH、INTERVAL DAY、INTERVAL HOUR、INTERVAL MINUTE、INTERVAL SECONDE、INTERVAL YEAR TO MONTH、INTERVAL DAY TO HOUR、INTERVAL YEAR TO MINUTE、INTERVAL DAY TO SECONDE、INTERVAL HOUR TO MINUTE、INTERVAL HOUR TO SECOND、INTERVAL MINUTE TO SECONDE、BOOL、BOOLEAN、%TYPE%、%ROWTYPE、记录类型、数组类型、集合类型 |


## 6、Demo
see details in `flinkx-examples` dir of project flinkx.

