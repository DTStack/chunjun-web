# DM Source

## 1、Introduce
read data from dm with batch model

## 2、Version Support

DM7、DM8

## 3、Connector name

| Sync | dmsource、dmreader |
| ---- |-------------------|
| SQL  |             |

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
    - Description:jdbc url,See for details[dm document](http://www.dameng.com/down.aspx?TypeId=12&FId=t14:12:14)
    - Required:required
    - Type:string
    - Default:user name
      <br />

- **schema**
    - Description:Database schema
    - Required:optional
    - Type:string
    - Default:none
      <br />

- **table**
    - Description:dm table name, only support one table in a single work at the moment
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
    - Description:the num of records fetching from dm at one time,the default value is 1024.When fetchsize is set too small, frequent data reading will affect query speed and database pressure. When fetchsize is set too large, it may cause oom when the amount of data is large. Setting this parameter can control fetchsize pieces of data to be read each time.
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
    - Type:String或int
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

## 5、Supported data type

| supported | data type                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| yes       | CHAR、CHARACTER、VARCHAR、VARCHAR2、CLOB、TEXT、LONG、LONGVARCHAR、ENUM、SET、JSON、DECIMAL、NUMBERIC、DEC、NUMER、INT、INTEGER、TINYINT、BYTE、BYTES、SMALLINT、BIGINT、BINARY、VARBINARY、BLOB、TINYBLOB、MEDIUMBLOB、LONGBLOB、GEOMETER、IMAGE、REAL、FLOAT、DOUBLE、DOUBLE PRECISION、BIT、YEAR、DATE、TIME、TIMESTAMP、DATETIME                                                                                                                                    |
| no        | PLS_INTEGER、LONGVARBINARY、BFILE、TIME WITH TIME ZONE、TIMESTAMP WITH TIME ZONE、TIME WITH LOCAL TIME ZONE、INTERVAL YEAR、INTERVAL YEAR、INTERVAL MONTH、INTERVAL DAY、INTERVAL HOUR、INTERVAL MINUTE、INTERVAL SECONDE、INTERVAL YEAR TO MONTH、INTERVAL DAY TO HOUR、INTERVAL YEAR TO MINUTE、INTERVAL DAY TO SECONDE、INTERVAL HOUR TO MINUTE、INTERVAL HOUR TO SECOND、INTERVAL MINUTE TO SECONDE、BOOL、BOOLEAN、%TYPE%、%ROWTYPE、记录类型、数组类型、集合类型 |

## 6、Demo
see details in `flinkx-examples` dir of project flinkx.
