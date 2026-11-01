// Module 727 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  const n = r(83);
  class o extends n.Writable {
    constructor() {
      super();
      this._lastLine = "";
      this._seq = 0;
      this._nextItemDuration = null;
      this._nextItemRange = null;
      this._lastItemRangeEnd = 0;
      this.on("finish", () => {
        this._parseLine(this._lastLine);
        this.emit("end");
      });
    }
    _parseAttrList(e) {
      let t;
      let r = {};
      let n = /([A-Z0-9-]+)=(?:"([^"]*?)"|([^,]*?))/g;
      while ((t = n.exec(e)) !== null) {
        r[t[1]] = t[2] || t[3];
      }
      return r;
    }
    _parseRange(e) {
      if (!e) {
        return null;
      }
      let t = e.split("@");
      let r = t[1] ? parseInt(t[1]) : this._lastItemRangeEnd + 1;
      let n = {
        start: r,
        end: r + parseInt(t[0]) - 1
      };
      this._lastItemRangeEnd = n.end;
      return n;
    }
    _parseLine(e) {
      let t = e.match(/^#(EXT[A-Z0-9-]+)(?::(.*))?/);
      if (t) {
        const e = t[1];
        const r = t[2] || "";
        switch (e) {
          case "EXT-X-PROGRAM-DATE-TIME":
            this.emit("starttime", new Date(r).getTime());
            break;
          case "EXT-X-MEDIA-SEQUENCE":
            this._seq = parseInt(r);
            break;
          case "EXT-X-MAP":
            {
              let e = this._parseAttrList(r);
              if (!e.URI) {
                this.destroy(new Error("`EXT-X-MAP` found without required attribute `URI`"));
                return;
              }
              this.emit("item", {
                url: e.URI,
                seq: this._seq,
                init: true,
                duration: 0,
                range: this._parseRange(e.BYTERANGE)
              });
              break;
            }
          case "EXT-X-BYTERANGE":
            this._nextItemRange = this._parseRange(r);
            break;
          case "EXTINF":
            this._nextItemDuration = Math.round(parseFloat(r.split(",")[0]) * 1000);
            break;
          case "EXT-X-ENDLIST":
            this.emit("endlist");
        }
      } else if (!/^#/.test(e) && e.trim()) {
        this.emit("item", {
          url: e.trim(),
          seq: this._seq++,
          duration: this._nextItemDuration,
          range: this._nextItemRange
        });
        this._nextItemRange = null;
      }
    }
    _write(e, t, r) {
      let n = e.toString("utf8").split("\n");
      if (this._lastLine) {
        n[0] = this._lastLine + n[0];
      }
      n.forEach((e, t) => {
        if (!this.destroyed) {
          if (t < n.length - 1) {
            this._parseLine(e);
          } else {
            this._lastLine = e;
          }
        }
      });
      r();
    }
  }
  t.default = o;
};
