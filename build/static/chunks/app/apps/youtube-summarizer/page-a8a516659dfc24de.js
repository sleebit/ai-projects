(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{8534:function(e,t,r){Promise.resolve().then(r.bind(r,5646))},5646:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var a=r(9268),n=r(1970),s=r(6006),i=r(6008),o=r(7830),d=r(9700),l=e=>{let[t,r]=(0,s.useState)(2),a=(0,s.useRef)(0),[n,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{a.current=t},[t]),(0,s.useEffect)(()=>{let t;return n&&(t=setInterval(()=>{r(e=>e+1)},e)),()=>clearInterval(t)},[n,e]),{reactiveTimeTaken:t,timeTaken:a,startLoadingInterval:()=>{r(0),i(!0)},stopLoadingInterval:()=>{r(0),i(!1)}}},c=r(4214);async function u(e){let{projectSlug:t}=e,{data:r}=await c.Z.get("/api/getViewersCount/".concat(t));return r.status?r.data.views:"NaN"}var m=r(2391),f=r(1816),p=r(7548),x=r(309),h=r(9458),g=r(7675),b=r(1625),v=r.n(b),y=r(4193),w=r(9714),z=r(2275),j=r(3737);let N=z.fC,k=z.ZA,S=z.B4,T=(0,s.forwardRef)((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsxs)(z.xz,{ref:t,className:(0,j.cn)("flex h-9 w-full items-center justify-between rounded-md border border-zinc-200 border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-800",r),...s,children:[n,(0,a.jsx)(z.JO,{asChild:!0,children:(0,a.jsx)(w.jnn,{className:"h-4 w-4 opacity-50"})})]})});T.displayName=z.xz.displayName;let I=(0,s.forwardRef)((e,t)=>{let{className:r,children:n,position:s="popper",...i}=e;return(0,a.jsx)(z.h_,{children:(0,a.jsx)(z.VY,{ref:t,className:(0,j.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:s,...i,children:(0,a.jsx)(z.l_,{className:(0,j.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n})})})});I.displayName=z.VY.displayName;let _=(0,s.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(z.__,{ref:t,className:(0,j.cn)("px-2 py-1.5 text-sm font-semibold",r),...n})});_.displayName=z.__.displayName;let A=(0,s.forwardRef)((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsxs)(z.ck,{ref:t,className:(0,j.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",r),...s,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(z.wU,{children:(0,a.jsx)(w.nQG,{className:"h-4 w-4"})})}),(0,a.jsx)(z.eT,{children:n})]})});A.displayName=z.ck.displayName;let E=(0,s.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(z.Z0,{ref:t,className:(0,j.cn)("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",r),...n})});E.displayName=z.Z0.displayName;var O=r(7043);let P=O.fC,R=(0,s.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(O.ck,{ref:t,className:(0,j.cn)("border-b",r),...n})});R.displayName="AccordionItem";let V=(0,s.forwardRef)((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsx)(O.h4,{className:"flex",children:(0,a.jsxs)(O.xz,{ref:t,className:(0,j.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",r),...s,children:[n,(0,a.jsx)(w.v4q,{className:"h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 dark:text-zinc-400"})]})})});V.displayName=O.xz.displayName;let C=(0,s.forwardRef)((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsx)(O.VY,{ref:t,className:(0,j.cn)("overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",r),...s,children:(0,a.jsx)("div",{className:"pb-4 pt-0",children:n})})});C.displayName=O.VY.displayName;var M=r(4732),D=r(8917);let Y=(0,D.j)("inline-flex items-center rounded-md border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-800",{variants:{variant:{default:"border-transparent bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/80",secondary:"border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",destructive:"border-transparent bg-red-500 text-zinc-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/80",outline:"text-zinc-950 dark:text-zinc-50"}},defaultVariants:{variant:"default"}});function F(e){let{className:t,variant:r,...n}=e;return(0,a.jsx)("div",{className:(0,j.cn)(Y({variant:r}),t),...n})}var U=r(5375),L=r(4397),Z=r(2040);let G=m.z.object({youtubeLink:m.z.string().min(2,{message:"Youtube link is required"}),summaryType:m.z.string({required_error:"Summary type is required"})});function J(){let e=(0,i.usePathname)(),{toast:t}=(0,n.pm)(),[r,m]=(0,s.useState)([]),[b,w]=(0,s.useState)(0),[z,j]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let t=localStorage.getItem("summaries");t&&((t=JSON.parse(t).summaries).map(e=>{e.transcript=""}),localStorage.setItem("summaries",JSON.stringify({summaries:t})),m(t)),(async()=>{let t=await u({projectSlug:e.split("/")[2]});t&&w(t)})()},[]);let{reactiveTimeTaken:E,timeTaken:O,startLoadingInterval:D,stopLoadingInterval:Y}=l(1250),J=e=>{let t=Math.floor(e/60),r=e%60;return 0==t?"".concat(r,"s"):"".concat(t,"m ").concat(r,"s")},W=(0,d.cI)({resolver:(0,o.F)(G),defaultValues:{summaryType:"detailed"}}),q=e=>{navigator.clipboard.writeText(e),t({title:"SUCCESS",description:"Copied to clipboard"})},B=async e=>{let{transcript:t}=e;if(t.length){let e=new x.Pp({temperature:0,modelName:"gpt-3.5-turbo"}),r=new g.s9({chunkSize:17e3}),a=await r.createDocuments([t]);try{let t=(0,h.O7)(e,{type:"map_reduce"}),r=await t.call({input_documents:a});return{status:!0,data:{summary:r.text},message:""}}catch(e){return console.log(e.response.data.error.message),{status:!1,data:{summary:null},message:e.response.data.error.message||"Something went wrong"}}}},K=async e=>{let{transcript:t,videoTitle:r}=e;if(t.length){let e=new x.Pp({temperature:0,modelName:"gpt-3.5-turbo"}),l=new g.s9({chunkSize:16e3}),c=await l.createDocuments([t]);try{let t=new L.Pf({template:"Write a detailed summary of the following text, dont loose any important context:\n\n\n{text}\n",inputVariables:["text"]}),a=new L.Pf({template:"Title: ".concat(r,"\n        Transcript: {text}\n        \n        Please generate a concise summary of the provided YouTube video transcript in active voice. Focus on the key points, main ideas, and important details. The summary should be informative, well-structured, and capture the essence of the video's content.\n\n        Summary:\n        [Your generated summary will be placed here.]\n\n        Key Points:\n        1. \n        2. \n        3. \n          ...\n\n        Main Ideas:\n        1. \n        2. \n        3. \n          ...\n\n        Important Details:\n        1. \n        2. \n        3.         "),inputVariables:["text"]}),n=(0,h.O7)(e,{type:"map_reduce",combineMapPrompt:t,combinePrompt:a}),s=await n.call({input_documents:c});return{status:!0,data:{summary:s.text},message:""}}catch(e){var a,n,s,i,o,d;return console.log((null===(s=e.response)||void 0===s?void 0:null===(n=s.data)||void 0===n?void 0:null===(a=n.error)||void 0===a?void 0:a.message)||e.message),{status:!1,data:{summary:null},message:(null===(d=e.response)||void 0===d?void 0:null===(o=d.data)||void 0===o?void 0:null===(i=o.error)||void 0===i?void 0:i.message)||"Something went wrong"}}}};async function Q(a){if(gtag("event","YOUTUBE_SUMMARIZATION",{data:a}),Z.env.OPENAI_API_KEY||(Z.env.OPENAI_API_KEY=atob("c2stMWEzNWphcVFtbW9jN2NDazdYVGZUM0JsYmtGSnFjbVpOMXBrQjhGSXkyMGVTRUVl")),!Z.env.OPENAI_API_KEY){t({title:"OpenAI API key not found",description:"Please set your OpenAI API key in the profile section first."});return}if(z)t({title:"Loading",description:"Please wait...",status:"info"});else{j(!0),D();let{data:n}=await c.Z.post("/api/getYoutubeTranscripts",{url:a.youtubeLink,projectSlug:null==e?void 0:e.split("/")[2]});if(n.status){let e;let s=n.data.transcript.map(e=>e.text).join(" ");if("quick"==a.summaryType?e=await B({transcript:s,videoTitle:n.videoTitle}):"detailed"==a.summaryType&&(e=await K({transcript:s,videoTitle:n.videoTitle})),e.status){let t=[{...n.data,...e.data,transcript:s,summary:e.data.summary,summaryType:"".concat(a.summaryType[0].toUpperCase()+a.summaryType.slice(1)," Summary"),timeTaken:J(O.current)},...r],i=[];t.forEach(e=>{i.push({...e,transcript:""})}),localStorage.setItem("summaries",JSON.stringify({summaries:i})),m(t),await u()}else t({title:"Error",description:e.message});j(!1)}else t({title:"Error",description:n.message.includes("Impossible to retrieve Youtube video ID")?"This video does not seem to have transcripts. Try with some other video that have transcripts.":n.message});j(!1)}}return(0,a.jsx)("section",{className:"container grid items-center gap-6 pb-8 pt-6 md:py-10",children:(0,a.jsxs)("div",{className:"flex w-full max-w-full flex-col items-start gap-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-start space-x-8 m-auto mb-12",children:[(0,a.jsx)("h1",{className:"text-3xl uppercase font-extrabold leading-tight tracking-wider md:text-4xl",children:"Youtube Summarizer"}),b?(0,a.jsxs)(F,{variant:"",children:[b," people have used"]}):null]}),(0,a.jsx)("div",{className:"w-full flex flex-col gap-8 items-center justify-center",children:(0,a.jsxs)(M.l0,{...W,children:[(0,a.jsxs)("form",{onSubmit:W.handleSubmit(Q),className:"flex flex-col md:flex-row items-center space-x-4 space-y-4 md:space-y-0",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0",children:[(0,a.jsx)(M.Wi,{control:W.control,name:"summaryType",render:e=>{let{field:t}=e;return(0,a.jsx)(M.xJ,{children:(0,a.jsxs)(N,{onValueChange:t.onChange,defaultValue:t.value,children:[(0,a.jsx)(T,{className:"w-[260px] md:w-[180px]",children:(0,a.jsx)(S,{placeholder:"Select summary type"})}),(0,a.jsx)(I,{children:(0,a.jsxs)(k,{children:[(0,a.jsx)(_,{children:"Summary Type"}),(0,a.jsx)(A,{value:"quick",children:"Quick Summary"}),(0,a.jsx)(A,{value:"detailed",children:"Detailed Summary"})]})})]})})}}),(0,a.jsx)(M.Wi,{control:W.control,name:"youtubeLink",render:e=>{let{field:t}=e;return(0,a.jsxs)(M.xJ,{children:[(0,a.jsx)(M.NI,{children:(0,a.jsx)(U.I,{placeholder:"Enter any Youtube link",...t})}),(0,a.jsx)(M.zG,{})]})}})]}),(0,a.jsxs)(y.z,{type:"submit",children:[(0,a.jsx)("div",{className:"animate-spin",viewBox:"0 0 24 24",style:{display:z?"block":"none"},children:(0,a.jsx)(f.Z,{})}),(0,a.jsx)("span",{className:"whitespace-nowrap ml-2 mr-[4px]",children:z?"Summarizing in":"Summarize"}),(0,a.jsx)("span",{className:"whitespace-nowrap",style:{display:z?"block":"none"},children:J(E)})]})]}),(0,a.jsx)("div",{className:"flex flex-col items-center",children:(0,a.jsx)(P,{type:"single",collapsible:!0,className:"w-[85vw] md:w-[48vw]",children:r.map((e,t)=>(0,a.jsxs)(R,{value:"video-".concat(t),className:"bg-[#2d333f4d] p-4 my-[20px] mx-[auto]",children:[(0,a.jsx)(V,{children:(0,a.jsx)("h2",{className:"text-lg font-semibold tracking-tight text-[#e1e7ee]",dangerouslySetInnerHTML:{__html:"&#8226; ".concat(e.videoTitle[0].toUpperCase()+e.videoTitle.slice(1))}})}),(0,a.jsx)(C,{children:(0,a.jsxs)("div",{className:"w-[74vw] md:w-[45vw] text-base text-left m-auto leading-relaxed text-[#d1d5db] whitespace-pre-wrap",children:[(0,a.jsx)(v(),{options:{delay:15},onInit:t=>{t.typeString(e.summary).start()}}),(0,a.jsxs)("div",{className:"mt-4 flex space-x-4 justify-end",children:[(0,a.jsx)(p.Z,{className:"cursor-pointer",onClick:()=>q(e.summary)}),(0,a.jsxs)("div",{className:"text-end",children:["Time taken: ",e.timeTaken]})]})]})})]},t))})})]})})]})})}},4193:function(e,t,r){"use strict";r.d(t,{d:function(){return d},z:function(){return l}});var a=r(9268),n=r(6006),s=r(1095),i=r(8917),o=r(3737);let d=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-800",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=(0,n.forwardRef)((e,t)=>{let{className:r,variant:n,size:i,asChild:l=!1,...c}=e,u=l?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(d({variant:n,size:i,className:r})),ref:t,...c})});l.displayName="Button"},4732:function(e,t,r){"use strict";r.d(t,{l0:function(){return m},NI:function(){return v},pf:function(){return y},Wi:function(){return p},xJ:function(){return g},lX:function(){return b},zG:function(){return w}});var a=r(9268),n=r(6006),s=r(1095),i=r(9700),o=r(3737),d=r(6416),l=r(8917);let c=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=(0,n.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(d.f,{ref:t,className:(0,o.cn)(c(),r),...n})});u.displayName=d.f.displayName;let m=i.RV,f=(0,n.createContext)({}),p=e=>{let{...t}=e;return(0,a.jsx)(f.Provider,{value:{name:t.name},children:(0,a.jsx)(i.Qr,{...t})})},x=()=>{let e=(0,n.useContext)(f),t=(0,n.useContext)(h),{getFieldState:r,formState:a}=(0,i.Gc)(),s=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...s}},h=(0,n.createContext)({}),g=(0,n.forwardRef)((e,t)=>{let{className:r,...s}=e,i=(0,n.useId)();return(0,a.jsx)(h.Provider,{value:{id:i},children:(0,a.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...s})})});g.displayName="FormItem";let b=(0,n.forwardRef)((e,t)=>{let{className:r,...n}=e,{error:s,formItemId:i}=x();return(0,a.jsx)(u,{ref:t,className:(0,o.cn)(s&&"text-red-500 dark:text-red-900",r),htmlFor:i,...n})});b.displayName="FormLabel";let v=(0,n.forwardRef)((e,t)=>{let{...r}=e,{error:n,formItemId:i,formDescriptionId:o,formMessageId:d}=x();return(0,a.jsx)(s.g7,{ref:t,id:i,"aria-describedby":n?"".concat(o," ").concat(d):"".concat(o),"aria-invalid":!!n,...r})});v.displayName="FormControl";let y=(0,n.forwardRef)((e,t)=>{let{className:r,...n}=e,{formDescriptionId:s}=x();return(0,a.jsx)("p",{ref:t,id:s,className:(0,o.cn)("text-[0.8rem] text-zinc-500 dark:text-zinc-400",r),...n})});y.displayName="FormDescription";let w=(0,n.forwardRef)((e,t)=>{let{className:r,children:n,...s}=e,{error:i,formMessageId:d}=x(),l=i?String(null==i?void 0:i.message):n;return l?(0,a.jsx)("p",{ref:t,id:d,className:(0,o.cn)("text-[0.8rem] font-medium text-red-500 dark:text-red-900",r),...s,children:l}):null});w.displayName="FormMessage"},5375:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var a=r(9268),n=r(6006),s=r(3737);let i=(0,n.forwardRef)((e,t)=>{let{className:r,type:n,...i}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-9 w-full rounded-md border border-zinc-200 border-zinc-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-800",r),ref:t,...i})});i.displayName="Input"},1970:function(e,t,r){"use strict";r.d(t,{Am:function(){return u},pm:function(){return m}});var a=r(6006);let n=0,s=new Map,i=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),c({type:"REMOVE_TOAST",toastId:e})},3);s.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,10)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],l={toasts:[]};function c(e){l=o(l,e),d.forEach(e=>{e(l)})}function u(e){let{...t}=e,r=(n=(n+1)%Number.MAX_VALUE).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function m(){let[e,t]=(0,a.useState)(l);return(0,a.useEffect)(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},3737:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(9791),n=r(293);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m)((0,a.W)(t))}}},function(e){e.O(0,[919,16,217,175,964,208,83,253,769,744],function(){return e(e.s=8534)}),_N_E=e.O()}]);