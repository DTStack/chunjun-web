# InfluxDB Sink

## 1、Introduce

Influxdb sink，Breakpoint continuation is not supported and can only be sorted by time, and time is not unique. If you write data points in a batch and all write points do not have timestamp displayed, then they will be written with the same TIMESTAMP.

## 2、Version Support

influxDB 1.x


## 3、Connector name

| Sync | influxdbsink、influxdbwriter |
| ---- |-----------------------------|
| SQL  |                             |


## 4、Parameter description

### 1、Sync

- **connection**
    - Description:param for Database connection,including jdbcUrl、database、measurement and so on
    - Required:required
    - Type:List
    - Default:none
     ```text
      "connection": [{
       "url": ["http://127.0.0.1:8086"],
       "measurement": ["measurement"],
       "database":"public"
      }]
      ```
 <br />

- **url**

    - Description：Url of the influxDB connection
    - Required：required
    - Type：string
    - Default：none
      <br />

- **database**
    - Description:Database name
    - Required:optional
    - Type:string
    - Default:InfluxDB user name
      <br />

- **measurement**
    - Description: InfluxDB table name, only support one table in a single work at the moment.
    - Required:required
    - Type:List
    - Default:none
      <br />

- **username**
    - Description: username
    - Required:required
    - Type:String
    - Default:none
      <br />

- **password**
    - Description: password
    - Required:required
    - Type:String
    - Default:none
      <br />

- **rp**
    - Description：How long data is retained in the influxDB, how many copies of data are retained (open source version can only retain one), and how long data is retained by each shard,Elements of creating a retentionPolicy:
        - DURATION：This describes how long the retention policy holds data. This mechanism is very useful for temporal data.
        - SHARD：This is the cell that actually stores the InfluxDB data. Each shard keeps a time slice of data, which is 7 days by default. If you save a year's worth of data, InfluxDB will place 7 consecutive days' worth of data into a single shard, using multiple shards to store data.
        - SHARD DURATION：This describes how much time slice each shard holds multiple data. The default value is 7 days. Note that when data exceeds the retention policy, the influxDB does not delete data point by point, but deletes the entire Shard group.
        - SHARD GROUP：As the name implies, a single shard group contains multiple shards. A shard group contains only one shard. However, for enterprise multi-node cluster mode, a shard group can contain different shards on different nodes. This allows InfluxDB to hold more data.
        - SHARD REPLICATION：This describes how many copies each shard has. For the open source version, only a single copy is supported. For the enterprise version, each shard can be stored redundantly to avoid a single point of failure.
    - Required：optional
    - Type：String
    - Default：Parameter Description Value InfluxDB Default Retention policy
      <br />
  
- **writeMode**
    - Description：Due to the InfluxDB prioritizes the performance of CREATE and read data over Update and DELETE, updates to existing data are rare events and continuous updates never occur. Time series data is mainly new data that is never updated. Therefore we only support insert operations
    - Required：optional
    - Type：String
    - Default：insert
      <br />

- **enableBatch**
    - Description：Whether to enable batch write
    - Required：optional
    - Type：boolean
    - Default：true
      <br />

- **bufferLimit**

    - Description：It is recommended that the size of each buffer ranges from 5000 to 10000 data points
    - Required：optional
    - Type：int
    - Default：10000
      <br />

- **flushDuration**

    - Description：Write interval, the interval at which batch writes are flushed from buffer to disk (ms)
    - Required：optional
    - Type：int
    - Default：1000
      <br />

- **flushDuration**

    - Description：Used with the TIMESTAMP field to set the precision of the supplied Unix time. If you do not specify precision, TSDB For InfluxDB® assumes that the timestamp has an accuracy of nanoseconds.
    - Required：optional
    - Optional value：ns,u,ms,s,m,h
    - Type：string
    - Default：ns
      <br />

- **tag**

    - Description：Which fields are tags (key of measurement tag)
    - Required：optional
    - Type：list
    - Default：none

      ```text
      "tags":["id","no"],
      ```

       <br />


## 5、Supported data type


| supported |                                                                                                        data type                                                                                                         |
|:---------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|    yes    | SMALLINT、BINARY_DOUBLE、CHAR、VARCHAR、VARCHAR2、NCHAR、NVARCHAR2、INT、INTEGER、NUMBER、DECIMAL、FLOAT、DATE、RAW、LONG RAW、BINARY_FLOAT、TIMESTAMP、TIMESTAMP WITH LOCAL TIME ZONE、TIMESTAMP WITH TIME ZON、INTERVAL YEAR、INTERVAL DAY |


## 6、Demo
see details in `flinkx-examples` dir of project flinkx.

