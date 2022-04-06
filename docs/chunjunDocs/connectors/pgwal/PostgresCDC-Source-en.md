# Postgres CDC Source

## 1、Introduction

The Postgres CDC plugin captures change data from Postgres in real time. Currently, the sink plugin does not support
data restoration, and can only write changed log data.

## 2.Supported version

Postgres 10.0+

## 3. Plugin name

| Sync | pgwalsource、pgwalreader |
| --- | --- |
| SQL | pgwal-x |

## 4. Database Configuration

1. The write-ahead log level (wal_level) must be logical
2. The plugin is implemented based on the PostgreSQL logical replication and logical decoding functions, so the
   PostgreSQL account has at least replication permissions, and if it is allowed to create slots, it has at least super
   administrator permissions
3. For detailed principles, please refer to the official PostgreSQL documentation http://postgres.cn/docs/10/index.html

## 5. Parameter description

### 5.1 Sync

- **url**
    - Description：JDBC URL link for Postgresql
    - Required：yes
    - Parameter type: string
    - Default value: none


- **username**
    - Description: username
    - Required: yes
    - Parameter type: string
    - Default value: none


- **password**
    - Description: Password
    - Required: yes
    - Parameter type: string
    - Default value: none


- **databaseName**
    - Description：the database name
    - Required：yes
    - Parameter type：string
    - Default value：none


- **tableList**
    - Description：List of tables to be parsed
    - Notice：After specifying this parameter, the filter parameter will be invalid, the table and filter are empty,listen to all tables under the schema in jdbcUrl
    - Required：no
    - Parameter type：list\<string\>
    - Default value：none


- **slotName**
    - Description：slot name
    - Required：no
    - Parameter type：String
    - Default value：true


- **allowCreated**
    - Description：Whether to automatically create a slot
    - Required：no
    - Parameter type：boolean
    - Default value：false


- **temporary**
    - Description：Whether it is a temporary slot
    - Required：no
    - Parameter type：boolean
    - Default value：false

- **statusInterval**
    - Description：Heartbeat interval
    - Required：no
    - Parameter type：int
    - Default value：10


- **lsn**
    - Description：Log sequence number
    - Required：no
    - Parameter type：long
    - Default value：0


- **slotAvailable**
    - Description：Is the slot available
    - Required：no
    - Parameter type：boolean
    - Default value：false

## 6. Data Type

| SUPPORTED | DATA TYPE |
| --- | --- |
| YES |NULL, BOOLEAN, TINYINT, SMALLINT, INTEGER, INTERVAL_YEAR_MONTH, BIGINT, INTERVAL_DAY_TIME, DATE, TIME_WITHOUT_TIME_ZONE, TIMESTAMP_WITHOUT_TIME_ZONE, TIMESTAMP_WITH_LOCAL_TIME_ZONE, FLOAT, DOUBLE, CHAR, VARCHAR, DECIMAL, BINARY, VARBINARY  |
| NO | None | 

## 7. Script example

See the `flinkx-examples` folder in the project.

