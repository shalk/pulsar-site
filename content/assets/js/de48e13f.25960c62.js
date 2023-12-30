"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49256],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),o=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(t),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return t?n.createElement(k,p(p({ref:a},u),{},{components:t})):n.createElement(k,p({ref:a},u))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28802:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function p(e){let{children:a,hidden:t,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,p),hidden:t},a)}},10599:(e,a,t)=>{t.d(a,{Z:()=>N});var n=t(87462),l=t(67294),r=t(86010),p=t(12466),i=t(16550),s=t(91980),o=t(67392),u=t(50012);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function m(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function k(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=m(e),[p,i]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[s,o]=k({queryString:t,groupId:n}),[c,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,u.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),v=(()=>{const e=s??c;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:p,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),g(e)}),[o,g,r]),tabValues:r}}var v=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,p.o5)(),m=e=>{const a=e.currentTarget,t=u.indexOf(a),n=o[t].value;n!==i&&(c(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},o.map((e=>{let{value:a,label:t,attributes:p}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>u.push(e),onKeyDown:d,onClick:m},p,{className:(0,r.Z)("tabs__item",f.tabItem,p?.className,{"tabs__item--active":i===a})}),t??a)})))}function b(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function y(e){const a=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(h,(0,n.Z)({},e,a)),l.createElement(b,(0,n.Z)({},e,a)))}function N(e){const a=(0,v.Z)();return l.createElement(y,(0,n.Z)({key:String(a)},e))}},4661:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(87462),l=(t(67294),t(3905)),r=t(10599),p=t(28802);const i={id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},s=void 0,o={unversionedId:"admin-api-packages",id:"version-2.8.x/admin-api-packages",title:"Manage packages",description:"Package management enables version management and simplifies the upgrade and rollback processes for Functions, Sinks, and Sources. When you use the same function, sink and source in different namespaces, you can upload them to a common package management system.",source:"@site/versioned_docs/version-2.8.x/admin-api-packages.md",sourceDirName:".",slug:"/admin-api-packages",permalink:"/docs/2.8.x/admin-api-packages",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/admin-api-packages.md",tags:[],version:"2.8.x",frontMatter:{id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Functions",permalink:"/docs/2.8.x/admin-api-functions"},next:{title:"Kafka client wrapper",permalink:"/docs/2.8.x/adaptors-kafka"}},u={},c=[{value:"Package name",id:"package-name",level:2},{value:"Package URL",id:"package-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Package resources",id:"package-resources",level:2},{value:"Upload a package",id:"upload-a-package",level:3},{value:"Download a package",id:"download-a-package",level:3},{value:"List all versions of a package",id:"list-all-versions-of-a-package",level:3},{value:"List all the specified type packages under a namespace",id:"list-all-the-specified-type-packages-under-a-namespace",level:3},{value:"Get the metadata of a package",id:"get-the-metadata-of-a-package",level:3},{value:"Update the metadata of a package",id:"update-the-metadata-of-a-package",level:3},{value:"Delete a specified package",id:"delete-a-specified-package",level:3}],m={toc:c},d="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Package management enables version management and simplifies the upgrade and rollback processes for Functions, Sinks, and Sources. When you use the same function, sink and source in different namespaces, you can upload them to a common package management system."),(0,l.kt)("h2",{id:"package-name"},"Package name"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," is identified by five parts: ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tenant"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"package name"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"version"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Part"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the package. The following types are supported: ",(0,l.kt)("inlineCode",{parentName:"td"},"function"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sink")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"source"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"The fully qualified name of the package: ",(0,l.kt)("inlineCode",{parentName:"td"},"<tenant>/<namespace>/<package name>"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"version")),(0,l.kt)("td",{parentName:"tr",align:null},"The version of the package.")))),(0,l.kt)("p",null,"The following is a code sample."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nclass PackageName {\n   private final PackageType type;\n   private final String namespace;\n   private final String tenant;\n   private final String name;\n   private final String version;\n}\n\nenum PackageType {\n   FUNCTION("function"), SINK("sink"), SOURCE("source");\n}\n\n')),(0,l.kt)("h2",{id:"package-url"},"Package URL"),(0,l.kt)("p",null,"A package is located using a URL. The package URL is written in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n<type>://<tenant>/<namespace>/<package name>@<version>\n\n")),(0,l.kt)("p",null,"The following are package URL examples:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sink://public/default/mysql-sink@1.0"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"function://my-tenant/my-ns/my-function@0.1"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"source://my-tenant/my-ns/mysql-cdc-source@2.3")),(0,l.kt)("p",null,"The package management system stores the data, versions and metadata of each package. The metadata is shown in the following table."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"metadata"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"The description of the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contact"),(0,l.kt)("td",{parentName:"tr",align:null},"The contact information of a package. For example, team email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the package is created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modification_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the package is modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"A key/value map that stores your own information.")))),(0,l.kt)("h2",{id:"permissions"},"Permissions"),(0,l.kt)("p",null,"The packages are organized by the tenant and namespace, so you can apply the tenant and namespace permissions to packages directly."),(0,l.kt)("h2",{id:"package-resources"},"Package resources"),(0,l.kt)("p",null,"You can use the package management with command line tools, REST API and Java client."),(0,l.kt)("h3",{id:"upload-a-package"},"Upload a package"),(0,l.kt)("p",null,"You can upload a package to the package management service in the following ways."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages upload function://public/default/example@v0.1 --path package-file --description package-description\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.8.4&apiversion=v3#operation/upload"},"POST /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/upload"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Upload a package to the package management service synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   void upload(PackageMetadata metadata, String packageName, String path) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Upload a package to the package management service asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> uploadAsync(PackageMetadata metadata, String packageName, String path);\n\n")))),(0,l.kt)("h3",{id:"download-a-package"},"Download a package"),(0,l.kt)("p",null,"You can download a package to the package management service in the following ways."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages download function://public/default/example@v0.1 --path package-file\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.8.4&apiversion=v3#operation/download"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/download"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Download a package to the package management service synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   void download(String packageName, String path) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Download a package to the package management service asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> downloadAsync(String packageName, String path);\n\n")))),(0,l.kt)("h3",{id:"list-all-versions-of-a-package"},"List all versions of a package"),(0,l.kt)("p",null,"You can get a list of all versions of a package in the following ways."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.8.4&apiversion=v3#operation/listPackageVersion"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/listPackageVersion"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"List all versions of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   List<String> listPackageVersions(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"List all versions of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<List<String>> listPackageVersionsAsync(String packageName);\n\n")))),(0,l.kt)("h3",{id:"list-all-the-specified-type-packages-under-a-namespace"},"List all the specified type packages under a namespace"),(0,l.kt)("p",null,"You can get a list of all the packages with the given type in a namespace in the following ways."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.8.4&apiversion=v3#operation/listPackages"},"PUT /admin/v3/packages/:type/:tenant/:namespace/listPackages"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"List all the packages with the given type in a namespace synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   List<String> listPackages(String type, String namespace) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"List all the packages with the given type in a namespace asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<List<String>> listPackagesAsync(String type, String namespace);\n\n")))),(0,l.kt)("h3",{id:"get-the-metadata-of-a-package"},"Get the metadata of a package"),(0,l.kt)("p",null,"You can get the metadata of a package in the following ways."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages get-metadata function://public/default/test@v1\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.8.4&apiversion=v3#operation/getMeta"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata/getMeta"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Get the metadata of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   PackageMetadata getMetadata(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Get the metadata of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<PackageMetadata> getMetadataAsync(String packageName);\n\n")))),(0,l.kt)("h3",{id:"update-the-metadata-of-a-package"},"Update the metadata of a package"),(0,l.kt)("p",null,"You can update the metadata of a package in the following ways."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages update-metadata function://public/default/example@v0.1 --description update-description\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.8.4&apiversion=v3#operation/updateMeta"},"PUT /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata/updateMeta"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Update a package metadata information synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   void updateMetadata(String packageName, PackageMetadata metadata) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Update a package metadata information asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> updateMetadataAsync(String packageName, PackageMetadata metadata);\n\n")))),(0,l.kt)("h3",{id:"delete-a-specified-package"},"Delete a specified package"),(0,l.kt)("p",null,"You can delete a specified package with its package name in the following ways."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"The following command example deletes a package of version 0.1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages delete function://public/default/example@v0.1\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.8.4&apiversion=v3#operation/delete"},"DELETE /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/delete"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Delete a specified package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   void delete(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Delete a specified package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> deleteAsync(String packageName);\n\n")))))}k.isMDXComponent=!0}}]);