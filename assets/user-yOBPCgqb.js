import{W as N,r as _,O,x as j,w as M,o as V,g as P,z as l,X as t,a1 as R,a4 as W,j as E,Y as b,Z as c,a0 as w,a8 as X,a7 as Y,a5 as Z,a6 as q,I as G,aA as H}from"./index-5JQF-8k5.js";import{E as J}from"./el-overlay-ms5VbyHU.js";import{E as K,a as L,b as Q,c as ee}from"./el-table-column-ymIFYLRF.js";import{E as le}from"./el-row-9voCtCLd.js";const k=[{id:1,name:"张三",gender:"男",age:18,area:"北京",email:"123456@gmail.com"},{id:2,name:"李四",gender:"男",age:20,area:"上海",email:"4324253523@gamil.com"},{id:3,name:"王五",gender:"男",age:22,area:"广州",email:"3247347@gmail.com"},{id:4,name:"赵六",gender:"男",age:24,area:"深圳",email:"12126127@gmail.com"}],ae={class:"search-area"},te={class:"role-table"},oe={class:"dialog-footer"},ne={__name:"user",setup(de){const m=_(k),f=_("添加用户"),u=_(!1),o=O({index:0,data:{}}),v=_(""),g=_("name");j(()=>{M(u,n=>{n||(o.data={})})});const C=()=>{console.log("add"),f.value="添加用户",u.value=!0},x=()=>{m.value.push({...o.data}),u.value=!1},y=()=>{const n=g.value,e=v.value.toString();m.value=k.filter(d=>d[n].toString().includes(e))},$=(n,e)=>{f.value="编辑",u.value=!0,o.index=n,o.data={...e}},U=(n,e)=>{console.log(n,e),m.value.splice(n,1)},B=()=>{u.value=!1},S=()=>{m.value[o.index]={...o.data},u.value=!1};return(n,e)=>{const d=X,r=K,I=L,i=Y,T=le,s=Q,h=ee,z=W,p=Z,A=q,D=J;return V(),P(R,null,[l(z,null,{default:t(()=>[l(T,null,{default:t(()=>[l(d,{type:"primary",icon:E(G),onClick:e[0]||(e[0]=a=>C())},null,8,["icon"]),b("div",ae,[l(i,{modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=a=>v.value=a),placeholder:"Please input",class:"input-with-select"},{prepend:t(()=>[l(I,{modelValue:g.value,"onUpdate:modelValue":e[1]||(e[1]=a=>g.value=a),style:{width:"115px"}},{default:t(()=>[l(r,{label:"姓名",value:"name"}),l(r,{label:"性别",value:"gender"}),l(r,{label:"年龄",value:"age"}),l(r,{label:"地区",value:"area"}),l(r,{label:"邮箱",value:"email"})]),_:1},8,["modelValue"])]),append:t(()=>[l(d,{icon:E(H),onClick:e[2]||(e[2]=a=>y())},null,8,["icon"])]),_:1},8,["modelValue"])])]),_:1}),b("div",te,[l(h,{data:m.value,height:"100%",stripe:""},{default:t(()=>[l(s,{type:"index",label:"序号",width:"70"}),l(s,{prop:"name",label:"姓名",width:"150"}),l(s,{prop:"gender",label:"性别",width:"100"}),l(s,{prop:"age",label:"年龄",width:"150"}),l(s,{prop:"area",label:"地区",width:"180"}),l(s,{prop:"email",label:"邮箱"}),l(s,{align:"right"},{default:t(a=>[l(d,{size:"small",onClick:F=>$(a.$index,a.row)},{default:t(()=>[c(" Edit ")]),_:2},1032,["onClick"]),l(d,{size:"small",type:"danger",onClick:F=>U(a.$index,a.row)},{default:t(()=>[c("Delete")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),_:1}),l(D,{title:f.value,modelValue:u.value,"onUpdate:modelValue":e[13]||(e[13]=a=>u.value=a)},{default:t(()=>[l(A,{modelValue:o,"onUpdate:modelValue":e[9]||(e[9]=a=>o=a),"label-width":"100px"},{default:t(()=>[l(p,{label:"姓名"},{default:t(()=>[l(i,{modelValue:o.data.name,"onUpdate:modelValue":e[4]||(e[4]=a=>o.data.name=a)},null,8,["modelValue"])]),_:1}),l(p,{label:"性别"},{default:t(()=>[l(i,{modelValue:o.data.gender,"onUpdate:modelValue":e[5]||(e[5]=a=>o.data.gender=a)},null,8,["modelValue"])]),_:1}),l(p,{label:"年龄"},{default:t(()=>[l(i,{modelValue:o.data.age,"onUpdate:modelValue":e[6]||(e[6]=a=>o.data.age=a)},null,8,["modelValue"])]),_:1}),l(p,{label:"地区"},{default:t(()=>[l(i,{modelValue:o.data.area,"onUpdate:modelValue":e[7]||(e[7]=a=>o.data.area=a)},null,8,["modelValue"])]),_:1}),l(p,{label:"邮箱"},{default:t(()=>[l(i,{modelValue:o.data.email,"onUpdate:modelValue":e[8]||(e[8]=a=>o.data.email=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),b("div",oe,[f.value=="添加用户"?(V(),w(d,{key:0,type:"primary",onClick:e[10]||(e[10]=a=>x())},{default:t(()=>[c("确 定")]),_:1})):(V(),w(d,{key:1,type:"primary",onClick:e[11]||(e[11]=a=>S())},{default:t(()=>[c("确 定")]),_:1})),l(d,{onClick:e[12]||(e[12]=a=>B())},{default:t(()=>[c("取 消")]),_:1})])]),_:1},8,["title","modelValue"])],64)}}},re=N(ne,[["__scopeId","data-v-c77ab1a2"]]);export{re as default};