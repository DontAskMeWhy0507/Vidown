// Module 336 - Savior Sharepoint_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=[],i={
  getDomains:()=>[".sharepoint.com"],processRequestIds(t){
  if(t.url.match(/-mediap\.svc\.ms\/.+\/videomanifest/i))return n.push(t),!0}
  ,parse:{
  sources:[{
  checkSource:t=>Boolean(t.url.match(/southeastasia1-mediap.svc.ms\/.+\/videomanifest/i)),parse:t=>{
  var e=t.media;
  return e._isDashMPD=!0,[e]}
  }
  ]}
  ,urls:[{
  checkUrl:()=>!0,getUrl:()=>n.length>0?n[0].url:"blob:a.a",mediaObjectChange(t){
  var e=t.mediaObject;
  if(!e.url.includes("blob:"))return e.ext="mp4",e.exts=["mp4"],e.type="video","video"}
  }
  ]};
  e.default=i};
