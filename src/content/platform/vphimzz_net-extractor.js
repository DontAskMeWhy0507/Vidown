// Module 385 - Savior Vphimzz_net Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(0),i=r(9),o={
  getDomains:()=>["vphimzzz.net"],parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/(vkool\.info\/videos\/[a-z0-9]+\.mp4)/))}
  ,parse:t=>{
  var e=t.media;
  return e.quality||(e.quality=i.b.DEFAULT_QUALITY_TYPE),"number"==typeof e.size&&(e.size=Object(n.beautifyFileSize)(e.size)),
  e.ext="mp4",e.exts=["mp4"],e.type="video",[e]}
  }
  ]}
  ,default:{
  getUrl:t=>[{
  url:t.url,ext:"",type:"video",filename:document.title.replace(/xem phim /i,""),referrer:location.href}
  ],mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.fixName=document.title.replace(/xem phim /i,""),e.referrer=location.href,e.type="video","video"}
  }
  };
  e.default=o};
