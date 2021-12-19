"use strict";(self.webpackChunksocial_graphics_library=self.webpackChunksocial_graphics_library||[]).push([[174],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6722:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"inject_template",title:"Inject Template (Experimental Feature)",sidebar_label:"Inject Template (Experimental Feature)"},c=void 0,p={unversionedId:"inject_template",id:"inject_template",title:"Inject Template (Experimental Feature)",description:"Inject Template (Experimental Feature)",source:"@site/docs/inject_template.md",sourceDirName:".",slug:"/inject_template",permalink:"/docs/inject_template",tags:[],version:"current",frontMatter:{id:"inject_template",title:"Inject Template (Experimental Feature)",sidebar_label:"Inject Template (Experimental Feature)"},sidebar:"defaultSidebar",previous:{title:"Get Data URL",permalink:"/docs/getDataUrl"},next:{title:"Calling multible generations",permalink:"/docs/multi_calls"}},u=[{value:"Inject Template (Experimental Feature)",id:"inject-template-experimental-feature",children:[],level:2}],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inject-template-experimental-feature"},"Inject Template (Experimental Feature)"),(0,i.kt)("p",null,"As an alternative to forking the project, it is possible to inject your own templates locally. To do this, simply install the NPM package with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i social-graphics-library"),", then after the initialization a template can be injected with the following method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'new SGL.inject([\n  {\n    "callName": "template_name",\n    "template": new Template()\n  }\n')))}s.isMDXComponent=!0}}]);