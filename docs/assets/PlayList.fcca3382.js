import"./base.d0d60045.js";import{E,a as C}from"./el-tab-pane.7102dc21.js";import{c as h,B as m,e as a,m as n,R as d,n as s,J as f,$ as b,P as l,a5 as k,N as v,v as y,p as F,f as V,I as $,am as D,a6 as L,o as N}from"./vendor.3a968c7d.js";import{f as P,g as z}from"./index.020b4e0a.js";import{E as w}from"./el-button.c1edbf64.js";import{E as A}from"./el-avatar.2290ea88.js";import{_ as g}from"./number.397026a5.js";import{M as S,S as M}from"./SongListItem.9ba42e74.js";import{P as j}from"./PlayOne.3a6f4a81.js";import{L as T}from"./PlayTwo.dfccce23.js";import"./event.4b05a53a.js";import"./close.906d75c0.js";import"./index.720f3c6a.js";import"./plugin-vue_export-helper.21dcd24c.js";const I={key:0},U={key:1},R=h({props:{text:null,end:null},setup(t){const i=t,c=m(!1),e=m(!1);return i.text.length>i.end&&(c.value=!0),(o,u)=>c.value?(a(),n(f,{key:0},[e.value?(a(),n("span",U,d(t.text)+"...",1)):(a(),n("span",I,d(t.text.substring(0,t.end))+"...",1)),s("span",{class:"ml-5 text-gray-700 hover-text",onClick:u[0]||(u[0]=_=>e.value=!e.value)},"["+d(e.value?"\u6536\u8D77":"\u8BE6\u60C5")+"]",1)],64)):(a(),n(f,{key:1},[b(d(t.text),1)],64))}}),q={class:"flex items-stretch"},J=["src"],O={class:"pl-5 flex flex-col justify-between py-1 flex-1"},G={class:"text-2xl font-bold"},H={class:"flex items-center text-xs text-gray-600 pb-2 pt-3"},K={class:"ml-2"},Q={class:"ml-5 flex text-gray-500"},W={class:"text-xs text-gray-500 leading-normal"},X={class:"justify-self-stretch mt-5 gap-x-2 flex items-center"},Y=s("span",null,"\u64AD\u653E\u5168\u90E8",-1),Z=s("span",null,"\u6536\u85CF",-1),tt=h({props:{playlist:null},setup(t){return(i,c)=>{const e=A,o=w;return a(),n("div",q,[s("img",{src:t.playlist.coverImgUrl,alt:"",class:"w-44 h-44 object-cover rounded-xl flex-shrink-0"},null,8,J),s("div",O,[s("div",null,[s("div",G,d(t.playlist.name),1),s("div",H,[l(e,{src:t.playlist.creator.avatarUrl,size:"small",round:""},null,8,["src"]),s("span",K,d(t.playlist.creator.nickname),1),s("div",Q,[(a(!0),n(f,null,k(t.playlist.tags,u=>(a(),n("div",{class:"ml-2 hover-text",key:u},"#"+d(u),1))),128))])]),s("div",W,[l(R,{text:t.playlist.description,end:90},null,8,["text"])])]),s("div",X,[l(o,{class:"w-32 bg-emerald-500 border-0 text-white",round:"",type:"primary"},{default:v(()=>[l(g,{icon:y(j),size:"22",class:"mr-1"},null,8,["icon"]),Y]),_:1}),l(o,{class:"w-32 bg-gray-100",secondary:"",round:""},{default:v(()=>[l(g,{icon:y(T),size:"18",class:"mr-1"},null,8,["icon"]),Z]),_:1}),l(o,{circle:"",class:"bg-gray-100",secondary:"",icon:y(S)},null,8,["icon"])])])])}}}),et={class:"mt-2"},st=D('<div class="flex text-xs text-gray-400 py-2"><div class="flex-auto">\u6B4C\u66F2</div><div class="w-1/4">\u6B4C\u624B</div><div class="w-1/4">\u4E13\u8F91</div><div class="w-20">\u65F6\u957F</div></div>',1),lt={class:"text-sm"},at={key:0,class:"flex justify-center py-5"},nt=b("\u52A0\u8F7D\u66F4\u591A"),ot=h({props:{songs:null},setup(t){const i=t,c=m(10),e=m(1),o=F(()=>e.value-i.songs.length/c.value>=0),u=()=>{e.value=e.value+1};return(_,r)=>{const p=w;return a(),n("div",et,[st,s("div",lt,[(a(!0),n(f,null,k(t.songs.slice(0,c.value*e.value),x=>(a(),V(M,{key:x.id,song:x,"show-ar-name":"","show-al-name":""},null,8,["song"]))),128))]),t.songs.length>c.value&&!y(o)?(a(),n("div",at,[l(p,{type:"text",class:"text-center w-full",onClick:u},{default:v(()=>[nt]),_:1})])):$("",!0)])}}});const ct={class:"playlist"},it={key:0,class:"p-5"},$t=h({setup(t){const i=m("tracks"),c=L(),e=m(),o=m([]);return N(()=>{const _=Number(c.query.id);P(_).then(r=>{e.value=r}),z(_).then(r=>{o.value=r})}),(_,r)=>{const p=E,x=C;return a(),n("div",ct,[e.value?(a(),n("div",it,[l(tt,{playlist:e.value},null,8,["playlist"]),l(x,{class:"mt-3",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=B=>i.value=B)},{default:v(()=>[l(p,{lazy:"",label:`\u6B4C\u66F2 ${o.value.length}`,name:"tracks"},{default:v(()=>[l(ot,{songs:o.value},null,8,["songs"])]),_:1},8,["label"]),l(p,{lazy:"",label:"\u8BC4\u8BBA",name:"comments"})]),_:1},8,["modelValue"])])):$("",!0)])}}});export{$t as default};