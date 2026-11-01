// Module 521 [utilities] - Savior Background Script Subsystem
export default function (e, t) {
  const r = new Set(["youtube.com", "www.youtube.com", "m.youtube.com", "music.youtube.com", "gaming.youtube.com"]);
  const n = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/;
  t.getURLVideoID = e => {
    const o = new URL(e);
    let a = o.searchParams.get("v");
    if (n.test(e) && !a) {
      const e = o.pathname.split("/");
      a = o.host === "youtu.be" ? e[1] : e[2];
    } else if (o.hostname && !r.has(o.hostname)) {
      throw Error("Not a YouTube domain");
    }
    if (!a) {
      throw Error("No video id found: " + e);
    }
    a = a.substring(0, 11);
    if (!t.validateID(a)) {
      throw TypeError(`Video id (${a}) does not match expected format (${i.toString()})`);
    }
    return a;
  };
  const o = /^https?:\/\//;
  t.getVideoID = e => {
    if (t.validateID(e)) {
      return e;
    }
    if (o.test(e)) {
      return t.getURLVideoID(e);
    }
    throw Error("No video id found: " + e);
  };
  const i = /^[a-zA-Z0-9-_]{11}$/;
  t.validateID = e => i.test(e);
  t.validateURL = e => {
    try {
      t.getURLVideoID(e);
      return true;
    } catch (e) {
      return false;
    }
  };
};
