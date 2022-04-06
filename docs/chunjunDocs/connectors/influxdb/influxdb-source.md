# InfluxDB Source

## 1、Introduce

Data can be read offline from the influxDB,Breakpoint continuation is not supported and can only be sorted by time

## 2、Version Support

influxDB 1.x

## 3、Connector name

| Sync | influxdbsource、influxdbreader |
| ---- |-------------------------------|
| SQL  |                         |


## 4、Parameter description

### 1、Sync

- **connection**
    - Description:param for Database connection,including jdbcUrl、database、measurement and so on
    - Required:required
    - Type:List
    - Default:none
     ```text
      "connection": [{
       "url": ["http://127.0.0.1:8086"],
       "measurement": ["measurement"],
       "database":"public"
      }]
      ```
 <br />

- **url**

    - Description：Url of the influxDB connection
    - Required：required
    - Type：string
    - Default：none
      <br />

- **database**
    - Description:Database name
    - Required:optional
    - Type:string
    - Default:InfluxDB user name
      <br />

- **measurement**
    - Description: InfluxDB table name, only support one table in a single work at the moment.
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

- **format**
    - Description：The response format
    - Required：optional
    - Type：string
    - Default：MSGPACK
    - Optional value：MSGPACK/JSON
        - The difference between MSGPACK and JSON：<br/>
          ⅰ. JSON can't distinguish floating point from integer<br/>
          ⅱ. JSON does not support integers greater than 2^53 <br/>
          ⅲ. JSON has limited performance characteristics<br/>
          ⅳ. When format is JSON, the time field loses precision when double is strongly cast to long in deserialization, as described in https://github.com/influxdata/influxdb-java/issues/517
          <br />

- **fetchSize**
    - Description:the num of records fetching from influxDB at one time,the default value is 1000.When fetchSize is set too small, frequent data reading will affect query speed and database pressure. When fetchSize is set too large, it may cause oom when the amount of data is large. Setting this parameter can control fetchSize pieces of data to be read each time.
      Attention:The value of this parameter cannot be set too large, otherwise it will read timeout and cause the task to fail.
    - Required:optional
    - Type:int
    - Default:1000
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

- **epoch**
    - Description：The time precision returned
    - Attention：When format is JSON, the time field loses precision when double is strongly cast to long in deserialization,  as described in https://github.com/influxdata/influxdb-java/issues/517
    - Optional value：h、m、s、ms、u、n
    - Required：optional
    - Type：String
    - Default：n
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
        - When specifying this parameter, the table specified in connection is invalid.
        - Disallow fields other than the time field as the Order BY field
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



## 5、Supported data type

| supported |                                                                                                        data type                                                                                                         |
|:---------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|    yes    | SMALLINT、BINARY_DOUBLE、CHAR、VARCHAR、VARCHAR2、NCHAR、NVARCHAR2、INT、INTEGER、NUMBER、DECIMAL、FLOAT、DATE、RAW、LONG RAW、BINARY_FLOAT、TIMESTAMP、TIMESTAMP WITH LOCAL TIME ZONE、TIMESTAMP WITH TIME ZON、INTERVAL YEAR、INTERVAL DAY |


## 6、Demo
see details in `flinkx-examples` dir of project flinkx.