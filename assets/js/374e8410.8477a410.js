"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[7427],{1823:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(4848),i=r(8453),s=r(3514);const o={sidebar_position:1,title:"Pantarhei",description:"Pantarhei HPC Cluster",tags:["HPC","On-Premises","Overview","Intro","Pantarhei"]},a=void 0,c={id:"services/on-prem/Pantarhei/index",title:"Pantarhei",description:"Pantarhei HPC Cluster",source:"@site/docs/services/on-prem/Pantarhei/index.md",sourceDirName:"services/on-prem/Pantarhei",slug:"/services/on-prem/Pantarhei/",permalink:"/docs/services/on-prem/Pantarhei/",draft:!1,unlisted:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/services/on-prem/Pantarhei/index.md",tags:[{label:"HPC",permalink:"/docs/tags/hpc"},{label:"On-Premises",permalink:"/docs/tags/on-premises"},{label:"Overview",permalink:"/docs/tags/overview"},{label:"Intro",permalink:"/docs/tags/intro"},{label:"Pantarhei",permalink:"/docs/tags/pantarhei"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Pantarhei",description:"Pantarhei HPC Cluster",tags:["HPC","On-Premises","Overview","Intro","Pantarhei"]},sidebar:"services",previous:{title:"On-Premises",permalink:"/docs/services/on-prem/"},next:{title:"System Architecture",permalink:"/docs/services/on-prem/Pantarhei/sysinfo"}},l={},u=[{value:"Navigational Resources",id:"navigational-resources",level:3}];function d(e){const t={a:"a",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Pantarhei serves as an analytical and computational resource accessible to the research community of the Cooperative Institute for Research to Operations in Hydrology (CIROH). This cluster is managed by the CIROH IT Computing group at the University of Alabama."}),"\n",(0,n.jsx)(t.p,{children:"Use of this resource is governed by the University of Alabama Acceptable Use Policy for Computer and Network Resources, Information Classification Policy, and Information Protection Procedure. Please review these policies on-line:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://oit.ua.edu/about/policies/it-use-guideline-computer-and-network-use/",children:"Computer and Network Resources"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://ua-public.policystat.com/policy/14809337/latest/",children:"Information Classification Policy"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://oit.ua.edu/internaldocs/20210205-UA%20Information%20Protection%20Procedures.pdf",children:"Information Protection Procedure"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"navigational-resources",children:"Navigational Resources"}),"\n","\n",(0,n.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>x});r(6540);var n=r(4164),i=r(4142),s=r(8774),o=r(5846),a=r(6654),c=r(1312),l=r(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(4848);function h(e){let{href:t,children:r}=e;return(0,d.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:i,children:[r," ",i]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const r=(0,i.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function P(e){let{className:t}=e;const r=(0,i.$S)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(P,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},5846:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(6540),i=r(4586);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),s=r.pluralForms.indexOf(i);return n[Math.min(s,n.length-1)]}(r,t,e)}}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(6540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);