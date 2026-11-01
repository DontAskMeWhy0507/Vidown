// Module 430 - Savior Helper 430
export default function(t,e,r){
  var n;
  function i(t){
  this.rand=t}
  if(t.exports=function(t){
  return n||(n=new i(null)),n.generate(t)}
  ,t.exports.Rand=i,i.prototype.generate=function(t){
  return this._rand(t)}
  ,i.prototype._rand=function(t){
  if(this.rand.getBytes)return this.rand.getBytes(t);
  for(var e=new Uint8Array(t),r=0;
  r<e.length;
  r++)e[r]=this.rand.getByte();
  return e}
  ,"object"==typeof self)self.crypto&&self.crypto.getRandomValues?i.prototype._rand=function(t){
  var e=new Uint8Array(t);
  return self.crypto.getRandomValues(e),e}
  :self.msCrypto&&self.msCrypto.getRandomValues?i.prototype._rand=function(t){
  var e=new Uint8Array(t);
  return self.msCrypto.getRandomValues(e),e}
  :"object"==typeof window&&(i.prototype._rand=function(){
  throw new Error("Not implemented yet")}
  );
  else try{
  var o=r(620);
  if("function"!=typeof o.randomBytes)throw new Error("Not supported");
  i.prototype._rand=function(t){
  return o.randomBytes(t)}
  }
  catch(t){
  }
  };
