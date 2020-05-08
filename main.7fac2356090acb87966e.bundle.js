(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1271:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(193);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1273)],module)}.call(this,__webpack_require__(1272)(module))},1273:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.js":1280,"./components/Heading/Heading.stories.js":1281,"./components/Text/Text.stories.js":1282};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1273},1279:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),client=__webpack_require__(193),emotion_theming_browser_esm=__webpack_require__(276),colorRed={100:"#FC8181",200:"#F56565",300:"#E53E3E",400:"#C53030",500:"#9B2C2C"},colorGreen={100:"#39C978",200:"#22BB66",300:"#04AA51",400:"#038E41",500:"#027231"},colorBlue={100:"#4F8EDE",200:"#2E72D6",300:"#0052CC",400:"#0042B7",500:"#0035A6"},colorOrange={100:"#FBD38D",200:"#F6AD55",300:"#ED8936",400:"#DD6B20",500:"#C05621"},theme={typography:{heading:{extraSmall:{fontSize:"17px",lineHeight:"24px"},small:{fontSize:"19px",lineHeight:"24px"},medium:{fontSize:"22px",lineHeight:"24px"},large:{fontSize:"24px",lineHeight:"32px"},extraLarge:{fontSize:"28px",lineHeight:"32px"}},text:{small:{fontSize:"13px",lineHeight:"20px"},medium:{fontSize:"16px",lineHeight:"24px"},large:{fontSize:"18px",lineHeight:"28px"}}},breakpoints:{extraSmall:"0",small:"576px",medium:"768px",large:"992px",extraLarge:"1200px"},fontFamily:{default:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',mono:"Consolas, monaco, monospace"},fontWeight:{regular:400,semiBold:600,bold:700},color:{white:"#FFF",primary:colorBlue,success:colorGreen,danger:colorRed,warning:colorOrange,blue:colorBlue,green:colorGreen,red:colorRed,orange:colorOrange}};function ThemeProvider(_ref){var children=_ref.children;return react_default.a.createElement(emotion_theming_browser_esm.ThemeProvider,{theme:theme},children)}ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider"};var themeProvider=ThemeProvider;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/themeProvider.js"]={name:"ThemeProvider",docgenInfo:ThemeProvider.__docgenInfo,path:"src/theme/themeProvider.js"}),Object(client.addDecorator)((function(storyFn){return react_default.a.createElement(themeProvider,null,storyFn())}))},1280:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"base",(function(){return base})),__webpack_require__.d(__webpack_exports__,"color",(function(){return Button_stories_color})),__webpack_require__.d(__webpack_exports__,"outline",(function(){return outline})),__webpack_require__.d(__webpack_exports__,"block",(function(){return block})),__webpack_require__.d(__webpack_exports__,"disabled",(function(){return disabled})),__webpack_require__.d(__webpack_exports__,"loading",(function(){return loading}));__webpack_require__(10);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(34),styled_base_browser_esm=(__webpack_require__(1),__webpack_require__(8),__webpack_require__(3),__webpack_require__(4),__webpack_require__(65)),prop_types=__webpack_require__(14),prop_types_default=__webpack_require__.n(prop_types),core_browser_esm=__webpack_require__(33);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function getLoaderSize(size){switch(size){case"small":return"6px";case"medium":return"9px";case"large":return"12px"}}var _ref={name:"zqdyvx-StyledButton",styles:"opacity:0.5;pointer-events:none;;label:StyledButton;"},_ref2={name:"15a0co6-StyledButton",styles:"pointer-events:none;;label:StyledButton;"},StyledButton=Object(styled_base_browser_esm.a)("button",{target:"e7iiz6h0",label:"StyledButton"})((function(props){var color=props.theme.color[props.color];return Object(core_browser_esm.css)("position:relative;display:block;border-radius:4px;font-family:",props.theme.fontFamily.default,";font-size:",props.theme.typography.text[props.size].fontSize,";font-weight:",props.theme.typography.text[props.size].fontWeight,";cursor:pointer;padding:",function getPadding(size){switch(size){case"small":return"5px 10px";case"medium":return"10px 20px";case"large":return"15px 30px"}}(props.size),";width:",props.block?"100%":"fit-content",";text-decoration:none;border:1px solid transparent;margin-bottom:16px;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;",props.outline?Object(core_browser_esm.css)("color:",color[300],";background:",props.theme.color.white,";border-color:",color[300],";:hover{color:",props.theme.color.white,";background:",color[400],";border-color:",color[400],";};label:StyledButton;"):Object(core_browser_esm.css)("color:",props.theme.color.white,";background:",color[300],";border-color:",color[300],";:hover{background:",color[400],";border-color:",color[400],";};label:StyledButton;")," ",props.disabled&&_ref," ",props.loading&&_ref2,";label:StyledButton;")}),""),StyledLoaderContainer=Object(styled_base_browser_esm.a)("div",{target:"e7iiz6h1",label:"StyledLoaderContainer"})((function(props){return Object(core_browser_esm.css)("position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;top:-1px;left:-1px;width:100%;height:100%;border-radius:4px;border:1px solid ",props.theme.color[props.color][400],";background:",props.outline?props.theme.color.white:props.theme.color[props.color][400],";;label:StyledLoaderContainer;")}),""),StyledLoader=Object(styled_base_browser_esm.a)("div",{target:"e7iiz6h2",label:"StyledLoader"})((function(props){return Object(core_browser_esm.css)("text-align:center;div{width:",getLoaderSize(props.size),";height:",getLoaderSize(props.size),";background-color:",props.outline?props.theme.color[props.color][400]:props.theme.color.white,";border-radius:100%;display:inline-block;animation:bounce 1.4s infinite ease-in-out both;}.bounce1{animation-delay:-0.32s;}.bounce2{animation-delay:-0.16s;}@keyframes bounce{0%,80%,100%{transform:scale(0);}40%{transform:scale(1.0);}};label:StyledLoader;")}),""),_ref4=react_default.a.createElement("div",{className:"bounce1"}),_ref5=react_default.a.createElement("div",{className:"bounce2"}),_ref6=react_default.a.createElement("div",{className:"bounce3"});function Button(_ref3){var children=_ref3.children,props=_objectWithoutProperties(_ref3,["children"]);return react_default.a.createElement(StyledButton,props,props.loading&&react_default.a.createElement(StyledLoaderContainer,_extends({},props,{as:"div"}),react_default.a.createElement(StyledLoader,_extends({},props,{as:"div"}),_ref4,_ref5,_ref6)),children)}Button.displayName="Button",Button.propTypes={as:prop_types_default.a.oneOf(["button","a"]).isRequired,size:prop_types_default.a.oneOf(["small","medium","large"]).isRequired,color:prop_types_default.a.oneOf(["primary","success","danger","warning","blue","green","red","orange"]).isRequired,outline:prop_types_default.a.bool,block:prop_types_default.a.bool,disabled:prop_types_default.a.bool,target:prop_types_default.a.string,href:prop_types_default.a.string,children:prop_types_default.a.node.isRequired},Button.defaultProps={as:"button",size:"medium",color:"primary"},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{defaultValue:{value:'"button"',computed:!1},type:{name:"enum",value:[{value:'"button"',computed:!1},{value:'"a"',computed:!1}]},required:!1,description:""},size:{defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1,description:""},color:{defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"success"',computed:!1},{value:'"danger"',computed:!1},{value:'"warning"',computed:!1},{value:'"blue"',computed:!1},{value:'"green"',computed:!1},{value:'"red"',computed:!1},{value:'"orange"',computed:!1}]},required:!1,description:""},outline:{type:{name:"bool"},required:!1,description:""},block:{type:{name:"bool"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},target:{type:{name:"string"},required:!1,description:""},href:{type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!0,description:""}}};var Button_Button=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/Button/Button.js"});__webpack_require__(116).withSource;var addSourceDecorator=__webpack_require__(116).addSource,__SOURCE_PREFIX__="/home/runner/work/ui/ui/src/components/Button",__STORY__='import React from "react"\nimport { boolean, select, text } from "@storybook/addon-knobs"\nimport Button from "./Button"\n\nexport default {\n  title: "Components/Button",\n  component: Button,\n}\n\nconst sizes = ["small", "medium", "large"]\nconst colors = ["primary", "success", "danger", "warning"]\nconst elements = ["button", "a"]\n\nexport const base = () => (\n  <Button\n    size={select("Size", sizes, sizes[1])}\n    color={select("Color", colors, colors[0])}\n    as={select("Element", elements, elements[0])}\n    outline={boolean("Outline", false)}\n    block={boolean("Block", false)}\n    disabled={boolean("Disabled", false)}\n    loading={boolean("Loading", false)}\n  >\n    {text("Text", "Hello world")}\n  </Button>\n)\n\nexport const color = () =>\n  colors.map(color => (\n    <Button key={color} color={color}>\n      {color} button\n    </Button>\n  ))\n\nexport const outline = () =>\n  colors.map(color => (\n    <Button key={color} color={color} outline>\n      {color} button\n    </Button>\n  ))\n\nexport const block = () => (\n  <Button block>\n    Hello World\n  </Button>\n)\n\nexport const disabled = () => (\n  <Button disabled>\n    Hello World\n  </Button>\n)\n\nexport const loading = () => (\n  <Button loading>\n    Hello World\n  </Button>\n)\n',__ADDS_MAP__={"components-button--base":{startLoc:{col:20,line:14},endLoc:{col:1,line:26},startBody:{col:20,line:14},endBody:{col:1,line:26}},"components-button--color":{startLoc:{col:21,line:28},endLoc:{col:4,line:33},startBody:{col:21,line:28},endBody:{col:4,line:33}},"components-button--outline":{startLoc:{col:23,line:35},endLoc:{col:4,line:40},startBody:{col:23,line:35},endBody:{col:4,line:40}},"components-button--block":{startLoc:{col:21,line:42},endLoc:{col:1,line:46},startBody:{col:21,line:42},endBody:{col:1,line:46}},"components-button--disabled":{startLoc:{col:24,line:48},endLoc:{col:1,line:52},startBody:{col:24,line:48},endBody:{col:1,line:52}},"components-button--loading":{startLoc:{col:23,line:54},endLoc:{col:1,line:58},startBody:{col:23,line:54},endBody:{col:1,line:58}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},sizes=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react"\nimport { boolean, select, text } from "@storybook/addon-knobs"\nimport Button from "./Button"\n\nexport default {\n  title: "Components/Button",\n  component: Button,\n}\n\nconst sizes = ["small", "medium", "large"]\nconst colors = ["primary", "success", "danger", "warning"]\nconst elements = ["button", "a"]\n\nexport const base = () => (\n  <Button\n    size={select("Size", sizes, sizes[1])}\n    color={select("Color", colors, colors[0])}\n    as={select("Element", elements, elements[0])}\n    outline={boolean("Outline", false)}\n    block={boolean("Block", false)}\n    disabled={boolean("Disabled", false)}\n    loading={boolean("Loading", false)}\n  >\n    {text("Text", "Hello world")}\n  </Button>\n)\n\nexport const color = () =>\n  colors.map(color => (\n    <Button key={color} color={color}>\n      {color} button\n    </Button>\n  ))\n\nexport const outline = () =>\n  colors.map(color => (\n    <Button key={color} color={color} outline>\n      {color} button\n    </Button>\n  ))\n\nexport const block = () => (\n  <Button block>\n    Hello World\n  </Button>\n)\n\nexport const disabled = () => (\n  <Button disabled>\n    Hello World\n  </Button>\n)\n\nexport const loading = () => (\n  <Button loading>\n    Hello World\n  </Button>\n)\n',locationsMap:{"components-button--base":{startLoc:{col:20,line:14},endLoc:{col:1,line:26},startBody:{col:20,line:14},endBody:{col:1,line:26}},"components-button--color":{startLoc:{col:21,line:28},endLoc:{col:4,line:33},startBody:{col:21,line:28},endBody:{col:4,line:33}},"components-button--outline":{startLoc:{col:23,line:35},endLoc:{col:4,line:40},startBody:{col:23,line:35},endBody:{col:4,line:40}},"components-button--block":{startLoc:{col:21,line:42},endLoc:{col:1,line:46},startBody:{col:21,line:42},endBody:{col:1,line:46}},"components-button--disabled":{startLoc:{col:24,line:48},endLoc:{col:1,line:52},startBody:{col:24,line:48},endBody:{col:1,line:52}},"components-button--loading":{startLoc:{col:23,line:54},endLoc:{col:1,line:58},startBody:{col:23,line:54},endBody:{col:1,line:58}}}}},title:"Components/Button",component:Button_Button},["small","medium","large"]),colors=["primary","success","danger","warning"],Button_stories_elements=["button","a"],base=addSourceDecorator((function(){return react_default.a.createElement(Button_Button,{size:Object(dist.select)("Size",sizes,sizes[1]),color:Object(dist.select)("Color",colors,colors[0]),as:Object(dist.select)("Element",Button_stories_elements,Button_stories_elements[0]),outline:Object(dist.boolean)("Outline",!1),block:Object(dist.boolean)("Block",!1),disabled:Object(dist.boolean)("Disabled",!1),loading:Object(dist.boolean)("Loading",!1)},Object(dist.text)("Text","Hello world"))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Button_stories_color=addSourceDecorator((function(){return colors.map((function(color){return react_default.a.createElement(Button_Button,{key:color,color:color},color," button")}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),outline=addSourceDecorator((function(){return colors.map((function(color){return react_default.a.createElement(Button_Button,{key:color,color:color,outline:!0},color," button")}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Button_stories_ref=react_default.a.createElement(Button_Button,{block:!0},"Hello World"),block=addSourceDecorator((function(){return Button_stories_ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Button_stories_ref2=react_default.a.createElement(Button_Button,{disabled:!0},"Hello World"),disabled=addSourceDecorator((function(){return Button_stories_ref2}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Button_stories_ref3=react_default.a.createElement(Button_Button,{loading:!0},"Hello World"),loading=addSourceDecorator((function(){return Button_stories_ref3}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},1281:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"base",(function(){return base})),__webpack_require__.d(__webpack_exports__,"size",(function(){return Heading_stories_size}));__webpack_require__(10);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(34),styled_base_browser_esm=(__webpack_require__(1),__webpack_require__(8),__webpack_require__(4),__webpack_require__(65)),prop_types=__webpack_require__(14),prop_types_default=__webpack_require__.n(prop_types),core_browser_esm=__webpack_require__(33);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var StyledHeading=Object(styled_base_browser_esm.a)("h1",{target:"eevtt050",label:"StyledHeading"})((function(props){var typo=props.theme.typography.heading[props.size];return Object(core_browser_esm.css)("font-family:",props.theme.fontFamily.default,";font-size:",typo.fontSize,";line-height:",typo.lineHeight,";margin:",props.noMargin?"0":"0 0 24px",";;label:StyledHeading;")}),"");function Heading(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,["children"]);return react_default.a.createElement(StyledHeading,props,children)}Heading.displayName="Heading",Heading.propTypes={size:prop_types_default.a.oneOf(["extraSmall","small","medium","large","extraLarge"]).isRequired,as:prop_types_default.a.oneOf(["h1","h2","h3","h4","h5","h6"]).isRequired,noMargin:prop_types_default.a.bool,children:prop_types_default.a.node.isRequired},Heading.defaultProps={as:"h1",size:"medium"},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{as:{defaultValue:{value:'"h1"',computed:!1},type:{name:"enum",value:[{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1}]},required:!1,description:""},size:{defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"extraSmall"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"extraLarge"',computed:!1}]},required:!1,description:""},noMargin:{type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!0,description:""}}};var Heading_Heading=Heading;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Heading/Heading.js"]={name:"Heading",docgenInfo:Heading.__docgenInfo,path:"src/components/Heading/Heading.js"});__webpack_require__(116).withSource;var addSourceDecorator=__webpack_require__(116).addSource,__STORY__='import React from "react"\nimport { boolean, select } from "@storybook/addon-knobs"\nimport Heading from "./Heading"\n\nexport default {\n  title: "Typography/Heading",\n  component: Heading,\n}\n\nconst content = "Lorem ipsum dolor sit amet"\n\nconst sizes = ["extraSmall", "small", "medium", "large", "extraLarge"]\nconst elements = ["h1", "h2", "h3", "h4", "h5", "h6"]\n\nexport const base = () => (\n  <Heading\n    size={select("Size", sizes, sizes[0])}\n    as={select("Element", elements, elements[0])}\n    noMargin={boolean("No margin", false)}\n  >\n    {content}\n  </Heading>\n)\n\nexport const size = () =>\n  sizes.map(size => (\n    <Heading key={size} size={size}>\n      {content}\n    </Heading>\n  ))\n',__ADDS_MAP__={"typography-heading--base":{startLoc:{col:20,line:15},endLoc:{col:1,line:23},startBody:{col:20,line:15},endBody:{col:1,line:23}},"typography-heading--size":{startLoc:{col:20,line:25},endLoc:{col:4,line:30},startBody:{col:20,line:25},endBody:{col:4,line:30}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},content=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react"\nimport { boolean, select } from "@storybook/addon-knobs"\nimport Heading from "./Heading"\n\nexport default {\n  title: "Typography/Heading",\n  component: Heading,\n}\n\nconst content = "Lorem ipsum dolor sit amet"\n\nconst sizes = ["extraSmall", "small", "medium", "large", "extraLarge"]\nconst elements = ["h1", "h2", "h3", "h4", "h5", "h6"]\n\nexport const base = () => (\n  <Heading\n    size={select("Size", sizes, sizes[0])}\n    as={select("Element", elements, elements[0])}\n    noMargin={boolean("No margin", false)}\n  >\n    {content}\n  </Heading>\n)\n\nexport const size = () =>\n  sizes.map(size => (\n    <Heading key={size} size={size}>\n      {content}\n    </Heading>\n  ))\n',locationsMap:{"typography-heading--base":{startLoc:{col:20,line:15},endLoc:{col:1,line:23},startBody:{col:20,line:15},endBody:{col:1,line:23}},"typography-heading--size":{startLoc:{col:20,line:25},endLoc:{col:4,line:30},startBody:{col:20,line:25},endBody:{col:4,line:30}}}}},title:"Typography/Heading",component:Heading_Heading},"Lorem ipsum dolor sit amet"),sizes=["extraSmall","small","medium","large","extraLarge"],Heading_stories_elements=["h1","h2","h3","h4","h5","h6"],base=addSourceDecorator((function(){return react_default.a.createElement(Heading_Heading,{size:Object(dist.select)("Size",sizes,sizes[0]),as:Object(dist.select)("Element",Heading_stories_elements,Heading_stories_elements[0]),noMargin:Object(dist.boolean)("No margin",!1)},content)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Heading.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/home/runner/work/ui/ui/src/components/Heading",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Heading_stories_size=addSourceDecorator((function(){return sizes.map((function(size){return react_default.a.createElement(Heading_Heading,{key:size,size:size},content)}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Heading.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/home/runner/work/ui/ui/src/components/Heading",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},1282:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"base",(function(){return base})),__webpack_require__.d(__webpack_exports__,"size",(function(){return Text_stories_size})),__webpack_require__.d(__webpack_exports__,"bold",(function(){return bold})),__webpack_require__.d(__webpack_exports__,"italic",(function(){return italic})),__webpack_require__.d(__webpack_exports__,"strike",(function(){return strike})),__webpack_require__.d(__webpack_exports__,"underline",(function(){return underline}));__webpack_require__(10);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(34),styled_base_browser_esm=(__webpack_require__(1),__webpack_require__(8),__webpack_require__(4),__webpack_require__(64),__webpack_require__(1276),__webpack_require__(65)),prop_types=__webpack_require__(14),prop_types_default=__webpack_require__.n(prop_types),core_browser_esm=__webpack_require__(33);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _ref={name:"nuih8k-StyledText",styles:"font-style:italic;label:StyledText;"},_ref2={name:"gumhxc-StyledText",styles:"text-decoration:line-through;label:StyledText;"},_ref3={name:"1jz9ukm-StyledText",styles:"text-decoration:underline;label:StyledText;"},StyledText=Object(styled_base_browser_esm.a)("p",{target:"eb43v2f0",label:"StyledText"})((function(props){var typo=props.theme.typography.text[props.size];return Object(core_browser_esm.css)("font-family:",props.theme.fontFamily.default,";font-size:",typo.fontSize,";line-height:",typo.lineHeight,";font-weight:",props.bold?props.theme.fontWeight.bold:props.theme.fontWeight.regular,";",props.italic&&_ref," ",props.strike&&_ref2," ",props.underline&&_ref3,";label:StyledText;")}),"");function Text(_ref4){var children=_ref4.children,props=_objectWithoutProperties(_ref4,["children"]);return react_default.a.createElement(StyledText,props,children)}Text.displayName="Text",Text.propTypes={size:prop_types_default.a.oneOf(["small","medium","large"]).isRequired,italic:prop_types_default.a.bool,bold:prop_types_default.a.bool,strike:prop_types_default.a.bool,underline:prop_types_default.a.bool,children:prop_types_default.a.node.isRequired},Text.defaultProps={size:"medium"},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1,description:""},italic:{type:{name:"bool"},required:!1,description:""},bold:{type:{name:"bool"},required:!1,description:""},strike:{type:{name:"bool"},required:!1,description:""},underline:{type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!0,description:""}}};var Text_Text=Text;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"src/components/Text/Text.js"});__webpack_require__(116).withSource;var addSourceDecorator=__webpack_require__(116).addSource,__SOURCE_PREFIX__="/home/runner/work/ui/ui/src/components/Text",__STORY__='import React from "react"\nimport { boolean, select } from "@storybook/addon-knobs"\nimport Text from "./Text"\n\nexport default {\n  title: "Typography/Text",\n  component: Text,\n}\n\nconst content = `\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n  ut aliquip ex ea commodo consequat.\n`\n\nconst sizes = ["small", "medium", "large"]\n\nexport const base = () => (\n  <Text\n    size={select("Size", sizes, sizes[0])}\n    bold={boolean("Bold", false)}\n    italic={boolean("Italic", false)}\n    strike={boolean("Strike", false)}\n    underline={boolean("Underline", false)}\n  >\n    {content}\n  </Text>\n)\n\nexport const size = () =>\n  sizes.map(size => (\n    <Text key={size} size={size}>\n      This is a {size} text. {content}\n    </Text>\n  ))\n\nexport const bold = () =>\n  <Text bold>{content}</Text>\n\nexport const italic = () =>\n  <Text italic>{content}</Text>\n\nexport const strike = () =>\n  <Text strike>{content}</Text>\n\nexport const underline = () =>\n  <Text underline>{content}</Text>\n',__ADDS_MAP__={"typography-text--base":{startLoc:{col:20,line:19},endLoc:{col:1,line:29},startBody:{col:20,line:19},endBody:{col:1,line:29}},"typography-text--size":{startLoc:{col:20,line:31},endLoc:{col:4,line:36},startBody:{col:20,line:31},endBody:{col:4,line:36}},"typography-text--bold":{startLoc:{col:20,line:38},endLoc:{col:29,line:39},startBody:{col:20,line:38},endBody:{col:29,line:39}},"typography-text--italic":{startLoc:{col:22,line:41},endLoc:{col:31,line:42},startBody:{col:22,line:41},endBody:{col:31,line:42}},"typography-text--strike":{startLoc:{col:22,line:44},endLoc:{col:31,line:45},startBody:{col:22,line:44},endBody:{col:31,line:45}},"typography-text--underline":{startLoc:{col:25,line:47},endLoc:{col:34,line:48},startBody:{col:25,line:47},endBody:{col:34,line:48}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},content=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react"\nimport { boolean, select } from "@storybook/addon-knobs"\nimport Text from "./Text"\n\nexport default {\n  title: "Typography/Text",\n  component: Text,\n}\n\nconst content = `\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n  ut aliquip ex ea commodo consequat.\n`\n\nconst sizes = ["small", "medium", "large"]\n\nexport const base = () => (\n  <Text\n    size={select("Size", sizes, sizes[0])}\n    bold={boolean("Bold", false)}\n    italic={boolean("Italic", false)}\n    strike={boolean("Strike", false)}\n    underline={boolean("Underline", false)}\n  >\n    {content}\n  </Text>\n)\n\nexport const size = () =>\n  sizes.map(size => (\n    <Text key={size} size={size}>\n      This is a {size} text. {content}\n    </Text>\n  ))\n\nexport const bold = () =>\n  <Text bold>{content}</Text>\n\nexport const italic = () =>\n  <Text italic>{content}</Text>\n\nexport const strike = () =>\n  <Text strike>{content}</Text>\n\nexport const underline = () =>\n  <Text underline>{content}</Text>\n',locationsMap:{"typography-text--base":{startLoc:{col:20,line:19},endLoc:{col:1,line:29},startBody:{col:20,line:19},endBody:{col:1,line:29}},"typography-text--size":{startLoc:{col:20,line:31},endLoc:{col:4,line:36},startBody:{col:20,line:31},endBody:{col:4,line:36}},"typography-text--bold":{startLoc:{col:20,line:38},endLoc:{col:29,line:39},startBody:{col:20,line:38},endBody:{col:29,line:39}},"typography-text--italic":{startLoc:{col:22,line:41},endLoc:{col:31,line:42},startBody:{col:22,line:41},endBody:{col:31,line:42}},"typography-text--strike":{startLoc:{col:22,line:44},endLoc:{col:31,line:45},startBody:{col:22,line:44},endBody:{col:31,line:45}},"typography-text--underline":{startLoc:{col:25,line:47},endLoc:{col:34,line:48},startBody:{col:25,line:47},endBody:{col:34,line:48}}}}},title:"Typography/Text",component:Text_Text},"\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n  ut aliquip ex ea commodo consequat.\n"),sizes=["small","medium","large"],base=addSourceDecorator((function(){return react_default.a.createElement(Text_Text,{size:Object(dist.select)("Size",sizes,sizes[0]),bold:Object(dist.boolean)("Bold",!1),italic:Object(dist.boolean)("Italic",!1),strike:Object(dist.boolean)("Strike",!1),underline:Object(dist.boolean)("Underline",!1)},content)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Text.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Text_stories_size=addSourceDecorator((function(){return sizes.map((function(size){return react_default.a.createElement(Text_Text,{key:size,size:size},"This is a ",size," text. ",content)}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Text.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Text_stories_ref=react_default.a.createElement(Text_Text,{bold:!0},"\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n  ut aliquip ex ea commodo consequat.\n"),bold=addSourceDecorator((function(){return Text_stories_ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Text.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Text_stories_ref2=react_default.a.createElement(Text_Text,{italic:!0},"\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n  ut aliquip ex ea commodo consequat.\n"),italic=addSourceDecorator((function(){return Text_stories_ref2}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Text.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Text_stories_ref3=react_default.a.createElement(Text_Text,{strike:!0},"\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n  ut aliquip ex ea commodo consequat.\n"),strike=addSourceDecorator((function(){return Text_stories_ref3}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Text.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Text_stories_ref4=react_default.a.createElement(Text_Text,{underline:!0},"\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n  ut aliquip ex ea commodo consequat.\n"),underline=addSourceDecorator((function(){return Text_stories_ref4}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Text.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},443:function(module,exports,__webpack_require__){__webpack_require__(444),__webpack_require__(587),__webpack_require__(588),__webpack_require__(1239),__webpack_require__(1279),__webpack_require__(1262),module.exports=__webpack_require__(1271)},506:function(module,exports){}},[[443,1,2]]]);
//# sourceMappingURL=main.7fac2356090acb87966e.bundle.js.map