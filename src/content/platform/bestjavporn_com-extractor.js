// Module 213 - Savior Bestjavporn_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=[],i={
  getDomains:()=>["bestjavporn."],parse:{
  default:t=>{
  var e=t.response,r=t.media;
  return r.play_list=e,[r]}
  }
  ,isValidVideoNode:t=>"IFRAME"===t.nodeName,urls:[{
  checkUrl:()=>!!n.length,getUrl:()=>{
  var t,e=n[0],r=document.title||(null===(t=document.querySelector("h1"))||void 0===t?void 0:t.innerText);
  return e.filename=r,[e]}
  }
  ],processRequestIds:t=>{
  if(t.url.match(/\/stream\/hls\.php\?.+|\.cloudatacdn\.com\/.+|\.tapecontent\.net\/.+\.mp4.+|.+\.m3u8/))return n[0]=t,
  !0}
  };
  e.default=i};
