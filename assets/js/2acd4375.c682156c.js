"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[6066],{19137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/index","title":"NGIAB-CloudInfra","description":"NextGen In a Box (NGIAB)","source":"@site/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/index.md","sourceDirName":"products/Community Hydrologic Modeling Framework/nextgeninaboxDocker","slug":"/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/","permalink":"/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/index.md","tags":[{"inline":true,"label":"NextGen In A Box","permalink":"/docs/tags/next-gen-in-a-box"},{"inline":true,"label":"NGIAB","permalink":"/docs/tags/ngiab"},{"inline":true,"label":"NextGen framework","permalink":"/docs/tags/next-gen-framework"},{"inline":true,"label":"National Water Model","permalink":"/docs/tags/national-water-model"},{"inline":true,"label":"national water center","permalink":"/docs/tags/national-water-center"},{"inline":true,"label":"docker","permalink":"/docs/tags/docker"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"NGIAB-CloudInfra","description":"NextGen In a Box (NGIAB)","tags":["NextGen In A Box","NGIAB","NextGen framework","National Water Model","national water center","docker"]},"sidebar":"products","previous":{"title":"NGIAB Data Preprocess","permalink":"/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/"},"next":{"title":"NGIAB-Prerequisites","permalink":"/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/ngiabprerequisite"}}');var r=n(74848),i=n(28453),a=n(2467);const s={sidebar_position:2,title:"NGIAB-CloudInfra",description:"NextGen In a Box (NGIAB)",tags:["NextGen In A Box","NGIAB","NextGen framework","National Water Model","national water center","docker"]},c=void 0,l={},d=[];function u(e){return(0,r.jsx)(a.A,{username:"CIROH-UA",repo:"NGIAB-CloudInfra"})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},2467:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(96540),r=n(74848);const i=function(e){let{repo:t,username:n,subfolder:i="",readmeFileName:a=""}=e;const[s,c]=(0,o.useState)("");return(0,o.useEffect)((()=>{let e="";e=""!==i?""!==a?`https://api.github.com/repos/${n}/${t}/contents/${i}/${a}?ref=main`:`https://api.github.com/repos/${n}/${t}/contents/${i}/readme?ref=main`:""!==a?`https://api.github.com/repos/${n}/${t}/${a}?ref=main`:`https://api.github.com/repos/${n}/${t}/readme?ref=main`,fetch(e,{headers:{Accept:"application/vnd.github.v3.html"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch README");return e.text()})).then((e=>{const o=((e,o)=>{const r=(new DOMParser).parseFromString(e,"text/html");return r.querySelectorAll("img[src]").forEach((e=>{const o=e.getAttribute("src");if(!o.startsWith("http")){const r=o.replace(/^\//,"");e.src=`https://github.com/${n}/${t}/raw/main/${i?i+"/":""}${r}`}})),r.querySelectorAll("a[href]").forEach((e=>{const o=e.getAttribute("href");if(o&&!o.startsWith("http")&&!o.startsWith("#")){const r=o.replace(/^\//,"");e.href=`https://github.com/${n}/${t}/blob/main/${i?i+"/":""}${r}`}})),r.body.innerHTML})(e);c(`\n                <blockquote style='padding:10px;font-size:1.1rem;'>\n                    <p><strong>NOTE</strong></p>\n                    <p>Below content is rendered from <a href='https://github.com/${n}/${t}/blob/main/README.md'>https://github.com/${n}/${t}/blob/main/README.md</a></p>\n                    <p></p>\n                </blockquote>\n                `+o)})).catch((e=>console.error("Error fetching README:",e)))}),[t,n,i,a]),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);