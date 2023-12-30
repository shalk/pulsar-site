"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68489],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),o=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return n.createElement(u.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(t),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return t?n.createElement(f,s(s({ref:a},p),{},{components:t})):n.createElement(f,s({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28802:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:t},a)}},10599:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(87462),r=t(67294),l=t(86010),s=t(12466),i=t(16550),u=t(91980),o=t(67392),p=t(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function c(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function v(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=c(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[u,o]=f({queryString:t,groupId:n}),[m,v]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,p.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),h=(()=>{const e=u??m;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),v(e)}),[o,v,l]),tabValues:l}}var h=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:a,block:t,selectedValue:i,selectValue:u,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),c=e=>{const a=e.currentTarget,t=p.indexOf(a),n=o[t].value;n!==i&&(m(a),u(n))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},o.map((e=>{let{value:a,label:t,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:c},s,{className:(0,l.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function T(e){const a=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},e,a)),r.createElement(g,(0,n.Z)({},e,a)))}function y(e){const a=(0,h.Z)();return r.createElement(T,(0,n.Z)({key:String(a)},e))}},63212:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=t(87462),r=(t(67294),t(3905)),l=t(10599),s=t(28802);const i={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants"},u=void 0,o={unversionedId:"admin-api-tenants",id:"version-3.0.x/admin-api-tenants",title:"Managing Tenants",description:"This page only shows some frequently used operations.",source:"@site/versioned_docs/version-3.0.x/admin-api-tenants.md",sourceDirName:".",slug:"/admin-api-tenants",permalink:"/docs/3.0.x/admin-api-tenants",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/admin-api-tenants.md",tags:[],version:"3.0.x",frontMatter:{id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants"},sidebar:"docsSidebar",previous:{title:"Schemas",permalink:"/docs/3.0.x/admin-api-schemas"},next:{title:"Topics",permalink:"/docs/3.0.x/admin-api-topics"}},p={},m=[{value:"Tenant resources",id:"tenant-resources",level:2},{value:"List",id:"list",level:3},{value:"Create",id:"create",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Delete",id:"delete",level:3},{value:"Update",id:"update",level:3}],c={toc:m},d="wrapper";function f(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," This page only shows ",(0,r.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},"Pulsar admin docs"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.0.x/"},"Java admin API doc"),".")))),(0,r.kt)("p",null,"Tenants, like namespaces, can be managed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/admin-api-overview"},"admin API"),". There are currently two configurable aspects of tenants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Admin roles"),(0,r.kt)("li",{parentName:"ul"},"Allowed clusters")),(0,r.kt)("h2",{id:"tenant-resources"},"Tenant resources"),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"You can list all of the tenants associated with an ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/tenants?id=list"},(0,r.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants list\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-tenant-1\nmy-tenant-2\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.0.2&apiversion=v2#operation/getTenants"},"GET /admin/v2/tenants/getTenants"))),(0,r.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"admin.tenants().getTenants();\n")))),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"You can create a new tenant."),(0,r.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/tenants?id=create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant\n")),(0,r.kt)("p",null,"When creating a tenant, you can optionally assign admin roles using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--admin-roles"),"\nflag, and clusters using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--allowed-clusters")," flag. You can specify multiple values\nas a comma-separated list. Here are some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant \\\n    --admin-roles role1,role2,role3 \\\n    --allowed-clusters cluster1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant \\\n    -r role1 \\\n    -c cluster1\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.0.2&apiversion=v2#operation/createTenant"},"PUT /admin/v2/tenants/:tenant/createTenant"))),(0,r.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"admin.tenants().createTenant(tenantName, tenantInfo);\n")))),(0,r.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,r.kt)("p",null,"You can fetch the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-configuration"},"configuration")," for an existing tenant at any time."),(0,r.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/tenants?id=get"},(0,r.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the tenant. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants get my-tenant\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n'))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.0.2&apiversion=v2#operation/getTenant"},"GET /admin/v2/tenants/:tenant/getTenant"))),(0,r.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"admin.tenants().getTenantInfo(tenantName);\n")))),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Tenants can be deleted from a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/tenants?id=delete"},(0,r.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the tenant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants delete my-tenant\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.0.2&apiversion=v2#operation/deleteTenant"},"DELETE /admin/v2/tenants/:tenant/deleteTenant"))),(0,r.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"admin.Tenants().deleteTenant(tenantName);\n")))),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"You can update a tenant's configuration."),(0,r.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/tenants?id=update"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants update my-tenant \\\n    --admin-roles role1,role2 \\\n    --allowed-clusters cluster1,cluster2\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.0.2&apiversion=v2#operation/updateTenant"},"POST /admin/v2/tenants/:tenant/updateTenant"))),(0,r.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"admin.tenants().updateTenant(tenantName, tenantInfo);\n")))))}f.isMDXComponent=!0}}]);