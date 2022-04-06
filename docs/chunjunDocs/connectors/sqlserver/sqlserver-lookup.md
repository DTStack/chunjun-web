# SqlServer Lookup

## 1. Introduction
SqlServer Lookup table，full and asynchronous approaches are supported.<br />
Full cache: Load all dimensional table data into memory, and it is recommended that the amount of data is not used.<br />
Asynchronous caching: Query data using asynchronous means, and cache the queried To memory using lru, which is recommended for large amounts of data.

## 2. Support Version
Microsoft SQL Server 2012 and above

## 3. Plugin Name
| SQL | sqlserver-x |
| --- | --- |

## 4. Parameter

- **connector**
   - Description：connection plugin  name
   - Required：required
   - Type：String
   - Value：sqlserver-x

​<br /> 

- **url**
   - Description：Use the open source jtds driver connection instead of Microsoft's official driver<br />jdbcUrl Reference documents：[jtds Reference documents](http://jtds.sourceforge.net/faq.html)
   - Required：required
   - Type：String
   - Default：none

<br />

- **table-name**
   - Description：table name
   - Required：required
   - Type：String
   - Default：none

<br />

- **schema**
   - Description：schema
   - Required：optional
   - Type：String
   - Default：none

​<br />

- **username**
   - Description：username
   - Required：required
   - Type：String
   - Default：none

​<br />

- **password**
   - Description：password
   - Required：required
   - Type：String
   - Default：none

​<br />

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

​<br />

- **lookup.fetch-size**
   - Description：the num of data fetched from the  oracle table which is used as lookup all table at a time
   - Required：optional
   - Type：string
   - Default：1000

​<br /> 

- **lookup.parallelism**
   - Description：the parallelism of the lookup table
   - Required：optional
   - Type：string
   - Default：none



## 5. DATA Type
| Whether or not Supported | Type Name |
| ---| ---|
|Supported| BIT、INT、SMALLINT、TINYINT、BIGINT、INT IDENTITY、REAL、FLOAT、DECIMAL、NUMERIC、CHAR、VARCHAR、VARCHAR(MAX)、TEXT、XML、NCHAR、NVARCHAR、NVARCHAR(MAX)、NTEXT、TIME、DATE、DATETIME、DATETIME2、SMALLDATETIME、DATETIMEOFFSET、TIMESTAMP、BINARY、VARBINARY、IMAGE、MONEY、SMALLMONEY、UNIQUEIDENTIFIER |
| Not supported | CURSOR、ROWVERSION、HIERARCHYID、SQL_VARIANT、SPATIAL GEOMETRY TYPE、SPATIAL GEOGRAPHY TYPE、TABLE |

## 6. Profile Demo
see `flinkx-examples` directory。
