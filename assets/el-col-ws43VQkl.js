import{b as h,d as u,m as o,a as m,c as _,v as c,u as $,o as g,a0 as N,X as j,H as v,h as x,j as f,k as C,ab as O,_ as E,L as p,ac as k,T as w}from"./index-5JQF-8k5.js";import{r as S}from"./el-row-9voCtCLd.js";const B=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>o({})},sm:{type:u([Number,Object]),default:()=>o({})},md:{type:u([Number,Object]),default:()=>o({})},lg:{type:u([Number,Object]),default:()=>o({})},xl:{type:u([Number,Object]),default:()=>o({})}}),K=m({name:"ElCol"}),L=m({...K,props:B,setup(b){const t=b,{gutter:n}=_(S,{gutter:c(()=>0)}),a=$("col"),d=c(()=>{const e={};return n.value&&(e.paddingLeft=e.paddingRight=`${n.value/2}px`),e}),i=c(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];p(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{p(t[s])?e.push(a.b(`${s}-${t[s]}`)):k(t[s])&&Object.entries(t[s]).forEach(([l,r])=>{e.push(l!=="span"?a.b(`${s}-${l}-${r}`):a.b(`${s}-${r}`))})}),n.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,y)=>(g(),N(O(e.tag),{class:x(f(i)),style:C(f(d))},{default:j(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var P=E(L,[["__file","col.vue"]]);const I=w(P);export{I as E};
