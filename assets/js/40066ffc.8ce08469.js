"use strict";(self.webpackChunkrrg_api_documentation=self.webpackChunkrrg_api_documentation||[]).push([[4912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5239:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{collapsible:t,level:r,row:n,request:i,response:o,parameter:s="",dataType:p="string",required:c=!1,description:l="",...m}=e;const[d,u]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement("tr",{className:`param-row ${r?`level--${r}`:""} ${t?"collapsible "+(d?"expanded":""):""}`,onClick:()=>{t&&u(!d)}},a.createElement("td",null,a.createElement("div",{className:"param-container"},a.createElement("div",{className:"parameter"},t?a.createElement("i",{className:"bi bi-chevron-"+(d?"down":"right")}):a.createElement(a.Fragment,null),a.createElement("span",null,s)),a.createElement("span",{className:"data-type"},a.createElement("code",null,p)))),i?a.createElement("td",{className:c?"required":""},c?"true":"false"):a.createElement(a.Fragment,null),a.createElement("td",null,l)),d?m.children:a.createElement(a.Fragment,null))}},9062:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7462),n=r(7294),i=r(5239);const o=e=>{let{...t}=e;const[r,o]=(0,n.useState)(!0);return n.createElement(i.Z,(0,a.Z)({response:!0},t))}},4954:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7462),n=r(7294),i=r(9062);const o=[{parameter:"_id",description:"The reference ID for this restoration site."},{parameter:"name",description:"The name of the restoration site."},{parameter:"description",description:"A description of the restoration site."},{parameter:"workHoursCreated",dataType:"number",description:"The number of work hours created on this restoration site."},{parameter:"workersEmployed",dataType:"number",description:"The number of workers employed on this restoration site."}],s=[{parameter:"region",description:"The region the restoration site is located in."},{parameter:"province",description:"The province the restoration site is located in."},{parameter:"city",description:"The city the restoration site is located in."},{parameter:"partnerName",description:"The name of the partner that runs the restoration site."},{parameter:"siteType",description:"The type of the restoration site."},{parameter:"acreage",description:"How many acres the restoration site covers."},{parameter:"hectaresToRestore",description:"The number of hectares to be restored."},{parameter:"totalPlantQuantity",description:"The total number of plants being planted at the restoration site."},{parameter:"season",description:"Season of planting for the restoration site."},{parameter:"restorationTypes",description:"The types of restoration taking place at the site."},{parameter:"siteStatus",description:"The planting status of the site."},{parameter:"acresRestored",description:"The number of acres that have been restored by efforts at the site."},{parameter:"treesPlantedPerDay",description:"Approximate number of trees planted per day at the site."},{parameter:"description",description:"The description of the site."},{parameter:"latitude",description:"The latitude the restoration site is located in."},{parameter:"longitude",description:"The longitude the restoration site is located in."},{parameter:"projectedPlantingDate",description:"The projected planting date at the site."},{parameter:"treesPerHectare",description:"Approximate number of trees per Hectare at the site."},{parameter:"actualPlantedSeason",description:"The actual planted year at the site."},{parameter:"plantingCompleted",description:"The planting completed date at the site."}],p=e=>{let{level:t=0,...r}=e;return n.createElement(n.Fragment,null,o.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t})))),n.createElement(i.Z,{parameter:"mapImg",description:"If present, may contain a url to a top-down map view of the site.",level:t,dataType:"object",collapsible:!0},n.createElement(i.Z,{parameter:"publicUrl",description:"URL to retrieve the map image.",level:t+1})),n.createElement(i.Z,{parameter:"metadata",description:"Additional site metadata (some fields may not be present).",level:t,dataType:"object",collapsible:!0},s.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t+1}))))))}},5582:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7462),n=r(7294),i=r(9062),o=r(4954),s=r(3725);const p=[{parameter:"_id",description:"The reference ID for this tree."},{parameter:"status",dataType:"number",description:"The status of this tree. 100 means the tree is in escrow, 200 means the tree is released from escrow, and 300 means the tree has been planted."}],c=e=>{let{level:t=0,populateRefs:r=!1,...c}=e;return n.createElement(n.Fragment,null,p.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t})))),r?n.createElement(n.Fragment,null,n.createElement(i.Z,{parameter:"site",description:"The details for the restoration site where the tree is located.",collapsible:!0,level:t},n.createElement(o.Z,{level:t+1})),n.createElement(i.Z,{parameter:"treeType",description:"The tree type details for this tree.",collapsible:!0,level:t},n.createElement(s.Z,{level:t+1}))):n.createElement(n.Fragment,null,n.createElement(i.Z,{parameter:"site",description:"The reference ID for the restoration site that this tree is located at."}),n.createElement(i.Z,{parameter:"treeType",description:"The reference ID for the tree type details of this tree."})))}},3725:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7462),n=r(7294),i=r(9062);const o=[{parameter:"_id",description:"The reference ID for this tree type."},{parameter:"name",description:"The name of this tree type."},{parameter:"species",description:"The species of this tree type"},{parameter:"lbsCarbonPerYear",dataType:"number",description:"The pounds of carbon this tree type sequesters per year."},{parameter:"yearsOfLife",dataType:"number",description:"The average number of years that carbon sequestering is measured for this tree type, from the date it is first planted."},{parameter:"carbonWeight",dataType:"number",description:"Weight of carbon/tree(lbs) of this tree type."},{parameter:"dryWeight",dataType:"number",description:"Dryweight(lbs) of this tree type."},{parameter:"greenWeightRoots",dataType:"number",description:"Total greenweight including roots(lb) of this tree type."},{parameter:"groundWeight",dataType:"number",description:"Aboveground Weight(Lbs) of this tree type."},{parameter:"habitat",dataType:"number",description:"Habitat of this tree type."},{parameter:"medianDbh",dataType:"number",description:"Median DBH(ft) of this tree type."},{parameter:"source",dataType:"number",description:"Source of this tree type."},{parameter:"uses",dataType:"number",description:"The uses of this tree type."},{parameter:"image",description:"The image url of this tree type.",children:[{parameter:"file",dataType:"string",description:"The file path of this tree type."},{parameter:"publicUrl",dataType:"string",description:"The public image url of this tree type."}]}],s=e=>{let{level:t=0,...r}=e;return n.createElement(n.Fragment,null,o.map((e=>e.children?n.createElement(i.Z,{key:e.parameter,parameter:e.parameter,description:e.description,collapsible:!0,level:t},e.children.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t+1}))))):n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t})))))}},4655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905)),i=r(5582);const o={},s="GET tree",p={unversionedId:"rest-api-reference/accounts-client-id/get-tree-by-id",id:"rest-api-reference/accounts-client-id/get-tree-by-id",title:"GET tree",description:"",source:"@site/docs/rest-api-reference/accounts-client-id/get-tree-by-id.mdx",sourceDirName:"rest-api-reference/accounts-client-id",slug:"/rest-api-reference/accounts-client-id/get-tree-by-id",permalink:"/Restoration-Dashboard-API-Documentation/docs/rest-api-reference/accounts-client-id/get-tree-by-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GET sites",permalink:"/Restoration-Dashboard-API-Documentation/docs/rest-api-reference/accounts-client-id/get-sites"},next:{title:"GET treeType",permalink:"/Restoration-Dashboard-API-Documentation/docs/rest-api-reference/accounts-client-id/get-tree-type-by-id"}},c={},l=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=m("BaseUrlPath"),u=m("RequestParamTable"),h=m("RequestParamRow"),f=m("ResponseParamTable"),y={toc:l};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-tree"},"GET tree"),(0,n.kt)("p",null,"Endpoint to retrieve a tree by ID."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(d,{mdxType:"BaseUrlPath"},"trees/:TREE_ID"),(0,n.kt)(u,{route:!0,mdxType:"RequestParamTable"},(0,n.kt)(h,{parameter:"TREE_ID",required:!0,description:"A string referring to the tree ID.",mdxType:"RequestParamRow"})),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)(f,{mdxType:"ResponseParamTable"},(0,n.kt)(i.Z,{populateRefs:!0,mdxType:"TreeParamRows"})))}b.isMDXComponent=!0}}]);