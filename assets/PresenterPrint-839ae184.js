import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as y,o as r,k as b,l as k,m as w,p as N,q as P,_ as B}from"./index-fee3b748.js";import{N as D}from"./NoteDisplay-2b86726c.js";const S={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},F={class:"opacity-50"},L={class:"text-lg"},M={class:"font-bold flex gap-2"},T={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},W=_({__name:"PresenterPrint",setup(z){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const l=f(()=>y.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(r(),n("div",{id:"page-root",style:x(a(P))},[t("div",S,[t("div",V,[t("h1",j,s(a(m).title),1),t("div",F,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",M,[t("div",T,s(e==null?void 0:e.no)+"/"+s(a(b)),1),k(" "+s(e==null?void 0:e.title)+" ",1),C])]),w(D,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(r(),n("hr",H)):N("v-if",!0)]))),128))])],4))}}),E=B(W,[["__file","/home/runner/work/DBFitWorkflowsMigration/DBFitWorkflowsMigration/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
