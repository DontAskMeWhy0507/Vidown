// Module 23 - Savior Extractor Url Merger
export default function(t,e,r) {
  "use strict";
  function n(t,e){
  return r=>(e.forEach(e=>{
  var n;
  if("urls"==e&&(null===(n=t.urls)||void 0===n?void 0:n.length)&&(r.urls||(r.urls=[]),r.urls.unshift(...t.urls||
  [])),"parse"==e&&t.parse&&(r.parse||(r.parse={
  }
  ),!r.parse.default&&t.parse.default&&(r.parse.default=t.parse.default),t.parse.sources&&(r.parse.sources||
  (r.parse.sources=[]),r.parse.sources.unshift(...t.parse.sources||[]))),"processRequestIds"==e&&t.processRequestIds)if(r.processRequestIds){
  var i=r.processRequestIds;
  r.processRequestIds=e=>t.processRequestIds(e)||i(e)}
  else r.processRequestIds=t.processRequestIds;
  if("idsProcess"==e&&t.idsProcess)if(r.idsProcess){
  var o=r.idsProcess;
  r.idsProcess=e=>{
  t.idsProcess(e),o(e)}
  }
  else r.idsProcess=t.idsProcess;
  if("default"==e&&t.default)if(r.default)if(r.default.getUrl||(r.default.getUrl=t.default.getUrl),r.default.mediaObjectChange){
  var a=r.default.mediaObjectChange;
  r.default.mediaObjectChange=e=>{
  var r,n;
  return null===(n=(r=t.default).mediaObjectChange)||void 0===n||n.call(r,e),a(e)}
  }
  else r.default.mediaObjectChange=t.default.mediaObjectChange;
  else r.default=t.default}
  ),r)}
  r.d(e,"a",(function(){
  return n}
  ))};
