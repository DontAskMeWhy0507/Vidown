// Module 326 [detector]
export default function(t,e,r) {
  "use strict";
r.r(e),e.default={getDomains:()=>["rule34video"],urls:[{checkUrl:t=>t.url.includes(".mp4"),getUrl:t=>t.url,mediaObjectChange:t=>{var e,r,n=t.mediaObject,i=t.node;n.ext="mp4",n.exts=["mp4"];var o=null===(r=null===(e=i.closest(".fancybox-overlay"))||void 0===e?void 0:e.querySelector("h1"))||void 0===r?void 0:r.innerText;return n.filename=o||document.title,"video"}}]}};
