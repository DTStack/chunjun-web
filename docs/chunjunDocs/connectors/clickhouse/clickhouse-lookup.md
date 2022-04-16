# Clickhouse Lookup


## 1、Introduce
clickhouse lookup，support all and lru cache
all cache:All data would be loaded into memory since the program start ,which is not recommended to use in scenarios with large amount of data .<br />
lru cache:Query data asynchronously and  add data to lru cache,which is recommended to use in scenarios with large amount of data.

## 2、Version Support
ClickHouse 19.x and above

## 3、Connector name
| SQL | clickhouse-x |
|-----| --- |


## 4、Parameter description

- **connector**
   - Description：clickhouse-x
   - Required：required
   - Type：String
   - Default：none
   <br />

- **url**
   - Description：clickhouse jdbc url,jdbc:clickhouse://localhost:8123/default
   - Required：required
   - Type：String
   - Default：none
   <br />

- **schema**
    - Description:Database schema
    - Required:optional
    - Type:string
    - Default：none
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

- **password**
   - Description：password
   - Required：required
   - Type：String
   - Default：none
   <br />

- **lookup.cache-type**
   - Description：lookup table type (NONE、LRU、ALL),default value is LRU
   - Required：optional
   - Type：String
   - Default：LRU
   <br />

- **lookup.cache-period**
   - Description：Interval for loading data when the cache type is all,default value is 3600000ms
   - Required：optional
   - Type：String
   - Default：3600000
   <br />

- **lookup.cache.max-rows**
   - Description：cache rows of lru lookup table ,default value is 10000
   - Required：optional
   - Type：String
   - Default：10000
   <br />

- **lookup.cache.ttl**
   - Description：Interval for loading data when the cache type is lru,default value is 60000ms
   - Required：optional
   - Type：String
   - Default：60000
   <br />

- **lookup.fetch-size**
   - Description：the num of data fetched from the  clickhouse table which is used as lookup all table at a time
   - Required：optional
   - Type：String
   - Default：1000
   <br />

- **lookup.parallelism**
   - Description：the parallelism of the lookup table
   - Required：optional
   - Type：String
   - Default：none
   <br />

## 5、Supported data type

| supported | data type                                                                                          |
|-----------|----------------------------------------------------------------------------------------------------|
| yes       | BOOLEAN、TINYINT、SMALLINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL、STRING、VARCHAR、TIMESTAMP、DATE、BINARY、NULL |
| no        | ARRAY、MAP、STRUCT、UNION                                                                             |




## 6、Demo
see details in `flinkx-examples` dir of project flinkx.


