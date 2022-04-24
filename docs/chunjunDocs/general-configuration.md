# ChunJun generic configuration

## Configuration file structure details

A conplete ChunJun configuration script  includes two parts

- Content
    - Content Indicates the input source and output source of a task, including reader and writer
- Setting
    - Setting sets the overall environment Settings of a task, including speed, errorLimit, metricPluginConf, restore, log, and dirty

The overall structure is as follows:

```JSON
{
	"job" : {
		"content" :[{
    	"reader" : {},
    	"writer" : {}
    }],
    "setting" : {
      "speed" : {},
      "errorLimit" : {},
      "metricPluginConf" : {},
      "restore" : {},
      "log" : {},
      "dirty":{}
    }
	}
}
```



<table>
	<tr>
		<td colspan=2>Name</td>
		<td>Description</td>
		<td>Required</td>
	</tr>
	<tr>
		<td rowspan=2>content</td>
		<td>reader</td>
		<td>reader plugin detailed configuration</td>
		<td>required</td>
	</tr>
  <tr>
		<td>writer</td>
		<td>reader plugin detailed configuration</td>
		<td>required</td>
	</tr>
  <tr>
		<td rowspan=7>setting</td>
		<td>speed</td>
		<td>Rate limit</td>
		<td>optional</td>
	</tr>
  <tr>
    <td>errorLimit</td>
		<td>Dirty data tolerance control</td>
		<td>optional</td>
	</tr>
  <tr>
    <td>metricPluginConf</td>
		<td>metric plugin conf</td>
		<td>optional</td>
	</tr>
  <tr>
    <td>restore</td>
		<td>Task type and breakpoint continuation configuration</td>
		<td>optional</td>
	</tr>
  <tr>
    <td>log</td>
		<td>Log file configuration</td>
		<td>optional</td>
	</tr>
  <tr>
    <td>dirty</td>
		<td>Configure the dirty data storage mode</td>
		<td>optional</td>
	</tr>
</table>





## Content

### Reader

The Reader is used to configure the input source of the data, that is, where the data came from. The specific configuration is as follows:

```json
"reader" : {
  "name" : "xxreader",
  "parameter" : {
		......
  }
}
```

| name      | Description                                                  | Required |
| --------- | ------------------------------------------------------------ | -------- |
| name      | reader connector name. For details, see the documents of each data source | required |
| parameter | reader connector configuration parameters. For details, see the documents of each connector | required |

### Writer

```JSON
"writer" : {
  "name" : "xxwriter",
  "parameter" : {
		......
  }
}
```



| Name      | Description                                                  | Required |
| --------- | ------------------------------------------------------------ | -------- |
| name      | writer connector name. For details, see the documents of each data source | required |
| parameter | writer connector configuration parameters. For details, see the documents of each connector | required |

## Setting

### speed

Speed Is used to set the parallelism of  job and speed limit. The configuration is as follows：

```json
"speed" : {
  "channel": 1,
  "readerChannel": -1,
  "writerChannel": -1,
  "bytes": 0,
  "rebalance" : true
}
```



| Name          | Description                                                  | Required | Default | DataType |
| ------------- | ------------------------------------------------------------ | -------- | ------- |----------|
| channel       | parallelism of  job                                          | optional | 1       | Integer  |
| readerChannel | source  parallelism,-1 indicates that the <channal> value is used | optional | -1      | Integer  |
| writerChannel | source  parallelism,-1 indicates that the <channal> value is used | optional | -1      | Integer  |
| bytes         | Bytes >0 indicates that task limiting is enabled             | optional | 0       | Long     |
| rebalance     | Whether to force rebalance. Enabling this rebalance consumes performance | optional | false   | Boolean  |



### ErrorLimit

errorLimit used to configure error control for data reads and writes while the task is running. The specific configuration is as follows:

```json
"errorLimit" : {
  "record": 100,
  "percentage": 10.0
}
```

| Name       | Description                                                  | Required | Default | DataType |
| ---------- | ------------------------------------------------------------ | -------- | ------- |----------|
| record     | Error threshold. When the number of error records exceeds this threshold, the task fails | optional | 0       | Integer  |
| percentage | Error ratio threshold. When the error ratio exceeds this threshold, the task fails | optional | 0.0     | Double   |



### MetricPluginConf

MetricPluginConf is used to configure ChunJun metric reporter information.

Currently only applied in JDBC connectors, StartLocation and EndLocation metrics are sent to the specified data source at the end of the job.

Prometheus and Mysql are currently supported. The specific configuration is as follows:

#### Prometheus

PromethusReporter relies on pushGateway to interact with Prometheus

```json
"metricPluginConf" : {
  "pluginName": "promethus"
}
```

Configuration information about Prometheus needs to be configured in the flink-conf.yaml

```yaml
metrics.reporter.promgateway.host: 127.0.0.1 
metrics.reporter.promgateway.port: 9091
metrics.reporter.promgateway.jobName: testjob
metrics.reporter.promgateway.randomJobNameSuffix: true
metrics.reporter.promgateway.deleteOnShutdown: false
```

| Name                                             | Description                                                  | Required | Default |
| ------------------------------------------------ | ------------------------------------------------------------ | -------- | ------- |
| metrics.reporter.promgateway.host                | pushGateway host                                             | required | none    |
| metrics.reporter.promgateway.port                | pushGateway port                                             | required | 0       |
| metrics.reporter.promgateway.jobName             | jobname                                                      | optional | none    |
| metrics.reporter.promgateway.randomJobNameSuffix | Whether to add a random suffix to the job name to prevent job name duplication | optional | false   |
| metrics.reporter.promgateway.deleteOnShutdown    | Whether to delete indicator information after the job is complete | optional | true    |



#### Mysql

The target table must have at least two String fields, metric_name and metric_value, which record indicator name and indicator value respectively

```json
"metricPluginConf" : {
  "pluginName": "promethus"
  "pluginProp": {
    "jdbcUrl":"",
  	"database":"",
  	"table":"",
  	"username":"",
  	"password":"",
  	"properties":{
    }
  }
}
```

| Name       | Description            | Required | Default | DataType |
| ---------- | ---------------------- | -------- | ------- | -------- |
| jdbcUrl    | mysql jdbc             | required | none    | String   |
| table      | mysql tablename        | required | none    | String   |
| username   | mysql username         | required | none    | String   |
| password   | mysql password         | required | none    | String   |
| properties | mysql extra properties | optional | none    | Map      |



### Restore

Restore Configures the synchronization task type (offline synchronization and real-time collection) and the flink restart strategy. The specific configuration is as follows:

```json
"restore" : {
  "isStream" : false,
  "isRestore" : false,
  "restoreColumnName" : "",
  "restoreColumnIndex" : 0
}
```



| Name               | Description                                             | Required | Default | DataType |
| ------------------ | ------------------------------------------------------- | -------- | ------- | -------- |
| isStream           | Whether it is a real-time collection task               | optional | false   | Boolean  |
| isRestore          | Whether to enable resumable data transfer at breakpoint | optional | false   | Boolean  |
| restoreColumnName  | Resumable field name                                    | required | none    | String   |
| restoreColumnIndex | Index of the breakpoint resume field                    | required | none    | Integer  |



### Log

LogConf used to configure ChunJun log file，The details as follows:



```json
"log" : {
  "isLogger": false,
  "level" : "info",
  "path" : "/tmp/dtstack/flinkx/",
  "pattern":""
}
```

| Name    | Description                        | Required | Default                                                      | DataType |
| ------- | ---------------------------------- | -------- | ------------------------------------------------------------ | -------- |
| Logger  | Whether to save log records        | optional | false                                                        | Boolean  |
| level   | Log level                          | optional | info                                                         | String   |
| path    | Path for saving logs on the server | optional | /tmp/dtstack/flinkx/                                         | String   |
| pattern | Log  format                        | optional | log4j：%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{60} %X{sourceThread} - %msg%n<br />logback : %d{yyyy-MM-dd HH:mm:ss,SSS} %-5p %-60c %x - %m%n | String   |

### Dirty

Dirty is used to configure the storage of dirty data in the HDFS. It is usually used in conjunction with ErrorLimit. The configuration is as follows:

```json
"dirty" : {
"path" : "xxx",
"hadoopConfig" : {
......
}
}
```

| Name         | Description                | Required | Default | DataType |
| ------------ | -------------------------- | -------- | ------- | -------- |
| path         | Path for saving dirty data | required | none    | Sring    |
| hadoopConfig | Hadoop Configuration       | required | none    | Map      |