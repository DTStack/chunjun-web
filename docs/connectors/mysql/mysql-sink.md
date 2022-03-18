# MySQL Sink

## 1. Introduce

MySQL Sink

## 2. Version Support

MySQL 5.x

## 3. Connector Name

| Sync | mysqlsink, mysqlwriter |
| --- | --- |
| SQL | mysql-x |

## 4. Parameter description

#### 4.1 Sync

- **connection**
    - Description:Database connection parameters, including JDBC URL, schema, table and other parameters
      connection，search [mysql Documents](https://docs.mysql.com/manual/reference/connection-string/) for detail
      information.
    - Required: Optional
    - Type: List
    - Default: (none)
    - Example:
  ```json
      "connection": [{
      "jdbcUrl": ["jdbc:mysql://0.0.0.1:3306/database?useSSL=false"],
      "table": ["table"],
      "schema":"public"
      }]
    ```


- **jdbcUrl**
    - Description: JDBC connection string for relational database. Search document for detail information of
      jdbcUrl: [MySQL Document](http://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html)
    - Required: Optional
    - Type: String
    - Default: (none)


- **schema**
    - Description: database schema name
    - Required: Optional
    - Type: String
    - Default: (none)


- **table**
    - Description: the table name of the destination table. Currently, only supports the configuration of a single
      table, and will support multiple tables in the future.
    - Required: Optional
    - Type: List
    - Default: (none)


- **username**
    - Description: the username of the data source
    - Required: Optional
    - Type: String
    - Default: (none)


- **password**
    - Description: The password for the specified username of the data source
    - Required: Optional
    - Type: String
    - Default: (none)


- **column**
    - Description: The fields in the destination table that need to write data are separated by commas.
    - Required: Optional
    - Type: String
    - Default: (none)
    - Example:
        ```json 
        "column": ["id","name","age"]
        ```

- **fullColumn**
    - Definition: All fields in the destination table are separated by commas，if not configured, it will be obtained in
      the system table
    - Required: Optional
    - Type: List
    - Default: (none)
    - Example:
        ```json 
        "column": ["id","name","age"]
        ```


- **preSql**
    - Definition: Before writing data to the destination table, a set of standard statements here will be executed
      first.
    - Required: Optional
    - Type: List
    - Default: (none)


- **postSql**
    - Definition: After writing data to the destination table, a set of standard statements here will be executed.
    - Required: Optional
    - Type: List
    - Default: (none)


- **writeMode**
    - Definition: Use insert into or replace into or ON DUPLICATE KEY UPDATE statement to control writing data to the
      target table.
    - Required: Required
    - options: insert/replace/update
    - Type: String
    - Default: insert


- **batchSize**
    - Definition: The size of the number of records submitted in batches at one time. This value can greatly reduce the
      number of network interactions between FlinkX and the database and improve the overall throughput. However,
      setting this value too large may cause the OOM situation of FlinkX running process.
    - Required: Optional
    - Type: int
    - Default: 1024


- **updateKey**
    - Definition: When the write mode is update and replace, you need to specify the value of this parameter as a unique
      index field
    - Attention:
        - If this parameter is empty and the write mode is update and replace, the application will automatically obtain
          the unique index in the database;
        - If the data table does not have a unique index, but the write mode is configured as update and replace, the
          application will write the data in insert;
    - Required: Optional
    - Type: Map<String, List>
        - eg."updateKey": {"key": ["id"]}
    - Default: (none)


- **semantic**
    - Definition: Whether to enable two-phase commit on the sink side
    - Attention:
        - If this parameter is empty, two-phase commit is not enabled by Default, that is, the sink side does not
          support exactly_once semantics;
        - Currently, only supports exactly-once and at-least-once
    - Required: Optional
    - Type: String
    - Default: at-least-once
    - Example:
      ```json 
      "semantic": "exactly-once"
      ```

### 2、SQL

- **connector**
    - Definition: mysql-x
    - Required: Required
    - Type: String
    - Default: (none)


- **url**
    - Definition: jdbc:mysql://localhost:3306/test
    - Required: Required
    - Type: String
    - Default: (none)


- **table-name**
    - Definition: the name of table
    - Required: Required
    - Type: String
    - Default: (none):


- **username**
    - Definition: username
    - Required: Required
    - Type: String
    - Default: (none)


- **password**
    - Definition: password
    - Required: Required
    - Type: String
    - Default: (none)


- **sink.buffer-flush.max-rows**
    - Definition: Number of batch write data，Unit: Piece
    - Required: Optional
    - Type: String
    - Default: 1024


- **sink.buffer-flush.interval**
    - Definition: Batch write interval，Unit: milliseconds
    - Required: Optional
    - Type: String
    - Default: 10000


- **sink.all-replace**
    - Definition: Whether to replace all the data in the database (if the original value in the database is not null,
      the new value is null, if it is Required, it will be replaced with null)
    - Required: Optional
    - Type: String
    - Default: Optional


- **sink.parallelism**
    - Definition: Parallelism of writing results
    - Required: Optional
    - Type: String
    - Default: (none)


- **sink.semantic**
    - Definition: Whether to enable two-phase commit on the sink side
    - Attention:
        - If this parameter is empty, two-phase commit is not enabled by Default, that is, the sink side does not
          support exactly_once semantics；
        - Currently, only supports exactly-once and at-least-once
    - Required: Optional
    - Type: String
        - eg."semantic": "exactly-once"
    - Default: at-least-once

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
| unsupported | UNION |

## 6. Example

The details are in flinkx-examples dir.

