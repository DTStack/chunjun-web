# OceanBase Lookup

## 1. Introduce

OceanBase Lookup table，full and asynchronous approaches are supported. Full cache: Load all dimensional table data into
memory, and it is recommended that the amount of data is not used. Asynchronous caching: Query data using asynchronous
means, and cache the queried data to memory using lru, which is recommended for large amounts of data.

## 2. Version Support

OceanBase3.1.x

## 3. Connector Name

| SQL | oceanbase-x |
| --- |-------------|

## 4. Parameter description

- **connector**
  - Description：oceanbase-x
  - Required：Required
  - Type: String
  - Default：(none)


- **url**
  - Description：jdbc:oceanbase://hostname:port/database
  - Required：Required
  - Type：String
  - Default：(none)


- **table-name**
  - Description：The name of table
  - Required：Required
  - Type: String
  - Default：(none)


- **username**
  - Description：The username of the data source. To specify a tenant connection, add the tenant name after the username, such as "root@test". Currently only supports OceanBase tenants
  - Required：Optional
  - Type：String
  - Default：(none)


- **password**
  - Description：password of login
  - Required：Optional
  - Type：String
  - Default：(none)


- **lookup.cache-type**
  - Description：lookup table cache type(NONE、LRU、ALL)
  - Required：Optional
  - Type: String
  - Default：LRU

- **vertx.worker-pool-size**
  - Description：max thread poll size of LRU mode
  - Required：Optional
  - Type：Integer
  - Default：5
    <br />


- **lookup.cache-period**
  - Description：time of interval ALL lookup table load data, Unit: ms.
  - Required：Optional
  - Type: String
  - Default：3600000


- **lookup.cache.max-rows**
  - Description：size of data in lru lookup table cache.
  - Required：Optional
  - Type: String
  - Default：10000

- **lookup.max-retries**
  - Description：Maximum number of retries when database lookup fails
  - Required：false
  - Type：Integer
  - Default：3
    <br />

- **lookup.cache.ttl**
  - Description：time of data that lru lookup table cache.
  - Required：Optional
  - Type: String
  - Default：60000


- **lookup.fetch-size**
  - Description：size of data that ALL lookup table load in every batch.
  - Required：Optional
  - Type: String
  - Default：1000


- **lookup.parallelism**
  - Description：parallelism of lookup table.
  - Required：Optional
  - Type: String
  - Default：(none)

## 5. Data Type
| OceanBase Data Type                                          | Flink Data Type | Description                                                  |
| ------------------------------------------------------------ | --------------- | ------------------------------------------------------------ |
| BOOLEAN                                                      | BOOLEAN         |                                                              |
| TINYINT                                                      | TINYINT         |                                                              |
| SMALLINT                                                     | SMALLINT        |                                                              |
| MEDIUMINT<br>INT<br>INTEGER                                  | INT             |                                                              |
| BIGINT                                                       | BIGINT          |                                                              |
| FLOAT                                                        | FLOAT           |                                                              |
| DOUBLE                                                       | DOUBLE          |                                                              |
| DECIMAL(p,s)<br>NUMERIC(p,s)                                 | DECIMAL(p,s)    | support maximum precision DECIMAL(38,18)                     |
| TIME                                                         | TIME            |                                                              |
| DATE                                                         | DATE            |                                                              |
| TIMESTAMP<br>DATETIME                                        | TIMESTAMP       |                                                              |
| BIT<br>BINARY<br>VARBINARY<br>TINYBLOB<br>BLOB<br>MEDIUMBLOB<br>LONGBLOB | BYTES           | SQL job type currently does not support bit type length of 1, because the database will be converted to Boolean, it is recommended to directly set the database field to boolean |
| CHAR<br/>VARCHAR<br/>TINYTEXT<br/>MEDIUMTEXT<br/>LONGTEXT<br/>ENUM<br/>SET | STRING          |                                                              |

## 6. Example

The details are in flinkx-examples dir.


