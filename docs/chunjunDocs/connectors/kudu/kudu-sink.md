# Kudu Sink

## 1、Introduce

kudu sink

## 2、Version support

Kudu 1.14.0

## 3、Plugin name

| Sync | kudusink、kuduwriter |
| --- | --- |
| SQL | kudu-x |

## 4、Param description

### 4.1、Sync

- **masters**
    - Description：kudu server ip and ports.
    - Requited：requited
    - Type：string
    - Default：none
      

- **table**
    - Description：kudu table name.
    - Requited：requited
    - Type：string
    - Default：none
      

- **column**
    - Description：Fields to read.
    - Note:
        - name：column name
        - type：column type，Can be different from the field type in the database, the program will do a type conversion
    - Requited：requited
    - Type：List
    - Default：none

- **flushMode**
    - Description：flushMode of Kudu session when writing to kudu.
    - Requited：optional
    - Default：AUTO_FLUSH_SYNC
  

- **writeMode**
    - Description：Write mode, optional values are insert, update, upsert, append.
    - Requited：optional
    - Type：string  
    - Default：append
      

- **maxBufferSize**
    - Description：The maximum number of cached data in the kudu client.
    - Note：When the number of data items cached in the buffer in the kudu session is greater than maxBufferSize, the kudu session will throw a "Buffer too big" exception. This exception will not affect the actual writing of the data in the buffer.
    - Requited：optional
    - Default：1024
      

- **flushInterval**
    - Description：Flush time for batch writes to kudu.
    - Requited：optional
    - Default：10000ms
      

- **workerCount**
    - Description：number of kudu worker
    - Requited：optional
    - Default：2
      

- **operationTimeout**
    - Description：kudu operation timeout
    - Requited：optional
    - Default：30 * 1000（30s）
      

- **adminOperationTimeout**
    - Description：admin operation timeout
    - Requited：optional
    - Default：30 * 1000（30s）
      

- **queryTimeout**
    - Description：query operation timeout
    - Requited：optional
    - Default：30 * 1000（30s）
      

### 4.2、SQL

- **connector**
    - Description：kudu-x
    - Requited：requited
    - Type：string
    - Default：none
      

- **masters**
    - Description：localhost:7051
    - Requited：requited
    - Type：string
    - Default：none
      

- **table-name**
    - Description：table-name
    - Requited：requited
    - Type：string
    - Default：none
      

- **session.flush-mode**
    - Description：flushMode of Kudu session when writing to kudu.
    - Requited：optional
    - Type：string
    - Default：AUTO_FLUSH_SYNC
      

- **session.mutation-buffer-space**
    - Description：The maximum number of cached data in the kudu client.
    - Note：When the number of data items cached in the buffer in the kudu session is greater than maxBufferSize, the kudu session will throw a "Buffer too big" exception. This exception will not affect the actual writing of the data in the buffer.
    - Requited：optional
    - Type：int
    - Default：1024
      

- **sink.buffer-flush.interval**
    - Description：Flush time for batch writes to kudu.
    - Requited：optional
    - Type：int 
    - Default：10000ms
  
  
- **sink.buffer-flush.max-rows**
    - Description：The maximum amount of data that can be written to kudu in batches.
    - Requited：optional
    - Type：int
    - Default：1024
  
  
- **sink.write-mode**
    - Description：write mode, optional values insert, update, upsert.
    - Requited：optional
    - Type：string
    - Default：insert
  
  
- **client.worker-count**
    - Description：number of kudu worker
    - Requited：optional
    - Type：int
    - Default：2
      

- **client.default-operation-timeout-ms**
    - Description：kudu operation timeout
    - Requited：optional
    - Type：int
    - Default：30 * 1000（30s）
      

- **client.default-admin-operation-timeout-ms**
    - Description：admin operation timeout
    - Requited：optional
    - Type：int
    - Default：30 * 1000（30s）
      

- **scan.query-timeout**
    - Description：query operation timeout
    - Requited：optional
    - Type：int
    - Default：30 * 1000（30s）
      

- **sink.parallelism**
    - Description：sink parallelism.
    - Requited：optional
    - Type：string
    - Default：none


## 5、Data type

|SUPPORTED | DATA TYPE |
| --- | --- |
| YES |INT8、BYTE、INT16、SHORT、INT32、INT、INT64、LONG、FLOAT、DOUBLE、BOOLEAN、STRING、VARCHAR、DECIMAL、TIMESTAMP、DATE、TIME、BINARY|
| NO | ARRAY、MAP、STRUCT、UNION |

## 6、Sample demo

See the 'demo' folder in the 'flinkx-examples' module of the project.
