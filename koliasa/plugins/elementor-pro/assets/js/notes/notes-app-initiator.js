(()=>{"use strict";var __webpack_modules__=({"react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
((module)=>{module.exports=React;}),"react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
((module)=>{module.exports=ReactDOM;}),"@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
((module)=>{module.exports=wp.i18n;})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports;}
__webpack_require__.m=__webpack_modules__;(()=>{__webpack_require__.n=(module)=>{var getter=module&&module.__esModule?()=>(module['default']):()=>(module);__webpack_require__.d(getter,{a:getter});return getter;};})();(()=>{__webpack_require__.d=(exports,definition)=>{for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});}}};})();(()=>{__webpack_require__.f={};__webpack_require__.e=(chunkId)=>{return Promise.all(Object.keys(__webpack_require__.f).reduce((promises,key)=>{__webpack_require__.f[key](chunkId,promises);return promises;},[]));};})();(()=>{__webpack_require__.u=(chunkId)=>{return""+chunkId+".js";};})();(()=>{__webpack_require__.g=(function(){if(typeof globalThis==='object')return globalThis;try{return this||new Function('return this')();}catch(e){if(typeof window==='object')return window;}})();})();(()=>{__webpack_require__.o=(obj,prop)=>(Object.prototype.hasOwnProperty.call(obj,prop))})();(()=>{var inProgress={};var dataWebpackPrefix="elementor-pro-notes:";__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url]){inProgress[url].push(done);return;}
var script,needAttach;if(key!==undefined){var scripts=document.getElementsByTagName("script");for(var i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")==dataWebpackPrefix+key){script=s;break;}}}
if(!script){needAttach=true;script=document.createElement('script');script.charset='utf-8';script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc);}
script.setAttribute("data-webpack",dataWebpackPrefix+key);script.src=url;}
inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null;clearTimeout(timeout);var doneFns=inProgress[url];delete inProgress[url];script.parentNode&&script.parentNode.removeChild(script);doneFns&&doneFns.forEach((fn)=>(fn(event)));if(prev)return prev(event);}
var timeout=setTimeout(onScriptComplete.bind(null,undefined,{type:'timeout',target:script}),120000);script.onerror=onScriptComplete.bind(null,script.onerror);script.onload=onScriptComplete.bind(null,script.onload);needAttach&&document.head.appendChild(script);};})();(()=>{__webpack_require__.r=(exports)=>{if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};})();(()=>{var scriptUrl;if(__webpack_require__.g.importScripts)scriptUrl=__webpack_require__.g.location+"";var document=__webpack_require__.g.document;if(!scriptUrl&&document){if(document.currentScript)
scriptUrl=document.currentScript.src;if(!scriptUrl){var scripts=document.getElementsByTagName("script");if(scripts.length){var i=scripts.length-1;while(i>-1&&(!scriptUrl||!/^http(s?):/.test(scriptUrl)))scriptUrl=scripts[i--].src;}}}
if(!scriptUrl)throw new Error("Automatic publicPath is not supported in this browser");scriptUrl=scriptUrl.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/");__webpack_require__.p=scriptUrl;})();(()=>{var installedChunks={"notes-app-initiator":0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:undefined;if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2]);}else{if(true){var promise=new Promise((resolve,reject)=>(installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId);var error=new Error();var loadingEnded=(event)=>{if(__webpack_require__.o(installedChunks,chunkId)){installedChunkData=installedChunks[chunkId];if(installedChunkData!==0)installedChunks[chunkId]=undefined;if(installedChunkData){var errorType=event&&(event.type==='load'?'missing':event.type);var realSrc=event&&event.target&&event.target.src;error.message='Loading chunk '+chunkId+' failed.\n('+errorType+': '+realSrc+')';error.name='ChunkLoadError';error.type=errorType;error.request=realSrc;installedChunkData[1](error);}}};__webpack_require__.l(url,loadingEnded,"chunk-"+chunkId,chunkId);}}}};var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var[chunkIds,moreModules,runtime]=data;var moduleId,chunkId,i=0;if(chunkIds.some((id)=>(installedChunks[id]!==0))){for(moduleId in moreModules){if(__webpack_require__.o(moreModules,moduleId)){__webpack_require__.m[moduleId]=moreModules[moduleId];}}
if(runtime)var result=runtime(__webpack_require__);}
if(parentChunkLoadingFunction)parentChunkLoadingFunction(data);for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]){installedChunks[chunkId][0]();}
installedChunks[chunkId]=0;}}
var chunkLoadingGlobal=self["webpackChunkelementor_pro_notes"]=self["webpackChunkelementor_pro_notes"]||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0));chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal));})();(()=>{__webpack_require__.nc=undefined;})();var __webpack_exports__={};
/*!*******************************************!*\
  !*** ../assets/js/notes-app-initiator.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! react */"react");var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);(()=>{let rootElement=null;async function mount(){rootElement=document.createElement('div');document.body.appendChild(rootElement);const{default:App}=await Promise.all(/*! import() | notes-app */[__webpack_require__.e("vendors-node_modules_radix-ui_react-alert-dialog_dist_index_module_js-node_modules_radix-ui_r-e4587e"),__webpack_require__.e("notes-app")]).then(__webpack_require__.bind(__webpack_require__,/*! ./app/app */"../assets/js/app/app.js"));ReactDOM.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App,null),rootElement);}
function unmount(){if(!rootElement){return;}
ReactDOM.unmountComponentAtNode(rootElement);}
window.addEventListener('message',event=>{if(!event.data?.name?.startsWith('elementor-pro/notes')){return;}
const classNames=['e-route-notes'];switch(event.data.name){case'elementor-pro/notes/open':document.body.classList.add(...classNames);mount();break;case'elementor-pro/notes/close':document.body.classList.remove(...classNames);unmount();break;}});window.top.postMessage({name:'elementor-pro/notes/config',payload:{...elementorNotesConfig}},'*');})();})();