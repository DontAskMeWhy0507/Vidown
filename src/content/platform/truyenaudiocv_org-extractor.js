// Module 356 - Savior Truyenaudiocv_org Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n={
  getDomains:()=>["truyenaudiocv.org"],default:{
  mediaObjectChange(t){
  var e,r=t.mediaObject,n=null===(e=document.getElementById("npTitle"))||void 0===e?void 0:e.innerText.trim();
  return n&&(r.filename=n),r.type}
  }
  };
  e.default=n};
