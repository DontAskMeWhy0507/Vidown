// Module 167 - Savior Helper 167
export default function(t,e,r) {
  "use strict";
  t.exports=function(){
  if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;
  if("symbol"==typeof Symbol.iterator)return!0;
  var t={
  }
  ,e=Symbol("test"),r=Object(e);
  if("string"==typeof e)return!1;
  if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;
  if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;
  for(var n in t[e]=42,t)return!1;
  if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;
  if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;
  var i=Object.getOwnPropertySymbols(t);
  if(1!==i.length||i[0]!==e)return!1;
  if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;
  if("function"==typeof Object.getOwnPropertyDescriptor){
  var o=Object.getOwnPropertyDescriptor(t,e);
  if(42!==o.value||!0!==o.enumerable)return!1}
  return!0}
  };
