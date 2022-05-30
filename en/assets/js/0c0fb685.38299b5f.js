"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[5348],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||c;return t?r.createElement(m,u(u({ref:n},p),{},{components:t})):r.createElement(m,u({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,u=new Array(c);u[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<c;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9594:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),u=["components"],a={},i="ChunJun Docker",l={unversionedId:"chunjunDocs/docker",id:"chunjunDocs/docker",title:"ChunJun Docker",description:"License",source:"@site/docs/chunjunDocs/docker.md",sourceDirName:"chunjunDocs",slug:"/chunjunDocs/docker",permalink:"/chunjun-web/en/docs/chunjunDocs/docker",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to submit a good PR",permalink:"/chunjun-web/en/docs/chunjunDocs/contribute-pr"},next:{title:"ProtoBuf Format",permalink:"/chunjun-web/en/docs/chunjunDocs/formats/protobuf-x"}},p={},s=[],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"chunjun-docker"},"ChunJun Docker"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/license-Apache%202-4EB1BA.svg",alt:"License"}))),(0,c.kt)("h1",{id:"build-step"},"build step"),(0,c.kt)("p",null,"1.\u4f7f\u7528git\u5de5\u5177\u628a\u9879\u76eeclone\u5230\u672c\u5730"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"git clone https://github.com/DTStack/flinkx.git\n")),(0,c.kt)("p",null,"2.\u7f16\u8bd1\u63d2\u4ef6\u5305"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"cd flinkx\nsh build/build.sh\n")),(0,c.kt)("p",null,"3.\u62f7\u8d1d\u6784\u5efa\u7684\u63d2\u4ef6\u5305\u5230\u955c\u50cf\u6784\u5efa\u76ee\u5f55\u4e0b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"cp -r flink-dist ./flinkx-docker/docker\n")),(0,c.kt)("p",null,"4.\u6784\u5efa\u955c\u50cf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"cd ./flinkx-docker/docker\ndocker build -t ${image_name} .\n")),(0,c.kt)("p",null,"\u955c\u50cf\u6784\u5efa\u5b8c\u6210\u540e\u53ef\u63a8\u9001\u5230docker hub\u4f9b\u540e\u7eed\u4f7f\u7528"))}f.isMDXComponent=!0}}]);