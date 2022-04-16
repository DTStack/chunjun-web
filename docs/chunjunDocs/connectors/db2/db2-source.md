# DB2 Source

## 1. Introduction
Offline reading from DB2 is supported.Support for DB2 real-time interval polling reads

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
    ```text
    "connection": [{
     "jdbcUrl": ["jdbc:db2://hostname:port/test"],
     "table": ["table"],
     "schema":"public"
    }]
    ```
 <br />
    
- **jdbcUrl**
  - Description：JDBC connection string for a relational database
  - Required:required
  - Type:List
  - Default:none
<br />

- **schema**
  - Description:Database schema
  - Required:optional
  - Type:string
  - Default:none
<br />

- **table**
  - Description: table name, only support one table in a single work at the moment
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

- **fetchSize**
  - Description:the num of records fetching from database at one time,the default value is 1024.When fetchsize is set too small, frequent data reading will affect query speed and database pressure. When fetchsize is set too large, it may cause oom when the amount of data is large. Setting this parameter can control fetchsize pieces of data to be read each time.
    Attention:The value of this parameter cannot be set too large, otherwise it will read timeout and cause the task to fail.
  - Required:optional
  - Type:int
  - Default:1024
<br />

- **where**
  - Description:query condition,readerThe plugin splices SQL according to the specified column, table and where conditions,In the actual business scenario, the data of the current day is often selected for synchronization, and the where condition can be specified as GMT_ create > time.
  - Attention:The where condition cannot be specified as limit . Limit is not a legal where clause of SQL.
  - Required:optional
  - Type:String
  - Default:none
<br />

- **splitPk**
  - Description:When the channel in the speed configuration is greater than 1, this parameter is specified. The reader plug-in splices SQL according to the number of concurrencies and the fields specified by this parameter, so that each concurrency can read different data and improve the reading rate.
  - Attention:
    - It is recommended that splitpk use the table primary key, because the table primary key is usually uniform, so the segmented fragments are not prone to data hot spots.
    - At present, splitpk only supports integer data segmentation and does not support other types such as floating point, string and date. If the user specifies other unsupported types, flinkx will report an error.
    - If the channel is greater than 1 but this parameter is not configured, the task will be set as failed
  - Required:optional
  - Type:String
  - Default:none
<br />

- **queryTimeOut**
  - Description:Query timeout, unit seconds
  - Attention:When there is a large amount of data, or query from the view, or custom SQL query, you can specify the timeout through this parameter.
  - Required:optional
  - Type:int
  - Default:1000
<br />

- **customSql**
  - Description:For user-defined query statements, if only specified fields cannot meet the requirements, you can specify the SQL of the query through this parameter, which can be any complex query statement.
  - Attention:
    - Only query statements can be used, otherwise the task will fail;
    - The fields returned by the query statement need to correspond to the fields in the column list;
    - When specifying this parameter, column must specify specific field information and cannot be replaced by * sign;
  - Required:optional
  - Type:String
  - Default:none 
<br />

- **column**
  - Description:Fields to read.
   - format: Support 3 formats 1.Read all fields, if there are a lot of fields, you can use the following wording:
  
        ```bash
        "column":["*"]
        ```
        2.Specify only the field name:
  
        ```
        "column":["id","name"]
        ```
        3.Specify specific information:
  
        ```json
        "column": [{
            "name": "col",
            "type": "datetime",
            "format": "yyyy-MM-dd hh:mm:ss",
            "value": "value"
        }]
        ```
     
  - Attribute description:
    - name:Field name
    - type:Field type,It can be different from the field type in the database. The program will make a type conversion
    - format:If the field is a time string, you can specify the format of time and convert the field type to date format
    - value:If the specified field does not exist in the database, the value will be returned as a constant column. If the specified field exists, when the value of the specified field is null, the value will be returned as default
  - Required:required
  - Default:none
<br />

- **polling**
  - Description:Whether to enable interval polling. After it is enabled, data will be periodically pulled from the database according to the pollinginterval polling interval. To enable interval polling, you also need to configure the parameters pollinginterval and increcolumn. You can select the configuration parameter startlocation. If the parameter startlocation is not configured, the maximum value of the increment field will be queried from the database as the starting position of polling when the task is started.
  - Required:optional
  - Type:Boolean
  - Default:false
<br />

- **pollingInterval**
  - Description:Polling interval: the interval between pulling data from the database. The default is 5000 milliseconds.
  - Required:optional
  - Type:long
  - Default:5000
<br />

- **increColumn**
  - Description:The incremental field can be the corresponding incremental field name or a pure number, indicating the sequential position of the incremental field in the column (starting from 0)
  - Required:optional
  - Type:String or int
  - Default:none 
<br />

- **startLocation**
  - Description:Start position of incremental query
  - Required:optional
  - Type:String
  - Default:none 
<br />

- **useMaxFunc**
  - Description:Used to mark whether to save one or more pieces of data at endlocation. True: do not save, false (default): save. In some cases, the last few pieces of data may be repeatedly recorded. You can configure this parameter to true
  - Required:optional
  - Type:Boolean
  - Default:false
<br />

- **requestAccumulatorInterval**
  - Description:The interval between sending query accumulator requests
  - Required:optional
  - Type:int
  - Default:2 
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
  - Description：table-name
  - Required：required
  - Type：String
  - Default：none
<br />

- **username**
  - Description：username
  - Required：required
  - Type：String
  - Default：none
<br />

- **password**
  - Description：password
  - Required：required
  - Type：String
  - Default：none
<br />

- **scan.polling-interval**
  - Description：Interval training time.Optional(Leave blank as patch task)，default value is null.
  - Required：optional
  - Type：String
  - Default：none
<br />

- **scan.parallelism**
  - Description：Parallelism
  - Required：optional
  - Type：String
  - Default：none
<br />

- **scan.fetch-size**
  - Description：Each fetch size from the database.Unit: Piece
  - Required：optional
  - Type：String
  - Default：1024
    <br />

- **scan.query-timeout**
  - Description：Database connection timeout time, unit: second.
  - Required：optional
  - Type：String
  - Default：1
    <br />

- **scan.partition.column**
  - Description：The segmentation field used when multiple parallelism is enabled to read data
  - Required：optional
  - Type：String
  - Default：none
    <br />

- **scan.partition.strategy**
  - Description：Data fragmentation strategy
  - Required：optional
  - Type：String
  - Default：range
    <br />

- **scan.increment.column**
  - Description：Increment field name
  - Required：optional
  - Type：String
  - Default：none
    <br />

- **scan.increment.column-type**
  - Description：Incremental field type
  - Required：optional
  - Type：String
  - Default：none
    <br />

- **scan.start-location**
  - Description：The start position of the increment field, if not specified, all will be synchronized first, and then in the increment
  - Required：optional
  - Type：String
  - Default：none
    <br />

- **scan.restore.columnname**
  - Description：When check-point is turned on, the task continues with the field name of save-point/check-point. If you continue to run, it will overwrite the start position of scan.start-location, starting from the point where you continue to run.
  - Required：optional
  - Type：String
  - Default：none
    <br />

- **scan.restore.columntype**
  - Description：When check-point is turned on, the task continues from save-point/check-point field type
  - Required：optional
  - Type：String
  - Default：none
<br />

## 5. Data Type
| Whether or not Supported | Type Name |
|--------------------------| ---|
| Support                  | BOOLEAN、TINYINT、SMALLINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL、STRING、VARCHAR、CHAR、TIMESTAMP、DATE、BINARY |
| Not Support              | ARRAY、MAP、STRUCT、UNION |


## 6. Profile Demo
  see`flinkx-examples`directory.
