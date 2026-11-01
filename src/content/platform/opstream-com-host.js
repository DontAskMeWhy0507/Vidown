// Module 681 - Savior Opstream Com Host
export default function(t,e,r) {
  "use strict";
  r.r(e),e.default={
  index:180,getUrl(t,e,r,n){
  var i;
  if(t.match(/\.opstream\d*\.com/i)){
  var o=/main *= *['"](.+)['"]/i,a=Array.from(document.querySelectorAll("script:not([src]")).map(t=>{
  var e;
  return null===(e=t.textContent)||void 0===e?void 0:e.trim()}
  ).filter(t=>null==t?void 0:t.match(o))[0];
  if(a){
  var s=null===(i=a.match(o))||void 0===i?void 0:i[1];
  if(s){
  var u;
  try{
  new URL(s),u=s}
  catch(t){
  u=location.origin+s}
  return{
  return:!0,data:{
  url:u,referrer:location.href}
  }
  }
  }
  }
  return{
  return:!1,data:null}
  }
  }
  };
