# Hive Sink

## 一、Introduction
FlinkX only has Hive sink plugin, no Hive source plugin, if you need to read data from Hive table, please use HDFS source plugin.

Hive sink plugin supports writing data to Hive table in real time, supports automatic table building and automatic partition creation according to current system time, supports dynamic table name resolution and group mapping, and writes different data to different Hive tables according to mapping rules.

Hive sink plug-in is generally used with real-time collection (CDC) plug-in, kafka source plug-in and other real-time class plug-ins.

Hive sink plug-in underlying reliance on HDFS sink, the basic principle is also to write data files to the specified HDFS path, can be seen as the HDFS sink to do some automatic table building partitioning and group mapping and other expansion functions.

Hive sink plug-in use need to open checkpoint, in checkpoint after the data can be checked out in the Hive table. When checkpoint is enabled, a two-stage commit is used. The data files generated in the .data directory are copied to the official directory during pre-commit and the copied data files are marked, the data files marked in the .data directory are deleted during the commit stage, and the data files marked in the official directory are deleted during rollback.


## 二、Supported Versions
Hive 1.x、Hive 2.x


## 四、Parameter Description

### 1、Sync
- **jdbcUrl**
  - Description: String for connecting to Hive JDBC
  
  - Required: yes
  
  - Field type: string

  - Default value: none
  
    
  
- **username**
  
  - Description: Hive authentication username
  - Required: No
  - Field type: string
  - Default value: none

  
  
- **password**
  - Description: Hive authentication password
  - Required: no
  - Field type: string
  - Default value: none

  
  
- **partition**
  - Description: The name of the partition field
  - Required: no
  - Field type: string
  - Default value: `pt`

  
  
- **partitionType**
  - Description: The partition type, including DAY, HOUR and MINUTE. **If the partition does not exist, it will be created automatically, the time of the automatically created partition is based on the server time of the current task running**
    - DAY: day partition, partition example: pt=20200101
    - HOUR: hour partition, partition example: pt=2020010110
    - MINUTE: minute partition, partition example: pt=202001011027
  - Required: no
  - Field type: string
  - Default value: `DAY`

  
  
- **tablesColumn**
  
  - Description: Write the table structure information of the hive table, **if the table does not exist, the table will be built automatically**.
  - Example.
  - Required: yes
  - Field type: string
  - Default value: None
```json
{
    "kudu":[
        {
            "key":"id",
            "type":"int"
        },
        {
            "key":"user_id",
            "type":"int"
        },
        {
            "key":"name",
            "type":"string"
        }
    ]
}
```


- **analyticalRules**
  - Description: The dynamic rule of table creation to get the table name, according to the ${XXXX} placeholder, get the value from the data to be written (map structure) according to the key XXX to replace it, create the corresponding table, and write the data to the corresponding table.
  - Example: stream_${schema}_${table}
  - Required: No
  - Field type: string
  - Default value: none<br />

  
  
- **schema**
  - Description: If a schema placeholder is specified in analyticalRules, schema will replace the value of this schema parameter when the table is built automatically.
  - Required: No
  - Field type: string
  - Default value: None

  
  
- **distributeTable**
  - Description: If the data comes from various CDC data, the different tables will be aggregated and the data from multiple tables will be written to the same hive table.
  - Required: No
  - Field type: string
  - Default value: None
  - Example:
```json
 "distributeTable" : "{\"fenzu1\":[\"table1\"],\"fenzu2\":[\"table2\",\"table3\"]}",
```
The data of table1 will be written to the hive table fenzu1, the data of table2 and table3 will be written to fenzu2, if the configuration of the attributeTable, the tablesColumn needs to be configured in the following format.
```json
{
    "fenzu1":[
        {
            "key":"id",
            "type":"int"
        },
        {
            "key":"user_id",
            "type":"int"
        },
        {
            "key":"name",
            "type":"string"
        }
    ],
   "fenzu2":[
        {
            "key":"id",
            "type":"int"
        },
        {
            "key":"user_id",
            "type":"int"
        },
        {
            "key":"name",
            "type":"string"
        }
    ]
}
```


- **writeMode**
  
  - Description: HDFS Sink pre-write data cleanup processing mode.
    - append: append
    - overwrite: overwrite
  - Note: overwrite mode will delete all files in the current directory of hdfs
  - Required: no
  - Field type: string
  - Default value: append
    
    
  
- **fileType**
  - Description: The type of the file, currently only user-configurable as `text`, `orc`, `parquet`
    - text: textfile file format
    - orc: orcfile file format
    - parquet: parquet file format
  - Required: yes
  - Parameter type: string
  - Default value: none
    
    


- **defaultFS**
  - Description: address of the Hadoop hdfs file system namenode node. Format: hdfs://ip:port; for example: hdfs://127.0.0.1:9000
  - Required: yes
  - Parameter type: string
  - Default value: none
    
    

- **hadoopConfig**
  - Description: The configuration in core-site.xml and hdfs-site.xml that needs to be filled when the cluster is in HA mode, and the kerberos-related configuration when kerberos is enabled
  - Required: No
  - Parameter type: Map<String, Object>
  - Default value: none
    
    

- **fieldDelimiter**
  - Description: The delimiter of the field when `fileType` is `text`.
  - Mandatory: No
  - Parameter type: string
  - Default value: `\001`
    
    

- **compress**
  - Description: hdfs file compression type
    - text: supports `GZIP`, `BZIP2` formats
    - orc: supports `SNAPPY`, `GZIP`, `BZIP`, `LZ4` formats
    - parquet: supports `SNAPPY`, `GZIP`, `LZO` formats
  - Note: `SNAPPY` format requires user to install **SnappyCodec**
  - Required: No
  - Field type: string
  - Default value.
    - text No compression by default
    - orc defaults to ZLIB format
    - parquet default is SNAPPY format
      
      

- **maxFileSize**
  - Description: Maximum size of a single file written to hdfs, in bytes
  - mandatory: no
  - Field type: long
  - Default value: `1073741824` (1G)
    
    

- **nextCheckRows**
  - Description: The number of intervals between the next check of the file size, each time this number is reached the size of the file currently written will be queried
  - Required: No
  - Field type: long
  - Default value: `5000
    
    

- **rowGroupSize**
  - Description: The size of the row group when `fileType` is `parquet`, in bytes
  - Required: no
  - Field type: int
  - Default value: `134217728` (128M)
    
    

- **enableDictionary**
  - Description: Whether to enable dictionary encoding when `fileType` is `parquet
  - Required: no
  - Field type: boolean
  - Default value: `true`
    
    

- **encoding**
  - Description: The character encoding of the field when `fileType` is `text
  - Required: no
  - Field type: string
  - Default: `UTF-8`
    
    

### 2. SQL

- **url**
  - Description: String to connect to Hive JDBC
  - Required: yes
  - Field type: string
  - Default value: none
    
    

- **username**
  - Description: Hive authentication username
  - Mandatory: no
  - Field type: string
  - Default value: none
    
    

- **password**
  - Description: Hive authentication password
  - Mandatory: no
  - Field type: string
  - Default value: none
    
    

- **partition**
  - Description: The name of the partition field
  - Mandatory: no
  - Field type: string
  - Default value: `pt`
    
    

- **partition-type**
  - Description: The partition type, including DAY, HOUR and MINUTE. **If the partition does not exist then it will be created automatically, the time of the automatically created partition is based on the server time of the current task running**
    - DAY: day partition, example of partition: pt=20200101
    - HOUR: hourly partition, example of partition: pt=2020010110
    - MINUTE: minute partition, example partition: pt=202001011027
  - Required: No
  - Field type: string
  - Default value: `DAY`
    
    

- **write-mode**
  - Description: HDFS Sink pre-write data cleanup processing mode.
    - append: append
    - overwrite: overwrite
  - Note: overwrite mode will delete all files in the current directory of hdfs
  - Required: no
  - Field type: string
  - Default value: append
    
    

- **file-type**
  - Description: the type of file, currently only user-configurable as `text`, `orc`, `parquet`
    - text: textfile file format
    - orc: orcfile file format
    - parquet: parquet file format
  - Required: yes
  - Parameter type: string
  - Default value: none
    
    

- **default-fs**
  - Description: Address of the Hadoop hdfs file system namenode node. Format: hdfs://ip:port; for example: hdfs://127.0.0.1:9000
  - Required: yes
  - Parameter type: string
  - Default value: none
    
    

- **hadoopConfig**
  - Description: The configuration in core-site.xml and hdfs-site.xml that needs to be filled when the cluster is in HA mode, and the kerberos-related configuration when kerberos is enabled
  - Required: No
  - Configuration method: 'properties.key' = 'value', key is the key in hadoopConfig, value is the value in hadoopConfig, as follows.

```
'properties.hadoop.user.name' = 'root',
'properties.dfs.ha.namenodes.ns' = 'nn1,nn2',
'properties.fs.defaultFS' = 'hdfs://ns',
'properties.dfs.namenode.rpc-address.ns.nn2' = 'ip:9000',
'properties.dfs.client.failover.proxy.provider.ns' = 'org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',
'properties.dfs.namenode.rpc-address.ns.nn1' = 'ip:9000',
'properties.dfs.nameservices' = 'ns',
'properties.fs.hdfs.impl.disable.cache' = 'true',
'properties.fs.hdfs.impl' = 'org.apache.hadoop.hdfs.DistributedFileSystem'
```

- **field-delimiter**
  - Description: field delimiter when `fileType` is `text`
  - Required: no
  - Parameter type: string
  - Default value: `\001`
    
    

- **compress**
  - Description: hdfs file compression type
    - text: supports `GZIP`, `BZIP2` formats
    - orc: supports `SNAPPY`, `GZIP`, `BZIP`, `LZ4` formats
    - parquet: supports `SNAPPY`, `GZIP`, `LZO` formats
  - Note: `SNAPPY` format requires user to install **SnappyCodec**
  - Required: No
  - Field type: string
  - Default value.
    - text No compression by default
    - orc defaults to ZLIB format
    - parquet defaults to SNAPPY format
      
      

- **max-file-size**
  - Description: Maximum size of a single file written to hdfs, in bytes
  - mandatory: no
  - Field type: long
  - Default value: `1073741824` (1G)
    
    

- **next-check-rows**
  - Description: The number of rows between the next file size check, each time this number is reached the current file size of the written file will be queried
  - Required: No
  - Field type: long
  - Default value: `5000
    
    

- **enable-dictionary**
  - Description: Whether to enable dictionary encoding when `fileType` is `parquet`.
  - Required: no
  - Field type: boolean
  - Default value: `true`
    
    

- **encoding**
  - Description: The character encoding of the field when `fileType` is `text`
  - Required: no
  - Field type: string
  - Default value: `UTF-8`
    
    

- **table-name**
  - Description: Hive table name
  - Required: yes
  - Field type: string
  - Default value: none

## 五、Data type
| Support | BOOLEAN、TINYINT、SMALLINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL、STRING、VARCHAR、CHAR、TIMESTAMP、DATE、BINARY |
| --- | --- |
| Not supported at the moment | ARRAY、MAP、STRUCT、UNION |


## 六、Sample Scripts
See the `flinkx-examples` folder within the project.
