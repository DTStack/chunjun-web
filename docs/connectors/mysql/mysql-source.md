# MySQL Source

## 1. Introduce

MySQL Source

## 2. Version Support

MySQL 5.x

## 3. Connector Name

| Sync | mysqlsource、mysqlreader |
| --- | --- |
| SQL | mysql-x |

## 4. Parameter description

#### 4.1 Sync

- **connection**
    - Definition: Database connection parameters, including jdbcUrl, schema, table, and so on
    - Required: true
    - Type: List
    - Default: null
      ```text
      "connection": [{
       "jdbcUrl": ["jdbc:mysql://0.0.0.1:3306/database?useSSL=false"],
       "table": ["table"],
       "schema":"public"
      }]
      ```


- **jdbcUrl**
    - Definition: The jdbc connection string for the relational database,search document for detail information of
      jdbcUrl: [MySQL doc](http://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html)
    - Required: true
    - Type: string
    - Default: null


- **schema**
    - Definition: schema name of database
    - Required: false
    - Type: string
    - Default: null


- **table**
    - Definition: The name of the table of the destination table.Currently, only a single table is supported, and
      multiple tables are supported later.
    - Required: true
    - Type: List
    - Default: null


- **username**
    - Definition: username of database
    - Required: true
    - Type: String
    - Default: null


- **password**
    - Definition: password of database
    - Required: true
    - Type: String
    - Default: null


- **fetchSize**
    - Definition: Read the data size from the database at one time. MySQL will read all the results into the memory once
      by Default. When the amount of data is large, it may cause OOM. Setting this parameter can control the fetchSize
      data read each time, instead of the Default Read all the data at once; enable fetchSize to meet the following
      requirements: the database version must be higher than 5.0.2, and the connection parameter useCursorFetch=true.
      Attention: The value of this parameter cannot be set too large, otherwise the reading will time out and the task
      will fail.
    - Required: false
    - Type: int
    - Default: 1024


- **where**
    - Definition: Filter conditions, the reader plug-in splices SQL according to the specified column, table, and where
      conditions, and performs data extraction based on this SQL. In actual business scenarios, the data of the day is
      often selected for synchronization, and the where condition can be specified as gmt_create> time.
    - Attention: The where condition cannot be specified as limit 10. Limit is not a legal where clause of SQL.
    - Required: false
    - Type: String
    - Default: null


- **splitPk**
    - Definition: Specifying this parameter when channell in the speed configuration is greater than 1, the Reader
      plug-in stitches the sql based on the number of concurrings and the fields specified by this parameter, allowing
      each concurrent to read different data and increasing the read rate.
    - Attention:
        - SplitPk is recommended to use the table primary key, because the table primary key is usually more uniform, so
          the sliced out is not easy to appear data hot spots；
        - Currently splitPk only supports integer data segmentation, and does not support other types such as floating
          point, string, and date. If the user specifies other non-supported types, FlinkX will report an error；
        - If the channel is greater than 1 but this parameter is not configured, the task will be set as failed.
    - Required: false
    - Type: String
    - Default: null


- **queryTimeOut**
    - Definition: Query timeout，Unit: second。
    - Attention: When the amount of data is large, or when querying from a view, or a custom sql query, you can specify
      the timeout period through this parameter.
    - Required: false
    - Type: int
    - Default: 1000


- **customSql**
    - Definition: For custom query statements, if only the specified fields cannot meet the requirements, you can
      specify the query sql through this parameter, which can be arbitrarily complex query statements.
    - Attention:
        - It can only be a query statement, otherwise it will cause the task to fail;
        - The fields returned by the query statement need to correspond to the fields in the column list;
        - When this parameter is specified, the table specified in the connection is invalid;
        - When specifying this parameter, column must specify specific field information, and cannot be replaced by *;
    - Required: false
    - Type: String
    - Default: null


- **column**
    - Definition: Need to read the field.
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
    - Property description:
        - name: the name of the field
        - type: The field type can be different from the field type in the database, the program will do a type
          conversion
        - format: If the field is a time string, you can specify the time format and convert the field type to date
          format to return
        - value: If the specified field does not exist in the database, the value of value will be returned as a
          constant column. If the specified field exists, when the value of the specified field is null, the value will
          be returned as Default.
    - Required: true
    - Default: null


- **polling**
    - Definition: Whether to enable interval polling, after enabling it, data will be periodically pulled from the
      database according to the pollingInterval polling interval. To enable interval polling, you need to configure the
      parameters pollingInterval and increColumn, and you can choose the configuration parameter startLocation. If the
      parameter startLocation is not configured, the maximum value of the incremental field will be queried from the
      database as the starting position of the poll when the task starts.
    - Required: false
    - Type: Boolean
    - Default: false


- **pollingInterval**
    - Definition: Polling interval, the interval of pulling data from the database, the Default is 5000 milliseconds.
    - Required: false
    - Type: long
    - Default: 5000


- **increColumn**
    - Definition: Incremental field, which can be the corresponding incremental field name, or a pure number, indicating
      the sequential position of the incremental field in the column (starting from 0)
    - Required: false
    - Type: String or int
    - Default: null


- **startLocation**
    - Definition: Incremental query start position
    - Required: false
    - Type: String
    - Default: null


- **useMaxFunc**
    - Definition: It is used to mark whether to save one or more pieces of data of the endLocation location, true: do
      not save, false (Default): save, in some cases the last few data may be recorded repeatedly, this parameter can be
      configured as true.
    - Required: false
    - Type: Boolean
    - Default: false


- **requestAccumulatorInterval**
    - Definition: The interval between sending the query accumulator request.
    - Required: false
    - Type: int
    - Default: 2

#### 4.2 SQL

- **connector**
    - Definition: mysql-x
    - Required: true
    - Type: String
    - Default: null


- **url**
    - Definition: jdbc:mysql://localhost:3306/test
    - Required: true
    - Type: String
    - Default: null


- **table-name**
    - Definition: table-name
    - Required: true
    - Type: String
    - Default: null:


- **username**
    - Definition: username
    - Required: true
    - Type: String
    - Default: null


- **password**
    - Definition: password
    - Required: true
    - Type: String
    - Default: null


- **scan.polling-interval**
    - Definition: Interval training time.Optional(Leave blank as patch task)，Default value is null.
    - Required: false
    - Type: String
    - Default: null


- **scan.parallelism**
    - Definition: Parallelism
    - Required: false
    - Type: String
    - Default: null


- **scan.fetch-size**
    - Definition: Each fetch size from the database.Unit: Piece
    - Required: false
    - Type: String
    - Default: 1024


- **scan.query-timeout**
    - Definition: Database connection timeout time, unit: second.
    - Required: false
    - Type: String
    - Default: 1


- **scan.partition.column**
    - Definition: The segmentation field used when multiple parallelism is enabled to read data
    - Required: false
    - Type: String
    - Default: null


- **scan.partition.strategy**
    - Definition: Data fragmentation strategy
    - Required: false
    - Type: String
    - Default: range


- **scan.increment.column**
    - Definition: Increment field name
    - Required: false
    - Type: String
    - Default: null


- **scan.increment.column-type**
    - Definition: Incremental field type
    - Required: false
    - Type: String
    - Default: null


- **scan.start-location**
    - Definition: The start position of the increment field, if not specified, all will be synchronized first, and then
      in the increment
    - Required: false
    - Type: String
    - Default: null


- **scan.restore.columnname**
    - Definition: When check-point is turned on, the task continues with the field name of save-point/check-point. If
      you continue to run, it will overwrite the start position of scan.start-location, starting from the point where
      you continue to run.
    - Required: false
    - Type: String
    - Default: null


- **scan.restore.columntype**
    - Definition: When check-point is turned on, the task continues from save-point/check-point field type
    - Required: false
    - Type: String
    - Default: null

## 5. Type

| support or unsupported | type |
| --- | --- |
| support | BOOLEAN |
| support | TINYINT |
| support | SMALLINT |
| support | INT |
| support | BIGINT |
| support | FLOAT |
| support | DOUBLE |
| support | DECIMAL |
| support | STRING |
| support | VARCHAR |
| support | CHAR |
| support | TIMESTAMP |
| support | DATE |
| support | BINARY |
| unsupported | ARRAY |
| unsupported | MAP |
| unsupported | STRUCT |
| unsupported | UNION

## 6. Example

The details are in flinkx-examples dir.
