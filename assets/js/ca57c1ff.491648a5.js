"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[3440],{6779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var o=n(5893),r=n(1151),s=n(7294);function i(e){switch(e){case"bug":return"danger";case"note":case"news":return"info";case"feature":return"success";default:return"primary"}}function a(e){const t=e.split(" ");return(0,o.jsx)(o.Fragment,{children:t.map(((e,t)=>(0,o.jsxs)(s.Fragment,{children:[t>0&&" ",d(e)?(0,o.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e}):(0,o.jsx)("span",{children:e})]},t)))})}function d(e){return e.startsWith("http://")||e.startsWith("https://")}const l=e=>{let{data:t}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)("hr",{}),(0,o.jsx)("ul",{className:"pills  pills--block",children:(0,o.jsx)("li",{className:"pills__item pills__item--active",children:t.date})}),t.items.map(((e,t)=>(0,o.jsxs)("div",{style:{"padding-bottom":"25px"},children:[(0,o.jsx)("span",{className:`badge badge--${i(e.type)}`,children:e.type})," ",(0,o.jsxs)("strong",{children:[" ",e.title]}),(0,o.jsx)("br",{}),a(e.description,e.link),e.link&&(0,o.jsx)("div",{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Read more..."})})]},t)))]})},c=JSON.parse('{"1/31/2024":[{"type":"news","title":"Run NextGen In A Box(NGIAB) with Singularity on HPC without docker support!!! ","description":"If you want to use NGIAB on HPC that does not support docker, we have a solution for you. Please follow the steps at this link. ","link":"https://github.com/CIROH-UA/Ngen-Singularity"},{"type":"news","title":"NextGen In A Box (NGIAB)","description":"We have made some improvements to NGIAB: 10 PRs merged. Sample input data updated to use AWI_003(with new data provider names). Boost upgraded to v1.79. Self-hosted Runner can start and stop automatically with GitHub Actions. NGIAB image can run in auto mode. Geopackage support added. Documentation available at CIROH DocuHub","link":"https://docs.ciroh.org/docs/category/nextgen-in-a-box-ngiab, https://github.com/CIROH-UA/NGIAB-CloudInfra"},{"type":"feature","title":"ngen-DataStream","description":"3 PRs merged in January. Documentation available at: https://docs.ciroh.org/docs/products/tools/nextgeninabox/nextgenDatastream","link":"https://github.com/CIROH-UA/ngen-datastream"},{"type":"feature","title":"NextGen Model Framework (ngen)","description":"6 PRs merged in January.","link":"https://github.com/NOAA-OWP/ngen"},{"type":"feature","title":"T-route","description":"3 PRs merged in January.","link":"https://github.com/NOAA-OWP/t-route"}],"12/30/2023":[{"type":"news","title":"NGIAB presentation at AGU!!! ","description":"NextGen In A Box: Advancing Collaborative Modeling for Enhanced Water Resource Management presented by Arpita. We had a full house! ","link":"Conference%20Material#agu-2023"},{"type":"news","title":"NextGen In A Box","description":"NGIAB Updates: Merged CI pipeline changes PR#74 by Benjamin Lee, Added case study map and a plot with output results PR#72 by Shahab Alam, PR#70 by Josh Cu","link":""},{"type":"feature","title":"NextGen Model Framework","description":"5 PRs merged in December.","link":""},{"type":"feature","title":"T-route","description":"12 PRs merged in December.","link":""},{"type":"feature","title":"Hydrofabric","description":"Lynker is proud to support CIROH with a freely accessable resource for geospatial data: https://www.lynker-spatial.com/. Updated transects/cross section runners","link":""},{"type":"feature","title":"NextGen Framework Forcings","description":"December updates include an (almost) complete stream script that will produce daily ngen outputs. Documentation (readme) included. ngen-datastream/subsetting has been deprecated and hfsubset integrated into the stream. Benchmarking has begun.","link":""},{"type":"note","title":"Community Support","description":"December is always an AGU Month! San Francisco (the traditional home of AGU) brings us to the season where we reflect on our own work for the year and finally learn what our coworkers have been doing all this time! Checkout the presentation slides from CIROH at below link.","link":"https://github.com/CIROH-UA/Conferences"},{"type":"note","title":"NOAA-OWP AGU Presentations","description":"NOAA-OWP AGU Presentations","link":"https://github.com/NOAA-OWP/OWP-Presentations/tree/main/AGU/AGU_2023"}],"11/30/2023":[{"type":"news","title":"NGIAB Updates","description":"NGIAB v1.1.0 Release!","link":"https://github.com/CIROH-UA/NGIAB-CloudInfra/releases/tag/v1.1.0"},{"type":"news","title":"NextGen Research Lightning Talk","description":"Presented at CIROH NextGen Research Lightning Talk Webinar","link":"Conference%20Material#community-nextgen-advancement-lightning-talk---nov-2023"},{"type":"feature","title":"NextGen Model Framework","description":"14 PRs merged in November. Adding new tests for sqlite and new geopackage-based hydrofabric support.","link":""},{"type":"feature","title":"T-route","description":"13 PRs merged in November. Added additional json/geojson support ","link":""},{"type":"feature","title":"Hydrofabric","description":"Lynker is proud to support CIROH with a freely accessable resource for geospatial data: https://www.lynker-spatial.com/. Updated hfsubset to support using the v2.0 hydrofabric by default. Added Cross-section support to the hydrofabric. 13 PRs merged in November. Added additional json/geojson support ","link":""},{"type":"feature","title":"NextGen Framework Forcings","description":"14 PRs merged towards the Research Data Stream. Fixed lingering pyarrow issues. Added new support for all segments to be dockerized. Added S3 support with regards to the control flow design, to support one reusable, configurable  sequence ","link":""},{"type":"note","title":"Community Support","description":"Singularity support is coming to AWI for HPC users that are able to run Singularity builds. Work on serialization (passing from one run to the next with model states still in memory or imported from a file) is ongoing, relative temporal configurations of NextGen with consideration to model configuration changes between timesteps, and better general support for framework polymorphism.","link":""}],"10/30/2023":[{"type":"note","title":"NGIAB Updates","description":"15 runs of the whole build process, 7 successful, and 2 pending. Over 550 pulls of the container image, number of \'canonical\' runs (uploading their metadata and results) is coming in a future version.","link":""},{"type":"feature","title":"NextGen Model Framework","description":"Updates to SUMMA candidate model, performance improvements for memory usage and spatial domain tooling to decouple the currently used geojson Feature and geometry classes into their own simple features interface. This is an abstract interface, with a coupled Boost.Geometry backend that will be used as the default backend.","link":""},{"type":"note","title":"T-route","description":"22 Pull Requests were worked on in October with 11 merged, and a focus on testing and getting the compiling process to be tested and reliable particularly for downstream NGIAB and HPC usage of t-route","link":""}]}'),p=()=>(0,o.jsx)("div",{children:Object.keys(c).map(((e,t)=>(0,o.jsx)("div",{children:(0,o.jsx)(l,{data:{date:e,items:c[e]}})},t)))}),u={sidebar_position:6,title:"News",tags:["NGIAB","NextGen","News","troute","forcings","hydrofabric"]},m="NextGen and NGIAB Updates",g={id:"products/tools/nextgeninabox/news",title:"News",description:"",source:"@site/docs/products/tools/nextgeninabox/news.md",sourceDirName:"products/tools/nextgeninabox",slug:"/products/tools/nextgeninabox/news",permalink:"/docs/products/tools/nextgeninabox/news",draft:!1,unlisted:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/tools/nextgeninabox/news.md",tags:[{label:"NGIAB",permalink:"/docs/tags/ngiab"},{label:"NextGen",permalink:"/docs/tags/next-gen"},{label:"News",permalink:"/docs/tags/news"},{label:"troute",permalink:"/docs/tags/troute"},{label:"forcings",permalink:"/docs/tags/forcings"},{label:"hydrofabric",permalink:"/docs/tags/hydrofabric"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"News",tags:["NGIAB","NextGen","News","troute","forcings","hydrofabric"]},sidebar:"products",previous:{title:"Conference Material",permalink:"/docs/products/tools/nextgeninabox/Conference Material"},next:{title:"Data Access",permalink:"/docs/category/data-access"}},h={},f=[];function b(e){const t={h1:"h1",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"nextgen-and-ngiab-updates",children:"NextGen and NGIAB Updates"}),"\n",(0,o.jsx)(p,{})]})}function y(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);