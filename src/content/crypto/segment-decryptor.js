// Module 614 - Savior Segment Decryptor
export default function(t,e,r){
  var n=r(482),i=r(25).Buffer,o=r(429),a=r(483),s=r(130),u=r(170),c=r(171);
  function l(t,e,r){
  s.call(this),this._cache=new f,this._last=void 0,this._cipher=new u.AES(e),this._prev=i.from(r),this._mode=t,
  this._autopadding=!0}
  function f(){
  this.cache=i.allocUnsafe(0)}
  function d(t,e,r){
  var s=o[t.toLowerCase()];
  if(!s)throw new TypeError("invalid suite type");
  if("string"==typeof r&&(r=i.from(r)),"GCM"!==s.mode&&r.length!==s.iv)throw new TypeError("invalid iv length "+r.length);
  if("string"==typeof e&&(e=i.from(e)),e.length!==s.key/8)throw new TypeError("invalid key length "+e.length);
  return"stream"===s.type?new a(s.module,e,r,!0):"auth"===s.type?new n(s.module,e,r,!0):new l(s.module,
  e,r)}
  r(15)(l,s),l.prototype._update=function(t){
  var e,r;
  this._cache.add(t);
  for(var n=[];
  e=this._cache.get(this._autopadding);
  )r=this._mode.decrypt(this,e),n.push(r);
  return i.concat(n)}
  ,l.prototype._final=function(){
  var t=this._cache.flush();
  if(this._autopadding)return function(t){
  var e=t[15];
  if(e<1||e>16)throw new Error("unable to decrypt data");
  var r=-1;
  for(;
  ++r<e;
  )if(t[r+(16-e)]!==e)throw new Error("unable to decrypt data");
  if(16===e)return;
  return t.slice(0,16-e)}
  (this._mode.decrypt(this,t));
  if(t)throw new Error("data not multiple of block length")}
  ,l.prototype.setAutoPadding=function(t){
  return this._autopadding=!!t,this}
  ,f.prototype.add=function(t){
  this.cache=i.concat([this.cache,t])}
  ,f.prototype.get=function(t){
  var e;
  if(t){
  if(this.cache.length>16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e}
  else if(this.cache.length>=16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e;
  return null}
  ,f.prototype.flush=function(){
  if(this.cache.length)return this.cache}
  ,e.createDecipher=function(t,e){
  var r=o[t.toLowerCase()];
  if(!r)throw new TypeError("invalid suite type");
  var n=c(e,!1,r.key,r.iv);
  return d(t,n.key,n.iv)}
  ,e.createDecipheriv=d};
