"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[7706],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8531:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},u="MongoDB Source",p={unversionedId:"chunjunDocs/connectors/mongodb/mongodb-source",id:"chunjunDocs/connectors/mongodb/mongodb-source",title:"MongoDB Source",description:"1. Introduce",source:"@site/docs/chunjunDocs/connectors/mongodb/mongodb-source.md",sourceDirName:"chunjunDocs/connectors/mongodb",slug:"/chunjunDocs/connectors/mongodb/mongodb-source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/mongodb/mongodb-source",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/mongodb/mongodb-source.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MongoDB Lookup",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/mongodb/mongodb-lookup"},next:{title:"MySQL Lookup",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/mysql/mysql-lookup"}},c={},m=[{value:"1. Introduce",id:"1-introduce",level:2},{value:"2. Version Support",id:"2-version-support",level:2},{value:"3. Connector Name",id:"3-connector-name",level:2},{value:"4. Parameter description",id:"4-parameter-description",level:2},{value:"4.1 Sync",id:"41-sync",level:4},{value:"4.2 SQL",id:"42-sql",level:4},{value:"5. Data Type",id:"5-data-type",level:2},{value:"6. Example",id:"6-example",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb-source"},"MongoDB Source"),(0,o.kt)("h2",{id:"1-introduce"},"1. Introduce"),(0,o.kt)("p",null,"MongoDb Source"),(0,o.kt)("h2",{id:"2-version-support"},"2. Version Support"),(0,o.kt)("p",null,"MongoDB 3.4 and above"),(0,o.kt)("h2",{id:"3-connector-name"},"3. Connector Name"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Sync"),(0,o.kt)("th",{parentName:"tr",align:null},"mongodbsource\u3001mongodbreader"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SQL"),(0,o.kt)("td",{parentName:"tr",align:null},"mongodb-x")))),(0,o.kt)("h2",{id:"4-parameter-description"},"4. Parameter description"),(0,o.kt)("h4",{id:"41-sync"},"4.1 Sync"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"url"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1aURL of MongoDB connection\uff0csearch ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB Documents")," for detail information."),(0,o.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hostPorts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1ahost and port of database, formatted like IP1:port. if using Multiple addresses, separated it by comma."),(0,o.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"username"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1auser of database"),(0,o.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"password"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1apassword of database "),(0,o.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"database"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1aname of database"),(0,o.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"collectionName"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1acollection name of database"),(0,o.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fetchSize"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1aThe number of data pieces read each time. Adjust this parameter to optimize the reading rate. Default 0 to let MongoDB Server choose the value itself."),(0,o.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aint"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a0")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"filter"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1aURL of MongoDB connection\uff0csearch ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB Documents")," for detail information."),(0,o.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"column"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Description\uff1acolumns that should be extract"),(0,o.kt)("li",{parentName:"ul"},"Notes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"name\uff1acolumn name "),(0,o.kt)("li",{parentName:"ul"},"type\uff1acolumn type, It can be different from the field type in the database."))),(0,o.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,o.kt)("li",{parentName:"ul"},"Type\uff1aList"),(0,o.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,o.kt)("h4",{id:"42-sql"},"4.2 SQL"),(0,o.kt)("p",null,"do not support right now."),(0,o.kt)("h2",{id:"5-data-type"},"5. Data Type"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SUPPORTED"),(0,o.kt)("th",{parentName:"tr",align:null},"DATA TYPE"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"long double decimal objectId string bindata date timestamp bool")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NO"),(0,o.kt)("td",{parentName:"tr",align:null},"array")))),(0,o.kt)("h2",{id:"6-example"},"6. Example"),(0,o.kt)("p",null,"The details are in flinkx-examples dir."))}d.isMDXComponent=!0}}]);