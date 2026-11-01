// Module 486 - Savior Helper 486
export default function(t,e,r){
  var n=r(618),i=r(430);
  function o(t){
  this.rand=t||new i.Rand}
  t.exports=o,o.create=function(t){
  return new o(t)}
  ,o.prototype._randbelow=function(t){
  var e=t.bitLength(),r=Math.ceil(e/8);
  do{
  var i=new n(this.rand.generate(r))}
  while(i.cmp(t)>=0);
  return i}
  ,o.prototype._randrange=function(t,e){
  var r=e.sub(t);
  return t.add(this._randbelow(r))}
  ,o.prototype.test=function(t,e,r){
  var i=t.bitLength(),o=n.mont(t),a=new n(1).toRed(o);
  e||(e=Math.max(1,i/48|0));
  for(var s=t.subn(1),u=0;
  !s.testn(u);
  u++);
  for(var c=t.shrn(u),l=s.toRed(o);
  e>0;
  e--){
  var f=this._randrange(new n(2),s);
  r&&r(f);
  var d=f.toRed(o).redPow(c);
  if(0!==d.cmp(a)&&0!==d.cmp(l)){
  for(var h=1;
  h<u;
  h++){
  if(0===(d=d.redSqr()).cmp(a))return!1;
  if(0===d.cmp(l))break}
  if(h===u)return!1}
  }
  return!0}
  ,o.prototype.getDivisor=function(t,e){
  var r=t.bitLength(),i=n.mont(t),o=new n(1).toRed(i);
  e||(e=Math.max(1,r/48|0));
  for(var a=t.subn(1),s=0;
  !a.testn(s);
  s++);
  for(var u=t.shrn(s),c=a.toRed(i);
  e>0;
  e--){
  var l=this._randrange(new n(2),a),f=t.gcd(l);
  if(0!==f.cmpn(1))return f;
  var d=l.toRed(i).redPow(u);
  if(0!==d.cmp(o)&&0!==d.cmp(c)){
  for(var h=1;
  h<s;
  h++){
  if(0===(d=d.redSqr()).cmp(o))return d.fromRed().subn(1).gcd(t);
  if(0===d.cmp(c))break}
  if(h===s)return(d=d.redSqr()).fromRed().subn(1).gcd(t)}
  }
  return!1}
  };
