// Module 682 - Savior Play Hidestream Com Host
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(1),i=r(0);
  e.default={
  index:160,getUrl(t,e,r,o){
  var a;
  if(t.match(/play\.hidestream\.com/)&&-1===r.requestedUrls.indexOf(location.href)){
  var s=[...document.querySelectorAll("#player ~ script")].filter(t=>t.innerText&&t.innerText.includes("eval("))[0].innerText;
  try{
  var u=(null==s?void 0:s.slice(s.indexOf("}(")+2,s.length-2).split(","))||[],c=u.shift(),l=u.pop()||
  2,f=u.pop()||"",d=((t,e,r,n)=>{
  t=e.length;
  for(var i=0;
  i<t;
  i++)r+=String.fromCharCode(e.charCodeAt(i)^n);
  return r=unescape(r)}
  )(c,u.join(",").slice(1,-1),f,l),h=null===(a=d.match(/['"]*file['"]*: *['"](.+?)['"]/))||void 0===a?
  void 0:a[1];
  Object(i.sendMessage)({
  requestType:"save_url",params:{
  url:h}
  }
  ),r.requestedUrls.push(location.href)}
  catch(t){
  Object(i.sendMessage)({
  type:n.b.CONSOLE_LOG,params:{
  url:{
  error:t}
  }
  }
  )}
  }
  return{
  return:!1,data:null}
  }
  }
  };
