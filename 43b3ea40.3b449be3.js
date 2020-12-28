(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(97)),s={id:"new_style_classes",title:"Creating a new style class"},l={unversionedId:"new_style_classes",id:"new_style_classes",isDocsHomePage:!1,title:"Creating a new style class",description:"New classes are created in the 'src' folder according to the scheme NAME.template.ts",source:"@site/docs/new_style_classes.md",slug:"/new_style_classes",permalink:"/docs/new_style_classes",editUrl:"https://github.com/josunlp/Social-graphics-library/edit/master/docs/new_style_classes.md",version:"current",sidebar:"someSidebar",previous:{title:"Basic generation",permalink:"/docs/"},next:{title:"Calling multible generations",permalink:"/docs/multi_calls"}},c=[{value:"The structure",id:"the-structure",children:[]},{value:"The integration",id:"the-integration",children:[{value:"Caution!",id:"caution",children:[]}]}],o={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"New classes are created in the 'src' folder according to the scheme NAME.template.ts"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"the-structure"},"The structure"),Object(r.b)("p",null,"Within the SVG, the corresponding text entries for names and / or team names are replaced by the JS variables."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"export class Example_Template {\n\n    static readonly width: number = 1000;\n\n    static readonly height: number = 1000;\n\n    static template(teamName: string, playerName: string): string {\n        teamName;\n        playerName;\n        return 'svg string';\n    }\n    }\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"the-integration"},"The integration"),Object(r.b)("p",null,"The new class is integrated in the ",Object(r.b)("inlineCode",{parentName:"p"},"generator")," method in the",Object(r.b)("inlineCode",{parentName:"p"},"SocialGraphicsLibrary")," as a ",Object(r.b)("inlineCode",{parentName:"p"},"case")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"glc.ts")," file."),Object(r.b)("hr",null),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'public static generator(teamName: string, playerName:string, mode: string, containerId: string, imgMode: string): void {\n        let svgString: string;\n        let width: number;\n        let height: number;\n\n        if (teamName === "" ) {\n            teamName = "Community";\n        }\n\n        if (playerName === "") {\n            playerName = "Player";\n        }\n\n        switch (mode) {\n            case \'youtube-title\':\n                svgString = Youtube_Template.template(teamName, playerName);\n                width = Youtube_Template.width;\n                height = Youtube_Template.height;\n                break;\n')),Object(r.b)("hr",null),Object(r.b)("p",null,"Here ->"),Object(r.b)("hr",null),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"        default:\n            svgString = False_Template.template();\n            width = False_Template.width;\n            height = False_Template.height;\n            break;\n    }\n\n    this.printImage(svgString, width, height, containerId, imgMode);\n\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The class always(!) has a field for the width, one for the height and a method which returns the SVG string.")),Object(r.b)("p",null,"Various templates for the large social media platforms in .afpub format are available in the ",Object(r.b)("inlineCode",{parentName:"p"},"assetes")," folder for creating and adapting. These can be opened and edited with programs from the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://affinity.serif.com/"}),"Affinity Family of Serif"),". Alternatively, the files generated from it are located in the ",Object(r.b)("inlineCode",{parentName:"p"},"svg")," directory."),Object(r.b)("h3",{id:"caution"},"Caution!"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When creating an SVG file, it must be ensured that the later dynamic parts are stored as TEXT and not as a vector.")),Object(r.b)("p",null,"After the SVG is ready, it can be saved in the ",Object(r.b)("inlineCode",{parentName:"p"},"svg")," directory and the source code of the SVG is entered as a string in the ",Object(r.b)("inlineCode",{parentName:"p"},"template()")," method. The corresponding test points are replaced by the variables that are transferred to the method."),Object(r.b)("p",null,"As long as the name of the file (and the class) is one of the existing ones, with the exception of the example, the example template can now simply be replaced and it will work with the new one. Should the name be different\nthe class must be entered in the glc file in the ",Object(r.b)("inlineCode",{parentName:"p"},"generator")," methods."),Object(r.b)("p",null,"Then just compile, integrate and it's done."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/Demo.gif",alt:"Example Gif"}))))}b.isMDXComponent=!0}}]);