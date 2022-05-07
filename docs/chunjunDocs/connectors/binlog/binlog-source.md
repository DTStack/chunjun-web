# MySQL Binlog Source

## 1. Introduction

The MySQL Binlog plugin uses the Canal component to capture the changed data from MySQL in real-time. Currently, the
sink-plugin does not support data restoration, and only support to write changed log data.

## 2. Supported Versions

MySQL 5.1.5 and above, TiDB 3.0.10 and later

## 3. Plugin Name

| Sync | binlogsource、binlogreader |
| --- | --- |
| SQL | binlog-x |

## 4. Database Configuration

### 4.1 Change Configuration

MySQL binlog_format needs to be modified to ROW, add the following configuration under [mysqld] in the /etc/my.cnf file

```sql
server_id
=109
log_bin = /var/lib/mysql/mysql-bin
binlog_format = ROW
expire_logs_days = 30
```

### 4.2. Add Permissions

MySQL Binlog requires three permissions: SELECT, REPLICATION SLAVE, REPLICATION CLIENT

```sql
GRANT
SELECT, REPLICATION SLAVE, REPLICATION CLIENT
ON *.* TO 'canal'@'%' IDENTIFIED BY 'canal';
```

-When the SELECT permission is missing, the error is reported as

```text
com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException:
Access denied for user'canal'@'%' to database'binlog'
```

-When REPLICATION SLAVE permission is missing, the error is reported as

```text
java.io.IOException:
Error When doing Register slave:ErrorPacket [errorNumber=1045, fieldCount=-1, message=Access denied for user'canal'@'%'
```

-When REPLICATION CLIENT permission is missing, the error is reported as

```text
com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException:
Access denied; you need (at least one of) the SUPER, REPLICATION CLIENT privilege(s) for this operation
```

Why does Binlog need these permissions:

-Select permission means are allowed to view data onto the table -Replication client permission means are allowed to
execute the show master status, show slave status, and show binary logs commands -Replication slave permission means
that the slave host is allowed to connect to the master through this user in order to establish a master-slave
replication relationship

## 5. Parameter Description

### 5.1 Sync

- **jdbcUrl**
    - Description: jdbc url of MySQL database, reference
      document: [Mysql official document](http://dev.mysql.com/doc/connector- j/en/connector- j- reference-
      configuration- properties.html)
    - Required: Yes
    - Field type: string
    - Default value: none


- **username**
    - Description: The username of the data source
    - Required: Yes
    - Field type: string
    - Default value: none


- **password**
    - Description: The password of the username specified by the data source
    - Required: Yes
    - Field type: string
    - Default value: none


- **host**
    - Description: The ip of the machine where the MySQL slave is started
    - Required: Yes
    - Field type: string
    - Default value: none


- **port**
    - Description: Port to start MySQL slave
    - Required: No
    - Field type: int
    - Default value: 3306


- **table**
    - Description: The data table to be parsed.
    - Note: After specifying this parameter, the filter parameter will be invalid, the table and filter are empty,
      listen to all tables under the schema in jdbcUrl
    - Required: No
    - Field type: list\<string\>
    - Default value: none


- **filter**
    - Description: Perl regular expression for filtering table names
    - Note: both table and filter are empty, listen to all tables under the schema in jdbcUrl
    - Required: No
    - Field type: string
    - Default value: none
    - example:
    - All tables: `.*` or `.*\\..*`
    - All tables under canal schema: `canal\\..*`
    - Tables starting with canal under canal: `canal\\.canal.*`
    - A table under the canal schema: `canal.test1`


- **cat**
    - Description: The type of data update that needs to be parsed, including insert, update, and delete
    - Note: Fill in the format separated by commas. If it is empty, parse all data update types
    - Required: No
    - Field type: string
    - Default value: none


- **start**
    - Description: The starting position of the binlog file to be read
    - Note: If it is empty, it will be consumed from the current position, and the priority of timestamp is higher than
      journalName+position
    - Parameters:
    - timestamp: timestamp, the start point of collection is consumed from the specified timestamp;
    - journalName: file name, the start point of collection is consumed from the beginning of the specified file;
    - position: the specified position of the file, the start point of collection is consumed from the specified
      position of the specified file
    - Field type: map
    - Default value: none


- **pavingData**
    - Description: Whether to flatten the parsed json data, see [六、Data structure](#六数据结构)
    - Required: No
    - Field type: boolean
    - Default value: true


- **splitUpdate**
    - Description: When the data update type is update, whether to split the update into two data,
      see [六、Data structure](#六数据结构)
    - Required: No
    - Field type: boolean
    - Default value: false


- **timestampFormat**
    - Description: Specify the timestamp format used for input and output, optional values: `SQL`, `ISO_8601`
    - Required: No
    - Field type: string
    - Default value: SQL


- **slaveId**
    - Description: The ID of the slave server
    - Note: The same MYSQL replication group cannot be duplicated
    - Required: No
    - Field type: long
    - Default value: new Object().hashCode()


- **connectionCharset**
    - Description: encoding information
    - Required: No
    - Field type: string
    - Default value: UTF- 8


- **detectingEnable**
    - Description: Whether to turn on the heartbeat
    - Required: No
    - Field type: boolean
    - Default value: true


- **detectingSQL**
    - Description: Heartbeat SQL
    - Required: No
    - Field type: string
    - Default value: SELECT CURRENT_DATE


- **enableTsdb**
    - Description: Whether to enable the ability of time series structure
    - Required: No
    - Field type: boolean
    - Default value: true


- **bufferSize**
    - Description: Concurrent cache size
    - Note: Must be a power of 2
    - Required: No
    - Default value: 1024


- **parallel**
    - Description: Whether to enable parallel parsing of binlog logs
    - Required: No
    - Field type: boolean
    - Default value: true


- **parallelThreadSize**
    - Description: Parallel parsing of binlog log threads
    - Note: Only when paraller is set to true will it take effect
    - Required: No
    - Field type: int
    - Default value: 2


- **isGTIDMode**
    - Description: Whether to enable gtid mode
    - Required: No
    - Field type: boolean
    - Default value: false


- **queryTimeOut**
    - Description: After sending data through the TCP connection (here is the SQL to be executed), the timeout period
      for waiting for a response, in milliseconds
    - Required: No
    - Field type: int
    - Default value: 300000


- **connectTimeOut**
    - Description: The timeout period for the database driver (mysql-connector-java) to establish a TCP connection with
      the mysql server, in milliseconds
    - Required: No
    - Field type: int
    - Default value: 60000

### 5.2 SQL

- **url**
    - Description: jdbc url of MySQL database, reference
      document: [Mysql official document](http://dev.mysql.com/doc/connector- j/en/connector- j- reference-
      configuration- properties.html)
    - Required: Yes
    - Field type: string
    - Default value: none


- **username**
    - Description: The username of the data source
    - Required: Yes
    - Field type: string
    - Default value: none


- **password**
    - Description: The password of the username specified by the data source
    - Required: Yes
    - Field type: string
    - Default value: none


- **host**
    - Description: The ip of the machine where the MySQL slave is started
    - Required: Yes
    - Field type: string
    - Default value: none


- **port**
    - Description: Port to start MySQL slave
    - Required: No
    - Field type: int
    - Default value: 3306


- **table**
    - Description: The data table to be parsed.
    - Note: After specifying this parameter, the filter parameter will be invalid, and the SQL task only supports
      monitoring a single table
    - Required: No
    - Field type: string
    - Default value: none


- **filter**
    - Description: Perl regular expression for filtering table names
    - Note: The SQL task only supports monitoring a single table
    - Required: No
    - Field type: string
    - Default value: none
    - Example: a table under the canal schema: `canal.test1`


- **cat**
    - Description: The type of data update that needs to be parsed, including insert, update, and delete
    - Note: Fill in the format separated by commas. If it is empty, parse all data update types
    - Required: No
    - Field type: string
    - Default value: none


- **timestamp**
    - Description: The starting position and timestamp of the binlog file to be read, the start point of collection is
      consumed from the specified timestamp;
    - Required: No
    - Field type: string
    - Default value: none


- **journal- name**
    - Description: The start position of the binlog file to be read, the file name, and the start point of collection is
      consumed from the start of the specified file;
    - Required: No
    - Field type: string
    - Default value: none


- **position**
    - Description: The start position of the binlog file to be read, the specified position of the file, the start point
      of collection is consumed from the specified position of the specified file
    - Required: No
    - Field type: string
    - Default value: none


- **connection- charset**
    - Description: encoding information
    - Required: No
    - Field type: string
    - Default value: UTF- 8


- **detecting- enable**
    - Description: Whether to turn on the heartbeat
    - Required: No
    - Field type: boolean
    - Default value: true


- **detecting- sql**
    - Description: Heartbeat SQL
    - Required: No
    - Field type: string
    - Default value: SELECT CURRENT_DATE


- **enable- tsdb**
    - Description: Whether to enable the ability of time series structure
    - Required: No
    - Field type: boolean
    - Default value: true


- **buffer- size**
    - Description: Concurrent cache size
- Note: Must be a power of 2
    - Required: No
    - Default value: 1024


- **parallel**
    - Description: Whether to enable parallel parsing of binlog logs
    - Required: No
    - Field type: boolean
    - Default value: true


- **parallel- thread- size**
    - Description: Parallel parsing of binlog log threads
    - Note: Only when parallel is set to true will it take effect
    - Required: No
    - Field type: int
    - Default value: 2


- **is- gtid- mode**
    - Description: Whether to enable gtid mode
    - Required: No
    - Field type: boolean
    - Default value: false


- **query-time-out**
    - Description: After sending data through the TCP connection (here is the SQL to be executed), the timeout period
      for waiting for a response, in milliseconds
    - Required: No
    - Field type: int
    - Default value: 300000


- **connect-time-out**
    - Description: The timeout period for the database driver (mysql-connector-java) to establish a TCP connection with
      the mysql server, in milliseconds
    - Required: No
    - Field type: int
    - Default value: 60000


- **timestamp- format.standard**
    - Description: Same as the `timestampFormat` parameter in Sync, specify the timestamp format used for input and
      output, optional values: `SQL`, `ISO_8601`
    - Required: No
    - Field type: string
    - Default value: SQL

## 6. Data Structure

Execute at 2020-01-01 12:30:00 (time stamp: 1577853000000):

```sql
INSERT INTO `tudou`.`kudu`(`id`, `user_id`, `name`)
VALUES (1, 1, 'a');
```

Execute at 2020-01-01 12:31:00 (time stamp: 1577853060000):

```sql
DELETE
FROM `tudou`.`kudu`
WHERE `id` = 1
  AND `user_id` = 1
  AND `name` = 'a';
```

Execute at 2020-01-01 12:32:00 (time stamp: 1577853180000):

```sql
UPDATE `tudou`.`kudu`
SET `id`      = 2,
    `user_id` = 2,
    `name`    ='b'
WHERE `id` = 1
  AND `user_id` = 1
  AND `name` = 'a';
```

1. pavingData = true, splitUpdate = false The data in RowData are as follows:

```
//schema, table, ts, opTime, type, before_id, before_user_id, before_name, after_id, after_user_id, after_name
["tudou", "kudu", 6760525407742726144, 1577853000000, "INSERT", null, null, null, 1, 1, "a"]
["tudou", "kudu", 6760525407742726144, 1577853060000, "DELETE", 1, 1, "a", null, null, null]
["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE", 1, 1, "a", 2, 2, "b"]
```

2. pavingData = false, splitUpdate = false The data in RowData are as follows:

```
//schema, table, ts, opTime, type, before, after
["tudou", "kudu", 6760525407742726144, 1577853000000, "INSERT", null, {"id":1, "user_id":1, "name":"a"}]
["tudou", "kudu", 6760525407742726144, 1577853060000, "DELETE", {"id":1, "user_id":1, "name":"a"}, null]
["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE", {"id":1, "user_id":1, "name":"a"}, {"id":2, "user_id": 2, "name":"b"}]
```

3. pavingData = true, splitUpdate = true The data in RowData are as follows:

```
//schema, table, ts, opTime, type, before_id, before_user_id, before_name, after_id, after_user_id, after_name
["tudou", "kudu", 6760525407742726144, 1577853000000, "INSERT", null, null, null, 1, 1, "a"]
["tudou", "kudu", 6760525407742726144, 1577853060000, "DELETE", 1, 1, "a", null, null, null]

//schema, table, ts, opTime, type, before_id, before_user_id, before_name
["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE_BEFORE", 1, 1, "a"]

//schema, table, ts, opTime, type, after_id, after_user_id, after_name
["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE_AFTER", 2, 2, "b"]
```

4. pavingData = false, splitUpdate = true The data in RowData are as follows:

```
//schema, table, ts, opTime, type, before, after
["tudou", "kudu", 6760525407742726144, 1577853000000, "INSERT", null, {"id":1, "user_id":1, "name":"a"}]
["tudou", "kudu", 6760525407742726144, 1577853060000, "DELETE", {"id":1, "user_id":1, "name":"a"}, null]
//schema, table, ts, opTime, type, before
["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE_BEFORE", {"id":1, "user_id":1, "name":"a"}]
//schema, table, ts, opTime, type, after
["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE_AFTER", {"id":2, "user_id":2, "name":"b"}]
```

-type: change type, INSERT, UPDATE, DELETE -opTime: the execution time of SQL in the database -ts: Self-incrementing ID,
not repeated, can be used for sorting, after decoding, it is the event time of FlinkX, the decoding rules are as
follows:

```java
long id=Long.parseLong("6760525407742726144");
        long res=id>>22;
        DateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        System.out.println(sdf.format(res)); //2021-01-28 19:54:21
```

## 7. Data Types

| SUPPORTED | DATA TYPE |
| --- | --- |
| YES |BIT, TINYINT, SMALLINT, MEDIUMINT, INT, INT24, INTEGER, FLOAT, DOUBLE, REAL, LONG, BIGINT, DECIMAL, NUMERIC, CHAR, VARCHAR, TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT, ENUM, SET, JSON, DATE, TIME, TIMESTAMP, DATETIME, YEAR, TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB, GEOMETRY, BINARY, VARBINARY  |
| NO | None | 

## 8. Script Example

See the `flinkx-examples` folder in the project.
