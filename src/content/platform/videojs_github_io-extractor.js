// Module 373 - Savior Videojs_github_io Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n={
  getDomains:()=>["videojs.github.io"],default:{
  getUrl:()=>{
  var t;
  return null===(t=document.getElementById("url"))||void 0===t?void 0:t.value}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.ext="m3u8",e.exts=["m3u8"],"video"}
  }
  };
  e.default=n};
