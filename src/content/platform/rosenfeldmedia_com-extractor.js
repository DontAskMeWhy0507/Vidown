// Module 325 - Savior Rosenfeldmedia_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(119),i=location.href,o=Object.assign(Object.assign({
  }
  ,n.default),{
  forceUpdate(){
  location.href!==i&&(EE.emit("widget.forceUpdate"),i=location.href)}
  ,idsProcess:t=>{
  var e=t.defaultIds,r=t.id,n=t.index;
  "number"==typeof r.size&&r.size<131072&&e.splice(n,1)}
  ,toggleLight:{
  turnOff:{
  updated(t,e){
  var r=e.parent.getComponent("toggleLight");
  r&&(r.$backdrop.style.top="0")}
  }
  }
  ,getDomains:()=>["rosenfeldmedia.","talkingkorea.com"]}
  );
  e.default=o};
