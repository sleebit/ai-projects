"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{61750:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(86006),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:u,children:s,...c},p)=>(0,r.createElement)("svg",{ref:p,...o,width:l,height:l,stroke:n,strokeWidth:u?24*Number(a)/Number(l):a,className:`lucide lucide-${i(e)}`,...c},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${e}`,n}},44028:function(e,t,n){n.d(t,{VY:function(){return N},fC:function(){return B},xz:function(){return H},zt:function(){return A}});var r=n(40431),o=n(86006),i=n(1928),l=n(81084),a=n(38899),u=n(36841),s=n(70757),c=n(46998),p=(n(187),n(51868)),d=n(76899),f=n(1095),h=n(85740),g=n(28137);let[v,y]=(0,a.b)("Tooltip",[c.D7]),m=(0,c.D7)(),w="tooltip.open",[b,x]=v("TooltipProvider"),E="Tooltip",[C,T]=v(E),k="TooltipTrigger",_=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...a}=e,u=T(k,n),s=x(k,n),p=m(n),f=(0,o.useRef)(null),h=(0,l.e)(t,f,u.onTriggerChange),g=(0,o.useRef)(!1),v=(0,o.useRef)(!1),y=(0,o.useCallback)(()=>g.current=!1,[]);return(0,o.useEffect)(()=>()=>document.removeEventListener("pointerup",y),[y]),(0,o.createElement)(c.ee,(0,r.Z)({asChild:!0},p),(0,o.createElement)(d.WV.button,(0,r.Z)({"aria-describedby":u.open?u.contentId:void 0,"data-state":u.stateAttribute},a,{ref:h,onPointerMove:(0,i.M)(e.onPointerMove,e=>{"touch"===e.pointerType||v.current||s.isPointerInTransitRef.current||(u.onTriggerEnter(),v.current=!0)}),onPointerLeave:(0,i.M)(e.onPointerLeave,()=>{u.onTriggerLeave(),v.current=!1}),onPointerDown:(0,i.M)(e.onPointerDown,()=>{g.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:(0,i.M)(e.onFocus,()=>{g.current||u.onOpen()}),onBlur:(0,i.M)(e.onBlur,u.onClose),onClick:(0,i.M)(e.onClick,u.onClose)})))}),[D,L]=v("TooltipPortal",{forceMount:void 0}),M="TooltipContent",R=(0,o.forwardRef)((e,t)=>{let n=L(M,e.__scopeTooltip),{forceMount:i=n.forceMount,side:l="top",...a}=e,u=T(M,e.__scopeTooltip);return(0,o.createElement)(p.z,{present:i||u.open},u.disableHoverableContent?(0,o.createElement)(Z,(0,r.Z)({side:l},a,{ref:t})):(0,o.createElement)(P,(0,r.Z)({side:l},a,{ref:t})))}),P=(0,o.forwardRef)((e,t)=>{let n=T(M,e.__scopeTooltip),i=x(M,e.__scopeTooltip),a=(0,o.useRef)(null),u=(0,l.e)(t,a),[s,c]=(0,o.useState)(null),{trigger:p,onClose:d}=n,f=a.current,{onPointerInTransitChange:h}=i,g=(0,o.useCallback)(()=>{c(null),h(!1)},[h]),v=(0,o.useCallback)((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect()),i=function(e,t,n=5){let r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),l=function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect()),a=function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...i,...l]);c(a),h(!0)},[h]);return(0,o.useEffect)(()=>()=>g(),[g]),(0,o.useEffect)(()=>{if(p&&f){let e=e=>v(e,f),t=e=>v(e,p);return p.addEventListener("pointerleave",e),f.addEventListener("pointerleave",t),()=>{p.removeEventListener("pointerleave",e),f.removeEventListener("pointerleave",t)}}},[p,f,v,g]),(0,o.useEffect)(()=>{if(s){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==p?void 0:p.contains(t))||(null==f?void 0:f.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,s=t[i].y,c=a>r!=s>r&&n<(u-l)*(r-a)/(s-a)+l;c&&(o=!o)}return o}(n,s);r?g():o&&(g(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[p,f,s,d,g]),(0,o.createElement)(Z,(0,r.Z)({},e,{ref:u}))}),[O,I]=v(E,{isInside:!1}),Z=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,children:i,"aria-label":l,onEscapeKeyDown:a,onPointerDownOutside:s,...p}=e,d=T(M,n),h=m(n),{onClose:v}=d;return(0,o.useEffect)(()=>(document.addEventListener(w,v),()=>document.removeEventListener(w,v)),[v]),(0,o.useEffect)(()=>{if(d.trigger){let e=e=>{let t=e.target;null!=t&&t.contains(d.trigger)&&v()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,v]),(0,o.createElement)(u.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:v},(0,o.createElement)(c.VY,(0,r.Z)({"data-state":d.stateAttribute},h,p,{ref:t,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,o.createElement)(f.A4,null,i),(0,o.createElement)(O,{scope:n,isInside:!0},(0,o.createElement)(g.f,{id:d.contentId,role:"tooltip"},l||i))))}),A=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:l}=e,[a,u]=(0,o.useState)(!0),s=(0,o.useRef)(!1),c=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,o.createElement)(b,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:(0,o.useCallback)(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:(0,o.useCallback)(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:s,onPointerInTransitChange:(0,o.useCallback)(e=>{s.current=e},[]),disableHoverableContent:i},l)},B=e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:u}=e,p=x(E,e.__scopeTooltip),d=m(t),[f,g]=(0,o.useState)(null),v=(0,s.M)(),y=(0,o.useRef)(0),b=null!=a?a:p.disableHoverableContent,T=null!=u?u:p.delayDuration,k=(0,o.useRef)(!1),[_=!1,D]=(0,h.T)({prop:r,defaultProp:i,onChange:e=>{e?(p.onOpen(),document.dispatchEvent(new CustomEvent(w))):p.onClose(),null==l||l(e)}}),L=(0,o.useMemo)(()=>_?k.current?"delayed-open":"instant-open":"closed",[_]),M=(0,o.useCallback)(()=>{window.clearTimeout(y.current),k.current=!1,D(!0)},[D]),R=(0,o.useCallback)(()=>{window.clearTimeout(y.current),D(!1)},[D]),P=(0,o.useCallback)(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{k.current=!0,D(!0)},T)},[T,D]);return(0,o.useEffect)(()=>()=>window.clearTimeout(y.current),[]),(0,o.createElement)(c.fC,d,(0,o.createElement)(C,{scope:t,contentId:v,open:_,stateAttribute:L,trigger:f,onTriggerChange:g,onTriggerEnter:(0,o.useCallback)(()=>{p.isOpenDelayed?P():M()},[p.isOpenDelayed,P,M]),onTriggerLeave:(0,o.useCallback)(()=>{b?R():window.clearTimeout(y.current)},[R,b]),onOpen:M,onClose:R,disableHoverableContent:b},n))},H=_,N=R},28137:function(e,t,n){n.d(t,{T:function(){return l},f:function(){return a}});var r=n(40431),o=n(86006),i=n(76899);let l=(0,o.forwardRef)((e,t)=>(0,o.createElement)(i.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),a=l}}]);