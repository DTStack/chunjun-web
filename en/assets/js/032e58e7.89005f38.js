"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[640],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return s}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=o(a),s=l,N=c["".concat(u,".").concat(s)]||c[s]||m[s]||r;return a?n.createElement(N,i(i({ref:t},k),{},{components:a})):n.createElement(N,i({ref:t},k))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},159:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],p={},u="Clickhouse Sink",o={unversionedId:"chunjunDocs/connectors/clickhouse/clickhouse-sink",id:"chunjunDocs/connectors/clickhouse/clickhouse-sink",title:"Clickhouse Sink",description:"1\u3001Introduce",source:"@site/docs/chunjunDocs/connectors/clickhouse/clickhouse-sink.md",sourceDirName:"chunjunDocs/connectors/clickhouse",slug:"/chunjunDocs/connectors/clickhouse/clickhouse-sink",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/clickhouse/clickhouse-sink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/clickhouse/clickhouse-sink.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Clickhouse Lookup",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/clickhouse/clickhouse-lookup"},next:{title:"Clickhouse Source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/clickhouse/clickhouse-source"}},k={},m=[{value:"1\u3001Introduce",id:"1introduce",level:2},{value:"2\u3001Version Support",id:"2version-support",level:2},{value:"3\u3001Connector name",id:"3connector-name",level:2},{value:"4\u3001Parameter description",id:"4parameter-description",level:2},{value:"1\u3001sync",id:"1sync",level:3},{value:"2\u3001sql",id:"2sql",level:3},{value:"5\u3001Data type",id:"5data-type",level:2},{value:"6\u3001Demo",id:"6demo",level:2}],c={toc:m};function s(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-sink"},"Clickhouse Sink"),(0,r.kt)("h2",{id:"1introduce"},"1\u3001Introduce"),(0,r.kt)("p",null,"clickhouse sink"),(0,r.kt)("h2",{id:"2version-support"},"2\u3001Version Support"),(0,r.kt)("p",null,"ClickHouse 19.x and above"),(0,r.kt)("h2",{id:"3connector-name"},"3\u3001Connector name"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SYNC"),(0,r.kt)("th",{parentName:"tr",align:null},"clickhousesink, clickhousewriter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse-x")))),(0,r.kt)("h2",{id:"4parameter-description"},"4\u3001Parameter description"),(0,r.kt)("h3",{id:"1sync"},"1\u3001sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"connection")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:param for Database connection,including jdbcUrl\u3001schema\u3001table and so on"),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:List"),(0,r.kt)("li",{parentName:"ul"},"Default:none")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"connection": [{\n   "jdbcUrl": ["jdbc:clickhouse://localhost:8123/default"],\n     "schema": "public",\n   "table": ["table"]\n  }]\n')),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"jdbcUrl")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:jdbc url,See for details",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"clickhouse-jdbc")),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:string"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"schema")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:Database schema"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:string"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"table")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: clickhouse table name, only support one table in a single work at the moment."),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:List"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"username")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: username"),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"password")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: password"),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"column")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Description:the fields to be written to the destination table,which is separated by English commas.for example: "column": ','["id","name","age"]'),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:List"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"fullcolumn")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Description:All fields in the destination table ,which is separated by English commas.for example: "column": ','["id","name","age","hobby"]',",if not configured, it will be obtained in the system table"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:List"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"preSql")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:the sql executed  before writing data into the destination table"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:List"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"postSql")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:the sql executed  after writing data into the destination table"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:List"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"writeMode")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:the mode of  writing data, insert into or merge into"),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"All options:insert"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:insert",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"batchSize")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:The number of records submitted in batch at one time. This value can greatly reduce the number of network interactions between flinkx and the database and improve the overall throughput,Setting this value too large may cause the flinkx process to run oom"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:int"),(0,r.kt)("li",{parentName:"ul"},"Default:1024",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"semantic")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:sink operator support phase two commit"),(0,r.kt)("li",{parentName:"ul"},"attention:\n-If this parameter is blank, phase two commit is not enabled by default,which means sink operators do not support exactly-once semantics\n-Currently only supported exactly-once and at-least-once"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:String",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'for example:"semantic": "exactly-once"'))),(0,r.kt)("li",{parentName:"ul"},"Default:at-least-once")))),(0,r.kt)("h3",{id:"2sql"},"2\u3001sql"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"connector")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aclickhouse-x"),(0,r.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"url")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:jdbc:clickhouse://localhost:8123/default"),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"schema")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:Database schema"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:string"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"table-name")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: table name"),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:none:",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"username")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:username"),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"password")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:password"),(0,r.kt)("li",{parentName:"ul"},"Required:required"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.buffer-flush.max-rows")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:Number of data pieces written in batch"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:1024",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.buffer-flush.interval")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:Batch write interval,Unit: ms"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:10000",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.all-replace")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: whether to replace all data in the database"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:false",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.parallelism")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:the parallelism of sink operator"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:String"),(0,r.kt)("li",{parentName:"ul"},"Default:none",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.semantic")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:sink operator support phase two commit"),(0,r.kt)("li",{parentName:"ul"},"attention:\n-If this parameter is blank, phase two commit is not enabled by default,which means sink operators do not support exactly-once semantics;\n-Currently only supported exactly-once and at-least-once"),(0,r.kt)("li",{parentName:"ul"},"Required:optional"),(0,r.kt)("li",{parentName:"ul"},"Type:String",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'for example:"semantic": "exactly-once"'))),(0,r.kt)("li",{parentName:"ul"},"Default:at-least-once",(0,r.kt)("br",null))))),(0,r.kt)("h2",{id:"5data-type"},"5\u3001Data type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"supported"),(0,r.kt)("th",{parentName:"tr",align:null},"data type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001FLOAT\u3001DOUBLE\u3001DECIMAL\u3001STRING\u3001VARCHAR\u3001TIMESTAMP\u3001DATE\u3001BINARY\u3001NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY\u3001MAP\u3001STRUCT\u3001UNION")))),(0,r.kt)("h2",{id:"6demo"},"6\u3001Demo"),(0,r.kt)("p",null,"see details in ",(0,r.kt)("inlineCode",{parentName:"p"},"flinkx-examples")," dir of project flinkx."))}s.isMDXComponent=!0}}]);