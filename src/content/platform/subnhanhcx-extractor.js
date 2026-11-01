// Module 346 - Savior Subnhanhcx Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(6);
  e.default={
  getDomains:()=>["subnhanhcx."],parse:{
  default:t=>{
  var e=t.response,r=t.media;
  return Object(n.e)(e,r)}
  }
  ,default:{
  getUrl:t=>{
  if(t.url.includes("1.mp4"))return[]}
  }
  }
  };
