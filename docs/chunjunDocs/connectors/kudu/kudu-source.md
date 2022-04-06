# Kudu Source

## 1、Introduce

Kudu source plugin supports reading kudu data.

## 2、Version support

Kudu 1.14.0

## 3、Plugin name

| type|name|
| ---- | ----|
| Sync | kudureader |
| SQL | kudu-x |

## 4、Param description

### 4.1、Sync

- **masters**
  - Description：kudu server ip and ports.
  - Required：required
  - Type：string
  - Default：none


- **table**
  - Description：kudu table name
  - Required：required
  - Type：string
  - Default：none


- **workerCount**
  - Description：the number of kudu worker.
  - Required：optional
  - Type：int
  - Default：2


- **operationTimeout**
  - Description：kudu operation timeout
  - Required：optional
  - Type：int
  - Default：30 * 1000（30s）


- **adminOperationTimeout**
  - Description：admin operation timeout
  - Requited：optional
  - Type：int
  - Default：30 * 1000（30s）


- **queryTimeout**
  - Description：query operation timeout
  - Requited：optional
  - Type：int
  - Default：30 * 1000（30s）


- **column**
  - Description：fields to read.
  - Note:
    - name：column name
    - type：column type
  - Requited：requited
  - Type：List
  - Default：


- **readMode**
  - Description: kudu read mode.
  - Note:
    - READ_LATEST Default read mode In this mode, the server will always return committed writes when requested. This type of read does not return a snapshot timestamp and is not repeatable. In ACID terms, it corresponds to isolation mode: "read committed"

    - READ_AT_SNAPSHOT In this mode, the server will attempt to perform a read at the provided timestamp. If no timestamp is provided, the server uses the current time as the snapshot timestamp. In this mode, reads are repeatable, i.e. all future reads with the same timestamp will produce the same data.
      The cost of doing this is waiting for an ongoing transaction with a timestamp less than the snapshot's timestamp, thus potentially incurring a latency penalty. In ACID terms, this is itself equivalent to the isolation mode "repeatable read".
      If all writes to the scanned tablet are externally consistent, this corresponds to the isolation mode "strictly serializable". NOTE: There are currently "holes", which occur under rare edge conditions, through which they are sometimes inconsistent externally even when steps are taken to make writes so.
      In these cases, isolation may degenerate into "read committed" mode.

    - READ_YOUR_WRITES not support yet.
  - Requited：optional
  - Type：String
  - Default：READ_AT_SNAPSHOT


- **batchSizeBytes**
  - Description：The maximum number of bytes returned by scanner in each batch.
  - Requited：optional
  - Type：int
  - Default：0


- **filter**
  - Description：The filter condition is in json format. This configuration type is used to limit the range of kudu data returned. For the syntax, please refer to [kudu query syntax](https://docs.kudu.com/manual/crud/#read-operations)
  - Requited：optional
  - Type：String
  - Default：none

### 4.2、SQL

- **masters**
  - Description：kudu server ip and ports.
  - Requited：requited
  - Type：string
  - Default：none


- **table-name**
  - Description：kudu table name
  - Requited：requited
  - Type：string
  - Default：none


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


- **scan-token.query-timeout**
  - Description：query operation timeout
  - Requited：optional
  - Type：int
  - Default：30 * 1000（30s）


## 5、Data type

|SUPPORTED | DATA TYPE |
| --- | --- |
| YES |INT8、BYTE、INT16、SHORT、INT32、INT、INT64、LONG、FLOAT、DOUBLE、BOOLEAN、STRING、VARCHAR、DECIMAL、TIMESTAMP、DATE、TIME、BINARY|
| NO | ARRAY、MAP、STRUCT、UNION |

## 6、Sample demo

See the 'demo' folder in the 'flinkx-examples' module of the project.
