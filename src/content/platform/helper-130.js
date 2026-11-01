// Module 130 - Savior Helper 130
export default function(t,e,r) {
  "use strict";
  var n=r(25).Buffer,i=r(83).Transform,o=r(46).StringDecoder,a=r(15),s=r(165);
  function u(t){
  i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,
  this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}
  a(u,i),u.prototype.update=function(t,e,r){
  var n=s(t,e),i=this._update(n);
  return this.hashMode?this:(r&&(i=this._toString(i,r)),i)}
  ,u.prototype.setAutoPadding=function(){
  }
  ,u.prototype.getAuthTag=function(){
  throw new Error("trying to get auth tag in unsupported state")}
  ,u.prototype.setAuthTag=function(){
  throw new Error("trying to set auth tag in unsupported state")}
  ,u.prototype.setAAD=function(){
  throw new Error("trying to set aad in unsupported state")}
  ,u.prototype._transform=function(t,e,r){
  var n;
  try{
  this.hashMode?this._update(t):this.push(this._update(t))}
  catch(t){
  n=t}
  finally{
  r(n)}
  }
  ,u.prototype._flush=function(t){
  var e;
  try{
  this.push(this.__final())}
  catch(t){
  e=t}
  t(e)}
  ,u.prototype._finalOrDigest=function(t){
  var e=this.__final()||n.alloc(0);
  return t&&(e=this._toString(e,t,!0)),e}
  ,u.prototype._toString=function(t,e,r){
  if(this._decoder||(this._decoder=new o(e),this._encoding=e),this._encoding!==e)throw new Error("can’t switch encodings");
  var n=this._decoder.write(t);
  return r&&(n+=this._decoder.end()),n}
  ,t.exports=u};
