# Doris batch Sink

## 1、Introduce
Doris batch Sink插件支持向Doris数据库写入数据

## 2、Version Support
Doris  0.14.x

## 3、Connector name
| Sync | dorisbatchsink、dorisbatchwriter |
| --- | --- |
| SQL |  |

## 4、Parameter description


### 1.Sync

- **feNodes**
  - Description：Connect to the Fe Nodes address of Doris
  - Required：required
  - Type：List
  - Default none
```json
"feNodes": ["127.0.0.1:8030"]
```
<br />


- **table**
  - Description: doris table name, only support one table in a single work at the moment.
  - Required:required
  - Type:List
  - Default:none


<br />

- **database**
  - Description:doris database schema
  - Required:optional
  - Type:string
  - Default:none
    <br />


<br />

- **username**
  - Description: user name
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


<br />


- **column**
  - Description:the fields to be written to the destination table,which is separated by English commas.for example: "column": ["id","name","age"]
  - Required:required
  - Type:List
  - Default:none
    <br />


<br />

- **fieldDelimiter**
  - Description：Writes the field separator for the Doris value
  - Required：optional
  - Type：String
  - Default：\t


<br />

- **lineDelimiter**
  - Description：Writes the line delimiter for the Doris value
  - Required：optional
  - Type：String
  - Default：\n


<br />

- **loadProperties**
  - Description：System parameters for Doris write task, mainly for Doris specific configuration
  - Required：optional
  - Type：Object
  - Default：none


<br />

- **batchSize**
  - Description：The amount of data written to Doris in batches
  - Required：optional
  - Type：int
  - Default：1000


<br />


## 5、Supported data type

| supported | data type                                                                                           |
|-----------|-----------------------------------------------------------------------------------------------------|
| yes       | BOOLEAN、TINYINT、SMALLINT、INT、BIGINT、LARGEINT、FLOAT、DOUBLE、DECIMAL、DATE、DATETIME、CHAR、VARCHAR、STRING |


## 6、Demo
see details in `flinkx-examples` dir of project flinkx.
