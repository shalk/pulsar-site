"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[29861],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(b,i(i({ref:a},c),{},{components:t})):n.createElement(b,i({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28802:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},a)}},10599:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(87462),r=t(67294),o=t(86010),i=t(12466),s=t(16550),l=t(91980),u=t(67392),c=t(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[l,u]=b({queryString:t,groupId:n}),[p,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),h=(()=>{const e=l??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:a,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),n=u[t].value;n!==s&&(p(a),l(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===a})}),t??a)})))}function y(e){let{lazy:a,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function g(e){const a=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(k,(0,n.Z)({},e,a)),r.createElement(y,(0,n.Z)({},e,a)))}function w(e){const a=(0,h.Z)();return r.createElement(g,(0,n.Z)({key:String(a)},e))}},69888:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),o=t(10599),i=t(28802);const s={id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation",original_id:"administration-isolation"},l=void 0,u={unversionedId:"administration-isolation",id:"version-2.8.x/administration-isolation",title:"Pulsar isolation",description:"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences.",source:"@site/versioned_docs/version-2.8.x/administration-isolation.md",sourceDirName:".",slug:"/administration-isolation",permalink:"/docs/2.8.x/administration-isolation",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/administration-isolation.md",tags:[],version:"2.8.x",frontMatter:{id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation",original_id:"administration-isolation"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Upgrade",permalink:"/docs/2.8.x/administration-upgrade"},next:{title:"Overview",permalink:"/docs/2.8.x/security-overview"}},c={},p=[{value:"Broker isolation",id:"broker-isolation",level:2},{value:"Bookie isolation",id:"bookie-isolation",level:2}],m={toc:p},d="wrapper";function b(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences."),(0,r.kt)("p",null,"To enforce resource isolation, you can use the Pulsar isolation policy, which allows you to allocate resources (",(0,r.kt)("strong",{parentName:"p"},"broker")," and ",(0,r.kt)("strong",{parentName:"p"},"bookie"),") for the namespace."),(0,r.kt)("h2",{id:"broker-isolation"},"Broker isolation"),(0,r.kt)("p",null,"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."),(0,r.kt)("p",null,"You can set a namespace isolation policy for a cluster using one of the following methods."),(0,r.kt)(o.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npulsar-admin ns-isolation-policy set options\n\n")),(0,r.kt)("p",null,"For more information about the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin ns-isolation-policy set options"),", see ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.8.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"pathname:///admin-rest-api/?version=2.8.4&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/namespaces/{tenant}/{namespace}"))),(0,r.kt)(i.Z,{value:"Java admin API",mdxType:"TabItem"},(0,r.kt)("p",null,"For how to set namespace isolation policy using Java admin API, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251"},"here"),"."))),(0,r.kt)("h2",{id:"bookie-isolation"},"Bookie isolation"),(0,r.kt)("p",null,"A namespace can be isolated into user-defined groups of bookies, which guarantees all the data that belongs to the namespace is stored in desired bookies. The bookie affinity group uses the BookKeeper ",(0,r.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/latest/api/javadoc/org/apache/bookkeeper/client/EnsemblePlacementPolicy.html"},"rack-aware placement policy")," and it is a way to feed rack information which is stored as JSON format in znode."),(0,r.kt)("p",null,"You can set a bookie affinity group using one of the following methods."),(0,r.kt)(o.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npulsar-admin namespaces set-bookie-affinity-group options\n\n")),(0,r.kt)("p",null,"For more information about the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-bookie-affinity-group options"),", see ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.8.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin bookies set-bookie-rack \\\n--bookie 127.0.0.1:3181 \\\n--hostname 127.0.0.1:3181 \\\n--group group-bookie1 \\\n--rack rack1\n\nbin/pulsar-admin namespaces set-bookie-affinity-group public/default \\\n--primary-group group-bookie1\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"pathname:///admin-rest-api/?version=2.8.4&apiversion=v2#operation/setBookieAffinityGroup"},"POST /admin/v2/namespaces/{tenant}/{namespace}/persistence/bookieAffinity"))),(0,r.kt)(i.Z,{value:"Java admin API",mdxType:"TabItem"},(0,r.kt)("p",null,"For how to set bookie affinity group for a namespace using Java admin API, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L1164"},"here"),"."))))}b.isMDXComponent=!0}}]);