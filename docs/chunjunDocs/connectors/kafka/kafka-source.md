# Kafka Source
## 1. Introduce
Kafka Source


## 2. Version Support
Kafka mainstream version


## 3. Connector Name
There are four versions of the kafka plugin, and the plugin names are slightly different depending on the kafka version. The specific corresponding relationship is shown in the following table

|    Sync     | kafkasource、kafkareader |
|:-----------:|:-----------------------:|
|     SQL     |         kafka-x         |
| SQL(upsert) |     upsert-kafka-x      |


## 4. Parameter description
#### 4.1 Sync
- **topic**
    - description:Topics to consume,multiple topics are separated by ",".When mode is 'timestamp' and 'specific offsets', multiple topics are not supported.
    - required:required
    - type:String
    - defaults:none

- **mode**
    - description:Kafka consumer startup mode.Currently, only the 'kafkareader' plugin is supported
    - optional:
    - group-offsets:Start consumption from the offset submitted by the consumption group specified in ZK / Kafka brokers
    - earliest-offset:Start with the earliest offset (if possible)
    - latest-offset:Start with the latest offset (if possible)
    - timestamp:The timestamp of each partition starts at the specified time
    - specific-offsets:Start with a specific offset specified for each partition
    - required:optional
    - type:String
    - defaults:group-offsets
- **timestamp**
    - description:The specified Kafka timestamp collection starting point. At present, only the 'kafkareader' plugin is supported
    - required:Required when 'mode' is' timestamp '
    - type:Long
    - defaults:none
- **offset**
    - description:The consumed partition and the corresponding specific offset. At present, only the 'kafkareader' plug-in is supported
    - required:Required when 'mode' is' specific offsets'
    - type:String
    - format:partition:0,offset:42;partition:1,offset:300;partition:2,offset:300
    - defaults:none
- **groupId**
    - description:Kafka consumer group id
    - required:optional
    - type:String
    - defaults:default
- **encoding**
    - description:Character encoding
    - required:optional
    - type:String
    - defaults:UTF-8
- **codec**
    - description:Codec type, supporting json and text
    - text:
      Store the message string obtained by Kafka into a map whose key is message. For example, the message in Kafka is: {"key": "key", "message": "value"},
      Then the data format sent to the downstream is:
`
[
    {
    "message":"{\"key\": \"key\", \"value\": \"value\"}"
    }
]
`

- json:Parse the message string obtained by Kafka in json format
  - If the string is in json format
  - When it contains the message field, the data format sent to the downstream is:
    `[
    {
        "key":"key",
        "message":"value"
    }
]`
  - When the message field is not included, add a key value pair whose key is message and value is the original message string. The data format sent to the downstream is:

    `
    [
    {
        "key":"key",
        "value":"value",
        "message":"{\"key\": \"key\", \"value\": \"value\"}"
    }
]
`

  - If the changed string is not in JSON format, it will be processed according to the text type
- required:optional
- type:String
- defaults:text

- **consumerSettings**
    - description:Kafka connection configuration,supporting all configuration defined in `kafka.consumer.ConsumerConfig.ConsumerConfig`
    - required:required
    - type:Map
    - defaults:none
    - example:
`
{
    "consumerSettings":{
        "bootstrap.servers":"host1:9092,host2:9092,host3:9092"
    }
}
`

-  **column**
    - description:When Kafka writes data to MySQL, it corresponds to the field name in the MySQL table
    - required:optional
    - type:List
    - defaults:none
    - Note: the specific information and attribute description of the field need to be specified:
    - name:name of column
    - type:type of column.It can be different from the type in the database. The program will make a type conversion
    - format:If the field is a time string, you can specify the format of the time and convert the type to the date format to return
    - example:
`
"column": [{
    "name": "col",
    "type": "datetime",
    "format": "yyyy-MM-dd hh:mm:ss"
  }]
`
### 4.2、SQL

For details,please refer to:[kafka-connector](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/kafka.html)

-  **connector**
    - description:kafka-x
    - required:required
    - type:String
    - defaults:none
-  **topic**
    - description:The name of the topic from which to read data when the table is used as a source. It also supports the topic list of the source by separating topics with semicolons, such as' topic-1; topic-2'. Note that only one of "topic pattern" and "topic" can be specified for the source. When a table is used as a receiver, the subject name is the subject to write data to. The receiver does not support attention topic lists.
    - required:required
    - type:String
    - defaults:none
-  **topic-pattern**
    - description:The regular expression of the topic name pattern to read from. When the job starts running, the consumer will subscribe to all topics whose names match the specified regular expression. Note that only one of "topic pattern" and "topic" can be specified for the source.
    - required:optional
    - type:String
    - defaults:none
-  **properties.bootstrap.servers**
    - description:Comma separated list of Kafka agents.
    - required:required
    - type:String
    - defaults:none
-  **properties.group.id**
    - description:The consumption group id of Kafka source. Kafka sink is optional.
    - required:required by source
    - type:String
    - defaults:none
-  **properties.***
    - description:This allows you to set and pass any Kafka configuration. Suffix name must be the same as [in Kafka configuration document]( https://kafka.apache.org/documentation/#configuration ) the defined configuration keys match. Flink will delete the properties. Key prefix and pass the converted key and value to the underlying kafkaclient. For example, you can create 'properties. Properties' by disabling automatic themes allow. auto. create. topics' = 'false'。 However, some configurations do not support settings because Flink will overwrite them.
    - required:optional
    - type:String
    - defaults:none
-  **format**
    - description:The format of the value part used to deserialize and serialize Kafka messages. For more details and [format]( https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/ ) options, see the format page. Note: this option is either 'value' The 'format' option is required.
    - required:required
    - type:String
    - defaults:none
-  **key.format**
    - description:The format used to deserialize and serialize key parts of Kafka messages. For more details and [format]( https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/ ) options, see the format page. If the key format is defined, note: 'if the key format is defined The 'fields' option is also required. Otherwise, the Kafka record will have an empty key.
    - required:optional
    - type:String
    - defaults:none
-  **key.fields**
    - description:Defines an explicit list of physical columns in the table schema, which is used to configure the data type of key format. By default, this list is empty, so no keys are defined. The list should look like 'field1; field2'。
    - required:optional
    - type:List
    - defaults:none
-  **key.fields-prefix**
    - description:Define custom prefixes for all fields in key format to avoid name conflicts with fields in value format. By default, the prefix is empty. If a custom prefix is defined, the table schema and "key.fields" will use the prefix name. When constructing the data type of the key format, the prefix is removed and the non prefix name is used in the key format.Please note that this option requires that "value.fields-include" must be set to "EXCEPT_KEY".
    - required:optional
    - type:String
    - defaults:none
-  **value.format**
    - description:The format of the value part used to deserialize and serialize Kafka messages. For more details and more formatting options, see the formatting page. Note: this option or 'format' [option](https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/) are required.
    - required:required
    - type:String
    - defaults:none
-  **value.fields-include**
    - description:Defines policies for how to handle key columns in data types in value format. By default, the physical columns of the 'all' table schema will be included in the value format, which means that the key columns appear in the data types of the key and value formats
    - required:optional
    - type:enumeration
        - optional:[ALL, EXCEPT_KEY]
    - defaults:ALL
-  **scan.startup.mode**
    - description:The starting mode of Kafka consumption. The valid values are 'early-offset', 'latest-offset', 'group-offsets',' timestamp 'and' specific-offsets'. For more details, see [start reading location](https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/kafka.html#start-reading-position). In the upsert mode, this parameter does not take effect, and the dead write is consumed from the early offset.
    - required:optional
    - type:String
    - defaults:group-offsets
-  **scan.startup.specific-offsets**
    - description:Specify an offset for each partition in 'specific-offsets' startup mode, for example 'partition:0,offset:42;partition:1,offset:300'.
    - required:optional
    - type:String
    - defaults:none
-  **scan.startup.timestamp-millis**
    - description:Starts with the specified era timestamp (in milliseconds) used in 'timestamp' startup mode.
    - required:optional
    - type:Long
    - defaults:none
-  **scan.topic-partition-discovery.interval**
    - description:Consumers regularly discover the time interval of dynamically created Kafka themes and partitions.
    - required:optional
    - type:Duration
    - defaults:none
-  **sink.partitioner**
    - description:Output partition from Flink partition to Kafka partition.
    - default:Use Kafka default partition to partition records.
    - fixed:Each Flink partition eventually contains at most one Kafka partition.
    - round-robin:A Flink partition is distributed to the Kafka partition sticky loop. It is only valid if the key of the record is not specified.
    - custom FlinkKafkaPartitioner child class:for example 'org.mycompany.MyPartitioner'.
    - For more details, see [receiver zoning](https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/kafka.html#sink-partitioning).
    - required:optional
    - type:String
    - defaults:default
-  **scan.parallelism**
    - description:Defines the parallelism of the Kafka sink operator. By default, the parallelism is determined by the framework using the same parallelism as the upstream chained operator.
    - required:optional
    - type:Integer
    - defaults:none

## 5、Data type

|   support   | BOOLEAN、TINYINT、SMALLINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL、STRING、VARCHAR、CHAR、TIMESTAMP、DATE、BINARY、ARRAY、MAP、STRUCT、LIST、ROW |
|:-----------:|:----------------------------------------------------------------------------------------------------------------------------:|
| not support |                                                            others                                                            |


## 6. Example

The details are in flinkx-examples dir.
