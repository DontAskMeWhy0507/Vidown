// Module 185 - Savior Amazon Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=[],i=!1,o={
  getDomains:()=>["amazon.com"],forceUpdate(){
  var t=document.querySelector("video.vjs-tech");
  void 0!==(null==t?void 0:t.src)&&(i||(n=[]),i=!1)}
  ,urls:[{
  checkUrl:t=>t.node.classList.contains("vjs-tech"),getUrl:()=>n}
  ],processRequestIds:t=>{
  var e,r,o,a=document.querySelector(`[data-video-url="${t.url}
  "]`),s=null===(r=null===(e=null==a?void 0:a.querySelector('[data-element-id="video-title"], .vse-video-title-text'))||
  void 0===e?void 0:e.innerText)||void 0===r?void 0:r.trim();
  return s&&(t.fixName=s),(null===(o=t.filename)||void 0===o?void 0:o.match(/jobtemplate\.hls$/))&&(n.length>0&&
  (i=!0),n[0]=t),!0}
  };
  e.default=o};
