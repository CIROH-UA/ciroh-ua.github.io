"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[2208],{2466:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(4848),i=n(8453);const o={sidebar_position:2,title:"Tag Resources on AWS",description:"AWS tags for cost tracking",tags:["AWS","Tag","Cost"]},c="How to Tag Resources on AWS",a={id:"services/cloudservices/aws/documentation/tagging/index",title:"Tag Resources on AWS",description:"AWS tags for cost tracking",source:"@site/docs/services/cloudservices/aws/documentation/tagging/index.md",sourceDirName:"services/cloudservices/aws/documentation/tagging",slug:"/services/cloudservices/aws/documentation/tagging/",permalink:"/docs/services/cloudservices/aws/documentation/tagging/",draft:!1,unlisted:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/services/cloudservices/aws/documentation/tagging/index.md",tags:[{label:"AWS",permalink:"/docs/tags/aws"},{label:"Tag",permalink:"/docs/tags/tag"},{label:"Cost",permalink:"/docs/tags/cost"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Tag Resources on AWS",description:"AWS tags for cost tracking",tags:["AWS","Tag","Cost"]},sidebar:"services",previous:{title:"AWS Best Practices",permalink:"/docs/services/cloudservices/aws/documentation/aws-best-practice/"},next:{title:"AWS Data Science Tools",permalink:"/docs/services/cloudservices/aws/documentation/data-science-tools/"}},r={},l=[];function d(e){const s={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Tags in AWS are essential for organizing resources based on their purpose, owner, or environment, and can also aid in cost tracking when unique key-value pairs are assigned."}),"\n",(0,t.jsx)(s.h1,{id:"how-to-tag-resources-on-aws",children:"How to Tag Resources on AWS"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Using AWS Console:"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Navigate to the desired resource, such as an EC2 instance, and follow these steps:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Select the instance from the list view."}),"\n",(0,t.jsx)(s.li,{children:"Go to the Tags tab and click on the Manage tags button."}),"\n",(0,t.jsx)(s.li,{children:"Add a new tag with a unique Key and Value."}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"/img/EC2-CreateTag.png",alt:"NGIAB Logo",style:{width:"50%",height:"50%"}})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Save the changes."}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Using AWS CLI:"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Use the following command-line example to create a tag for an EC2 instance:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"aws ec2 create-tags \\\n  --resources i-1234567890abcdef0 \\\n  --tags Key=webserver,Value=dev\n"})}),"\n",(0,t.jsx)(s.p,{children:"For each project, tag all its resources with:"}),"\n",(0,t.jsx)(s.p,{children:"Project=project_name (e.g., ciroh-hydroshare, ciroh-fim)\nDouble-check the tag name with the AWS main account admin to make sure it fits well with our naming scheme."})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var t=n(6540);const i={},o=t.createContext(i);function c(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);