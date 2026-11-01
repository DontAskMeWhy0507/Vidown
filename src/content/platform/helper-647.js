// Module 647 - Savior Helper 647
export default function(t,e,r) {
  "use strict";
  var n=r(126),i=r(117),o=i.assert;
  function a(t,e){
  if(t instanceof a)return t;
  this._importDER(t,e)||(o(t.r&&t.s,"Signature without r or s"),this.r=new n(t.r,16),this.s=new n(t.s,
  16),void 0===t.recoveryParam?this.recoveryParam=null:this.recoveryParam=t.recoveryParam)}
  function s(){
  this.place=0}
  function u(t,e){
  var r=t[e.place++];
  if(!(128&r))return r;
  var n=15&r;
  if(0===n||n>4)return!1;
  if(0===t[e.place])return!1;
  for(var i=0,o=0,a=e.place;
  o<n;
  o++,a++)i<<=8,i|=t[a],i>>>=0;
  return!(i<=127)&&(e.place=a,i)}
  function c(t){
  for(var e=0,r=t.length-1;
  !t[e]&&!(128&t[e+1])&&e<r;
  )e++;
  return 0===e?t:t.slice(e)}
  function l(t,e){
  if(e<128)t.push(e);
  else{
  var r=1+(Math.log(e)/Math.LN2>>>3);
  for(t.push(128|r);
  --r;
  )t.push(e>>>(r<<3)&255);
  t.push(e)}
  }
  t.exports=a,a.prototype._importDER=function(t,e){
  t=i.toArray(t,e);
  var r=new s;
  if(48!==t[r.place++])return!1;
  var o=u(t,r);
  if(!1===o)return!1;
  if(o+r.place!==t.length)return!1;
  if(2!==t[r.place++])return!1;
  var a=u(t,r);
  if(!1===a)return!1;
  if(0!=(128&t[r.place]))return!1;
  var c=t.slice(r.place,a+r.place);
  if(r.place+=a,2!==t[r.place++])return!1;
  var l=u(t,r);
  if(!1===l)return!1;
  if(t.length!==l+r.place)return!1;
  if(0!=(128&t[r.place]))return!1;
  var f=t.slice(r.place,l+r.place);
  if(0===c[0]){
  if(!(128&c[1]))return!1;
  c=c.slice(1)}
  if(0===f[0]){
  if(!(128&f[1]))return!1;
  f=f.slice(1)}
  return this.r=new n(c),this.s=new n(f),this.recoveryParam=null,!0}
  ,a.prototype.toDER=function(t){
  var e=this.r.toArray(),r=this.s.toArray();
  for(128&e[0]&&(e=[0].concat(e)),128&r[0]&&(r=[0].concat(r)),e=c(e),r=c(r);
  !(r[0]||128&r[1]);
  )r=r.slice(1);
  var n=[2];
  l(n,e.length),(n=n.concat(e)).push(2),l(n,r.length);
  var o=n.concat(r),a=[48];
  return l(a,o.length),a=a.concat(o),i.encode(a,t)}
  };
