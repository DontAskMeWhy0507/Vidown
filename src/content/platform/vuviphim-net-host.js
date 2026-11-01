// Module 699 - Savior Vuviphim Net Host
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(0);
  e.default={
  index:60,getUrl(t,e,r,i){
  if(t.match(/vuviphim[a-z]+\.net/i)&&!r.requestedUrls.includes(location.href))try{
  var o=document.querySelector("#player video"),a=null==o?void 0:o.src;
  r.requestedUrls.push(location.href),Object(n.sendMessage)({
  requestType:"save_url",params:{
  url:a}
  }
  )}
  catch(t){
  }
  return{
  return:!1,data:null}
  }
  }
  };
