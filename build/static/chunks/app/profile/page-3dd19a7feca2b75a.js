(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{52040:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(66003)},23781:function(e,t,r){Promise.resolve().then(r.bind(r,611)),Promise.resolve().then(r.bind(r,70265))},70265:function(e,t,r){"use strict";r.r(t),r.d(t,{ProfileForm:function(){return p}});var n=r(9268),o=r(67830),i=r(19700),a=r(92391),s=r(44193),c=r(64732),l=r(15375),u=r(1970);r(86006);var d=r(52040);let f=a.z.object({openAIKey:a.z.string({required_error:"Please enter your OpenAI API key."})});function p(){let e=(0,i.cI)({resolver:(0,o.F)(f),defaultValues:{openAIKey:localStorage.getItem("OPENAI_API_KEY")},mode:"onChange"});return(0,n.jsx)(c.l0,{...e,children:(0,n.jsxs)("form",{onSubmit:e.handleSubmit(function(e){d.env.OPENAI_API_KEY=e.openAIKey,localStorage.setItem("OPENAI_API_KEY",e.openAIKey),(0,u.Am)({title:"Profile updated successfully.",description:"We have saved your API Key securely in your browser's localstorage. You check by opening your browser's console, and navigating to Application >> Localstorage tab."})}),className:"space-y-8",children:[(0,n.jsx)(c.Wi,{control:e.control,name:"openAIKey",render:e=>{let{field:t}=e;return(0,n.jsxs)(c.xJ,{children:[(0,n.jsx)(c.lX,{children:"Open AI Key"}),(0,n.jsx)(c.NI,{children:(0,n.jsx)(l.I,{placeholder:"sk-xxxxxxxxxxx",...t})}),(0,n.jsxs)(c.pf,{children:["You can get your OpenAI API Keys here"," ",(0,n.jsx)(s.z,{variant:"link",target:"_blank",href:"https://platform.openai.com/account/api-keys",className:"pl-[1px] text-sm",children:"here."}),(0,n.jsx)("br",{}),"This never leaves your browser, and all the requests to the OpenAI API's will be made from your browser itself. We never take this key to our server's or store anywhere."]}),(0,n.jsx)(c.zG,{})]})}}),(0,n.jsx)(s.z,{type:"submit",children:"Update profile"})]})})}},44193:function(e,t,r){"use strict";r.d(t,{d:function(){return c},z:function(){return l}});var n=r(9268),o=r(86006),i=r(1095),a=r(78917),s=r(43737);let c=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-800",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=(0,o.forwardRef)((e,t)=>{let{className:r,variant:o,size:a,asChild:l=!1,...u}=e,d=l?i.g7:"button";return(0,n.jsx)(d,{className:(0,s.cn)(c({variant:o,size:a,className:r})),ref:t,...u})});l.displayName="Button"},64732:function(e,t,r){"use strict";r.d(t,{l0:function(){return f},NI:function(){return g},pf:function(){return y},Wi:function(){return m},xJ:function(){return x},lX:function(){return b},zG:function(){return z}});var n=r(9268),o=r(86006),i=r(1095),a=r(19700),s=r(43737),c=r(10211),l=r(78917);let u=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=(0,o.forwardRef)((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(c.f,{ref:t,className:(0,s.cn)(u(),r),...o})});d.displayName=c.f.displayName;let f=a.RV,p=(0,o.createContext)({}),m=e=>{let{...t}=e;return(0,n.jsx)(p.Provider,{value:{name:t.name},children:(0,n.jsx)(a.Qr,{...t})})},h=()=>{let e=(0,o.useContext)(p),t=(0,o.useContext)(v),{getFieldState:r,formState:n}=(0,a.Gc)(),i=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:s}=t;return{id:s,name:e.name,formItemId:"".concat(s,"-form-item"),formDescriptionId:"".concat(s,"-form-item-description"),formMessageId:"".concat(s,"-form-item-message"),...i}},v=(0,o.createContext)({}),x=(0,o.forwardRef)((e,t)=>{let{className:r,...i}=e,a=(0,o.useId)();return(0,n.jsx)(v.Provider,{value:{id:a},children:(0,n.jsx)("div",{ref:t,className:(0,s.cn)("space-y-2",r),...i})})});x.displayName="FormItem";let b=(0,o.forwardRef)((e,t)=>{let{className:r,...o}=e,{error:i,formItemId:a}=h();return(0,n.jsx)(d,{ref:t,className:(0,s.cn)(i&&"text-red-500 dark:text-red-900",r),htmlFor:a,...o})});b.displayName="FormLabel";let g=(0,o.forwardRef)((e,t)=>{let{...r}=e,{error:o,formItemId:a,formDescriptionId:s,formMessageId:c}=h();return(0,n.jsx)(i.g7,{ref:t,id:a,"aria-describedby":o?"".concat(s," ").concat(c):"".concat(s),"aria-invalid":!!o,...r})});g.displayName="FormControl";let y=(0,o.forwardRef)((e,t)=>{let{className:r,...o}=e,{formDescriptionId:i}=h();return(0,n.jsx)("p",{ref:t,id:i,className:(0,s.cn)("text-[0.8rem] text-zinc-500 dark:text-zinc-400",r),...o})});y.displayName="FormDescription";let z=(0,o.forwardRef)((e,t)=>{let{className:r,children:o,...i}=e,{error:a,formMessageId:c}=h(),l=a?String(null==a?void 0:a.message):o;return l?(0,n.jsx)("p",{ref:t,id:c,className:(0,s.cn)("text-[0.8rem] font-medium text-red-500 dark:text-red-900",r),...i,children:l}):null});z.displayName="FormMessage"},15375:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var n=r(9268),o=r(86006),i=r(43737);let a=(0,o.forwardRef)((e,t)=>{let{className:r,type:o,...a}=e;return(0,n.jsx)("input",{type:o,className:(0,i.cn)("flex h-9 w-full rounded-md border border-zinc-200 border-zinc-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-800",r),ref:t,...a})});a.displayName="Input"},611:function(e,t,r){"use strict";r.r(t),r.d(t,{Separator:function(){return s}});var n=r(9268),o=r(86006),i=r(39008),a=r(43737);let s=(0,o.forwardRef)((e,t)=>{let{className:r,orientation:o="horizontal",decorative:s=!0,...c}=e;return(0,n.jsx)(i.f,{ref:t,decorative:s,orientation:o,className:(0,a.cn)("shrink-0 bg-zinc-200 dark:bg-zinc-800","horizontal"===o?"h-[1px] w-full":"h-full w-[1px]",r),...c})});s.displayName=i.f.displayName},1970:function(e,t,r){"use strict";r.d(t,{Am:function(){return d},pm:function(){return f}});var n=r(86006);let o=0,i=new Map,a=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),u({type:"REMOVE_TOAST",toastId:e})},3);i.set(e,t)},s=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,10)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?a(r):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},c=[],l={toasts:[]};function u(e){l=s(l,e),c.forEach(e=>{e(l)})}function d(e){let{...t}=e,r=(o=(o+1)%Number.MAX_VALUE).toString(),n=()=>u({type:"DISMISS_TOAST",toastId:r});return u({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=(0,n.useState)(l);return(0,n.useEffect)(()=>(c.push(t),()=>{let e=c.indexOf(t);e>-1&&c.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},43737:function(e,t,r){"use strict";r.d(t,{cn:function(){return a},x0:function(){return s}});var n=r(89791),o=r(35842),i=r(20293);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m)((0,n.W)(t))}let s=(0,o.kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7)},66003:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},76899:function(e,t,r){"use strict";r.d(t,{WV:function(){return s},jH:function(){return c}});var n=r(40431),o=r(86006),i=r(8431),a=r(1095);let s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:i,...s}=e,c=i?a.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(c,(0,n.Z)({},s,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function c(e,t){e&&(0,i.flushSync)(()=>e.dispatchEvent(t))}},39008:function(e,t,r){"use strict";r.d(t,{f:function(){return u}});var n=r(40431),o=r(86006),i=r(76899);let a="horizontal",s=["horizontal","vertical"],c=(0,o.forwardRef)((e,t)=>{let{decorative:r,orientation:s=a,...c}=e,u=l(s)?s:a;return(0,o.createElement)(i.WV.div,(0,n.Z)({"data-orientation":u},r?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},c,{ref:t}))});function l(e){return s.includes(e)}c.propTypes={orientation(e,t,r){let n=e[t],o=String(n);return n&&!l(n)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${a}\`.`):null}};let u=c}},function(e){e.O(0,[140,217,253,769,744],function(){return e(e.s=23781)}),_N_E=e.O()}]);