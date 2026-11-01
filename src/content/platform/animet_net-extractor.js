// Module 199 - Savior Animet_net Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n,i=r(0),o=r(9),a=r(20),s={
  }
  ,u={
  getDomains:()=>["animet.net","vietdub.com"],siteMatcher:t=>/animet\d*\./i.test(t),parse:{
  sources:[...(null===(n=a.a.parse)||void 0===n?void 0:n.sources)||[],{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/(phimhay\.net)|(cdnproxy\.xyz\/)/))}
  ,parse:t=>{
  var e=t.media;
  return e.quality||(e.quality=o.b.DEFAULT_QUALITY_TYPE),"number"==typeof e.size&&(e.size=Object(i.beautifyFileSize)(e.size)),
  e.referrer=s[location.href]||location.href,e.ext="mp4",e.exts=["mp4"],e.type="video",[e]}
  }
  ]}
  ,urls:[...a.a.urls||[],{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(e.match(/(phimhay\.net)|(cdnproxy\.xyz\/)/))}
  ,getUrl:t=>t.url,mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.referrer=s[location.href]||location.href,e.type="video","video"}
  }
  ,{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(e.match(/api\.anime3s\.com\/Get_Stream/))}
  ,getUrl:t=>{
  var e=t.url;
  return s[location.href]=e,e}
  }
  ]};
  e.default=u};
