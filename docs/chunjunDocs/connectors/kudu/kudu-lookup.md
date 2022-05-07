# Kudu Lookup

## 1、Introduce

Kudu dimension table, supports full and asynchronous methods
Full cache: Load all dimension table data into memory. It is recommended for scenarios where the amount of data is not large and the data does not change frequently.
Asynchronous caching: Query data in an asynchronous manner, and cache the queried data in memory using lru. It is recommended to use a large amount of data.

## 2、Version support

Kudu 1.14.0

## 3、Plugin name

| SQL | kudu-x |
| --- | --- |

## 4、Param description

- **masters**
    - Description：kudu server ip and ports.
    - Requited：requited
    - Type：string
    - Default：none
      

- **table-name**
    - Description：kudu table name.
    - Requited：requited
    - Type：string
    - Default：none
      

- **client.worker-count**
    - Description：number of kudu worker.
    - Requited：optional
    - Type：int
    - Default：2
      

- **client.default-operation-timeout-ms**
    - Description：kudu operation timeout.
    - Requited：optional
    - Type：int
    - Default：30 * 1000（30s）
      

- **client.default-admin-operation-timeout-ms**
    - Description：admin operation timeout
    - Requited：optional
    - Type：int
    - Default：30 * 1000（30s）
      

- **scan-token.query-timeout**
    - Description：query operation timeout.
    - Requited：optional
    - Type：int
    - Default：30 * 1000（30s）
      

- **lookup.cache-type**
    - Description：Dimension table cache type (NONE, LRU, ALL), default LRU
    - Requited：optional
    - Type：string
    - Default：LRU
      

- **lookup.cache-period**
    - Description：How often does the ALL dimension table load data, the default is 3600000 milliseconds (one hour)
    - Requited：optional
    - Type：string
    - Default：3600000
      

- **lookup.cache.max-rows**
    - Description：The number of cached data in lru dimension table, the default is 10000
    - Requited：optional
    - Type：string
    - Default：10000
      

- **lookup.cache.ttl**
    - Description：The time for lru dimension table to cache data, the default is 60000 milliseconds (one minute)
    - Requited：optional
    - Type：string
    - Default：60000


- **lookup.parallelism**
  - Description：lookup parallelism
  - Requited：optional
  - Type：string
  - Default：none
    

- **scanner.batch-size-bytes**
    - Description：Maximum number of bytes returned by scanner in each batch
    - Requited：optional
    - Type：string
    - Default：0
  

- **scanner.limit**
    - Description：The limit on the number of rows that scanner will return
    - Requited：optional
    - Type：string
    - Default：1000 
  

- **scanner.fault-tolerant**
  - Description：If true, resume scanning on another tablet server if the current server fails
  - Requited：optional
  - Type：string
  - Default：none


## 5、Data type

|SUPPORTED | DATA TYPE |
| --- | --- |
| YES |INT8、BYTE、INT16、SHORT、INT32、INT、INT64、LONG、FLOAT、DOUBLE、BOOLEAN、STRING、VARCHAR、DECIMAL、TIMESTAMP、DATE、TIME、BINARY|
| NO | ARRAY、MAP、STRUCT、UNION |

## 6、Sample demo

See the 'demo' folder in the 'flinkx-examples' module of the project.
