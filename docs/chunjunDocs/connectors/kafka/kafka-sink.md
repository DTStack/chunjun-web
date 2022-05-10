# Kafka Sink
## 1. Introduce
Kafka Sink


## 2. Version Support
Kafka mainstream version


## 3. Connector Name
There are four versions of the kafka plugin, and the plugin names are slightly different depending on the kafka version. The specific corresponding relationship is shown in the following table

|    Sync     | kafkasink、kafkawriter |
|:-----------:|:---------------------:|
|     SQL     |        kafka-x        |
| SQL(upsert) |    upsert-kafka-x     |


## 4. Parameter description
#### 4.1 Sync
- **topic**
    - description:Topic to produce, multiple topics are not supported.
    - required:required
    - type:String
    - defaults:none

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

- **tableFields**
    - description:Field mapping configuration. The data passed from the reader plug-in to the writer plug-in only contains its value attribute. After configuring this parameter, it can be restored to the JSON string output of key value pair type.
    - note:
        - If the attribute is configured, the number of fields in the configuration must not be less than the number of fields read in the reader plugin, otherwise the configuration will be invalid;
        - The mapping relationship is matched according to the sequence of fields in the configuration;
    - required:optional
    - type:String[]
    - defaults:none


### 4.2、SQL

For details,please refer to:[kafka-connector](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/kafka.html)

-  **connector**
    - description:kafka-x
    - required:required
    - type:String
    - defaults:none
-  **topic**
    - description:The name of the topic from which to read data when the table is used as a source. It also supports the topic list of the source by separating topics with semicolons, such as' topic-1; topic-2'. Note that only one of "topic-pattern" and "topic" can be specified for the source. When a table is used as a receiver, the subject name is the subject to write data to. The receiver does not support attention topic lists.
    - required:required
    - type:String
    - defaults:none
-  **topic-pattern**
    - description:The regular expression of the topic name pattern to read from. When the job starts running, the consumer will subscribe to all topics whose names match the specified regular expression. Note that only one of "topic-pattern" and "topic" can be specified for the source.
    - required:optional
    - type:String
    - defaults:none
-  **properties.bootstrap.servers**
    - description:Comma separated list of Kafka agents.
    - required:required
    - type:String
    - defaults:none
-  **properties.group.id**
    - description:The consumption group ID of Kafka source. Kafka sink is optional.
    - required:required by source
    - type:String
    - defaults:none
-  **properties.***
    - description:This allows you to set and pass any Kafka configuration.The suffix name must match the configuration key defined in [Kafka configuration document](https://kafka.apache.org/documentation/#configuration).Key prefix and pass the converted key and value to the underlying KafkaClient.
    - required:optional
    - type:String
    - defaults:none
-  **format**
    - description:The format of the value part used to deserialize and serialize Kafka messages.For more details and [format](https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/),See the format page. Note: this option is either 'value.format' option is required.
    - required:required
    - type:String
    - defaults:none
-  **key.format**
    - description:The format used to deserialize and serialize key parts of Kafka messages.For more details and [format](https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/),See the format page. Note: If the key format is defined, 'key.fields' option is also required. Otherwise, the Kafka record will have an empty key.
    - required:optional
    - type:String
    - defaults:none
-  **key.fields**
    - description:Defines an explicit list of physical columns in the table schema, which is used to configure the data type of key format.By default, this list is empty, so no keys are defined.The list should be as follows 'field1;field2'。
    - required:optional
    - type:List
    - defaults:none
-  **key.fields-prefix**
    - description:The list should define custom prefixes for all fields in key format as shown below to avoid name conflicts with fields in value format.By default, the prefix is empty. If a custom prefix is defined, the table schema and "key.fields" will use the prefix name. When constructing the data type of the key format, the prefix is removed and the non prefix name is used in the key format.Please note that this option requires that "value.fields-include" must be set to "EXCEPT_KEY".
    - required:optional
    - type:String
    - defaults:none
-  **value.format**
    - description:The format of the value part used to deserialize and serialize Kafka messages.For more details and more formatting options, see the formatting page.Note: this option or 'format' [option](https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/) are both required.
    - required:required
    - type:String
    - defaults:none
-  **value.fields-include**
    - description:Defines policies for how to handle key columns in data types in value format. By default, the physical columns of the 'ALL' table schema will be included in the value format, which means that the key columns appear in the data types of the key and value formats
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
-  **sink.semantic**
    - description:Define the delivery semantics of the Kafka receiver.Valid enumerations are 'at-least-once','exactly-once' and 'none'.For more details, see[Consistency assurance](https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/kafka.html#consistency-guarantees)。
    - required:optional
    - type:String
    - defaults:at-least-once
-  **sink.parallelism**
    - description:Defines the parallelism of the Kafka sink operator. By default, the parallelism is determined by the framework using the same parallelism as the upstream chained operator.
    - required:optional
    - type:Integer
    - defaults:none

## 5、Data type
| support  | BOOLEAN、TINYINT、SMALLINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL、STRING、VARCHAR、CHAR、TIMESTAMP、DATE、BINARY、ARRAY、MAP、STRUCT、LIST、ROW |
|-----|:----------------------------------------------------------------------------------------------------------------------------:|
| not support |                                                            others                                                            |


## 6. Example

The details are in flinkx-examples dir.