"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const s={id:"getting-started-standalone",title:"Run a standalone Pulsar cluster locally",sidebar_label:"Run Pulsar locally"},l=void 0,o={unversionedId:"getting-started-standalone",id:"version-3.0.x/getting-started-standalone",title:"Run a standalone Pulsar cluster locally",description:"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode runs all components inside a single Java Virtual Machine (JVM) process.",source:"@site/versioned_docs/version-3.0.x/getting-started-standalone.md",sourceDirName:".",slug:"/getting-started-standalone",permalink:"/docs/3.0.x/getting-started-standalone",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/getting-started-standalone.md",tags:[],version:"3.0.x",frontMatter:{id:"getting-started-standalone",title:"Run a standalone Pulsar cluster locally",sidebar_label:"Run Pulsar locally"},sidebar:"docsSidebar",previous:{title:"Get Started",permalink:"/docs/3.0.x/getting-started-home"},next:{title:"Run Pulsar in Docker",permalink:"/docs/3.0.x/getting-started-docker"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download Pulsar distribution",id:"download-pulsar-distribution",level:2},{value:"Start a Pulsar standalone cluster",id:"start-a-pulsar-standalone-cluster",level:2},{value:"Create a topic",id:"create-a-topic",level:2},{value:"Write messages to the topic",id:"write-messages-to-the-topic",level:2},{value:"Read messages from the topic",id:"read-messages-from-the-topic",level:2},{value:"Write some more messages",id:"write-some-more-messages",level:2},{value:"Stop the Pulsar cluster",id:"stop-the-pulsar-cluster",level:2},{value:"Related Topics",id:"related-topics",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode runs all components inside a single Java Virtual Machine (JVM) process."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're looking to run a full production Pulsar installation, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/deploy-bare-metal"},"Deploying a Pulsar instance")," guide.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JRE (64-bit). Different Pulsar versions rely on different JRE versions. For how to choose the JRE version, see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation"},"Pulsar Runtime Java Version Recommendation"),".")),(0,r.kt)("h2",{id:"download-pulsar-distribution"},"Download Pulsar distribution"),(0,r.kt)("p",null,"Download the official Apache Pulsar distribution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-3.0.2/apache-pulsar-3.0.2-bin.tar.gz\n")),(0,r.kt)("p",null,"Once downloaded, unpack the tar file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvfz apache-pulsar-3.0.2-bin.tar.gz\n")),(0,r.kt)("p",null,"For the rest of this quickstart all commands are run from the root of the distribution folder, so switch to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd apache-pulsar-3.0.2\n")),(0,r.kt)("p",null,"List the contents by executing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -1F\n")),(0,r.kt)("p",null,"The following directories are created:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Directory"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"bin")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.0.x/reference-cli-tools"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar"))," entry point script, and many other command-line tools")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"conf")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration files, including ",(0,r.kt)("inlineCode",{parentName:"td"},"broker.conf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lib")),(0,r.kt)("td",{parentName:"tr",align:null},"JARs used by Pulsar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"examples")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.0.x/functions-overview"},"Pulsar Functions")," examples")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"instances")),(0,r.kt)("td",{parentName:"tr",align:null},"Artifacts for ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.0.x/functions-overview"},"Pulsar Functions"))))),(0,r.kt)("h2",{id:"start-a-pulsar-standalone-cluster"},"Start a Pulsar standalone cluster"),(0,r.kt)("p",null,"Run this command to start a standalone Pulsar cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,r.kt)("p",null,"When the Pulsar cluster starts, the following directories are created:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Directory"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"All data created by BookKeeper and RocksDB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"logs")),(0,r.kt)("td",{parentName:"tr",align:null},"All server-side logs")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"To run the service as a background process, you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"bin/pulsar-daemon start standalone")," command. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/reference-cli-tools"},"pulsar-daemon"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"public/default")," namespace is created when you start a Pulsar cluster. This namespace is for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/concepts-messaging#namespaces"},"Namespaces")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/concepts-messaging#topics"},"Topics"),"."))),(0,r.kt)("h2",{id:"create-a-topic"},"Create a topic"),(0,r.kt)("p",null,"Pulsar stores messages in topics. It's a good practice to explicitly create topics before using them, even if Pulsar can automatically create topics when they are referenced."),(0,r.kt)("p",null,"To create a new topic, run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics create persistent://public/default/my-topic\n")),(0,r.kt)("h2",{id:"write-messages-to-the-topic"},"Write messages to the topic"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar")," command line tool to write messages to a topic. This is useful for experimentation, but in practice you'll use the Producer API in your application code, or Pulsar IO connectors for pulling data in from other systems to Pulsar."),(0,r.kt)("p",null,"Run this command to produce a message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client produce my-topic --messages 'Hello Pulsar!'\n")),(0,r.kt)("h2",{id:"read-messages-from-the-topic"},"Read messages from the topic"),(0,r.kt)("p",null,"Now that some messages have been written to the topic, run this command to launch the consumer and read those messages back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client consume my-topic -s 'my-subscription' -p Earliest -n 0\n")),(0,r.kt)("p",null,"Earliest means consuming from the earliest ",(0,r.kt)("strong",{parentName:"p"},"unconsumed")," message. ",(0,r.kt)("inlineCode",{parentName:"p"},"-n")," configures the number of messages to consume, 0 means to consume forever."),(0,r.kt)("p",null,"As before, this is useful for experimenting with messages, but in practice you'll use the Consumer API in your application code, or Pulsar IO connectors for reading data from Pulsar to push to other systems."),(0,r.kt)("p",null,"You'll see the messages you produce in the previous step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"----- got message -----\nkey:[null], properties:[], content:Hello Pulsar!\n")),(0,r.kt)("h2",{id:"write-some-more-messages"},"Write some more messages"),(0,r.kt)("p",null,"Leave the consume command from the previous step running. If you've already closed it, just re-run it."),(0,r.kt)("p",null,"Now open a new terminal window and produce more messages. The default message separator is ",(0,r.kt)("inlineCode",{parentName:"p"},","),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client produce my-topic --messages \"$(seq -s, -f 'Message NO.%g' 1 10)\"\n")),(0,r.kt)("p",null,"Note how they are displayed almost instantaneously in the consumer terminal."),(0,r.kt)("h2",{id:"stop-the-pulsar-cluster"},"Stop the Pulsar cluster"),(0,r.kt)("p",null,"Once you've finished you can shut down the Pulsar cluster. Press ",(0,r.kt)("strong",{parentName:"p"},"Ctrl-C")," in the terminal window in which you started the cluster."),(0,r.kt)("h2",{id:"related-topics"},"Related Topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/concepts-architecture-overview"},"Pulsar Concepts and Architecture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries"},"Pulsar Client Libraries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/io-overview"},"Pulsar Connectors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/functions-overview"},"Pulsar Functions"))))}d.isMDXComponent=!0}}]);