"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2804],{3905:(a,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var t=n(67294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},l=Object.keys(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var o=t.createContext({}),r=function(a){var e=t.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},p=function(a){var e=r(a.components);return t.createElement(o.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,l=a.originalType,o=a.parentName,p=u(a,["components","mdxType","originalType","parentName"]),c=r(n),d=i,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?t.createElement(f,s(s({ref:e},p),{},{components:n})):t.createElement(f,s({ref:e},p))}));function d(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var l=n.length,s=new Array(l);s[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=a,u.mdxType="string"==typeof a?a:i,s[1]=u;for(var r=2;r<l;r++)s[r]=n[r];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(a,e,n)=>{n.d(e,{Z:()=>s});var t=n(67294),i=n(86010);const l="tabItem_Ymn6";function s(a){let{children:e,hidden:n,className:s}=a;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,s),hidden:n},e)}},65488:(a,e,n)=>{n.d(e,{Z:()=>d});var t=n(87462),i=n(67294),l=n(86010),s=n(72389),u=n(67392),o=n(7094),r=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(a){var e;const{lazy:n,block:s,defaultValue:c,values:d,groupId:f,className:k}=a,v=i.Children.map(a.children,(a=>{if((0,i.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),I=d??v.map((a=>{let{props:{value:e,label:n,attributes:t}}=a;return{value:e,label:n,attributes:t}})),g=(0,u.l)(I,((a,e)=>a.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const A=null===c?c:c??(null==(e=v.find((a=>a.props.default)))?void 0:e.props.value)??v[0].props.value;if(null!==A&&!I.some((a=>a.value===A)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${I.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:b}=(0,o.U)(),[T,N]=(0,i.useState)(A),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=f){const a=h[f];null!=a&&a!==T&&I.some((e=>e.value===a))&&N(a)}const y=a=>{const e=a.currentTarget,n=P.indexOf(e),t=I[n].value;t!==T&&(C(e),N(t),null!=f&&b(f,String(t)))},E=a=>{var e;let n=null;switch(a.key){case"Enter":y(a);break;case"ArrowRight":{const e=P.indexOf(a.currentTarget)+1;n=P[e]??P[0];break}case"ArrowLeft":{const e=P.indexOf(a.currentTarget)-1;n=P[e]??P[P.length-1];break}}null==(e=n)||e.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},k)},I.map((a=>{let{value:e,label:n,attributes:s}=a;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:a=>P.push(a),onKeyDown:E,onClick:y},s,{className:(0,l.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":T===e})}),n??e)}))),n?(0,i.cloneElement)(v.filter((a=>a.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((a,e)=>(0,i.cloneElement)(a,{key:e,hidden:a.props.value!==T})))))}function d(a){const e=(0,s.Z)();return i.createElement(c,(0,t.Z)({key:String(e)},a))}},70126:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>r,toc:()=>m});var t=n(87462),i=(n(67294),n(3905)),l=n(65488),s=n(85162);const u={id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions"},o=void 0,r={unversionedId:"admin-api-functions",id:"admin-api-functions",title:"Manage Functions",description:"This page only shows some frequently used operations.",source:"@site/docs/admin-api-functions.md",sourceDirName:".",slug:"/admin-api-functions",permalink:"/docs/next/admin-api-functions",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-functions.md",tags:[],version:"current",frontMatter:{id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions"},sidebar:"docsSidebar",previous:{title:"Topics",permalink:"/docs/next/admin-api-topics"},next:{title:"Packages",permalink:"/docs/next/admin-api-packages"}},p={},m=[{value:"Function resources",id:"function-resources",level:2},{value:"Create a function",id:"create-a-function",level:3},{value:"Update a function",id:"update-a-function",level:3},{value:"Start an instance of a function",id:"start-an-instance-of-a-function",level:3},{value:"Start all instances of a function",id:"start-all-instances-of-a-function",level:3},{value:"Stop an instance of a function",id:"stop-an-instance-of-a-function",level:3},{value:"Stop all instances of a function",id:"stop-all-instances-of-a-function",level:3},{value:"Restart an instance of a function",id:"restart-an-instance-of-a-function",level:3},{value:"Restart all instances of a function",id:"restart-all-instances-of-a-function",level:3},{value:"List all functions",id:"list-all-functions",level:3},{value:"Delete a function",id:"delete-a-function",level:3},{value:"Get info about a function",id:"get-info-about-a-function",level:3},{value:"Get status of an instance of a function",id:"get-status-of-an-instance-of-a-function",level:3},{value:"Get status of all instances of a function",id:"get-status-of-all-instances-of-a-function",level:3},{value:"Get stats of an instance of a function",id:"get-stats-of-an-instance-of-a-function",level:3},{value:"Get stats of all instances of a function",id:"get-stats-of-all-instances-of-a-function",level:3},{value:"Trigger a function",id:"trigger-a-function",level:3},{value:"Put state associated with a function",id:"put-state-associated-with-a-function",level:3},{value:"Fetch state associated with a function",id:"fetch-state-associated-with-a-function",level:3}],c={toc:m};function d(a){let{components:e,...n}=a;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"}," This page only shows ",(0,i.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"For the latest and complete information about ",(0,i.kt)("inlineCode",{parentName:"li"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar admin doc")),(0,i.kt)("li",{parentName:"ul"},"For the latest and complete information about ",(0,i.kt)("inlineCode",{parentName:"li"},"REST API"),", including parameters, responses, samples, and more, see ",(0,i.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc."),(0,i.kt)("li",{parentName:"ul"},"For the latest and complete information about ",(0,i.kt)("inlineCode",{parentName:"li"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,i.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/admin/2.10.0-SNAPSHOT/"},"Java admin API doc"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions")," are lightweight compute processes that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consume messages from one or more Pulsar topics"),(0,i.kt)("li",{parentName:"ul"},"apply a user-supplied processing logic to each message"),(0,i.kt)("li",{parentName:"ul"},"publish the results of the computation to another topic")),(0,i.kt)("p",null,"Functions can be managed via the following methods."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Admin CLI")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"functions")," command of the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"td"},"pulsar-admin"))," tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"REST API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"/admin/v3/functions")," endpoint of the admin ",(0,i.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Java Admin API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"functions")," method of the ",(0,i.kt)("inlineCode",{parentName:"td"},"PulsarAdmin")," object in the ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-java"},"Java API"),".")))),(0,i.kt)("h2",{id:"function-resources"},"Function resources"),(0,i.kt)("p",null,"You can perform the following operations on functions."),(0,i.kt)("h3",{id:"create-a-function"},"Create a function"),(0,i.kt)("p",null,"You can create a Pulsar function in cluster mode (deploy it on a Pulsar cluster) using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"create"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions create \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --inputs test-input-topic \\\n    --output persistent://public/default/test-output-topic \\\n    --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n    --jar /examples/api-examples.jar\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/registerFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'FunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nfunctionConfig.setProcessingGuarantees(FunctionConfig.ProcessingGuarantees.ATLEAST_ONCE);\nfunctionConfig.setTopicsPattern(sourceTopicPattern);\nfunctionConfig.setSubName(subscriptionName);\nfunctionConfig.setAutoAck(true);\nfunctionConfig.setOutput(sinkTopic);\nadmin.functions().createFunction(functionConfig, fileName);\n')))),(0,i.kt)("h3",{id:"update-a-function"},"Update a function"),(0,i.kt)("p",null,"You can update a Pulsar function that has been deployed to a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"update"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions update \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --output persistent://public/default/update-output-topic \\\n    # other options\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/updateFunction"},"PUT /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'FunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nUpdateOptions updateOptions = new UpdateOptions();\nupdateOptions.setUpdateAuthData(updateAuthData);\nadmin.functions().updateFunction(functionConfig, userCodeFile, updateOptions);\n')))),(0,i.kt)("h3",{id:"start-an-instance-of-a-function"},"Start an instance of a function"),(0,i.kt)("p",null,"You can start a stopped function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"start"))," subcommand. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions start \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/startFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/start"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().startFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"start-all-instances-of-a-function"},"Start all instances of a function"),(0,i.kt)("p",null,"You can start all stopped function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"start"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions start \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/startFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/start"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().startFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"stop-an-instance-of-a-function"},"Stop an instance of a function"),(0,i.kt)("p",null,"You can stop a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"stop"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions stop \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/stopFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stop"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().stopFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"stop-all-instances-of-a-function"},"Stop all instances of a function"),(0,i.kt)("p",null,"You can stop all function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"stop"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions stop \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/stopFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/stop"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().stopFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"restart-an-instance-of-a-function"},"Restart an instance of a function"),(0,i.kt)("p",null,"Restart a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"restart"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions restart \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/restartFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/restart"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().restartFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"restart-all-instances-of-a-function"},"Restart all instances of a function"),(0,i.kt)("p",null,"You can restart all function instances using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"restart"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions restart \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/restartFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/restart"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().restartFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"list-all-functions"},"List all functions"),(0,i.kt)("p",null,"You can list all Pulsar functions running under a specific tenant and namespace using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"list"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions list \\\n    --tenant public \\\n    --namespace default\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/listFunctions"},"GET /admin/v3/functions/:tenant/:namespace"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctions(tenant, namespace);\n")))),(0,i.kt)("h3",{id:"delete-a-function"},"Delete a function"),(0,i.kt)("p",null,"You can delete a Pulsar function that is running on a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"delete"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions delete \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/deregisterFunction"},"DELETE /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().deleteFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"get-info-about-a-function"},"Get info about a function"),(0,i.kt)("p",null,"You can get information about a Pulsar function currently running in cluster mode using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"get"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions get \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/getFunctionInfo"},"GET /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunction(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"get-status-of-an-instance-of-a-function"},"Get status of an instance of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"status"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/getFunctionInstanceStatus"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/status"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionStatus(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"get-status-of-all-instances-of-a-function"},"Get status of all instances of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"status"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/getFunctionStatus"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/status"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionStatus(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"get-stats-of-an-instance-of-a-function"},"Get stats of an instance of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar Function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"stats"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --instance-id 1\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/getFunctionInstanceStats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stats"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionStats(tenant, namespace, functionName, Integer.parseInt(instanceId));\n")))),(0,i.kt)("h3",{id:"get-stats-of-all-instances-of-a-function"},"Get stats of all instances of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"stats"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/getFunctionStats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/stats"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionStats(tenant, namespace, functionName);\n")))),(0,i.kt)("h3",{id:"trigger-a-function"},"Trigger a function"),(0,i.kt)("p",null,"You can trigger a specified Pulsar function with a supplied value using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"trigger"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'pulsar-admin functions trigger \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --topic (the name of input topic) \\\n    --trigger-value \\"hello pulsar\\"\n    # or --trigger-file (the path of trigger file)\n'))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/triggerFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/trigger"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().triggerFunction(tenant, namespace, functionName, topic, triggerValue, triggerFile);\n")))),(0,i.kt)("h3",{id:"put-state-associated-with-a-function"},"Put state associated with a function"),(0,i.kt)("p",null,"You can put the state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"putstate"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'pulsar-admin functions putstate \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --state "{\\"key\\":\\"pulsar\\", \\"stringValue\\":\\"hello pulsar\\"}"\n'))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/putFunctionState"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/state/:key"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TypeReference<FunctionState> typeRef = new TypeReference<FunctionState>() {};\nFunctionState stateRepr = ObjectMapperFactory.getThreadLocal().readValue(state, typeRef);\nadmin.functions().putFunctionState(tenant, namespace, functionName, stateRepr);\n")))),(0,i.kt)("h3",{id:"fetch-state-associated-with-a-function"},"Fetch state associated with a function"),(0,i.kt)("p",null,"You can fetch the current state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"querystate"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin functions querystate \\\n    --tenant public \\\n    --namespace default \\\n    --name (the name of Pulsar Functions) \\\n    --key (the key of state)\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.10.2&apiversion=v3#operation/getFunctionState"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/state/:key"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"admin.functions().getFunctionState(tenant, namespace, functionName, key);\n")))))}d.isMDXComponent=!0}}]);