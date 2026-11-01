// Module 283 - Savior Msn_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n={
  getDomains:()=>["msn.com"],addNode:()=>["video-card"],isValidVideoNode:t=>!!["video","video-card"].includes(t.nodeName.toLowerCase()),
  getCustomPipControlElement(t){
  var e;
  if("video-card"===t.nodeName.toLowerCase()){
  var r=t.shadowRoot,n=null===(e=null==r?void 0:r.querySelector("content-video-player"))||void 0===e?
  void 0:e.shadowRoot,i=null==n?void 0:n.querySelector("video");
  if(i)return i}
  return t}
  ,default:{
  getUrl:t=>{
  var e=t.ids;
  if(e.length>0)return e}
  }
  };
  e.default=n};
