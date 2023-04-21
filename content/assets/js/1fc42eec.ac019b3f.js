"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(65488),i=n(85162);const l={id:"document-syntax",title:"Writing syntax"},s=void 0,u={unversionedId:"document-syntax",id:"document-syntax",title:"Writing syntax",description:"This guide explains how to write Pulsar documentation using the MDX-compatible Markdown syntax.",source:"@site/contribute/document-syntax.md",sourceDirName:".",slug:"/document-syntax",permalink:"/contribute/document-syntax",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/document-syntax.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1682054106,formattedLastUpdatedAt:"Apr 21, 2023",frontMatter:{id:"document-syntax",title:"Writing syntax"},sidebar:"sidebarDevelopment",previous:{title:"Previewing content",permalink:"/contribute/document-preview"},next:{title:"Introduction",permalink:"/contribute/document-intro"}},p={},d=[{value:"Background",id:"background",level:2},{value:"Why use new Markdown syntax?",id:"why-use-new-markdown-syntax",level:3},{value:"How to test doc changes?",id:"how-to-test-doc-changes",level:3},{value:"Syntax",id:"syntax",level:2},{value:"Markdown",id:"markdown",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Tab",id:"tab",level:3},{value:"Code blocks",id:"code-blocks",level:3},{value:"Admonitions",id:"admonitions",level:3},{value:"Assets",id:"assets",level:3},{value:"Indentation and space",id:"indentation-and-space",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Tables",id:"tables",level:3},{value:"Links",id:"links",level:3},{value:"Anchor links",id:"anchor-links",level:4},{value:"Links to internal documentation",id:"links-to-internal-documentation",level:4},{value:"Links to external documentation",id:"links-to-external-documentation",level:4},{value:"Link to a specific line of code",id:"link-to-a-specific-line-of-code",level:4},{value:"Authoritative sources",id:"authoritative-sources",level:3},{value:"Escape",id:"escape",level:3},{value:"Headings",id:"headings",level:3}],c={toc:d};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide explains how to write Pulsar documentation using the MDX-compatible Markdown syntax."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The Pulsar documentation uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"Markdown")," as its markup language and ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," for generating the documentation and website, with ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," enhancement."),(0,o.kt)("h3",{id:"why-use-new-markdown-syntax"},"Why use new Markdown syntax?"),(0,o.kt)("p",null,"The new Pulsar website is upgraded to Docusaurus V2, which uses MDX as the parsing engine. MDX can do much more than just parsing standard Markdown syntax, like rendering React components inside your documents as well."),(0,o.kt)("h3",{id:"how-to-test-doc-changes"},"How to test doc changes?"),(0,o.kt)("p",null,"You can play with the MDX format in the ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/playground/"},"MDX Playground"),". Write some MDX to find out what it turns into. You can see the rendered result, the generated code, and the intermediary ASTs. This can be helpful for debugging or exploring."),(0,o.kt)("p",null,"For how to test doc changes locally, read the ",(0,o.kt)("a",{parentName:"p",href:"/contribute/document-preview"},"Content Preview Guide"),"."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"This guide just highlights a few selected important rules and frequently used syntax. For the complete syntax guide, read the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Markdown Features")," document from Docusaurus and ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/docs/what-is-mdx/#markdown"},"Markdown")," document from MDX."),(0,o.kt)("h3",{id:"markdown"},"Markdown"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use Markdown rather than HTML as much as possible, or else MDX may not recognize it. For example, when constructing complex tables, do not use ",(0,o.kt)("inlineCode",{parentName:"li"},"<table>"),"."),(0,o.kt)("li",{parentName:"ul"},"Use closing tags. ",(0,o.kt)("inlineCode",{parentName:"li"},"<li><li/>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<br/>")," are especially useful for constructing complex tables, such as creating a list and adding a blank line.")),(0,o.kt)("h4",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"| Directory | Contains                            |\n|:----------|:------------------------------------|\n| **Hello** | <li>a</li><li>b</li><br/><li>c</li> |\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Hello")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("li",null,"a"),(0,o.kt)("li",null,"b"),(0,o.kt)("br",null),(0,o.kt)("li",null,"c"))))),(0,o.kt)("h4",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"| a   | b   | c                        |\n|-----|-----|--------------------------|\n| aa  | bb  | cc1<br/>cc2<br/><br/>cc3 |\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"a"),(0,o.kt)("th",{parentName:"tr",align:null},"b"),(0,o.kt)("th",{parentName:"tr",align:null},"c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aa"),(0,o.kt)("td",{parentName:"tr",align:null},"bb"),(0,o.kt)("td",{parentName:"tr",align:null},"cc1",(0,o.kt)("br",null),"cc2",(0,o.kt)("br",null),(0,o.kt)("br",null),"cc3")))),(0,o.kt)("h3",{id:"tab"},"Tab"),(0,o.kt)("p",null,"Before using multiple tabs, add these imports at the beginning of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"````mdx-code-block\nimport Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem'; \n````\n")),(0,o.kt)("p",null,"Then, you can write tabs as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,o.kt)(i.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(i.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,o.kt)("p",null,"Read more about how to write multiple tabs at ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/tabs"},"Tabs"),"."),(0,o.kt)("h3",{id:"code-blocks"},"Code blocks"),(0,o.kt)("p",null,"Read more about how to use syntax highlighting and supported languages at ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#syntax-highlighting"},"Syntax highlighting"),"."),(0,o.kt)("h3",{id:"admonitions"},"Admonitions"),(0,o.kt)("p",null,"Docusaurus supports these admonitions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},":::note\n\nSome **content** with _Markdown_ `syntax`.\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`.\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`.\n\n:::\n\n:::caution\n\nSome **content** with _Markdown_ `syntax`.\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`.\n\n:::\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("p",null,"Read more about how to write admonitions at ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"Admonitions"),"."),(0,o.kt)("h3",{id:"assets"},"Assets"),(0,o.kt)("p",null,"Static assets are hosted under ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets")," for all documentations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"![Page Linking](/assets/page-linking.png)\n")),(0,o.kt)("h3",{id:"indentation-and-space"},"Indentation and space"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the same indentation for running texts and code blocks."),(0,o.kt)("li",{parentName:"ul"},"For the content block after an ",(0,o.kt)("strong",{parentName:"li"},"ordered list"),", indent the content block by only 3 spaces (not 4 spaces)."),(0,o.kt)("li",{parentName:"ul"},"For the content block after an ",(0,o.kt)("strong",{parentName:"li"},"unordered list"),", indent the content block by only 2 spaces."),(0,o.kt)("li",{parentName:"ul"},"Insert ",(0,o.kt)("strong",{parentName:"li"},"exact one")," empty line (not two empty lines or more) between code blocks and running texts.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you don't insert the empty line, the text cannot be rendered properly. You should encounter an error by ",(0,o.kt)("a",{parentName:"p",href:"/contribute/document-preview"},"preview"),". ")),(0,o.kt)("h3",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"If you create a new ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," file, add quotes for the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar_label"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nid: admin-api-partitioned-topics\ntitle: Managing partitioned topic\nsidebar_label: "Partitioned topics"\n---\n')),(0,o.kt)("p",null,"If you don't set the ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar_label")," property, the label is default to ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,o.kt)("h3",{id:"tables"},"Tables"),(0,o.kt)("p",null,"To help tables be easier to maintain, consider adding additional spaces to the column widths to make them consistent. For examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"| App name | Description         | Requirements   |\n| :------- | :------------------ | :------------- |\n| App 1    | Description text 1. | Requirements 1 |\n| App 2    | Description text 2. | None           |\n")),(0,o.kt)("p",null,"To format tables easily, you can install a plugin or extension in your editor as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visual Studio Code: ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=darkriszty.markdown-table-prettify"},"Markdown Table Prettifier")),(0,o.kt)("li",{parentName:"ul"},"Sublime Text: ",(0,o.kt)("a",{parentName:"li",href:"https://packagecontrol.io/packages/Markdown%20Table%20Formatter"},"Markdown Table Formatter")),(0,o.kt)("li",{parentName:"ul"},"Atom: ",(0,o.kt)("a",{parentName:"li",href:"https://atom.io/packages/markdown-table-formatter"},"Markdown Table Formatter"))),(0,o.kt)("h3",{id:"links"},"Links"),(0,o.kt)("p",null,"Use links instead of summarizing to help preserve a single source of truth in Pulsar documentation."),(0,o.kt)("h4",{id:"anchor-links"},"Anchor links"),(0,o.kt)("p",null,"Headings generate anchor links when rendered. For example:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"## This is an example")," generates the anchor ",(0,o.kt)("inlineCode",{parentName:"p"},"#this-is-an-example"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Avoid cross-reference docs to headings unless you need to link to a specific section of the document. This avoids breaking anchors in the future in case the heading is changed."),(0,o.kt)("li",{parentName:"ul"},"If possible, avoid changing headings, because they're not only linked internally. There are various links to Pulsar documentation on the Internet, such as tutorials, presentations, StackOverflow posts, and other sources."))),(0,o.kt)("h4",{id:"links-to-internal-documentation"},"Links to internal documentation"),(0,o.kt)("p",null,"Internal refers to documentation in the same Pulsar project."),(0,o.kt)("p",null,"General rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use relative links rather than absolute URLs."),(0,o.kt)("li",{parentName:"ul"},"Do not prepend ",(0,o.kt)("inlineCode",{parentName:"li"},"./")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"../../")," to links to files or directories.")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,o.kt)("th",{parentName:"tr",align:null},"Good"),(0,o.kt)("th",{parentName:"tr",align:null},"Bad"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cross-reference to other markdown file (/path/xx/ is not needed)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[Function overview](function-overview.md)")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"[Function overview](functions-overview)")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"[Function overview](https://pulsar.apache.org/docs/next/functions-overview/)")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"[Function overview](../../function-overview.md)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cross-reference to other chapters in the same markdown file (# and - are needed)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[Install builtin connectors (optional)](#install-builtin-connectors-optional)")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,o.kt)("p",null,"Read more about how to write Markdown links at ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/links"},"Markdown links"),"."),(0,o.kt)("h4",{id:"links-to-external-documentation"},"Links to external documentation"),(0,o.kt)("p",null,"When describing interactions with external software, it's often helpful to include links to external documentation. When possible, make sure that you're linking to an ",(0,o.kt)("a",{parentName:"p",href:"#authoritative-sources"},"authoritative source"),"."),(0,o.kt)("p",null,"For example, if you're describing a feature in Microsoft's Active Directory, include a link to the official Microsoft documentation."),(0,o.kt)("h4",{id:"link-to-a-specific-line-of-code"},"Link to a specific line of code"),(0,o.kt)("p",null,"Use a ",(0,o.kt)("strong",{parentName:"p"},"permalink")," when linking to a specific line in a file to ensure users land on the line you're referring to though lines of code change over time."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:n(27032).Z,width:"348",height:"290"})),(0,o.kt)("h3",{id:"authoritative-sources"},"Authoritative sources"),(0,o.kt)("p",null,"When citing external information, use sources that are written by the people who created the item or product in question. These sources are the most likely to be accurate and remain up to date."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u2705 Authoritative sources include the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Official documentation for a product."),(0,o.kt)("p",{parentName:"li"},"For example, if you're setting up an interface with the Google OAuth 2 authorization server, include a link to Google's documentation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Official documentation for a project."),(0,o.kt)("p",{parentName:"li"},"For example, if you're citing NodeJS functionality, refer directly to ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/"},"NodeJS documentation"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Books from an authoritative publisher.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u274c Authoritative sources do not include the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Personal blog posts."),(0,o.kt)("li",{parentName:"ul"},"Documentation from a company that describes another company's product."),(0,o.kt)("li",{parentName:"ul"},"Non-trustworthy articles."),(0,o.kt)("li",{parentName:"ul"},"Discussions on forums such as Stack Overflow.")))),(0,o.kt)("p",null,"While many of these sources to avoid can help you learn skills and or features, they can become obsolete quickly. Nobody is obliged to maintain any of these sites. Therefore, you should avoid using them as reference literature."),(0,o.kt)("p",null,"Non-authoritative sources are acceptable only if there is no equivalent authoritative source. Even then, focus on non-authoritative sources that are extensively cited or peer-reviewed."),(0,o.kt)("h3",{id:"escape"},"Escape"),(0,o.kt)("p",null,"Escape ",(0,o.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,o.kt)("inlineCode",{parentName:"p"},">")," with back-quote or HTML escape characters."),(0,o.kt)("h3",{id:"headings"},"Headings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each documentation page begins with a ",(0,o.kt)("strong",{parentName:"li"},"level 2")," heading (",(0,o.kt)("inlineCode",{parentName:"li"},"##"),"). This becomes the ",(0,o.kt)("inlineCode",{parentName:"li"},"<h1>")," element when the page is rendered to HTML."),(0,o.kt)("li",{parentName:"ul"},"Do not skip a level."),(0,o.kt)("li",{parentName:"ul"},"Leave one blank line before and after the heading."),(0,o.kt)("li",{parentName:"ul"},"Do not use links as part of heading text."),(0,o.kt)("li",{parentName:"ul"},"When you change the heading text, the anchor link changes. To avoid broken links:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Do not use step numbers in headings."),(0,o.kt)("li",{parentName:"ul"},"When possible, do not use words that might change in the future.")))))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),r=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:m,className:k}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[v,w]=(0,o.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=N[m];null!=e&&e!==v&&b.some((t=>t.value===e))&&w(e)}const M=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==v&&(T(t),w(a),null!=m&&y(m,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>x.push(e),onKeyDown:C,onClick:M},i,{className:(0,r.Z)("tabs__item",d,i?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,i.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},27032:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/obtain-github-permalink-d6b28ee0883705a2adf8cc3993d6b19d.png"}}]);