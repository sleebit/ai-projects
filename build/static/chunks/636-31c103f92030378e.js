"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{44193:function(e,t,r){r.d(t,{d:function(){return d},z:function(){return c}});var n=r(9268),a=r(86006),i=r(1095),o=r(78917),s=r(43737);let d=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-800",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=(0,a.forwardRef)((e,t)=>{let{className:r,variant:a,size:o,asChild:c=!1,...l}=e,u=c?i.g7:"button";return(0,n.jsx)(u,{className:(0,s.cn)(d({variant:a,size:o,className:r})),ref:t,...l})});c.displayName="Button"},26332:function(e,t,r){r.d(t,{X:function(){return S}});var n=r(9268),a=r(86006),i=r(40431),o=r(81084),s=r(38899),d=r(1928),c=r(85740),l=r(93414),u=r(59952),f=r(51868),m=r(76899);let b="Checkbox",[p,h]=(0,s.b)(b),[x,v]=p(b),k=(0,a.forwardRef)((e,t)=>{let{__scopeCheckbox:r,name:n,checked:s,defaultChecked:l,required:u,disabled:f,value:b="on",onCheckedChange:p,...h}=e,[v,k]=(0,a.useState)(null),z=(0,o.e)(t,e=>k(e)),E=(0,a.useRef)(!1),N=!v||!!v.closest("form"),[S=!1,T]=(0,c.T)({prop:s,defaultProp:l,onChange:p}),I=(0,a.useRef)(S);return(0,a.useEffect)(()=>{let e=null==v?void 0:v.form;if(e){let t=()=>T(I.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[v,T]),(0,a.createElement)(x,{scope:r,state:S,disabled:f},(0,a.createElement)(m.WV.button,(0,i.Z)({type:"button",role:"checkbox","aria-checked":y(S)?"mixed":S,"aria-required":u,"data-state":w(S),"data-disabled":f?"":void 0,disabled:f,value:b},h,{ref:z,onKeyDown:(0,d.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,d.M)(e.onClick,e=>{T(e=>!!y(e)||!e),N&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())})})),N&&(0,a.createElement)(g,{control:v,bubbles:!E.current,name:n,value:b,checked:S,required:u,disabled:f,style:{transform:"translateX(-100%)"}}))}),z=(0,a.forwardRef)((e,t)=>{let{__scopeCheckbox:r,forceMount:n,...o}=e,s=v("CheckboxIndicator",r);return(0,a.createElement)(f.z,{present:n||y(s.state)||!0===s.state},(0,a.createElement)(m.WV.span,(0,i.Z)({"data-state":w(s.state),"data-disabled":s.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),g=e=>{let{control:t,checked:r,bubbles:n=!0,...o}=e,s=(0,a.useRef)(null),d=(0,l.D)(r),c=(0,u.t)(t);return(0,a.useEffect)(()=>{let e=s.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked"),i=a.set;if(d!==r&&i){let t=new Event("click",{bubbles:n});e.indeterminate=y(r),i.call(e,!y(r)&&r),e.dispatchEvent(t)}},[d,r,n]),(0,a.createElement)("input",(0,i.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!y(r)&&r},o,{tabIndex:-1,ref:s,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(e){return"indeterminate"===e}function w(e){return y(e)?"indeterminate":e?"checked":"unchecked"}var E=r(99714),N=r(43737);let S=(0,a.forwardRef)((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(k,{ref:t,className:(0,N.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-zinc-200 border-zinc-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-zinc-50 dark:border-zinc-800 dark:border-zinc-50 dark:focus-visible:ring-zinc-800 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=checked]:text-zinc-900",r),...a,children:(0,n.jsx)(z,{className:(0,N.cn)("flex items-center justify-center text-current"),children:(0,n.jsx)(E.nQG,{className:"h-4 w-4"})})})});S.displayName=k.displayName},64732:function(e,t,r){r.d(t,{l0:function(){return f},NI:function(){return k},pf:function(){return z},Wi:function(){return b},xJ:function(){return x},lX:function(){return v},zG:function(){return g}});var n=r(9268),a=r(86006),i=r(1095),o=r(19700),s=r(43737),d=r(10211),c=r(78917);let l=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=(0,a.forwardRef)((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(d.f,{ref:t,className:(0,s.cn)(l(),r),...a})});u.displayName=d.f.displayName;let f=o.RV,m=(0,a.createContext)({}),b=e=>{let{...t}=e;return(0,n.jsx)(m.Provider,{value:{name:t.name},children:(0,n.jsx)(o.Qr,{...t})})},p=()=>{let e=(0,a.useContext)(m),t=(0,a.useContext)(h),{getFieldState:r,formState:n}=(0,o.Gc)(),i=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:s}=t;return{id:s,name:e.name,formItemId:"".concat(s,"-form-item"),formDescriptionId:"".concat(s,"-form-item-description"),formMessageId:"".concat(s,"-form-item-message"),...i}},h=(0,a.createContext)({}),x=(0,a.forwardRef)((e,t)=>{let{className:r,...i}=e,o=(0,a.useId)();return(0,n.jsx)(h.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:t,className:(0,s.cn)("space-y-2",r),...i})})});x.displayName="FormItem";let v=(0,a.forwardRef)((e,t)=>{let{className:r,...a}=e,{error:i,formItemId:o}=p();return(0,n.jsx)(u,{ref:t,className:(0,s.cn)(i&&"text-red-500 dark:text-red-900",r),htmlFor:o,...a})});v.displayName="FormLabel";let k=(0,a.forwardRef)((e,t)=>{let{...r}=e,{error:a,formItemId:o,formDescriptionId:s,formMessageId:d}=p();return(0,n.jsx)(i.g7,{ref:t,id:o,"aria-describedby":a?"".concat(s," ").concat(d):"".concat(s),"aria-invalid":!!a,...r})});k.displayName="FormControl";let z=(0,a.forwardRef)((e,t)=>{let{className:r,...a}=e,{formDescriptionId:i}=p();return(0,n.jsx)("p",{ref:t,id:i,className:(0,s.cn)("text-[0.8rem] text-zinc-500 dark:text-zinc-400",r),...a})});z.displayName="FormDescription";let g=(0,a.forwardRef)((e,t)=>{let{className:r,children:a,...i}=e,{error:o,formMessageId:d}=p(),c=o?String(null==o?void 0:o.message):a;return c?(0,n.jsx)("p",{ref:t,id:d,className:(0,s.cn)("text-[0.8rem] font-medium text-red-500 dark:text-red-900",r),...i,children:c}):null});g.displayName="FormMessage"},611:function(e,t,r){r.r(t),r.d(t,{Separator:function(){return s}});var n=r(9268),a=r(86006),i=r(39008),o=r(43737);let s=(0,a.forwardRef)((e,t)=>{let{className:r,orientation:a="horizontal",decorative:s=!0,...d}=e;return(0,n.jsx)(i.f,{ref:t,decorative:s,orientation:a,className:(0,o.cn)("shrink-0 bg-zinc-200 dark:bg-zinc-800","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",r),...d})});s.displayName=i.f.displayName},1970:function(e,t,r){r.d(t,{Am:function(){return u},pm:function(){return f}});var n=r(86006);let a=0,i=new Map,o=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),l({type:"REMOVE_TOAST",toastId:e})},3);i.set(e,t)},s=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,10)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],c={toasts:[]};function l(e){c=s(c,e),d.forEach(e=>{e(c)})}function u(e){let{...t}=e,r=(a=(a+1)%Number.MAX_VALUE).toString(),n=()=>l({type:"DISMISS_TOAST",toastId:r});return l({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=(0,n.useState)(c);return(0,n.useEffect)(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},43737:function(e,t,r){r.d(t,{cn:function(){return o},x0:function(){return s}});var n=r(89791),a=r(35842),i=r(20293);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m)((0,n.W)(t))}let s=(0,a.kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7)}}]);