"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[3620],{6217:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/workflow","title":"NGIAB E2E Workflow Video","description":"NextGen In a Box (NGIAB) E2E Workflow Video","source":"@site/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/workflow.md","sourceDirName":"products/Community Hydrologic Modeling Framework/nextgeninaboxDocker","slug":"/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/workflow","permalink":"/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/workflow.md","tags":[{"inline":true,"label":"NextGen In A Box","permalink":"/docs/tags/next-gen-in-a-box"},{"inline":true,"label":"NGIAB","permalink":"/docs/tags/ngiab"},{"inline":true,"label":"NGIAB Data Preprocess","permalink":"/docs/tags/ngiab-data-preprocess"},{"inline":true,"label":"Demonstration","permalink":"/docs/tags/demonstration"},{"inline":true,"label":"Video","permalink":"/docs/tags/video"},{"inline":true,"label":"Workflow","permalink":"/docs/tags/workflow"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"NGIAB E2E Workflow Video","description":"NextGen In a Box (NGIAB) E2E Workflow Video","tags":["NextGen In A Box","NGIAB","NGIAB Data Preprocess","Demonstration","Video","Workflow"]},"sidebar":"products","previous":{"title":"NGIAB-Prerequisites","permalink":"/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/ngiabprerequisite"},"next":{"title":"NGIAB-HPCInfra","permalink":"/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxSingularity/"}}');var s=i(74848),t=i(28453),o=i(35390);const l={sidebar_position:1,title:"NGIAB E2E Workflow Video",description:"NextGen In a Box (NGIAB) E2E Workflow Video",tags:["NextGen In A Box","NGIAB","NGIAB Data Preprocess","Demonstration","Video","Workflow"]},d="NGIAB End-to-End Setup Guide",a={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Quick Start Guide (5 minutes)",id:"quick-start-guide-5-minutes",level:3},{value:"Video Contents Timeline",id:"video-contents-timeline",level:3},{value:"Step 1: Data Preprocessing",id:"step-1-data-preprocessing",level:2},{value:"Clone and Configure Data Preprocess",id:"clone-and-configure-data-preprocess",level:3},{value:"Run Data Preprocess",id:"run-data-preprocess",level:3},{value:"Parameters Explained",id:"parameters-explained",level:3},{value:"Step 2: NGIAB Setup and Execution",id:"step-2-ngiab-setup-and-execution",level:2},{value:"Clone and Run NGIAB",id:"clone-and-run-ngiab",level:3},{value:"Automated Process",id:"automated-process",level:3},{value:"Accessing the Tools",id:"accessing-the-tools",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Documentation",id:"documentation",level:3},{value:"Support",id:"support",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ngiab-end-to-end-setup-guide",children:"NGIAB End-to-End Setup Guide"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This guide provides step-by-step instructions for setting up and running the complete NGIAB workflow, including data preprocessor, model execution, TEEHR evaluation and Tethys visualization."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python 3.x"}),"\n",(0,s.jsx)(n.li,{children:"Git"}),"\n",(0,s.jsx)(n.li,{children:"Docker"}),"\n",(0,s.jsx)(n.li,{children:"Terminal access"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,s.jsx)(n.h3,{id:"quick-start-guide-5-minutes",children:"Quick Start Guide (5 minutes)"}),"\n",(0,s.jsx)(n.p,{children:"You can watch our step-by-step video guide here:"}),"\n","\n",(0,s.jsx)(o.A,{url:"https://youtu.be/s5jz6Hvn-6s"}),"\n",(0,s.jsx)(n.h3,{id:"video-contents-timeline",children:"Video Contents Timeline"}),"\n",(0,s.jsx)(n.p,{children:"(System: Using Mac M1 Max Laptop)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0:00 - Introduction"}),"\n",(0,s.jsx)(n.li,{children:"0:10 - Data Preprocessing Setup"}),"\n",(0,s.jsx)(n.li,{children:"2:32 - NGIAB Installation"}),"\n",(0,s.jsx)(n.li,{children:"3:05 - Running TEEHR Evaluation"}),"\n",(0,s.jsx)(n.li,{children:"4:30 - Visualization using Tethys Portal"}),"\n",(0,s.jsx)(n.li,{children:"5:05 - Verify Output Plot and Conclusion"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-data-preprocessing",children:"Step 1: Data Preprocessing"}),"\n",(0,s.jsx)(n.h3,{id:"clone-and-configure-data-preprocess",children:"Clone and Configure Data Preprocess"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Clone the repository\ngit clone https://github.com/CIROH-UA/NGIAB_data_preprocess\n\n# Navigate to project directory\ncd NGIAB_data_preprocess\n\n# Create and activate virtual environment\npython3 -m venv .venv\nsource .venv/bin/activate\n\n# Install required package\npip install 'ngiab_data_preprocess'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"run-data-preprocess",children:"Run Data Preprocess"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Execute preprocess for sample catchment\npython -m ngiab_data_cli -i cat-2863657 --subset --start 2010-01-01 --end 2010-01-02 --forcings --realization\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-explained",children:"Parameters Explained"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"-i cat-2863657"})}),(0,s.jsx)(n.td,{children:"Specifies the catchment ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--subset"})}),(0,s.jsx)(n.td,{children:"Creates a subset of the data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--start"})}),(0,s.jsx)(n.td,{children:"Start date for the analysis"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--end"})}),(0,s.jsx)(n.td,{children:"End date for the analysis"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--forcings"})}),(0,s.jsx)(n.td,{children:"Includes forcing data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--realization"})}),(0,s.jsx)(n.td,{children:"Generates realization data"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"step-2-ngiab-setup-and-execution",children:"Step 2: NGIAB Setup and Execution"}),"\n",(0,s.jsx)(n.h3,{id:"clone-and-run-ngiab",children:"Clone and Run NGIAB"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Return to home directory\ncd ..\n\n# Clone NGIAB repository\ngit clone https://github.com/CIROH-UA/NGIAB-CloudInfra.git\n\n# Navigate to NGIAB directory\ncd NGIAB-CloudInfra\n\n# Execute the setup and run script\n./guide.sh\n"})}),"\n",(0,s.jsx)(n.h3,{id:"automated-process",children:"Automated Process"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"guide.sh"})," script automatically:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sets up the NGIAB environment"}),"\n",(0,s.jsx)(n.li,{children:"Launches the NextGen model"}),"\n",(0,s.jsx)(n.li,{children:"Initializes and run TEEHR analysis tools"}),"\n",(0,s.jsx)(n.li,{children:"Starts the visualization interface"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"accessing-the-tools",children:"Accessing the Tools"}),"\n",(0,s.jsx)(n.p,{children:"After successful execution, you can access:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Visualizer: ",(0,s.jsx)(n.code,{children:"http://localhost/apps/ngiab"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"Common issues and solutions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Docker Issues"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure Docker is running"}),"\n",(0,s.jsx)(n.li,{children:"Verify Docker configuration"}),"\n",(0,s.jsx)(n.li,{children:"Check Docker permissions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Virtual Environment"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Confirm activation status"}),"\n",(0,s.jsx)(n.li,{children:"Check Python version compatibility"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Installation Problems"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify prerequisites"}),"\n",(0,s.jsx)(n.li,{children:"Check system requirements"}),"\n",(0,s.jsx)(n.li,{children:"Review error logs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,s.jsx)(n.h3,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/CIROH-UA/NGIAB_data_preprocess",children:"NGIAB Data Preprocessor"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/CIROH-UA/NGIAB-CloudInfra",children:"NGIAB Cloud Infrastructure"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/RTIInternational/teehr",children:"TEEHR Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.tethysplatform.org/",children:"Tethys Documentation"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"support",children:"Support"}),"\n",(0,s.jsx)(n.p,{children:"For technical support:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create an issue in the respective GitHub repository"}),"\n",(0,s.jsx)(n.li,{children:"Contact CIROH support team"}),"\n",(0,s.jsx)(n.li,{children:"Join community discussions on CIROH Slack"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},35390:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var r=i(13554),s=i.n(r),t=i(74848);const o=e=>{let{url:n}=e;return(0,t.jsx)("div",{className:"player-wrapper",children:(0,t.jsx)(s(),{className:"react-player",url:n,width:"100%",height:"100%",controls:!0})})}}}]);