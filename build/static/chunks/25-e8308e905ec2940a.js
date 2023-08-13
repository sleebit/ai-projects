"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{472:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},c=0,i=function(e){return e&&(e.host||i(e.parentNode))},u=function(e,t,n,u){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=i(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var d=a[n],s=[],f=new Set,v=new Set(l),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else{var t=e.getAttribute(u),a=null!==t&&"false"!==t,c=(r.get(e)||0)+1,i=(d.get(e)||0)+1;r.set(e,c),d.set(e,i),s.push(e),1===c&&a&&o.set(e,!0),1===i&&e.setAttribute(n,"true"),a||e.setAttribute(u,"true")}})};return m(t),f.clear(),c++,function(){s.forEach(function(e){var t=r.get(e)-1,a=d.get(e)-1;r.set(e,t),d.set(e,a),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),u(r,o,n,"aria-hidden")):function(){return null}}},61555:function(e,t,n){n.d(t,{Av:function(){return c},pF:function(){return r},xv:function(){return a},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",a="with-scroll-bars-hidden",c="--removed-body-scroll-bar-size"},90450:function(e,t,n){n.d(t,{jp:function(){return f}});var r=n(86006),o=n(85481),a=n(61555),c={left:0,top:0,right:0,gap:0},i=function(e){return parseInt(e||"",10)||0},u=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[i(n),i(r),i(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return c;var t=u(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},d=(0,o.Ws)(),s=function(e,t,n,r){var o=e.left,c=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(a.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(c,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a.pF," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(a.zi," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(a.pF," .").concat(a.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(a.zi," .").concat(a.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat(a.Av,": ").concat(u,"px;\n  }\n")},f=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,a=void 0===o?"margin":o,c=r.useMemo(function(){return l(a)},[a]);return r.createElement(d,{styles:s(c,!t,a,n?"":"!important")})}},34182:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(78466),o=n(86006),a=n(61555),c=n(83940),i=(0,n(37445)._)(),u=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:u}),l=a[0],d=a[1],s=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,S=void 0===w?"div":w,C=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),T=(0,c.q)([n,t]),k=(0,r.pi)((0,r.pi)({},C),l);return o.createElement(o.Fragment,null,m&&o.createElement(g,{sideCar:i,removeScrollBar:p,shards:h,noIsolation:y,inert:E,setCallbacks:d,allowPinchZoom:!!b,lockRef:n}),s?o.cloneElement(o.Children.only(f),(0,r.pi)((0,r.pi)({},k),{ref:T})):o.createElement(S,(0,r.pi)({},k,{className:v,ref:T}),f))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:a.zi,zeroRight:a.pF};var d=n(11503),s=n(90450),f=n(85481),v=!1;if("undefined"!=typeof window)try{var p=Object.defineProperty({},"passive",{get:function(){return v=!0,!0}});window.addEventListener("test",p,p),window.removeEventListener("test",p,p)}catch(e){v=!1}var m=!!v&&{passive:!1},h=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},g=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),y(e,n)){var r=E(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},y=function(e,t){return"v"===e?h(t,"overflowY"):h(t,"overflowX")},E=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},b=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=c*r,u=n.target,l=t.contains(u),d=!1,s=i>0,f=0,v=0;do{var p=E(e,u),m=p[0],h=p[1]-p[2]-c*m;(m||h)&&y(e,u)&&(f+=h,v+=m),u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return s&&(o&&0===f||!o&&i>f)?d=!0:!s&&(o&&0===v||!o&&-i>v)&&(d=!0),d},w=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},S=function(e){return[e.deltaX,e.deltaY]},C=function(e){return e&&"current"in e?e.current:e},T=0,k=[],A=(0,d.L)(i,function(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),c=o.useState(T++)[0],i=o.useState(function(){return(0,f.Ws)()})[0],u=o.useRef(e);o.useEffect(function(){u.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(C),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var r,o=w(e),c=n.current,i="deltaX"in e?e.deltaX:c[0]-o[0],l="deltaY"in e?e.deltaY:c[1]-o[1],d=e.target,s=Math.abs(i)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=g(s,d);if(!f)return!0;if(f?r=s:(r="v"===s?"h":"v",f=g(s,d)),!f)return!1;if(!a.current&&"changedTouches"in e&&(i||l)&&(a.current=r),!r)return!0;var v=a.current||r;return b(v,t,e,"h"===v?i:l,!0)},[]),d=o.useCallback(function(e){if(k.length&&k[k.length-1]===i){var n="deltaY"in e?S(e):w(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(C).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),v=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),p=o.useCallback(function(e){n.current=w(e),a.current=void 0},[]),h=o.useCallback(function(t){v(t.type,S(t),t.target,l(t,e.lockRef.current))},[]),y=o.useCallback(function(t){v(t.type,w(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return k.push(i),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:y}),document.addEventListener("wheel",d,m),document.addEventListener("touchmove",d,m),document.addEventListener("touchstart",p,m),function(){k=k.filter(function(e){return e!==i}),document.removeEventListener("wheel",d,m),document.removeEventListener("touchmove",d,m),document.removeEventListener("touchstart",p,m)}},[]);var E=e.removeScrollBar,A=e.inert;return o.createElement(o.Fragment,null,A?o.createElement(i,{styles:"\n  .block-interactivity-".concat(c," {pointer-events: none;}\n  .allow-interactivity-").concat(c," {pointer-events: all;}\n")}):null,E?o.createElement(s.jp,{gapMode:"margin"}):null)}),L=o.forwardRef(function(e,t){return o.createElement(l,(0,r.pi)({},e,{ref:t,sideCar:A}))});L.classNames=l.classNames;var N=L},85481:function(e,t,n){n.d(t,{Ws:function(){return i}});var r,o=n(86006),a=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,c;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),c=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},c=function(){var e=a();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},i=function(){var e=c();return function(t){return e(t.styles,t.dynamic),null}}},83940:function(e,t,n){n.d(t,{q:function(){return o}});var r=n(86006);function o(e,t){var n,o,a;return n=t||null,o=function(t){return e.forEach(function(e){return"function"==typeof e?e(t):e&&(e.current=t),e})},(a=(0,r.useState)(function(){return{value:n,callback:o,facade:{get current(){return a.value},set current(value){var e=a.value;e!==value&&(a.value=value,a.callback(value,e))}}}})[0]).callback=o,a.facade}},11503:function(e,t,n){n.d(t,{L:function(){return c}});var r=n(78466),o=n(86006),a=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw Error("Sidecar medium not found");return o.createElement(a,(0,r.pi)({},n))};function c(e,t){return e.useMedium(t),a}a.isSideCarExport=!0},37445:function(e,t,n){n.d(t,{_:function(){return a}});var r=n(78466);function o(e){return e}function a(e){void 0===e&&(e={});var t,n,a,c=(void 0===t&&(t=o),n=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,a);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(a=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){a=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},c=function(){return Promise.resolve().then(o)};c(),n={push:function(e){t.push(e),c()},filter:function(e){return t=t.filter(e),n}}}});return c.options=(0,r.pi)({async:!0,ssr:!1},e),c}},76808:function(e,t,n){n.d(t,{EW:function(){return a}});var r=n(86006);let o=0;function a(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:c()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:c()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function c(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},63961:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(40431),a=n(86006),c=n(81084),i=n(76899),u=n(46868);let l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...y}=e,[E,b]=(0,a.useState)(null),w=(0,u.W)(f),S=(0,u.W)(g),C=(0,a.useRef)(null),T=(0,c.e)(t,e=>b(e)),k=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(k.paused||!E)return;let t=e.target;E.contains(t)?C.current=t:m(C.current,{select:!0})}function t(e){if(k.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(C.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=E&&E.contains(t))&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,k.paused]),(0,a.useEffect)(()=>{if(E){h.add(k);let e=document.activeElement,t=E.contains(e);if(!t){let t=new CustomEvent(l,s);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(d,s);E.addEventListener(d,S),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(d,S),h.remove(k)},0)}}},[E,w,S,k]);let A=(0,a.useCallback)(e=>{if(!n&&!r||k.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=v(e),n=p(t,e),r=p(t.reverse(),e);return[n,r]}(t),c=r&&a;c?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(a,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,k.paused]);return(0,a.createElement)(i.WV.div,(0,o.Z)({tabIndex:-1},y,{ref:T,onKeyDown:A}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},78466:function(e,t,n){n.d(t,{_T:function(){return o},ev:function(){return a},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);