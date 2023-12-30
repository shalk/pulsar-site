"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),l=n(86010),s=n(12466),i=n(16550),o=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,c]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var k=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},48840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(10599),s=n(28802);const i={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++"},o=void 0,c={unversionedId:"client-libraries-cpp",id:"version-2.11.x/client-libraries-cpp",title:"Pulsar C++ client",description:"You can use a Pulsar C++ client to create producers, consumers, and readers. For Pulsar features that C++ clients support, see Client Feature Matrix. For complete examples, refer to C++ client examples.",source:"@site/versioned_docs/version-2.11.x/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/2.11.x/client-libraries-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/client-libraries-cpp.md",tags:[],version:"2.11.x",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++"},sidebar:"docsSidebar",previous:{title:"Python",permalink:"/docs/2.11.x/client-libraries-python"},next:{title:"Node.js",permalink:"/docs/2.11.x/client-libraries-node"}},u={},p=[{value:"Changes for version 3.0.0 or later",id:"changes-for-version-300-or-later",level:2},{value:"Installation",id:"installation",level:2},{value:"Brew",id:"brew",level:3},{value:"Deb",id:"deb",level:3},{value:"RPM",id:"rpm",level:3},{value:"APK",id:"apk",level:3},{value:"Connection URLs",id:"connection-urls",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Release notes",id:"release-notes",level:2},{value:"Create a producer",id:"create-a-producer",level:2},{value:"Simple blocking example",id:"simple-blocking-example",level:3},{value:"Non-blocking example",id:"non-blocking-example",level:3},{value:"Partitioned topics and lazy producers",id:"partitioned-topics-and-lazy-producers",level:3},{value:"Enable chunking",id:"enable-chunking",level:3},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Blocking example",id:"blocking-example",level:3},{value:"Consumer with a message listener",id:"consumer-with-a-message-listener",level:3},{value:"Configure chunking",id:"configure-chunking",level:3},{value:"Schema",id:"schema",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use a Pulsar C++ client to create producers, consumers, and readers. For Pulsar features that C++ clients support, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Client Feature Matrix"),". For complete examples, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp/tree/main/examples"},"C++ client examples"),"."),(0,r.kt)("h2",{id:"changes-for-version-300-or-later"},"Changes for version 3.0.0 or later"),(0,r.kt)("p",null,"The new version of the Pulsar C++ client starts from 3.0.0 and has been no longer consistent with Pulsar since 2.10.x. For the latest releases, see the ",(0,r.kt)("a",{parentName:"p",href:"/download/"},"Download")," page."),(0,r.kt)("p",null,"Take the ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.0.0/"},"3.0.0 release")," for example, there are following subdirectories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"apk-arm64: the Alpine Linux packages for ARM64 architectures"),(0,r.kt)("li",{parentName:"ul"},"apk-x86_64: the Alpine Linux packages for x64 architectures"),(0,r.kt)("li",{parentName:"ul"},"deb-arm64: the Debian-based Linux packages for ARM64 architectures"),(0,r.kt)("li",{parentName:"ul"},"deb-x86_64: the Debian-based Linux packages for x64 architectures"),(0,r.kt)("li",{parentName:"ul"},"rpm-arm64: the RedHat-based Linux packages for ARM64 architectures"),(0,r.kt)("li",{parentName:"ul"},"rpm-x86_64: the RedHat-based Linux packages for x64 architectures")),(0,r.kt)("p",null,"These Linux packages above all contain the C++ headers installed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/include")," and the following libraries installed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"libpulsar.so: the shared library that links 3rd party dependencies statically"),(0,r.kt)("li",{parentName:"ul"},"libpulsar.a: the static library"),(0,r.kt)("li",{parentName:"ul"},"libpulsarwithdeps.a: the fat static library that includes all 3rd party dependencies")),(0,r.kt)("p",null,"Here is an example to link these libraries for a C++ source file named ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Link to libpulsar.so\ng++ -std=c++11 main.cc -lpulsar\n# Link to libpulsarwithdeps.a\ng++ -std=c++11 main.cc /usr/lib/libpulsarwithdeps.a -lpthread -ldl\n# Link to libpulsar.a\ng++ -std=c++11 main.cc /usr/lib/libpulsar.a \\\n  -lprotobuf -lcurl -lssl -lcrypto -lz -lzstd -lsnappy -lpthread -ldl\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Linking to ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," can be difficult for beginners because the 3rd party dependencies must be compatible. For example, the protobuf version must be 3.20.0 or higher for Pulsar C++ client 3.0.0. It's better to link to ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," instead.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Before 3.0.0, there was a ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),", which is removed now.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Use one of the following methods to install a Pulsar C++ client."),(0,r.kt)("h3",{id:"brew"},"Brew"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," to install the latest tagged version with the library and headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install libpulsar\n")),(0,r.kt)("h3",{id:"deb"},"Deb"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download any one of the Deb packages:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"client",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.4.2/deb-x86_64/apache-pulsar-client.deb\n")),(0,r.kt)("p",{parentName:"li"},"This package contains shared libraries ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,r.kt)(s.Z,{value:"client-devel",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.4.2/deb-x86_64/apache-pulsar-client-dev.deb\n")),(0,r.kt)("p",{parentName:"li"},"This package contains static libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a"),", and C/C++ headers.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the package using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install ./apache-pulsar-client*.deb\n")))),(0,r.kt)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("h3",{id:"rpm"},"RPM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download any one of the RPM packages:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"client",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.4.2/rpm-x86_64/x86_64/apache-pulsar-client-3.4.2-1.x86_64.rpm\n")),(0,r.kt)("p",{parentName:"li"},"This package contains shared libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,r.kt)(s.Z,{value:"client-debuginfo",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.4.2/rpm-x86_64/x86_64/apache-pulsar-client-debuginfo-3.4.2-1.x86_64.rpm\n")),(0,r.kt)("p",{parentName:"li"},"This package contains debug symbols for ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so"),".")),(0,r.kt)(s.Z,{value:"client-devel",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.4.2/rpm-x86_64/x86_64/apache-pulsar-client-devel-3.4.2-1.x86_64.rpm\n")),(0,r.kt)("p",{parentName:"li"},"This package contains static libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," and C/C++ headers.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the package using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -ivh apache-pulsar-client*.rpm\n")))),(0,r.kt)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'If you get an error like "libpulsar.so: cannot open shared object file: No such file or directory" when starting a Pulsar client, you need to run ',(0,r.kt)("inlineCode",{parentName:"p"},"ldconfig")," first.")),(0,r.kt)("h3",{id:"apk"},"APK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apk add --allow-untrusted ./apache-pulsar-client-*.apk\n")),(0,r.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,r.kt)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,r.kt)("inlineCode",{parentName:"p"},"6650"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,r.kt)("p",null,"If you have multiple brokers, separate ",(0,r.kt)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-authentication"},"mTLS authentication"),", add ",(0,r.kt)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("p",null,"All the methods in producer, consumer, and reader of Pulsar C++ clients are thread-safe. See the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/cpp/3.4.x"},"API docs")," for more details."),(0,r.kt)("h2",{id:"release-notes"},"Release notes"),(0,r.kt)("p",null,"For the changelog of Pulsar C++ clients, see ",(0,r.kt)("a",{parentName:"p",href:"/release-notes/#c"},"release notes"),"."),(0,r.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.kt)("p",null,"To use Pulsar as a producer, you need to create a producer on the C++ client. There are two main ways of using a producer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#simple-blocking-example"},"Blocking style")," : each call to ",(0,r.kt)("inlineCode",{parentName:"li"},"send")," waits for an ack from the broker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#non-blocking-example"},"Non-blocking asynchronous style")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"sendAsync")," is called instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"send")," and a callback is supplied for when the ack is received from the broker.")),(0,r.kt)("h3",{id:"simple-blocking-example"},"Simple blocking example"),(0,r.kt)("p",null,"This example sends 100 messages using the blocking style. While simple, it does not produce high throughput as it waits for each ack to come back before sending the next message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n#include <thread>\n\nusing namespace pulsar;\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Producer producer;\n\n    Result result = client.createProducer("persistent://public/default/my-topic", producer);\n    if (result != ResultOk) {\n        std::cout << "Error creating producer: " << result << std::endl;\n        return -1;\n    }\n\n    // Send 100 messages synchronously\n    int ctr = 0;\n    while (ctr < 100) {\n        std::string content = "msg" + std::to_string(ctr);\n        Message msg = MessageBuilder().setContent(content).setProperty("x", "1").build();\n        Result result = producer.send(msg);\n        if (result != ResultOk) {\n            std::cout << "The message " << content << " could not be sent, received code: " << result << std::endl;\n        } else {\n            std::cout << "The message " << content << " sent successfully" << std::endl;\n        }\n\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        ctr++;\n    }\n\n    std::cout << "Finished producing synchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"non-blocking-example"},"Non-blocking example"),(0,r.kt)("p",null,"This example sends 100 messages using the non-blocking style calling ",(0,r.kt)("inlineCode",{parentName:"p"},"sendAsync")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"send"),". This allows the producer to have multiple messages in-flight at a time which increases throughput."),(0,r.kt)("p",null,"The producer configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"blockIfQueueFull")," is useful here to avoid ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultProducerQueueIsFull")," errors when the internal queue for outgoing send requests becomes full. Once the internal queue is full, ",(0,r.kt)("inlineCode",{parentName:"p"},"sendAsync")," becomes blocking which can make your code simpler."),(0,r.kt)("p",null,"Without this configuration, the result code ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultProducerQueueIsFull")," is passed to the callback. You must decide how to deal with that (retry, discard etc)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n#include <thread>\n#include <atomic>\n\nusing namespace pulsar;\n\nstd::atomic<uint32_t> acksReceived;\n\nvoid callback(Result code, const MessageId& msgId, std::string msgContent) {\n    // message processing logic here\n    std::cout << "Received ack for msg: " << msgContent << " with code: "\n        << code << " -- MsgID: " << msgId << std::endl;\n    acksReceived++;\n}\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    ProducerConfiguration producerConf;\n    producerConf.setBlockIfQueueFull(true);\n    Producer producer;\n    Result result = client.createProducer("persistent://public/default/my-topic",\n                                          producerConf, producer);\n    if (result != ResultOk) {\n        std::cout << "Error creating producer: " << result << std::endl;\n        return -1;\n    }\n\n    // Send 100 messages asynchronously\n    int ctr = 0;\n    while (ctr < 100) {\n        std::string content = "msg" + std::to_string(ctr);\n        Message msg = MessageBuilder().setContent(content).setProperty("x", "1").build();\n        producer.sendAsync(msg, std::bind(callback,\n                                          std::placeholders::_1, std::placeholders::_2, content));\n\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        ctr++;\n    }\n\n    // wait for 100 messages to be acked\n    while (acksReceived < 100) {\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n\n    std::cout << "Finished producing asynchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"partitioned-topics-and-lazy-producers"},"Partitioned topics and lazy producers"),(0,r.kt)("p",null,"When scaling out a Pulsar topic, you may configure a topic to have hundreds of partitions. Likewise, you may have also scaled out your producers so there are hundreds or even thousands of producers. This can put some strain on the Pulsar brokers as when you create a producer on a partitioned topic, internally it creates one internal producer per partition which involves communications to the brokers for each one. So for a topic with 1000 partitions and 1000 producers, it ends up creating 1,000,000 internal producers across the producer applications, each of which has to communicate with a broker to find out which broker it should connect to and then perform the connection handshake."),(0,r.kt)("p",null,"You can reduce the load caused by this combination of a large number of partitions and many producers by doing the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use SinglePartition partition routing mode (this ensures that all messages are only sent to a single, randomly selected partition)"),(0,r.kt)("li",{parentName:"ul"},"use non-keyed messages (when messages are keyed, routing is based on the hash of the key and so messages will end up being sent to multiple partitions)"),(0,r.kt)("li",{parentName:"ul"},"use lazy producers (this ensures that an internal producer is only created on demand when a message needs to be routed to a partition)")),(0,r.kt)("p",null,"With our example above, that reduces the number of internal producers spread out over the 1000 producer apps from 1,000,000 to just 1000."),(0,r.kt)("p",null,"Note that there can be extra latency for the first message sent. If you set a low send timeout, this timeout could be reached if the initial connection handshake is slow to complete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"ProducerConfiguration producerConf;\nproducerConf.setPartitionsRoutingMode(ProducerConfiguration::UseSinglePartition);\nproducerConf.setLazyStartPartitionedProducers(true);\n")),(0,r.kt)("h3",{id:"enable-chunking"},"Enable chunking"),(0,r.kt)("p",null,"Message ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/concepts-messaging#chunking"},"chunking")," enables Pulsar to process large payload messages by splitting the message into chunks at the producer side and aggregating chunked messages at the consumer side."),(0,r.kt)("p",null,"The message chunking feature is OFF by default. The following is an example about how to enable message chunking when creating a producer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ProducerConfiguration conf;\nconf.setBatchingEnabled(false);\nconf.setChunkingEnabled(true);\nProducer producer;\nclient.createProducer("my-topic", conf, producer);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To enable chunking, you need to disable batching (",(0,r.kt)("inlineCode",{parentName:"p"},"setBatchingEnabled"),"=",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") concurrently.")),(0,r.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.kt)("p",null,"To use Pulsar as a consumer, you need to create a consumer on the C++ client. There are two main ways of using the consumer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#blocking-example"},"Blocking style"),": synchronously calling ",(0,r.kt)("inlineCode",{parentName:"li"},"receive(msg)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#consumer-with-a-message-listener"},"Non-blocking")," (event-based) style: using a message listener.")),(0,r.kt)("h3",{id:"blocking-example"},"Blocking example"),(0,r.kt)("p",null,"The benefit of this approach is that it is the simplest code. Simply keeps calling ",(0,r.kt)("inlineCode",{parentName:"p"},"receive(msg)")," which blocks until a message is received."),(0,r.kt)("p",null,"This example starts a subscription at the earliest offset and consumes 100 messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\nusing namespace pulsar;\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Consumer consumer;\n    ConsumerConfiguration config;\n    config.setSubscriptionInitialPosition(InitialPositionEarliest);\n    Result result = client.subscribe("persistent://public/default/my-topic", "consumer-1", config, consumer);\n    if (result != ResultOk) {\n        std::cout << "Failed to subscribe: " << result << std::endl;\n        return -1;\n    }\n\n    Message msg;\n    int ctr = 0;\n    // consume 100 messages\n    while (ctr < 100) {\n        consumer.receive(msg);\n        std::cout << "Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'" << std::endl;\n\n        consumer.acknowledge(msg);\n        ctr++;\n    }\n\n    std::cout << "Finished consuming synchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"consumer-with-a-message-listener"},"Consumer with a message listener"),(0,r.kt)("p",null,"You can avoid running a loop by blocking calls with an event-based style by using a message listener which is invoked for each message that is received."),(0,r.kt)("p",null,"This example starts a subscription at the earliest offset and consumes 100 messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n#include <atomic>\n#include <thread>\n\nusing namespace pulsar;\n\nstd::atomic<uint32_t> messagesReceived;\n\nvoid handleAckComplete(Result res) {\n    std::cout << "Ack res: " << res << std::endl;\n}\n\nvoid listener(Consumer consumer, const Message& msg) {\n    std::cout << "Got message " << msg << " with content \'" << msg.getDataAsString() << "\'" << std::endl;\n    messagesReceived++;\n    consumer.acknowledgeAsync(msg.getMessageId(), handleAckComplete);\n}\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Consumer consumer;\n    ConsumerConfiguration config;\n    config.setMessageListener(listener);\n    config.setSubscriptionInitialPosition(InitialPositionEarliest);\n    Result result = client.subscribe("persistent://public/default/my-topic", "consumer-1", config, consumer);\n    if (result != ResultOk) {\n        std::cout << "Failed to subscribe: " << result << std::endl;\n        return -1;\n    }\n\n    // wait for 100 messages to be consumed\n    while (messagesReceived < 100) {\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n\n    std::cout << "Finished consuming asynchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"configure-chunking"},"Configure chunking"),(0,r.kt)("p",null,"You can limit the maximum number of chunked messages a consumer maintains concurrently by configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"setMaxPendingChunkedMessage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoAckOldestChunkedMessageOnQueueFull")," parameters. When the threshold is reached, the consumer drops pending messages by silently acknowledging them or asking the broker to redeliver them later."),(0,r.kt)("p",null,"The following is an example of how to configure message chunking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ConsumerConfiguration conf;\nconf.setAutoAckOldestChunkedMessageOnQueueFull(true);\nconf.setMaxPendingChunkedMessage(100);\nConsumer consumer;\nclient.subscribe("my-topic", "my-sub", conf, consumer);\n')),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"To work with ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/schema-overview"},"Pulsar schema")," using C++ clients, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/schema-get-started"},"Schema - Get started"),". For specific schema types that C++ clients support, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp/blob/main/include/pulsar/Schema.h"},"code"),"."))}h.isMDXComponent=!0}}]);