"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[4894],{47702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"products/Machine Learning and AI Tools/sweml/index","title":"SWEML","description":"Snow Water Equivalent Machine Learning","source":"@site/docs/products/Machine Learning and AI Tools/sweml/index.md","sourceDirName":"products/Machine Learning and AI Tools/sweml","slug":"/products/Machine Learning and AI Tools/sweml/","permalink":"/docs/products/Machine Learning and AI Tools/sweml/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Machine Learning and AI Tools/sweml/index.md","tags":[{"inline":true,"label":"national_snow_model","permalink":"/docs/tags/national-snow-model"}],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"SWEML","description":"Snow Water Equivalent Machine Learning","tags":["national_snow_model"]},"sidebar":"products","previous":{"title":"Machine Learning and AI Tools","permalink":"/docs/products/Machine Learning and AI Tools/"},"next":{"title":"NWM-ML","permalink":"/docs/products/Machine Learning and AI Tools/nwm_ml/"}}');var r=t(74848),i=t(28453),a=t(2467);const s={sidebar_position:8,title:"SWEML",description:"Snow Water Equivalent Machine Learning",tags:["national_snow_model"]},c="Advancing Snow Modeling",d={},l=[];function u(e){const n={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"advancing-snow-modeling",children:"Advancing Snow Modeling"})}),"\n",(0,r.jsx)(n.p,{children:"The Snow Water Equivalent Machine Learning(SWEML) incorporates ground-based snow measuring sites, remotely-sensed snow cover information, and a Artificial Neural Network to provide point estimations of Snow Water Equivalent. The network was trained on historical data data from NASA\u2019s ASO missions, divided into regions, and then a LightGradientBoost Model was used to preform recursive feature elimination to produce an efficient feature selection and region-specific model. The class contains the required functions for downloading data, pre-processing, running inference, and for producing visualizations."}),"\n","\n",(0,r.jsx)(a.A,{username:"CIROH-UA",repo:"SWEML"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2467:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(96540),r=t(74848);const i=function(e){let{repo:n,username:t,subfolder:i="",readmeFileName:a=""}=e;const[s,c]=(0,o.useState)("");return(0,o.useEffect)((()=>{let e="";e=""!==i?""!==a?`https://api.github.com/repos/${t}/${n}/contents/${i}/${a}?ref=main`:`https://api.github.com/repos/${t}/${n}/contents/${i}/readme?ref=main`:""!==a?`https://api.github.com/repos/${t}/${n}/${a}?ref=main`:`https://api.github.com/repos/${t}/${n}/readme?ref=main`,fetch(e,{headers:{Accept:"application/vnd.github.v3.html"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch README");return e.text()})).then((e=>{const o=((e,o)=>{const r=(new DOMParser).parseFromString(e,"text/html");return r.querySelectorAll("img[src]").forEach((e=>{const o=e.getAttribute("src");if(!o.startsWith("http")){const r=o.replace(/^\//,"");e.src=`https://github.com/${t}/${n}/raw/main/${i?i+"/":""}${r}`}})),r.querySelectorAll("a[href]").forEach((e=>{const o=e.getAttribute("href");if(o&&!o.startsWith("http")&&!o.startsWith("#")){const r=o.replace(/^\//,"");e.href=`https://github.com/${t}/${n}/blob/main/${i?i+"/":""}${r}`}})),r.body.innerHTML})(e);c(`\n                <blockquote style='padding:10px;font-size:1.1rem;'>\n                    <p><strong>NOTE</strong></p>\n                    <p>Below content is rendered from <a href='https://github.com/${t}/${n}/blob/main/README.md'>https://github.com/${t}/${n}/blob/main/README.md</a></p>\n                    <p></p>\n                </blockquote>\n                `+o)})).catch((e=>console.error("Error fetching README:",e)))}),[n,t,i,a]),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);