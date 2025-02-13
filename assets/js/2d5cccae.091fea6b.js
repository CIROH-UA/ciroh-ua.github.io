"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[9957],{67545:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"products/Community Hydrologic Modeling Framework/nextgenDatastream/nextgenDatastream","title":"NextGen Datastream","description":"NextGen Datastream","source":"@site/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/nextgenDatastream.md","sourceDirName":"products/Community Hydrologic Modeling Framework/nextgenDatastream","slug":"/products/Community Hydrologic Modeling Framework/nextgenDatastream/","permalink":"/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/nextgenDatastream.md","tags":[{"inline":true,"label":"datastream","permalink":"/docs/tags/datastream"},{"inline":true,"label":"NextGen","permalink":"/docs/tags/next-gen"}],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"NextGen Datastream","description":"NextGen Datastream","tags":["datastream","NextGen"]},"sidebar":"products","previous":{"title":"NGIAB-HPCInfra","permalink":"/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxSingularity/"},"next":{"title":"Forcing Processor","permalink":"/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/forcingprocessor/"}}');var o=r(74848),a=r(28453),s=r(22016);const i={sidebar_position:4,title:"NextGen Datastream",description:"NextGen Datastream",tags:["datastream","NextGen"]},c=void 0,m={},d=[];function l(t){const e={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["The NextGen DataStream forcing files and associated metadata are available through our AWS S3 Explorer. You can browse and access these regularly updated resources at ",(0,o.jsx)(e.a,{href:"http://datastream.ciroh.org/index.html",children:"datastream.ciroh.org/index.html"}),". In addition to NextGen forcings, daily NextGen simulation outputs via Datastream will soon be available."]})}),"\n","\n",(0,o.jsx)(s.A,{username:"CIROH-UA",repo:"ngen-datastream"})]})}function u(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},22016:(t,e,r)=>{r.d(e,{A:()=>a});var n=r(96540),o=r(74848);const a=function(t){let{repo:e,username:r,subfolder:a="",readmeFileName:s=""}=t;const[i,c]=(0,n.useState)("");return(0,n.useEffect)((()=>{let t="";t=""!==a?""!==s?`https://api.github.com/repos/${r}/${e}/contents/${a}/${s}?ref=main`:`https://api.github.com/repos/${r}/${e}/contents/${a}/readme?ref=main`:""!==s?`https://api.github.com/repos/${r}/${e}/${s}?ref=main`:`https://api.github.com/repos/${r}/${e}/readme?ref=main`,fetch(t,{headers:{Accept:"application/vnd.github.v3.html"}}).then((t=>{if(!t.ok)throw new Error("Failed to fetch README");return t.text()})).then((t=>{const n=(t=>{const n=(new DOMParser).parseFromString(t,"text/html");return n.querySelectorAll("img[src]").forEach((t=>{const n=t.getAttribute("src");if(!n.startsWith("http")){const o=n.replace(/^\//,"");t.src=`https://github.com/${r}/${e}/raw/main/${a?a+"/":""}${o}`}})),n.querySelectorAll("a[href]").forEach((t=>{const n=t.getAttribute("href");if(n&&!n.startsWith("http")&&!n.startsWith("#")){const o=n.replace(/^\//,"");t.href=`https://github.com/${r}/${e}/blob/main/${a?a+"/":""}${o}`}})),n.body.innerHTML})(t);c(`\n                <blockquote style='padding:10px;font-size:1.1rem;'>\n                    <p><strong>NOTE</strong></p>\n                    <p>Below content is rendered from <a href='https://github.com/${r}/${e}/blob/main/README.md'>https://github.com/${r}/${e}/blob/main/README.md</a></p>\n                    <p></p>\n                </blockquote>\n                `+n)})).catch((t=>console.error("Error fetching README:",t)))}),[e,r,a,s]),(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})}},28453:(t,e,r)=>{r.d(e,{R:()=>s,x:()=>i});var n=r(96540);const o={},a=n.createContext(o);function s(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);