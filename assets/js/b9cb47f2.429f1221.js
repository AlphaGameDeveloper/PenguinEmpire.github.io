"use strict";(self.webpackChunkpenguin_empire_github_io=self.webpackChunkpenguin_empire_github_io||[]).push([[7113],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>m});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(i),d=n,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||o;return i?r.createElement(m,a(a({ref:t},s),{},{components:i})):r.createElement(m,a({ref:t},s))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4346:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(7462),n=(i(7294),i(3905));const o={title:"Getting Started",sidebar_position:1},a=void 0,l={unversionedId:"frc-and-wpilib/getting-started",id:"frc-and-wpilib/getting-started",title:"Getting Started",description:"with WPILib for FRC",source:"@site/docs/frc-and-wpilib/getting-started.md",sourceDirName:"frc-and-wpilib",slug:"/frc-and-wpilib/getting-started",permalink:"/docs/frc-and-wpilib/getting-started",draft:!1,editUrl:"https://github.com/PenguinEmpire/PenguinEmpire.github.io/tree/main/docs/frc-and-wpilib/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"FRC and WPIlib",permalink:"/docs/category/frc-and-wpilib"},next:{title:"Object Detection",permalink:"/docs/frc-and-wpilib/object-detection"}},p={},c=[{value:"Installing WPILib and other tools",id:"installing-wpilib-and-other-tools",level:3},{value:"WPILib Documentation",id:"wpilib-documentation",level:3},{value:"WPILib on GitHub",id:"wpilib-on-github",level:3},{value:"Team 2551 Robot code (some links may be private)",id:"team-2551-robot-code-some-links-may-be-private",level:3}],s={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"with WPILib for FRC"),(0,n.kt)("p",null,"WPILib is the standard robotics software library provided for teams to write code for their FIRST\xae Robotics Competition (FRC\xae) robots. "),(0,n.kt)("p",null,"Once you understand the basics of programming, specifically ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-to-code/cplusplus"},"C++"),", you'll want to prepare your local computer environment to be able to control the robot and contribute code to our GitHub repository to improve our robot's performance."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'This "',(0,n.kt)("a",{parentName:"p",href:"/docs/category/frc-and-wpilib"},"FRC and WPILib"),'" section links to a subset of the overall WPILib documentation. The links here focus on the sections that we use regularly. There are also additional links to other related resources for many topics. ')),(0,n.kt)("h3",{id:"installing-wpilib-and-other-tools"},"Installing WPILib and other tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html"},"WPILib Installation Guide"))),(0,n.kt)("h3",{id:"wpilib-documentation"},"WPILib Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.wpilib.org/en/stable/index.html"},"FRC Control System \u2014 FRC documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://first.wpi.edu/wpilib/allwpilib/docs/release/cpp/"},"WPILib C++ documentation"))),(0,n.kt)("h3",{id:"wpilib-on-github"},"WPILib on GitHub"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wpilibsuite"},"WPILib Suite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The official repositories of the WPILib Suite, a robotics software library used for FRC"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wpilibsuite/allwpilib/tree/main/wpilibc/src/main/native/cpp"},"WPILib C++ source code"))),(0,n.kt)("h3",{id:"team-2551-robot-code-some-links-may-be-private"},"Team 2551 Robot code (some links may be private)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PenguinEmpire/FRC2023"},"PenguinEmpire/FRC2023")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PenguinEmpire/FRC2023-Vision"},"PenguinEmpire/FRC2023-Vision"))))}u.isMDXComponent=!0}}]);