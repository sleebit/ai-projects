(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4333:function(e,t,r){Promise.resolve().then(r.t.bind(r,3772,23)),Promise.resolve().then(r.bind(r,9011)),Promise.resolve().then(r.bind(r,459)),Promise.resolve().then(r.bind(r,285)),Promise.resolve().then(r.t.bind(r,7477,23)),Promise.resolve().then(r.bind(r,7946)),Promise.resolve().then(r.bind(r,9342)),Promise.resolve().then(r.t.bind(r,7402,23)),Promise.resolve().then(r.t.bind(r,8750,23)),Promise.resolve().then(r.t.bind(r,1731,23))},7946:function(e,t,r){"use strict";r.r(t),r.d(t,{MainNav:function(){return A}});var s=r(9268),n=r(5846),i=r.n(n),a=r(6394),o=r.n(a),c=r(8709),d=r(6006),l=r(6114),u=r(3737),m={src:"/_next/static/media/sleebit-logo-transparent-white.1e9b0b5a.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXH///////////////////////////////////////8c1D1MAAAAC3RSTlMAhrNS4Gf6ekuSN4u7aR0AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAzSURBVHicRctBDgAgCANBWgqo/3+w6EF7mmRTszeGWbAx0ld6oyBoNqAS4iQKN9FRzn/eFFQAjew4V4QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},f={src:"/_next/static/media/sleebit-logo-transparent-black.307433a9.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC+JJ50AAAAC3RSTlMAhrNS4Gf6ekuSN4u7aR0AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAzSURBVHicRctBDgAgCANBWgqo/3+w6EF7mmRTszeGWbAx0ld6oyBoNqAS4iQKN9FRzn/eFFQAjew4V4QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};function A(e){let{items:t}=e,{setTheme:r,theme:n}=(0,c.F)();r("dark");let[a,A]=(0,d.useState)();return(0,d.useEffect)(()=>{A("dark"==n?m.src:f.src)},[n]),(0,s.jsxs)("div",{className:"flex gap-6 md:gap-10",children:[(0,s.jsxs)(i(),{href:"/",className:"flex items-end space-x-2",children:[(0,s.jsx)(o(),{width:25,height:25,src:a,alt:"logo"}),(0,s.jsx)("span",{className:"inline-block font-bold tracking-widest",children:l.J.name.toUpperCase()})]}),(null==t?void 0:t.length)?(0,s.jsx)("nav",{className:"flex gap-6 max-sm:hidden",children:null==t?void 0:t.map((e,t)=>e.href&&(0,s.jsx)(i(),{href:e.href,target:e.target,className:(0,u.cn)("flex items-center text-sm font-medium text-muted-foreground",e.disabled&&"cursor-not-allowed opacity-80"),children:e.title},t))}):null]})}},9011:function(e,t,r){"use strict";r.r(t),r.d(t,{SiteFooter:function(){return l}});var s=r(9268),n=r(5375),i=r(4193),a=r(1816),o=r(6006),c=r(4214),d=r(1970);function l(){let[e,t]=(0,o.useState)(!1),[r,l]=(0,o.useState)(""),u=async()=>{t(!0);let{data:e}=await c.Z.post("/api/newsletter",{email:r});e.status?(0,d.Am)({title:"Subscription Success",description:"We have recieved your subscription request, thank you ;-)"}):(0,d.Am)({title:"Subscription Error",description:e.message}),t(!1)};return(0,s.jsx)("footer",{className:"flex justify-center px-4 text-gray-800  dark:text-white ",children:(0,s.jsxs)("div",{className:"container px-6 py-6",children:[(0,s.jsx)("h1",{className:"text-lg font-bold text-center lg:text-2xl",children:"Level up your AI game with our newsletter subscription!"}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row",children:[(0,s.jsx)(n.I,{type:"email",onChange:e=>{let{target:t}=e;return l(t.value)},className:"w-auto",placeholder:"Enter you co-ordinates (email)"}),(0,s.jsxs)(i.z,{onClick:u,children:[(0,s.jsx)("div",{className:"animate-spin mr-2",viewBox:"0 0 24 24",style:{display:e?"block":"none"},children:(0,s.jsx)(a.Z,{})}),"Subscribe"]})]})]})})}},459:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeProvider:function(){return i}});var s=r(9268),n=r(8709);function i(e){let{children:t,...r}=e;return(0,s.jsx)(n.f,{...r,children:t})}},9342:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeToggle:function(){return u}});var s=r(9268),n=r(6006),i=r(6008),a=r(4193),o=r(8935),c=r(4047),d=r(7122),l=r(3146);function u(){let e=(0,i.usePathname)(),[t,r]=(0,n.useState)(2);return(0,s.jsx)(a.z,{style:{display:"/"!=e?"none":"block"},onClick:()=>{r(6===t?1:t+1),1===t?(document.querySelector("#mountains").classList.remove("storm"),document.querySelector("#mountains").classList.remove("snow"),document.querySelector("#mountains").classList.remove("clouds")):2===t?document.querySelector("#mountains").classList.add("sunset"):3===t?(document.querySelector("#mountains").classList.remove("sunset"),document.querySelector("#mountains").classList.add("moon")):4===t?document.querySelector("#mountains").classList.add("clouds"):5===t?document.querySelector("#mountains").classList.add("storm"):6===t&&(document.querySelector("#mountains").classList.remove("moon"),document.querySelector("#mountains").classList.remove("storm"),document.querySelector("#mountains").classList.add("snow"))},rel:"noreferrer",variant:"default",className:"relative top-[12px] motion-safe:animate-bounce whitespace-nowrap",size:"lg",children:(0,s.jsx)("span",{className:"motion-safe:animate-bounce",children:"PLAY WITH ME"})})}o.Z,c.Z,d.Z,l.Z,e=>(0,s.jsx)("svg",{viewBox:"0 0 438.549 438.549",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})})},4193:function(e,t,r){"use strict";r.d(t,{d:function(){return c},z:function(){return d}});var s=r(9268),n=r(6006),i=r(1095),a=r(8917),o=r(3737);let c=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-800",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=(0,n.forwardRef)((e,t)=>{let{className:r,variant:n,size:a,asChild:d=!1,...l}=e,u=d?i.g7:"button";return(0,s.jsx)(u,{className:(0,o.cn)(c({variant:n,size:a,className:r})),ref:t,...l})});d.displayName="Button"},5375:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var s=r(9268),n=r(6006),i=r(3737);let a=(0,n.forwardRef)((e,t)=>{let{className:r,type:n,...a}=e;return(0,s.jsx)("input",{type:n,className:(0,i.cn)("flex h-9 w-full rounded-md border border-zinc-200 border-zinc-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-800",r),ref:t,...a})});a.displayName="Input"},285:function(e,t,r){"use strict";r.r(t),r.d(t,{Toaster:function(){return x}});var s=r(9268),n=r(6006),i=r(9714),a=r(705),o=r(8917),c=r(3737);let d=a.zt,l=(0,n.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.l_,{ref:t,className:(0,c.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...n})});l.displayName=a.l_.displayName;let u=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border border-zinc-200 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-zinc-800",{variants:{variant:{default:"border bg-white dark:bg-zinc-950",destructive:"destructive group border-red-500 bg-red-500 text-zinc-50 dark:border-red-900 dark:bg-red-900 dark:text-red-50"}},defaultVariants:{variant:"default"}}),m=(0,n.forwardRef)((e,t)=>{let{className:r,variant:n,...i}=e;return(0,s.jsx)(a.fC,{ref:t,className:(0,c.cn)(u({variant:n}),r),...i})});m.displayName=a.fC.displayName;let f=(0,n.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.aU,{ref:t,className:(0,c.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-zinc-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-zinc-50 group-[.destructive]:focus:ring-red-500 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800 dark:group-[.destructive]:border-zinc-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-red-50 dark:group-[.destructive]:focus:ring-red-900",r),...n})});f.displayName=a.aU.displayName;let A=(0,n.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.x8,{ref:t,className:(0,c.cn)("absolute right-1 top-1 rounded-md p-1 text-zinc-950/50 opacity-0 transition-opacity hover:text-zinc-950 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-zinc-50/50 dark:hover:text-zinc-50",r),"toast-close":"",...n,children:(0,s.jsx)(i.Pxu,{className:"h-4 w-4"})})});A.displayName=a.x8.displayName;let p=(0,n.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.Dx,{ref:t,className:(0,c.cn)("text-sm font-semibold [&+div]:text-xs",r),...n})});p.displayName=a.Dx.displayName;let h=(0,n.forwardRef)((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.dk,{ref:t,className:(0,c.cn)("text-sm opacity-90",r),...n})});h.displayName=a.dk.displayName;var b=r(1970);function x(){let{toasts:e}=(0,b.pm)();return(0,s.jsxs)(d,{children:[e.map(function(e){let{id:t,title:r,description:n,action:i,...a}=e;return(0,s.jsxs)(m,{...a,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[r&&(0,s.jsx)(p,{children:r}),n&&(0,s.jsx)(h,{children:n})]}),i,(0,s.jsx)(A,{})]},t)}),(0,s.jsx)(l,{})]})}},1970:function(e,t,r){"use strict";r.d(t,{Am:function(){return u},pm:function(){return m}});var s=r(6006);let n=0,i=new Map,a=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),l({type:"REMOVE_TOAST",toastId:e})},3);i.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,10)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?a(r):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},c=[],d={toasts:[]};function l(e){d=o(d,e),c.forEach(e=>{e(d)})}function u(e){let{...t}=e,r=(n=(n+1)%Number.MAX_VALUE).toString(),s=()=>l({type:"DISMISS_TOAST",toastId:r});return l({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function m(){let[e,t]=(0,s.useState)(d);return(0,s.useEffect)(()=>(c.push(t),()=>{let e=c.indexOf(t);e>-1&&c.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},6114:function(e,t,r){"use strict";r.d(t,{J:function(){return s}});let s={name:"Sleebit",description:"Sleebit is a collection of AI projects built in public by Sumit Chauhan, an indie developer based in India.",mainNav:[{title:"Home",href:"/"},{title:"Apps",href:"/apps"},{title:"Go to twitter",href:"https://twitter.com/thesleebit",target:"_blank"}],links:{twitter:"https://twitter.com/thesleebit",github:"https://github.com/codeit13",repo:"https://github.com/sleebit/ai-projects"}}},3737:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var s=r(9791),n=r(293);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m)((0,s.W)(t))}},7402:function(){}},function(e){e.O(0,[919,16,846,175,214,410,560,253,769,744],function(){return e(e.s=4333)}),_N_E=e.O()}]);