// Module 183 - Savior 2phimhay_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=[],i={
  getDomains:()=>["2phimhay"],processRequestIds:t=>(n.push(t),!0),urls:[{
  checkUrl:t=>t.url.includes("proxy.playphim.info"),getUrl:t=>{
  var e=t.url;
  if(n.length>0){
  var r=/cdn-\d+.2phimhay.net/,i=n.find(t=>"string"==typeof t.url&&t.url.match(r));
  if(!i)return;
  return i.referrer=e,i.title=document.title,[i]}
  }
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.ext="mp4",e.exts=["mp4"],"video"}
  }
  ],default:{
  getUrl:t=>{
  var e=t.ids;
  return[...n,...e]}
  }
  };
  e.default=i};
