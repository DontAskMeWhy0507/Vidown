// Module 271 - Savior Lpe360 Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(6);
  e.default={
  getDomains:()=>["lpe360."],parse:{
  default:t=>{
  var e,r=t.media,i=t.response;
  i=function(t,e){
  var r="&"+(null==t?void 0:t.slice(1));
  return e.split("\n").map(t=>t.trim().startsWith("#")||!t.trim()?t:t+r).join("\n")}
  ("&dpr=1",i);
  var o=document.querySelectorAll("h1")[1];
  return o&&(r.filename=null===(e=o.textContent)||void 0===e?void 0:e.trim(),r.fixName=r.filename),Object(n.e)(i,
  r)}
  }
  }
  };
