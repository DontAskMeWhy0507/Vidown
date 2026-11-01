// Module 240 - Savior Hayko_tv Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(12),i={
  getDomains:()=>["hayko.tv"],default:{
  mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.ext="mp4",e.exts=["mp4"],"video"}
  }
  ,getCustomParent(t){
  var e=Object(n.d)(t);
  return t.closest(".video-card")||e}
  };
  e.default=i};
