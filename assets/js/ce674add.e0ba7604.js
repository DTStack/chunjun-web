"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[2671],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return v}});var t=n(7294);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=t.createContext({}),i=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,c=e.mdxType,s=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=i(n),v=c,m=d["".concat(o,".").concat(v)]||d[v]||p[v]||s;return n?t.createElement(m,l(l({ref:r},u),{},{components:n})):t.createElement(m,l({ref:r},u))}));function v(e,r){var n=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var s=n.length,l=new Array(s);l[0]=d;var a={};for(var o in r)hasOwnProperty.call(r,o)&&(a[o]=r[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,l[1]=a;for(var i=2;i<s;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3298:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return o},default:function(){return v},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var t=n(7462),c=n(3366),s=(n(7294),n(3905)),l=["components"],a={},o="SqlServer\u914d\u7f6eCDC",i={unversionedId:"chunjunDocs/connectors/sqlservercdc/SqlserverCDC-configuration",id:"chunjunDocs/connectors/sqlservercdc/SqlserverCDC-configuration",title:"SqlServer\u914d\u7f6eCDC",description:"\u6ce8\uff1aSqlServer\u81ea2008\u7248\u672c\u5f00\u59cb\u652f\u6301CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd\uff0c\u672c\u6587\u57fa\u4e8eSqlServer 2017\u7f16\u5199\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-configuration.md",sourceDirName:"chunjunDocs/connectors/sqlservercdc",slug:"/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-configuration",permalink:"/chunjun-web/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-configuration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SqlServer CDC\u5b9e\u65f6\u91c7\u96c6\u539f\u7406",permalink:"/chunjun-web/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-Principles"},next:{title:"SqlserverCDC Source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/sqlservercdc/SqlserverCDC-source"}},u={},p=[{value:"1\u3001\u67e5\u8be2SqlServer\u6570\u636e\u5e93\u7248\u672c",id:"1\u67e5\u8be2sqlserver\u6570\u636e\u5e93\u7248\u672c",level:4},{value:"2\u3001\u67e5\u8be2\u5f53\u524d\u7528\u6237\u6743\u9650\uff0c\u5fc5\u987b\u4e3a\xa0sysadmin\xa0\u56fa\u5b9a\u670d\u52a1\u5668\u89d2\u8272\u7684\u6210\u5458\u624d\u5141\u8bb8\u5bf9\u6570\u636e\u5e93\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd",id:"2\u67e5\u8be2\u5f53\u524d\u7528\u6237\u6743\u9650\u5fc5\u987b\u4e3asysadmin\u56fa\u5b9a\u670d\u52a1\u5668\u89d2\u8272\u7684\u6210\u5458\u624d\u5141\u8bb8\u5bf9\u6570\u636e\u5e93\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd",level:4},{value:"3\u3001\u67e5\u8be2\u6570\u636e\u5e93\u662f\u5426\u5df2\u7ecf\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd",id:"3\u67e5\u8be2\u6570\u636e\u5e93\u662f\u5426\u5df2\u7ecf\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd",level:4},{value:"4\u3001\u5bf9\u6570\u636e\u5e93\u6570\u636e\u5e93\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd",id:"4\u5bf9\u6570\u636e\u5e93\u6570\u636e\u5e93\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd",level:4},{value:"5\u3001\u67e5\u8be2\u8868\u662f\u5426\u5df2\u7ecf\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd",id:"5\u67e5\u8be2\u8868\u662f\u5426\u5df2\u7ecf\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd",level:4},{value:"6\u3001\u5bf9\u8868\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd\xa0 \xa0\xa0",id:"6\u5bf9\u8868\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd-",level:4},{value:"7\u3001\u786e\u8ba4CDC agent \u662f\u5426\u6b63\u5e38\u542f\u52a8",id:"7\u786e\u8ba4cdc-agent-\u662f\u5426\u6b63\u5e38\u542f\u52a8",level:4}],d={toc:p};function v(e){var r=e.components,n=(0,c.Z)(e,l);return(0,s.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sqlserver\u914d\u7f6ecdc"},"SqlServer\u914d\u7f6eCDC"),(0,s.kt)("p",null,"\u6ce8\uff1aSqlServer\u81ea2008\u7248\u672c\u5f00\u59cb\u652f\u6301CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd\uff0c\u672c\u6587\u57fa\u4e8eSqlServer 2017\u7f16\u5199\u3002"),(0,s.kt)("h4",{id:"1\u67e5\u8be2sqlserver\u6570\u636e\u5e93\u7248\u672c"},"1\u3001\u67e5\u8be2SqlServer\u6570\u636e\u5e93\u7248\u672c"),(0,s.kt)("p",null,"SQL\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT @@VERSION"),"\n\u7ed3\u679c\uff1a"),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver1.png"})),(0,s.kt)("h4",{id:"2\u67e5\u8be2\u5f53\u524d\u7528\u6237\u6743\u9650\u5fc5\u987b\u4e3asysadmin\u56fa\u5b9a\u670d\u52a1\u5668\u89d2\u8272\u7684\u6210\u5458\u624d\u5141\u8bb8\u5bf9\u6570\u636e\u5e93\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd"},"2\u3001\u67e5\u8be2\u5f53\u524d\u7528\u6237\u6743\u9650\uff0c\u5fc5\u987b\u4e3a\xa0sysadmin\xa0\u56fa\u5b9a\u670d\u52a1\u5668\u89d2\u8272\u7684\u6210\u5458\u624d\u5141\u8bb8\u5bf9\u6570\u636e\u5e93\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd"),(0,s.kt)("p",null,"SQL\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"exec sp_helpsrvrolemember 'sysadmin'"),"\n\u7ed3\u679c\uff1a"),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver2.png"})),(0,s.kt)("h4",{id:"3\u67e5\u8be2\u6570\u636e\u5e93\u662f\u5426\u5df2\u7ecf\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd"},"3\u3001\u67e5\u8be2\u6570\u636e\u5e93\u662f\u5426\u5df2\u7ecf\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd"),(0,s.kt)("p",null,"SQL\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"select is_cdc_enabled, name from  sys.databases where name = 'tudou'"),"\n\u7ed3\u679c\uff1a"),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver3.png"})),(0,s.kt)("br",null),"0\uff1a\u672a\u542f\u7528\uff1b1\uff1a\u542f\u7528",(0,s.kt)("h4",{id:"4\u5bf9\u6570\u636e\u5e93\u6570\u636e\u5e93\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd"},"4\u3001\u5bf9\u6570\u636e\u5e93\u6570\u636e\u5e93\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd"),(0,s.kt)("p",null,"SQL\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"USE\ntudou  \nGO  \nEXEC sys.sp_cdc_enable_db  \nGO  \n")),(0,s.kt)("p",null,"\u91cd\u590d\u7b2c\u4e09\u6b65\u64cd\u4f5c\uff0c\u786e\u8ba4\u6570\u636e\u5e93\u5df2\u7ecf\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd\u3002"),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver4.png"})),(0,s.kt)("h4",{id:"5\u67e5\u8be2\u8868\u662f\u5426\u5df2\u7ecf\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd"},"5\u3001\u67e5\u8be2\u8868\u662f\u5426\u5df2\u7ecf\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd"),(0,s.kt)("p",null,"SQL\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"select name,is_tracked_by_cdc from sys.tables where name = 'test';"),"\n\u7ed3\u679c\uff1a"),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver5.png"})),"0\uff1a\u672a\u542f\u7528\uff1b1\uff1a\u542f\u7528",(0,s.kt)("h4",{id:"6\u5bf9\u8868\u542f\u7528cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u529f\u80fd-"},"6\u3001\u5bf9\u8868\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd\xa0 \xa0\xa0"),(0,s.kt)("p",null,"SQL\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"EXEC sys.sp_cdc_enable_table \n@source_schema = 'dbo', \n@source_name = 'test', \n@role_name = NULL, \n@supports_net_changes = 0;\n")),(0,s.kt)("p",null,"source_schema\uff1a\u8868\u6240\u5728\u7684schema\u540d\u79f0 source_name\uff1a\u8868\u540d role_name\uff1a\u8bbf\u95ee\u63a7\u5236\u89d2\u8272\u540d\u79f0\uff0c\u6b64\u5904\u4e3anull\u4e0d\u8bbe\u7f6e\u8bbf\u95ee\u63a7\u5236\nsupports_net_changes\uff1a\u662f\u5426\u4e3a\u6355\u83b7\u5b9e\u4f8b\u751f\u6210\u4e00\u4e2a\u51c0\u66f4\u6539\u51fd\u6570\uff0c0\uff1a\u5426\uff1b1\uff1a\u662f"),(0,s.kt)("p",null,"\u91cd\u590d\u7b2c\u4e94\u6b65\u64cd\u4f5c\uff0c\u786e\u8ba4\u8868\u5df2\u7ecf\u542f\u7528CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd\u3002"),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver6.png"})),(0,s.kt)("p",null,"\u81f3\u6b64\uff0c\u8868",(0,s.kt)("inlineCode",{parentName:"p"},"test"),"\u542f\u52a8CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd\u914d\u7f6e\u5b8c\u6210\u3002"),(0,s.kt)("h4",{id:"7\u786e\u8ba4cdc-agent-\u662f\u5426\u6b63\u5e38\u542f\u52a8"},"7\u3001\u786e\u8ba4CDC agent \u662f\u5426\u6b63\u5e38\u542f\u52a8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"EXEC master.dbo.xp_servicecontrol N'QUERYSTATE', N'SQLSERVERAGENT'\n")),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver16.png"})),"\u5982\u663e\u793a\u4e0a\u56fe\u72b6\u6001\uff0c\u9700\u8981\u542f\u52a8\u5bf9\u5e94\u7684agent.",(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Windows \u73af\u5883\u64cd\u4f5c\u5f00\u542f CDC agent"),"\n\u70b9\u51fb \u4e0b\u56fe\u4f4d\u7f6e\u4ee3\u7406\u5f00\u542f"),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver17.png"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u542f\u52a8\u6570\u636e\u5e93")),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver18.png"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u518d\u6b21\u67e5\u8be2agent \u72b6\u6001\uff0c\u786e\u8ba4\u72b6\u6001\u53d8\u66f4\u4e3arunning")),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"static/img/SqlserverCDC/Sqlserver19.png"})),(0,s.kt)("p",null,"\u81f3\u6b64\uff0c\u8868",(0,s.kt)("inlineCode",{parentName:"p"},"test"),"\u542f\u52a8CDC(\u53d8\u66f4\u6570\u636e\u6355\u83b7)\u529f\u80fd\u914d\u7f6e\u5b8c\u6210\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"docker \u73af\u5883\u64cd\u4f5c\u5f00\u542f CDC agent")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5f00\u542fmssql-server\u7684\u4ee3\u7406\u670d\u52a1"),"_"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it sqlserver bash\n/opt/mssql/bin/mssql-conf set sqlagent.enabled true\ndocker stop sqlserver\ndocker start sqlserver\n")),(0,s.kt)("p",null,"\u53c2\u8003\u9605\u8bfb\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/sql/relational-databases/track-changes/enable-and-disable-change-data-capture-sql-server?view=sql-server-2017"},"https://docs.microsoft.com/zh-cn/sql/relational-databases/track-changes/enable-and-disable-change-data-capture-sql-server?view=sql-server-2017")))}v.isMDXComponent=!0}}]);