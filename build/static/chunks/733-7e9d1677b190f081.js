"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{79455:function(e,t,r){r.d(t,{B:function(){return l}});var n=r(86006),o=r(38899),a=r(81084),u=r(1095);function l(e){let t=e+"CollectionProvider",[r,l]=(0,o.b)(t),[i,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",s=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,l=c(d,r),i=(0,a.e)(t,l.collectionRef);return n.createElement(u.g7,{ref:i},o)}),f=e+"CollectionItemSlot",p="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:o,...l}=e,i=n.useRef(null),d=(0,a.e)(t,i),s=c(f,r);return n.useEffect(()=>(s.itemMap.set(i,{ref:i,...l}),()=>void s.itemMap.delete(i))),n.createElement(u.g7,{[p]:"",ref:d},o)});return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return n.createElement(i,{scope:t,itemMap:a,collectionRef:o},r)},Slot:s,ItemSlot:v},function(t){let r=c(e+"CollectionConsumer",t),o=n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),n=Array.from(r.itemMap.values()),o=n.sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current));return o},[r.collectionRef,r.itemMap]);return o},l]}},84924:function(e,t,r){r.d(t,{gm:function(){return a}});var n=r(86006);let o=(0,n.createContext)(void 0);function a(e){let t=(0,n.useContext)(o);return e||t||"ltr"}},70757:function(e,t,r){r.d(t,{M:function(){return i}});var n,o=r(86006),a=r(6423);let u=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function i(e){let[t,r]=o.useState(u());return(0,a.b)(()=>{e||r(e=>null!=e?e:String(l++))},[e]),e||(t?`radix-${t}`:"")}},44623:function(e,t,r){r.d(t,{z$:function(){return ee},ck:function(){return Y},fC:function(){return Q}});var n=r(40431),o=r(86006),a=r(1928),u=r(81084),l=r(38899),i=r(76899),c=r(79455),d=r(70757),s=r(46868),f=r(85740),p=r(84924);let v="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[w,E,R]=(0,c.B)(b),[h,g]=(0,l.b)(b,[R]),[k,C]=h(b),y=(0,o.forwardRef)((e,t)=>(0,o.createElement)(w.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(w.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(I,(0,n.Z)({},e,{ref:t}))))),I=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:l,loop:c=!1,dir:d,currentTabStopId:b,defaultCurrentTabStopId:w,onCurrentTabStopIdChange:R,onEntryFocus:h,...g}=e,C=(0,o.useRef)(null),y=(0,u.e)(t,C),I=(0,p.gm)(d),[M=null,S]=(0,f.T)({prop:b,defaultProp:w,onChange:R}),[_,A]=(0,o.useState)(!1),D=(0,s.W)(h),T=E(r),x=(0,o.useRef)(!1),[G,L]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(v,D),()=>e.removeEventListener(v,D)},[D]),(0,o.createElement)(k,{scope:r,orientation:l,dir:I,loop:c,currentTabStopId:M,onItemFocus:(0,o.useCallback)(e=>S(e),[S]),onItemShiftTab:(0,o.useCallback)(()=>A(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>L(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>L(e=>e-1),[])},(0,o.createElement)(i.WV.div,(0,n.Z)({tabIndex:_||0===G?-1:0,"data-orientation":l},g,{ref:y,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{x.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!x.current;if(e.target===e.currentTarget&&t&&!_){let t=new CustomEvent(v,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=T().filter(e=>e.focusable),t=e.find(e=>e.active),r=e.find(e=>e.id===M),n=[t,r,...e].filter(Boolean),o=n.map(e=>e.ref.current);F(o)}}x.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>A(!1))})))}),M=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:u=!0,active:l=!1,tabStopId:c,...s}=e,f=(0,d.M)(),p=c||f,v=C("RovingFocusGroupItem",r),m=v.currentTabStopId===p,b=E(r),{onFocusableItemAdd:R,onFocusableItemRemove:h}=v;return(0,o.useEffect)(()=>{if(u)return R(),()=>h()},[u,R,h]),(0,o.createElement)(w.ItemSlot,{scope:r,id:p,focusable:u,active:l},(0,o.createElement)(i.WV.span,(0,n.Z)({tabIndex:m?0:-1,"data-orientation":v.orientation},s,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{u?v.onItemFocus(p):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>v.onItemFocus(p)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return S[o]}(e,v.orientation,v.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),a=o.map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&a.reverse();let o=a.indexOf(e.currentTarget);a=v.loop?(r=a,n=o+1,r.map((e,t)=>r[(n+t)%r.length])):a.slice(o+1)}setTimeout(()=>F(a))}})})))}),S={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function F(e){let t=document.activeElement;for(let r of e)if(r===t||(r.focus(),document.activeElement!==t))return}var _=r(59952),A=r(93414),D=r(51868);let T="Radio",[x,G]=(0,l.b)(T),[L,Z]=x(T),P=(0,o.forwardRef)((e,t)=>{let{__scopeRadio:r,name:l,checked:c=!1,required:d,disabled:s,value:f="on",onCheck:p,...v}=e,[m,b]=(0,o.useState)(null),w=(0,u.e)(t,e=>b(e)),E=(0,o.useRef)(!1),R=!m||!!m.closest("form");return(0,o.createElement)(L,{scope:r,checked:c,disabled:s},(0,o.createElement)(i.WV.button,(0,n.Z)({type:"button",role:"radio","aria-checked":c,"data-state":W(c),"data-disabled":s?"":void 0,disabled:s,value:f},v,{ref:w,onClick:(0,a.M)(e.onClick,e=>{c||null==p||p(),R&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())})})),R&&(0,o.createElement)(q,{control:m,bubbles:!E.current,name:l,value:f,checked:c,required:d,disabled:s,style:{transform:"translateX(-100%)"}}))}),V=(0,o.forwardRef)((e,t)=>{let{__scopeRadio:r,forceMount:a,...u}=e,l=Z("RadioIndicator",r);return(0,o.createElement)(D.z,{present:a||l.checked},(0,o.createElement)(i.WV.span,(0,n.Z)({"data-state":W(l.checked),"data-disabled":l.disabled?"":void 0},u,{ref:t})))}),q=e=>{let{control:t,checked:r,bubbles:a=!0,...u}=e,l=(0,o.useRef)(null),i=(0,A.D)(r),c=(0,_.t)(t);return(0,o.useEffect)(()=>{let e=l.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked"),o=n.set;if(i!==r&&o){let t=new Event("click",{bubbles:a});o.call(e,r),e.dispatchEvent(t)}},[i,r,a]),(0,o.createElement)("input",(0,n.Z)({type:"radio","aria-hidden":!0,defaultChecked:r},u,{tabIndex:-1,ref:l,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function W(e){return e?"checked":"unchecked"}let z=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],$="RadioGroup",[B,O]=(0,l.b)($,[g,G]),K=g(),U=G(),[H,N]=B($),j=(0,o.forwardRef)((e,t)=>{let{__scopeRadioGroup:r,name:a,defaultValue:u,value:l,required:c=!1,disabled:d=!1,orientation:s,dir:v,loop:m=!0,onValueChange:b,...w}=e,E=K(r),R=(0,p.gm)(v),[h,g]=(0,f.T)({prop:l,defaultProp:u,onChange:b});return(0,o.createElement)(H,{scope:r,name:a,required:c,disabled:d,value:h,onValueChange:g},(0,o.createElement)(y,(0,n.Z)({asChild:!0},E,{orientation:s,dir:R,loop:m}),(0,o.createElement)(i.WV.div,(0,n.Z)({role:"radiogroup","aria-required":c,"aria-orientation":s,"data-disabled":d?"":void 0,dir:R},w,{ref:t}))))}),X=(0,o.forwardRef)((e,t)=>{let{__scopeRadioGroup:r,disabled:l,...i}=e,c=N("RadioGroupItem",r),d=c.disabled||l,s=K(r),f=U(r),p=(0,o.useRef)(null),v=(0,u.e)(t,p),m=c.value===i.value,b=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{z.includes(e.key)&&(b.current=!0)},t=()=>b.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,o.createElement)(M,(0,n.Z)({asChild:!0},s,{focusable:!d,active:m}),(0,o.createElement)(P,(0,n.Z)({disabled:d,required:c.required,checked:m},f,i,{name:c.name,ref:v,onCheck:()=>c.onValueChange(i.value),onKeyDown:(0,a.M)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,a.M)(i.onFocus,()=>{var e;b.current&&(null===(e=p.current)||void 0===e||e.click())})})))}),J=(0,o.forwardRef)((e,t)=>{let{__scopeRadioGroup:r,...a}=e,u=U(r);return(0,o.createElement)(V,(0,n.Z)({},u,a,{ref:t}))}),Q=j,Y=X,ee=J},39008:function(e,t,r){r.d(t,{f:function(){return d}});var n=r(40431),o=r(86006),a=r(76899);let u="horizontal",l=["horizontal","vertical"],i=(0,o.forwardRef)((e,t)=>{let{decorative:r,orientation:l=u,...i}=e,d=c(l)?l:u;return(0,o.createElement)(a.WV.div,(0,n.Z)({"data-orientation":d},r?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},i,{ref:t}))});function c(e){return l.includes(e)}i.propTypes={orientation(e,t,r){let n=e[t],o=String(n);return n&&!c(n)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${u}\`.`):null}};let d=i},93414:function(e,t,r){r.d(t,{D:function(){return o}});var n=r(86006);function o(e){let t=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);