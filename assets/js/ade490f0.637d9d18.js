"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[2743],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return c}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),m=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),o=m(a),c=l,s=o["".concat(u,".").concat(c)]||o[c]||N[c]||r;return a?n.createElement(s,p(p({ref:t},k),{},{components:a})):n.createElement(s,p({ref:t},k))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=o;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},8953:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return N}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),p=["components"],i={},u="DM Source",m={unversionedId:"chunjunDocs/connectors/dm/dm-source",id:"chunjunDocs/connectors/dm/dm-source",title:"DM Source",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/dm/dm-source.md",sourceDirName:"chunjunDocs/connectors/dm",slug:"/chunjunDocs/connectors/dm/dm-source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/dm/dm-source",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/dm/dm-source.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DM Sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/dm/dm-sink"},next:{title:"Doris batch Sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/doris/dorisbatch-sink"}},k={},N=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001Sync",id:"1sync",level:3},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"\u516d\u3001\u811a\u672c\u793a\u4f8b",id:"\u516d\u811a\u672c\u793a\u4f8b",level:2}],o={toc:N};function c(e){var t=e.components,a=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dm-source"},"DM Source"),(0,r.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u652f\u6301\u4eceDM\u79bb\u7ebf\u8bfb\u53d6"),(0,r.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,r.kt)("p",null,"DM7\u3001DM8"),(0,r.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sync"),(0,r.kt)("th",{parentName:"tr",align:null},"dmsource\u3001dmreader"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"1sync"},"1\u3001Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"connection")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\uff0c\u5305\u542bjdbcUrl\u3001schema\u3001table\u7b49\u53c2\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5fc5\u9009\uff1a\u662f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570\u7c7b\u578b\uff1aList")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"connection": [{\n "jdbcUrl": ["jdbc:dm://localhost:5236"],\n "table": ["table"],\n "schema":"public"\n}]\n')),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"jdbcUrl")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9488\u5bf9\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684jdbc\u8fde\u63a5\u5b57\u7b26\u4e32,",(0,r.kt)("a",{parentName:"li",href:"http://www.dameng.com/down.aspx?TypeId=12&FId=t14:12:14"},"\u8fbe\u68a6\u5b98\u65b9\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u7528\u6237\u540d",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"schema")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93schema\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"table")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u76ee\u7684\u8868\u7684\u8868\u540d\u79f0\u3002\u76ee\u524d\u53ea\u652f\u6301\u914d\u7f6e\u5355\u4e2a\u8868\uff0c\u540e\u7eed\u4f1a\u652f\u6301\u591a\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"username")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u6e90\u7684\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"password")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u6e90\u6307\u5b9a\u7528\u6237\u540d\u7684\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"fetchSize")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u4e00\u6b21\u6027\u4ece\u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u591a\u5c11\u6761\u6570\u636e\uff0cDM\u9ed8\u8ba4fetchSize\u5927\u5c0f\u4e3a10\u3002\u5f53fetchSize\u8bbe\u7f6e\u8fc7\u5c0f\u65f6\u5bfc\u81f4\u9891\u7e41\u8bfb\u53d6\u6570\u636e\u4f1a\u5f71\u54cd\u67e5\u8be2\u901f\u5ea6\uff0c\u4ee5\u53ca\u6570\u636e\u5e93\u538b\u529b\u3002\u5f53fetchSize\u8bbe\u7f6e\u8fc7\u5927\u65f6\u5728\u6570\u636e\u91cf\u5f88\u5927\u65f6\u53ef\u80fd\u4f1a\u9020\u6210OOM\uff0c\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u63a7\u5236\u6bcf\u6b21\u8bfb\u53d6fetchSize\u6761\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u6b64\u53c2\u6570\u7684\u503c\u4e0d\u53ef\u8bbe\u7f6e\u8fc7\u5927\uff0c\u5426\u5219\u4f1a\u8bfb\u53d6\u8d85\u65f6\uff0c\u5bfc\u81f4\u4efb\u52a1\u5931\u8d25\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426z"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1024",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"where")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7b5b\u9009\u6761\u4ef6\uff0creader\u63d2\u4ef6\u6839\u636e\u6307\u5b9a\u7684column\u3001table\u3001where\u6761\u4ef6\u62fc\u63a5SQL\uff0c\u5e76\u6839\u636e\u8fd9\u4e2aSQL\u8fdb\u884c\u6570\u636e\u62bd\u53d6\u3002\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5f80\u5f80\u4f1a\u9009\u62e9\u5f53\u5929\u7684\u6570\u636e\u8fdb\u884c\u540c\u6b65\uff0c\u53ef\u4ee5\u5c06where\u6761\u4ef6\u6307\u5b9a\u4e3agmt_create >\ntime\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u4e0d\u53ef\u4ee5\u5c06where\u6761\u4ef6\u6307\u5b9a\u4e3alimit 10\uff0climit\u4e0d\u662fSQL\u7684\u5408\u6cd5where\u5b50\u53e5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"splitPk")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f53speed\u914d\u7f6e\u4e2d\u7684channel\u5927\u4e8e1\u65f6\u6307\u5b9a\u6b64\u53c2\u6570\uff0cReader\u63d2\u4ef6\u6839\u636e\u5e76\u53d1\u6570\u548c\u6b64\u53c2\u6570\u6307\u5b9a\u7684\u5b57\u6bb5\u62fc\u63a5sql\uff0c\u4f7f\u6bcf\u4e2a\u5e76\u53d1\u8bfb\u53d6\u4e0d\u540c\u7684\u6570\u636e\uff0c\u63d0\u5347\u8bfb\u53d6\u901f\u7387\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350splitPk\u4f7f\u7528\u8868\u4e3b\u952e\uff0c\u56e0\u4e3a\u8868\u4e3b\u952e\u901a\u5e38\u60c5\u51b5\u4e0b\u6bd4\u8f83\u5747\u5300\uff0c\u56e0\u6b64\u5207\u5206\u51fa\u6765\u7684\u5206\u7247\u4e5f\u4e0d\u5bb9\u6613\u51fa\u73b0\u6570\u636e\u70ed\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524dsplitPk\u4ec5\u652f\u6301\u6574\u5f62\u6570\u636e\u5207\u5206\uff0c\u4e0d\u652f\u6301\u6d6e\u70b9\u3001\u5b57\u7b26\u4e32\u3001\u65e5\u671f\u7b49\u5176\u4ed6\u7c7b\u578b\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u5176\u4ed6\u975e\u652f\u6301\u7c7b\u578b\uff0cFlinkX\u5c06\u62a5\u9519\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679cchannel\u5927\u4e8e1\u4f46\u662f\u6ca1\u6709\u914d\u7f6e\u6b64\u53c2\u6570\uff0c\u4efb\u52a1\u5c06\u7f6e\u4e3a\u5931\u8d25\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"queryTimeOut")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5f53\u6570\u636e\u91cf\u5f88\u5927\uff0c\u6216\u8005\u4ece\u89c6\u56fe\u67e5\u8be2\uff0c\u6216\u8005\u81ea\u5b9a\u4e49sql\u67e5\u8be2\u65f6\uff0c\u53ef\u901a\u8fc7\u6b64\u53c2\u6570\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"customSql")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u81ea\u5b9a\u4e49\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u5982\u679c\u53ea\u6307\u5b9a\u5b57\u6bb5\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u53ef\u901a\u8fc7\u6b64\u53c2\u6570\u6307\u5b9a\u67e5\u8be2\u7684sql\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u590d\u6742\u7684\u67e5\u8be2\u8bed\u53e5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u662f\u67e5\u8be2\u8bed\u53e5\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u4efb\u52a1\u5931\u8d25\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u8bed\u53e5\u8fd4\u56de\u7684\u5b57\u6bb5\u9700\u8981\u548ccolumn\u5217\u8868\u91cc\u7684\u5b57\u6bb5\u5bf9\u5e94\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6307\u5b9a\u4e86\u6b64\u53c2\u6570\u65f6\uff0cconnection\u91cc\u6307\u5b9a\u7684table\u65e0\u6548\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6307\u5b9a\u6b64\u53c2\u6570\u65f6\uff0ccolumn\u5fc5\u987b\u6307\u5b9a\u5177\u4f53\u5b57\u6bb5\u4fe1\u606f\uff0c\u4e0d\u80fd\u4ee5*\u53f7\u4ee3\u66ff\uff1b"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"column")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63cf\u8ff0\uff1a\u9700\u8981\u8bfb\u53d6\u7684\u5b57\u6bb5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u683c\u5f0f\uff1a\u652f\u63013\u79cd\u683c\u5f0f"),(0,r.kt)("br",null),"1.\u8bfb\u53d6\u5168\u90e8\u5b57\u6bb5\uff0c\u5982\u679c\u5b57\u6bb5\u6570\u91cf\u5f88\u591a\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u5199\u6cd5\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'"column":["*"]\n')),(0,r.kt)("p",{parentName:"li"},"2.\u53ea\u6307\u5b9a\u5b57\u6bb5\u540d\u79f0\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"column":["id","name"]\n')),(0,r.kt)("p",{parentName:"li"},"3.\u6307\u5b9a\u5177\u4f53\u4fe1\u606f\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"column": [{\n    "name": "col",\n    "type": "datetime",\n    "format": "yyyy-MM-dd hh:mm:ss",\n    "value": "value"\n}]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c5e\u6027\u8bf4\u660e:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name\uff1a\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"type\uff1a\u5b57\u6bb5\u7c7b\u578b\uff0c\u53ef\u4ee5\u548c\u6570\u636e\u5e93\u91cc\u7684\u5b57\u6bb5\u7c7b\u578b\u4e0d\u4e00\u6837\uff0c\u7a0b\u5e8f\u4f1a\u505a\u4e00\u6b21\u7c7b\u578b\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"format\uff1a\u5982\u679c\u5b57\u6bb5\u662f\u65f6\u95f4\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u6307\u5b9a\u65f6\u95f4\u7684\u683c\u5f0f\uff0c\u5c06\u5b57\u6bb5\u7c7b\u578b\u8f6c\u4e3a\u65e5\u671f\u683c\u5f0f\u8fd4\u56de"),(0,r.kt)("li",{parentName:"ul"},"value\uff1a\u5982\u679c\u6570\u636e\u5e93\u91cc\u4e0d\u5b58\u5728\u6307\u5b9a\u7684\u5b57\u6bb5\uff0c\u5219\u4f1a\u628avalue\u7684\u503c\u4f5c\u4e3a\u5e38\u91cf\u5217\u8fd4\u56de\uff0c\u5982\u679c\u6307\u5b9a\u7684\u5b57\u6bb5\u5b58\u5728\uff0c\u5f53\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u4e3anull\u65f6\uff0c\u4f1a\u4ee5\u6b64value\u503c\u4f5c\u4e3a\u9ed8\u8ba4\u503c\u8fd4\u56de"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5fc5\u9009\uff1a\u662f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"polling")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u662f\u5426\u5f00\u542f\u95f4\u9694\u8f6e\u8be2\uff0c\u5f00\u542f\u540e\u4f1a\u6839\u636epollingInterval\u8f6e\u8be2\u95f4\u9694\u65f6\u95f4\u5468\u671f\u6027\u7684\u4ece\u6570\u636e\u5e93\u62c9\u53d6\u6570\u636e\u3002\u5f00\u542f\u95f4\u9694\u8f6e\u8be2\u8fd8\u9700\u914d\u7f6e\u53c2\u6570pollingInterval\uff0cincreColumn\uff0c\u53ef\u4ee5\u9009\u62e9\u914d\u7f6e\u53c2\u6570startLocation\u3002\u82e5\u4e0d\u914d\u7f6e\u53c2\u6570startLocation\uff0c\u4efb\u52a1\u542f\u52a8\u65f6\u5c06\u4f1a\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u589e\u91cf\u5b57\u6bb5\u6700\u5927\u503c\u4f5c\u4e3a\u8f6e\u8be2\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aBoolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pollingInterval")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8f6e\u8be2\u95f4\u9694\u65f6\u95f4\uff0c\u4ece\u6570\u636e\u5e93\u4e2d\u62c9\u53d6\u6570\u636e\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a5000\u6beb\u79d2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1along"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a5000",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"increColumn")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u589e\u91cf\u5b57\u6bb5\uff0c\u53ef\u4ee5\u662f\u5bf9\u5e94\u7684\u589e\u91cf\u5b57\u6bb5\u540d\uff0c\u4e5f\u53ef\u4ee5\u662f\u7eaf\u6570\u5b57\uff0c\u8868\u793a\u589e\u91cf\u5b57\u6bb5\u5728column\u4e2d\u7684\u987a\u5e8f\u4f4d\u7f6e\uff08\u4ece0\u5f00\u59cb\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString\u6216int"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"startLocation")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u589e\u91cf\u67e5\u8be2\u8d77\u59cb\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"useMaxFunc")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u4e8e\u6807\u8bb0\u662f\u5426\u4fdd\u5b58endLocation\u4f4d\u7f6e\u7684\u4e00\u6761\u6216\u591a\u6761\u6570\u636e\uff0ctrue\uff1a\u4e0d\u4fdd\u5b58\uff0cfalse(\u9ed8\u8ba4)\uff1a\u4fdd\u5b58\uff0c \u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u51fa\u73b0\u6700\u540e\u51e0\u6761\u6570\u636e\u88ab\u91cd\u590d\u8bb0\u5f55\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u5c06\u6b64\u53c2\u6570\u914d\u7f6e\u4e3atrue"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aBoolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"requestAccumulatorInterval")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u53d1\u9001\u67e5\u8be2\u7d2f\u52a0\u5668\u8bf7\u6c42\u7684\u95f4\u9694\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a2",(0,r.kt)("br",null))))),(0,r.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAR\u3001CHARACTER\u3001VARCHAR\u3001VARCHAR2\u3001CLOB\u3001TEXT\u3001LONG\u3001LONGVARCHAR\u3001ENUM\u3001SET\u3001JSON\u3001DECIMAL\u3001NUMBERIC\u3001DEC\u3001NUMER\u3001INT\u3001INTEGER\u3001TINYINT\u3001BYTE\u3001BYTES\u3001SMALLINT\u3001BIGINT\u3001BINARY\u3001VARBINARY\u3001BLOB\u3001TINYBLOB\u3001MEDIUMBLOB\u3001LONGBLOB\u3001GEOMETER\u3001IMAGE\u3001REAL\u3001FLOAT\u3001DOUBLE\u3001DOUBLE PRECISION\u3001BIT\u3001YEAR\u3001DATE\u3001TIME\u3001TIMESTAMP\u3001DATETIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"PLS_INTEGER\u3001LONGVARBINARY\u3001BFILE\u3001TIME WITH TIME ZONE\u3001TIMESTAMP WITH TIME ZONE\u3001TIME WITH LOCAL TIME ZONE\u3001INTERVAL YEAR\u3001INTERVAL YEAR\u3001INTERVAL MONTH\u3001INTERVAL DAY\u3001INTERVAL HOUR\u3001INTERVAL MINUTE\u3001INTERVAL SECONDE\u3001INTERVAL YEAR TO MONTH\u3001INTERVAL DAY TO HOUR\u3001INTERVAL YEAR TO MINUTE\u3001INTERVAL DAY TO SECONDE\u3001INTERVAL HOUR TO MINUTE\u3001INTERVAL HOUR TO SECOND\u3001INTERVAL MINUTE TO SECONDE\u3001BOOL\u3001BOOLEAN\u3001%TYPE%\u3001%ROWTYPE\u3001\u8bb0\u5f55\u7c7b\u578b\u3001\u6570\u7ec4\u7c7b\u578b\u3001\u96c6\u5408\u7c7b\u578b")))),(0,r.kt)("h2",{id:"\u516d\u811a\u672c\u793a\u4f8b"},"\u516d\u3001\u811a\u672c\u793a\u4f8b"),(0,r.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,r.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}c.isMDXComponent=!0}}]);