# DB2 Lookup

## 1. Introduction
DB2 Lookup table，full and asynchronous approaches are supported.<br />
Full cache: Load all dimensional table data into memory, and it is recommended that the amount of data is not used.<br />
Asynchronous caching: Query data using asynchronous means, and cache the queried data to memory using lru, which is recommended for large amounts of data.

## 2. Support Version



## 3. Plugin Name
| SQL | db2-x |
| --- | --- |

## 4. Parameter
- **connector**
  - Description：connection plugin  name
  - Required：required
  - Type：String
  - Value：db2-x
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
  - Description：table name
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

- **lookup.cache-type**
  - Description：Dimension table cache type(NONE、LRU、ALL)，default is LRU
  - Required：optional
  - Type：string
  - Default：LRU
<br />

- **lookup.cache-period**
  - Description：Interval for loading data when the cache type is all， default is 3600000ms(one hour)
  - Required：optional
  - Type：string
  - Default：3600000
<br />

- **lookup.cache.max-rows**
  - Description：the cache rows of lru lookup table ,default value is 10000
  - Required：optional
  - Type：string
  - Default：10000
<br />

- **lookup.cache.ttl**
  - Description：Interval for loading data when the cache type is lru,default value is 60000ms
  - Required：optional
  - Type：string
  - Default：60000
<br />

- **lookup.fetch-size**
  - Description：the num of data fetched from the  oracle table which is used as lookup all table at a time
  - Required：optional
  - Type：string
  - Default：1000
<br />

- **lookup.parallelism**
  - Description：the parallelism of the lookup table
  - Required：optional
  - Type：string
  - Default：none
<br />

## 5. DATA Type
| Whether or not Supported | Type Name |
| ---| ---|
| Supported | INT,BIGINT,SMALLINT,DOUBLE,DECFLOAT,DECIMAL,VARCHAR,CHAR,CLOB,DECIMAL,TIMESTAMP,DATETIME,DATE,TIME,BYTES|
| Not supported |  |


## 6. Profile Demo
see `flinkx-examples` directory。
