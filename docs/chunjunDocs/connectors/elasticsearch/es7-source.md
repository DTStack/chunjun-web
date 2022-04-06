# ElasticSearch Source

## 1、Introduce

The ElasticSearch Source plugin supports reading data from an existing ElasticSearch cluster in a specified index.

## 2、Version support 

Elasticsearch 7.x

## 3、Plugin name

| type|name|
| ---- | ----|
| Sync | elasticsearch7reader |
| SQL | elasticsearch7-x |

## 4、Param description

### 4.1、Sync

- **hosts**
   - Description：One or more Elasticsearch hosts to connect to。eg: "localhost:9200".
   - Required：required
   - Type：List
   - Default：none
  

- **index**
   - Description：Elasticsearch index for every record. 
   - Required：required
   - Type：String
   - Default：none
  

- **username**
   - Description：User name after basic authentication is enabled. Please notice that Elasticsearch doesn't pre-bundled security feature, but you can enable it by following the guideline to secure an Elasticsearch cluster.
   - Required：optional
   - Type：String
   - Default：none
  

- **password**
   - Description：Password used to connect to Elasticsearch instance. If username is configured, this option must be configured with non-empty string as well.
   - Required：optional
   - Type：String
   - Default：none
  

- **batchSize**
   - Description：Number of data pieces written in batches
   - Required：optional
   - Type：Integer
   - Default：1
  

- **column**
   - Description：Columns to be synchronized
   - note：'*' is not supported.
   - format:
    ```
      "column": [{
        "name": "col", -- Column name, which can be found in a multi-level format
        "type": "string", -- Column type, when name is not specified, returns a constant column with the value specified by value
        "value": "value" -- Constant column value
      }]
    ```

- **connectTimeout**
    - Description：Elasticsearch client max connect timeout.
    - Required：optional
    - Type：Integer
    - Default：5000
  

- **socketTimeout**
    - Description：Elasticsearch client max socket timeout.
    - Required：optional
    - Type：Integer
    - Default：1800000
  

- **keepAliveTime**
    - Description：Elasticsearch client connection max keepAlive time.
    - Required：optional
    - Type：Integer
    - Default：5000
  

- **requestTimeout**
    - Description：Elasticsearch client connection max request timeout.
    - Required：optional
    - Type：Integer
    - Default：2000
  

- **maxConnPerRoute**
    - Description：Elasticsearch client connection assigns maximum connection per route value.
    - Required：optional
    - Type：Integer
    - Default：10


- **sslConfig**
   - Description: Configuration items required to enable ssl connection authentication.
     - useLocalFile：whether to use local files.
     - fileName：File name, when using a local file, the file path is: filePath/fileName, when using sftp, the file path is: path/fileName.
     - filePath：The parent directory where the file is located.
     - keyStorePass：Use the password of the certificate file, the password specified when the certificate file is generated, if not, no configuration is required.
     - type：Certificate type, currently supports two types of certificate files: ca (ca.crt) and pkcs12 (xxx.p12). Optional value: ca/pkcs12
     - sftpConf：sftp configuration
   - Required：optional
   - Type：Map
   - Default：none
    ```
    "sslConfig": {
      "useLocalFile":false,
      "fileName":"ca.crt",
      "filePath":"/Users/edy/Downloads",
      "keyStorePass":"",
      "type":"ca",
      "sftpConf": {
        "path":"/data/sftp/ssl",
        "password":"dtstack",
        "port":"22",
        "auth":"1",
        "host":"127.0.0.1",
        "username":"root"
      }
    }
    ``` 

### 4.2、SQL

- **hosts**
   - Description：One or more Elasticsearch hosts to connect to。eg: "localhost:9200", Multiple addresses are delimited by semicolons.
   - Required：required
   - Type：List
   - Default：none
  

- **index**
   - Description：Elasticsearch index for every record. 
   - Required：required
   - Type：String
   - Default：none
  

- **username**
   - Description：User name after basic authentication is enabled. Please notice that Elasticsearch doesn't pre-bundled security feature, but you can enable it by following the guideline to secure an Elasticsearch cluster.
   - Required：optional
   - Type：String
   - Default：none
  

- **password**
   - Description：Password used to connect to Elasticsearch instance. If username is configured, this option must be configured with non-empty string as well.
   - Required：optional
   - Type：String
   - Default：none
  

- **sink.bulk-flush.max-actions**
   - Description：Maximum number of actions to buffer for each bulk request.
   - Required：optinal
   - Type：Integer
   - Default：1000
  

- **client.connect-timeout**
    - Description：Elasticsearch client max connect timeout.
    - Required：optional
    - Type：Integer
    - Default：5000
  

- **client.socket-timeout**
    - Description：Elasticsearch client max socket timeout.
    - Required：optional
    - Type：Integer
    - Default：1800000
  

- **client.keep-alive-time**
    - Description：Elasticsearch client connection max keepAlive time.
    - Required：optional
    - Type：Integer
    - Default：5000
  

- **client.request-timeout**
    - Description：Elasticsearch client connection max request timeout.
    - Required：optional
    - Type：Integer
    - Default：2000
  

- **client.max-connection-per-route**
    - Description：Elasticsearch client connection assigns maximum connection per route value.
    - Required：optional
    - Type：Integer
    - Default：10
  

- **security.ssl-keystore-file**
  - Description：ssl keystore authentication file name
  - Required: optional
  - Type：String
  - Default：none



- **security.ssl-keystore-password**
  - Description：ssl keystore authentication file password, if present
  - Required：optional
  - Type：String
  - Default：none



- **security.ssl-type**
  - Description：Certificate type, currently supports two types of certificate files: ca (ca.crt) and pkcs12 (xxx.p12). Optional value: ca/pkcs12
  - Required：optional
  - Type：String
  - Default：none


## 5、Data type

|SUPPORTED | DATA TYPE |
| --- | --- |
| YES |INTEGER,FLOAT,DOUBLE,LONG,DATE,TEXT,BYTE,BINARY,OBJECT,NESTED|
| NO | IP,GEO_POINT,GEO_SHAPE|

## 6、Sample demo

See the 'demo' folder in the 'flinkx-examples' module of the project.
