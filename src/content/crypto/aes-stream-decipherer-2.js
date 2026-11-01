// Module 482 - Savior Aes Stream Decipherer 2
export default function(t,e,r){
  var n=r(170),i=r(25).Buffer,o=r(130),a=r(15),s=r(613),u=r(155),c=r(480);
  function l(t,e,r,a){
  o.call(this);
  var u=i.alloc(4,0);
  this._cipher=new n.AES(e);
  var l=this._cipher.encryptBlock(u);
  this._ghash=new s(l),r=function(t,e,r){
  if(12===e.length)return t._finID=i.concat([e,i.from([0,0,0,1])]),i.concat([e,i.from([0,0,0,2])]);
  var n=new s(r),o=e.length,a=o%16;
  n.update(e),a&&(a=16-a,n.update(i.alloc(a,0))),n.update(i.alloc(8,0));
  var u=8*o,l=i.alloc(8);
  l.writeUIntBE(u,0,8),n.update(l),t._finID=n.state;
  var f=i.from(t._finID);
  return c(f),f}
  (this,r,l),this._prev=i.from(r),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=a,
  this._alen=0,this._len=0,this._mode=t,this._authTag=null,this._called=!1}
  a(l,o),l.prototype._update=function(t){
  if(!this._called&&this._alen){
  var e=16-this._alen%16;
  e<16&&(e=i.alloc(e,0),this._ghash.update(e))}
  this._called=!0;
  var r=this._mode.encrypt(this,t);
  return this._decrypt?this._ghash.update(t):this._ghash.update(r),this._len+=t.length,r}
  ,l.prototype._final=function(){
  if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");
  var t=u(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));
  if(this._decrypt&&function(t,e){
  var r=0;
  t.length!==e.length&&r++;
  for(var n=Math.min(t.length,e.length),i=0;
  i<n;
  ++i)r+=t[i]^e[i];
  return r}
  (t,this._authTag))throw new Error("Unsupported state or unable to authenticate data");
  this._authTag=t,this._cipher.scrub()}
  ,l.prototype.getAuthTag=function(){
  if(this._decrypt||!i.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");
  return this._authTag}
  ,l.prototype.setAuthTag=function(t){
  if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");
  this._authTag=t}
  ,l.prototype.setAAD=function(t){
  if(this._called)throw new Error("Attempting to set AAD in unsupported state");
  this._ghash.update(t),this._alen+=t.length}
  ,t.exports=l};
