# PostgreSQL Lookup

## 1、Introduce
PostgreSQL lookup,support all and lru cache<br />
all cache:All data would be loaded into memory since the program start ,which is not recommended to use in scenarios with large amount of data .<br />
lru cache:Query data asynchronously and  add data to lru cache,which is recommended to use in scenarios with large amount of data.

## 2、Version Support
PostgreSql 9.4 and above


## 3、Connector name
| SQL | postgresql-x |
| --- | --- |

## 4、Parameter description
- **connector**
    - Description：postgresql-x
    - Required:optional
    - Type:String
    - Default:none
        <br />

- **url**
    - Description：jdbc:postgresql://localhost:5432/test
    - Required:required
    - Type:String
    - Default:none
        <br />

- **schema**
    - Description:Database schema
    - Required:optional
    - Type:string
    - Default:none
      <br />

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
    - Description:Interval for loading data when the cache type is all,default value is 3600000ms
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
    - Description:Interval for loading data when the cache type is lru,default value is 60000ms
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
| Supported          | SMALLINT、SMALLSERIAL、INT2、INT、INTEGER、SERIAL、INT4、BIGINT、BIGSERIAL、OID、INT8、REAL、FLOAT4、FLOAT、DOUBLE PRECISION、FLOAT8、DECIMAL、NUMERIC、 CHARACTER VARYING、VARCHAR、CHARACTER、CHAR、TEXT、NAME、BPCHAR、BYTEA、TIMESTAMP、TIMESTAMPTZ、DATE、TIME、TIMETZ、 BOOLEAN、BOOL |
| Unsupported        | ARRAY etc. |


## 6. Example

The details are in flinkx-examples dir.
