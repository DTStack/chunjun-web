"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[9594],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),o=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=o(n),c=a,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||r;return n?l.createElement(d,u(u({ref:t},s),{},{components:n})):l.createElement(d,u({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var o=2;o<r;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8909:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),u=["components"],i={},p="SqlserverCDC Source",o={unversionedId:"chunjunDocs/connectors/sqlservercdc/SqlserverCDC-source",id:"chunjunDocs/connectors/sqlservercdc/SqlserverCDC-source",title:"SqlserverCDC Source",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-source.md",sourceDirName:"chunjunDocs/connectors/sqlservercdc",slug:"/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-source",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-source.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SqlServer\u914d\u7f6eCDC",permalink:"/chunjun-web/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-configuration"},next:{title:"Contributing to ChunJun",permalink:"/chunjun-web/docs/chunjunDocs/contributing"}},s={},m=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u6570\u636e\u5e93\u914d\u7f6e",id:"\u4e09\u6570\u636e\u5e93\u914d\u7f6e",level:2},{value:"\u56db\u3001SqlserverCDC\u539f\u7406",id:"\u56dbsqlservercdc\u539f\u7406",level:2},{value:"\u4e94\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e94\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u516d\u3001\u53c2\u6570\u8bf4\u660e",id:"\u516d\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001Sync",id:"1sync",level:3},{value:"2\u3001SQL",id:"2sql",level:3},{value:"\u4e03\u3001\u6570\u636e\u7ed3\u6784",id:"\u4e03\u6570\u636e\u7ed3\u6784",level:2},{value:"\u516b\u3001\u6570\u636e\u7c7b\u578b",id:"\u516b\u6570\u636e\u7c7b\u578b",level:2},{value:"\u4e5d\u3001\u811a\u672c\u793a\u4f8b",id:"\u4e5d\u811a\u672c\u793a\u4f8b",level:2}],k={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sqlservercdc-source"},"SqlserverCDC Source"),(0,r.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,r.kt)("p",null,"Sqlservercdc\u63d2\u4ef6\u652f\u6301\u914d\u7f6e\u76d1\u542c\u8868\u540d\u79f0\u4ee5\u53ca\u8bfb\u53d6\u8d77\u70b9\u8bfb\u53d6\u65e5\u5fd7\u6570\u636e\u3002SQLservercdc\u5728checkpoint\u65f6\u4fdd\u5b58\u5f53\u524d\u6d88\u8d39\u7684lsn\uff0c\u56e0\u6b64\u652f\u6301\u7eed\u8dd1\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,r.kt)("p",null,"SqlServer 2012\u30012014\u30012016\u30012017\u30012019\u5355\u673a\u7248"),(0,r.kt)("h2",{id:"\u4e09\u6570\u636e\u5e93\u914d\u7f6e"},"\u4e09\u3001\u6570\u636e\u5e93\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/chunjun-web/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-configuration"},"SqlserverCDC\u914d\u7f6e")),(0,r.kt)("h2",{id:"\u56dbsqlservercdc\u539f\u7406"},"\u56db\u3001SqlserverCDC\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/chunjun-web/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-Principles"},"SqlserverCDC\u539f\u7406")),(0,r.kt)("h2",{id:"\u4e94\u63d2\u4ef6\u540d\u79f0"},"\u4e94\u3001\u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sync"),(0,r.kt)("th",{parentName:"tr",align:null},"sqlservercdcreader\u3001sqlservercdcsource"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"sqlservercdc-x")))),(0,r.kt)("h2",{id:""}),(0,r.kt)("h2",{id:"\u516d\u53c2\u6570\u8bf4\u660e"},"\u516d\u3001\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"1sync"},"1\u3001Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"url"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1asqlserver\u6570\u636e\u5e93\u7684JDBC URL\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tableList"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u9700\u8981\u76d1\u542c\u7684\u8868\uff0c\u5982\uff1a",'["schema1.table1","schema1.table2"]'),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1a\u6570\u7ec4"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"splitUpdate"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f53\u6570\u636e\u66f4\u65b0\u7c7b\u578b\u4e3aupdate\u65f6\uff0c\u662f\u5426\u5c06update\u62c6\u5206\u4e3a\u4e24\u6761\u6570\u636e\uff0c\u5177\u4f53\u89c1\u3010\u516d\u3001\u6570\u636e\u7ed3\u6784\u8bf4\u660e\u3011"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aboolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cat"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u76d1\u542c\u7684\u64cd\u4f5c\u6570\u636e\u64cd\u4f5c\u7c7b\u578b\uff0c\u6709UPDATE,INSERT,DELETE\u4e09\u79cd\u53ef\u9009\uff0c\u5927\u5c0f\u5199\u4e0d\u654f\u611f\uff0c\u591a\u4e2a\u4ee5,\u5206\u5272"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aUPDATE,INSERT,DELETE")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lsn"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u8981\u8bfb\u53d6SqlServer CDC\u65e5\u5fd7\u5e8f\u5217\u53f7\u7684\u5f00\u59cb\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a \u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString(00000032:00002038:0005)"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pollInterval"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u76d1\u542c\u62c9\u53d6SqlServer CDC\u6570\u636e\u5e93\u95f4\u9694\u65f6\u95f4,\u8be5\u503c\u8d8a\u5c0f\uff0c\u91c7\u96c6\u5ef6\u8fdf\u65f6\u95f4\u8d8a\u5c0f\uff0c\u7ed9\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u538b\u529b\u8d8a\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1along(\u5355\u4f4d\u6beb\u79d2)"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pavingData"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u662f\u5426\u5c06\u89e3\u6790\u51fa\u7684json\u6570\u636e\u62cd\u5e73\uff0c\u5177\u4f53\u89c1\u3010\u4e03\u3001\u6570\u636e\u7ed3\u6784\u8bf4\u660e\u3011"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aboolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse")))),(0,r.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"url"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1asqlserver\u6570\u636e\u5e93\u7684JDBC URL\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u89e3\u6790\u7684\u6570\u636e\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1aSQL\u4efb\u52a1\u53ea\u652f\u6301\u76d1\u542c\u5355\u5f20\u8868\uff0c\u4e14\u6570\u636e\u683c\u5f0f\u4e3aschema.table"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cat"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u76d1\u542c\u7684\u64cd\u4f5c\u6570\u636e\u64cd\u4f5c\u7c7b\u578b\uff0c\u6709UPDATE,INSERT,DELETE\u4e09\u79cd\u53ef\u9009\uff0c\u5927\u5c0f\u5199\u4e0d\u654f\u611f\uff0c\u591a\u4e2a\u4ee5,\u5206\u5272"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aUPDATE,INSERT,DELETE")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lsn"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u8981\u8bfb\u53d6SqlServer CDC\u65e5\u5fd7\u5e8f\u5217\u53f7\u7684\u5f00\u59cb\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a \u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString(00000032:00002038:0005)"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"poll-interval"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u76d1\u542c\u62c9\u53d6SqlServer CDC\u6570\u636e\u5e93\u95f4\u9694\u65f6\u95f4,\u8be5\u503c\u8d8a\u5c0f\uff0c\u91c7\u96c6\u5ef6\u8fdf\u65f6\u95f4\u8d8a\u5c0f\uff0c\u7ed9\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u538b\u529b\u8d8a\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1along(\u5355\u4f4d\u6beb\u79d2)"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000")))),(0,r.kt)("h2",{id:"\u4e03\u6570\u636e\u7ed3\u6784"},"\u4e03\u3001\u6570\u636e\u7ed3\u6784"),(0,r.kt)("p",null,"\u57282020-01-01 12:30:00(\u65f6\u95f4\u6233\uff1a1577853000000)\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `tudou`.`kudu`(`id`, `user_id`, `name`)\nVALUES (1, 1, 'a');\n")),(0,r.kt)("p",null,"\u57282020-01-01 12:31:00(\u65f6\u95f4\u6233\uff1a1577853060000)\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE\nFROM `tudou`.`kudu`\nWHERE `id` = 1\n  AND `user_id` = 1\n  AND `name` = 'a';\n")),(0,r.kt)("p",null,"\u57282020-01-01 12:32:00(\u65f6\u95f4\u6233\uff1a1577853180000)\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE `tudou`.`kudu`\nSET `id`      = 2,\n    `user_id` = 2,\n    `name`    = 'b'\nWHERE `id` = 1\n  AND `user_id` = 1\n  AND `name` = 'a';\n")),(0,r.kt)("p",null,"1\u3001pavingData = true, splitUpdate = false RowData\u4e2d\u7684\u6570\u636e\u4f9d\u6b21\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//schema, table, ts, opTime, type, before_id, before_user_id, before_name, after_id, after_user_id, after_name\n["tudou", "kudu", 6760525407742726144, 1577853000000, "INSERT", null, null, null, 1, 1, "a"]\n["tudou", "kudu", 6760525407742726144, 1577853060000, "DELETE", 1, 1, "a", null, null, null]\n["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE", 1, 1, "a", 2, 2, "b"]\n')),(0,r.kt)("p",null,"2\u3001pavingData = false, splitUpdate = false RowData\u4e2d\u7684\u6570\u636e\u4f9d\u6b21\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//schema, table, ts, opTime, type, before, after\n["tudou", "kudu", 6760525407742726144, 1577853000000, "INSERT", null, {"id":1, "user_id":1, "name":"a"}]\n["tudou", "kudu", 6760525407742726144, 1577853060000, "DELETE", {"id":1, "user_id":1, "name":"a"}, null]\n["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE", {"id":1, "user_id":1, "name":"a"}, {"id":2, "user_id":2, "name":"b"}]\n')),(0,r.kt)("p",null,"3\u3001pavingData = true, splitUpdate = true RowData\u4e2d\u7684\u6570\u636e\u4f9d\u6b21\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//schema, table, ts, opTime, type, before_id, before_user_id, before_name, after_id, after_user_id, after_name\n["tudou", "kudu", 6760525407742726144, 1577853000000, "INSERT", null, null, null, 1, 1, "a"]\n["tudou", "kudu", 6760525407742726144, 1577853060000, "DELETE", 1, 1, "a", null, null, null]\n\n//schema, table, ts, opTime, type, before_id, before_user_id, before_name\n["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE_BEFORE", 1, 1, "a"]\n\n//schema, table, ts, opTime, type, after_id, after_user_id, after_name\n["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE_AFTER", 2, 2, "b"]\n')),(0,r.kt)("p",null,"4\u3001pavingData = false, splitUpdate = true RowData\u4e2d\u7684\u6570\u636e\u4f9d\u6b21\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//schema, table, ts, opTime, type, before, after\n["tudou", "kudu", 6760525407742726144, 1577853000000, "INSERT", null, {"id":1, "user_id":1, "name":"a"}]\n["tudou", "kudu", 6760525407742726144, 1577853060000, "DELETE", {"id":1, "user_id":1, "name":"a"}, null]\n//schema, table, ts, opTime, type, before\n["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE_BEFORE", {"id":1, "user_id":1, "name":"a"}]\n//schema, table, ts, opTime, type, after\n["tudou", "kudu", 6760525407742726144, 1577853180000, "UPDATE_AFTER", {"id":2, "user_id":2, "name":"b"}]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type\uff1a\u53d8\u66f4\u7c7b\u578b\uff0cINSERT\uff0cUPDATE\u3001DELETE"),(0,r.kt)("li",{parentName:"ul"},"opTime\uff1a\u6570\u636e\u5e93\u4e2dSQL\u7684\u6267\u884c\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"ts\uff1a\u81ea\u589eID\uff0c\u4e0d\u91cd\u590d\uff0c\u53ef\u7528\u4e8e\u6392\u5e8f\uff0c\u89e3\u7801\u540e\u4e3aFlinkX\u7684\u4e8b\u4ef6\u65f6\u95f4\uff0c\u89e3\u7801\u89c4\u5219\u5982\u4e0b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'long id=Long.parseLong("6760525407742726144");\n        long res=id>>22;\n        DateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        System.out.println(sdf.format(res));        //2021-01-28 19:54:21\n')),(0,r.kt)("h2",{id:"\u516b\u6570\u636e\u7c7b\u578b"},"\u516b\u3001\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"BIT, TINYINT24, INT, INTEGER, FLOAT, DOUBLE, REAL, LONG, BIGINT, DECIMAL, NUMERIC, BINARY, VARBINARY, DATE, TIME, TIMESTAMP, DATETIME, DATETIME2, SMALLDATETIME, CHAR, VARCHAR, NCHAR, NVARCHAR, TEXT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"ROWVERSION, UNIQUEIDENTIFIER, CURSOR, TABLE, SQL_VARIANT")))),(0,r.kt)("h2",{id:"\u4e5d\u811a\u672c\u793a\u4f8b"},"\u4e5d\u3001\u811a\u672c\u793a\u4f8b"),(0,r.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,r.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}c.isMDXComponent=!0}}]);