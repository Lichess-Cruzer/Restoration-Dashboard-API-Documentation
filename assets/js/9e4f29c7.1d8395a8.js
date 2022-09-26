"use strict";(self.webpackChunkrrg_api_documentation=self.webpackChunkrrg_api_documentation||[]).push([[9955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,y=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return r?a.createElement(y,s(s({ref:t},d),{},{components:r})):a.createElement(y,s({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5239:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{collapsible:t,level:r,row:n,request:o,response:s,parameter:c="",dataType:i="string",required:l=!1,description:d="",...m}=e;const[p,u]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement("tr",{className:`param-row ${r?`level--${r}`:""} ${t?"collapsible "+(p?"expanded":""):""}`,onClick:()=>{t&&u(!p)}},a.createElement("td",null,a.createElement("div",{className:"param-container"},a.createElement("div",{className:"parameter"},t?a.createElement("i",{className:"bi bi-chevron-"+(p?"down":"right")}):a.createElement(a.Fragment,null),a.createElement("span",null,c)),a.createElement("span",{className:"data-type"},a.createElement("code",null,i)))),o?a.createElement("td",{className:l?"required":""},l?"true":"false"):a.createElement(a.Fragment,null),a.createElement("td",null,d)),p?m.children:a.createElement(a.Fragment,null))}},9062:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7462),n=r(7294),o=r(5239);const s=e=>{let{...t}=e;const[r,s]=(0,n.useState)(!0);return n.createElement(o.Z,(0,a.Z)({response:!0},t))}},6019:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(7462),n=r(7294),o=r(9062);const s=[{parameter:"orderCount",dataType:"number",description:"The number of orders in the system from the start to the end of this day."},{parameter:"treesCommitted",dataType:"number",description:"The number of trees that have been committed to be planted for all of the orders received on this day."},{parameter:"treesMatched",dataType:"number",description:"The number of trees that have been matched to orders received on this day."},{parameter:"treesInEscrow",dataType:"number",description:"The number of trees matched to orders received on this day that are in escrow."},{parameter:"treesReleasedFromEscrow",dataType:"number",description:"The number of trees matched to orders received on this day that have been released from escrow."},{parameter:"treesPlanted",dataType:"number",description:"The number of trees matched to orders received on this day that have been planted."}],c=[{parameter:"lbsCarbonToBeSequestered",dataType:"number",description:'The total amount of carbon (in US Customary "pounds") that will be sequestered over the life of the trees matched to orders on this account.'},{parameter:"workHoursCreated",dataType:"number",description:"The number of work hours created on restoration sites as a result of the orders received on this day."},{parameter:"workersEmployed",dataType:"number",description:"The number of workers employed as a result of the orders received on this day.."}],i=e=>{let{level:t=0,accountAggregate:r=!1,...i}=e;const l=(0,n.useMemo)((()=>r?s.concat(c):s),[r]);return n.createElement(n.Fragment,null,!r&&n.createElement(o.Z,{parameter:"day",description:'The day of data, formatted as "YYYY-MM-DD".',level:t}),n.createElement(o.Z,{parameter:"lastUpdatedAt",dataType:"datestring",description:"The timestamp of the last time this data was updated."}),n.createElement(o.Z,{parameter:"data",description:"The aggregated order/tree data.",collapsible:!0,level:t},l.map((e=>n.createElement(o.Z,(0,a.Z)({key:e.parameter},e,{level:t+1}))))))}},1189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),o=r(6019);const s={},c="GET days summary",i={unversionedId:"rest-api-reference/accounts-client-id/get-days-summary",id:"rest-api-reference/accounts-client-id/get-days-summary",title:"GET days summary",description:"Endpoint to retrieve a total all-time summary aggregate of orders and trees for the account.",source:"@site/docs/rest-api-reference/accounts-client-id/get-days-summary.mdx",sourceDirName:"rest-api-reference/accounts-client-id",slug:"/rest-api-reference/accounts-client-id/get-days-summary",permalink:"/docs/rest-api-reference/accounts-client-id/get-days-summary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Account Routes",permalink:"/docs/category/account-routes"},next:{title:"GET days",permalink:"/docs/rest-api-reference/accounts-client-id/get-days"}},l={},d=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=m("BaseUrlPath"),u=m("ResponseParamTable"),y={toc:d};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-days-summary"},"GET days summary"),(0,n.kt)("p",null,"Endpoint to retrieve a total all-time summary aggregate of orders and trees for the account."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(p,{mdxType:"BaseUrlPath"},"days/summary"),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(u,{mdxType:"ResponseParamTable"},(0,n.kt)(o.ZP,{accountAggregate:!0,mdxType:"DayParamRows"})))}f.isMDXComponent=!0}}]);