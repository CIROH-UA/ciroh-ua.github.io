"use strict";(self.webpackChunkciroh_docusite=self.webpackChunkciroh_docusite||[]).push([[818],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return t?o.createElement(m,a(a({ref:n},l),{},{components:t})):o.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},a="Advancing Snow Modeling",c={unversionedId:"products/Advancing Snow Model/SnowModel",id:"products/Advancing Snow Model/SnowModel",title:"Advancing Snow Modeling",description:"The National Snow Model incorporates ground-based snow measuring sites, remotely-sensed snow cover information, and a Artificial Neural Network to provide point estimations of Snow Water Equivalent. The network was trained on historical data data from NASA\u2019s ASO missions, divided into regions, and then a LightGradientBoost Model was used to preform recursive feature elimination to produce an efficient feature selection and region-specific model. The class contains the required functions for downloading data, pre-processing, running inference, and for producing visualizations.",source:"@site/docs/products/Advancing Snow Model/SnowModel.md",sourceDirName:"products/Advancing Snow Model",slug:"/products/Advancing Snow Model/SnowModel",permalink:"/docs/products/Advancing Snow Model/SnowModel",draft:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Advancing Snow Model/SnowModel.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NextGen In A Box",permalink:"/docs/products/NextGenInABox/NGIAB"},next:{title:"Research-Oriented Streamflow Evaluation Tool (ROSET)",permalink:"/docs/products/StreamFlow Eval/StreamflowEval"}},d={},s=[{value:"Code",id:"code",level:2}],l={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advancing-snow-modeling"},"Advancing Snow Modeling"),(0,r.kt)("p",null,"The National Snow Model incorporates ground-based snow measuring sites, remotely-sensed snow cover information, and a Artificial Neural Network to provide point estimations of Snow Water Equivalent. The network was trained on historical data data from NASA\u2019s ASO missions, divided into regions, and then a LightGradientBoost Model was used to preform recursive feature elimination to produce an efficient feature selection and region-specific model. The class contains the required functions for downloading data, pre-processing, running inference, and for producing visualizations."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("p",null,"The source code for the Snow Model can be found on GitHub:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/whitelightning450/National-Snow-Model"},"https://github.com/whitelightning450/National-Snow-Model")))}u.isMDXComponent=!0}}]);