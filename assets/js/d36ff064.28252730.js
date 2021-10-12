"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2914],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},589:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},l="Running Locally - Minikube - k8s",u={unversionedId:"getting-started-local/running-locally-minikube",id:"getting-started-local/running-locally-minikube",isDocsHomePage:!1,title:"Running Locally - Minikube - k8s",description:"It is quite straightforward to deploy Conductor to Kubernetes. We learned how to use docker-compose in our previous",source:"@site/docs/getting-started-local/running-locally-minikube.md",sourceDirName:"getting-started-local",slug:"/getting-started-local/running-locally-minikube",permalink:"/docs/docs/getting-started-local/running-locally-minikube",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/getting-started-local/running-locally-minikube.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialsSideBar",previous:{title:"Running Locally - Docker Compose",permalink:"/docs/docs/getting-started-local/running-locally-docker"},next:{title:"Running Your First Worker",permalink:"/docs/docs/running-workflows/running-first-worker"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-locally---minikube---k8s"},"Running Locally - Minikube - k8s"),(0,i.kt)("p",null,"It is quite straightforward to deploy Conductor to Kubernetes. We learned how to use docker-compose in our previous\narticle here. We can\nfollow ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/translate-compose-kubernetes/"},"the guide here")," to\nconvert our docker-compose into a working kubernetes installation."),(0,i.kt)("p",null,"This guide will walk through step by step on how this works. In case you find any steps as not working, please check the\nlink above to see if there are any updates. You can also help us by editing this page if you find any discrepancy."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install minikube or a similar Kubernetes cluster in your local or development environment\n",(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"https://minikube.sigs.k8s.io/docs/start/"))),(0,i.kt)("h3",{id:"steps"},"Steps"))}d.isMDXComponent=!0}}]);