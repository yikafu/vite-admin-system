import{a$ as me,aO as x,x as le,an as ve,aJ as pe,b0 as j,aB as ye,t as ge,u as J,b1 as be,b2 as Q,w as K,b3 as he,b4 as Ce,b5 as we,b6 as Ee,b7 as U,b as Z,d as _,a as Y,z as R,b8 as V,H as C,at as ke,ak as Te,al as Se,c as ee,b9 as Me,v as $,o as P,g as X,Y as W,h as E,j as o,$ as Be,X as B,ag as Ie,af as q,E as $e,S as G,k as ne,_ as ae,ba as De,bb as Le,U as ie,aw as Ae,bc as Pe,aD as oe,r as I,bd as Fe,be as Oe,n as ze,l as Ne,bf as Re,bg as te,M as Ye,F as se,G as He,bh as We,bi as _e,bj as xe,R as Ue,Q as Ve,bk as Xe,bl as je,T as Ke}from"./index-W6FZ2gKg.js";const ho=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Co=e=>me(e);let H;const qe=e=>{var t;if(!x)return 0;if(H!==void 0)return H;const s=document.createElement("div");s.className=`${e}-scrollbar__wrap`,s.style.visibility="hidden",s.style.width="100px",s.style.position="absolute",s.style.top="-9999px",document.body.appendChild(s);const r=s.offsetWidth;s.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",s.appendChild(l);const c=l.offsetWidth;return(t=s.parentNode)==null||t.removeChild(s),H=r-c,H};function wo(e,t){if(!x)return;if(!t){e.scrollTop=0;return}const s=[];let r=t.offsetParent;for(;r!==null&&e!==r&&e.contains(r);)s.push(r),r=r.offsetParent;const l=t.offsetTop+s.reduce((f,d)=>f+d.offsetTop,0),c=l+t.offsetHeight,i=e.scrollTop,a=i+e.clientHeight;l<i?e.scrollTop=l:c>a&&(e.scrollTop=c-e.clientHeight)}const Ge=(e,t,s)=>{let r={offsetX:0,offsetY:0};const l=a=>{const f=a.clientX,d=a.clientY,{offsetX:m,offsetY:p}=r,y=e.value.getBoundingClientRect(),u=y.left,v=y.top,D=y.width,F=y.height,O=document.documentElement.clientWidth,L=document.documentElement.clientHeight,z=-u+m,N=-v+p,A=O-u-D+m,k=L-v-F+p,w=T=>{const n=Math.min(Math.max(m+T.clientX-f,z),A),h=Math.min(Math.max(p+T.clientY-d,N),k);r={offsetX:n,offsetY:h},e.value&&(e.value.style.transform=`translate(${j(n)}, ${j(h)})`)},b=()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",b)},c=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",l)},i=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",l)};le(()=>{ve(()=>{s.value?c():i()})}),pe(()=>{i()})},Je=(e,t={})=>{ye(e)||ge("[useLockscreen]","You need to pass a ref param to this function");const s=t.ns||J("popup"),r=be(()=>s.bm("parent","hidden"));if(!x||Q(document.body,r.value))return;let l=0,c=!1,i="0";const a=()=>{setTimeout(()=>{Ee(document==null?void 0:document.body,r.value),c&&document&&(document.body.style.width=i)},200)};K(e,f=>{if(!f){a();return}c=!Q(document.body,r.value),c&&(i=document.body.style.width),l=qe(s.namespace.value);const d=document.documentElement.clientHeight<document.body.scrollHeight,m=he(document.body,"overflowY");l>0&&(d||m==="scroll")&&c&&(document.body.style.width=`calc(100% - ${l}px)`),Ce(document.body,r.value)}),we(()=>a())},re=e=>{if(!e)return{onClick:U,onMousedown:U,onMouseup:U};let t=!1,s=!1;return{onClick:i=>{t&&s&&e(i),t=s=!1},onMousedown:i=>{t=i.target===i.currentTarget},onMouseup:i=>{s=i.target===i.currentTarget}}},Ze=Z({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:_([String,Array,Object])},zIndex:{type:_([String,Number])}}),Qe={click:e=>e instanceof MouseEvent},eo="overlay";var oo=Y({name:"ElOverlay",props:Ze,emits:Qe,setup(e,{slots:t,emit:s}){const r=J(eo),l=f=>{s("click",f)},{onClick:c,onMousedown:i,onMouseup:a}=re(e.customMaskEvent?void 0:l);return()=>e.mask?R("div",{class:[r.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:i,onMouseup:a},[C(t,"default")],V.STYLE|V.CLASS|V.PROPS,["onClick","onMouseup","onMousedown"]):ke("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[C(t,"default")])}});const to=oo,ce=Symbol("dialogInjectionKey"),ue=Z({center:Boolean,alignCenter:Boolean,closeIcon:{type:Te},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),so={close:()=>!0},lo=["aria-level"],no=["aria-label"],ao=["id"],io=Y({name:"ElDialogContent"}),ro=Y({...io,props:ue,emits:so,setup(e){const t=e,{t:s}=Se(),{Close:r}=De,{dialogRef:l,headerRef:c,bodyId:i,ns:a,style:f}=ee(ce),{focusTrapRef:d}=ee(Me),m=$(()=>[a.b(),a.is("fullscreen",t.fullscreen),a.is("draggable",t.draggable),a.is("align-center",t.alignCenter),{[a.m("center")]:t.center},t.customClass]),p=Le(d,l),y=$(()=>t.draggable);return Ge(l,c,y),(u,v)=>(P(),X("div",{ref:o(p),class:E(o(m)),style:ne(o(f)),tabindex:"-1"},[W("header",{ref_key:"headerRef",ref:c,class:E(o(a).e("header"))},[C(u.$slots,"header",{},()=>[W("span",{role:"heading","aria-level":u.ariaLevel,class:E(o(a).e("title"))},Be(u.title),11,lo)]),u.showClose?(P(),X("button",{key:0,"aria-label":o(s)("el.dialog.close"),class:E(o(a).e("headerbtn")),type:"button",onClick:v[0]||(v[0]=D=>u.$emit("close"))},[R(o($e),{class:E(o(a).e("close"))},{default:B(()=>[(P(),q(Ie(u.closeIcon||o(r))))]),_:1},8,["class"])],10,no)):G("v-if",!0)],2),W("div",{id:o(i),class:E(o(a).e("body"))},[C(u.$slots,"default")],10,ao),u.$slots.footer?(P(),X("footer",{key:0,class:E(o(a).e("footer"))},[C(u.$slots,"footer")],2)):G("v-if",!0)],6))}});var co=ae(ro,[["__file","dialog-content.vue"]]);const uo=Z({...ue,appendToBody:Boolean,appendTo:{type:_(String),default:"body"},beforeClose:{type:_(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),fo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ie]:e=>Ae(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},mo=(e,t)=>{var s;const l=Ne().emit,{nextZIndex:c}=Pe();let i="";const a=oe(),f=oe(),d=I(!1),m=I(!1),p=I(!1),y=I((s=e.zIndex)!=null?s:c());let u,v;const D=Fe("namespace",Re),F=$(()=>{const g={},M=`--${D.value}-dialog`;return e.fullscreen||(e.top&&(g[`${M}-margin-top`]=e.top),e.width&&(g[`${M}-width`]=j(e.width))),g}),O=$(()=>e.alignCenter?{display:"flex"}:{});function L(){l("opened")}function z(){l("closed"),l(ie,!1),e.destroyOnClose&&(p.value=!1)}function N(){l("close")}function A(){v==null||v(),u==null||u(),e.openDelay&&e.openDelay>0?{stop:u}=te(()=>T(),e.openDelay):T()}function k(){u==null||u(),v==null||v(),e.closeDelay&&e.closeDelay>0?{stop:v}=te(()=>n(),e.closeDelay):n()}function w(){function g(M){M||(m.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(g):k()}function b(){e.closeOnClickModal&&w()}function T(){x&&(d.value=!0)}function n(){d.value=!1}function h(){l("openAutoFocus")}function S(){l("closeAutoFocus")}function de(g){var M;((M=g.detail)==null?void 0:M.focusReason)==="pointer"&&g.preventDefault()}e.lockScroll&&Je(d);function fe(){e.closeOnPressEscape&&w()}return K(()=>e.modelValue,g=>{g?(m.value=!1,A(),p.value=!0,y.value=Oe(e.zIndex)?c():y.value++,ze(()=>{l("open"),t.value&&(t.value.scrollTop=0)})):d.value&&k()}),K(()=>e.fullscreen,g=>{t.value&&(g?(i=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=i)}),le(()=>{e.modelValue&&(d.value=!0,p.value=!0,A())}),{afterEnter:L,afterLeave:z,beforeLeave:N,handleClose:w,onModalClick:b,close:k,doClose:n,onOpenAutoFocus:h,onCloseAutoFocus:S,onCloseRequested:fe,onFocusoutPrevented:de,titleId:a,bodyId:f,closed:m,style:F,overlayDialogStyle:O,rendered:p,visible:d,zIndex:y}},vo=["aria-label","aria-labelledby","aria-describedby"],po=Y({name:"ElDialog",inheritAttrs:!1}),yo=Y({...po,props:uo,emits:fo,setup(e,{expose:t}){const s=e,r=Ye();se({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},$(()=>!!r.title)),se({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},$(()=>!!s.customClass));const l=J("dialog"),c=I(),i=I(),a=I(),{visible:f,titleId:d,bodyId:m,style:p,overlayDialogStyle:y,rendered:u,zIndex:v,afterEnter:D,afterLeave:F,beforeLeave:O,handleClose:L,onModalClick:z,onOpenAutoFocus:N,onCloseAutoFocus:A,onCloseRequested:k,onFocusoutPrevented:w}=mo(s,c);He(ce,{dialogRef:c,headerRef:i,bodyId:m,ns:l,rendered:u,style:p});const b=re(z),T=$(()=>s.draggable&&!s.fullscreen);return t({visible:f,dialogContentRef:a}),(n,h)=>(P(),q(je,{to:n.appendTo,disabled:n.appendTo!=="body"?!1:!n.appendToBody},[R(Xe,{name:"dialog-fade",onAfterEnter:o(D),onAfterLeave:o(F),onBeforeLeave:o(O),persisted:""},{default:B(()=>[Ve(R(o(to),{"custom-mask-event":"",mask:n.modal,"overlay-class":n.modalClass,"z-index":o(v)},{default:B(()=>[W("div",{role:"dialog","aria-modal":"true","aria-label":n.title||void 0,"aria-labelledby":n.title?void 0:o(d),"aria-describedby":o(m),class:E(`${o(l).namespace.value}-overlay-dialog`),style:ne(o(y)),onClick:h[0]||(h[0]=(...S)=>o(b).onClick&&o(b).onClick(...S)),onMousedown:h[1]||(h[1]=(...S)=>o(b).onMousedown&&o(b).onMousedown(...S)),onMouseup:h[2]||(h[2]=(...S)=>o(b).onMouseup&&o(b).onMouseup(...S))},[R(o(We),{loop:"",trapped:o(f),"focus-start-el":"container",onFocusAfterTrapped:o(N),onFocusAfterReleased:o(A),onFocusoutPrevented:o(w),onReleaseRequested:o(k)},{default:B(()=>[o(u)?(P(),q(co,_e({key:0,ref_key:"dialogContentRef",ref:a},n.$attrs,{"custom-class":n.customClass,center:n.center,"align-center":n.alignCenter,"close-icon":n.closeIcon,draggable:o(T),fullscreen:n.fullscreen,"show-close":n.showClose,title:n.title,"aria-level":n.headerAriaLevel,onClose:o(L)}),xe({header:B(()=>[n.$slots.title?C(n.$slots,"title",{key:1}):C(n.$slots,"header",{key:0,close:o(L),titleId:o(d),titleClass:o(l).e("title")})]),default:B(()=>[C(n.$slots,"default")]),_:2},[n.$slots.footer?{name:"footer",fn:B(()=>[C(n.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):G("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,vo)]),_:3},8,["mask","overlay-class","z-index"]),[[Ue,o(f)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var go=ae(yo,[["__file","dialog.vue"]]);const Eo=Ke(go);export{Eo as E,Co as c,ho as e,wo as s};
