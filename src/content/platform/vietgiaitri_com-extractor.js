// Module 375 - Savior Vietgiaitri_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(28),i={
  getDomains:()=>["vietgiaitri.com"],parse:{
  default:t=>{
  var e=t.media;
  return n.a.parse(e.url)}
  }
  ,urls:[{
  checkUrl:t=>t.url.includes("ytiframe.html?"),getUrl:t=>{
  var e=t.url,r=/postids*=\s*\d+#(\w+)/.exec(e);
  if(r)return"https//www.youtube.com/watch?v="+r[1]}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  e.ext="mp4",e.exts=["mp4"]}
  }
  ]};
  e.default=i};
