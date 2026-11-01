// Module 507 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e) {
    t.fetch = s(e.fetch) && s(e.ReadableStream);
    t.writableStream = s(e.WritableStream);
    t.abortController = s(e.AbortController);
    t.blobConstructor = false;
    try {
      new Blob([new ArrayBuffer(1)]);
      t.blobConstructor = true;
    } catch (e) {}
    var r;
    function n() {
      if (r !== undefined) {
        return r;
      }
      if (e.XMLHttpRequest) {
        r = new e.XMLHttpRequest();
        try {
          r.open("GET", e.XDomainRequest ? "/" : "https://example.com");
        } catch (e) {
          r = null;
        }
      } else {
        r = null;
      }
      return r;
    }
    function o(e) {
      var t = n();
      if (!t) {
        return false;
      }
      try {
        t.responseType = e;
        return t.responseType === e;
      } catch (e) {}
      return false;
    }
    var i = e.ArrayBuffer !== undefined;
    var a = i && s(e.ArrayBuffer.prototype.slice);
    function s(e) {
      return typeof e == "function";
    }
    t.arraybuffer = t.fetch || i && o("arraybuffer");
    t.msstream = !t.fetch && a && o("ms-stream");
    t.mozchunkedarraybuffer = !t.fetch && i && o("moz-chunked-arraybuffer");
    t.overrideMimeType = t.fetch || !!n() && s(n().overrideMimeType);
    t.vbArray = s(e.VBArray);
    r = null;
  }).call(this, r(13));
};
