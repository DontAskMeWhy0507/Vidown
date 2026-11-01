// Module 239 - Savior Hailuoai_video Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n={
  getDomains:()=>["hailuoai.video"],default:{
  mediaObjectChange(t){
  var e,r,n,i=t.mediaObject,o=t.node,a=(null===(e=document.body.querySelector(".detail-page-container .prompt-text"))||
  void 0===e?void 0:e.textContent)||(null===(n=null===(r=o.closest(".group\\/video-card "))||void 0===r?
  void 0:r.querySelector(".prompt-text"))||void 0===n?void 0:n.textContent);
  a&&(i.filename=a)}
  }
  };
  e.default=n};
