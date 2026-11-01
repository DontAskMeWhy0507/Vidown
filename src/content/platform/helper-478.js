// Module 478 - Savior Helper 478
export default function(t,e,r) {
  "use strict";
  var n=r(116),i=r(15),o=r(477),a=r(427);
  function s(){
  this.tmp=new Array(2),this.keys=null}
  function u(t){
  a.call(this,t);
  var e=new s;
  this._desState=e,this.deriveKeys(e,t.key)}
  i(u,a),t.exports=u,u.create=function(t){
  return new u(t)};
  var c=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];
  u.prototype.deriveKeys=function(t,e){
  t.keys=new Array(32),n.equal(e.length,this.blockSize,"Invalid key length");
  var r=o.readUInt32BE(e,0),i=o.readUInt32BE(e,4);
  o.pc1(r,i,t.tmp,0),r=t.tmp[0],i=t.tmp[1];
  for(var a=0;
  a<t.keys.length;
  a+=2){
  var s=c[a>>>1];
  r=o.r28shl(r,s),i=o.r28shl(i,s),o.pc2(r,i,t.keys,a)}
  }
  ,u.prototype._update=function(t,e,r,n){
  var i=this._desState,a=o.readUInt32BE(t,e),s=o.readUInt32BE(t,e+4);
  o.ip(a,s,i.tmp,0),a=i.tmp[0],s=i.tmp[1],"encrypt"===this.type?this._encrypt(i,a,s,i.tmp,0):this._decrypt(i,
  a,s,i.tmp,0),a=i.tmp[0],s=i.tmp[1],o.writeUInt32BE(r,a,n),o.writeUInt32BE(r,s,n+4)}
  ,u.prototype._pad=function(t,e){
  if(!1===this.padding)return!1;
  for(var r=t.length-e,n=e;
  n<t.length;
  n++)t[n]=r;
  return!0}
  ,u.prototype._unpad=function(t){
  if(!1===this.padding)return t;
  for(var e=t[t.length-1],r=t.length-e;
  r<t.length;
  r++)n.equal(t[r],e);
  return t.slice(0,t.length-e)}
  ,u.prototype._encrypt=function(t,e,r,n,i){
  for(var a=e,s=r,u=0;
  u<t.keys.length;
  u+=2){
  var c=t.keys[u],l=t.keys[u+1];
  o.expand(s,t.tmp,0),c^=t.tmp[0],l^=t.tmp[1];
  var f=o.substitute(c,l),d=s;
  s=(a^o.permute(f))>>>0,a=d}
  o.rip(s,a,n,i)}
  ,u.prototype._decrypt=function(t,e,r,n,i){
  for(var a=r,s=e,u=t.keys.length-2;
  u>=0;
  u-=2){
  var c=t.keys[u],l=t.keys[u+1];
  o.expand(a,t.tmp,0),c^=t.tmp[0],l^=t.tmp[1];
  var f=o.substitute(c,l),d=a;
  a=(s^o.permute(f))>>>0,s=d}
  o.rip(a,s,n,i)}
  };
