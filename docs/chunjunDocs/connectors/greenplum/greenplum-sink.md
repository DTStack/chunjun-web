# Greenplum Sink

## 1. Introduce

Greenplum Sink

## 2. Version Support

Greenplum 5 and above

## 3. Connector Name

| Sync | greenplumsink、greenplumwriter |
| --- | --- |
| SQL | greenplum-x |

## 4. Parameter description

#### 4.1 Sync

- **connection**
  - Description:Database connection parameters, including JDBC URL, schema, table and other parameters connection
  - Required: Optional
  - Type: List
  - Default: (none)
  - Example:
  ```json
      "connection": [{
      "jdbcUrl": ["jdbc:pivotal:greenplum://localhost:5432;DatabaseName=postgres"],
      "table": ["table"],
      "schema":"public"
      }]
    ```


- **jdbcUrl**
  - Description: JDBC connection string for relational database.
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
  - Definition: greenplum-x
  - Required: Required
  - Type: String
  - Default: (none)


- **url**
  - Definition: jdbc:pivotal:greenplum://localhost:5432;DatabaseName=postgres
  - Required: Required
  - Type: String
  - Default: (none)

- **schema**
  - Description: database schema name
  - Required: Optional
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

## 5. Data Type
| Whether to support | Data Type                                                                                                                                                                                                                                                                           |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Supported          | SMALLINT、SMALLSERIAL、INT2、INT、INTEGER、SERIAL、INT4、BIGINT、BIGSERIAL、OID、INT8、REAL、FLOAT4、FLOAT、DOUBLE PRECISION、FLOAT8、DECIMAL、NUMERIC、CHARACTER VARYING、VARCHAR、CHARACTER、CHAR、TEXT、NAME、BPCHAR、BYTEA、TIMESTAMP、TIMESTAMP WITH TIME ZONE、DATE、TIME、TIME WITH TIME ZONE、BOOLEAN、BOOL |
| Unsupported        | INTERVAL etc.                                                                                                                                                                                                                                                                       |

## 6. Example

The details are in flinkx-examples dir.

