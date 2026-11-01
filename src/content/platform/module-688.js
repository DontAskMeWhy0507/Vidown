// Module 688 [platform]
export default function(t,e,r) {
  "use strict";
r.r(e),e.default={index:10,getUrl(t,e,r,n){if(t.includes("proxy.playphim.info")&&e.get("id")){var i="https://proxy.playphim.info/proxy/proxy.php?url="+e.get("id");-1===r.requestedUrls.indexOf(i)&&fetch(i).then(t=>t.json()).then(t=>({url:t,referrer:location.href}))}return{return:!1,data:null}}}};
