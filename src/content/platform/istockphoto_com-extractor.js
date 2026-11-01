// Module 256 - Savior Istockphoto_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  e.default={
  getDomains:()=>["istockphoto.com"],default:{
  mediaObjectChange:t=>{
  var e=t.mediaObject;
  if(!e.url.startsWith("blob:"))return e.ext="mp4",e.exts=["mp4"],e.noAudio=!0,"video"}
  }
  }
  };
