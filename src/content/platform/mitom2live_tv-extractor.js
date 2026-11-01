// Module 276 - Savior Mitom2live_tv Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n={
  getDomains:()=>["mitom4live.org"],default:{
  mediaObjectChange:t=>{
  var e,r,n=t.mediaObject,i=t.node,o=(null===(r=null===(e=null==i?void 0:i.closest("div.highlights-detail-wrapper"))||
  void 0===e?void 0:e.querySelector("h1.detail-title"))||void 0===r?void 0:r.textContent)||document.title.split("/").pop();
  n.filename=o}
  }
  };
  e.default=n};
