"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[563],{7359:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=o(4848),n=o(8453),i=o(2467);const a={sidebar_position:18,title:"NWM BigQuery API",description:"REST API backed by National Water Model data, developed on Google Cloud Platform",tags:["api","bigquery","gcp"]},s="National Water Model (NWM) BigQuery API",c={id:"products/bigqeury-api/index",title:"NWM BigQuery API",description:"REST API backed by National Water Model data, developed on Google Cloud Platform",source:"@site/docs/products/bigqeury-api/index.md",sourceDirName:"products/bigqeury-api",slug:"/products/bigqeury-api/",permalink:"/docs/products/bigqeury-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/bigqeury-api/index.md",tags:[{label:"api",permalink:"/docs/tags/api"},{label:"bigquery",permalink:"/docs/tags/bigquery"},{label:"gcp",permalink:"/docs/tags/gcp"}],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,title:"NWM BigQuery API",description:"REST API backed by National Water Model data, developed on Google Cloud Platform",tags:["api","bigquery","gcp"]},sidebar:"products",previous:{title:"Tethys-CSES",permalink:"/docs/products/tethys-cses/"}},d={},p=[];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"national-water-model-nwm-bigquery-api",children:"National Water Model (NWM) BigQuery API"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["More details about \u201cDesign and implementation of a BigQuery dataset and application programmer interface (API) for the U.S. National Water Model\u201d paper can be found ",(0,r.jsx)(t.a,{href:"https://authors.elsevier.com/c/1jNAA4sKhEd5Kn",children:"here."})]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Please submit the form below to request access to NWM BigQuery API."})}),"\n",(0,r.jsx)("a",{class:"button button--active button--primary ",style:{"margin-bottom":"1.3rem"},href:"https://forms.office.com/r/FeNpjZstkr",children:"NWM BigQuery API Access Request Form"}),"\n","\n",(0,r.jsx)(i.A,{username:"BYU-Hydroinformatics",repo:"api-nwm-gcp"})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2467:(e,t,o)=>{o.d(t,{A:()=>i});var r=o(6540),n=o(4848);const i=function(e){let{repo:t,username:o,subfolder:i="",readmeFileName:a=""}=e;const[s,c]=(0,r.useState)("");return(0,r.useEffect)((()=>{let e="";e=""!=i?""!=a?`https://api.github.com/repos/${o}/${t}/contents/${i}/${a}?ref=main`:`https://api.github.com/repos/${o}/${t}/contents/${i}/readme?ref=main`:""!=a?`https://api.github.com/repos/${o}/${t}/${a}?ref=main`:`https://api.github.com/repos/${o}/${t}/readme?ref=main`,fetch(e,{headers:{Accept:"application/vnd.github.v3.html"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch README");return e.text()})).then((e=>{c(`\n                <blockquote style='padding:10px;font-size:1.1rem;'>\n                    <p><strong>NOTE</strong></p>\n                    <p>Below content is rendered from <a href='https://github.com/${o}/${t}/blob/main/README.md'>https://github.com/${o}/${t}/blob/main/README.md</a></p>\n                    <p></p>\n                </blockquote>\n                `+e)})).catch((e=>console.error("Error fetching README:",e)))}),[t,o]),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var r=o(6540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);