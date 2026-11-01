// Module 476 - Savior Helper 476
export default function(t,e,r) {
  "use strict";
  var n=r(25).Buffer,i=r(165),o="undefined"!=typeof Uint8Array,a=o&&"undefined"!=typeof ArrayBuffer&&
  ArrayBuffer.isView;
  t.exports=function(t,e,r){
  if("string"==typeof t||n.isBuffer(t)||o&&t instanceof Uint8Array||a&&a(t))return i(t,e);
  throw new TypeError(r+" must be a string, a Buffer, a Uint8Array, or a DataView")}
  };
