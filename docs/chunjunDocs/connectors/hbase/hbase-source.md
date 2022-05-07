# Hbase Source
## 1. Introduce
Hbase Source


## 2. Version Support
hbase1.4


## 3. Connector Name
| Sync | hbasesource、hbasereader |
| --- |-------------------------|
| SQL | hbase14-x               |



## 4. Parameter description
### 1、SYNC


- **table**
  - 描述：表名
  - 必选：是
  - 类型：String
  - 默认值：无


- **startRowkey**
  - 描述：rowKey起始点
  - 必选：否
  - 类型：String
  - 默认值：无



- **endRowkey**
  - 描述：rowKey结束点
  - 必选：否
  - 类型：String
  - 默认值：无



- **isBinaryRowkey**
  - 描述：rowkey是否是BytesBinary
  - 必选：否
  - 类型：Boolean
  - 默认值：false


- **scanCacheSize**
  - 描述：客户端rpc每次fetch最大行数
  - 必选：否
  - 类型：Long
  - 默认值：1000



- **encoding**
  - 描述：编码
  - 必选：否
  - 类型：string
  - 默认值：utf-8



- **hbaseConfig**
  - 描述：hbase-site里的相关配置 以及 kerberos相关配置
  - 必选：是
  - 类型：Map
  - 默认值：无



- **column**
  - 描述：需要读取的列族。
  - 属性说明:
    - name：字段名称
    - type：字段类型，可以和数据库里的字段类型不一样，程序会做一次类型转换
  - 必选：是
  - 字段类型：List
  - 默认值：无

### 2、SQL

- **connector**
  - 描述：hbase14-x
  - 必选：是
  - 参数类型：String
  - 默认值：无
    <br />


- **table-name**
  - 描述：表名
  - 必选：是
  - 参数类型：String
  - 默认值：无：
    <br />


- **zookeeper.znode.parent**
  - 描述：hbase在zk的路径
  - 必选：否
  - 参数类型：string
  - 默认值：/hbase
    <br />


- **zookeeper.quorum**
  - 描述：zk地址
  - 必选：是
  - 参数类型：String
  - 默认值：无
    <br />


- **null-string-literal**
  - 描述：空值字符串代替
  - 必选：否
  - 默认值："null"
    <br />



- **security.kerberos.principal**
  - 描述：kerberos的principal
  - 必选：否
  - 参数类型：String
  - 默认值：无
    <br />


- **security.kerberos.keytab**
  - 描述：kerberos的keytab文件路径
  - 必选：否
  - 参数类型：String
  - 默认值：无
    <br />



- **security.kerberos.krb5conf**
  - 描述：kdc的krb5conf配置文件
  - 必选：否
  - 参数类型：String
  - 默认值：无
    <br />


## 5. Data Type
| support | int |
| --- | --- |
|  | long |
|  | double |
|  | decimal |
|  | objectId |
|  | string |
|  | bindata |
|  | date |
|  | timestamp |
|  | bool |
| no support | array |

## 6. Example
The details are in flinkx-examples dir.
