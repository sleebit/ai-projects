(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{3009:function(t,e,s){Promise.resolve().then(s.bind(s,9151))},9151:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return l}});var n=s(9268),r=s(6006);function o(t){return(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"card",onClick:t.onClick,children:(0,n.jsx)("div",{className:"content",children:(0,n.jsx)("div",{className:"back",children:(0,n.jsx)("div",{className:"back-content",children:t.children})})})})})})}s(538);var i=s(1970),a=s(4214);s(9527);var c=s(6008);function l(){let[t,e]=(0,r.useState)([]),{toast:s}=(0,i.pm)(),l=(0,c.useRouter)();return(0,r.useEffect)(()=>{let t=async()=>{let{data:t}=await a.Z.get("/api/getProjects");e(t)};t()},[]),(0,n.jsxs)("section",{className:"container grid items-center gap-6 pb-8 pt-6 md:py-10",children:[(0,n.jsx)("div",{className:"flex max-w-[980px] flex-col items-start gap-2",children:(0,n.jsxs)("h1",{className:"text-3xl font-extrabold leading-tight tracking-wider  md:text-4xl",children:["APPS ",(0,n.jsx)("br",{className:"hidden sm:inline"})]})}),(0,n.jsx)("div",{className:"box-layout",children:t.map((t,e)=>(0,n.jsxs)(o,{onClick:()=>{t.comingSoon?s({title:"Coming soon",description:"".concat(t.name," will be coming soon.")}):l.push("/apps/".concat(t.slug))},children:[(0,n.jsx)("img",{src:t.image}),(0,n.jsx)("strong",{className:"text-center",children:t.name})]},e))})]})}},1970:function(t,e,s){"use strict";s.d(e,{Am:function(){return d},pm:function(){return f}});var n=s(6006);let r=0,o=new Map,i=t=>{if(o.has(t))return;let e=setTimeout(()=>{o.delete(t),u({type:"REMOVE_TOAST",toastId:t})},1e6);o.set(t,e)},a=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,1)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case"DISMISS_TOAST":{let{toastId:s}=e;return s?i(s):t.toasts.forEach(t=>{i(t.id)}),{...t,toasts:t.toasts.map(t=>t.id===s||void 0===s?{...t,open:!1}:t)}}case"REMOVE_TOAST":if(void 0===e.toastId)return{...t,toasts:[]};return{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)}}},c=[],l={toasts:[]};function u(t){l=a(l,t),c.forEach(t=>{t(l)})}function d(t){let{...e}=t,s=(r=(r+1)%Number.MAX_VALUE).toString(),n=()=>u({type:"DISMISS_TOAST",toastId:s});return u({type:"ADD_TOAST",toast:{...e,id:s,open:!0,onOpenChange:t=>{t||n()}}}),{id:s,dismiss:n,update:t=>u({type:"UPDATE_TOAST",toast:{...t,id:s}})}}function f(){let[t,e]=n.useState(l);return n.useEffect(()=>(c.push(e),()=>{let t=c.indexOf(e);t>-1&&c.splice(t,1)}),[t]),{...t,toast:d,dismiss:t=>u({type:"DISMISS_TOAST",toastId:t})}}},9527:function(){},538:function(){},3177:function(t,e,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(6006),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,s){var n,o={},l=null,u=null;for(n in void 0!==s&&(l=""+s),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,n)&&!c.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===o[n]&&(o[n]=e[n]);return{$$typeof:r,type:t,key:l,ref:u,props:o,_owner:a.current}}e.Fragment=o,e.jsx=l,e.jsxs=l},9268:function(t,e,s){"use strict";t.exports=s(3177)},6008:function(t,e,s){t.exports=s(794)}},function(t){t.O(0,[214,253,769,744],function(){return t(t.s=3009)}),_N_E=t.O()}]);