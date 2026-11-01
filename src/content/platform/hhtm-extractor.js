// Module 247 - Savior Hhtm Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n,i=r(1),o=r(0);
  e.default={
  getDomains:()=>["hhtm.","yanhh3d."],default:{
  getUrl:t=>{
  var e=t.url;
  return n?[n]:e.includes(".mp4")?e:[]}
  ,mediaObjectChange:t=>{
  var e,r=t.mediaObject,n=document.querySelector(".film-name");
  n&&(r.filename=null===(e=n.textContent)||void 0===e?void 0:e.trim())}
  }
  ,urls:[{
  checkUrl:t=>t.url.includes("abyss-cdn.ink/video"),getUrl:t=>t.url+"/master.html",mediaObjectChange:
  t=>{
  var e=t.mediaObject;
  e.ext="m3u8",e.exts=["m3u8"]}
  }
  ],processRequestIds:t=>(Object(o.sendMessage)({
  type:i.b.CONSOLE_LOG,params:{
  id:t}
  }
  ),!!(t.url.includes("/stream/m3u8/")||t.url.includes("/avcaption.v1.StreamingService/GetPlaylist")||
  t.url.match(/scontent-sin([\d\-]+)xx\.fbcdn\./))&&(n=t,!0))}
  };
