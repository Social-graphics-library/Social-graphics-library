"use strict";(self.webpackChunksocial_graphics_library=self.webpackChunksocial_graphics_library||[]).push([[741],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"multi_calls",title:"Calling multible generations"},c=void 0,s={unversionedId:"multi_calls",id:"multi_calls",title:"Calling multible generations",description:"The necessary parameters for creation are transferred to the multiGenerator as a JSON array and the necessary team and player names as strings. From this he builds the corresponding pictures.",source:"@site/docs/multi_calls.md",sourceDirName:".",slug:"/multi_calls",permalink:"/docs/multi_calls",tags:[],version:"current",frontMatter:{id:"multi_calls",title:"Calling multible generations"},sidebar:"defaultSidebar",previous:{title:"Inject Template (Experimental Feature)",permalink:"/docs/inject_template"},next:{title:"Creating a new style class",permalink:"/docs/new_style_classes"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The necessary parameters for creation are transferred to the multiGenerator as a JSON array and the necessary team and player names as strings. From this he builds the corresponding pictures."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"new SGL\n        .multiGenerator(\n            teamName,\n            userName\n        {\n            [\n                {\n                    mode: 'twitch-title',\n                    containerId: 'img-container-1',\n                    imgMode: 'jpeg'\n                },\n                {\n                    mode: 'youtube-title',\n                    containerId: 'img-container-4',\n                    imgMode: 'webp',\n                    generateLink: true\n                },\n                {\n                    mode: 'logo',\n                    containerId: 'img-container-5',\n                    imgMode: 'svg'\n                }\n            ]\n        });\n")))}m.isMDXComponent=!0}}]);