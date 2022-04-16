# GBase Lookup

## 1、Introduce
GBase lookup,support all and lru cache<br />
all cache:All data would be loaded into memory since the program start ,which is not recommended to use in scenarios with large amount of data .<br />
lru cache:Query data asynchronously and  add data to lru cache,which is recommended to use in scenarios with large amount of data.

## 2、Version Support
GBase8a(8.6.2.43)


## 3、Connector name
| SQL | gbase-x |
| --- |---------|

## 4、Parameter description
- **connector**
    - Description：gbase-x
    - Required:optional
    - Type:String
    - Default:none
        <br />

- **url**
    - Description：jdbc:gbase://localhost:9042/test
    - Required:required
    - Type:String
    - Default:none
        <br />
    
- **schema**
  - Description：schema name
  - Required:required
  - Type:String
  - Default:none

- **table-name**
    - Description:table name
    - Required:required
    - Type:String
    - Default:none
      <br />

- **username**
    - Description:username
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

- **lookup.cache-type**
    - Description:lookup table type (NONE、LRU、ALL),default value is LRU
    - Required:optional
    - Type:String
    - Default:LRU
      <br />

- **lookup.cache-period**
    - Description:Interval for loading data when the cache type is all,default value is 3600000ms(1 hour)
    - Required:optional
    - Type:string
    - Default:3600000
      <br />

- **lookup.cache.max-rows**
    - Description:the cache rows of lru lookup table ,default value is 10000
    - Required:optional
    - Type:string
    - Default:10000
      <br />

- **lookup.cache.ttl**
    - Description:Interval for loading data when the cache type is lru,default value is 60000ms(1 minute)
    - Required:optional
    - Type:string
    - Default:60000
      <br />

- **lookup.fetch-size**
    - Description：The number of records that ALL Lookup table loads from the database each time, the default is 1000
  - Required:optional
  - Type:string
  - Default:1000
      <br />

- **lookup.parallelism**
    - Description:the parallelism of the lookup table
    - Required:optional
    - Type:string
    - DEfault:none
      <br />

## 5、Supported data type
| Whether to support | Data Type |
|--------------------| --- |
| Supported          | BOOLEAN、TINYINT、SMALLINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL、STRING、VARCHAR、CHAR、TIMESTAMP、DATE、BINARY |
| Unsupported        | ARRAY、MAP、STRUCT、UNION |


## 6. Example

The details are in flinkx-examples dir.
