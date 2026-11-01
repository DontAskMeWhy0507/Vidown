// Module 320 - Savior Pops_vn Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(14),i=r(6),o=location.href,a={
  }
  ,s={
  getDomains:()=>["pops.vn","motphimc."],forceUpdate(){
  location.href!==o&&(EE.emit("widget.forceUpdate"),o=location.href)}
  ,processRequestIds(t){
  var e=t.url;
  if(e.match(/\/index.m3u8/i))return e.includes("maxRes")||(a[location.href]=e),!0}
  ,parse:{
  default:t=>{
  var e=t.media,r=t.response;
  return!r&&e.realRes&&(r=e.realRes),(null==r?void 0:r.match(/<\?xml.+<mpd/i))?Object(n.b)(r,e.filename||
  document.title,e.host,e.url):Object(i.e)(r,e)}
  }
  ,default:{
  getUrl:()=>a[location.href]}
  };
  e.default=s};
