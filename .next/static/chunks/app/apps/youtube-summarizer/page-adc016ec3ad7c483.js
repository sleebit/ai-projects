(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{8534:function(e,t,r){Promise.resolve().then(r.bind(r,7970))},7970:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var a=r(9268),n=r(1970),s=r(6006),i=r(7830),d=r(9700),l=r(2391),o=r(4214),c=r(1816),u=r(309),m=r(9458),f=r(7675),x=r(1625),p=r.n(x),h=r(4193),y=r(9714),b=r(2275),g=r(3737);let w=b.fC,v=b.ZA,z=b.B4,j=s.forwardRef((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsxs)(b.xz,{ref:t,className:(0,g.cn)("flex h-9 w-full items-center justify-between rounded-md border border-zinc-200 border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-800",r),...s,children:[n,(0,a.jsx)(b.JO,{asChild:!0,children:(0,a.jsx)(y.jnn,{className:"h-4 w-4 opacity-50"})})]})});j.displayName=b.xz.displayName;let N=s.forwardRef((e,t)=>{let{className:r,children:n,position:s="popper",...i}=e;return(0,a.jsx)(b.h_,{children:(0,a.jsx)(b.VY,{ref:t,className:(0,g.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:s,...i,children:(0,a.jsx)(b.l_,{className:(0,g.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n})})})});N.displayName=b.VY.displayName;let k=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(b.__,{ref:t,className:(0,g.cn)("px-2 py-1.5 text-sm font-semibold",r),...n})});k.displayName=b.__.displayName;let S=s.forwardRef((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsxs)(b.ck,{ref:t,className:(0,g.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",r),...s,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(b.wU,{children:(0,a.jsx)(y.nQG,{className:"h-4 w-4"})})}),(0,a.jsx)(b.eT,{children:n})]})});S.displayName=b.ck.displayName;let T=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(b.Z0,{ref:t,className:(0,g.cn)("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",r),...n})});T.displayName=b.Z0.displayName;var _=r(7043);let I=_.fC,A=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(_.ck,{ref:t,className:(0,g.cn)("border-b",r),...n})});A.displayName="AccordionItem";let R=s.forwardRef((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsx)(_.h4,{className:"flex",children:(0,a.jsxs)(_.xz,{ref:t,className:(0,g.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",r),...s,children:[n,(0,a.jsx)(y.v4q,{className:"h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 dark:text-zinc-400"})]})})});R.displayName=_.xz.displayName;let E=s.forwardRef((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsx)(_.VY,{ref:t,className:(0,g.cn)("overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",r),...s,children:(0,a.jsx)("div",{className:"pb-4 pt-0",children:n})})});E.displayName=_.VY.displayName;var O=r(4732),D=r(5375),C=r(2040);let F=l.Ry({youtubeLink:l.Z_().min(2,{message:"Youtube link is required"}),summaryType:l.Z_({required_error:"Summary type is required"})});function P(){let{toast:e}=(0,n.pm)(),[t,r]=(0,s.useState)(!1),[l,x]=(0,s.useState)([]),y=(0,d.cI)({resolver:(0,i.F)(F)}),b=async e=>{let{transcript:t}=e;if(t.length){let e=new u.Pp({temperature:0,modelName:"gpt-3.5-turbo"}),r=new f.s9({chunkSize:17e3}),a=await r.createDocuments([t]),n=(0,m.O7)(e,{type:"map_reduce"}),s=await n.call({input_documents:a});return s.text}},g=async e=>{let{transcript:t}=e;return console.log("Detailed summary"),"Detailed Summary"};async function T(a){if(console.log(a),C.env.OPENAI_API_KEY=localStorage.getItem("OPENAI_API_KEY"),t)e({title:"Loading",description:"Please wait...",status:"info"});else{r(!0);let{data:t}=await o.Z.post("/api/getYoutubeTranscripts",{url:a.youtubeLink});if(t.status){let e;let r=t.data.transcript.map(e=>e.text).join(" ");"quick"==a.summaryType?e=await b({transcript:r}):"detailed"==a.summaryType&&(e=await g({transcript:r})),x([...l,{...t.data,transcript:r,summary:e,summaryType:"".concat(a.summaryType[0].toUpperCase()+a.summaryType.slice(1)," Summary")}])}else e({title:"Error",description:"Something went wrong"});r(!1)}}return(0,a.jsx)("section",{className:"container grid items-center gap-6 pb-8 pt-6 md:py-10",children:(0,a.jsxs)("div",{className:"flex w-full max-w-full flex-col items-start gap-2",children:[(0,a.jsxs)("h1",{className:"text-3xl font-extrabold leading-tight tracking-wider md:text-4xl mb-12",children:["Youtube Summarizer ",(0,a.jsx)("br",{className:"hidden sm:inline"})]}),(0,a.jsx)("div",{className:"w-full flex flex-col gap-8 items-center justify-center",children:(0,a.jsxs)(O.l0,{...y,children:[(0,a.jsxs)("form",{onSubmit:y.handleSubmit(T),className:"flex flex-col md:flex-row space-y-6 md:space-x-6 md:-space-y-0",children:[(0,a.jsx)(O.Wi,{control:y.control,name:"summaryType",render:e=>{let{field:t}=e;return(0,a.jsx)(O.xJ,{children:(0,a.jsxs)(w,{onValueChange:t.onChange,defaultValue:t.value,children:[(0,a.jsx)(j,{className:"w-[220px]",children:(0,a.jsx)(z,{placeholder:"Select summary type"})}),(0,a.jsx)(N,{children:(0,a.jsxs)(v,{children:[(0,a.jsx)(k,{children:"Summary Type"}),(0,a.jsx)(S,{value:"quick",selected:!0,children:"Quick Summary"}),(0,a.jsx)(S,{value:"detailed",selected:!0,children:"Detailed Summary"})]})})]})})}}),(0,a.jsx)(O.Wi,{control:y.control,name:"youtubeLink",render:e=>{let{field:r}=e;return(0,a.jsxs)(O.xJ,{children:[(0,a.jsxs)("div",{className:"flex w-full max-w-lg items-center space-x-2",children:[(0,a.jsx)(O.NI,{children:(0,a.jsx)(D.I,{placeholder:"Enter your URL",...r})}),(0,a.jsxs)(h.z,{type:"submit",children:[(0,a.jsx)("div",{className:"animate-spin mr-2",viewBox:"0 0 24 24",style:{display:t?"block":"none"},children:(0,a.jsx)(c.Z,{})}),"Summarize"]})]}),(0,a.jsx)(O.zG,{})]})}})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("h2",{className:"text-2xl text-center font-semibold tracking-tight mt-4",children:"Here lies your video summarizations."}),(0,a.jsx)(I,{type:"single",collapsible:!0,className:"w-[80vw] md:w-[35vw]",children:l.map((e,t)=>(0,a.jsxs)(A,{value:"video-".concat(t),children:[(0,a.jsxs)(R,{children:[e.summaryType," - ",e.videoTitle]}),(0,a.jsx)(E,{children:(0,a.jsx)("div",{className:"w-[80vw] md:w-[35vw] text-justify m-auto leading-relaxed",children:(0,a.jsx)(p(),{options:{delay:15},onInit:t=>{console.log(e),t.typeString(e.summary).start()}})})})]},t))})]})]})})]})})}},4193:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return o}});var a=r(9268),n=r(6006),s=r(1095),i=r(8917),d=r(3737);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-800",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:o=!1,...c}=e,u=o?s.g7:"button";return(0,a.jsx)(u,{className:(0,d.cn)(l({variant:n,size:i,className:r})),ref:t,...c})});o.displayName="Button"},4732:function(e,t,r){"use strict";r.d(t,{l0:function(){return m},NI:function(){return g},pf:function(){return w},Wi:function(){return x},xJ:function(){return y},lX:function(){return b},zG:function(){return v}});var a=r(9268),n=r(6006),s=r(1095),i=r(9700),d=r(3737),l=r(6416),o=r(8917);let c=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.f,{ref:t,className:(0,d.cn)(c(),r),...n})});u.displayName=l.f.displayName;let m=i.RV,f=n.createContext({}),x=e=>{let{...t}=e;return(0,a.jsx)(f.Provider,{value:{name:t.name},children:(0,a.jsx)(i.Qr,{...t})})},p=()=>{let e=n.useContext(f),t=n.useContext(h),{getFieldState:r,formState:a}=(0,i.Gc)(),s=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:d}=t;return{id:d,name:e.name,formItemId:"".concat(d,"-form-item"),formDescriptionId:"".concat(d,"-form-item-description"),formMessageId:"".concat(d,"-form-item-message"),...s}},h=n.createContext({}),y=n.forwardRef((e,t)=>{let{className:r,...s}=e,i=n.useId();return(0,a.jsx)(h.Provider,{value:{id:i},children:(0,a.jsx)("div",{ref:t,className:(0,d.cn)("space-y-2",r),...s})})});y.displayName="FormItem";let b=n.forwardRef((e,t)=>{let{className:r,...n}=e,{error:s,formItemId:i}=p();return(0,a.jsx)(u,{ref:t,className:(0,d.cn)(s&&"text-red-500 dark:text-red-900",r),htmlFor:i,...n})});b.displayName="FormLabel";let g=n.forwardRef((e,t)=>{let{...r}=e,{error:n,formItemId:i,formDescriptionId:d,formMessageId:l}=p();return(0,a.jsx)(s.g7,{ref:t,id:i,"aria-describedby":n?"".concat(d," ").concat(l):"".concat(d),"aria-invalid":!!n,...r})});g.displayName="FormControl";let w=n.forwardRef((e,t)=>{let{className:r,...n}=e,{formDescriptionId:s}=p();return(0,a.jsx)("p",{ref:t,id:s,className:(0,d.cn)("text-[0.8rem] text-zinc-500 dark:text-zinc-400",r),...n})});w.displayName="FormDescription";let v=n.forwardRef((e,t)=>{let{className:r,children:n,...s}=e,{error:i,formMessageId:l}=p(),o=i?String(null==i?void 0:i.message):n;return o?(0,a.jsx)("p",{ref:t,id:l,className:(0,d.cn)("text-[0.8rem] font-medium text-red-500 dark:text-red-900",r),...s,children:o}):null});v.displayName="FormMessage"},5375:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var a=r(9268),n=r(6006),s=r(3737);let i=n.forwardRef((e,t)=>{let{className:r,type:n,...i}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-9 w-full rounded-md border border-zinc-200 border-zinc-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-800",r),ref:t,...i})});i.displayName="Input"},1970:function(e,t,r){"use strict";r.d(t,{Am:function(){return u},pm:function(){return m}});var a=r(6006);let n=0,s=new Map,i=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},d=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],o={toasts:[]};function c(e){o=d(o,e),l.forEach(e=>{e(o)})}function u(e){let{...t}=e,r=(n=(n+1)%Number.MAX_VALUE).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function m(){let[e,t]=a.useState(o);return a.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},3737:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(9791),n=r(293);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m)((0,a.W)(t))}}},function(e){e.O(0,[919,16,217,175,214,208,594,253,769,744],function(){return e(e.s=8534)}),_N_E=e.O()}]);