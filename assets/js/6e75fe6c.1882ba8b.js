"use strict";(self.webpackChunkrrg_api_documentation=self.webpackChunkrrg_api_documentation||[]).push([[5278],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5239:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{collapsible:t,level:r,row:n,request:i,response:o,parameter:s="",dataType:p="string",required:l=!1,description:d="",...c}=e;const[m,u]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement("tr",{className:`param-row ${r?`level--${r}`:""} ${t?"collapsible "+(m?"expanded":""):""}`,onClick:()=>{t&&u(!m)}},a.createElement("td",null,a.createElement("div",{className:"param-container"},a.createElement("div",{className:"parameter"},t?a.createElement("i",{className:"bi bi-chevron-"+(m?"down":"right")}):a.createElement(a.Fragment,null),a.createElement("span",null,s)),a.createElement("span",{className:"data-type"},a.createElement("code",null,p)))),i?a.createElement("td",{className:l?"required":""},l?"true":"false"):a.createElement(a.Fragment,null),a.createElement("td",null,d)),m?c.children:a.createElement(a.Fragment,null))}},9062:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7462),n=r(7294),i=r(5239);const o=e=>{let{...t}=e;const[r,o]=(0,n.useState)(!0);return n.createElement(i.Z,(0,a.Z)({response:!0},t))}},680:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7462),n=r(7294),i=r(9062),o=r(5582);const s=[{parameter:"_id",description:"The system ID to reference the request document. Can be used to retrieve an order by ID."},{parameter:"date",description:"An ISO string representing the date the order was entered into the system."},{parameter:"orderId",description:"(external) The unique identifier (if provided) to identify the order with the your system."},{parameter:"groupId",description:"(external) Set by your application when order is created."},{parameter:"customerId",description:"(external) Set by your application when order is created."},{parameter:"invoiceId",description:"(external) Set by your application when order is created."},{parameter:"sku",description:"(external) Set by your application when order is created."},{parameter:"treesRequired",dataType:"number",description:"The number of trees to be paired with this order."},{parameter:"filled",dataType:"boolean",description:"A boolean marked true if the order has been matched to the number of trees required to fill this order."}],p=e=>{let{level:t=0,populateTrees:r=!1,...p}=e;const[l,d,c,m]=(0,n.useMemo)((()=>!0===r?["array: object","Array of tree objects, representing the trees matched to this order.","object","A tree item."]:["array: string","Array of tree IDs, which are references to the trees matched to this order.","string","A tree reference ID."]),[r]);return n.createElement(n.Fragment,null,s.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t})))),n.createElement(i.Z,{parameter:"trees",dataType:l,description:d,collapsible:!0,level:t},n.createElement(i.Z,{parameter:"trees[i]",dataType:c,description:m,collapsible:r,level:t+1},r?n.createElement(n.Fragment,null,n.createElement(o.Z,{level:t+2,populateRefs:r})):n.createElement(n.Fragment,null))))}},4954:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7462),n=r(7294),i=r(9062);const o=[{parameter:"_id",description:"The reference ID for this restoration site."},{parameter:"name",description:"The name of the restoration site."},{parameter:"description",description:"A description of the restoration site."},{parameter:"workHoursCreated",dataType:"number",description:"The number of work hours created on this restoration site."},{parameter:"workersEmployed",dataType:"number",description:"The number of workers employed on this restoration site."}],s=[{parameter:"region",description:"The region the restoration site is located in."},{parameter:"province",description:"The province the restoration site is located in."},{parameter:"city",description:"The city the restoration site is located in."},{parameter:"partnerName",description:"The name of the partner that runs the restoration site."},{parameter:"siteType",description:"The type of the restoration site."},{parameter:"acreage",description:"How many acres the restoration site covers."},{parameter:"hectaresToRestore",description:"The number of hectares to be restored."},{parameter:"totalPlantQuantity",description:"The total number of plants being planted at the restoration site."},{parameter:"season",description:"Season of planting for the restoration site."},{parameter:"restorationTypes",description:"The types of restoration taking place at the site."},{parameter:"siteStatus",description:"The planting status of the site."},{parameter:"acresRestored",description:"The number of acres that have been restored by efforts at the site."},{parameter:"treesPlantedPerDay",description:"Approximate number of trees planted per day at the site."},{parameter:"description",description:"The description of the site."},{parameter:"latitude",description:"The latitude the restoration site is located in."},{parameter:"longitude",description:"The longitude the restoration site is located in."},{parameter:"projectedPlantingDate",description:"The projected planting date at the site."},{parameter:"treesPerHectare",description:"Approximate number of trees per Hectare at the site."},{parameter:"actualPlantedSeason",description:"The actual planted year at the site."},{parameter:"plantingCompleted",description:"The planting completed date at the site."}],p=e=>{let{level:t=0,...r}=e;return n.createElement(n.Fragment,null,o.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t})))),n.createElement(i.Z,{parameter:"mapImg",description:"If present, may contain a url to a top-down map view of the site.",level:t,dataType:"object",collapsible:!0},n.createElement(i.Z,{parameter:"publicUrl",description:"URL to retrieve the map image.",level:t+1})),n.createElement(i.Z,{parameter:"metadata",description:"Additional site metadata (some fields may not be present).",level:t,dataType:"object",collapsible:!0},s.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t+1}))))))}},5582:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7462),n=r(7294),i=r(9062),o=r(4954),s=r(3725);const p=[{parameter:"_id",description:"The reference ID for this tree."},{parameter:"status",dataType:"number",description:"The status of this tree. 100 means the tree is in escrow, 200 means the tree is released from escrow, and 300 means the tree has been planted."}],l=e=>{let{level:t=0,populateRefs:r=!1,...l}=e;return n.createElement(n.Fragment,null,p.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t})))),r?n.createElement(n.Fragment,null,n.createElement(i.Z,{parameter:"site",description:"The details for the restoration site where the tree is located.",collapsible:!0,level:t},n.createElement(o.Z,{level:t+1})),n.createElement(i.Z,{parameter:"treeType",description:"The tree type details for this tree.",collapsible:!0,level:t},n.createElement(s.Z,{level:t+1}))):n.createElement(n.Fragment,null,n.createElement(i.Z,{parameter:"site",description:"The reference ID for the restoration site that this tree is located at."}),n.createElement(i.Z,{parameter:"treeType",description:"The reference ID for the tree type details of this tree."})))}},3725:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7462),n=r(7294),i=r(9062);const o=[{parameter:"_id",description:"The reference ID for this tree type."},{parameter:"name",description:"The name of this tree type."},{parameter:"species",description:"The species of this tree type"},{parameter:"lbsCarbonPerYear",dataType:"number",description:"The pounds of carbon this tree type sequesters per year."},{parameter:"yearsOfLife",dataType:"number",description:"The average number of years that carbon sequestering is measured for this tree type, from the date it is first planted."},{parameter:"carbonWeight",dataType:"number",description:"Weight of carbon/tree(lbs) of this tree type."},{parameter:"dryWeight",dataType:"number",description:"Dryweight(lbs) of this tree type."},{parameter:"greenWeightRoots",dataType:"number",description:"Total greenweight including roots(lb) of this tree type."},{parameter:"groundWeight",dataType:"number",description:"Aboveground Weight(Lbs) of this tree type."},{parameter:"habitat",dataType:"number",description:"Habitat of this tree type."},{parameter:"medianDbh",dataType:"number",description:"Median DBH(ft) of this tree type."},{parameter:"source",dataType:"number",description:"Source of this tree type."},{parameter:"uses",dataType:"number",description:"The uses of this tree type."},{parameter:"image",description:"The image url of this tree type.",children:[{parameter:"file",dataType:"string",description:"The file path of this tree type."},{parameter:"publicUrl",dataType:"string",description:"The public image url of this tree type."}]}],s=e=>{let{level:t=0,...r}=e;return n.createElement(n.Fragment,null,o.map((e=>e.children?n.createElement(i.Z,{key:e.parameter,parameter:e.parameter,description:e.description,collapsible:!0,level:t},e.children.map((e=>n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t+1}))))):n.createElement(i.Z,(0,a.Z)({key:e.parameter},e,{level:t})))))}},8530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),i=r(680);const o={},s="GET orders",p={unversionedId:"rest-api-reference/accounts-client-id/get-orders",id:"rest-api-reference/accounts-client-id/get-orders",title:"GET orders",description:"",source:"@site/docs/rest-api-reference/accounts-client-id/get-orders.mdx",sourceDirName:"rest-api-reference/accounts-client-id",slug:"/rest-api-reference/accounts-client-id/get-orders",permalink:"/Restoration-Dashboard-API-Documentation/docs/rest-api-reference/accounts-client-id/get-orders",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GET order",permalink:"/Restoration-Dashboard-API-Documentation/docs/rest-api-reference/accounts-client-id/get-order-by-id"},next:{title:"GET site",permalink:"/Restoration-Dashboard-API-Documentation/docs/rest-api-reference/accounts-client-id/get-site-by-id"}},l={},d=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=c("BaseUrlPath"),u=c("RequestParamTable"),h=c("RequestParamRow"),y=c("ResponseParamTable"),f=c("ResponseParamRow"),b={toc:d};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-orders"},"GET orders"),(0,n.kt)("p",null,"Endpoint to retrieve a list of orders (pagination enabled)."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(m,{mdxType:"BaseUrlPath"},"orders"),(0,n.kt)(u,{mdxType:"RequestParamTable"},(0,n.kt)(h,{parameter:"by",description:'A string representing the index field to query by. Valid values are "orderId", "groupId", "customerId", "invoiceId", or "sku".',mdxType:"RequestParamRow"}),(0,n.kt)(h,{parameter:"where",description:'If the "by" parameter is specified, this designates the search to only include items where the "by" field is equal to this string value.',mdxType:"RequestParamRow"}),(0,n.kt)(h,{parameter:"from",description:'An inclusive datestring to query the orders by (all orders where the orderDate is greater than or equal to "from"). Valid formats are "YYYY-MM-DD", an ISO String, or a UTC timestamp in milliseconds.',mdxType:"RequestParamRow"}),(0,n.kt)(h,{parameter:"to",description:'An exclusive datestring to query the orders by (all orders where the orderDate is less than "to"). Valid formats are "YYYY-MM-DD", an ISO String, or a UTC timestamp in milliseconds.',mdxType:"RequestParamRow"}),(0,n.kt)(h,{parameter:"dateSort",description:'Possible values: "asc" or "desc". Returns the orders sorted by ascending or descending order date, respectively.',mdxType:"RequestParamRow"}),(0,n.kt)(h,{parameter:"nextPageToken",description:"If provided, returns the next page of results.",mdxType:"RequestParamRow"}),(0,n.kt)(h,{parameter:"pageSize",description:"An integer to specify the size of the page of results from the query. The default is 100, and the max is 300.",mdxType:"RequestParamRow"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'If using "nextPageToken" to retrieve the next page of results, be sure to use the exact same query parameters as the previous call to the endpoint, or else you will not receive the results as expected.')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},'Fields marked "(external)" are fields that are set by the client application when posting orders to the restoration dashboard system. These fields can be queried for equality when querying this endpoint.')),(0,n.kt)(y,{mdxType:"ResponseParamTable"},(0,n.kt)(f,{parameter:"nextPageToken",description:"Only present if there are more results available for the same query. To retrieve the next page of results, execute the exact same query with this token added to your query parameters.",mdxType:"ResponseParamRow"}),(0,n.kt)(f,{parameter:"data",dataType:"array: object",description:"An array of order results.",collapsible:!0,mdxType:"ResponseParamRow"},(0,n.kt)(f,{parameter:"data[i]",dataType:"object",description:"An order in the array of order results.",collapsible:!0,level:1,mdxType:"ResponseParamRow"},(0,n.kt)(i.Z,{level:2,mdxType:"OrderParamRows"})))))}g.isMDXComponent=!0}}]);