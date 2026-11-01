// Module 676 - Savior Fileone Host
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(0);
  e.default={
  index:80,getUrl(t,e,r,i){
  if(t.includes("fileone.tv")){
  var o=document.querySelector("source");
  Object(n.sendMessage)({
  requestType:"save_url",params:{
  url:null==o?void 0:o.src,source:location.href}
  }
  )}
  }
  }
  };
