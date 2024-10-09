/*! For license information please see editor-style.js.LICENSE.txt */!function(){"use strict";var e={"@elementor/editor-responsive":function(e){e.exports=window.elementorV2.editorResponsive},"@elementor/editor-v1-adapters":function(e){e.exports=window.elementorV2.editorV1Adapters},"@elementor/schema":function(e){e.exports=window.elementorV2.schema},"@elementor/utils":function(e){e.exports=window.elementorV2.utils}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r);var e=n("@elementor/editor-v1-adapters"),t=n("@elementor/schema"),o=n("@elementor/utils"),s=n("@elementor/editor-responsive");function i(){const e=window;return e.elementor?.$preview?.[0]}function a(e,n){const r=t.z.object({$$type:t.z.literal(e),value:n});function o(e){return r.safeParse(e).success}return{isValid:o,create:function(t,n){const r="function"==typeof t?t:()=>t;if(!n)return{$$type:e,value:r()};if(!o(n))throw new Error(`Cannot create prop based on invalid value: ${JSON.stringify(n)}`);return{$$type:e,value:r(n.value)}},schema:r}}var{isValid:u}=a("size",t.z.object({unit:t.z.enum(["px","em","rem","%","vw"]),size:t.z.number()})),{isValid:c}=a("array",t.z.object({array:t.z.array(t.z.any()),delimiter:t.z.string().optional()})),l={size:e=>{if(u(e))return e.value.size+e.value.unit},array:(e,{transform:t})=>{if(c(e))return e.value.array.map((e=>t(e))).filter((e=>void 0!==e)).join(e.value.delimiter??" ")}},d=t.z.object({$$type:t.z.string(),value:t.z.any()}),p="unset";function m(e,t){if(!function(e){return d.safeParse(e).success}(e))return e;const n=t[e.$$type];if(!n)return console.error(`Transformer not found for prop type '${e.$$type}'`),p;const r=n(e,{transform:e=>m(e,t)});return void 0===r?(console.error(`Transformer '${e.$$type}' received unsupported value`),p):m(r,t)}function f({transformers:e,styles:t,breakpoints:n}){const r=[];try{t.forEach((t=>{const o=function(e,t,n){const r=function(e){return`${{class:"."}[e.type]}${e.id}`}(e);if(!r)return"";const o=[];return Object.values(e.variants).forEach((e=>{const s=function(e,t,n,r){const o=function(e,t){return Object.entries(e).reduce(((e,[n,r])=>{const o=n.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase(),s=m(r,t);return e.push(o+":"+s),e}),[]).join(";")}(t.props,n);if(!o)return"";let s=`${`${e}${t.meta.state?`:${t.meta.state}`:""}`}{${o}}`;return t.meta.breakpoint&&(s=function(e,t,n){const r=function(e){return e.type?`${e.type}:${e.width}px`:null}(e[t]);return r?`@media(${r}){${n}}`:n}(r,t.meta.breakpoint,s)),s}(r,e,t,n);s&&o.push(s)})),o.join("")}(t,e,n);r.push(`<style data-style-id="${t.id}">${o}</style>`)}))}catch(e){console.error(`Cannot render style': ${(0,o.ensureError)(e).message}`)}return r.join("")}(0,e.__privateListenTo)((0,e.v1ReadyEvent)(),(()=>{const t=function(){const e=i(),t=document.createElement("div");t.style.display="none";const n=()=>{e?.contentDocument?.body&&e?.contentDocument?.body.prepend(t)};return n(),e?.addEventListener("load",(()=>{n()})),t}(),n=()=>{const e=function(){const e=[],t=n=>{n&&n.forEach((n=>{e.push(n),n.elements&&t(n.elements)}))},n=window;return t(n.elementor?.config?.document?.elements),e}().reduce(((e,t)=>t.styles?{...e,...t.styles}:e),{}),n=(0,s.getBreakpoints)();t.innerHTML=f({transformers:l,styles:Object.values(e),breakpoints:n.reduce(((e,t)=>(e[t.id]=t,e)),{})})},r=i();r?.contains(t)||r?.prepend(t),n(),(0,e.__privateListenTo)([(0,e.commandEndEvent)("editor/documents/switch"),(0,e.commandEndEvent)("document/atomic-widgets/styles")],n)}))}(),(window.elementorV2=window.elementorV2||{}).editorStyle=r}();