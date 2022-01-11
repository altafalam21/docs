"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9520],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9831:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="Dynamic vs Switch Tasks",l={unversionedId:"how-tos/dynamic-vs-switch-tasks",id:"how-tos/dynamic-vs-switch-tasks",isDocsHomePage:!1,title:"Dynamic vs Switch Tasks",description:"Learn more about",source:"@site/docs/how-tos/dynamic-vs-switch-tasks.md",sourceDirName:"how-tos",slug:"/how-tos/dynamic-vs-switch-tasks",permalink:"/content/docs/how-tos/dynamic-vs-switch-tasks",editUrl:"https://github.com/orkes-io/docs/edit/main/docs/how-tos/dynamic-vs-switch-tasks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"howtoSideBar",previous:{title:"Reusing Tasks",permalink:"/content/docs/how-tos/reusing-tasks"},next:{title:"Build a Java Task Worker",permalink:"/content/docs/how-tos/build-a-java-task-worker"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dynamic-vs-switch-tasks"},"Dynamic vs Switch Tasks"),(0,a.kt)("p",null,"Learn more about"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"../reference-docs/dynamic-task"},"Dynamic Tasks")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"../reference-docs/switch-task"},"Switch Tasks"))),(0,a.kt)("p",null,"Dynamic Tasks are useful in situations when need to run a task of which the task type is determined at runtime instead\nof during the configuration. It is similar to the ",(0,a.kt)("a",{parentName:"p",href:"../reference-docs/switch-task"},"SWITCH")," use case but with ",(0,a.kt)("inlineCode",{parentName:"p"},"DYNAMIC"),"\nwe won't need to preconfigure all case options in the workflow definition itself. Instead, we can mark the task\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"DYNAMIC")," and determine which underlying task does it run during the workflow execution itself."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use DYNAMIC task as a replacement for SWITCH if you have too many case options"),(0,a.kt)("li",{parentName:"ol"},"DYNAMIC task is an option when you want to programmatically determine the next task to run instead of using expressions"),(0,a.kt)("li",{parentName:"ol"},"DYNAMIC task simplifies the workflow execution UI view which will now only show the selected task"),(0,a.kt)("li",{parentName:"ol"},"SWITCH task visualization is helpful as a documentation - showing you all options that the workflow could have\ntaken"),(0,a.kt)("li",{parentName:"ol"},"SWITCH task comes with a default task option which can be useful in some use cases")))}m.isMDXComponent=!0}}]);