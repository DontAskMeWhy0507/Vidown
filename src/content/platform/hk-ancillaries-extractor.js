// Module 249 - Savior Hk Ancillaries Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n,i=r(0);
  e.default={
  getDomains:()=>["hk-ancillaries.s3.amazonaws."],onDomScannerInit:t=>{
  var e=Object(i.queryAll)(t.mediaTags.join(", "));
  if("IFRAME"==e[0].nodeName){
  var r=e[0];
  r.addEventListener("load",()=>{
  var e;
  if(r.contentDocument){
  var n=Object(i.queryAll)(t.mediaTags.join(", "),r.contentDocument);
  null===(e=t._observer)||void 0===e||e.observe(r.contentDocument,{
  childList:!0,subtree:!0,attributeFilter:["src","data-src","hidden","opened"]}
  ),n.length&&t.nodeChangedNotifier(n)}
  }
  )}
  }
  ,default:{
  getUrl:t=>{
  t.url;
  return n?n.url:[]}
  ,mediaObjectChange:t=>{
  var e,r,n,i=t.mediaObject;
  i.filename=null===(n=null===(r=null===(e=document.querySelector("iframe"))||void 0===e?void 0:e.contentDocument)||
  void 0===r?void 0:r.querySelector("p"))||void 0===n?void 0:n.innerText,i.fixName=i.filename}
  }
  ,processRequestIds(t){
  if(t.url.toString().includes("master.m3u8"))return n=t,EE.emit("widget.forceUpdate"),!0}
  }
  };
