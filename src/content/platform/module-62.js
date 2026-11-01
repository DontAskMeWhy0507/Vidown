// Module 62 [platform]
module.exports = function(t,e,r){var n,i,o;t.exports=(o=r(4),r(8),o.mode.OFB=(n=o.lib.BlockCipherMode.extend(),i=n.Encryptor=n.extend({processBlock:function(t,e){var r=this._cipher,n=r.blockSize,i=this._iv,o=this._keystream;i&&(o=this._keystream=i.slice(0),this._iv=void 0),r.encryptBlock(o,0);for(var a=0;a<n;a++)t[e+a]^=o[a]}}),n.Decryptor=i,n),o.mode.OFB)};
