"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[8252],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),o=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},m=function(t){var e=o(t.components);return r.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=o(n),c=l,s=N["".concat(i,".").concat(c)]||N[c]||k[c]||a;return n?r.createElement(s,u(u({ref:e},m),{},{components:n})):r.createElement(s,u({ref:e},m))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,u=new Array(a);u[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:l,u[1]=p;for(var o=2;o<a;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},7796:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),u=["components"],p={},i="Mysql Lookup",o={unversionedId:"chunjunDocs/connectors/mysql/mysql-lookup",id:"chunjunDocs/connectors/mysql/mysql-lookup",title:"Mysql Lookup",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/mysql/mysql-lookup.md",sourceDirName:"chunjunDocs/connectors/mysql",slug:"/chunjunDocs/connectors/mysql/mysql-lookup",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-lookup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/mysql/mysql-lookup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mongodb-source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mongodb/mongodb-source"},next:{title:"Mysql Sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-sink"}},m={},k=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"\u516d\u3001\u811a\u672c\u793a\u4f8b",id:"\u516d\u811a\u672c\u793a\u4f8b",level:2}],N={toc:k};function c(t){var e=t.components,n=(0,l.Z)(t,u);return(0,a.kt)("wrapper",(0,r.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-lookup"},"Mysql Lookup"),(0,a.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,a.kt)("p",null,"mysql\u7ef4\u8868\uff0c\u652f\u6301\u5168\u91cf\u548c\u5f02\u6b65\u65b9\u5f0f",(0,a.kt)("br",null),"\n\u5168\u91cf\u7f13\u5b58:\u5c06\u7ef4\u8868\u6570\u636e\u5168\u90e8\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u5efa\u8bae\u6570\u636e\u91cf\u5927\u4e0d\u4f7f\u7528\u3002",(0,a.kt)("br",null),"\n\u5f02\u6b65\u7f13\u5b58:\u4f7f\u7528\u5f02\u6b65\u65b9\u5f0f\u67e5\u8be2\u6570\u636e\uff0c\u5e76\u5c06\u67e5\u8be2\u5230\u7684\u6570\u636e\u4f7f\u7528lru\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\uff0c\u5efa\u8bae\u6570\u636e\u91cf\u5927\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,a.kt)("p",null,"mysql5.x"),(0,a.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SQL"),(0,a.kt)("th",{parentName:"tr",align:null},"mysql-x")))),(0,a.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"connector")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1amysql-x"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"url")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ajdbc:mysql://localhost:3306/test"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"schema")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93schema\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"table-name")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8868\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0\uff1a",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"username")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ausername"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"password")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1apassword"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"lookup.cache-type")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u7f13\u5b58\u7c7b\u578b(NONE\u3001LRU\u3001ALL)\uff0c\u9ed8\u8ba4LRU"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aLRU",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"lookup.cache-period")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aALL\u7ef4\u8868\u6bcf\u9694\u591a\u4e45\u52a0\u8f7d\u4e00\u6b21\u6570\u636e\uff0c\u9ed8\u8ba43600000\u6beb\u79d2(\u4e00\u4e2a\u5c0f\u65f6)"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a3600000",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"lookup.cache.max-rows")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1alru\u7ef4\u8868\u7f13\u5b58\u6570\u636e\u7684\u6761\u6570\uff0c\u9ed8\u8ba410000\u6761"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a10000",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"lookup.cache.ttl")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1alru\u7ef4\u8868\u7f13\u5b58\u6570\u636e\u7684\u65f6\u95f4\uff0c\u9ed8\u8ba460000\u6beb\u79d2(\u4e00\u5206\u949f)"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a60000",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"lookup.fetch-size")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aALL\u7ef4\u8868\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u52a0\u8f7d\u7684\u6761\u6570\uff0c\u9ed8\u8ba41000\u6761"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000",(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"lookup.parallelism")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u5e76\u884c\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,a.kt)("br",null))))),(0,a.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("th",{parentName:"tr",align:null},"BOOLEAN\u3001BIT\u3001TINYINT\u3001TINYINT UNSIGNED\u3001SMALLINT\u3001SMALLINT UNSIGNED\u3001MEDIUMINT\u3001MEDIUMINT UNSIGNED\u3001 INT\u3001INT UNSIGNED\u3001INTEGER\u3001INT UNSIGNED\u3001BIGINT\u3001BIGINT UNSIGNED\u3001REAL\u3001FLOAT\u3001FLOAT UNSIGNED\u3001DECIMAL\u3001DECIMAL UNSIGNED\u3001NUMERIC\u3001DOUBLE\u3001DOUBLE UNSIGNED\u3001STRING\u3001VARCHAR\u3001CHAR\u3001TIMESTAMP \u3001DATETIME\u3001DATE\u3001TIME\u3001YEAR\u3001TINYBLOB\u3001BLOB\u3001MEDIUMBLOB\u3001LONGBLOB\u3001TINYTEXT\u3001TEXT\u3001MEDIUMTEXT\u3001LONGTEXT\u3001BINARY\u3001VARBINARY\u3001JSON\u3001ENUM\u3001SET\u3001GEOMETRY"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"ARRAY\u3001MAP\u3001STRUCT\u3001UNION")))),(0,a.kt)("h2",{id:"\u516d\u811a\u672c\u793a\u4f8b"},"\u516d\u3001\u811a\u672c\u793a\u4f8b"),(0,a.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,a.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}c.isMDXComponent=!0}}]);