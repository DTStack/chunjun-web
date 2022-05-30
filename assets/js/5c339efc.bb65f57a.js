"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[8503],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return s}});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=o(l),s=a,N=m["".concat(p,".").concat(s)]||m[s]||k[s]||r;return l?n.createElement(N,u(u({ref:t},c),{},{components:l})):n.createElement(N,u({ref:t},c))}));function s(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,u=new Array(r);u[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var o=2;o<r;o++)u[o]=l[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8616:function(e,t,l){l.r(t),l.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return k}});var n=l(7462),a=l(3366),r=(l(7294),l(3905)),u=["components"],i={},p="ElasticSearch Lookup",o={unversionedId:"chunjunDocs/connectors/elasticsearch/es7-lookup",id:"chunjunDocs/connectors/elasticsearch/es7-lookup",title:"ElasticSearch Lookup",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/elasticsearch/es7-lookup.md",sourceDirName:"chunjunDocs/connectors/elasticsearch",slug:"/chunjunDocs/connectors/elasticsearch/es7-lookup",permalink:"/chunjun-web/docs/chunjunDocs/connectors/elasticsearch/es7-lookup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/elasticsearch/es7-lookup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Doris batch Sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/doris/dorisbatch-sink"},next:{title:"ElasticSearch Sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/elasticsearch/es7-sink"}},c={},k=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001SQL",id:"1sql",level:3},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"\u516d\u3001\u811a\u672c\u793a\u4f8b",id:"\u516d\u811a\u672c\u793a\u4f8b",level:2}],m={toc:k};function s(e){var t=e.components,l=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elasticsearch-lookup"},"ElasticSearch Lookup"),(0,r.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,r.kt)("p",null,"ElasticSearch Lookup\u63d2\u4ef6\u652f\u6301\u4ece\u73b0\u6709\u7684ElasticSearch\u96c6\u7fa4\u8bfb\u53d6\u6307\u5b9aindex\u4e2d\u7684\u6570\u636e\uff0c\u5e76\u4f5c\u4e3a\u7ef4\u8868\u8fdb\u884c\u4e0e\u4e3b\u8868\u8fdb\u884c\u5173\u8054\u3002\u76ee\u524d\u7ef4\u8868\u652f\u6301\u5168\u91cf\u7ef4\u8868\u548c\u5f02\u6b65\u7ef4\u8868\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,r.kt)("p",null,"Elasticsearch 7.x"),(0,r.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch7-x")))),(0,r.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"1sql"},"1\u3001SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hosts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u63cf\u8ff0\uff1aElasticsearch\u96c6\u7fa4\u7684\u8fde\u63a5\u5730\u5740\u3002eg: "localhost:9200"\uff0c\u591a\u4e2a\u5730\u5740\u7528\u5206\u53f7\u4f5c\u4e3a\u5206\u9694\u7b26\u3002'),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6307\u5b9a\u8bbf\u95eeElasticsearch\u96c6\u7fa4\u7684index\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f00\u542fbasic\u8ba4\u8bc1\u4e4b\u540e\u7684\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f00\u542fbasic\u8ba4\u8bc1\u4e4b\u540e\u7684\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.connect-timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aES Client\u6700\u5927\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a5000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.socket-timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aES Client\u6700\u5927socket\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1800000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.keep-alive-time"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aES Client\u4f1a\u8bdd\u6700\u5927\u4fdd\u6301\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a5000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.request-timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aES Client\u6700\u5927\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a2000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.max-connection-per-route"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u4e00\u4e2a\u8def\u7531\u503c\u7684\u6700\u5927\u8fde\u63a5\u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a10")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lookup.cache-type"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u7c7b\u578b\u3002eg: all \u6216\u8005 lru"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aLRU")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lookup.cache-period"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5168\u91cf\u7ef4\u8868\u5468\u671f\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aLong"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a3600 * 1000L")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lookup.cache.max-rows"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u7f13\u5b58\u7684\u6700\u5927\u6761\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aLong"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000L")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lookup.cache.ttl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7f13\u5b58\u751f\u547d\u5468\u671f"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aLong"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a60 * 1000L")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lookup.error-limit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u6570\u636e\u4e0d\u5408\u89c4\u6761\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aLong"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aLong.MAX_VALUE")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lookup.fetch-size"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6293\u53d6\u7ef4\u8868\u6570\u636e\u7684\u6761\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000L")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lookup.parallelism8"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u5e76\u884c\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1")))),(0,r.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u540d\u79f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER,FLOAT,DOUBLE,LONG,DATE,TEXT,BYTE,BINARY,OBJECT,NESTED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"IP,GEO_POINT,GEO_SHAPE")))),(0,r.kt)("h2",{id:"\u516d\u811a\u672c\u793a\u4f8b"},"\u516d\u3001\u811a\u672c\u793a\u4f8b"),(0,r.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,r.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}s.isMDXComponent=!0}}]);