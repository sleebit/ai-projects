(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{5177:function(e,s,n){Promise.resolve().then(n.bind(n,611)),Promise.resolve().then(n.bind(n,2702))},2702:function(e,s,n){"use strict";n.r(s),n.d(s,{NotificationsForm:function(){return q}});var a=n(9268),t=n(5846),i=n.n(t),l=n(7830),r=n(9700),c=n(2391),o=n(4193),d=n(6332),u=n(4732),m=n(7205),h=n(6006),f=n(431),x=n(1928),p=n(1084),b=n(8899),j=n(5740),g=n(3414),N=n(9952),y=n(6899);let k="Switch",[v,w]=(0,b.b)(k),[C,_]=v(k),z=(0,h.forwardRef)((e,s)=>{let{__scopeSwitch:n,name:a,checked:t,defaultChecked:i,required:l,disabled:r,value:c="on",onCheckedChange:o,...d}=e,[u,m]=(0,h.useState)(null),b=(0,p.e)(s,e=>m(e)),g=(0,h.useRef)(!1),N=!u||!!u.closest("form"),[k=!1,v]=(0,j.T)({prop:t,defaultProp:i,onChange:o});return(0,h.createElement)(C,{scope:n,checked:k,disabled:r},(0,h.createElement)(y.WV.button,(0,f.Z)({type:"button",role:"switch","aria-checked":k,"aria-required":l,"data-state":R(k),"data-disabled":r?"":void 0,disabled:r,value:c},d,{ref:b,onClick:(0,x.M)(e.onClick,e=>{v(e=>!e),N&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())})})),N&&(0,h.createElement)(I,{control:u,bubbles:!g.current,name:a,value:c,checked:k,required:l,disabled:r,style:{transform:"translateX(-100%)"}}))}),E=(0,h.forwardRef)((e,s)=>{let{__scopeSwitch:n,...a}=e,t=_("SwitchThumb",n);return(0,h.createElement)(y.WV.span,(0,f.Z)({"data-state":R(t.checked),"data-disabled":t.disabled?"":void 0},a,{ref:s}))}),I=e=>{let{control:s,checked:n,bubbles:a=!0,...t}=e,i=(0,h.useRef)(null),l=(0,g.D)(n),r=(0,N.t)(s);return(0,h.useEffect)(()=>{let e=i.current,s=window.HTMLInputElement.prototype,t=Object.getOwnPropertyDescriptor(s,"checked"),r=t.set;if(l!==n&&r){let s=new Event("click",{bubbles:a});r.call(e,n),e.dispatchEvent(s)}},[l,n,a]),(0,h.createElement)("input",(0,f.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},t,{tabIndex:-1,ref:i,style:{...e.style,...r,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function R(e){return e?"checked":"unchecked"}var S=n(3737);let X=h.forwardRef((e,s)=>{let{className:n,...t}=e;return(0,a.jsx)(z,{className:(0,S.cn)("peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-800 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800",n),...t,ref:s,children:(0,a.jsx)(E,{className:(0,S.cn)("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950")})})});X.displayName=z.displayName;var J=n(1970);let O=c.Ry({type:c.Km(["all","mentions","none"],{required_error:"You need to select a notification type."}),mobile:c.O7().default(!1).optional(),communication_emails:c.O7().default(!1).optional(),social_emails:c.O7().default(!1).optional(),marketing_emails:c.O7().default(!1).optional(),security_emails:c.O7()}),W={communication_emails:!1,marketing_emails:!1,social_emails:!0,security_emails:!0};function q(){let e=(0,r.cI)({resolver:(0,l.F)(O),defaultValues:W});return(0,a.jsx)(u.l0,{...e,children:(0,a.jsxs)("form",{onSubmit:e.handleSubmit(function(e){(0,J.Am)({title:"You submitted the following values:",description:(0,a.jsx)("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:(0,a.jsx)("code",{className:"text-white",children:JSON.stringify(e,null,2)})})})}),className:"space-y-8",children:[(0,a.jsx)(u.Wi,{control:e.control,name:"type",render:e=>{let{field:s}=e;return(0,a.jsxs)(u.xJ,{className:"space-y-3",children:[(0,a.jsx)(u.lX,{children:"Notify me about..."}),(0,a.jsx)(u.NI,{children:(0,a.jsxs)(m.E,{onValueChange:s.onChange,defaultValue:s.value,className:"flex flex-col space-y-1",children:[(0,a.jsxs)(u.xJ,{className:"flex items-center space-x-3 space-y-0",children:[(0,a.jsx)(u.NI,{children:(0,a.jsx)(m.m,{value:"all"})}),(0,a.jsx)(u.lX,{className:"font-normal",children:"All new messages"})]}),(0,a.jsxs)(u.xJ,{className:"flex items-center space-x-3 space-y-0",children:[(0,a.jsx)(u.NI,{children:(0,a.jsx)(m.m,{value:"mentions"})}),(0,a.jsx)(u.lX,{className:"font-normal",children:"Direct messages and mentions"})]}),(0,a.jsxs)(u.xJ,{className:"flex items-center space-x-3 space-y-0",children:[(0,a.jsx)(u.NI,{children:(0,a.jsx)(m.m,{value:"none"})}),(0,a.jsx)(u.lX,{className:"font-normal",children:"Nothing"})]})]})}),(0,a.jsx)(u.zG,{})]})}}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"mb-4 text-lg font-medium",children:"Email Notifications"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)(u.Wi,{control:e.control,name:"communication_emails",render:e=>{let{field:s}=e;return(0,a.jsxs)(u.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[(0,a.jsxs)("div",{className:"space-y-0.5",children:[(0,a.jsx)(u.lX,{className:"text-base",children:"Communication emails"}),(0,a.jsx)(u.pf,{children:"Receive emails about your account activity."})]}),(0,a.jsx)(u.NI,{children:(0,a.jsx)(X,{checked:s.value,onCheckedChange:s.onChange})})]})}}),(0,a.jsx)(u.Wi,{control:e.control,name:"marketing_emails",render:e=>{let{field:s}=e;return(0,a.jsxs)(u.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[(0,a.jsxs)("div",{className:"space-y-0.5",children:[(0,a.jsx)(u.lX,{className:"text-base",children:"Marketing emails"}),(0,a.jsx)(u.pf,{children:"Receive emails about new products, features, and more."})]}),(0,a.jsx)(u.NI,{children:(0,a.jsx)(X,{checked:s.value,onCheckedChange:s.onChange})})]})}}),(0,a.jsx)(u.Wi,{control:e.control,name:"social_emails",render:e=>{let{field:s}=e;return(0,a.jsxs)(u.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[(0,a.jsxs)("div",{className:"space-y-0.5",children:[(0,a.jsx)(u.lX,{className:"text-base",children:"Social emails"}),(0,a.jsx)(u.pf,{children:"Receive emails for friend requests, follows, and more."})]}),(0,a.jsx)(u.NI,{children:(0,a.jsx)(X,{checked:s.value,onCheckedChange:s.onChange})})]})}}),(0,a.jsx)(u.Wi,{control:e.control,name:"security_emails",render:e=>{let{field:s}=e;return(0,a.jsxs)(u.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[(0,a.jsxs)("div",{className:"space-y-0.5",children:[(0,a.jsx)(u.lX,{className:"text-base",children:"Security emails"}),(0,a.jsx)(u.pf,{children:"Receive emails about your account activity and security."})]}),(0,a.jsx)(u.NI,{children:(0,a.jsx)(X,{checked:s.value,onCheckedChange:s.onChange,disabled:!0,"aria-readonly":!0})})]})}})]})]}),(0,a.jsx)(u.Wi,{control:e.control,name:"mobile",render:e=>{let{field:s}=e;return(0,a.jsxs)(u.xJ,{className:"flex flex-row items-start space-x-3 space-y-0",children:[(0,a.jsx)(u.NI,{children:(0,a.jsx)(d.X,{checked:s.value,onCheckedChange:s.onChange})}),(0,a.jsxs)("div",{className:"space-y-1 leading-none",children:[(0,a.jsx)(u.lX,{children:"Use different settings for my mobile devices"}),(0,a.jsxs)(u.pf,{children:["You can manage your mobile notifications in the"," ",(0,a.jsx)(i(),{href:"/examples/forms",children:"mobile settings"})," page."]})]})]})}}),(0,a.jsx)(o.z,{type:"submit",children:"Update notifications"})]})})}},7205:function(e,s,n){"use strict";n.d(s,{E:function(){return c},m:function(){return o}});var a=n(9268),t=n(6006),i=n(9714),l=n(4623),r=n(3737);let c=t.forwardRef((e,s)=>{let{className:n,...t}=e;return(0,a.jsx)(l.fC,{className:(0,r.cn)("grid gap-2",n),...t,ref:s})});c.displayName=l.fC.displayName;let o=t.forwardRef((e,s)=>{let{className:n,children:t,...c}=e;return(0,a.jsx)(l.ck,{ref:s,className:(0,r.cn)("aspect-square h-4 w-4 rounded-full border border-zinc-200 border-zinc-900 text-zinc-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-50 dark:text-zinc-50 dark:focus-visible:ring-zinc-800",n),...c,children:(0,a.jsx)(l.z$,{className:"flex items-center justify-center",children:(0,a.jsx)(i.nQG,{className:"h-3.5 w-3.5 fill-primary"})})})});o.displayName=l.ck.displayName}},function(e){e.O(0,[919,16,152,846,733,636,253,769,744],function(){return e(e.s=5177)}),_N_E=e.O()}]);