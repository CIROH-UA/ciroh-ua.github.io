"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[4994],{13364:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"products/Data Management and Access Tools/bigquery-api/index","title":"NWM BigQuery API","description":"REST API backed by National Water Model data, developed on Google Cloud Platform","source":"@site/docs/products/Data Management and Access Tools/bigquery-api/index.md","sourceDirName":"products/Data Management and Access Tools/bigquery-api","slug":"/products/Data Management and Access Tools/bigquery-api/","permalink":"/docs/products/Data Management and Access Tools/bigquery-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Data Management and Access Tools/bigquery-api/index.md","tags":[{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"bigquery","permalink":"/docs/tags/bigquery"},{"inline":true,"label":"gcp","permalink":"/docs/tags/gcp"}],"version":"current","sidebarPosition":18,"frontMatter":{"sidebar_position":18,"title":"NWM BigQuery API","description":"REST API backed by National Water Model data, developed on Google Cloud Platform","tags":["api","bigquery","gcp"]},"sidebar":"products","previous":{"title":"HydroShare","permalink":"/docs/products/Data Management and Access Tools/hydroshare/"},"next":{"title":"Snow Sensing and Modeling Tools","permalink":"/docs/products/Snow Sensing and Modeling Tools/"}}');var r=o(74848),a=o(28453),i=o(2467);const s={sidebar_position:18,title:"NWM BigQuery API",description:"REST API backed by National Water Model data, developed on Google Cloud Platform",tags:["api","bigquery","gcp"]},c="National Water Model (NWM) BigQuery API",d={},l=[];function p(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"national-water-model-nwm-bigquery-api",children:"National Water Model (NWM) BigQuery API"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["More details about \u201cDesign and implementation of a BigQuery dataset and application programmer interface (API) for the U.S. National Water Model\u201d paper can be found ",(0,r.jsx)(t.a,{href:"https://www.sciencedirect.com/science/article/pii/S1364815224001841",children:"here."})]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Please submit the form below to request access to NWM BigQuery API."})}),"\n",(0,r.jsx)("a",{class:"button button--active button--primary ",style:{"margin-bottom":"1.3rem"},href:"https://forms.office.com/r/FeNpjZstkr",children:"NWM BigQuery API Access Request Form"}),"\n","\n",(0,r.jsx)(i.A,{username:"BYU-Hydroinformatics",repo:"api-nwm-gcp"})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},2467:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(96540),r=o(74848);const a=function(e){let{repo:t,username:o,subfolder:a="",readmeFileName:i=""}=e;const[s,c]=(0,n.useState)("");return(0,n.useEffect)((()=>{let e="";e=""!==a?""!==i?`https://api.github.com/repos/${o}/${t}/contents/${a}/${i}?ref=main`:`https://api.github.com/repos/${o}/${t}/contents/${a}/readme?ref=main`:""!==i?`https://api.github.com/repos/${o}/${t}/${i}?ref=main`:`https://api.github.com/repos/${o}/${t}/readme?ref=main`,fetch(e,{headers:{Accept:"application/vnd.github.v3.html"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch README");return e.text()})).then((e=>{const n=((e,n)=>{const r=(new DOMParser).parseFromString(e,"text/html");return r.querySelectorAll("img[src]").forEach((e=>{const n=e.getAttribute("src");if(!n.startsWith("http")){const r=n.replace(/^\//,"");e.src=`https://github.com/${o}/${t}/raw/main/${a?a+"/":""}${r}`}})),r.querySelectorAll("a[href]").forEach((e=>{const n=e.getAttribute("href");if(n&&!n.startsWith("http")&&!n.startsWith("#")){const r=n.replace(/^\//,"");e.href=`https://github.com/${o}/${t}/blob/main/${a?a+"/":""}${r}`}})),r.body.innerHTML})(e);c(`\n                <blockquote style='padding:10px;font-size:1.1rem;'>\n                    <p><strong>NOTE</strong></p>\n                    <p>Below content is rendered from <a href='https://github.com/${o}/${t}/blob/main/README.md'>https://github.com/${o}/${t}/blob/main/README.md</a></p>\n                    <p></p>\n                </blockquote>\n                `+n)})).catch((e=>console.error("Error fetching README:",e)))}),[t,o,a,i]),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>s});var n=o(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);