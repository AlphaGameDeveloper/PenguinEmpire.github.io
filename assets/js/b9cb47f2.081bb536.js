"use strict";(self.webpackChunkpenguin_empire_github_io=self.webpackChunkpenguin_empire_github_io||[]).push([[7113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?i.createElement(b,a(a({ref:t},c),{},{components:r})):i.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const o={title:"Getting Started",sidebar_position:1},a=void 0,l={unversionedId:"frc-and-wpilib/getting-started",id:"frc-and-wpilib/getting-started",title:"Getting Started",description:"... with WPILib for FRC",source:"@site/docs/frc-and-wpilib/getting-started.md",sourceDirName:"frc-and-wpilib",slug:"/frc-and-wpilib/getting-started",permalink:"/docs/frc-and-wpilib/getting-started",draft:!1,editUrl:"https://github.com/PenguinEmpire/PenguinEmpire.github.io/tree/main/docs/frc-and-wpilib/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"FRC and WPIlib",permalink:"/docs/category/frc-and-wpilib"},next:{title:"Programming Basics",permalink:"/docs/category/programming-basics"}},p={},s=[{value:"Primary WPILib links",id:"primary-wpilib-links",level:2},{value:"Installing WPILib and other tools",id:"installing-wpilib-and-other-tools",level:3},{value:"WPILib Documentation",id:"wpilib-documentation",level:3},{value:"WPILib on GitHub",id:"wpilib-on-github",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"... with WPILib for FRC"),(0,n.kt)("p",null,"WPILib is the standard robotics software library provided for teams to write code for their FIRST\xae Robotics Competition (FRC\xae) robots. "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The subsections under this ",(0,n.kt)("em",{parentName:"p"},"FRC and WPILib")," section link to a subset of the overall WPILib documentation. The links here focus on the sections that we use regularly. There are also additional links to other related resources for many topics. ")),(0,n.kt)("p",null,"Once you understand the basics of programming, specifically ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-to-code/cplusplus"},"C++"),", you'll want to prepare your local computer environment to be able to control the robot and contribute code to our ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-to-code/github"},"GitHub")," repository to improve our robot's performance."),(0,n.kt)("admonition",{title:"Prerequisites",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you haven't selected an IDE or set up Git yet on your local environment (laptop), review the ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-to-code/getting-started"},(0,n.kt)("strong",{parentName:"a"},"Getting Started")," section of ",(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("em",{parentName:"strong"},"Learn to Code"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We usually have a dedicated Windows computer for each driver station all set up to control the robot. This Windows computer should already have NI LabVIEW installed and running. If you need to prepare a new Windows computer to serve as the driver station computer, you'll need to follow the instructions under ",(0,n.kt)("a",{parentName:"p",href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/index.html#"},"Zero to Robot - Step 2: Installing Software")," labelled ",(0,n.kt)("a",{parentName:"p",href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/labview-setup.html"},'"Installing LabVIEW for FRC (LabVIEW only)"'))),(0,n.kt)("admonition",{title:"Procedure",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To get the basics up and running quickly, follow this suggested procedure on your local development environment (laptop):"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use Github Desktop to clone the most recent robot code to your local machine. For example, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/PenguinEmpire/FRC2023"},"PenguinEmpire/FRC2023"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review the section named, ",(0,n.kt)("a",{parentName:"p",href:"/docs/frc-and-wpilib/advanced-programming/command-based-programming"},"Command-Based Programming"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Under constructon"))))),(0,n.kt)("h2",{id:"primary-wpilib-links"},"Primary WPILib links"),(0,n.kt)("h3",{id:"installing-wpilib-and-other-tools"},"Installing WPILib and other tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html"},"WPILib Installation Guide"))),(0,n.kt)("h3",{id:"wpilib-documentation"},"WPILib Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.wpilib.org/en/stable/index.html"},"FRC Control System \u2014 FRC documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://first.wpi.edu/wpilib/allwpilib/docs/release/cpp/"},"WPILib C++ documentation"))),(0,n.kt)("h3",{id:"wpilib-on-github"},"WPILib on GitHub"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wpilibsuite"},"WPILib Suite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The official repositories of the WPILib Suite, a robotics software library used for FRC"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wpilibsuite/allwpilib/tree/main/wpilibc/src/main/native/cpp"},"WPILib C++ source code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wpilibsuite/frc-docs"},"frc-docs repo for docs.wpilib.org"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"repo for Official FRC Documentation")))))}u.isMDXComponent=!0}}]);