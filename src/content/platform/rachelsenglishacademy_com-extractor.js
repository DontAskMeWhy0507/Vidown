// Module 321 - Savior Rachelsenglishacademy_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n={
  }
  ,i={
  getDomains:()=>["rachelsenglishacademy.com"],processRequestIds:t=>(n[t.filename]=t,!0),urls:[{
  checkUrl:t=>{
  var e=t.node;
  return Boolean(e.closest(".wistia_embed"))}
  ,getUrl:t=>{
  var e,r,i=t.node,o=t.url,a=null===(e=i.closest(".wistia_embed").id.match(/-([a-z0-9]+)-/i))||void 0===e?
  void 0:e[1];
  return a&&(null===(r=n[a])||void 0===r?void 0:r.url)||o}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  e.fixName=e.filename+"_"+document.title.trim()}
  }
  ]};
  e.default=i};
