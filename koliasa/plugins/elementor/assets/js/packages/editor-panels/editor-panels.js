/*! For license information please see editor-panels.js.LICENSE.txt */!function(){"use strict";var e={react:function(e){e.exports=window.React},"@elementor/editor":function(e){e.exports=window.elementorV2.editor},"@elementor/editor-v1-adapters":function(e){e.exports=window.elementorV2.editorV1Adapters},"@elementor/locations":function(e){e.exports=window.elementorV2.locations},"@elementor/store":function(e){e.exports=window.elementorV2.store},"@elementor/ui":function(e){e.exports=window.elementorV2.ui}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){t.r(o),t.d(o,{Panel:function(){return y},PanelBody:function(){return P},PanelHeader:function(){return b},PanelHeaderTitle:function(){return E},__createPanel:function(){return h},__registerPanel:function(){return w}});var e=t("@elementor/editor"),n=t("@elementor/store"),r=t("react"),i=t("@elementor/locations"),l=t("@elementor/ui"),a=t("@elementor/editor-v1-adapters"),{inject:c,useInjections:u}=(0,i.createLocation)(),s=e=>e.panels.openId,p=(0,n.__createSlice)({name:"panels",initialState:{openId:null},reducers:{open(e,n){e.openId=n.payload},close(e,n){n.payload&&e.openId!==n.payload||(e.openId=null)}}}),d="panel/v2";function m(){return document.querySelector("#elementor-panel-inner")}function f(){const e=["#elementor-panel-header-wrapper","#elementor-panel-content-wrapper","#elementor-panel-state-loading","#elementor-panel-footer"].join(", ");return document.querySelectorAll(e)}function _({on:e,when:t,callback:o}){let r;(0,n.__subscribe)((()=>{const i=e((0,n.__getState)());t({prev:r,current:i})&&o({prev:r,current:i}),r=i}))}function v(e){const n=(0,r.useRef)(m);return n.current?r.createElement(l.Portal,{container:n.current,...e}):null}function h({id:e,component:t}){const o=function(e){return()=>{const t=(0,n.__useSelector)(s),o=(0,a.__privateUseRouteStatus)(d,{blockOnKitRoutes:!0,blockOnPreviewMode:!0});return{isOpen:t===e&&o.isActive,isBlocked:o.isBlocked}}}(e),r=function(e,t){return()=>{const o=(0,n.__useDispatch)(),{isBlocked:r}=t();return{open:async()=>{r||o(p.actions.open(e))},close:async()=>{r||o(p.actions.close(e))}}}}(e,o);return{panel:{id:e,component:t},usePanelStatus:o,usePanelActions:r}}function w({id:e,component:n}){c({id:e,component:n})}function y({children:e,sx:n,...t}){return r.createElement(l.Drawer,{open:!0,variant:"persistent",anchor:"left",PaperProps:{sx:{position:"relative",width:"100%",bgcolor:"background.default",border:"none"}},sx:{height:"100%",...n},...t},e)}var g=(0,l.styled)(l.Box)((({theme:e})=>({height:e?.spacing(6)||"48px",display:"flex",alignItems:"center",justifyContent:"center"})));function b({children:e,...n}){return r.createElement(r.Fragment,null,r.createElement(g,{component:"header",...n},e),r.createElement(l.Divider,null))}var x=(0,l.styled)(l.Typography)((({theme:e,variant:n="body1"})=>"inherit"===n?{}:{"&.MuiTypography-root":{...e.typography[n]}}));function E({children:e,...n}){return r.createElement(x,{component:"h2",variant:"subtitle1",...n},e)}function P({children:e,sx:n,...t}){return r.createElement(l.Box,{component:"main",sx:{overflowY:"auto",height:"100%",...n},...t},e)}(0,a.__privateListenTo)((0,a.windowEvent)("elementor/panel/init"),(()=>(0,a.__privateRegisterRoute)(d))),(0,a.__privateListenTo)((0,a.routeOpenEvent)(d),(()=>{f().forEach((e=>{e.setAttribute("hidden","hidden"),e.setAttribute("aria-hidden","true")}))})),(0,a.__privateListenTo)((0,a.routeCloseEvent)(d),(()=>s((0,n.__getState)())&&(0,n.__dispatch)(p.actions.close()))),(0,a.__privateListenTo)((0,a.routeCloseEvent)(d),(()=>{f().forEach((e=>{e.removeAttribute("hidden"),e.removeAttribute("aria-hidden")}))})),(0,a.__privateListenTo)((0,a.windowEvent)("elementor/panel/init"),(()=>_({on:e=>s(e),when:({prev:e,current:n})=>!(e||!n),callback:()=>(0,a.__privateOpenRoute)(d)}))),(0,a.__privateListenTo)((0,a.windowEvent)("elementor/panel/init"),(()=>_({on:e=>s(e),when:({prev:e,current:n})=>!(n||!e),callback:()=>(0,a.__privateIsRouteActive)(d)&&(0,a.__privateOpenRoute)(function(){const e=window?.elementor?.documents?.getCurrent?.()?.config?.panel?.default_route;return e||"panel/elements/categories"}())}))),(0,n.__registerSlice)(p),(0,e.injectIntoTop)({id:"panels",component:function(){const e=function(){const e=u(),t=(0,n.__useSelector)(s);return(0,r.useMemo)((()=>e.find((e=>t===e.id))),[e,t])}(),t=e?.component??null;return t?r.createElement(v,null,r.createElement(t,null)):null}})}(),(window.elementorV2=window.elementorV2||{}).editorPanels=o}();