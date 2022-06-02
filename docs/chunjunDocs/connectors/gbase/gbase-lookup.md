# GBase Lookup

## 1. Introduce

GBase Lookup table，full and asynchronous approaches are supported. Full cache: Load all dimensional table data into
memory, and it is recommended that the amount of data is not used. Asynchronous caching: Query data using asynchronous
means, and cache the queried data to memory using lru, which is recommended for large amounts of data.

## 2. Version Support

GBase8a(8.6.2.43)

## 3. Connector Name

| SQL | gbase-x |
| --- |---------|

## 4. Parameter description

- **connector**
  - Description：gbase-x
  - Required：Required
  - Type: String
  - Default：(none)


- **url**
  - Description：jdbc:gbase://localhost:9042/test
  - Required：Required
  - Type：String
  - Default：(none)

- **schema**
  - Description: database schema name
  - Required: Optional
  - Type: String
  - Default: (none)


- **table-name**
  - Description：The name of table
  - Required：Required
  - Type: String
  - Default：(none)


- **username**
  - Description：user of login
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
  - Required：否
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
| Whether to support | Data Type                                                                                                                                                                                                                                                                                                                                                |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Supported          | BIT、TINYINT、SMALLINT、MEDIUMINT、INT、INTEGER、INT24、SERIAL、BIGINT、INT8、BIGSERIAL、SERIAL8、REAL、FLOAT、SMALLFLOAT、DECIMAL、NUMERIC、DOUBLE、DEC、MONEY、DOUBLE、PRECISION 、STRING、VARCHAR、CHAR、CHARACTER、VARYING、NCHAR、TIMESTAMP、DATETIME、DATE、TIME、YEAR、TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB、TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT、BINARY、VARBINARY、JSON、ENUM、SET、GEOMETRY |
| Unsupported        | ARRAY、MAP、STRUCT、UNION etc.                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                |

## 6. Example

The details are in flinkx-examples dir.


