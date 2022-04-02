"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[240],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8017:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i={},l="Installing your own instance",s={unversionedId:"Install",id:"Install",isDocsHomePage:!1,title:"Installing your own instance",description:"Requirements",source:"@site/docs/Install.md",sourceDirName:".",slug:"/Install",permalink:"/community-platform/Install",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Install.md",tags:[],version:"current",frontMatter:{}},c=[],p={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-your-own-instance"},"Installing your own instance"),(0,a.kt)("p",null,"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/"},"Google Firebase project")),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/projects/learn-more#adding_apps_to_a_project"},"Firebase Web App")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/hosting/quickstart#install-cli"},"FireBase Hosting enabled")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth?authuser=0"},"Authentication")," with the Sign-in providers ",(0,a.kt)("strong",{parentName:"li"},"Email/Password")," enabled."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/quickstart"},"Cloud Firestore")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/database?authuser=0&hl=en"},"Realtime Database")),(0,a.kt)("li",{parentName:"ol"},"Firebase CLI tools](",(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cli"},"https://firebase.google.com/docs/cli"),") locally"),(0,a.kt)("li",{parentName:"ol"},"Create an application](",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/appengine/start/create"},"https://console.cloud.google.com/appengine/start/create"),")"),(0,a.kt)("li",{parentName:"ol"},"Your project must be on the Blaze pay as you go pricing plan"),(0,a.kt)("li",{parentName:"ol"},"Configure ",(0,a.kt)("inlineCode",{parentName:"li"},"cors.json")," on the storage bucket](",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/configuring-cors"},"https://cloud.google.com/storage/docs/configuring-cors"),") to support your deployed origin. See: functions/src/config/cors.md")),(0,a.kt)("p",null,"Deploying:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"firebase use <my-new-project-id>\nfirebase deploy\n")),(0,a.kt)("p",null,"Troubleshooting:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Error: Can't determine Firebase Database URL"),"\nIf you see this message it is likely you skipped adding the ",(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/database?authuser=0&hl=en"},"Realtime Database"),". Easily done!")))}u.isMDXComponent=!0}}]);