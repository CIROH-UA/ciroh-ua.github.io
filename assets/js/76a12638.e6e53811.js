"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[7159],{6384:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(4848),r=n(8453),s=n(2467);const o={sidebar_position:3,title:"NextGen Datastream",description:"NextGen Datastream",tags:["datastream","NextGen"]},c=void 0,i={id:"products/nextgenDatastream/nextgenDatastream",title:"NextGen Datastream",description:"NextGen Datastream",source:"@site/docs/products/nextgenDatastream/nextgenDatastream.md",sourceDirName:"products/nextgenDatastream",slug:"/products/nextgenDatastream/",permalink:"/docs/products/nextgenDatastream/",draft:!1,unlisted:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/nextgenDatastream/nextgenDatastream.md",tags:[{label:"datastream",permalink:"/docs/tags/datastream"},{label:"NextGen",permalink:"/docs/tags/next-gen"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"NextGen Datastream",description:"NextGen Datastream",tags:["datastream","NextGen"]},sidebar:"products",previous:{title:"Forcing Processor",permalink:"/docs/products/forcingprocessor/"},next:{title:"Data Access",permalink:"/docs/products/dataaccess/"}},d={},m=[];function p(t){return(0,a.jsx)(s.A,{username:"CIROH-UA",repo:"ngen-datastream"})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(p,{...t})}):p()}},2467:(t,e,n)=>{n.d(e,{A:()=>s});var a=n(6540),r=n(4848);const s=function(t){let{repo:e,username:n,subfolder:s="",readmeFileName:o=""}=t;const[c,i]=(0,a.useState)("");return(0,a.useEffect)((()=>{let t="";t=""!=s?""!=o?`https://api.github.com/repos/${n}/${e}/contents/${s}/${o}?ref=main`:`https://api.github.com/repos/${n}/${e}/contents/${s}/readme?ref=main`:""!=o?`https://api.github.com/repos/${n}/${e}/${o}?ref=main`:`https://api.github.com/repos/${n}/${e}/readme?ref=main`,fetch(t,{headers:{Accept:"application/vnd.github.v3.html"}}).then((t=>{if(!t.ok)throw new Error("Failed to fetch README");return t.text()})).then((t=>{i(`\n                <blockquote style='padding:10px;font-size:1.1rem;'>\n                    <p><strong>NOTE</strong></p>\n                    <p>Below content is rendered from <a href='https://github.com/${n}/${e}/blob/main/README.md'>https://github.com/${n}/${e}/blob/main/README.md</a></p>\n                    <p></p>\n                </blockquote>\n                `+t)})).catch((t=>console.error("Error fetching README:",t)))}),[e,n]),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})}},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var a=n(6540);const r={},s=a.createContext(r);function o(t){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),a.createElement(s.Provider,{value:e},t.children)}}}]);