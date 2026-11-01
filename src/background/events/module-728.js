// Module 728 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = this && this.__importDefault || function (e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  };
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  const o = r(83);
  const i = n(r(505));
  const a = r(522);
  class s extends o.Writable {
    constructor(e) {
      let t;
      super();
      this._parser = i.default.createStream(false, {
        lowercase: true
      });
      this._parser.on("error", this.destroy.bind(this));
      let r;
      let n;
      let o;
      let s;
      let c;
      let u;
      let l;
      let d;
      let p = 0;
      let f = 0;
      let h = [];
      let m = false;
      let g = false;
      const v = t => {
        const r = {
          RepresentationID: e,
          Number: f,
          Time: p
        };
        return t.replace(/\$(\w+)\$/g, (e, t) => "" + r[t]);
      };
      this._parser.on("opentag", i => {
        switch (i.name) {
          case "mpd":
            p = i.attributes.availabilitystarttime ? new Date(i.attributes.availabilitystarttime).getTime() : 0;
            u = i.attributes.type !== "dynamic";
            break;
          case "period":
            f = 0;
            n = 1000;
            s = 0;
            o = 0;
            c = [];
            l = 0;
            d = a.durationStr(i.attributes.start) || 0;
            break;
          case "segmentlist":
            f = parseInt(i.attributes.startnumber) || f;
            n = parseInt(i.attributes.timescale) || n;
            s = parseInt(i.attributes.duration) || s;
            o = parseInt(i.attributes.presentationtimeoffset) || o;
            break;
          case "segmenttemplate":
            r = i.attributes;
            f = parseInt(i.attributes.startnumber) || f;
            n = parseInt(i.attributes.timescale) || n;
            break;
          case "segmenttimeline":
          case "baseurl":
            t = i.name;
            break;
          case "s":
            h.push({
              duration: parseInt(i.attributes.d),
              repeat: parseInt(i.attributes.r),
              time: parseInt(i.attributes.t)
            });
            break;
          case "adaptationset":
          case "representation":
            l++;
            e ||= i.attributes.id;
            m = i.attributes.id === "" + e;
            if (m) {
              if (d) {
                p += d;
              }
              if (o) {
                p -= o / n * 1000;
              }
              this.emit("starttime", p);
            }
            break;
          case "initialization":
            if (m) {
              this.emit("item", {
                url: c.filter(e => !!e).join("") + i.attributes.sourceurl,
                seq: f,
                init: true,
                duration: 0
              });
            }
            break;
          case "segmenturl":
            if (m) {
              g = true;
              let e = h.shift();
              let t = ((e == null ? undefined : e.duration) || s) / n * 1000;
              this.emit("item", {
                url: c.filter(e => !!e).join("") + i.attributes.media,
                seq: f++,
                duration: t
              });
              p += t;
            }
        }
      });
      const y = () => {
        if (u) {
          this.emit("endlist");
        }
        if (m) {
          this.emit("end");
        } else {
          this.destroy(Error(`Representation '${e}' not found`));
        }
      };
      this._parser.on("closetag", e => {
        switch (e) {
          case "adaptationset":
          case "representation":
            l--;
            if (r && h.length) {
              g = true;
              if (r.initialization) {
                this.emit("item", {
                  url: c.filter(e => !!e).join("") + v(r.initialization),
                  seq: f,
                  init: true,
                  duration: 0
                });
              }
              for (let {
                duration: e,
                repeat: t,
                time: o
              } of h) {
                e = e / n * 1000;
                t = t || 1;
                p = o || p;
                for (let n = 0; n < t; n++) {
                  this.emit("item", {
                    url: c.filter(e => !!e).join("") + v(r.media),
                    seq: f++,
                    duration: e
                  });
                  p += e;
                }
              }
            }
            if (g) {
              this.emit("endearly");
              y();
              this._parser.removeAllListeners();
              this.removeAllListeners("finish");
            }
        }
      });
      this._parser.on("text", e => {
        if (t === "baseurl") {
          c[l] = e;
          t = null;
        }
      });
      this.on("finish", y);
    }
    _write(e, t, r) {
      this._parser.write(e);
      r();
    }
  }
  t.default = s;
};
