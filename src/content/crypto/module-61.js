// Module 61 [crypto]
module.exports = function(t,e,r){var n;t.exports=(n=r(4),r(8),
/** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   */
n.mode.CTRGladman=function(){var t=n.lib.BlockCipherMode.extend();function e(t){if(255==(t>>24&255)){var e=t>>16&255,r=t>>8&255,n=255&t;255===e?(e=0,255===r?(r=0,255===n?n=0:++n):++r):++e,t=0,t+=e<<16,t+=r<<8,t+=n}else t+=1<<24;return t}var r=t.Encryptor=t.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize,o=this._iv,a=this._counter;o&&(a=this._counter=o.slice(0),this._iv=void 0),function(t){0===(t[0]=e(t[0]))&&(t[1]=e(t[1]))}(a);var s=a.slice(0);n.encryptBlock(s,0);for(var u=0;u<i;u++)t[r+u]^=s[u]}});return t.Decryptor=r,t}(),n.mode.CTRGladman)};
