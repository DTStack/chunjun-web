# MySQL Lookup

## 1. Introduce

Mysql Lookup table，full and asynchronous approaches are supported. Full cache: Load all dimensional table data into
memory, and it is recommended that the amount of data is not used. Asynchronous caching: Query data using asynchronous
means, and cache the queried data to memory using lru, which is recommended for large amounts of data.

## 2. Version Support

MySQL 5.x

## 3. Connector Name

| SQL | mysql-x |
| --- | --- |

## 4. Parameter description

- **connector**
    - Description：mysql-x
    - Required：Required
    - Type: String
    - Default：(none)


- **url**
    - Description：URL of MySQL connection，search [MySQL Documents](https://dev.mysql.com/doc/) for detail information.
    - Required：Required
    - Type：String
    - Default：(none)


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


