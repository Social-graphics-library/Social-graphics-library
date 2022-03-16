"use strict";(self.webpackChunksocial_graphics_library=self.webpackChunksocial_graphics_library||[]).push([[745],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"new_style_classes",title:"Creating a new style class"},s=void 0,c={unversionedId:"new_style_classes",id:"new_style_classes",title:"Creating a new style class",description:"New classes are created in the 'src' folder according to the scheme NAME.template.ts",source:"@site/docs/new_style_classes.md",sourceDirName:".",slug:"/new_style_classes",permalink:"/docs/new_style_classes",tags:[],version:"current",frontMatter:{id:"new_style_classes",title:"Creating a new style class"},sidebar:"defaultSidebar",previous:{title:"Calling multible generations",permalink:"/docs/multi_calls"},next:{title:"Query all injected templates",permalink:"/docs/queryInjectedTemplates"}},p={},u=[{value:"The structure",id:"the-structure",level:2},{value:"The integration",id:"the-integration",level:2},{value:"Caution!",id:"caution",level:3}],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"New classes are created in the 'src' folder according to the scheme NAME.template.ts"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"the-structure"},"The structure"),(0,i.kt)("p",null,"Within the SVG, the corresponding text entries for names and / or team names are replaced by the JS variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export class Example_Template {\n\n    static readonly width: number = 1000;\n\n    static readonly height: number = 1000;\n\n    static template(teamName: string, playerName: string): string {\n        teamName;\n        playerName;\n        return 'svg string';\n    }\n    }\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"the-integration"},"The integration"),(0,i.kt)("p",null,"The new class is integrated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"generator")," method in the",(0,i.kt)("inlineCode",{parentName:"p"},"SGL")," as a ",(0,i.kt)("inlineCode",{parentName:"p"},"case")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sgl.ts")," file."),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public static generator(teamName: string, playerName:string, mode: string, containerId: string, imgMode: string): void {\n        let svgString: string;\n        let width: number;\n        let height: number;\n\n        if (teamName === "" ) {\n            teamName = "Community";\n        }\n\n        if (playerName === "") {\n            playerName = "Player";\n        }\n\n        switch (mode) {\n            case \'youtube-title\':\n                svgString = Youtube_Template.template(teamName, playerName);\n                width = Youtube_Template.width;\n                height = Youtube_Template.height;\n                break;\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Here ->"),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"        default:\n            svgString = False_Template.template();\n            width = False_Template.width;\n            height = False_Template.height;\n            break;\n    }\n\n    this.printImage(svgString, width, height, containerId, imgMode);\n\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The class always(!) has a field for the width, one for the height and a method which returns the SVG string.")),(0,i.kt)("p",null,"Various templates for the large social media platforms in .afpub format are available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"assetes")," folder for creating and adapting. These can be opened and edited with programs from the\n",(0,i.kt)("a",{parentName:"p",href:"http://affinity.serif.com/"},"Affinity Family of Serif"),". Alternatively, the files generated from it are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"svg")," directory."),(0,i.kt)("h3",{id:"caution"},"Caution!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When creating an SVG file, it must be ensured that the later dynamic parts are stored as TEXT and not as a vector.")),(0,i.kt)("p",null,"After the SVG is ready, it can be saved in the ",(0,i.kt)("inlineCode",{parentName:"p"},"svg")," directory and the source code of the SVG is entered as a string in the ",(0,i.kt)("inlineCode",{parentName:"p"},"template()")," method. The corresponding test points are replaced by the variables that are transferred to the method."),(0,i.kt)("p",null,"As long as the name of the file (and the class) is one of the existing ones, with the exception of the example, the example template can now simply be replaced and it will work with the new one. Should the name be different\nthe class must be entered in the glc file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"generator")," methods."),(0,i.kt)("p",null,"Then just compile, integrate and it's done."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Social-graphics-library/Social-graphics-library/master/assets/Demo.gif",alt:"Example Gif"})))}h.isMDXComponent=!0}}]);