"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3554],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7157:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],i={sidebar_position:1},s="Running Locally - From Code",c={unversionedId:"getting-started-local/running-locally",id:"getting-started-local/running-locally",isDocsHomePage:!1,title:"Running Locally - From Code",description:"In this article we will explore how you can set up Netflix Conductor on your local machine for trying out some of its",source:"@site/docs/getting-started-local/running-locally.md",sourceDirName:"getting-started-local",slug:"/getting-started-local/running-locally",permalink:"/docs/docs/getting-started-local/running-locally",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/getting-started-local/running-locally.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialsSideBar",previous:{title:"Conductor",permalink:"/docs/docs/intro"},next:{title:"Running Locally - Docker Compose",permalink:"/docs/docs/getting-started-local/running-locally-docker"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps to Running Conductor",id:"steps-to-running-conductor",children:[{value:"1. Clone the Netflix Conductor repository",id:"1-clone-the-netflix-conductor-repository",children:[]},{value:"2. Compile and run Server",id:"2-compile-and-run-server",children:[]},{value:"3. Running the UI",id:"3-running-the-ui",children:[]}]},{value:"Summary",id:"summary",children:[]}],d={toc:u};function p(e){var t=e.components,i=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"running-locally---from-code"},"Running Locally - From Code"),(0,l.kt)("p",null,"In this article we will explore how you can set up Netflix Conductor on your local machine for trying out some of its\nfeatures."),(0,l.kt)("p",null,"After following the steps listed in this article, you will be able to have:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A local instance of Netflix Conductor API server running"),(0,l.kt)("li",{parentName:"ol"},"Have the UI spun up against the API server without the ability to search")),(0,l.kt)("p",null,"Ok, you might ask, why not the ability to search? For enabling search we will need an additional installation step which is\nbasically to set up an Elasticsearch instance. Our next article shows you how to do this."),(0,l.kt)("p",null,"You can find that here: ",(0,l.kt)("inlineCode",{parentName:"p"},"TODO - Add Link")),(0,l.kt)("p",null,"In this article, we will taking the option of building and running from the codebase. We are doing this so that you can\nalso see the codebase that conductor runs from. In the follow up to this blog here, we will review another option of\nrunning Conductor locally with the support of UI search functionality."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"You will need JDK installed in your local machine",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"You can run this off the latest version of JDK, we tried the steps in this blog using JDK 13"))),(0,l.kt)("li",{parentName:"ol"},"If you want to build the code base with tests, you will also need Docker installed: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/"},"https://docs.docker.com/desktop/"))),(0,l.kt)("h2",{id:"steps-to-running-conductor"},"Steps to Running Conductor"),(0,l.kt)("h3",{id:"1-clone-the-netflix-conductor-repository"},"1. Clone the Netflix Conductor repository"),(0,l.kt)("p",null,"Clone conductor code from the repo: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Netflix/conductor"},"https://github.com/Netflix/conductor")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/Netflix/conductor.git\nCloning into 'conductor'...\nremote: Enumerating objects: 53328, done.\nremote: Counting objects: 100% (1555/1555), done.\nremote: Compressing objects: 100% (1032/1032), done.\nremote: Total 53328 (delta 298), reused 1351 (delta 206), pack-reused 51773\nReceiving objects: 100% (53328/53328), 20.53 MiB | 9.50 MiB/s, done.\nResolving deltas: 100% (20544/20544), done.\n")),(0,l.kt)("h3",{id:"2-compile-and-run-server"},"2. Compile and run Server"),(0,l.kt)("p",null,"Let\u2019s run the gradle command to run the Conductor Server. You don't have to install gradle, it comes with the code\nrepository. Assuming you ran the clone command, first change directory into the ",(0,l.kt)("inlineCode",{parentName:"p"},"conductor")," directory as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd conductor\nconductor $ cd server\nserver $ ../gradlew bootRun\n")),(0,l.kt)("p",null,"If you are running this for the first time, it will take a minute or two but soon you will see something like this in\nthe console:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Conductor Console",src:n(637).Z})),(0,l.kt)("p",null,"Once you see something like this in your log, your server is up and ready to serve requests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"com.netflix.conductor.Conductor [] - Started Conductor in 5.912 seconds (JVM running for 6.953)\n")),(0,l.kt)("p",null,"Conductor Server ships with a basic page which also has a link to the Swagger API browser. Head over to the default\nURL: ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Conductor Server Home Page",src:n(3225).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Congrats")," you have your API server up and running. Click on the Swagger Documentation to browse all the APIs from\nConductor"),(0,l.kt)("h3",{id:"3-running-the-ui"},"3. Running the UI"),(0,l.kt)("p",null,"Since we are running from the code, you will also need to spin up the UI. The UI module is designed to be plug and play\nand conductor repository comes with a default UI. Let's get that up and running."),(0,l.kt)("p",null,"To run the UI locally, you will need to install a few dependencies. The UI code base is written Node.JS so let\u2019s install\nthat using instructions ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ node --version\nV16.6.1\n")),(0,l.kt)("p",null,"Next you will need to install yarn using the\ninstructions ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install/#mac-stable"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn --version\n1.22.10\n")),(0,l.kt)("p",null,"Once you have install node and yarn, you can go do the directory and perform an install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd conductor/ui\nui $ yarn install\n")),(0,l.kt)("p",null,"This will take a couple of mins, and it should run successfully. And then you can use the following command to start the\nUI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ui $ yarn start\n")),(0,l.kt)("p",null,"Once running you will see the link to access this in your console. When running in this way - it starts in a development\nmode include a ReactJS console. You can close this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Compiled successfully!\n\nYou can now view client in the browser.\n\n  Local:            http://localhost:5000\n\nNote that the development build is not optimized.\nTo create a production build, use yarn build.\n")),(0,l.kt)("p",null,"Click on the ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:5000"},"link")," to open the UI"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Conductor Server Home Page",src:n(9350).Z})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Congrats! You have successfully installed a fully working version of Conductor Server and UI on your local.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"By default the UI will connect with the API server on 8080 port, if you need to change this port for any reason you\nhave to edit the configuration files to do so"),(0,l.kt)("li",{parentName:"ul"},"The UI will not have search capabilities as it requires Indexing via Elasticsearch. You can refer to the follow up\nblog post here on how to use a local Elasticsearch instance to see the power of search functionality"),(0,l.kt)("li",{parentName:"ul"},"All the data is stored in memory, so if you restart the services you will lose all the data. We will be publishing\nguides on how to set up a persisted data store on your local shortly. Look out for it!")),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"In this blog post \u2014 we learned how to install Conductor locally including the UI in less than a few minutes."),(0,l.kt)("p",null,"Concepts we touched on:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Running the Conductor API server locally"),(0,l.kt)("li",{parentName:"ol"},"Running the Conductor UI server locally without the search indexing functionality")),(0,l.kt)("p",null,"Thank you for reading, and we hope you found this helpful. Please feel free to reach out to us for any questions, we\nare happy to help in any way we can. You can use the GitHub discussions, or our Slack to chat with us."))}p.isMDXComponent=!0},637:function(e,t,n){t.Z=n.p+"assets/images/conductorConsole-d6de6a9586a2ceeae84533a2685c1c26.png"},3225:function(e,t,n){t.Z=n.p+"assets/images/conductorHome-7062915cde29523f95b05a6c178c9ffd.png"},9350:function(e,t,n){t.Z=n.p+"assets/images/conductorUI-950acfd1d46cf2dcc18e2ce827c55019.png"}}]);