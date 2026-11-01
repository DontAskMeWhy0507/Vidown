// Module 305 - Savior Phimbom_click Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n={
  getDomains:()=>["phimbom."],urls:[{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(e.match(/phimbom\.click.+\.mp4/))}
  ,getUrl:t=>t.url,mediaObjectChange:t=>{
  var e=t.mediaObject;
  e.filename&&e.filename.length<10&&(e.filename=document.title),e.skipReferrer=!0}
  }
  ]};
  e.default=n};
