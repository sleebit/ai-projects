"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{965:function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}},29040:function(e,t,n){n.d(t,{Dx:function(){return Y},VY:function(){return X},aV:function(){return U},dk:function(){return j},fC:function(){return B},h_:function(){return K},x8:function(){return q}});var o=n(40431),r=n(86006),l=n(1928),a=n(81084),u=n(38899),i=n(70757),c=n(85740),f=n(36841),s=n(63961),d=n(187),p=n(51868),g=n(76899),m=n(76808),v=n(34182),D=n(472),E=n(1095);let _="Dialog",[y,R]=(0,u.b)(_),[b,h]=y(_),C="DialogPortal",[w,M]=y(C,{forceMount:void 0}),O="DialogOverlay",F=(0,r.forwardRef)((e,t)=>{let n=M(O,e.__scopeDialog),{forceMount:l=n.forceMount,...a}=e,u=h(O,e.__scopeDialog);return u.modal?(0,r.createElement)(p.z,{present:l||u.open},(0,r.createElement)(Z,(0,o.Z)({},a,{ref:t}))):null}),Z=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=h(O,n);return(0,r.createElement)(v.Z,{as:E.g7,allowPinchZoom:!0,shards:[a.contentRef]},(0,r.createElement)(g.WV.div,(0,o.Z)({"data-state":N(a.open)},l,{ref:t,style:{pointerEvents:"auto",...l.style}})))}),I="DialogContent",k=(0,r.forwardRef)((e,t)=>{let n=M(I,e.__scopeDialog),{forceMount:l=n.forceMount,...a}=e,u=h(I,e.__scopeDialog);return(0,r.createElement)(p.z,{present:l||u.open},u.modal?(0,r.createElement)(P,(0,o.Z)({},a,{ref:t})):(0,r.createElement)(A,(0,o.Z)({},a,{ref:t})))}),P=(0,r.forwardRef)((e,t)=>{let n=h(I,e.__scopeDialog),u=(0,r.useRef)(null),i=(0,a.e)(t,n.contentRef,u);return(0,r.useEffect)(()=>{let e=u.current;if(e)return(0,D.Ry)(e)},[]),(0,r.createElement)(S,(0,o.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,o=2===t.button||n;o&&e.preventDefault()}),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault())}))}),A=(0,r.forwardRef)((e,t)=>{let n=h(I,e.__scopeDialog),l=(0,r.useRef)(!1),a=(0,r.useRef)(!1);return(0,r.createElement)(S,(0,o.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,r;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(l.current||null===(r=n.triggerRef.current)||void 0===r||r.focus(),t.preventDefault()),l.current=!1,a.current=!1},onInteractOutside:t=>{var o,r;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(l.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let u=t.target,i=null===(r=n.triggerRef.current)||void 0===r?void 0:r.contains(u);i&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}}))}),S=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:u,onCloseAutoFocus:i,...c}=e,d=h(I,n),p=(0,r.useRef)(null),g=(0,a.e)(t,p);return(0,m.EW)(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(s.M,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:u,onUnmountAutoFocus:i},(0,r.createElement)(f.XB,(0,o.Z)({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":N(d.open)},c,{ref:g,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),V="DialogTitle",W=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=h(V,n);return(0,r.createElement)(g.WV.h2,(0,o.Z)({id:a.titleId},l,{ref:t}))}),z=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=h("DialogDescription",n);return(0,r.createElement)(g.WV.p,(0,o.Z)({id:a.descriptionId},l,{ref:t}))}),T=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,u=h("DialogClose",n);return(0,r.createElement)(g.WV.button,(0,o.Z)({type:"button"},a,{ref:t,onClick:(0,l.M)(e.onClick,()=>u.onOpenChange(!1))}))});function N(e){return e?"open":"closed"}let[x,$]=(0,u.k)("DialogTitleWarning",{contentName:I,titleName:V,docsSlug:"dialog"}),B=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:l,onOpenChange:a,modal:u=!0}=e,f=(0,r.useRef)(null),s=(0,r.useRef)(null),[d=!1,p]=(0,c.T)({prop:o,defaultProp:l,onChange:a});return(0,r.createElement)(b,{scope:t,triggerRef:f,contentRef:s,contentId:(0,i.M)(),titleId:(0,i.M)(),descriptionId:(0,i.M)(),open:d,onOpenChange:p,onOpenToggle:(0,r.useCallback)(()=>p(e=>!e),[p]),modal:u},n)},K=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:l}=e,a=h(C,t);return(0,r.createElement)(w,{scope:t,forceMount:n},r.Children.map(o,e=>(0,r.createElement)(p.z,{present:n||a.open},(0,r.createElement)(d.h,{asChild:!0,container:l},e))))},U=F,X=k,Y=W,j=z,q=T},39008:function(e,t,n){n.d(t,{f:function(){return f}});var o=n(40431),r=n(86006),l=n(76899);let a="horizontal",u=["horizontal","vertical"],i=(0,r.forwardRef)((e,t)=>{let{decorative:n,orientation:u=a,...i}=e,f=c(u)?u:a;return(0,r.createElement)(l.WV.div,(0,o.Z)({"data-orientation":f},n?{role:"none"}:{"aria-orientation":"vertical"===f?f:void 0,role:"separator"},i,{ref:t}))});function c(e){return u.includes(e)}i.propTypes={orientation(e,t,n){let o=e[t],r=String(o);return o&&!c(o)?Error(`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${a}\`.`):null}};let f=i}}]);