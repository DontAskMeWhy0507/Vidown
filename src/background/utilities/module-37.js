// Module 37 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  const n = ["features", "next", "ranges", "module", "sourceType", "globalReturn"];
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function i(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        o(Object(r), true).forEach(function (t) {
          a(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        o(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function a(e, t, r) {
    if ((t = function (e) {
      var t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (typeof t == "symbol") {
        return t;
      } else {
        return t + "";
      }
    }(t)) in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  (function (e) {
    "use strict";

    const t = ((e, t) => {
      const r = new Uint32Array(69632);
      let n = 0;
      let o = 0;
      while (n < 2597) {
        const i = e[n++];
        if (i < 0) {
          o -= i;
        } else {
          let a = e[n++];
          if (i & 2) {
            a = t[a];
          }
          if (i & 1) {
            r.fill(a, o, o += e[n++]);
          } else {
            r[o++] = a;
          }
        }
      }
      return r;
    })([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 63, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 64, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 58, 2, 7, 2, 6, 0, 4286643967, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191, 0, 929054175, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1885355487, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 69, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 9, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2151677951, 2, 29, 2, 10, 0, 909311, 3, 0, 2, 0, 814743551, 2, 48, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 108, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 9, 2, 18, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 10, 2, 0, 2, 127, 0, 4294960127, 2, 9, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, 0, 12288, 2, 54, 0, 1048577, 2, 84, 2, 14, -1, 2, 14, 0, 131042, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 88, 2, 2, 0, -16, 2, 89, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 2, 18, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 2, 0, 0, 4351, 2, 0, 2, 10, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 10, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, 2, 25, 0, 1638399, 0, 57344, 2, 107, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 65, 2, 6, 2, 12, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 23, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 47, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 125, 0, 4227858432, 2, 20, 2, 43, 2, 36, 2, 17, 2, 37, 2, 17, 2, 124, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 145, 2, 0, 2, 56, 2, 55, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 59, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 133, 0, 4190109695, 2, 52, -2, 2, 134, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 66, 2, 17, 2, 0, 2, 42, -3, 2, 31, -2, 2, 0, 2, 45, 2, 57, 2, 44, 2, 45, 2, 135, 2, 46, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 47, 2, 138, 0, 33259519, 2, 23, 2, 7, 2, 48, -7, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 8323099, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 90, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2, 155, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 58, 2, 98, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 17, 2, 49, 2, 0, 2, 32, -14, 2, 17, 2, 32, -6, 2, 17, 2, 12, -6, 2, 8, 0, 3225419775, -7, 2, 156, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 59, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -22116, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 63, 2, 0, 2, 34, -1, 2, 17, 2, 64, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 65, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 65279, 2, 0, 2, 48, -1, 2, 97, 2, 66, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 68, 2, 67, 0, 33554435, 2, 131, 2, 68, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1, 0, 4294828000, 0, 603979263, 0, 922746880, 0, 3, 0, 4294828001, 0, 602930687, 0, 1879048192, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 69, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 70, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 10, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 48, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 10, 0, 8160, -1, 2, 126, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776, 2, 9, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, -3, 2, 84, 2, 14, -3, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 88, 2, -17, 2, 89, 0, 524157950, 2, 4, 2, 0, 2, 90, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 25, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 0, 4294965179, 0, 7, 2, 0, 2, 10, 2, 93, 2, 10, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 38, 2, 20, 2, 97, 2, 35, 2, 98, 0, 2080440287, 2, 0, 2, 34, 2, 154, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, -3, 2, 107, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 108, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 65, 2, 6, 2, 30, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 17, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 124, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 96, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 125, -1, 2, 20, 2, 43, 2, 37, 2, 17, 0, 3, 2, 17, 2, 124, 2, 21, 2, 126, 2, 127, -1, 0, 2490368, 2, 126, 2, 25, 2, 17, 2, 34, 2, 126, 2, 38, 0, 4294901904, 0, 4718591, 2, 126, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 68, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 49, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 18, -3, 3, 0, 2, 2, 54, 2, 133, 0, 2147549183, 0, 2, -2, 2, 134, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 17, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 57, 2, 49, 0, 1, 2, 135, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, 2, 17, 2, 7, -8, 2, 35, 0, 4294836212, 2, 10, -3, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 9, -55, 3, 0, 17, 2, 42, 2, 8, 2, 17, 2, 0, 2, 8, 2, 17, 2, 58, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 71, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 67583, -1, 2, 105, -2, 0, 8126475, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 2, 145, -187, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 2, 154, -57, 2, 8, 2, 155, -7, 2, 17, 2, 0, 2, 58, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 17, 2, 58, 2, 0, 2, 18, -14, 2, 17, 2, 18, -6, 2, 17, 0, 81919, -6, 2, 8, 0, 3223273399, -7, 2, 156, 3, 0, 6, 2, 124, -1, 3, 0, 2, 0, 2063, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -138, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -28252], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1073741823, 1048575, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 4294901760, 4095, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294770687, 67043583, 1023, 32767, 15, 2047999, 67043343, 67051519, 2147483648, 4294902000, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 4294836224, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 252, 4294967288, 16777215, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 3774873592, 4194303999, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901761]);
    const r = e => !!(t[34816 + (e >>> 5)] >>> e & 1);
    const o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384, 0, 16384, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 16384, 0, 0];
    const s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    const c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    function u(e) {
      if (e <= 127) {
        return s[e] > 0;
      } else {
        return r(e);
      }
    }
    function l(e) {
      if (e <= 127) {
        return c[e] > 0;
      } else {
        return (e => !!(t[0 + (e >>> 5)] >>> e & 1))(e) || e === 8204 || e === 8205;
      }
    }
    function d(e) {
      e.column++;
      return e.currentChar = e.source.charCodeAt(++e.index);
    }
    function p(e) {
      const t = e.currentChar;
      if ((t & 64512) != 55296) {
        return 0;
      }
      const r = e.source.charCodeAt(e.index + 1);
      if ((r & 64512) != 56320) {
        return 0;
      } else {
        return 65536 + ((t & 1023) << 10) + (r & 1023);
      }
    }
    function f(e, t) {
      e.currentChar = e.source.charCodeAt(++e.index);
      e.flags |= 1;
      if (!(t & 4)) {
        e.column = 0;
        e.line++;
      }
    }
    function h(e) {
      e.flags |= 1;
      e.currentChar = e.source.charCodeAt(++e.index);
      e.column = 0;
      e.line++;
    }
    function m(e) {
      return e === 160 || e === 65279 || e === 133 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 8201 || e === 65519;
    }
    function g(e) {
      if (e < 65) {
        return e - 48;
      } else {
        return e - 65 + 10 & 15;
      }
    }
    function v(e) {
      switch (e) {
        case 134283266:
          return "NumericLiteral";
        case 134283267:
          return "StringLiteral";
        case 86021:
        case 86022:
          return "BooleanLiteral";
        case 86023:
          return "NullLiteral";
        case 65540:
          return "RegularExpression";
        case 67174408:
        case 67174409:
        case 132:
          return "TemplateLiteral";
        default:
          if (~e & 143360) {
            if (~e & 4096) {
              return "Punctuator";
            } else {
              return "Keyword";
            }
          } else {
            return "Identifier";
          }
      }
    }
    const y = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
    function _(e, t, r, n, o, i) {
      if (n & 2) {
        e.report(0);
      }
      return b(e, t, r, o, i);
    }
    function b(e, t, r, n, i) {
      const {
        index: a
      } = e;
      e.tokenIndex = e.index;
      e.tokenLine = e.line;
      e.tokenColumn = e.column;
      while (e.index < e.end) {
        if (o[e.currentChar] & 8) {
          const r = e.currentChar === 13;
          h(e);
          if (r && e.index < e.end && e.currentChar === 10) {
            e.currentChar = t.charCodeAt(++e.index);
          }
          break;
        }
        if ((e.currentChar ^ 8232) <= 1) {
          h(e);
          break;
        }
        d(e);
        e.tokenIndex = e.index;
        e.tokenLine = e.line;
        e.tokenColumn = e.column;
      }
      if (e.options.onComment) {
        const r = {
          start: {
            line: i.line,
            column: i.column
          },
          end: {
            line: e.tokenLine,
            column: e.tokenColumn
          }
        };
        e.options.onComment(y[n & 255], t.slice(a, e.tokenIndex), i.index, e.tokenIndex, r);
      }
      return r | 1;
    }
    function w(e, t, r) {
      const {
        index: n
      } = e;
      while (e.index < e.end) {
        if (e.currentChar < 43) {
          let i = false;
          while (e.currentChar === 42) {
            if (!i) {
              r &= -5;
              i = true;
            }
            if (d(e) === 47) {
              d(e);
              if (e.options.onComment) {
                const r = {
                  start: {
                    line: e.tokenLine,
                    column: e.tokenColumn
                  },
                  end: {
                    line: e.line,
                    column: e.column
                  }
                };
                e.options.onComment(y[1], t.slice(n, e.index - 2), n - 2, e.index, r);
              }
              e.tokenIndex = e.index;
              e.tokenLine = e.line;
              e.tokenColumn = e.column;
              return r;
            }
          }
          if (i) {
            continue;
          }
          if (o[e.currentChar] & 8) {
            if (e.currentChar === 13) {
              r |= 5;
              h(e);
            } else {
              f(e, r);
              r = r & -5 | 1;
            }
          } else {
            d(e);
          }
        } else if ((e.currentChar ^ 8232) <= 1) {
          r = r & -5 | 1;
          h(e);
        } else {
          r &= -5;
          d(e);
        }
      }
      e.report(18);
    }
    const E = {
      0: "Unexpected token",
      30: "Unexpected token: '%0'",
      1: "Octal escape sequences are not allowed in strict mode",
      2: "Octal escape sequences are not allowed in template strings",
      3: "\\8 and \\9 are not allowed in template strings",
      4: "Private identifier #%0 is not defined",
      5: "Illegal Unicode escape sequence",
      6: "Invalid code point %0",
      7: "Invalid hexadecimal escape sequence",
      9: "Octal literals are not allowed in strict mode",
      8: "Decimal integer literals with a leading zero are forbidden in strict mode",
      10: "Expected number in radix %0",
      153: "Invalid left-hand side assignment to a destructible right-hand side",
      11: "Non-number found after exponent indicator",
      12: "Invalid BigIntLiteral",
      13: "No identifiers allowed directly after numeric literal",
      14: "Escapes \\8 or \\9 are not syntactically valid escapes",
      15: "Escapes \\8 or \\9 are not allowed in strict mode",
      16: "Unterminated string literal",
      17: "Unterminated template literal",
      18: "Multiline comment was not closed properly",
      19: "The identifier contained dynamic unicode escape that was not closed",
      20: "Illegal character '%0'",
      21: "Missing hexadecimal digits",
      22: "Invalid implicit octal",
      23: "Invalid line break in string literal",
      24: "Only unicode escapes are legal in identifier names",
      25: "Expected '%0'",
      26: "Invalid left-hand side in assignment",
      27: "Invalid left-hand side in async arrow",
      28: "Calls to super must be in the \"constructor\" method of a class expression or class declaration that has a superclass",
      29: "Member access on super must be in a method",
      31: "Await expression not allowed in formal parameter",
      32: "Yield expression not allowed in formal parameter",
      95: "Unexpected token: 'escaped keyword'",
      33: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
      125: "Async functions can only be declared at the top level or inside a block",
      34: "Unterminated regular expression",
      35: "Unexpected regular expression flag",
      36: "Duplicate regular expression flag '%0'",
      37: "%0 functions must have exactly %1 argument%2",
      38: "Setter function argument must not be a rest parameter",
      39: "%0 declaration must have a name in this context",
      40: "Function name may not contain any reserved words or be eval or arguments in strict mode",
      41: "The rest operator is missing an argument",
      42: "A getter cannot be a generator",
      43: "A setter cannot be a generator",
      44: "A computed property name must be followed by a colon or paren",
      136: "Object literal keys that are strings or numbers must be a method or have a colon",
      46: "Found `* async x(){}` but this should be `async * x(){}`",
      45: "Getters and setters can not be generators",
      47: "'%0' can not be generator method",
      48: "No line break is allowed after '=>'",
      49: "The left-hand side of the arrow can only be destructed through assignment",
      50: "The binding declaration is not destructible",
      51: "Async arrow can not be followed by new expression",
      52: "Classes may not have a static property named 'prototype'",
      53: "Class constructor may not be a %0",
      54: "Duplicate constructor method in class",
      55: "Invalid increment/decrement operand",
      56: "Invalid use of `new` keyword on an increment/decrement expression",
      57: "`=>` is an invalid assignment target",
      58: "Rest element may not have a trailing comma",
      59: "Missing initializer in %0 declaration",
      60: "'for-%0' loop head declarations can not have an initializer",
      61: "Invalid left-hand side in for-%0 loop: Must have a single binding",
      62: "Invalid shorthand property initializer",
      63: "Property name __proto__ appears more than once in object literal",
      64: "Let is disallowed as a lexically bound name",
      65: "Invalid use of '%0' inside new expression",
      66: "Illegal 'use strict' directive in function with non-simple parameter list",
      67: "Identifier \"let\" disallowed as left-hand side expression in strict mode",
      68: "Illegal continue statement",
      69: "Illegal break statement",
      70: "Cannot have `let[...]` as a var name in strict mode",
      71: "Invalid destructuring assignment target",
      72: "Rest parameter may not have a default initializer",
      73: "The rest argument must the be last parameter",
      74: "Invalid rest argument",
      76: "In strict mode code, functions can only be declared at top level or inside a block",
      77: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
      78: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
      79: "Class declaration can't appear in single-statement context",
      80: "Invalid left-hand side in for-%0",
      81: "Invalid assignment in for-%0",
      82: "for await (... of ...) is only valid in async functions and async generators",
      83: "The first token after the template expression should be a continuation of the template",
      85: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
      84: "`let \n [` is a restricted production at the start of a statement",
      86: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
      87: "Catch clause parameter does not support default values",
      88: "Missing catch or finally after try",
      89: "More than one default clause in switch statement",
      90: "Illegal newline after throw",
      91: "Strict mode code may not include a with statement",
      92: "Illegal return statement",
      93: "The left hand side of the for-header binding declaration is not destructible",
      94: "new.target only allowed within functions or static blocks",
      96: "'#' not followed by identifier",
      102: "Invalid keyword",
      101: "Can not use 'let' as a class name",
      100: "'A lexical declaration can't define a 'let' binding",
      99: "Can not use `let` as variable name in strict mode",
      97: "'%0' may not be used as an identifier in this context",
      98: "Await is only valid in async functions",
      103: "The %0 keyword can only be used with the module goal",
      104: "Unicode codepoint must not be greater than 0x10FFFF",
      105: "%0 source must be string",
      106: "Only a identifier or string can be used to indicate alias",
      107: "Only '*' or '{...}' can be imported after default",
      108: "'import defer' must be followed by a namespace import",
      109: "'import source' must be followed by a default import",
      110: "Trailing decorator may be followed by method",
      111: "Decorators can't be used with a constructor",
      112: "Can not use `await` as identifier in module or async func",
      113: "Can not use `await` as identifier in module",
      114: "HTML comments are only allowed with web compatibility (Annex B)",
      115: "The identifier 'let' must not be in expression position in strict mode",
      116: "Cannot assign to `eval` and `arguments` in strict mode",
      117: "The left-hand side of a for-of loop may not start with 'let'",
      118: "Block body arrows can not be immediately invoked without a group",
      119: "Block body arrows can not be immediately accessed without a group",
      120: "Unexpected strict mode reserved word",
      121: "Unexpected eval or arguments in strict mode",
      122: "Decorators must not be followed by a semicolon",
      123: "Calling delete on expression not allowed in strict mode",
      124: "Pattern can not have a tail",
      126: "Can not have a `yield` expression on the left side of a ternary",
      127: "An arrow function can not have a postfix update operator",
      128: "Invalid object literal key character after generator star",
      129: "Private fields can not be deleted",
      131: "Classes may not have a field called constructor",
      130: "Classes may not have a private element named constructor",
      132: "A class field initializer or static block may not contain arguments",
      133: "Generators can only be declared at the top level or inside a block",
      134: "Async methods are a restricted production and cannot have a newline following it",
      135: "Unexpected character after object literal property name",
      137: "Invalid key token",
      138: "Label '%0' has already been declared",
      139: "continue statement must be nested within an iteration statement",
      140: "Undefined label '%0'",
      141: "Trailing comma is disallowed inside import(...) arguments",
      142: "Invalid binding in JSON import",
      143: "import() requires exactly one argument",
      144: "Cannot use new with import(...)",
      145: "... is not allowed in import()",
      146: "Expected '=>'",
      147: "Duplicate binding '%0'",
      148: "Duplicate private identifier #%0",
      149: "Cannot export a duplicate name '%0'",
      152: "Duplicate %0 for-binding",
      150: "Exported binding '%0' needs to refer to a top-level declared variable",
      151: "Unexpected private field",
      155: "Numeric separators are not allowed at the end of numeric literals",
      154: "Only one underscore is allowed as numeric separator",
      156: "JSX value should be either an expression or a quoted JSX text",
      157: "Expected corresponding JSX closing tag for %0",
      158: "Adjacent JSX elements must be wrapped in an enclosing tag",
      159: "JSX attributes must only be assigned a non-empty 'expression'",
      160: "'%0' has already been declared",
      161: "'%0' shadowed a catch clause binding",
      162: "Dot property must be an identifier",
      163: "Encountered invalid input after spread/rest argument",
      164: "Catch without try",
      165: "Finally without try",
      166: "Expected corresponding closing tag for JSX fragment",
      167: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
      168: "Invalid tagged template on optional chain",
      169: "Invalid optional chain from super property",
      170: "Invalid optional chain from new expression",
      171: "Cannot use \"import.meta\" outside a module",
      172: "Leading decorators must be attached to a class declaration",
      173: "An export name cannot include a lone surrogate",
      174: "A string literal cannot be used as an exported binding without `from`",
      175: "Private fields can't be accessed on super",
      176: "The only valid meta property for import is 'import.meta'",
      177: "'import.meta' must not contain escaped characters",
      178: "cannot use \"await\" as identifier inside an async function",
      179: "cannot use \"await\" in static blocks",
      180: "Unexpected token `}`. Did you mean `&rbrace;` or `{'}'}`?",
      181: "Unexpected token `>`. Did you mean `&gt;` or `{'>'}`?"
    };
    class D extends SyntaxError {
      constructor(e, t, r, ...n) {
        const o = E[r].replaceAll(/%(\d+)/g, (e, t) => n[t]);
        super("[" + e.line + ":" + e.column + "-" + t.line + ":" + t.column + "]: " + o);
        a(this, "start", undefined);
        a(this, "end", undefined);
        a(this, "range", undefined);
        a(this, "loc", undefined);
        a(this, "description", undefined);
        this.start = e.index;
        this.end = t.index;
        this.range = [e.index, t.index];
        this.loc = {
          start: {
            line: e.line,
            column: e.column
          },
          end: {
            line: t.line,
            column: t.column
          }
        };
        this.description = o;
      }
    }
    const T = ["end of source", "identifier", "number", "string", "regular expression", "false", "true", "null", "template continuation", "template tail", "=>", "(", "{", ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", "\"", "++", "--", "=", "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=", "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof", "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">", "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch", "class", "continue", "debugger", "default", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "new", "return", "super", "switch", "this", "throw", "try", "while", "with", "implements", "interface", "package", "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor", "get", "set", "accessor", "from", "of", "using", "enum", "eval", "arguments", "escaped keyword", "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral", "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template", "@", "target", "meta", "LineFeed", "Escaped", "JSXText"];
    const k = new Map([["this", 86111], ["function", 86104], ["if", 20569], ["return", 20572], ["var", 86088], ["else", 20563], ["for", 20567], ["new", 86107], ["in", 8673330], ["typeof", 16863275], ["while", 20578], ["case", 20556], ["break", 20555], ["try", 20577], ["catch", 20557], ["delete", 16863276], ["throw", 86112], ["switch", 86110], ["continue", 20559], ["default", 20561], ["instanceof", 8411187], ["do", 20562], ["void", 16863277], ["finally", 20566], ["async", 209005], ["await", 209006], ["class", 86094], ["const", 86090], ["constructor", 209007], ["debugger", 20560], ["export", 20564], ["extends", 20565], ["false", 86021], ["from", 209011], ["get", 209008], ["implements", 36964], ["import", 86106], ["interface", 36965], ["let", 241737], ["null", 86023], ["of", 471156], ["using", 209013], ["package", 36966], ["private", 36967], ["protected", 36968], ["public", 36969], ["set", 209009], ["static", 36970], ["super", 86109], ["true", 86022], ["with", 20579], ["yield", 241771], ["enum", 86134], ["eval", 537079927], ["as", 77932], ["arguments", 537079928], ["target", 209030], ["meta", 209031], ["accessor", 209010]]);
    const A = [...k.keys()].map(e => e.length);
    const C = Math.min(...A);
    const x = Math.max(...A);
    function S(e, t, r) {
      while (c[d(e)]);
      e.tokenValue = e.source.slice(e.tokenIndex, e.index);
      if (e.currentChar === 92 || e.currentChar > 126) {
        return I(e, t, 0, r);
      }
      const o = e.index - e.tokenIndex;
      if (o < C || o > x) {
        return 208897;
      } else {
        return k.get(e.tokenValue) ?? 208897;
      }
    }
    function O(e, t) {
      const r = R(e);
      if (!u(r)) {
        e.report(5);
      }
      e.tokenValue = String.fromCodePoint(r);
      return I(e, t, 1, o[r] & 4);
    }
    function I(e, t, r, n) {
      let i = e.index;
      while (e.index < e.end) {
        if (e.currentChar === 92) {
          e.tokenValue += e.source.slice(i, e.index);
          r = 1;
          const t = R(e);
          if (!l(t)) {
            e.report(5);
          }
          n = n && o[t] & 4;
          e.tokenValue += String.fromCodePoint(t);
          i = e.index;
        } else {
          const t = p(e);
          if (t > 0) {
            if (!l(t)) {
              e.report(20, String.fromCodePoint(t));
            }
            e.currentChar = t;
            e.index++;
            e.column++;
          } else if (!l(e.currentChar)) {
            break;
          }
          d(e);
        }
      }
      if (e.index <= e.end) {
        e.tokenValue += e.source.slice(i, e.index);
      }
      const {
        length: a
      } = e.tokenValue;
      if (n && a >= C && a <= x) {
        const n = k.get(e.tokenValue);
        if (n === undefined) {
          return (r ? -2147483648 : 0) | 208897;
        } else if (r) {
          if (n === 209006) {
            if (t & 2050) {
              return -2147483527;
            } else {
              return n | -2147483648;
            }
          } else if (t & 1) {
            if (n === 36970) {
              return -2147483526;
            } else if (~n & 36864) {
              if (~n & 20480) {
                return -2147274629;
              } else if (t & 262144 && !(t & 8)) {
                return n | -2147483648;
              } else {
                return -2147483527;
              }
            } else {
              return -2147483526;
            }
          } else if (!(t & 262144) || t & 8 || ~n & 20480) {
            if (n === 241771) {
              if (t & 262144) {
                return -2147274629;
              } else if (t & 1024) {
                return -2147483527;
              } else {
                return n | -2147483648;
              }
            } else if (n === 209005) {
              return -2147274629;
            } else if (~n & 36864) {
              return -2147483527;
            } else {
              return n | 12288 | -2147483648;
            }
          } else {
            return n | -2147483648;
          }
        } else {
          return n;
        }
      }
      return (r ? -2147483648 : 0) | 208897;
    }
    function L(e) {
      let t = d(e);
      if (t === 92) {
        return 131;
      }
      const r = p(e);
      if (r) {
        t = r;
      }
      if (!u(t)) {
        e.report(96);
      }
      return 131;
    }
    function R(e) {
      if (e.source.charCodeAt(e.index + 1) !== 117) {
        e.report(5);
      }
      e.currentChar = e.source.charCodeAt(e.index += 2);
      e.column += 2;
      return function (e) {
        let t = 0;
        const r = e.currentChar;
        if (r === 123) {
          const r = e.index - 2;
          while (o[d(e)] & 64) {
            t = t << 4 | g(e.currentChar);
            if (t > 1114111) {
              throw new D({
                index: r,
                line: e.line,
                column: e.column
              }, e.currentLocation, 104);
            }
          }
          if (e.currentChar !== 125) {
            throw new D({
              index: r,
              line: e.line,
              column: e.column
            }, e.currentLocation, 7);
          }
          d(e);
          return t;
        }
        if (!(o[r] & 64)) {
          e.report(7);
        }
        const n = e.source.charCodeAt(e.index + 1);
        if (!(o[n] & 64)) {
          e.report(7);
        }
        const i = e.source.charCodeAt(e.index + 2);
        if (!(o[i] & 64)) {
          e.report(7);
        }
        const a = e.source.charCodeAt(e.index + 3);
        if (!(o[a] & 64)) {
          e.report(7);
        }
        t = g(r) << 12 | g(n) << 8 | g(i) << 4 | g(a);
        e.currentChar = e.source.charCodeAt(e.index += 4);
        e.column += 4;
        return t;
      }(e);
    }
    function P(e, t, r) {
      let n = e.currentChar;
      let i = 0;
      let a = 9;
      let s = r & 64 ? 0 : 1;
      let c = 0;
      let l = 0;
      if (r & 64) {
        i = "." + B(e, n);
        n = e.currentChar;
        if (n === 110) {
          e.report(12);
        }
      } else {
        if (n === 48) {
          n = d(e);
          if ((n | 32) == 120) {
            r = 136;
            n = d(e);
            while (o[n] & 4160) {
              if (n !== 95) {
                l = 1;
                i = i * 16 + g(n);
                c++;
                n = d(e);
              } else {
                if (!l) {
                  e.report(154);
                }
                l = 0;
                n = d(e);
              }
            }
            if (c === 0 || !l) {
              e.report(c === 0 ? 21 : 155);
            }
          } else if ((n | 32) == 111) {
            r = 132;
            n = d(e);
            while (o[n] & 4128) {
              if (n !== 95) {
                l = 1;
                i = i * 8 + (n - 48);
                c++;
                n = d(e);
              } else {
                if (!l) {
                  e.report(154);
                }
                l = 0;
                n = d(e);
              }
            }
            if (c === 0 || !l) {
              e.report(c === 0 ? 0 : 155);
            }
          } else if ((n | 32) == 98) {
            r = 130;
            n = d(e);
            while (o[n] & 4224) {
              if (n !== 95) {
                l = 1;
                i = i * 2 + (n - 48);
                c++;
                n = d(e);
              } else {
                if (!l) {
                  e.report(154);
                }
                l = 0;
                n = d(e);
              }
            }
            if (c === 0 || !l) {
              e.report(c === 0 ? 0 : 155);
            }
          } else if (o[n] & 32) {
            if (t & 1) {
              e.report(1);
            }
            r = 1;
            while (o[n] & 16) {
              if (o[n] & 512) {
                r = 32;
                s = 0;
                break;
              }
              i = i * 8 + (n - 48);
              n = d(e);
            }
          } else if (o[n] & 512) {
            if (t & 1) {
              e.report(1);
            }
            e.flags |= 64;
            r = 32;
          } else if (n === 95) {
            e.report(0);
          }
        }
        if (r & 48) {
          if (s) {
            while (a >= 0 && o[n] & 4112) {
              if (n !== 95) {
                l = 0;
                i = i * 10 + (n - 48);
                n = d(e);
                --a;
              } else {
                n = d(e);
                if (n === 95 || r & 32) {
                  throw new D(e.currentLocation, {
                    index: e.index + 1,
                    line: e.line,
                    column: e.column
                  }, 154);
                }
                l = 1;
              }
            }
            if (l) {
              throw new D(e.currentLocation, {
                index: e.index + 1,
                line: e.line,
                column: e.column
              }, 155);
            }
            if (a >= 0 && !u(n) && n !== 46) {
              e.tokenValue = i;
              if (e.options.raw) {
                e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
              }
              return 134283266;
            }
          }
          i += B(e, n);
          n = e.currentChar;
          if (n === 46) {
            if (d(e) === 95) {
              e.report(0);
            }
            r = 64;
            i += "." + B(e, e.currentChar);
            n = e.currentChar;
          }
        }
      }
      const p = e.index;
      let f = 0;
      if (n === 110 && r & 128) {
        f = 1;
        n = d(e);
      } else if ((n | 32) == 101) {
        n = d(e);
        if (o[n] & 256) {
          n = d(e);
        }
        const {
          index: t
        } = e;
        if (!(o[n] & 16)) {
          e.report(11);
        }
        i += e.source.substring(p, t) + B(e, n);
        n = e.currentChar;
      }
      if (e.index < e.end && o[n] & 16 || u(n)) {
        e.report(13);
      }
      if (f) {
        e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
        e.tokenValue = BigInt(e.tokenRaw.slice(0, -1).replaceAll("_", ""));
        return 134283389;
      } else {
        e.tokenValue = r & 15 ? i : r & 32 ? parseFloat(e.source.substring(e.tokenIndex, e.index)) : +i;
        if (e.options.raw) {
          e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
        }
        return 134283266;
      }
    }
    function B(e, t) {
      let r = 0;
      let n = e.index;
      let i = "";
      while (o[t] & 4112) {
        if (t !== 95) {
          r = 0;
          t = d(e);
        } else {
          const {
            index: o
          } = e;
          if ((t = d(e)) === 95) {
            throw new D(e.currentLocation, {
              index: e.index + 1,
              line: e.line,
              column: e.column
            }, 154);
          }
          r = 1;
          i += e.source.substring(n, o);
          n = e.index;
        }
      }
      if (r) {
        throw new D(e.currentLocation, {
          index: e.index + 1,
          line: e.line,
          column: e.column
        }, 155);
      }
      return i + e.source.substring(n, e.index);
    }
    var M;
    var F;
    function U(e) {
      const t = e.index;
      let r = M.Empty;
      e: while (true) {
        const t = e.currentChar;
        d(e);
        if (r & M.Escape) {
          r &= ~M.Escape;
        } else {
          switch (t) {
            case 47:
              if (r) {
                break;
              }
              break e;
            case 92:
              r |= M.Escape;
              break;
            case 91:
              r |= M.Class;
              break;
            case 93:
              r &= M.Escape;
          }
        }
        if (t === 13 || t === 10 || t === 8232 || t === 8233) {
          e.report(34);
        }
        if (e.index >= e.source.length) {
          return e.report(34);
        }
      }
      const n = e.index - 1;
      let o = F.Empty;
      let i = e.currentChar;
      const {
        index: a
      } = e;
      while (l(i)) {
        switch (i) {
          case 103:
            if (o & F.Global) {
              e.report(36, "g");
            }
            o |= F.Global;
            break;
          case 105:
            if (o & F.IgnoreCase) {
              e.report(36, "i");
            }
            o |= F.IgnoreCase;
            break;
          case 109:
            if (o & F.Multiline) {
              e.report(36, "m");
            }
            o |= F.Multiline;
            break;
          case 117:
            if (o & F.Unicode) {
              e.report(36, "u");
            }
            if (o & F.UnicodeSets) {
              e.report(36, "vu");
            }
            o |= F.Unicode;
            break;
          case 118:
            if (o & F.Unicode) {
              e.report(36, "uv");
            }
            if (o & F.UnicodeSets) {
              e.report(36, "v");
            }
            o |= F.UnicodeSets;
            break;
          case 121:
            if (o & F.Sticky) {
              e.report(36, "y");
            }
            o |= F.Sticky;
            break;
          case 115:
            if (o & F.DotAll) {
              e.report(36, "s");
            }
            o |= F.DotAll;
            break;
          case 100:
            if (o & F.Indices) {
              e.report(36, "d");
            }
            o |= F.Indices;
            break;
          default:
            e.report(35);
        }
        i = d(e);
      }
      const s = e.source.slice(a, e.index);
      const c = e.source.slice(t, n);
      e.tokenRegExp = {
        pattern: c,
        flags: s
      };
      if (e.options.raw) {
        e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
      }
      e.tokenValue = function (e, t, r) {
        try {
          return new RegExp(t, r);
        } catch (t) {
          if (!e.options.validateRegex) {
            return null;
          }
          e.report(34);
        }
      }(e, c, s);
      return 65540;
    }
    function N(e, t, r) {
      const {
        index: n
      } = e;
      let i = "";
      let a = d(e);
      let s = e.index;
      while (!(o[a] & 8)) {
        if (a === r) {
          i += e.source.slice(s, e.index);
          d(e);
          if (e.options.raw) {
            e.tokenRaw = e.source.slice(n, e.index);
          }
          e.tokenValue = i;
          return 134283267;
        }
        if (~a & 8 || a !== 92) {
          if (a === 8232 || a === 8233) {
            e.column = -1;
            e.line++;
          }
        } else {
          i += e.source.slice(s, e.index);
          a = d(e);
          if (a < 127 || a === 8232 || a === 8233) {
            const r = j(e, t, a);
            if (r >= 0) {
              i += String.fromCodePoint(r);
            } else {
              q(e, r, 0);
            }
          } else {
            i += String.fromCodePoint(a);
          }
          s = e.index + 1;
        }
        if (e.index >= e.end) {
          e.report(16);
        }
        a = d(e);
      }
      e.report(16);
    }
    function j(e, t, r, n = 0) {
      switch (r) {
        case 98:
          return 8;
        case 102:
          return 12;
        case 114:
          return 13;
        case 110:
          return 10;
        case 116:
          return 9;
        case 118:
          return 11;
        case 13:
          if (e.index < e.end) {
            const t = e.source.charCodeAt(e.index + 1);
            if (t === 10) {
              e.index = e.index + 1;
              e.currentChar = t;
            }
          }
        case 10:
        case 8232:
        case 8233:
          e.column = -1;
          e.line++;
          return -1;
        case 48:
        case 49:
        case 50:
        case 51:
          {
            let i = r - 48;
            let a = e.index + 1;
            let s = e.column + 1;
            if (a < e.end) {
              const r = e.source.charCodeAt(a);
              if (o[r] & 32) {
                if (t & 1 || n) {
                  return -2;
                }
                e.currentChar = r;
                i = i << 3 | r - 48;
                a++;
                s++;
                if (a < e.end) {
                  const t = e.source.charCodeAt(a);
                  if (o[t] & 32) {
                    e.currentChar = t;
                    i = i << 3 | t - 48;
                    a++;
                    s++;
                  }
                }
                e.flags |= 64;
              } else if (i !== 0 || o[r] & 512) {
                if (t & 1 || n) {
                  return -2;
                }
                e.flags |= 64;
              }
              e.index = a - 1;
              e.column = s - 1;
            }
            return i;
          }
        case 52:
        case 53:
        case 54:
        case 55:
          {
            if (n || t & 1) {
              return -2;
            }
            let i = r - 48;
            const a = e.index + 1;
            const s = e.column + 1;
            if (a < e.end) {
              const t = e.source.charCodeAt(a);
              if (o[t] & 32) {
                i = i << 3 | t - 48;
                e.currentChar = t;
                e.index = a;
                e.column = s;
              }
            }
            e.flags |= 64;
            return i;
          }
        case 120:
          {
            const t = d(e);
            if (!(o[t] & 64)) {
              return -4;
            }
            const r = g(t);
            const n = d(e);
            if (o[n] & 64) {
              return r << 4 | g(n);
            } else {
              return -4;
            }
          }
        case 117:
          {
            const t = d(e);
            if (e.currentChar === 123) {
              let t = 0;
              let r = 0;
              while (o[d(e)] & 64) {
                t = t << 4 | g(e.currentChar);
                if (t > 1114111) {
                  return -5;
                }
                r++;
              }
              if (r === 0 || e.currentChar < 1 || e.currentChar !== 125) {
                return -4;
              } else {
                return t;
              }
            }
            {
              if (!(o[t] & 64)) {
                return -4;
              }
              const r = e.source.charCodeAt(e.index + 1);
              if (!(o[r] & 64)) {
                return -4;
              }
              const n = e.source.charCodeAt(e.index + 2);
              if (!(o[n] & 64)) {
                return -4;
              }
              const i = e.source.charCodeAt(e.index + 3);
              if (o[i] & 64) {
                e.index += 3;
                e.column += 3;
                e.currentChar = e.source.charCodeAt(e.index);
                return g(t) << 12 | g(r) << 8 | g(n) << 4 | g(i);
              } else {
                return -4;
              }
            }
          }
        case 56:
        case 57:
          if (n || t & 1) {
            return -3;
          }
          e.flags |= 4096;
        default:
          return r;
      }
    }
    function q(e, t, r) {
      switch (t) {
        case -1:
          return;
        case -2:
          e.report(r ? 2 : 1);
        case -3:
          e.report(r ? 3 : 14);
        case -4:
          e.report(7);
        case -5:
          e.report(104);
      }
    }
    function H(e, t) {
      const {
        index: r
      } = e;
      let n = 67174409;
      let o = "";
      let i = false;
      let a = d(e);
      while (a !== 96) {
        if (a === 36 && e.source.charCodeAt(e.index + 1) === 123) {
          d(e);
          n = 67174408;
          break;
        }
        if (a === 92) {
          a = d(e);
          if (a === 13) {
            i = true;
          }
          if (a > 126) {
            o += String.fromCodePoint(a);
          } else {
            const {
              index: r,
              line: s,
              column: c
            } = e;
            const u = j(e, t | 1, a, 1);
            if (u >= 0) {
              o += String.fromCodePoint(u);
            } else {
              if (u !== -1 && t & 64) {
                e.index = r;
                e.line = s;
                e.column = c;
                o = null;
                a = V(e, a, () => {
                  i = true;
                });
                if (a < 0) {
                  n = 67174408;
                }
                break;
              }
              q(e, u, 1);
            }
          }
        } else if (e.index < e.end) {
          if (a === 13) {
            i = true;
          }
          if (a === 13 && e.source.charCodeAt(e.index + 1) === 10) {
            e.currentChar = e.source.charCodeAt(++e.index);
          }
          if (a === 13) {
            a = 10;
          }
          if ((a & 83) < 3 && a === 10 || (a ^ 8232) <= 1) {
            e.column = -1;
            e.line++;
          }
          o += String.fromCodePoint(a);
        }
        if (e.index >= e.end) {
          e.report(17);
        }
        a = d(e);
      }
      d(e);
      e.tokenValue = o;
      const s = e.source.slice(r + 1, e.index - (n === 67174409 ? 1 : 2));
      e.tokenRaw = i ? s.replaceAll(/\r\n?/g, "\n") : s;
      return n;
    }
    function V(e, t, r) {
      while (t !== 96) {
        switch (t) {
          case 13:
            r();
            break;
          case 36:
            {
              const r = e.index + 1;
              if (r < e.end && e.source.charCodeAt(r) === 123) {
                e.index = r;
                e.column++;
                return -t;
              }
              break;
            }
          case 10:
          case 8232:
          case 8233:
            e.column = -1;
            e.line++;
        }
        if (e.index >= e.end) {
          e.report(17);
        }
        t = d(e);
      }
      return t;
    }
    function W(e, t) {
      if (e.index >= e.end) {
        e.report(0);
      }
      e.index--;
      e.column--;
      return H(e, t);
    }
    (function (e) {
      e[e.Empty = 0] = "Empty";
      e[e.Escape = 1] = "Escape";
      e[e.Class = 2] = "Class";
    })(M ||= {});
    (function (e) {
      e[e.Empty = 0] = "Empty";
      e[e.IgnoreCase = 1] = "IgnoreCase";
      e[e.Global = 2] = "Global";
      e[e.Multiline = 4] = "Multiline";
      e[e.Unicode = 16] = "Unicode";
      e[e.Sticky = 8] = "Sticky";
      e[e.DotAll = 32] = "DotAll";
      e[e.Indices = 64] = "Indices";
      e[e.UnicodeSets = 128] = "UnicodeSets";
    })(F ||= {});
    const z = [129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128, 130, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 16842798, 134283267, 131, 208897, 8391477, 8390213, 134283267, 67174411, 16, 8391476, 25233968, 18, 25233969, 67108877, 8457014, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 21, 1074790417, 8456256, 1077936155, 8390721, 22, 133, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 69271571, 137, 20, 8389959, 208897, 132, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8389702, 1074790415, 16842799, 129];
    function Y(e, t) {
      e.flags = (e.flags | 1) ^ 1;
      e.startIndex = e.index;
      e.startColumn = e.column;
      e.startLine = e.line;
      e.setToken(G(e, t, 0));
    }
    function G(e, t, n) {
      const o = e.index === 0;
      const {
        source: i
      } = e;
      while (e.index < e.end) {
        e.tokenIndex = e.index;
        e.tokenColumn = e.column;
        e.tokenLine = e.line;
        let a = e.currentChar;
        if (a <= 126) {
          const r = z[a];
          switch (r) {
            case 67174411:
            case 16:
            case 2162700:
            case 1074790415:
            case 69271571:
            case 20:
            case 21:
            case 1074790417:
            case 18:
            case 16842799:
            case 133:
            case 129:
              d(e);
              return r;
            case 208897:
              return S(e, t, 0);
            case 4096:
              return S(e, t, 1);
            case 134283266:
              return P(e, t, 144);
            case 134283267:
              return N(e, t, a);
            case 132:
              return H(e, t);
            case 137:
              return O(e, t);
            case 131:
              return L(e);
            case 128:
              d(e);
              break;
            case 130:
              n |= 5;
              h(e);
              break;
            case 136:
              f(e, n);
              n = n & -5 | 1;
              break;
            case 8456256:
              {
                const r = d(e);
                if (e.index < e.end) {
                  if (r === 60) {
                    if (e.index < e.end && d(e) === 61) {
                      d(e);
                      return 4194332;
                    } else {
                      return 8390978;
                    }
                  }
                  if (r === 61) {
                    d(e);
                    return 8390718;
                  }
                  if (r === 33) {
                    const r = e.index + 1;
                    if (r + 1 < e.end && i.charCodeAt(r) === 45 && i.charCodeAt(r + 1) == 45) {
                      e.column += 3;
                      e.currentChar = i.charCodeAt(e.index += 3);
                      n = _(e, i, n, t, 2, e.tokenStart);
                      continue;
                    }
                    return 8456256;
                  }
                }
                return 8456256;
              }
            case 1077936155:
              {
                d(e);
                const t = e.currentChar;
                if (t === 61) {
                  if (d(e) === 61) {
                    d(e);
                    return 8390458;
                  } else {
                    return 8390460;
                  }
                } else if (t === 62) {
                  d(e);
                  return 10;
                } else {
                  return 1077936155;
                }
              }
            case 16842798:
              if (d(e) !== 61) {
                return 16842798;
              } else if (d(e) !== 61) {
                return 8390461;
              } else {
                d(e);
                return 8390459;
              }
            case 8391477:
              if (d(e) !== 61) {
                return 8391477;
              } else {
                d(e);
                return 4194340;
              }
            case 8391476:
              {
                d(e);
                if (e.index >= e.end) {
                  return 8391476;
                }
                const t = e.currentChar;
                if (t === 61) {
                  d(e);
                  return 4194338;
                } else if (t !== 42) {
                  return 8391476;
                } else if (d(e) !== 61) {
                  return 8391735;
                } else {
                  d(e);
                  return 4194335;
                }
              }
            case 8389959:
              if (d(e) !== 61) {
                return 8389959;
              } else {
                d(e);
                return 4194341;
              }
            case 25233968:
              {
                d(e);
                const t = e.currentChar;
                if (t === 43) {
                  d(e);
                  return 33619993;
                } else if (t === 61) {
                  d(e);
                  return 4194336;
                } else {
                  return 25233968;
                }
              }
            case 25233969:
              {
                d(e);
                const r = e.currentChar;
                if (r === 45) {
                  d(e);
                  if ((n & 1 || o) && e.currentChar === 62) {
                    if (!e.options.webcompat) {
                      e.report(114);
                    }
                    d(e);
                    n = _(e, i, n, t, 3, e.tokenStart);
                    continue;
                  }
                  return 33619994;
                }
                if (r === 61) {
                  d(e);
                  return 4194337;
                } else {
                  return 25233969;
                }
              }
            case 8457014:
              d(e);
              if (e.index < e.end) {
                const r = e.currentChar;
                if (r === 47) {
                  d(e);
                  n = b(e, i, n, 0, e.tokenStart);
                  continue;
                }
                if (r === 42) {
                  d(e);
                  n = w(e, i, n);
                  continue;
                }
                if (t & 32) {
                  return U(e);
                }
                if (r === 61) {
                  d(e);
                  return 4259875;
                }
              }
              return 8457014;
            case 67108877:
              {
                const r = d(e);
                if (r >= 48 && r <= 57) {
                  return P(e, t, 80);
                }
                if (r === 46) {
                  const t = e.index + 1;
                  if (t < e.end && i.charCodeAt(t) === 46) {
                    e.column += 2;
                    e.currentChar = i.charCodeAt(e.index += 2);
                    return 14;
                  }
                }
                return 67108877;
              }
            case 8389702:
              {
                d(e);
                const t = e.currentChar;
                if (t === 124) {
                  d(e);
                  if (e.currentChar === 61) {
                    d(e);
                    return 4718632;
                  } else {
                    return 8913465;
                  }
                } else if (t === 61) {
                  d(e);
                  return 4194342;
                } else {
                  return 8389702;
                }
              }
            case 8390721:
              {
                d(e);
                if (t & 1048576) {
                  return 8390721;
                }
                const r = e.currentChar;
                if (r === 61) {
                  d(e);
                  return 8390719;
                }
                if (r !== 62) {
                  return 8390721;
                }
                d(e);
                if (e.index < e.end) {
                  const t = e.currentChar;
                  if (t === 62) {
                    if (d(e) === 61) {
                      d(e);
                      return 4194334;
                    } else {
                      return 8390980;
                    }
                  }
                  if (t === 61) {
                    d(e);
                    return 4194333;
                  }
                }
                return 8390979;
              }
            case 8390213:
              {
                d(e);
                const t = e.currentChar;
                if (t === 38) {
                  d(e);
                  if (e.currentChar === 61) {
                    d(e);
                    return 4718633;
                  } else {
                    return 8913720;
                  }
                } else if (t === 61) {
                  d(e);
                  return 4194343;
                } else {
                  return 8390213;
                }
              }
            case 22:
              {
                let t = d(e);
                if (t === 63) {
                  d(e);
                  if (e.currentChar === 61) {
                    d(e);
                    return 4718634;
                  } else {
                    return 276824446;
                  }
                }
                if (t === 46) {
                  const r = e.index + 1;
                  if (r < e.end && (t = i.charCodeAt(r), !(t >= 48) || !(t <= 57))) {
                    d(e);
                    return 67108991;
                  }
                }
                return 22;
              }
          }
        } else {
          if ((a ^ 8232) <= 1) {
            n = n & -5 | 1;
            h(e);
            continue;
          }
          const o = p(e);
          if (o > 0) {
            a = o;
          }
          if (r(a)) {
            e.tokenValue = "";
            return I(e, t, 0, 0);
          }
          if (m(a)) {
            d(e);
            continue;
          }
          e.report(20, String.fromCodePoint(a));
        }
      }
      return 1048576;
    }
    function Q(e, t) {
      var r;
      var n;
      if (!(e.flags & 1) && ~e.getToken() & 1048576) {
        e.report(30, T[e.getToken() & 255]);
      }
      if (!X(e, t, 1074790417) && (r = (n = e.options).onInsertedSemicolon) !== null && r !== undefined) {
        r.call(n, e.startIndex);
      }
    }
    function $(e, t, r, n) {
      if (t - r < 13 && n === "use strict" && (!(~e.getToken() & 1048576) || e.flags & 1)) {
        return 1;
      } else {
        return 0;
      }
    }
    function K(e, t, r) {
      if (e.getToken() !== r) {
        return 0;
      } else {
        Y(e, t);
        return 1;
      }
    }
    function X(e, t, r) {
      return e.getToken() === r && (Y(e, t), true);
    }
    function Z(e, t, r) {
      if (e.getToken() !== r) {
        e.report(25, T[r & 255]);
      }
      Y(e, t);
    }
    function J(e, t) {
      switch (t.type) {
        case "ArrayExpression":
          {
            t.type = "ArrayPattern";
            const {
              elements: r
            } = t;
            for (let t = 0, n = r.length; t < n; ++t) {
              const n = r[t];
              if (n) {
                J(e, n);
              }
            }
            return;
          }
        case "ObjectExpression":
          {
            t.type = "ObjectPattern";
            const {
              properties: r
            } = t;
            for (let t = 0, n = r.length; t < n; ++t) {
              J(e, r[t]);
            }
            return;
          }
        case "AssignmentExpression":
          t.type = "AssignmentPattern";
          if (t.operator !== "=") {
            e.report(71);
          }
          delete t.operator;
          J(e, t.left);
          return;
        case "Property":
          J(e, t.value);
          return;
        case "SpreadElement":
          t.type = "RestElement";
          J(e, t.argument);
      }
    }
    function ee(e, t, r, n, o) {
      if (t & 1) {
        if (!(~n & 36864)) {
          e.report(120);
        }
        if (!o && !(~n & 537079808)) {
          e.report(121);
        }
      }
      if (!(~n & 20480) || n === -2147483527) {
        e.report(102);
      }
      if (r & 24 && (n & 255) == 73) {
        e.report(100);
      }
      if (t & 2050 && n === 209006) {
        e.report(112);
      }
      if (t & 1025 && n === 241771) {
        e.report(97, "yield");
      }
    }
    function te(e, t, r) {
      if (t & 1) {
        if (!(~r & 36864)) {
          e.report(120);
        }
        if (!(~r & 537079808)) {
          e.report(121);
        }
        if (r === -2147483526) {
          e.report(95);
        }
        if (r === -2147483527) {
          e.report(95);
        }
      }
      if (!(~r & 20480)) {
        e.report(102);
      }
      if (t & 2050 && r === 209006) {
        e.report(112);
      }
      if (t & 1025 && r === 241771) {
        e.report(97, "yield");
      }
    }
    function re(e, t, r) {
      var n;
      if (r === 209006) {
        if (t & 2050) {
          e.report(112);
        }
        if (!(e.destructible & 128) && ((n = e.firstAwaitLocation) === null || n === undefined)) {
          e.firstAwaitLocation = {
            start: e.tokenStart,
            end: e.currentLocation
          };
        }
        e.destructible |= 128;
      }
      if (r === 241771 && t & 1024) {
        e.report(97, "yield");
      }
      return !(~r & 20480) || !(~r & 36864) || r == -2147483526;
    }
    function ne(e, t, r, n) {
      while (t) {
        if (t["$" + r]) {
          if (n) {
            e.report(139);
          }
          return 1;
        }
        if (n && t.loop) {
          n = 0;
        }
        t = t.$;
      }
      return 0;
    }
    function oe(e) {
      switch (e.type) {
        case "JSXIdentifier":
          return e.name;
        case "JSXNamespacedName":
          return e.namespace + ":" + e.name;
        case "JSXMemberExpression":
          return oe(e.object) + "." + oe(e.property);
      }
    }
    function ie(e, t) {
      if (e & 1025) {
        return (!(e & 2) || t !== 209006) && (!(e & 1024) || t !== 241771) && !(~t & 12288);
      } else {
        return !(~t & 12288) || !(~t & 36864);
      }
    }
    function ae(e, t, r) {
      if (!(~r & 537079808)) {
        if (t & 1) {
          e.report(121);
        }
        e.flags |= 512;
      }
      if (!ie(t, r)) {
        e.report(0);
      }
    }
    const se = new Map(Object.entries({
      quot: "\"",
      amp: "&",
      apos: "'",
      lt: "<",
      gt: ">",
      nbsp: "\xA0",
      iexcl: "¡",
      cent: "¢",
      pound: "£",
      curren: "¤",
      yen: "¥",
      brvbar: "¦",
      sect: "§",
      uml: "¨",
      copy: "©",
      ordf: "ª",
      laquo: "«",
      not: "¬",
      shy: "­",
      reg: "®",
      macr: "¯",
      deg: "°",
      plusmn: "±",
      sup2: "²",
      sup3: "³",
      acute: "´",
      micro: "µ",
      para: "¶",
      middot: "·",
      cedil: "¸",
      sup1: "¹",
      ordm: "º",
      raquo: "»",
      frac14: "¼",
      frac12: "½",
      frac34: "¾",
      iquest: "¿",
      Agrave: "À",
      Aacute: "Á",
      Acirc: "Â",
      Atilde: "Ã",
      Auml: "Ä",
      Aring: "Å",
      AElig: "Æ",
      Ccedil: "Ç",
      Egrave: "È",
      Eacute: "É",
      Ecirc: "Ê",
      Euml: "Ë",
      Igrave: "Ì",
      Iacute: "Í",
      Icirc: "Î",
      Iuml: "Ï",
      ETH: "Ð",
      Ntilde: "Ñ",
      Ograve: "Ò",
      Oacute: "Ó",
      Ocirc: "Ô",
      Otilde: "Õ",
      Ouml: "Ö",
      times: "×",
      Oslash: "Ø",
      Ugrave: "Ù",
      Uacute: "Ú",
      Ucirc: "Û",
      Uuml: "Ü",
      Yacute: "Ý",
      THORN: "Þ",
      szlig: "ß",
      agrave: "à",
      aacute: "á",
      acirc: "â",
      atilde: "ã",
      auml: "ä",
      aring: "å",
      aelig: "æ",
      ccedil: "ç",
      egrave: "è",
      eacute: "é",
      ecirc: "ê",
      euml: "ë",
      igrave: "ì",
      iacute: "í",
      icirc: "î",
      iuml: "ï",
      eth: "ð",
      ntilde: "ñ",
      ograve: "ò",
      oacute: "ó",
      ocirc: "ô",
      otilde: "õ",
      ouml: "ö",
      divide: "÷",
      oslash: "ø",
      ugrave: "ù",
      uacute: "ú",
      ucirc: "û",
      uuml: "ü",
      yacute: "ý",
      thorn: "þ",
      yuml: "ÿ",
      OElig: "Œ",
      oelig: "œ",
      Scaron: "Š",
      scaron: "š",
      Yuml: "Ÿ",
      fnof: "ƒ",
      circ: "ˆ",
      tilde: "˜",
      Alpha: "Α",
      Beta: "Β",
      Gamma: "Γ",
      Delta: "Δ",
      Epsilon: "Ε",
      Zeta: "Ζ",
      Eta: "Η",
      Theta: "Θ",
      Iota: "Ι",
      Kappa: "Κ",
      Lambda: "Λ",
      Mu: "Μ",
      Nu: "Ν",
      Xi: "Ξ",
      Omicron: "Ο",
      Pi: "Π",
      Rho: "Ρ",
      Sigma: "Σ",
      Tau: "Τ",
      Upsilon: "Υ",
      Phi: "Φ",
      Chi: "Χ",
      Psi: "Ψ",
      Omega: "Ω",
      alpha: "α",
      beta: "β",
      gamma: "γ",
      delta: "δ",
      epsilon: "ε",
      zeta: "ζ",
      eta: "η",
      theta: "θ",
      iota: "ι",
      kappa: "κ",
      lambda: "λ",
      mu: "μ",
      nu: "ν",
      xi: "ξ",
      omicron: "ο",
      pi: "π",
      rho: "ρ",
      sigmaf: "ς",
      sigma: "σ",
      tau: "τ",
      upsilon: "υ",
      phi: "φ",
      chi: "χ",
      psi: "ψ",
      omega: "ω",
      thetasym: "ϑ",
      upsih: "ϒ",
      piv: "ϖ",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "‌",
      zwj: "‍",
      lrm: "‎",
      rlm: "‏",
      ndash: "–",
      mdash: "—",
      lsquo: "‘",
      rsquo: "’",
      sbquo: "‚",
      ldquo: "“",
      rdquo: "”",
      bdquo: "„",
      dagger: "†",
      Dagger: "‡",
      bull: "•",
      hellip: "…",
      permil: "‰",
      prime: "′",
      Prime: "″",
      lsaquo: "‹",
      rsaquo: "›",
      oline: "‾",
      frasl: "⁄",
      euro: "€",
      image: "ℑ",
      weierp: "℘",
      real: "ℜ",
      trade: "™",
      alefsym: "ℵ",
      larr: "←",
      uarr: "↑",
      rarr: "→",
      darr: "↓",
      harr: "↔",
      crarr: "↵",
      lArr: "⇐",
      uArr: "⇑",
      rArr: "⇒",
      dArr: "⇓",
      hArr: "⇔",
      forall: "∀",
      part: "∂",
      exist: "∃",
      empty: "∅",
      nabla: "∇",
      isin: "∈",
      notin: "∉",
      ni: "∋",
      prod: "∏",
      sum: "∑",
      minus: "−",
      lowast: "∗",
      radic: "√",
      prop: "∝",
      infin: "∞",
      ang: "∠",
      and: "∧",
      or: "∨",
      cap: "∩",
      cup: "∪",
      int: "∫",
      there4: "∴",
      sim: "∼",
      cong: "≅",
      asymp: "≈",
      ne: "≠",
      equiv: "≡",
      le: "≤",
      ge: "≥",
      sub: "⊂",
      sup: "⊃",
      nsub: "⊄",
      sube: "⊆",
      supe: "⊇",
      oplus: "⊕",
      otimes: "⊗",
      perp: "⊥",
      sdot: "⋅",
      lceil: "⌈",
      rceil: "⌉",
      lfloor: "⌊",
      rfloor: "⌋",
      lang: "〈",
      rang: "〉",
      loz: "◊",
      spades: "♠",
      clubs: "♣",
      hearts: "♥",
      diams: "♦"
    }));
    function ce(e) {
      return e.replaceAll(/&(?:[\da-zA-Z]+|#x[\da-fA-F]+|#\d+);/g, e => {
        if (e.charAt(1) === "#") {
          const t = e.charAt(2) === "x" ? parseInt(e.slice(3), 16) : parseInt(e.slice(2), 10);
          if (t > 1114111) {
            return e;
          } else {
            return String.fromCodePoint(t);
          }
        }
        return se.get(e.slice(1, -1)) ?? e;
      });
    }
    function ue(e, t) {
      e.startIndex = e.tokenIndex = e.index;
      e.startColumn = e.tokenColumn = e.column;
      e.startLine = e.tokenLine = e.line;
      e.setToken(o[e.currentChar] & 8192 ? function (e) {
        const t = e.currentChar;
        let r = d(e);
        const n = e.index;
        while (r !== t) {
          if (e.index >= e.end) {
            e.report(16);
          }
          if (r === 13) {
            if (e.source.charCodeAt(e.index + 1) === 10) {
              d(e);
            }
            e.column = -1;
            e.line++;
          } else if (r === 10 || r === 8232 || r === 8233) {
            e.column = -1;
            e.line++;
          }
          r = d(e);
        }
        if (r !== t) {
          e.report(16);
        }
        e.tokenValue = ce(e.source.slice(n, e.index));
        d(e);
        if (e.options.raw) {
          e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
        }
        return 134283267;
      }(e) : G(e, t, 0));
      return e.getToken();
    }
    function le(e) {
      e.startIndex = e.tokenIndex = e.index;
      e.startColumn = e.tokenColumn = e.column;
      e.startLine = e.tokenLine = e.line;
      if (e.index >= e.end) {
        e.setToken(1048576);
        return;
      }
      if (e.currentChar === 60) {
        d(e);
        e.setToken(8456256);
        return;
      }
      if (e.currentChar === 123) {
        d(e);
        e.setToken(2162700);
        return;
      }
      if (e.currentChar === 125) {
        e.report(180);
      }
      if (e.currentChar === 62) {
        e.report(181);
      }
      let t = 0;
      let r = false;
      while (e.index < e.end) {
        const n = e.source.charCodeAt(e.index);
        if (n === 13) {
          t |= 5;
          r = true;
          h(e);
        } else if (n === 10) {
          f(e, t);
          t = t & -5 | 1;
        } else if (n === 8232 || n === 8233) {
          e.flags |= 1;
          e.currentChar = e.source.charCodeAt(++e.index);
          e.column = 0;
          e.line++;
          t = t & -5 | 1;
        } else {
          d(e);
        }
        if (o[e.currentChar] & 16384) {
          break;
        }
      }
      if (e.tokenIndex === e.index) {
        e.report(0);
      }
      const n = e.source.slice(e.tokenIndex, e.index);
      const i = r ? n.replaceAll("\r\n", "\n") : n;
      if (e.options.raw) {
        e.tokenRaw = i;
      }
      e.tokenValue = ce(i);
      e.setToken(138);
    }
    function de(e) {
      if (e.getToken() & 143360) {
        const {
          index: t
        } = e;
        let r = e.currentChar;
        while (o[r] & 32770) {
          r = d(e);
        }
        e.tokenValue += e.source.slice(t, e.index);
        e.setToken(208897, true);
      }
      return e.getToken();
    }
    class pe {
      constructor(e, t) {
        a(this, "parser", undefined);
        a(this, "parent", undefined);
        a(this, "refs", Object.create(null));
        a(this, "privateIdentifiers", new Map());
        this.parser = e;
        this.parent = t;
      }
      addPrivateIdentifier(e, t) {
        const {
          privateIdentifiers: r
        } = this;
        let n = t & 800;
        if (!(n & 768)) {
          n |= 768;
        }
        const o = r.get(e);
        if (this.hasPrivateIdentifier(e) && ((o & 32) != (n & 32) || o & n & 768)) {
          this.parser.report(148, e);
        }
        r.set(e, this.hasPrivateIdentifier(e) ? o | n : n);
      }
      addPrivateIdentifierRef(e) {
        var t;
        var r;
        if ((r = (t = this.refs)[e]) === null || r === undefined) {
          t[e] = [];
        }
        this.refs[e].push(this.parser.tokenStart);
      }
      isPrivateIdentifierDefined(e) {
        var t;
        return this.hasPrivateIdentifier(e) || Boolean((t = this.parent) === null || t === undefined ? undefined : t.isPrivateIdentifierDefined(e));
      }
      validatePrivateIdentifierRefs() {
        for (const e in this.refs) {
          if (!this.isPrivateIdentifierDefined(e)) {
            const {
              index: t,
              line: r,
              column: n
            } = this.refs[e][0];
            throw new D({
              index: t,
              line: r,
              column: n
            }, {
              index: t + e.length,
              line: r,
              column: n + e.length
            }, 4, e);
          }
        }
      }
      hasPrivateIdentifier(e) {
        return this.privateIdentifiers.has(e);
      }
    }
    class fe {
      constructor(e, t = 2, r) {
        a(this, "parser", undefined);
        a(this, "type", undefined);
        a(this, "parent", undefined);
        a(this, "scopeError", undefined);
        a(this, "variableBindings", new Map());
        this.parser = e;
        this.type = t;
        this.parent = r;
      }
      createChildScope(e) {
        return new fe(this.parser, e, this);
      }
      addVarOrBlock(e, t, r, n, o, i) {
        if (r & 4) {
          this.addVarName(e, t, r, n, o);
        } else {
          this.addBlockName(e, t, r, n, o, i);
        }
        if (i & 64) {
          this.parser.declareUnboundVariable(t);
        }
      }
      addVarName(e, t, r, n, o) {
        const {
          parser: i
        } = this;
        let a = this;
        while (a && !(a.type & 128)) {
          const {
            variableBindings: s
          } = a;
          const c = s.get(t);
          if (c && c & 248 && (!i.options.webcompat || e & 1 || (!(r & 128) || !(c & 68)) && (!(c & 128) || !(r & 68)))) {
            throw new D(n, o, 147, t);
          }
          if (a === this && c && c & 1 && r & 1) {
            a.recordScopeError(147, n, o, t);
          }
          if (c && (c & 256 || c & 512 && !i.options.webcompat)) {
            throw new D(n, o, 147, t);
          }
          a.variableBindings.set(t, r);
          a = a.parent;
        }
      }
      hasVariable(e) {
        return this.variableBindings.has(e);
      }
      addBlockName(e, t, r, n, o, i = 0) {
        var a;
        const {
          parser: s
        } = this;
        const c = this.variableBindings.get(t);
        if (c && !(c & 2)) {
          if (r & 1) {
            this.recordScopeError(147, n, o, t);
          } else if (!s.options.webcompat || e & 1 || !(i & 2) || c !== 64 || r !== 64) {
            throw new D(n, o, 147, t);
          }
        }
        if (this.type & 64 && (a = this.parent) !== null && a !== undefined && a.hasVariable(t) && !(this.parent.variableBindings.get(t) & 2)) {
          throw new D(n, o, 147, t);
        }
        if (this.type & 512 && c && !(c & 2) && r & 1) {
          this.recordScopeError(147, n, o, t);
        }
        if (this.type & 32 && this.parent.variableBindings.get(t) & 768) {
          throw new D(n, o, 161, t);
        }
        this.variableBindings.set(t, r);
      }
      recordScopeError(e, t, r, ...n) {
        var o;
        if ((o = this.scopeError) === null || o === undefined) {
          this.scopeError = {
            type: e,
            params: n,
            start: t,
            end: r
          };
        }
      }
      reportScopeError() {
        const {
          scopeError: e
        } = this;
        if (e) {
          throw new D(e.start, e.end, e.type, ...e.params);
        }
      }
    }
    function he(e, t, r, n, o) {
      const i = e.createScope().createChildScope(512);
      i.addBlockName(t, r, 1, n, o);
      return i;
    }
    class me {
      constructor(e, t = {}) {
        var r;
        var o;
        a(this, "source", undefined);
        a(this, "lastOnToken", null);
        a(this, "options", undefined);
        a(this, "token", 1048576);
        a(this, "flags", 0);
        a(this, "features", 0);
        a(this, "index", 0);
        a(this, "line", 1);
        a(this, "column", 0);
        a(this, "startIndex", 0);
        a(this, "end", 0);
        a(this, "tokenIndex", 0);
        a(this, "startColumn", 0);
        a(this, "tokenColumn", 0);
        a(this, "tokenLine", 1);
        a(this, "startLine", 1);
        a(this, "tokenValue", "");
        a(this, "tokenRaw", "");
        a(this, "tokenRegExp", undefined);
        a(this, "currentChar", 0);
        a(this, "exportedNames", new Set());
        a(this, "exportedBindings", new Set());
        a(this, "assignable", 0);
        a(this, "destructible", 0);
        a(this, "strictReservedRange", null);
        a(this, "firstAwaitLocation", null);
        a(this, "leadingDecorators", {
          decorators: []
        });
        this.source = e;
        this.end = e.length;
        this.currentChar = e.charCodeAt(0);
        this.options = function (e) {
          let t = i({
            validateRegex: true,
            features: 0
          }, e);
          let {
            features: r,
            next: o,
            ranges: a,
            module: s,
            sourceType: c,
            globalReturn: u
          } = t;
          let l = function (e, t) {
            if (e == null) {
              return {};
            }
            var r;
            var n;
            var o = function (e, t) {
              if (e == null) {
                return {};
              }
              var r = {};
              for (var n in e) {
                if ({}.hasOwnProperty.call(e, n)) {
                  if (t.indexOf(n) !== -1) {
                    continue;
                  }
                  r[n] = e[n];
                }
              }
              return r;
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) {
                r = i[n];
                if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
                  o[r] = e[r];
                }
              }
            }
            return o;
          }(t, n);
          if (o) {
            r |= 7;
          }
          a = function (e, t, r, n) {
            if (e) {
              if (e === true) {
                return {
                  start: true,
                  end: true,
                  range: true
                };
              } else {
                return {
                  start: (t = e.start) !== null && t !== undefined && t,
                  end: (r = e.end) !== null && r !== undefined && r,
                  range: (n = e.range) !== null && n !== undefined && n
                };
              }
            }
          }(a);
          if (s && !c) {
            c = "module";
          }
          if (!!u && (!c || c === "script")) {
            c = "commonjs";
          }
          return i(i({}, l), {}, {
            ranges: a,
            features: r,
            sourceType: c
          });
        }(t);
        this.features = this.options.features;
        if (Array.isArray(this.options.onComment)) {
          this.options.onComment = (r = this.options.onComment, o = this.options, function (e, t, n, i, a) {
            const s = {
              type: e,
              value: t
            };
            const {
              ranges: c
            } = o;
            if (c) {
              if (c.start) {
                s.start = n;
              }
              if (c.end) {
                s.end = i;
              }
              if (c.range) {
                s.range = [n, i];
              }
            }
            if (o.loc) {
              s.loc = a;
            }
            r.push(s);
          });
        }
        if (Array.isArray(this.options.onToken)) {
          this.options.onToken = function (e, t) {
            return function (r, n, o, i) {
              const a = {
                token: r
              };
              const {
                ranges: s
              } = t;
              if (s) {
                if (s.start) {
                  a.start = n;
                }
                if (s.end) {
                  a.end = o;
                }
                if (s.range) {
                  a.range = [n, o];
                }
              }
              if (t.loc) {
                a.loc = i;
              }
              e.push(a);
            };
          }(this.options.onToken, this.options);
        }
      }
      getToken() {
        return this.token;
      }
      setToken(e, t = false) {
        this.token = e;
        const {
          onToken: r
        } = this.options;
        if (r) {
          if (e !== 1048576) {
            const n = {
              start: {
                line: this.tokenLine,
                column: this.tokenColumn
              },
              end: {
                line: this.line,
                column: this.column
              }
            };
            if (!t && this.lastOnToken) {
              r(...this.lastOnToken);
            }
            this.lastOnToken = [v(e), this.tokenIndex, this.index, n];
          } else if (this.lastOnToken) {
            r(...this.lastOnToken);
            this.lastOnToken = null;
          }
        }
        return e;
      }
      get tokenStart() {
        return {
          index: this.tokenIndex,
          line: this.tokenLine,
          column: this.tokenColumn
        };
      }
      get startPosition() {
        return {
          index: this.startIndex,
          line: this.startLine,
          column: this.startColumn
        };
      }
      get currentLocation() {
        return {
          index: this.index,
          line: this.line,
          column: this.column
        };
      }
      finishNode(e, t, r) {
        const {
          ranges: n
        } = this.options;
        if (n) {
          const o = r ? r.index : this.startIndex;
          if (n.start) {
            e.start = t.index;
          }
          if (n.end) {
            e.end = o;
          }
          if (n.range) {
            e.range = [t.index, o];
          }
        }
        if (this.options.loc) {
          e.loc = {
            start: {
              line: t.line,
              column: t.column
            },
            end: r ? {
              line: r.line,
              column: r.column
            } : {
              line: this.startLine,
              column: this.startColumn
            }
          };
          if (this.options.source) {
            e.loc.source = this.options.source;
          }
        }
        return e;
      }
      addBindingToExports(e) {
        this.exportedBindings.add(e);
      }
      declareUnboundVariable(e) {
        const {
          exportedNames: t
        } = this;
        if (t.has(e)) {
          this.report(149, e);
        }
        t.add(e);
      }
      report(e, ...t) {
        throw new D(this.tokenStart, this.currentLocation, e, ...t);
      }
      createScopeIfLexical(e, t) {
        if (this.options.lexical) {
          return this.createScope(e, t);
        }
      }
      createScope(e, t) {
        return new fe(this, e, t);
      }
      createPrivateScopeIfLexical(e) {
        if (this.options.lexical) {
          return new pe(this, e);
        }
      }
      cloneIdentifier(e) {
        return structuredClone(e);
      }
      cloneStringLiteral(e) {
        return structuredClone(e);
      }
    }
    function ge(e, t = {}, r = 0) {
      const n = new me(e, t);
      if (n.options.sourceType === "module") {
        r |= 3;
      }
      if (n.options.sourceType === "commonjs") {
        r |= 69632;
      }
      if (n.options.impliedStrict) {
        r |= 1;
      }
      (function (e) {
        const {
          source: t
        } = e;
        if (e.currentChar === 35 && t.charCodeAt(e.index + 1) === 33) {
          d(e);
          d(e);
          b(e, t, 0, 4, e.tokenStart);
        }
      })(n);
      const o = n.createScopeIfLexical();
      let i;
      let a = "script";
      if (r & 2) {
        a = "module";
        i = function (e, t, r) {
          Y(e, t | 32);
          const n = [];
          while (e.getToken() === 134283267) {
            const {
              tokenStart: r
            } = e;
            const o = e.getToken();
            n.push(ke(e, t, ut(e, t), o, r));
          }
          while (e.getToken() !== 1048576) {
            n.push(ve(e, t, r));
          }
          return n;
        }(n, r | 8, o);
        if (o) {
          for (const e of n.exportedBindings) {
            if (!o.hasVariable(e)) {
              n.report(150, e);
            }
          }
        }
      } else {
        i = function (e, t, r) {
          Y(e, t | 262176);
          const n = [];
          while (e.getToken() === 134283267) {
            const {
              index: r,
              tokenValue: o,
              tokenStart: i,
              tokenIndex: a
            } = e;
            const s = e.getToken();
            const c = ut(e, t);
            if ($(e, r, a, o)) {
              t |= 1;
              if (e.flags & 64) {
                throw new D(e.tokenStart, e.currentLocation, 9);
              }
              if (e.flags & 4096) {
                throw new D(e.tokenStart, e.currentLocation, 15);
              }
            }
            n.push(ke(e, t, c, s, i));
          }
          while (e.getToken() !== 1048576) {
            n.push(ye(e, t, r, undefined, {}, 4));
          }
          return n;
        }(n, r | 8, o);
      }
      return n.finishNode({
        type: "Program",
        sourceType: a,
        body: i
      }, {
        index: 0,
        line: 1,
        column: 0
      }, n.currentLocation);
    }
    function ve(e, t, r) {
      let n;
      if (e.getToken() === 133) {
        Object.assign(e.leadingDecorators, {
          start: e.tokenStart,
          decorators: At(e, t, undefined)
        });
      }
      switch (e.getToken()) {
        case 20564:
          n = function (e, t, r) {
            const n = e.leadingDecorators.decorators.length ? e.leadingDecorators.start : e.tokenStart;
            Y(e, t | 32);
            const o = X(e, t | 32, 20561);
            if (e.leadingDecorators.decorators.length && e.getToken() !== 86094) {
              e.report(172);
            }
            const i = [];
            let a = null;
            let s = null;
            let c = [];
            if (o) {
              switch (e.getToken()) {
                case 86104:
                  a = lt(e, t, r, undefined, 1, 1, 0, e.tokenStart, 4);
                  break;
                case 133:
                  if (!(e.features & 1)) {
                    e.report(30, "@");
                  }
                case 86094:
                  a = kt(e, t, r, undefined, 1);
                  break;
                case 209005:
                  {
                    const {
                      tokenStart: n
                    } = e;
                    a = ct(e, t);
                    const {
                      flags: o
                    } = e;
                    if (!(o & 1)) {
                      if (e.getToken() === 86104) {
                        a = lt(e, t, r, undefined, 1, 1, 1, n, 4);
                      } else if (e.getToken() === 67174411) {
                        a = Tt(e, t, undefined, a, 1, 1, o, n);
                        a = Ge(e, t, undefined, a, 0, 0, n);
                        a = qe(e, t, undefined, 0, 0, n, a);
                      } else if (e.getToken() & 143360) {
                        r &&= he(e, t, e.tokenValue, e.tokenStart, e.currentLocation);
                        a = ct(e, t);
                        a = wt(e, t, r, undefined, [a], 1, n);
                      }
                    }
                    break;
                  }
                default:
                  a = Ue(e, t, undefined, 1, 0, e.tokenStart);
                  Q(e, t | 32);
              }
              if (r) {
                e.declareUnboundVariable("default");
              }
              return e.finishNode({
                type: "ExportDefaultDeclaration",
                declaration: a
              }, n);
            }
            switch (e.getToken()) {
              case 8391476:
                {
                  Y(e, t);
                  let o = null;
                  if (X(e, t, 77932)) {
                    if (r) {
                      e.declareUnboundVariable(e.tokenValue);
                    }
                    o = tt(e, t);
                  }
                  Z(e, t, 209011);
                  if (e.getToken() !== 134283267) {
                    e.report(105, "Export");
                  }
                  s = ut(e, t);
                  const i = {
                    type: "ExportAllDeclaration",
                    source: s,
                    exported: o,
                    attributes: Ze(e, t)
                  };
                  Q(e, t | 32);
                  return e.finishNode(i, n);
                }
              case 2162700:
                {
                  Y(e, t);
                  const n = [];
                  const o = [];
                  let a = 0;
                  while (e.getToken() & 143360 || e.getToken() === 134283267) {
                    const {
                      tokenStart: s,
                      tokenValue: c
                    } = e;
                    const u = tt(e, t);
                    let l;
                    if (u.type === "Literal") {
                      a = 1;
                    }
                    if (e.getToken() === 77932) {
                      Y(e, t);
                      if (!(e.getToken() & 143360) && e.getToken() !== 134283267) {
                        e.report(106);
                      }
                      if (r) {
                        n.push(e.tokenValue);
                        o.push(c);
                      }
                      l = tt(e, t);
                    } else {
                      if (r) {
                        n.push(e.tokenValue);
                        o.push(e.tokenValue);
                      }
                      l = u.type === "Literal" ? e.cloneStringLiteral(u) : e.cloneIdentifier(u);
                    }
                    i.push(e.finishNode({
                      type: "ExportSpecifier",
                      local: u,
                      exported: l
                    }, s));
                    if (e.getToken() !== 1074790415) {
                      Z(e, t, 18);
                    }
                  }
                  Z(e, t, 1074790415);
                  if (X(e, t, 209011)) {
                    if (e.getToken() !== 134283267) {
                      e.report(105, "Export");
                    }
                    s = ut(e, t);
                    c = Ze(e, t);
                    if (r) {
                      n.forEach(t => e.declareUnboundVariable(t));
                    }
                  } else {
                    if (a) {
                      e.report(174);
                    }
                    if (r) {
                      n.forEach(t => e.declareUnboundVariable(t));
                      o.forEach(t => e.addBindingToExports(t));
                    }
                  }
                  Q(e, t | 32);
                  break;
                }
              case 133:
                if (!(e.features & 1)) {
                  e.report(30, "@");
                }
              case 86094:
                a = kt(e, t, r, undefined, 2);
                break;
              case 86104:
                a = lt(e, t, r, undefined, 1, 2, 0, e.tokenStart, 4);
                break;
              case 241737:
                a = Se(e, t, r, undefined, 8, 64);
                break;
              case 86090:
                a = Se(e, t, r, undefined, 16, 64);
                break;
              case 86088:
                a = Oe(e, t, r, undefined, 64);
                break;
              case 209005:
                {
                  const {
                    tokenStart: n
                  } = e;
                  Y(e, t);
                  if (!(e.flags & 1) && e.getToken() === 86104) {
                    a = lt(e, t, r, undefined, 1, 2, 1, n, 4);
                    break;
                  }
                }
              default:
                e.report(30, T[e.getToken() & 255]);
            }
            const u = {
              type: "ExportNamedDeclaration",
              declaration: a,
              specifiers: i,
              source: s,
              attributes: c
            };
            return e.finishNode(u, n);
          }(e, t, r);
          break;
        case 86106:
          if (e.leadingDecorators.decorators.length) {
            e.report(172);
          }
          n = function (e, t, r) {
            const n = e.tokenStart;
            let o;
            Y(e, t);
            let a = false;
            let s = null;
            const {
              tokenStart: c
            } = e;
            let u = [];
            if (e.getToken() === 134283267) {
              o = ut(e, t);
            } else {
              if (e.getToken() & 143360) {
                const n = e.getToken();
                const {
                  tokenValue: i,
                  tokenStart: l,
                  currentLocation: d
                } = e;
                const p = e.features & 2 && !(n & -2147483648) && i == "defer";
                const f = e.features & 4 && !(n & -2147483648) && i == "source";
                if (p || f) {
                  const n = ct(e, t);
                  if (i === "defer") {
                    if (e.getToken() === 8391476) {
                      s = "defer";
                      u = [Pe(e, t, r)];
                    } else if (e.getToken() === 209011 || e.getToken() === 18) {
                      if (r != null) {
                        r.addBlockName(t, i, 8, l, d);
                      }
                      u = [e.finishNode({
                        type: "ImportDefaultSpecifier",
                        local: n
                      }, c)];
                    } else {
                      e.report(108);
                    }
                  } else if (e.getToken() === 209011) {
                    const p = e.getToken();
                    const f = e.tokenStart;
                    const h = e.currentLocation;
                    const m = ct(e, t);
                    if (e.getToken() === 209011) {
                      ee(e, t, 16, p, 0);
                      if (r != null) {
                        r.addBlockName(t, m.name, 8, f, h);
                      }
                      s = "source";
                      u = [e.finishNode({
                        type: "ImportDefaultSpecifier",
                        local: m
                      }, f)];
                    } else {
                      if (r != null) {
                        r.addBlockName(t, i, 8, l, d);
                      }
                      u = [e.finishNode({
                        type: "ImportDefaultSpecifier",
                        local: n
                      }, c)];
                      if (e.getToken() !== 134283267) {
                        e.report(105, "Import");
                      }
                      o = ut(e, t);
                      a = true;
                    }
                  } else if (e.getToken() & 143360) {
                    s = "source";
                    const n = e.tokenStart;
                    const o = Re(e, t, r);
                    u = [e.finishNode({
                      type: "ImportDefaultSpecifier",
                      local: o
                    }, n)];
                  } else if (e.getToken() === 18) {
                    if (r != null) {
                      r.addBlockName(t, i, 8, l, d);
                    }
                    u = [e.finishNode({
                      type: "ImportDefaultSpecifier",
                      local: n
                    }, c)];
                  } else {
                    e.report(109);
                  }
                } else {
                  const n = Re(e, t, r);
                  u = [e.finishNode({
                    type: "ImportDefaultSpecifier",
                    local: n
                  }, c)];
                }
                if (s === null && !a && X(e, t, 18)) {
                  switch (e.getToken()) {
                    case 8391476:
                      u.push(Pe(e, t, r));
                      break;
                    case 2162700:
                      Be(e, t, r, u);
                      break;
                    default:
                      e.report(107);
                  }
                }
              } else {
                switch (e.getToken()) {
                  case 8391476:
                    u = [Pe(e, t, r)];
                    break;
                  case 2162700:
                    Be(e, t, r, u);
                    break;
                  case 67174411:
                    return Fe(e, t, undefined, n);
                  case 67108877:
                    return Me(e, t, n);
                  default:
                    e.report(30, T[e.getToken() & 255]);
                }
              }
              if (!a) {
                o = function (e, t) {
                  Z(e, t, 209011);
                  if (e.getToken() !== 134283267) {
                    e.report(105, "Import");
                  }
                  return ut(e, t);
                }(e, t);
              }
            }
            const l = i({
              type: "ImportDeclaration",
              specifiers: u,
              source: o,
              attributes: Ze(e, t)
            }, e.features & 2 || e.features & 4 ? {
              phase: s
            } : null);
            Q(e, t | 32);
            return e.finishNode(l, n);
          }(e, t, r);
          break;
        default:
          n = ye(e, t, r, undefined, {}, 4);
      }
      return n;
    }
    function ye(e, t, r, n, o, i = 2) {
      const a = e.tokenStart;
      if (e.leadingDecorators.decorators.length && e.getToken() !== 86094) {
        e.report(172);
      }
      switch (e.getToken()) {
        case 86104:
          return lt(e, t, r, n, 1, 0, 0, a, i);
        case 133:
          if (!(e.features & 1)) {
            e.report(30, "@");
          }
        case 86094:
          return kt(e, t, r, n, 0);
        case 86090:
          return Se(e, t, r, n, 16);
        case 241737:
          return function (e, t, r, n, o) {
            const {
              tokenValue: i,
              tokenStart: a,
              currentLocation: s
            } = e;
            const c = e.getToken();
            let u = ct(e, t);
            if (e.getToken() & 2240512 && ~e.getToken() & 20480) {
              const o = Ie(e, t, r, n, 8);
              Q(e, t | 32);
              return e.finishNode({
                type: "VariableDeclaration",
                kind: "let",
                declarations: o
              }, a);
            }
            e.assignable = 1;
            if (t & 1) {
              e.report(85);
            }
            if (e.getToken() === 21) {
              return De(e, t, r, n, {}, i, u, c, 0, a, o);
            }
            if (e.getToken() === 10) {
              let r;
              if (e.options.lexical) {
                r = he(e, t, i, a, s);
              }
              e.flags = (e.flags | 128) ^ 128;
              u = wt(e, t, r, n, [u], 0, a);
            } else {
              u = Ge(e, t, n, u, 0, 0, a);
              u = qe(e, t, n, 0, 0, a, u);
            }
            if (e.getToken() === 18) {
              u = Ne(e, t, n, 0, a, u);
            }
            return Ee(e, t, u, a);
          }(e, t, r, n, i);
        case 209013:
          return function (e, t, r, n, o, i) {
            const {
              tokenStart: a,
              tokenValue: s,
              currentLocation: c
            } = e;
            const u = e.getToken();
            const l = ct(e, t);
            if (!(e.flags & 1) && xe(e.getToken())) {
              if (!!(i & 4) && !!(t & 8) && !(t & 2) && !(t & 4096)) {
                e.report(30, T[e.getToken() & 255]);
              }
              return Se(e, t, r, n, 16, i, "using", a, 1);
            }
            e.assignable = 1;
            if (e.getToken() === 10) {
              let r;
              if (e.options.lexical) {
                r = he(e, t, s, a, c);
              }
              e.flags = (e.flags | 128) ^ 128;
              return Ee(e, t, wt(e, t, r, n, [l], 0, a), a);
            }
            return be(e, t, r, n, o, 1, l, u, s, a, i);
          }(e, t, r, n, o, i);
        case 209006:
          if ((t & 2048 || t & 2 && t & 8) && function (e) {
            const {
              index: t,
              source: r
            } = e;
            let n = t;
            while (n < e.end) {
              const t = r.charCodeAt(n);
              if (t === 10 || t === 13 || t === 8232 || t === 8233) {
                return false;
              }
              if (/\s/u.test(r[n])) {
                n++;
              } else {
                if (t !== 47 || r.charCodeAt(n + 1) !== 42) {
                  break;
                }
                for (n += 2; n < e.end;) {
                  const e = r.charCodeAt(n);
                  if (e === 10 || e === 13 || e === 8232 || e === 8233) {
                    return false;
                  }
                  if (e === 42 && r.charCodeAt(n + 1) === 47) {
                    n += 2;
                    break;
                  }
                  n++;
                }
              }
            }
            if (r.slice(n, n + 5) !== "using") {
              return false;
            }
            const o = r.codePointAt(n + 5);
            return o === undefined || o !== 92 && !l(o);
          }(e)) {
            return function (e, t, r, n, o, i) {
              const a = e.tokenStart;
              let s;
              if (t & 524288) {
                e.report(179);
              }
              Y(e, t | 32);
              if (e.flags & 1 || e.getToken() !== 209013) {
                s = Ye(e, t, n, 0, 0, 1);
              } else {
                const o = e.tokenStart;
                const c = ct(e, t);
                if (!(e.flags & 1) && xe(e.getToken())) {
                  return Se(e, t, r, n, 16, i, "await using", a, 1);
                }
                s = Ge(e, t, n, c, 0, 0, o);
              }
              if (e.getToken() === 8391735) {
                e.report(33);
              }
              e.assignable = 2;
              const c = e.finishNode({
                type: "AwaitExpression",
                argument: s
              }, a);
              return be(e, t, r, n, o, 0, c, 1048576, "", a, i);
            }(e, t, r, n, o, i);
          } else {
            return _e(e, t, r, n, o, 1, i);
          }
        case 20564:
          e.report(103, "export");
        case 86106:
          Y(e, t);
          switch (e.getToken()) {
            case 67174411:
              return Fe(e, t, n, a);
            case 67108877:
              return Me(e, t, a);
            default:
              e.report(103, "import");
          }
        case 209005:
          return Te(e, t, r, n, o, 1, i);
        default:
          return _e(e, t, r, n, o, 1, i);
      }
    }
    function _e(e, t, r, n, o, i, a = 0) {
      switch (e.getToken()) {
        case 86088:
          return Oe(e, t, r, n);
        case 20572:
          return function (e, t, r) {
            if (!(t & 4096)) {
              e.report(92);
            }
            const n = e.tokenStart;
            Y(e, t | 32);
            const o = e.flags & 1 || e.getToken() & 1048576 ? null : je(e, t, r, 0, 1, e.tokenStart);
            Q(e, t | 32);
            return e.finishNode({
              type: "ReturnStatement",
              argument: o
            }, n);
          }(e, t, n);
        case 20569:
          return function (e, t, r, n, o) {
            const i = e.tokenStart;
            Y(e, t);
            Z(e, t | 32, 67174411);
            e.assignable = 1;
            const a = je(e, t, n, 0, 1, e.tokenStart);
            Z(e, t | 32, 16);
            const s = Ae(e, t, r, n, o);
            let c = null;
            if (e.getToken() === 20563) {
              Y(e, t | 32);
              c = Ae(e, t, r, n, o);
            }
            return e.finishNode({
              type: "IfStatement",
              test: a,
              consequent: s,
              alternate: c
            }, i);
          }(e, t, r, n, o);
        case 20567:
          return function (e, t, r, n, o, i) {
            const a = e.tokenStart;
            Y(e, t);
            const s = ((t & 2048) > 0 || (t & 2) > 0 && (t & 8) > 0) && X(e, t, 209006);
            Z(e, t | 32, 67174411);
            r = (i = r) === null || i === undefined ? undefined : i.createChildScope(1);
            let c;
            let u;
            let l = null;
            let d = null;
            let p = 0;
            let f = null;
            let h = e.getToken() === 86088 || e.getToken() === 241737 || e.getToken() === 86090 || e.getToken() === 209013;
            let m = false;
            const {
              tokenStart: g
            } = e;
            const v = e.getToken();
            if (h) {
              if (v === 241737) {
                f = ct(e, t);
                if (e.getToken() & 2240512 && ~e.getToken() & 20480) {
                  f = e.finishNode({
                    type: "VariableDeclaration",
                    kind: "let",
                    declarations: Ie(e, t | 131072, r, n, 8, 32)
                  }, g);
                  e.assignable = 1;
                } else if (t & 1) {
                  e.report(67);
                } else {
                  h = false;
                  e.assignable = 1;
                  f = Ge(e, t, n, f, 0, 0, g);
                  if (e.getToken() === 471156) {
                    e.report(117);
                  }
                }
              } else if (v === 209013) {
                const o = ct(e, t);
                if (e.flags & 1 || !xe(e.getToken())) {
                  h = false;
                  e.assignable = 1;
                  f = Ge(e, t, n, o, 0, 0, g);
                } else if (e.getToken() === 471156) {
                  const i = e.tokenStart;
                  const a = e.currentLocation;
                  const s = e.getToken();
                  const u = e.tokenValue;
                  const l = ct(e, t);
                  if (e.getToken() !== 1077936155 && e.getToken() !== 8673330 && e.getToken() !== 1074790417 && e.getToken() !== 18) {
                    h = false;
                    m = true;
                    e.assignable = 1;
                    f = o;
                  } else {
                    var y;
                    c = "using";
                    ee(e, t, 16, s, 0);
                    if ((y = r) !== null && y !== undefined) {
                      y.addBlockName(t, u, 16, i, a, 32);
                    }
                    let o = null;
                    if (e.getToken() === 1077936155) {
                      Y(e, t | 32);
                      o = Ue(e, t | 131072, n, 1, 0, e.tokenStart);
                      if (!(~e.getToken() & 262144)) {
                        throw new D(i, e.currentLocation, 60, e.getToken() === 471156 ? "of" : "in");
                      }
                    } else if (e.getToken() !== 8673330) {
                      e.report(59, c);
                    }
                    const d = [e.finishNode({
                      type: "VariableDeclarator",
                      id: l,
                      init: o
                    }, i)];
                    const p = e.options.lexical ? new Set([u]) : undefined;
                    while (X(e, t | 131072, 18)) {
                      const o = Le(e, t | 131072, r, n, 16, 32, c);
                      if (p) {
                        const {
                          name: t
                        } = o.id;
                        if (p.has(t)) {
                          e.report(147, t);
                        }
                        p.add(t);
                      }
                      d.push(o);
                    }
                    if (d.length > 1 && e.getToken() & 262144) {
                      e.report(61, T[e.getToken() & 255]);
                    }
                    f = e.finishNode({
                      type: "VariableDeclaration",
                      kind: c,
                      declarations: d
                    }, g);
                    e.assignable = 1;
                  }
                } else {
                  c = "using";
                  f = e.finishNode({
                    type: "VariableDeclaration",
                    kind: c,
                    declarations: Ie(e, t | 131072, r, n, 16, 32, c)
                  }, g);
                  e.assignable = 1;
                }
              } else {
                Y(e, t);
                f = e.finishNode(v === 86088 ? {
                  type: "VariableDeclaration",
                  kind: "var",
                  declarations: Ie(e, t | 131072, r, n, 4, 32)
                } : {
                  type: "VariableDeclaration",
                  kind: "const",
                  declarations: Ie(e, t | 131072, r, n, 16, 32)
                }, g);
                e.assignable = 1;
              }
            } else if (v === 209006 && (t & 2048 || t & 2 && t & 8)) {
              let o;
              if (t & 524288) {
                e.report(179);
              }
              Y(e, t | 32);
              if (e.flags & 1 || e.getToken() !== 209013) {
                o = Ye(e, t, n, 0, 0, 1);
              } else {
                const i = e.tokenStart;
                const a = ct(e, t);
                if (e.flags & 1 || !xe(e.getToken())) {
                  o = Ge(e, t, n, a, 0, 0, i);
                } else {
                  c = "await using";
                  h = true;
                  f = e.finishNode({
                    type: "VariableDeclaration",
                    kind: c,
                    declarations: Ie(e, t | 131072, r, n, 16, 32, c)
                  }, g);
                  e.assignable = 1;
                }
              }
              if (!h) {
                if (e.getToken() === 8391735) {
                  e.report(33);
                }
                e.assignable = 2;
                f = e.finishNode({
                  type: "AwaitExpression",
                  argument: o
                }, g);
              }
            } else if (s && v === 209005) {
              const r = ct(e, t);
              e.assignable = 1;
              f = Ge(e, t | 131072, n, r, 0, 0, g);
            } else if (v === 1074790417) {
              if (s) {
                e.report(82);
              }
            } else if (~v & 2097152) {
              f = Ye(e, t | 131072, n, 1, 0, 1);
            } else {
              const r = e.tokenStart;
              f = v === 2162700 ? gt(e, t, undefined, n, 1, 0, 0, 2, 32) : pt(e, t, undefined, n, 1, 0, 0, 2, 32);
              p = e.destructible;
              if (p & 64) {
                e.report(63);
              }
              e.assignable = p & 16 ? 2 : 1;
              f = Ge(e, t | 131072, n, f, 0, 0, r);
            }
            if (m || !(~e.getToken() & 262144)) {
              if (m || e.getToken() === 471156) {
                if (e.assignable & 2) {
                  e.report(80, s ? "await" : "of");
                }
                J(e, f);
                if (!m) {
                  Y(e, t | 32);
                }
                u = Ue(e, t, n, 1, 0, e.tokenStart);
                Z(e, t | 32, 16);
                const i = Ce(e, t, r, n, o);
                return e.finishNode({
                  type: "ForOfStatement",
                  left: f,
                  right: u,
                  body: i,
                  await: s
                }, a);
              }
              if (c) {
                e.report(30, "in");
              }
              if (e.assignable & 2) {
                e.report(80, "in");
              }
              J(e, f);
              Y(e, t | 32);
              if (s) {
                e.report(82);
              }
              u = je(e, t, n, 0, 1, e.tokenStart);
              Z(e, t | 32, 16);
              const i = Ce(e, t, r, n, o);
              return e.finishNode({
                type: "ForInStatement",
                body: i,
                left: f,
                right: u
              }, a);
            }
            if (s) {
              e.report(82);
            }
            if (!h) {
              if (p & 8 && e.getToken() !== 1077936155) {
                e.report(80, "loop");
              }
              f = qe(e, t | 131072, n, 0, 0, g, f);
            }
            if (e.getToken() === 18) {
              f = Ne(e, t, n, 0, g, f);
            }
            Z(e, t | 32, 1074790417);
            if (e.getToken() !== 1074790417) {
              l = je(e, t, n, 0, 1, e.tokenStart);
            }
            Z(e, t | 32, 1074790417);
            if (e.getToken() !== 16) {
              d = je(e, t, n, 0, 1, e.tokenStart);
            }
            Z(e, t | 32, 16);
            const _ = Ce(e, t, r, n, o);
            return e.finishNode({
              type: "ForStatement",
              init: f,
              test: l,
              update: d,
              body: _
            }, a);
          }(e, t, r, n, o);
        case 20562:
          return function (e, t, r, n, o) {
            const i = e.tokenStart;
            Y(e, t | 32);
            const a = Ce(e, t, r, n, o);
            Z(e, t, 20578);
            Z(e, t | 32, 67174411);
            const s = je(e, t, n, 0, 1, e.tokenStart);
            Z(e, t | 32, 16);
            X(e, t | 32, 1074790417);
            return e.finishNode({
              type: "DoWhileStatement",
              body: a,
              test: s
            }, i);
          }(e, t, r, n, o);
        case 20578:
          return function (e, t, r, n, o) {
            const i = e.tokenStart;
            Y(e, t);
            Z(e, t | 32, 67174411);
            const a = je(e, t, n, 0, 1, e.tokenStart);
            Z(e, t | 32, 16);
            const s = Ce(e, t, r, n, o);
            return e.finishNode({
              type: "WhileStatement",
              test: a,
              body: s
            }, i);
          }(e, t, r, n, o);
        case 86110:
          return function (e, t, r, n, o, i) {
            const a = e.tokenStart;
            Y(e, t);
            Z(e, t | 32, 67174411);
            const s = je(e, t, n, 0, 1, e.tokenStart);
            Z(e, t, 16);
            Z(e, t, 2162700);
            const c = [];
            let u = 0;
            for (r = (i = r) === null || i === undefined ? undefined : i.createChildScope(8); e.getToken() !== 1074790415;) {
              const {
                tokenStart: i
              } = e;
              let a = null;
              const s = [];
              if (X(e, t | 32, 20556)) {
                a = je(e, t, n, 0, 1, e.tokenStart);
              } else {
                Z(e, t | 32, 20561);
                if (u) {
                  e.report(89);
                }
                u = 1;
              }
              Z(e, t | 32, 21);
              while (e.getToken() !== 20556 && e.getToken() !== 1074790415 && e.getToken() !== 20561) {
                const i = ye(e, t | 4, r, n, {
                  $: o
                });
                if (i.type === "VariableDeclaration" && (i.kind === "using" || i.kind === "await using")) {
                  e.report(30, i.kind);
                }
                s.push(i);
              }
              c.push(e.finishNode({
                type: "SwitchCase",
                test: a,
                consequent: s
              }, i));
            }
            Z(e, t | 32, 1074790415);
            return e.finishNode({
              type: "SwitchStatement",
              discriminant: s,
              cases: c
            }, a);
          }(e, t, r, n, o);
        case 1074790417:
          return function (e, t) {
            const r = e.tokenStart;
            Y(e, t | 32);
            return e.finishNode({
              type: "EmptyStatement"
            }, r);
          }(e, t);
        case 2162700:
          return we(e, t, r == null ? undefined : r.createChildScope(), n, o, e.tokenStart);
        case 86112:
          return function (e, t, r) {
            const n = e.tokenStart;
            Y(e, t | 32);
            if (e.flags & 1) {
              e.report(90);
            }
            const o = je(e, t, r, 0, 1, e.tokenStart);
            Q(e, t | 32);
            return e.finishNode({
              type: "ThrowStatement",
              argument: o
            }, n);
          }(e, t, n);
        case 20555:
          return function (e, t, r) {
            const n = e.tokenStart;
            Y(e, t | 32);
            let o = null;
            if (!(e.flags & 1) && e.getToken() & 143360) {
              const {
                tokenValue: n
              } = e;
              o = ct(e, t | 32);
              if (!ne(e, r, n, 0)) {
                e.report(140, n);
              }
            } else if (!(t & 132)) {
              e.report(69);
            }
            Q(e, t | 32);
            return e.finishNode({
              type: "BreakStatement",
              label: o
            }, n);
          }(e, t, o);
        case 20559:
          return function (e, t, r) {
            if (!(t & 128)) {
              e.report(68);
            }
            const n = e.tokenStart;
            Y(e, t);
            let o = null;
            if (!(e.flags & 1) && e.getToken() & 143360) {
              const {
                tokenValue: n
              } = e;
              o = ct(e, t | 32);
              if (!ne(e, r, n, 1)) {
                e.report(140, n);
              }
            }
            Q(e, t | 32);
            return e.finishNode({
              type: "ContinueStatement",
              label: o
            }, n);
          }(e, t, o);
        case 20577:
          return function (e, t, r, n, o) {
            const i = e.tokenStart;
            Y(e, t | 32);
            const a = we(e, t, r == null ? undefined : r.createChildScope(16), n, {
              $: o
            });
            const {
              tokenStart: s
            } = e;
            const c = X(e, t | 32, 20557) ? function (e, t, r, n, o, i, a, s) {
              let c = null;
              if (X(e, t, 67174411)) {
                c = Lt(e, t, r = (a = r) === null || a === undefined ? undefined : a.createChildScope(4), n, ~e.getToken() & 2097152 ? 512 : 256);
                if (e.getToken() === 18) {
                  e.report(86);
                } else if (e.getToken() === 1077936155) {
                  e.report(87);
                }
                Z(e, t | 32, 16);
              }
              const u = we(e, t, (s = r) === null || s === undefined ? undefined : s.createChildScope(32), n, {
                $: o
              });
              return e.finishNode({
                type: "CatchClause",
                param: c,
                body: u
              }, i);
            }(e, t, r, n, o, s) : null;
            let u = null;
            if (e.getToken() === 20566) {
              Y(e, t | 32);
              u = we(e, t, r == null ? undefined : r.createChildScope(4), n, {
                $: o
              });
            }
            if (!c && !u) {
              e.report(88);
            }
            return e.finishNode({
              type: "TryStatement",
              block: a,
              handler: c,
              finalizer: u
            }, i);
          }(e, t, r, n, o);
        case 20579:
          return function (e, t, r, n, o) {
            const i = e.tokenStart;
            Y(e, t);
            if (t & 1) {
              e.report(91);
            }
            Z(e, t | 32, 67174411);
            const a = je(e, t, n, 0, 1, e.tokenStart);
            Z(e, t | 32, 16);
            const s = _e(e, t, r, n, o, 0, 2);
            return e.finishNode({
              type: "WithStatement",
              object: a,
              body: s
            }, i);
          }(e, t, r, n, o);
        case 20560:
          return function (e, t) {
            const r = e.tokenStart;
            Y(e, t | 32);
            Q(e, t | 32);
            return e.finishNode({
              type: "DebuggerStatement"
            }, r);
          }(e, t);
        case 209005:
          return Te(e, t, r, n, o, 0, a);
        case 20557:
          e.report(164);
        case 20566:
          e.report(165);
        case 86104:
          e.report(t & 1 ? 76 : e.options.webcompat ? 77 : 78);
        case 86094:
          e.report(79);
        default:
          return function (e, t, r, n, o, i, a) {
            const {
              tokenValue: s,
              tokenStart: c
            } = e;
            const u = e.getToken();
            let l;
            if (u === 241737) {
              l = ct(e, t);
              if (t & 1) {
                e.report(85);
              }
              if (e.getToken() === 69271571) {
                e.report(84);
              }
            } else {
              l = $e(e, t, n, 2, 0, 1, 0, 1, e.tokenStart, 0, 1);
            }
            return be(e, t, r, n, o, i, l, u, s, c, a);
          }(e, t, r, n, o, i, a);
      }
    }
    function be(e, t, r, n, o, i, a, s, c, u, l) {
      if (s & 143360 && e.getToken() === 21) {
        return De(e, t, r, n, o, c, a, s, i, u, l);
      }
      let d = Ge(e, t, n, a, 0, 0, u);
      d = qe(e, t, n, 0, 0, u, d);
      if (e.getToken() === 18) {
        d = Ne(e, t, n, 0, u, d);
      }
      return Ee(e, t, d, u);
    }
    function we(e, t, r, n, o, i = e.tokenStart, a = "BlockStatement") {
      const s = [];
      for (Z(e, t | 32, 2162700); e.getToken() !== 1074790415;) {
        s.push(ye(e, t, r, n, {
          $: o
        }));
      }
      Z(e, t | 32, 1074790415);
      return e.finishNode({
        type: a,
        body: s
      }, i);
    }
    function Ee(e, t, r, n) {
      Q(e, t | 32);
      return e.finishNode({
        type: "ExpressionStatement",
        expression: r
      }, n);
    }
    function De(e, t, r, n, o, i, a, s, c, u, l) {
      ee(e, t, 0, s, 1);
      (function (e, t, r) {
        let n = t;
        while (n) {
          if (n["$" + r]) {
            e.report(138, r);
          }
          n = n.$;
        }
        t["$" + r] = 1;
      })(e, o, i);
      Y(e, t | 32);
      const d = !c || t & 1 || !e.options.webcompat || e.getToken() !== 86104 ? _e(e, t, r, n, o, c, l) : lt(e, t, r == null ? undefined : r.createChildScope(), n, 0, 0, 0, e.tokenStart, l);
      return e.finishNode({
        type: "LabeledStatement",
        label: a,
        body: d
      }, u);
    }
    function Te(e, t, r, n, o, i, a) {
      const {
        tokenValue: s,
        tokenStart: c
      } = e;
      const u = e.getToken();
      let l = ct(e, t);
      if (e.getToken() === 21) {
        return De(e, t, r, n, o, s, l, u, 1, c, a);
      }
      const d = e.flags & 1;
      if (!d) {
        if (e.getToken() === 86104) {
          if (!i) {
            e.report(125);
          }
          return lt(e, t, r, n, 1, 0, 1, c, a);
        }
        if (ie(t, e.getToken())) {
          l = Dt(e, t, n, 1, c);
          if (e.getToken() === 18) {
            l = Ne(e, t, n, 0, c, l);
          }
          return Ee(e, t, l, c);
        }
      }
      if (e.getToken() === 67174411) {
        l = Tt(e, t, n, l, 1, 1, d, c);
      } else {
        if (e.getToken() === 10) {
          ae(e, t, u);
          if (!(~u & 36864)) {
            e.flags |= 256;
          }
          l = _t(e, t | 2048, n, e.tokenValue, l, 0, 1, 0, c);
        }
        e.assignable = 1;
      }
      l = Ge(e, t, n, l, 0, 0, c);
      l = qe(e, t, n, 0, 0, c, l);
      e.assignable = 1;
      if (e.getToken() === 18) {
        l = Ne(e, t, n, 0, c, l);
      }
      return Ee(e, t, l, c);
    }
    function ke(e, t, r, n, o) {
      const i = e.startIndex;
      if (n !== 1074790417) {
        e.assignable = 2;
        r = Ge(e, t, undefined, r, 0, 0, o);
        if (e.getToken() !== 1074790417) {
          r = qe(e, t, undefined, 0, 0, o, r);
          if (e.getToken() === 18) {
            r = Ne(e, t, undefined, 0, o, r);
          }
        }
        Q(e, t | 32);
      }
      const a = {
        type: "ExpressionStatement",
        expression: r
      };
      if (r.type === "Literal" && typeof r.value == "string") {
        a.directive = e.source.slice(o.index + 1, i - 1);
      }
      return e.finishNode(a, o);
    }
    function Ae(e, t, r, n, o) {
      const {
        tokenStart: i
      } = e;
      if (t & 1 || !e.options.webcompat || e.getToken() !== 86104) {
        return _e(e, t, r, n, {
          $: o
        }, 0);
      } else {
        return lt(e, t, r == null ? undefined : r.createChildScope(), n, 0, 0, 0, i);
      }
    }
    function Ce(e, t, r, n, o) {
      return _e(e, (t | 131072) ^ 131072 | 128, r, n, {
        loop: 1,
        $: o
      }, 0);
    }
    function xe(e) {
      return !(~e & 143360) && !!(~e & 20480);
    }
    function Se(e, t, r, n, o, i = 0, a, s = e.tokenStart, c = 0) {
      const u = s;
      if (!c) {
        Y(e, t);
      }
      const l = Ie(e, t, r, n, o, i, a);
      Q(e, t | 32);
      return e.finishNode({
        type: "VariableDeclaration",
        kind: a ?? (o & 8 ? "let" : "const"),
        declarations: l
      }, u);
    }
    function Oe(e, t, r, n, o = 0) {
      const i = e.tokenStart;
      Y(e, t);
      const a = Ie(e, t, r, n, 4, o);
      Q(e, t | 32);
      return e.finishNode({
        type: "VariableDeclaration",
        kind: "var",
        declarations: a
      }, i);
    }
    function Ie(e, t, r, n, o, i = 0, a) {
      let s = 1;
      const c = Le(e, t, r, n, o, i, a);
      const u = [c];
      const l = a && e.options.lexical ? new Set([c.id.name]) : undefined;
      while (X(e, t, 18)) {
        s++;
        const c = Le(e, t, r, n, o, i, a);
        if (l) {
          const {
            name: t
          } = c.id;
          if (l.has(t)) {
            e.report(147, t);
          }
          l.add(t);
        }
        u.push(c);
      }
      if (s > 1 && i & 32 && e.getToken() & 262144) {
        e.report(61, T[e.getToken() & 255]);
      }
      return u;
    }
    function Le(e, t, r, n, o, i, a) {
      const {
        tokenStart: s
      } = e;
      const c = e.getToken();
      let u = null;
      if (!!a && !(~c & 2097152)) {
        e.report(50);
      }
      const l = Lt(e, t, r, n, o, i);
      if (e.getToken() === 1077936155) {
        Y(e, t | 32);
        u = Ue(e, t, n, 1, 0, e.tokenStart, i);
        if (i & 32 && (e.getToken() === 471156 || e.getToken() === 8673330 && (c & 2097152 || !(o & 4) || t & 1 || !e.options.webcompat))) {
          throw new D(s, e.currentLocation, 60, e.getToken() === 471156 ? "of" : "in");
        }
      } else if ((o & 16 || (c & 2097152) > 0) && ~e.getToken() & 262144) {
        e.report(59, a ?? (o & 16 ? "const" : "destructuring"));
      }
      return e.finishNode({
        type: "VariableDeclarator",
        id: l,
        init: u
      }, s);
    }
    function Re(e, t, r) {
      if (!ie(t, e.getToken())) {
        e.report(120);
      }
      if (!(~e.getToken() & 537079808)) {
        e.report(121);
      }
      if (r != null) {
        r.addBlockName(t, e.tokenValue, 8, e.tokenStart, e.currentLocation);
      }
      return ct(e, t);
    }
    function Pe(e, t, r) {
      const {
        tokenStart: n
      } = e;
      Y(e, t);
      Z(e, t, 77932);
      if (!(~e.getToken() & 134217728)) {
        throw new D(n, e.currentLocation, 30, T[e.getToken() & 255]);
      }
      return e.finishNode({
        type: "ImportNamespaceSpecifier",
        local: Re(e, t, r)
      }, n);
    }
    function Be(e, t, r, n) {
      for (Y(e, t); e.getToken() & 143360 || e.getToken() === 134283267;) {
        let {
          tokenValue: o,
          tokenStart: i,
          currentLocation: a
        } = e;
        const s = i;
        const c = e.getToken();
        const u = tt(e, t);
        let l;
        if (X(e, t, 77932)) {
          if (~e.getToken() & 134217728 && e.getToken() !== 18) {
            ee(e, t, 16, e.getToken(), 0);
          } else {
            e.report(106);
          }
          o = e.tokenValue;
          i = e.tokenStart;
          a = e.currentLocation;
          l = ct(e, t);
        } else if (u.type === "Identifier") {
          ee(e, t, 16, c, 0);
          l = e.cloneIdentifier(u);
        } else {
          e.report(25, T[108]);
        }
        if (r != null) {
          r.addBlockName(t, o, 8, i, a);
        }
        n.push(e.finishNode({
          type: "ImportSpecifier",
          local: l,
          imported: u
        }, s));
        if (e.getToken() !== 1074790415) {
          Z(e, t, 18);
        }
      }
      Z(e, t, 1074790415);
      return n;
    }
    function Me(e, t, r) {
      let n = Ke(e, t, e.finishNode({
        type: "Identifier",
        name: "import"
      }, r), r);
      n = Ge(e, t, undefined, n, 0, 0, r);
      n = qe(e, t, undefined, 0, 0, r, n);
      if (e.getToken() === 18) {
        n = Ne(e, t, undefined, 0, r, n);
      }
      return Ee(e, t, n, r);
    }
    function Fe(e, t, r, n) {
      let o = Xe(e, t, r, 0, n);
      o = Ge(e, t, r, o, 0, 0, n);
      if (e.getToken() === 18) {
        o = Ne(e, t, r, 0, n, o);
      }
      return Ee(e, t, o, n);
    }
    function Ue(e, t, r, n, o, i, a = 0) {
      let s = $e(e, t, r, 2, 0, n, o, 1, i, a, t & 131072 ? 0 : 1);
      s = Ge(e, t, r, s, o, 0, i);
      return qe(e, t, r, o, 0, i, s);
    }
    function Ne(e, t, r, n, o, i) {
      const a = [i];
      while (X(e, t | 32, 18)) {
        a.push(Ue(e, t, r, 1, n, e.tokenStart));
      }
      return e.finishNode({
        type: "SequenceExpression",
        expressions: a
      }, o);
    }
    function je(e, t, r, n, o, i) {
      const a = Ue(e, t, r, o, n, i);
      if (e.getToken() === 18) {
        return Ne(e, t, r, n, i, a);
      } else {
        return a;
      }
    }
    function qe(e, t, r, n, o, i, a) {
      const s = e.getToken();
      if (!(~s & 4194304)) {
        if (e.assignable & 2) {
          e.report(26);
        }
        if (!(~s & 524288) && e.assignable & 4) {
          e.report(26);
        }
        if (!o && s === 1077936155 && a.type === "ArrayExpression" || a.type === "ObjectExpression") {
          J(e, a);
        }
        Y(e, t | 32);
        const c = Ue(e, t, r, 1, n, e.tokenStart);
        e.assignable = 2;
        return e.finishNode(o ? {
          type: "AssignmentPattern",
          left: a,
          right: c
        } : {
          type: "AssignmentExpression",
          left: a,
          operator: T[s & 255],
          right: c
        }, i);
      }
      if (!(~s & 8388608)) {
        a = We(e, t, r, n, i, 4, s, a);
      }
      if (X(e, t | 32, 22)) {
        a = Ve(e, t, r, a, i);
      }
      return a;
    }
    function He(e, t, r, n, o, i, a) {
      const s = e.getToken();
      Y(e, t | 32);
      const c = Ue(e, t, r, 1, n, e.tokenStart);
      a = e.finishNode(o ? {
        type: "AssignmentPattern",
        left: a,
        right: c
      } : {
        type: "AssignmentExpression",
        left: a,
        operator: T[s & 255],
        right: c
      }, i);
      e.assignable = 2;
      return a;
    }
    function Ve(e, t, r, n, o) {
      const i = Ue(e, (t | 131072) ^ 131072, r, 1, 0, e.tokenStart);
      Z(e, t | 32, 21);
      e.assignable = 1;
      const a = Ue(e, t, r, 1, 0, e.tokenStart);
      e.assignable = 2;
      return e.finishNode({
        type: "ConditionalExpression",
        test: n,
        consequent: i,
        alternate: a
      }, o);
    }
    function We(e, t, r, n, o, i, a, s) {
      const c = -((t & 131072) > 0) & 8673330;
      let u;
      let l;
      for (e.assignable = 2; e.getToken() & 8388608 && (u = e.getToken(), l = u & 3840, (u & 524288 && a & 268435456 || a & 524288 && u & 268435456) && e.report(167), !(l + ((u === 8391735) << 8) - ((c === u) << 12) <= i));) {
        Y(e, t | 32);
        s = e.finishNode({
          type: u & 524288 || u & 268435456 ? "LogicalExpression" : "BinaryExpression",
          left: s,
          right: We(e, t, r, n, e.tokenStart, l, u, Ye(e, t, r, 0, n, 1, !(t & 131072) && l < 2048 ? 1 : 0)),
          operator: T[u & 255]
        }, o);
      }
      if (e.getToken() === 1077936155) {
        e.report(26);
      }
      return s;
    }
    function ze(e, t, r, n, o, i, a = 0) {
      const {
        tokenStart: s
      } = e;
      e.flags &= -4161;
      Z(e, t | 32, 2162700);
      const c = [];
      if (e.getToken() !== 1074790415) {
        while (e.getToken() === 134283267) {
          const {
            index: r,
            tokenStart: n,
            tokenIndex: o,
            tokenValue: a
          } = e;
          const s = e.getToken();
          const u = ut(e, t);
          if ($(e, r, o, a)) {
            t |= 1;
            if (e.flags & 128) {
              throw new D(n, e.currentLocation, 66);
            }
            if (e.flags & 64) {
              throw new D(n, e.currentLocation, 9);
            }
            if (e.flags & 4096) {
              throw new D(n, e.currentLocation, 15);
            }
            if (i != null) {
              i.reportScopeError();
            }
          }
          c.push(ke(e, t, u, s, n));
        }
        if (t & 1 && (o && (~o & 537079808 || e.report(121), ~o & 36864 || e.report(40)), e.flags & 512 && e.report(121), e.flags & 256)) {
          if (e.strictReservedRange) {
            throw new D(e.strictReservedRange[0], e.strictReservedRange[1], 120);
          }
          e.report(120);
        }
      }
      e.flags = (e.flags | 4928) ^ 4928;
      e.destructible = (e.destructible | 256) ^ 256;
      while (e.getToken() !== 1074790415) {
        c.push(ye(e, t, r, n, {}, 4));
      }
      Z(e, a & 24 ? t | 32 : t, 1074790415);
      e.flags &= -4289;
      if (e.getToken() === 1077936155) {
        e.report(26);
      }
      return e.finishNode({
        type: "BlockStatement",
        body: c
      }, s);
    }
    function Ye(e, t, r, n, o, i, a = 0) {
      const s = e.tokenStart;
      return Ge(e, t, r, $e(e, t, r, 2, 0, n, o, i, s, 0, a), o, 0, s);
    }
    function Ge(e, t, r, n, o, i, a) {
      if (~e.getToken() & 33619968 || e.flags & 1) {
        if (!(~e.getToken() & 67108864)) {
          t = (t | 131072) ^ 131072;
          switch (e.getToken()) {
            case 67108877:
              {
                Y(e, (t | 262152) ^ 8);
                if (t & 16 && e.getToken() === 131 && e.tokenValue === "super") {
                  e.report(175);
                }
                e.assignable = ~e.flags & 2048 ? 1 : 2;
                const o = Qe(e, t | 64, r, 1);
                n = e.finishNode({
                  type: "MemberExpression",
                  object: n,
                  computed: false,
                  property: o,
                  optional: false
                }, a);
                break;
              }
            case 69271571:
              {
                if (!(~e.flags & 8192)) {
                  e.flags = (e.flags | 8192) ^ 8192;
                  return n;
                }
                let i = false;
                if (!(~e.flags & 2048)) {
                  i = true;
                  e.flags = (e.flags | 2048) ^ 2048;
                }
                Y(e, t | 32);
                const {
                  tokenStart: s
                } = e;
                const c = je(e, t, r, o, 1, s);
                Z(e, t, 20);
                e.assignable = i ? 2 : 1;
                n = e.finishNode({
                  type: "MemberExpression",
                  object: n,
                  computed: true,
                  property: c,
                  optional: false
                }, a);
                if (i) {
                  e.flags |= 2048;
                }
                break;
              }
            case 67174411:
              {
                if (!(~e.flags & 1024)) {
                  e.flags = (e.flags | 1024) ^ 1024;
                  return n;
                }
                let i = false;
                if (!(~e.flags & 2048)) {
                  i = true;
                  e.flags = (e.flags | 2048) ^ 2048;
                }
                const s = st(e, t, r, o);
                if (t & 1 || !e.options.webcompat) {
                  e.assignable = 2;
                } else {
                  e.assignable = 4;
                }
                n = e.finishNode({
                  type: "CallExpression",
                  callee: n,
                  arguments: s,
                  optional: false
                }, a);
                if (i) {
                  e.flags |= 2048;
                }
                break;
              }
            case 67108991:
              Y(e, (t | 262152) ^ 8);
              e.flags |= 2048;
              e.assignable = 2;
              n = function (e, t, r, n, o) {
                let i;
                let a = false;
                if ((e.getToken() === 69271571 || e.getToken() === 67174411) && !(~e.flags & 2048)) {
                  a = true;
                  e.flags = (e.flags | 2048) ^ 2048;
                }
                if (e.getToken() === 69271571) {
                  Y(e, t | 32);
                  const {
                    tokenStart: a
                  } = e;
                  const s = je(e, t, r, 0, 1, a);
                  Z(e, t, 20);
                  e.assignable = 2;
                  i = e.finishNode({
                    type: "MemberExpression",
                    object: n,
                    computed: true,
                    optional: true,
                    property: s
                  }, o);
                } else if (e.getToken() === 67174411) {
                  const a = st(e, t, r, 0);
                  if (t & 1 || !e.options.webcompat) {
                    e.assignable = 2;
                  } else {
                    e.assignable = 4;
                  }
                  i = e.finishNode({
                    type: "CallExpression",
                    callee: n,
                    arguments: a,
                    optional: true
                  }, o);
                } else {
                  const a = Qe(e, t, r, 1);
                  e.assignable = 2;
                  i = e.finishNode({
                    type: "MemberExpression",
                    object: n,
                    computed: false,
                    optional: true,
                    property: a
                  }, o);
                }
                if (a) {
                  e.flags |= 2048;
                }
                return i;
              }(e, t, r, n, a);
              break;
            default:
              if (!(~e.flags & 2048)) {
                e.report(168);
              }
              e.assignable = 2;
              n = e.finishNode({
                type: "TaggedTemplateExpression",
                tag: n,
                quasi: e.getToken() === 67174408 ? ot(e, t | 64, r) : nt(e, t)
              }, a);
          }
          n = Ge(e, t, r, n, 0, 1, a);
        }
      } else {
        n = function (e, t, r, n) {
          if (e.assignable & 2) {
            e.report(55);
          }
          const o = e.getToken();
          Y(e, t);
          e.assignable = 2;
          return e.finishNode({
            type: "UpdateExpression",
            argument: r,
            operator: T[o & 255],
            prefix: false
          }, n);
        }(e, t, n, a);
      }
      if (i === 0 && !(~e.flags & 2048)) {
        e.flags = (e.flags | 2048) ^ 2048;
        n = e.finishNode({
          type: "ChainExpression",
          expression: n
        }, a);
      }
      return n;
    }
    function Qe(e, t, r, n = 0) {
      if (!(e.getToken() & 143360) && e.getToken() !== -2147483527 && e.getToken() !== -2147483526 && (e.getToken() !== 131 || !n)) {
        e.report(162);
      }
      if (e.getToken() === 131) {
        return Ot(e, t, r, 0);
      } else {
        return ct(e, t);
      }
    }
    function $e(e, t, r, n, o, a, s, c, u, l = 0, d = 0) {
      if (!(~e.getToken() & 143360)) {
        switch (e.getToken()) {
          case 209006:
            return function (e, t, r, n, o, i, a) {
              if (o) {
                if (!(e.destructible & 128) && ((a = e.firstAwaitLocation) === null || a === undefined)) {
                  e.firstAwaitLocation = {
                    start: i,
                    end: e.currentLocation
                  };
                }
                e.destructible |= 128;
              }
              if (t & 524288) {
                e.report(179);
              }
              const s = yt(e, t, r);
              if (s.type === "ArrowFunctionExpression" || !(e.getToken() & 65536)) {
                if (t & 2048) {
                  throw new D(i, e.startPosition, 178);
                }
                if (t & 2) {
                  throw new D(i, e.startPosition, 112);
                }
                if (t & 8192 && t & 2048) {
                  throw new D(i, e.startPosition, 112);
                }
                return s;
              }
              if (t & 8192) {
                throw new D(i, e.startPosition, 31);
              }
              if (t & 2048 || t & 2 && t & 8) {
                if (n) {
                  throw new D(i, e.startPosition, 0);
                }
                const o = Ye(e, t, r, 0, 0, 1);
                if (e.getToken() === 8391735) {
                  e.report(33);
                }
                e.assignable = 2;
                return e.finishNode({
                  type: "AwaitExpression",
                  argument: o
                }, i);
              }
              if (t & 2) {
                throw new D(i, e.startPosition, 98);
              }
              return s;
            }(e, t, r, o, s, u);
          case 241771:
            return function (e, t, r, n, o, i) {
              if (n) {
                e.destructible |= 256;
              }
              if (t & 1024) {
                Y(e, t | 32);
                if (t & 8192) {
                  e.report(32);
                }
                if (!o) {
                  e.report(26);
                }
                if (e.getToken() === 22) {
                  e.report(126);
                }
                let n = null;
                let a = false;
                if (e.flags & 1) {
                  if (e.getToken() === 8391476) {
                    e.report(30, T[e.getToken() & 255]);
                  }
                } else {
                  a = X(e, t | 32, 8391476);
                  if (e.getToken() & 77824 || a) {
                    n = Ue(e, t, r, 1, 0, e.tokenStart);
                  }
                }
                e.assignable = 2;
                return e.finishNode({
                  type: "YieldExpression",
                  argument: n,
                  delegate: a
                }, i);
              }
              if (t & 1) {
                e.report(97, "yield");
              }
              return yt(e, t, r);
            }(e, t, r, s, a, u);
          case 209005:
            return function (e, t, r, n, o, i, a, s) {
              const c = e.getToken();
              const u = ct(e, t);
              const {
                flags: l
              } = e;
              if (!(l & 1)) {
                if (e.getToken() === 86104) {
                  return dt(e, t, r, 1, n, s);
                }
                if (ie(t, e.getToken())) {
                  if (!o) {
                    e.report(0);
                  }
                  if (!(~e.getToken() & 36864)) {
                    e.flags |= 256;
                  }
                  return Dt(e, t, r, i, s);
                }
              }
              if (a || e.getToken() !== 67174411) {
                if (e.getToken() === 10) {
                  ae(e, t, c);
                  if (a) {
                    e.report(51);
                  }
                  if (!(~c & 36864)) {
                    e.flags |= 256;
                  }
                  return _t(e, t, r, e.tokenValue, u, a, i, 0, s);
                } else {
                  e.assignable = 1;
                  return u;
                }
              } else {
                return Tt(e, t, r, u, i, 1, l, s);
              }
            }(e, t, r, s, c, a, o, u);
        }
        const {
          tokenValue: i
        } = e;
        const d = e.getToken();
        const p = ct(e, t | 64);
        if (e.getToken() === 10) {
          if (!c) {
            e.report(0);
          }
          ae(e, t, d);
          if (!(~d & 36864)) {
            e.flags |= 256;
          }
          return _t(e, t, r, i, p, o, a, 0, u, l);
        } else {
          if (!!(t & 16) && !(t & 32768) && !(t & 8192) && e.tokenValue === "arguments") {
            e.report(132);
          }
          if ((d & 255) == 73) {
            if (t & 1) {
              e.report(115);
            }
            if (n & 24) {
              e.report(100);
            }
          }
          e.assignable = t & 1 && !(~d & 537079808) ? 2 : 1;
          return p;
        }
      }
      if (!(~e.getToken() & 134217728)) {
        return ut(e, t);
      }
      switch (e.getToken()) {
        case 33619993:
        case 33619994:
          return function (e, t, r, n, o, i) {
            if (n) {
              e.report(56);
            }
            if (!o) {
              e.report(0);
            }
            const a = e.getToken();
            Y(e, t | 32);
            const s = Ye(e, t, r, 0, 0, 1);
            if (e.assignable & 2) {
              e.report(55);
            }
            e.assignable = 2;
            return e.finishNode({
              type: "UpdateExpression",
              argument: s,
              operator: T[a & 255],
              prefix: true
            }, i);
          }(e, t, r, o, c, u);
        case 16863276:
        case 16842798:
        case 16842799:
        case 25233968:
        case 25233969:
        case 16863275:
        case 16863277:
          return function (e, t, r, n, o) {
            if (!n) {
              e.report(0);
            }
            const {
              tokenStart: i
            } = e;
            const a = e.getToken();
            Y(e, t | 32);
            const s = Ye(e, t, r, 0, o, 1);
            var c;
            if (e.getToken() === 8391735) {
              e.report(33);
            }
            if (t & 1 && a === 16863276) {
              if (s.type === "Identifier") {
                e.report(123);
              } else if ((c = s).property && c.property.type === "PrivateIdentifier") {
                e.report(129);
              }
            }
            e.assignable = 2;
            return e.finishNode({
              type: "UnaryExpression",
              operator: T[a & 255],
              argument: s,
              prefix: true
            }, i);
          }(e, t, r, c, s);
        case 86104:
          return dt(e, t, r, 0, s, u);
        case 2162700:
          return function (e, t, r, n, o) {
            const i = gt(e, t, undefined, r, n, o, 0, 2);
            if (e.destructible & 64) {
              e.report(63);
            }
            if (e.destructible & 8) {
              e.report(62);
            }
            return i;
          }(e, t, r, a ? 0 : 1, s);
        case 69271571:
          return function (e, t, r, n, o) {
            const i = pt(e, t, undefined, r, n, o, 0, 2);
            if (e.destructible & 64) {
              e.report(63);
            }
            if (e.destructible & 8) {
              e.report(62);
            }
            return i;
          }(e, t, r, a ? 0 : 1, s);
        case 67174411:
          return function (e, t, r, n, o, i, a, s) {
            e.flags = (e.flags | 128) ^ 128;
            const c = e.tokenStart;
            Y(e, t | 262176);
            const u = (s = e.createScopeIfLexical()) === null || s === undefined ? undefined : s.createChildScope(512);
            if (X(e, t = (t | 131072) ^ 131072, 16)) {
              return bt(e, t, u, r, [], n, 0, i, a);
            }
            let l = 0;
            const d = e.destructible & 384;
            e.destructible &= -385;
            const p = e.firstAwaitLocation;
            let f;
            e.firstAwaitLocation = null;
            let h = [];
            let m = 0;
            let g = 0;
            let v = 0;
            const y = e.tokenStart;
            for (e.assignable = 1; e.getToken() !== 16;) {
              const {
                tokenStart: n,
                currentLocation: o
              } = e;
              const i = e.getToken();
              if (i & 143360) {
                if (u != null) {
                  u.addBlockName(t, e.tokenValue, 1, n, o);
                }
                if (~i & 537079808) {
                  if (!(~i & 36864)) {
                    v = 1;
                  }
                } else {
                  g = 1;
                }
                f = $e(e, t, r, 1, 0, 1, 1, 1, n, 0);
                if (e.getToken() === 16 || e.getToken() === 18) {
                  if (e.assignable & 2) {
                    l |= 16;
                    g = 1;
                  }
                } else {
                  if (e.getToken() === 1077936155) {
                    g = 1;
                  } else {
                    l |= 16;
                  }
                  f = Ge(e, t, r, f, 1, 0, n);
                  if (e.getToken() !== 16 && e.getToken() !== 18) {
                    f = qe(e, t, r, 1, 0, n, f);
                  }
                }
              } else {
                if (~i & 2097152) {
                  if (i === 14) {
                    f = ht(e, t, u, r, 16, 1, 0, 1, 0);
                    if (e.destructible & 16) {
                      e.report(74);
                    }
                    g = 1;
                    if (!!m && (e.getToken() === 16 || e.getToken() === 18)) {
                      h.push(f);
                    }
                    l |= 8;
                    break;
                  }
                  l |= 16;
                  f = Ue(e, t, r, 1, 1, n);
                  if (!!m && (e.getToken() === 16 || e.getToken() === 18)) {
                    h.push(f);
                  }
                  if (e.getToken() === 18) {
                    if (!m) {
                      m = 1;
                      h = [f];
                    }
                  }
                  if (m) {
                    while (X(e, t | 32, 18)) {
                      h.push(Ue(e, t, r, 1, 1, e.tokenStart));
                    }
                    e.assignable = 2;
                    f = e.finishNode({
                      type: "SequenceExpression",
                      expressions: h
                    }, y);
                  }
                  Z(e, t, 16);
                  e.destructible = l | d;
                  if (p) {
                    e.firstAwaitLocation = p;
                  }
                  if (e.options.preserveParens) {
                    return e.finishNode({
                      type: "ParenthesizedExpression",
                      expression: f
                    }, c);
                  } else {
                    return f;
                  }
                }
                f = i === 2162700 ? gt(e, t | 262144, u, r, 0, 1, 0, 1) : pt(e, t | 262144, u, r, 0, 1, 0, 1);
                l |= e.destructible;
                g = 1;
                e.assignable = 2;
                if (e.getToken() !== 16 && e.getToken() !== 18) {
                  if (l & 8) {
                    e.report(124);
                  }
                  f = Ge(e, t, r, f, 0, 0, n);
                  l |= 16;
                  if (e.getToken() !== 16 && e.getToken() !== 18) {
                    f = qe(e, t, r, 0, 0, n, f);
                  }
                }
              }
              if (!!m && (e.getToken() === 16 || e.getToken() === 18)) {
                h.push(f);
              }
              if (!X(e, t | 32, 18)) {
                break;
              }
              if (!m) {
                m = 1;
                h = [f];
              }
              if (e.getToken() === 16) {
                l |= 8;
                break;
              }
            }
            if (m) {
              e.assignable = 2;
              f = e.finishNode({
                type: "SequenceExpression",
                expressions: h
              }, y);
            }
            Z(e, t, 16);
            if (l & 16 && l & 8) {
              e.report(153);
            }
            l |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
            if (e.getToken() === 10) {
              if (l & 48) {
                e.report(49);
              }
              if (t & 2050 && l & 128) {
                const t = e.firstAwaitLocation;
                if (t) {
                  throw new D(t.start, t.end, 31);
                }
                e.report(31);
              }
              if (t & 1025 && l & 256) {
                e.report(32);
              }
              if (g) {
                e.flags |= 128;
              }
              if (v) {
                e.flags |= 256;
              }
              e.destructible |= d;
              if (p) {
                e.firstAwaitLocation = p;
              }
              return bt(e, t, u, r, m ? h : [f], n, 0, i, a);
            }
            if (l & 64) {
              e.report(63);
            }
            if (l & 8) {
              e.report(146);
            }
            e.destructible = (e.destructible | 256) ^ 256 | l | d;
            if (p) {
              e.firstAwaitLocation = p;
            }
            if (e.options.preserveParens) {
              return e.finishNode({
                type: "ParenthesizedExpression",
                expression: f
              }, c);
            } else {
              return f;
            }
          }(e, t | 64, r, a, 0, u, l);
        case 86021:
        case 86022:
        case 86023:
          return function (e, t) {
            const r = e.tokenStart;
            const n = T[e.getToken() & 255];
            const o = {
              type: "Literal",
              value: e.getToken() === 86023 ? null : n === "true"
            };
            if (e.options.raw) {
              o.raw = n;
            }
            Y(e, t);
            e.assignable = 2;
            return e.finishNode(o, r);
          }(e, t);
        case 86111:
          return function (e, t) {
            const {
              tokenStart: r
            } = e;
            Y(e, t);
            e.assignable = 2;
            return e.finishNode({
              type: "ThisExpression"
            }, r);
          }(e, t);
        case 65540:
          return function (e, t) {
            const {
              tokenRaw: r,
              tokenRegExp: n,
              tokenValue: o,
              tokenStart: i
            } = e;
            Y(e, t);
            e.assignable = 2;
            const a = {
              type: "Literal",
              value: o,
              regex: n
            };
            if (e.options.raw) {
              a.raw = r;
            }
            return e.finishNode(a, i);
          }(e, t);
        case 133:
          if (!(e.features & 1)) {
            e.report(30, "@");
          }
        case 86094:
          return function (e, t, r, n, o) {
            let a = null;
            let s = null;
            const c = At(e, t, r);
            Z(e, t = (t | 16385) ^ 16384, 86094);
            if (e.getToken() & 4096 && e.getToken() !== 20565) {
              if (re(e, t, e.getToken())) {
                e.report(120);
              }
              if (!(~e.getToken() & 537079808)) {
                e.report(121);
              }
              a = ct(e, t);
            }
            let u = t;
            if (X(e, t | 32, 20565)) {
              s = Ye(e, t, r, 0, n, 0);
              u |= 512;
            } else {
              u = (u | 512) ^ 512;
            }
            const l = xt(e, u, t, undefined, r, 2, n);
            e.assignable = 2;
            return e.finishNode(i({
              type: "ClassExpression",
              id: a,
              superClass: s,
              body: l
            }, e.features & 1 ? {
              decorators: c
            } : null), o);
          }(e, t, r, s, u);
        case 86109:
          return function (e, t) {
            const {
              tokenStart: r
            } = e;
            Y(e, t);
            switch (e.getToken()) {
              case 67108991:
                e.report(169);
              case 67174411:
                if (!(t & 512)) {
                  e.report(28);
                }
                e.assignable = 2;
                break;
              case 69271571:
              case 67108877:
                if (!(t & 256)) {
                  e.report(29);
                }
                e.assignable = 1;
                break;
              default:
                e.report(30, "super");
            }
            return e.finishNode({
              type: "Super"
            }, r);
          }(e, t);
        case 67174409:
          return nt(e, t);
        case 67174408:
          return ot(e, t, r);
        case 86107:
          return function (e, t, r, n) {
            const {
              tokenStart: o
            } = e;
            const i = ct(e, t | 32);
            const {
              tokenStart: a
            } = e;
            if (X(e, t, 67108877)) {
              if (t & 65536 && e.getToken() === 209030) {
                e.assignable = 2;
                return function (e, t, r, n) {
                  const o = ct(e, t);
                  return e.finishNode({
                    type: "MetaProperty",
                    meta: r,
                    property: o
                  }, n);
                }(e, t, i, o);
              }
              e.report(94);
            }
            e.assignable = 2;
            if (!(~e.getToken() & 16842752)) {
              e.report(65, T[e.getToken() & 255]);
            }
            const s = $e(e, t, r, 2, 1, 0, n, 1, a);
            t = (t | 131072) ^ 131072;
            if (e.getToken() === 67108991) {
              e.report(170);
            }
            const c = function e(t, r, n, o, i, a) {
              const s = t.getToken();
              if (s & 67108864) {
                if (s === 67108877) {
                  Y(t, r | 262144);
                  t.assignable = 1;
                  const i = Qe(t, r, n, 1);
                  return e(t, r, n, t.finishNode({
                    type: "MemberExpression",
                    object: o,
                    computed: false,
                    property: i,
                    optional: false
                  }, a), 0, a);
                }
                if (s === 69271571) {
                  Y(t, r | 32);
                  const {
                    tokenStart: s
                  } = t;
                  const c = je(t, r, n, i, 1, s);
                  Z(t, r, 20);
                  t.assignable = 1;
                  return e(t, r, n, t.finishNode({
                    type: "MemberExpression",
                    object: o,
                    computed: true,
                    property: c,
                    optional: false
                  }, a), 0, a);
                }
                if (s === 67174408 || s === 67174409) {
                  t.assignable = 2;
                  return e(t, r, n, t.finishNode({
                    type: "TaggedTemplateExpression",
                    tag: o,
                    quasi: t.getToken() === 67174408 ? ot(t, r | 64, n) : nt(t, r | 64)
                  }, a), 0, a);
                }
              }
              return o;
            }(e, t, r, s, n, a);
            e.assignable = 2;
            return e.finishNode({
              type: "NewExpression",
              callee: c,
              arguments: e.getToken() === 67174411 ? st(e, t, r, n) : []
            }, o);
          }(e, t, r, s);
        case 134283389:
          return rt(e, t);
        case 131:
          {
            if (!d) {
              e.report(30, "PrivateField");
            }
            const {
              tokenStart: n
            } = e;
            const o = Ot(e, t, r, 0);
            if (e.getToken() !== 8673330) {
              throw new D(n, e.startPosition, 151);
            }
            return o;
          }
        case 86106:
          return function (e, t, r, n, o, i) {
            let a = ct(e, t);
            if (e.getToken() === 67108877) {
              return Ke(e, t, a, i, r, o, n);
            } else {
              if (n) {
                e.report(144);
              }
              a = Xe(e, t, r, o, i);
              e.assignable = 2;
              return Ge(e, t, r, a, o, 0, i);
            }
          }(e, t, r, o, s, u);
        case 8456256:
          if (e.options.jsx) {
            return Pt(e, t, r, 0, e.tokenStart);
          }
        default:
          if (ie(t, e.getToken())) {
            return yt(e, t, r);
          }
          e.report(30, T[e.getToken() & 255]);
      }
    }
    function Ke(e, t, r, n, o, i = 0, a = 0) {
      const s = e.tokenStart;
      const c = e.currentLocation;
      Y(e, t);
      const u = e.getToken();
      const l = e.features & 2 && !(u & -2147483648) && e.tokenValue === "defer";
      const d = e.features & 4 && !(u & -2147483648) && e.tokenValue === "source";
      if (l || d) {
        if (a) {
          e.report(144);
        }
        Y(e, t);
        const r = Xe(e, t, o, i, n, e.tokenValue);
        e.assignable = 2;
        return r;
      }
      if (!(t & 2)) {
        throw new D(s, c, 171);
      }
      if (u !== 209031 && e.tokenValue !== "meta") {
        e.report(176);
      } else if (u & -2147483648) {
        e.report(177);
      }
      e.assignable = 2;
      return e.finishNode({
        type: "MetaProperty",
        meta: r,
        property: ct(e, t)
      }, n);
    }
    function Xe(e, t, r, n, o, a = null) {
      Z(e, t | 32, 67174411);
      if (e.getToken() === 14) {
        e.report(145);
      }
      const s = Ue(e, t, r, 1, n, e.tokenStart);
      let c = null;
      if (e.getToken() === 18) {
        Z(e, t, 18);
        if (e.getToken() !== 16) {
          c = Ue(e, (t | 131072) ^ 131072, r, 1, n, e.tokenStart);
        }
        X(e, t, 18);
      }
      const u = i({
        type: "ImportExpression",
        source: s,
        options: c
      }, e.features & 2 || e.features & 4 ? {
        phase: a
      } : null);
      Z(e, t, 16);
      return e.finishNode(u, o);
    }
    function Ze(e, t) {
      if (!X(e, t, 20579)) {
        return [];
      }
      Z(e, t, 2162700);
      const r = [];
      const n = new Set();
      while (e.getToken() !== 1074790415) {
        const o = e.tokenStart;
        const i = et(e, t);
        Z(e, t, 21);
        const a = Je(e, t);
        const s = i.type === "Literal" ? i.value : i.name;
        if (n.has(s)) {
          e.report(147, s);
        }
        n.add(s);
        r.push(e.finishNode({
          type: "ImportAttribute",
          key: i,
          value: a
        }, o));
        if (e.getToken() !== 1074790415) {
          Z(e, t, 18);
        }
      }
      Z(e, t, 1074790415);
      return r;
    }
    function Je(e, t) {
      if (e.getToken() === 134283267) {
        return ut(e, t);
      }
      e.report(30, T[e.getToken() & 255]);
    }
    function et(e, t) {
      if (e.getToken() === 134283267) {
        return ut(e, t);
      } else if (e.getToken() & 143360) {
        return ct(e, t);
      } else {
        e.report(30, T[e.getToken() & 255]);
        return;
      }
    }
    function tt(e, t) {
      if (e.getToken() === 134283267) {
        if (!e.tokenValue.isWellFormed()) {
          e.report(173);
        }
        return ut(e, t);
      } else if (e.getToken() & 143360) {
        return ct(e, t);
      } else {
        e.report(30, T[e.getToken() & 255]);
        return;
      }
    }
    function rt(e, t) {
      const {
        tokenRaw: r,
        tokenValue: n,
        tokenStart: o
      } = e;
      Y(e, t);
      e.assignable = 2;
      const i = {
        type: "Literal",
        value: n,
        bigint: String(n)
      };
      if (e.options.raw) {
        i.raw = r;
      }
      return e.finishNode(i, o);
    }
    function nt(e, t) {
      e.assignable = 2;
      const {
        tokenValue: r,
        tokenRaw: n,
        tokenStart: o
      } = e;
      Z(e, t, 67174409);
      const i = [it(e, r, n, o, true)];
      return e.finishNode({
        type: "TemplateLiteral",
        expressions: [],
        quasis: i
      }, o);
    }
    function ot(e, t, r) {
      t = (t | 131072) ^ 131072;
      const {
        tokenValue: n,
        tokenRaw: o,
        tokenStart: i
      } = e;
      Z(e, t & -65 | 32, 67174408);
      const a = [it(e, n, o, i, false)];
      const s = [je(e, t & -65, r, 0, 1, e.tokenStart)];
      for (e.getToken() !== 1074790415 && e.report(83); e.setToken(W(e, t), true) !== 67174409;) {
        const {
          tokenValue: n,
          tokenRaw: o,
          tokenStart: i
        } = e;
        Z(e, t & -65 | 32, 67174408);
        a.push(it(e, n, o, i, false));
        s.push(je(e, t, r, 0, 1, e.tokenStart));
        if (e.getToken() !== 1074790415) {
          e.report(83);
        }
      }
      {
        const {
          tokenValue: r,
          tokenRaw: n,
          tokenStart: o
        } = e;
        Z(e, t, 67174409);
        a.push(it(e, r, n, o, true));
      }
      e.assignable = 2;
      return e.finishNode({
        type: "TemplateLiteral",
        expressions: s,
        quasis: a
      }, i);
    }
    function it(e, t, r, n, o) {
      const i = e.finishNode({
        type: "TemplateElement",
        value: {
          cooked: t,
          raw: r
        },
        tail: o
      }, n);
      const a = o ? 1 : 2;
      const {
        ranges: s
      } = e.options;
      if (s) {
        if (s.start) {
          i.start += 1;
        }
        if (s.end) {
          i.end -= a;
        }
        if (s.range) {
          i.range[0] += 1;
          i.range[1] -= a;
        }
      }
      if (e.options.loc) {
        i.loc.start.column += 1;
        i.loc.end.column -= a;
      }
      return i;
    }
    function at(e, t, r) {
      const n = e.tokenStart;
      Z(e, (t = (t | 131072) ^ 131072) | 32, 14);
      const o = Ue(e, t, r, 1, 0, e.tokenStart);
      e.assignable = 1;
      return e.finishNode({
        type: "SpreadElement",
        argument: o
      }, n);
    }
    function st(e, t, r, n) {
      Y(e, t | 32);
      const o = [];
      if (e.getToken() === 16) {
        Y(e, t | 64);
        return o;
      }
      while (e.getToken() !== 16 && (e.getToken() === 14 ? o.push(at(e, t, r)) : o.push(Ue(e, t, r, 1, n, e.tokenStart)), e.getToken() === 18) && (Y(e, t | 32), e.getToken() !== 16));
      Z(e, t | 64, 16);
      return o;
    }
    function ct(e, t) {
      const {
        tokenValue: r,
        tokenStart: n
      } = e;
      const o = r === "await" && !(e.getToken() & -2147483648);
      Y(e, t | (o ? 32 : 0));
      return e.finishNode({
        type: "Identifier",
        name: r
      }, n);
    }
    function ut(e, t) {
      const {
        tokenValue: r,
        tokenRaw: n,
        tokenStart: o
      } = e;
      if (e.getToken() === 134283389) {
        return rt(e, t);
      }
      const i = {
        type: "Literal",
        value: r
      };
      if (e.options.raw) {
        i.raw = n;
      }
      Y(e, t);
      e.assignable = 2;
      return e.finishNode(i, o);
    }
    function lt(e, t, r, n, o, i, a, s, c = 0) {
      var u;
      var l;
      Y(e, t | 32);
      const d = o ? K(e, t, 8391476) : 0;
      let p;
      let f = null;
      let h = r ? e.createScope() : undefined;
      if (e.getToken() === 67174411) {
        if (!(i & 1)) {
          e.report(39, "Function");
        }
      } else {
        var m;
        const n = !(c & 4) || t & 8 && t & 2 ? (a ? 1024 : 0) | 64 | (d ? 1024 : 0) : 4;
        te(e, t, e.getToken());
        if (r) {
          r.addVarOrBlock(t, e.tokenValue, n, e.tokenStart, e.currentLocation, c);
          h = (m = h) === null || m === undefined ? undefined : m.createChildScope(128);
          if (i && i & 2) {
            e.declareUnboundVariable(e.tokenValue);
          }
        }
        p = e.getToken();
        if (e.getToken() & 143360) {
          f = ct(e, t);
        } else {
          e.report(30, T[e.getToken() & 255]);
        }
      }
      {
        const e = 28416;
        t = (t | e) ^ e | 65536 | (a ? 2048 : 0) | (d ? 1024 : 0) | (d ? 0 : 262144);
      }
      h = (u = h) === null || u === undefined ? undefined : u.createChildScope(256);
      const g = Et(e, t & -524289 | 8192, h, n, 0, 1);
      const v = 524428;
      const y = ze(e, (t | v) ^ v | 36864, (l = h) === null || l === undefined ? undefined : l.createChildScope(64), n, p, h, 8);
      return e.finishNode({
        type: "FunctionDeclaration",
        id: f,
        params: g,
        body: y,
        async: a === 1,
        generator: d === 1
      }, s);
    }
    function dt(e, t, r, n, o, i) {
      var a;
      var s;
      var c;
      Y(e, t | 32);
      const u = K(e, t, 8391476);
      const l = (n ? 2048 : 0) | (u ? 1024 : 0);
      let d;
      let p = null;
      let f = e.createScopeIfLexical();
      const h = 552704;
      if (e.getToken() & 143360) {
        te(e, (t | h) ^ h | l, e.getToken());
        f = (a = f) === null || a === undefined ? undefined : a.createChildScope(128);
        d = e.getToken();
        p = ct(e, t);
      }
      t = (t | h) ^ h | 65536 | l | (u ? 0 : 262144);
      f = (s = f) === null || s === undefined ? undefined : s.createChildScope(256);
      const m = Et(e, t & -524289 | 8192, f, r, o, 1);
      const g = ze(e, t & -131229 | 36864, (c = f) === null || c === undefined ? undefined : c.createChildScope(64), r, d, f);
      e.assignable = 2;
      return e.finishNode({
        type: "FunctionExpression",
        id: p,
        params: m,
        body: g,
        async: n === 1,
        generator: u === 1
      }, i);
    }
    function pt(e, t, r, n, o, i, a, s, c = 0) {
      const {
        tokenStart: u
      } = e;
      Y(e, t | 32);
      const l = [];
      let d = 0;
      for (t = (t | 131072) ^ 131072; e.getToken() !== 20;) {
        if (X(e, t | 32, 18)) {
          l.push(null);
        } else {
          let o;
          const {
            tokenStart: u,
            tokenValue: p,
            currentLocation: f
          } = e;
          const h = e.getToken();
          if (h & 143360) {
            o = $e(e, t, n, s, 0, 1, i, 1, u);
            if (e.getToken() === 1077936155) {
              if (e.assignable & 2) {
                e.report(26);
              }
              Y(e, t | 32);
              if (r != null) {
                r.addVarOrBlock(t, p, s, u, f, c);
              }
              const l = Ue(e, t, n, 1, i, e.tokenStart);
              o = e.finishNode(a ? {
                type: "AssignmentPattern",
                left: o,
                right: l
              } : {
                type: "AssignmentExpression",
                operator: "=",
                left: o,
                right: l
              }, u);
              d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
            } else if (e.getToken() === 18 || e.getToken() === 20) {
              if (e.assignable & 2) {
                d |= 16;
              } else if (r != null) {
                r.addVarOrBlock(t, p, s, u, f, c);
              }
              d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
            } else {
              d |= s & 1 ? 32 : s & 2 ? 0 : 16;
              o = Ge(e, t, n, o, i, 0, u);
              if (e.getToken() !== 18 && e.getToken() !== 20) {
                if (e.getToken() !== 1077936155) {
                  d |= 16;
                }
                o = qe(e, t, n, i, a, u, o);
              } else if (e.getToken() !== 1077936155) {
                d |= e.assignable & 1 ? 32 : 16;
              }
            }
          } else if (h & 2097152) {
            o = e.getToken() === 2162700 ? gt(e, t, r, n, 0, i, a, s, c) : pt(e, t, r, n, 0, i, a, s, c);
            d |= e.destructible;
            e.assignable = e.destructible & 16 ? 2 : 1;
            if (e.getToken() === 18 || e.getToken() === 20) {
              if (e.assignable & 2) {
                d |= 16;
              }
            } else if (e.destructible & 8) {
              e.report(71);
            } else {
              o = Ge(e, t, n, o, i, 0, u);
              d = e.assignable & 2 ? 16 : 0;
              if (e.getToken() !== 18 && e.getToken() !== 20) {
                o = qe(e, t, n, i, a, u, o);
              } else if (e.getToken() !== 1077936155) {
                d |= e.assignable & 1 ? 32 : 16;
              }
            }
          } else if (h === 14) {
            o = ht(e, t, r, n, 20, s, 0, i, a, c);
            d |= e.destructible;
            if (e.getToken() !== 18 && e.getToken() !== 20) {
              e.report(30, T[e.getToken() & 255]);
            }
          } else {
            o = Ye(e, t, n, 1, 0, 1);
            if (e.getToken() !== 18 && e.getToken() !== 20) {
              o = qe(e, t, n, i, a, u, o);
              if (!(s & 3) && h === 67174411) {
                d |= 16;
              }
            } else if (e.assignable & 2) {
              d |= 16;
            } else if (h === 67174411) {
              d |= e.assignable & 1 && s & 3 ? 32 : 16;
            }
          }
          l.push(o);
          if (!X(e, t | 32, 18)) {
            break;
          }
          if (e.getToken() === 20) {
            break;
          }
        }
      }
      Z(e, t, 20);
      const p = e.finishNode({
        type: a ? "ArrayPattern" : "ArrayExpression",
        elements: l
      }, u);
      if (!o && e.getToken() & 4194304) {
        return ft(e, t, n, d, i, a, u, p);
      } else {
        e.destructible = d;
        return p;
      }
    }
    function ft(e, t, r, n, o, i, a, s) {
      if (e.getToken() !== 1077936155) {
        e.report(26);
      }
      Y(e, t | 32);
      if (n & 16) {
        e.report(26);
      }
      if (!i) {
        J(e, s);
      }
      const {
        tokenStart: c
      } = e;
      const u = Ue(e, t, r, 1, o, c);
      e.destructible = (n | 72) ^ 72 | (e.destructible & 128 ? 128 : 0) | (e.destructible & 256 ? 256 : 0);
      return e.finishNode(i ? {
        type: "AssignmentPattern",
        left: s,
        right: u
      } : {
        type: "AssignmentExpression",
        left: s,
        operator: "=",
        right: u
      }, a);
    }
    function ht(e, t, r, n, o, i, a, s, c, u = 0) {
      const {
        tokenStart: l
      } = e;
      Y(e, t | 32);
      let d = null;
      let p = 0;
      const {
        tokenValue: f,
        tokenStart: h,
        currentLocation: m
      } = e;
      let g = e.getToken();
      if (g & 143360) {
        e.assignable = 1;
        d = $e(e, t, n, i, 0, 1, s, 1, h);
        g = e.getToken();
        d = Ge(e, t, n, d, s, 0, h);
        if (e.getToken() !== 18 && e.getToken() !== o) {
          if (e.assignable & 2 && e.getToken() === 1077936155) {
            e.report(71);
          }
          p |= 16;
          d = qe(e, t, n, s, c, h, d);
        }
        if (e.assignable & 2) {
          p |= 16;
        } else if (g === o || g === 18) {
          if (r != null) {
            r.addVarOrBlock(t, f, i, h, m, u);
          }
        } else {
          p |= 32;
        }
        p |= e.destructible & 128 ? 128 : 0;
      } else if (g === o) {
        e.report(41);
      } else {
        if (!(g & 2097152)) {
          p |= 32;
          d = Ye(e, t, n, 1, s, 1);
          const {
            tokenStart: r
          } = e;
          const i = e.getToken();
          if (i === 1077936155) {
            if (e.assignable & 2) {
              e.report(26);
            }
            d = qe(e, t, n, s, c, r, d);
            p |= 16;
          } else {
            if (i === 18) {
              p |= 16;
            } else if (i !== o) {
              d = qe(e, t, n, s, c, r, d);
            }
            p |= e.assignable & 1 ? 32 : 16;
          }
          e.destructible = p;
          if (e.getToken() !== o && e.getToken() !== 18) {
            e.report(163);
          }
          return e.finishNode({
            type: c ? "RestElement" : "SpreadElement",
            argument: d
          }, l);
        }
        d = e.getToken() === 2162700 ? gt(e, t, r, n, 1, s, c, i, u) : pt(e, t, r, n, 1, s, c, i, u);
        g = e.getToken();
        if (g !== 1077936155 && g !== o && g !== 18) {
          if (e.destructible & 8) {
            e.report(71);
          }
          d = Ge(e, t, n, d, s, 0, h);
          p |= e.assignable & 1 ? 0 : 16;
          if (~e.getToken() & 4194304) {
            if (!(~e.getToken() & 8388608)) {
              d = We(e, t, n, 1, h, 4, g, d);
            }
            if (X(e, t | 32, 22)) {
              d = Ve(e, t, n, d, h);
            }
            p |= e.assignable & 1 ? 32 : 16;
          } else {
            if (e.getToken() !== 1077936155) {
              p |= 16;
            }
            d = qe(e, t, n, s, c, h, d);
          }
        } else {
          p |= o === 1074790415 && g !== 1077936155 ? 16 : e.destructible;
        }
      }
      if (e.getToken() !== o) {
        if (i & 1) {
          p |= a ? 16 : 32;
        }
        if (X(e, t | 32, 1077936155)) {
          if (p & 16) {
            e.report(26);
          }
          J(e, d);
          const r = Ue(e, t, n, 1, s, e.tokenStart);
          d = e.finishNode(c ? {
            type: "AssignmentPattern",
            left: d,
            right: r
          } : {
            type: "AssignmentExpression",
            left: d,
            operator: "=",
            right: r
          }, h);
          p = 16;
        } else {
          p |= 16;
        }
      }
      e.destructible = p;
      return e.finishNode({
        type: c ? "RestElement" : "SpreadElement",
        argument: d
      }, l);
    }
    function mt(e, t, r, n, o, i) {
      var a;
      const c = (n & 64 ? 0 : 16896) | 11264;
      t = (t | c) ^ c | (n & 8 ? 1024 : 0) | (n & 16 ? 2048 : 0) | (n & 64 ? 16384 : 0) | 98560;
      let u = e.createScopeIfLexical(256);
      const l = function (e, t, r, n, o, i, a) {
        Z(e, t, 67174411);
        const s = [];
        e.flags = (e.flags | 128) ^ 128;
        e.strictReservedRange = null;
        e.firstAwaitLocation = null;
        if (e.getToken() === 16) {
          if (o & 512) {
            e.report(37, "Setter", "one", "");
          }
          Y(e, t);
          return s;
        }
        if (o & 256) {
          e.report(37, "Getter", "no", "s");
        }
        if (o & 512 && e.getToken() === 14) {
          e.report(38);
        }
        t = (t | 131072) ^ 131072;
        let c = 0;
        let u = 0;
        while (e.getToken() !== 18) {
          var l;
          let i = null;
          const {
            tokenStart: d
          } = e;
          if (e.getToken() & 143360) {
            if (!(t & 1)) {
              if (!(~e.getToken() & 36864)) {
                e.flags |= 256;
                if ((l = e.strictReservedRange) === null || l === undefined) {
                  e.strictReservedRange = [d, e.currentLocation];
                }
              }
              if (!(~e.getToken() & 537079808)) {
                e.flags |= 512;
              }
            }
            i = Rt(e, t, r, o | 1);
          } else {
            if (e.getToken() === 2162700) {
              i = gt(e, t, r, n, 1, a, 1, 1);
            } else if (e.getToken() === 69271571) {
              i = pt(e, t, r, n, 1, a, 1, 1);
            } else if (e.getToken() === 14) {
              i = ht(e, t, r, n, 16, 1, 0, a, 1);
            }
            u = 1;
            if (e.destructible & 48) {
              e.report(50);
            }
          }
          if (e.getToken() === 1077936155) {
            Y(e, t | 32);
            u = 1;
            const r = Ue(e, t, n, 1, 0, e.tokenStart);
            i = e.finishNode({
              type: "AssignmentPattern",
              left: i,
              right: r
            }, d);
          }
          c++;
          s.push(i);
          if (!X(e, t, 18)) {
            break;
          }
          if (e.getToken() === 16) {
            break;
          }
        }
        if (o & 512 && c !== 1) {
          e.report(37, "Setter", "one", "");
        }
        if (r != null) {
          r.reportScopeError();
        }
        if (u) {
          e.flags |= 128;
        }
        Z(e, t, 16);
        return s;
      }(e, t & -524289 | 8192, u, r, n, 0, o);
      u = (a = u) === null || a === undefined ? undefined : a.createChildScope(64);
      const d = ze(e, t & -655373 | 36864, u, r, undefined, u?.parent);
      return e.finishNode({
        type: "FunctionExpression",
        params: l,
        body: d,
        async: (n & 16) > 0,
        generator: (n & 8) > 0,
        id: null
      }, i);
    }
    function gt(e, t, r, n, o, i, a, s, c = 0) {
      const {
        tokenStart: u
      } = e;
      Y(e, t);
      const l = [];
      let d = 0;
      let p = 0;
      for (t = (t | 131072) ^ 131072; e.getToken() !== 1074790415;) {
        const {
          tokenValue: o,
          tokenStart: u,
          currentLocation: f
        } = e;
        const h = e.getToken();
        if (h === 14) {
          l.push(ht(e, t, r, n, 1074790415, s, 0, i, a, c));
        } else {
          let m;
          let g = 0;
          let v = null;
          if (e.getToken() & 143360 || e.getToken() === -2147483527 || e.getToken() === -2147483526) {
            if (e.getToken() === -2147483526) {
              d |= 16;
            }
            v = ct(e, t);
            if (e.getToken() === 18 || e.getToken() === 1074790415 || e.getToken() === 1077936155) {
              g |= 4;
              if (t & 1 && !(~h & 537079808)) {
                d |= 16;
              } else {
                ee(e, t, s, h, 0);
              }
              if (r != null) {
                r.addVarOrBlock(t, o, s, u, f, c);
              }
              if (X(e, t | 32, 1077936155)) {
                d |= 8;
                const r = Ue(e, t, n, 1, i, e.tokenStart);
                d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
                m = e.finishNode({
                  type: "AssignmentPattern",
                  left: e.cloneIdentifier(v),
                  right: r
                }, u);
              } else {
                d |= (h === 209006 ? 128 : 0) | (h === -2147483527 ? 16 : 0);
                m = e.cloneIdentifier(v);
              }
            } else if (X(e, t | 32, 21)) {
              const {
                tokenStart: u,
                currentLocation: l
              } = e;
              if (o === "__proto__") {
                p++;
              }
              if (e.getToken() & 143360) {
                const o = e.getToken();
                const p = e.tokenValue;
                m = $e(e, t, n, s, 0, 1, i, 1, u);
                const f = e.getToken();
                m = Ge(e, t, n, m, i, 0, u);
                if (e.getToken() === 18 || e.getToken() === 1074790415) {
                  if (f === 1077936155 || f === 1074790415 || f === 18) {
                    d |= e.destructible & 128 ? 128 : 0;
                    if (e.assignable & 2) {
                      d |= 16;
                    } else if (!(~o & 143360) && r != null) {
                      r.addVarOrBlock(t, p, s, u, l, c);
                    }
                  } else {
                    d |= e.assignable & 1 ? 32 : 16;
                  }
                } else if (~e.getToken() & 4194304) {
                  d |= 16;
                  if (!(~e.getToken() & 8388608)) {
                    m = We(e, t, n, 1, u, 4, f, m);
                  }
                  if (X(e, t | 32, 22)) {
                    m = Ve(e, t, n, m, u);
                  }
                } else {
                  if (e.assignable & 2) {
                    d |= 16;
                  } else if (f !== 1077936155) {
                    d |= 32;
                  } else if (r != null) {
                    r.addVarOrBlock(t, p, s, u, l, c);
                  }
                  m = qe(e, t, n, i, a, u, m);
                }
              } else if (~e.getToken() & 2097152) {
                m = Ye(e, t, n, 1, i, 1);
                d |= e.assignable & 1 ? 32 : 16;
                if (e.getToken() === 18 || e.getToken() === 1074790415) {
                  if (e.assignable & 2) {
                    d |= 16;
                  }
                } else {
                  m = Ge(e, t, n, m, i, 0, u);
                  d = e.assignable & 2 ? 16 : 0;
                  if (e.getToken() !== 18 && h !== 1074790415) {
                    if (e.getToken() !== 1077936155) {
                      d |= 16;
                    }
                    m = qe(e, t, n, i, a, u, m);
                  }
                }
              } else {
                m = e.getToken() === 69271571 ? pt(e, t, r, n, 0, i, a, s, c) : gt(e, t, r, n, 0, i, a, s, c);
                d = e.destructible;
                e.assignable = d & 16 ? 2 : 1;
                if (e.getToken() === 18 || e.getToken() === 1074790415) {
                  if (e.assignable & 2) {
                    d |= 16;
                  }
                } else if (e.destructible & 8) {
                  e.report(71);
                } else {
                  m = Ge(e, t, n, m, i, 0, u);
                  d = e.assignable & 2 ? 16 : 0;
                  if (~e.getToken() & 4194304) {
                    if (!(~e.getToken() & 8388608)) {
                      m = We(e, t, n, 1, u, 4, h, m);
                    }
                    if (X(e, t | 32, 22)) {
                      m = Ve(e, t, n, m, u);
                    }
                    d |= e.assignable & 1 ? 32 : 16;
                  } else {
                    m = He(e, t, n, i, a, u, m);
                  }
                }
              }
            } else if (e.getToken() === 69271571) {
              d |= 16;
              if (h === 209005) {
                g |= 16;
              }
              g |= (h === 209008 ? 256 : h === 209009 ? 512 : 1) | 2;
              v = vt(e, t, n, i);
              d |= e.assignable;
              m = mt(e, t, n, g, i, e.tokenStart);
            } else if (e.getToken() & 143360) {
              d |= 16;
              if (h === -2147483527) {
                e.report(95);
              }
              if (h === 209005) {
                if (e.flags & 1) {
                  e.report(134);
                }
                g |= 17;
              } else if (h === 209008) {
                g |= 256;
              } else if (h === 209009) {
                g |= 512;
              } else {
                e.report(0);
              }
              v = ct(e, t);
              m = mt(e, t, n, g, i, e.tokenStart);
            } else if (e.getToken() === 67174411) {
              d |= 16;
              g |= 1;
              m = mt(e, t, n, g, i, e.tokenStart);
            } else if (e.getToken() === 8391476) {
              d |= 16;
              if (h === 209008) {
                e.report(42);
              } else if (h === 209009) {
                e.report(43);
              } else if (h !== 209005) {
                e.report(30, T[52]);
              }
              Y(e, t);
              g |= (h === 209005 ? 16 : 0) | 9;
              if (e.getToken() & 143360) {
                v = ct(e, t);
              } else if (~e.getToken() & 134217728) {
                if (e.getToken() === 69271571) {
                  g |= 2;
                  v = vt(e, t, n, i);
                  d |= e.assignable;
                } else {
                  e.report(30, T[e.getToken() & 255]);
                }
              } else {
                v = ut(e, t);
              }
              m = mt(e, t, n, g, i, e.tokenStart);
            } else if (~e.getToken() & 134217728) {
              e.report(135);
            } else {
              if (h === 209005) {
                g |= 16;
              }
              g |= h === 209008 ? 256 : h === 209009 ? 512 : 1;
              d |= 16;
              v = ut(e, t);
              m = mt(e, t, n, g, i, e.tokenStart);
            }
          } else if (~e.getToken() & 134217728) {
            if (e.getToken() === 69271571) {
              v = vt(e, t, n, i);
              d |= e.destructible & 256 ? 256 : 0;
              g |= 2;
              if (e.getToken() === 21) {
                Y(e, t | 32);
                const {
                  tokenStart: o,
                  tokenValue: u,
                  currentLocation: l
                } = e;
                const p = e.getToken();
                if (e.getToken() & 143360) {
                  m = $e(e, t, n, s, 0, 1, i, 1, o);
                  const f = e.getToken();
                  m = Ge(e, t, n, m, i, 0, o);
                  if (~e.getToken() & 4194304) {
                    if (e.getToken() === 18 || e.getToken() === 1074790415) {
                      if (f === 1077936155 || f === 1074790415 || f === 18) {
                        if (e.assignable & 2) {
                          d |= 16;
                        } else if (!(~p & 143360) && r != null) {
                          r.addVarOrBlock(t, u, s, o, l, c);
                        }
                      } else {
                        d |= e.assignable & 1 ? 32 : 16;
                      }
                    } else {
                      d |= 16;
                      m = qe(e, t, n, i, a, o, m);
                    }
                  } else {
                    d |= e.assignable & 1 ? f === 1077936155 ? 0 : 32 : 16;
                    m = He(e, t, n, i, a, o, m);
                  }
                } else if (~e.getToken() & 2097152) {
                  m = Ye(e, t, n, 1, 0, 1);
                  d |= e.assignable & 1 ? 32 : 16;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else {
                    m = Ge(e, t, n, m, i, 0, o);
                    d = e.assignable & 1 ? 0 : 16;
                    if (e.getToken() !== 18 && e.getToken() !== 1074790415) {
                      if (e.getToken() !== 1077936155) {
                        d |= 16;
                      }
                      m = qe(e, t, n, i, a, o, m);
                    }
                  }
                } else {
                  m = e.getToken() === 69271571 ? pt(e, t, r, n, 0, i, a, s, c) : gt(e, t, r, n, 0, i, a, s, c);
                  d = e.destructible;
                  e.assignable = d & 16 ? 2 : 1;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else if (d & 8) {
                    e.report(62);
                  } else {
                    m = Ge(e, t, n, m, i, 0, o);
                    d = e.assignable & 2 ? d | 16 : 0;
                    if (~e.getToken() & 4194304) {
                      if (!(~e.getToken() & 8388608)) {
                        m = We(e, t, n, 1, o, 4, h, m);
                      }
                      if (X(e, t | 32, 22)) {
                        m = Ve(e, t, n, m, o);
                      }
                      d |= e.assignable & 1 ? 32 : 16;
                    } else {
                      if (e.getToken() !== 1077936155) {
                        d |= 16;
                      }
                      m = He(e, t, n, i, a, o, m);
                    }
                  }
                }
              } else if (e.getToken() === 67174411) {
                g |= 1;
                m = mt(e, t, n, g, i, e.tokenStart);
                d = 16;
              } else {
                e.report(44);
              }
            } else if (h === 8391476) {
              Z(e, t | 32, 8391476);
              g |= 8;
              if (e.getToken() & 143360) {
                const r = e.getToken();
                v = ct(e, t);
                g |= 1;
                if (e.getToken() !== 67174411) {
                  throw new D(e.tokenStart, e.currentLocation, r === 209005 ? 46 : r === 209008 || e.getToken() === 209009 ? 45 : 47, T[r & 255]);
                }
                d |= 16;
                m = mt(e, t, n, g, i, e.tokenStart);
              } else if (~e.getToken() & 134217728) {
                if (e.getToken() === 69271571) {
                  d |= 16;
                  g |= 3;
                  v = vt(e, t, n, i);
                  m = mt(e, t, n, g, i, e.tokenStart);
                } else {
                  e.report(128);
                }
              } else {
                d |= 16;
                v = ut(e, t);
                g |= 1;
                m = mt(e, t, n, g, i, e.tokenStart);
              }
            } else {
              e.report(30, T[h & 255]);
            }
          } else {
            v = ut(e, t);
            if (e.getToken() === 21) {
              Z(e, t | 32, 21);
              const {
                tokenStart: u
              } = e;
              if (o === "__proto__") {
                p++;
              }
              if (e.getToken() & 143360) {
                m = $e(e, t, n, s, 0, 1, i, 1, u);
                const {
                  tokenValue: o,
                  tokenStart: l,
                  currentLocation: p
                } = e;
                const f = e.getToken();
                m = Ge(e, t, n, m, i, 0, u);
                if (e.getToken() === 18 || e.getToken() === 1074790415) {
                  if (f === 1077936155 || f === 1074790415 || f === 18) {
                    if (e.assignable & 2) {
                      d |= 16;
                    } else if (r != null) {
                      r.addVarOrBlock(t, o, s, l, p, c);
                    }
                  } else {
                    d |= e.assignable & 1 ? 32 : 16;
                  }
                } else if (e.getToken() === 1077936155) {
                  if (e.assignable & 2) {
                    d |= 16;
                  }
                  m = qe(e, t, n, i, a, u, m);
                } else {
                  d |= 16;
                  m = qe(e, t, n, i, a, u, m);
                }
              } else if (~e.getToken() & 2097152) {
                m = Ye(e, t, n, 1, 0, 1);
                d |= e.assignable & 1 ? 32 : 16;
                if (e.getToken() === 18 || e.getToken() === 1074790415) {
                  if (e.assignable & 2) {
                    d |= 16;
                  }
                } else {
                  m = Ge(e, t, n, m, i, 0, u);
                  d = e.assignable & 1 ? 0 : 16;
                  if (e.getToken() !== 18 && e.getToken() !== 1074790415) {
                    if (e.getToken() !== 1077936155) {
                      d |= 16;
                    }
                    m = qe(e, t, n, i, a, u, m);
                  }
                }
              } else {
                m = e.getToken() === 69271571 ? pt(e, t, r, n, 0, i, a, s, c) : gt(e, t, r, n, 0, i, a, s, c);
                d = e.destructible;
                e.assignable = d & 16 ? 2 : 1;
                if (e.getToken() === 18 || e.getToken() === 1074790415) {
                  if (e.assignable & 2) {
                    d |= 16;
                  }
                } else if (~e.destructible & 8) {
                  m = Ge(e, t, n, m, i, 0, u);
                  d = e.assignable & 2 ? 16 : 0;
                  if (~e.getToken() & 4194304) {
                    if (!(~e.getToken() & 8388608)) {
                      m = We(e, t, n, 1, u, 4, h, m);
                    }
                    if (X(e, t | 32, 22)) {
                      m = Ve(e, t, n, m, u);
                    }
                    d |= e.assignable & 1 ? 32 : 16;
                  } else {
                    m = He(e, t, n, i, a, u, m);
                  }
                }
              }
            } else if (e.getToken() === 67174411) {
              g |= 1;
              m = mt(e, t, n, g, i, e.tokenStart);
              d = 16;
            } else {
              e.report(136);
            }
          }
          d |= e.destructible & 128 ? 128 : 0;
          e.destructible = d;
          l.push(e.finishNode({
            type: "Property",
            key: v,
            value: m,
            kind: g & 768 ? g & 512 ? "set" : "get" : "init",
            computed: (g & 2) > 0,
            method: (g & 1) > 0,
            shorthand: (g & 4) > 0
          }, u));
        }
        d |= e.destructible;
        if (e.getToken() !== 18) {
          break;
        }
        Y(e, t);
      }
      Z(e, t, 1074790415);
      if (p > 1) {
        d |= 64;
      }
      const f = e.finishNode({
        type: a ? "ObjectPattern" : "ObjectExpression",
        properties: l
      }, u);
      if (!o && e.getToken() & 4194304) {
        return ft(e, t, n, d, i, a, u, f);
      } else {
        e.destructible = d;
        return f;
      }
    }
    function vt(e, t, r, n) {
      Y(e, t | 32);
      const o = Ue(e, (t | 131072) ^ 131072, r, 1, n, e.tokenStart);
      Z(e, t, 20);
      return o;
    }
    function yt(e, t, r) {
      const {
        tokenValue: n,
        tokenStart: o,
        currentLocation: i
      } = e;
      let a = 0;
      let s = 0;
      if (~e.getToken() & 537079808) {
        if (!(~e.getToken() & 36864)) {
          s = 1;
        }
      } else {
        a = 1;
      }
      const c = ct(e, t);
      e.assignable = 1;
      if (e.getToken() === 10) {
        const u = e.options.lexical ? he(e, t, n, o, i) : undefined;
        if (a) {
          e.flags |= 128;
        }
        if (s) {
          e.flags |= 256;
        }
        return wt(e, t, u, r, [c], 0, o);
      }
      return c;
    }
    function _t(e, t, r, n, o, i, a, s, c, u = 0) {
      if (!a) {
        e.report(57);
      }
      if (i) {
        e.report(51);
      }
      e.flags &= -129;
      return wt(e, t, e.options.lexical ? he(e, t, n, c, e.currentLocation) : undefined, r, [o], s, c, u);
    }
    function bt(e, t, r, n, o, i, a, s, c = 0) {
      if (!i) {
        e.report(57);
      }
      for (let t = 0; t < o.length; ++t) {
        J(e, o[t]);
      }
      return wt(e, t, r, n, o, a, s, c);
    }
    function wt(e, t, r, n, o, i, a, s = 0) {
      var c;
      if (e.flags & 1) {
        e.report(48);
      }
      Z(e, t | 32, 10);
      const u = 535552;
      t = (t | u) ^ u | (i ? 2048 : 0);
      const l = e.getToken() !== 2162700;
      let d;
      if ((c = r) !== null && c !== undefined) {
        c.reportScopeError();
      }
      if (l) {
        e.flags = (e.flags | 4928) ^ 4928;
        d = Ue(e, t, n, 1, 0, e.tokenStart);
      } else {
        var p;
        const o = 131084;
        d = ze(e, (t | o) ^ o | 4096, r = (p = r) === null || p === undefined ? undefined : p.createChildScope(64), n, undefined, undefined, 16);
        switch (e.getToken()) {
          case 69271571:
            if (!(e.flags & 1)) {
              e.report(118);
            }
            e.flags |= 8192;
            break;
          case 67108877:
          case 67174409:
          case 22:
            e.report(119);
          case 67174411:
            if (!(e.flags & 1)) {
              e.report(118);
            }
            e.flags |= 1024;
        }
        if (!(~e.getToken() & 8388608) && !(e.flags & 1) && (e.getToken() !== 8673330 || s !== 32)) {
          e.report(30, T[e.getToken() & 255]);
        }
        if (!(~e.getToken() & 33619968)) {
          e.report(127);
        }
      }
      e.assignable = 2;
      return e.finishNode({
        type: "ArrowFunctionExpression",
        params: o,
        body: d,
        async: i === 1,
        expression: l,
        generator: false
      }, a);
    }
    function Et(e, t, r, n, o, i) {
      Z(e, t, 67174411);
      e.flags = (e.flags | 128) ^ 128;
      e.strictReservedRange = null;
      e.firstAwaitLocation = null;
      const a = [];
      if (X(e, t, 16)) {
        return a;
      }
      t = (t | 131072) ^ 131072;
      let s = 0;
      while (e.getToken() !== 18) {
        var c;
        let u;
        const {
          tokenStart: l
        } = e;
        const d = e.getToken();
        if (d & 143360) {
          if (!(t & 1)) {
            if (!(~d & 36864)) {
              e.flags |= 256;
              if ((c = e.strictReservedRange) === null || c === undefined) {
                e.strictReservedRange = [l, e.currentLocation];
              }
            }
            if (!(~d & 537079808)) {
              e.flags |= 512;
            }
          }
          u = Rt(e, t, r, i | 1);
        } else {
          if (d === 2162700) {
            u = gt(e, t, r, n, 1, o, 1, i);
          } else if (d === 69271571) {
            u = pt(e, t, r, n, 1, o, 1, i);
          } else if (d === 14) {
            u = ht(e, t, r, n, 16, i, 0, o, 1);
          } else {
            e.report(30, T[d & 255]);
          }
          s = 1;
          if (e.destructible & 48) {
            e.report(50);
          }
        }
        if (e.getToken() === 1077936155) {
          Y(e, t | 32);
          s = 1;
          const r = Ue(e, t, n, 1, o, e.tokenStart);
          u = e.finishNode({
            type: "AssignmentPattern",
            left: u,
            right: r
          }, l);
        }
        a.push(u);
        if (!X(e, t, 18)) {
          break;
        }
        if (e.getToken() === 16) {
          break;
        }
      }
      if (s) {
        e.flags |= 128;
      }
      if ((s || t & 1) && r != null) {
        r.reportScopeError();
      }
      Z(e, t, 16);
      return a;
    }
    function Dt(e, t, r, n, o) {
      if (e.getToken() === 209006) {
        e.report(31);
      }
      if (t & 1025 && e.getToken() === 241771) {
        e.report(32);
      }
      ae(e, t, e.getToken());
      if (!(~e.getToken() & 36864)) {
        e.flags |= 256;
      }
      return _t(e, t & -524289 | 2048, r, e.tokenValue, ct(e, t), 0, n, 1, o);
    }
    function Tt(e, t, r, n, o, i, a, s) {
      var c;
      Y(e, t | 32);
      const u = (c = e.createScopeIfLexical()) === null || c === undefined ? undefined : c.createChildScope(512);
      const l = e.firstAwaitLocation;
      e.firstAwaitLocation = null;
      if (X(e, t = (t | 131072) ^ 131072, 16)) {
        if (e.getToken() === 10) {
          if (a & 1) {
            e.report(48);
          }
          return bt(e, t, u, r, [], o, 1, s);
        } else {
          if (t & 1 || !e.options.webcompat) {
            e.assignable = 2;
          } else {
            e.assignable = 4;
          }
          if (l) {
            e.firstAwaitLocation = l;
          }
          return e.finishNode({
            type: "CallExpression",
            callee: n,
            arguments: [],
            optional: false
          }, s);
        }
      }
      let d;
      let p = 0;
      let f = 0;
      e.destructible = (e.destructible | 384) ^ 384;
      const h = [];
      while (e.getToken() !== 16) {
        const {
          tokenStart: o,
          currentLocation: a
        } = e;
        const c = e.getToken();
        if (c & 143360) {
          if (u != null) {
            u.addBlockName(t, e.tokenValue, i, o, a);
          }
          if (~c & 537079808) {
            if (!(~c & 36864)) {
              e.flags |= 256;
            }
          } else {
            e.flags |= 512;
          }
          d = $e(e, t, r, i, 0, 1, 1, 1, o);
          if (e.getToken() === 16 || e.getToken() === 18) {
            if (e.assignable & 2) {
              p |= 16;
              f = 1;
            }
          } else {
            if (e.getToken() === 1077936155) {
              f = 1;
            } else {
              p |= 16;
            }
            d = Ge(e, t, r, d, 1, 0, o);
            if (e.getToken() !== 16 && e.getToken() !== 18) {
              d = qe(e, t, r, 1, 0, o, d);
            }
          }
        } else if (c & 2097152) {
          d = c === 2162700 ? gt(e, t, u, r, 0, 1, 0, i) : pt(e, t, u, r, 0, 1, 0, i);
          p |= e.destructible;
          f = 1;
          if (e.getToken() !== 16 && e.getToken() !== 18) {
            if (p & 8) {
              e.report(124);
            }
            d = Ge(e, t, r, d, 0, 0, o);
            p |= 16;
            if (!(~e.getToken() & 8388608)) {
              d = We(e, t, r, 1, s, 4, c, d);
            }
            if (X(e, t | 32, 22)) {
              d = Ve(e, t, r, d, s);
            }
          }
        } else {
          if (c !== 14) {
            d = Ue(e, t, r, 1, 0, o);
            p = 0;
            h.push(d);
            while (X(e, t | 32, 18)) {
              h.push(Ue(e, t, r, 1, 0, o));
            }
            p |= e.assignable;
            Z(e, t, 16);
            e.destructible = p | 16;
            if (t & 1 || !e.options.webcompat) {
              e.assignable = 2;
            } else {
              e.assignable = 4;
            }
            if (l) {
              e.firstAwaitLocation = l;
            }
            return e.finishNode({
              type: "CallExpression",
              callee: n,
              arguments: h,
              optional: false
            }, s);
          }
          d = ht(e, t, u, r, 16, i, 1, 1, 0);
          p |= (e.getToken() === 16 ? 0 : 16) | e.destructible;
          f = 1;
        }
        h.push(d);
        if (!X(e, t | 32, 18)) {
          break;
        }
      }
      Z(e, t, 16);
      p |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
      if (e.getToken() === 10) {
        if (p & 48) {
          e.report(27);
        }
        if (e.flags & 1 || a & 1) {
          e.report(48);
        }
        if (p & 128) {
          const t = e.firstAwaitLocation;
          if (t) {
            throw new D(t.start, t.end, 31);
          }
          e.report(31);
        }
        if (t & 1025 && p & 256) {
          e.report(32);
        }
        if (f) {
          e.flags |= 128;
        }
        return bt(e, t | 2048, u, r, h, o, 1, s);
      }
      if (p & 64) {
        e.report(63);
      }
      if (p & 8) {
        e.report(62);
      }
      if (t & 1 || !e.options.webcompat) {
        e.assignable = 2;
      } else {
        e.assignable = 4;
      }
      if (l) {
        e.firstAwaitLocation = l;
      }
      return e.finishNode({
        type: "CallExpression",
        callee: n,
        arguments: h,
        optional: false
      }, s);
    }
    function kt(e, t, r, n, o) {
      let a;
      let s;
      if (e.leadingDecorators.decorators.length) {
        a = e.leadingDecorators.start;
        s = [...e.leadingDecorators.decorators];
        e.leadingDecorators.decorators.length = 0;
      } else {
        a = e.tokenStart;
        s = At(e, t, n);
      }
      Z(e, t = (t | 16385) ^ 16384, 86094);
      let c = null;
      let u = null;
      const {
        tokenValue: l,
        tokenStart: d,
        currentLocation: p
      } = e;
      if (e.getToken() & 4096 && e.getToken() !== 20565) {
        if (re(e, t, e.getToken())) {
          e.report(120);
        }
        if (!(~e.getToken() & 537079808)) {
          e.report(121);
        }
        if (r) {
          r.addBlockName(t, l, 32, d, p);
          if (o && o & 2) {
            e.declareUnboundVariable(l);
          }
        }
        c = ct(e, t);
      } else if (!(o & 1)) {
        e.report(39, "Class");
      }
      let f = t;
      if (X(e, t | 32, 20565)) {
        u = Ye(e, t, n, 0, 0, 0);
        f |= 512;
      } else {
        f = (f | 512) ^ 512;
      }
      const h = xt(e, f, t, r, n, 2, 0, 8);
      return e.finishNode(i({
        type: "ClassDeclaration",
        id: c,
        superClass: u,
        body: h
      }, e.features & 1 ? {
        decorators: s
      } : null), a);
    }
    function At(e, t, r) {
      const n = [];
      if (e.features & 1) {
        while (e.getToken() === 133) {
          n.push(Ct(e, t, r));
        }
      }
      return n;
    }
    function Ct(e, t, r) {
      const n = e.tokenStart;
      Y(e, t | 32);
      const o = e.tokenStart;
      let i;
      if (e.getToken() === 67174411) {
        i = $e(e, t, r, 2, 0, 1, 0, 1, n);
      } else {
        const n = e.getToken();
        if (~n & 143360 && !ie(t, n) || t & 1 && !(~n & 36864)) {
          e.report(30, T[n & 255]);
        }
        if (n === 209006 && t & 2050) {
          e.report(112);
        }
        if (n === 241771 && t & 1024) {
          e.report(97, "yield");
        }
        let a = ct(e, t | 64);
        while (e.getToken() === 67108877) {
          Y(e, (t | 262152) ^ 8);
          const n = Qe(e, t | 64, r, 1);
          a = e.finishNode({
            type: "MemberExpression",
            object: a,
            computed: false,
            property: n,
            optional: false
          }, o);
        }
        i = a;
        if (e.getToken() === 67174411) {
          const n = st(e, t, r, 0);
          i = e.finishNode({
            type: "CallExpression",
            callee: a,
            arguments: n,
            optional: false
          }, o);
        }
      }
      return e.finishNode({
        type: "Decorator",
        expression: i
      }, n);
    }
    function xt(e, t, r, n, o, i, a, s = 0) {
      const {
        tokenStart: c
      } = e;
      const u = e.createPrivateScopeIfLexical(o);
      Z(e, t | 32, 2162700);
      const l = 655360;
      t = (t | l) ^ l;
      const d = e.flags & 32;
      e.flags = (e.flags | 32) ^ 32;
      const p = [];
      while (e.getToken() !== 1074790415) {
        const o = e.tokenStart;
        const s = At(e, t, u);
        if (s.length > 0 && e.tokenValue === "constructor") {
          e.report(111);
        }
        if (e.getToken() === 1074790415) {
          e.report(110);
        }
        if (X(e, t, 1074790417)) {
          if (s.length > 0) {
            e.report(122);
          }
        } else {
          p.push(St(e, t, n, u, r, i, s, 0, a, s.length > 0 ? o : e.tokenStart));
        }
      }
      Z(e, s & 8 ? t | 32 : t, 1074790415);
      if (u != null) {
        u.validatePrivateIdentifierRefs();
      }
      e.flags = e.flags & -33 | d;
      return e.finishNode({
        type: "ClassBody",
        body: p
      }, c);
    }
    function St(e, t, r, n, o, a, s, c, u, l) {
      let d = c ? 32 : 0;
      let p = null;
      const f = e.getToken();
      if (f & 176128 || f === -2147483527) {
        p = ct(e, t);
        switch (f) {
          case 36970:
            if (!c && e.getToken() !== 67174411 && ~e.getToken() & 1048576 && e.getToken() !== 1077936155) {
              return St(e, t, r, n, o, a, s, 1, u, l);
            }
            break;
          case 209005:
            if (e.getToken() !== 67174411 && !(e.flags & 1)) {
              if (!(~e.getToken() & 1073741824)) {
                return It(e, t, n, p, d, s, l);
              }
              d |= (K(e, t, 8391476) ? 8 : 0) | 16;
            }
            break;
          case 209008:
            if (e.getToken() !== 67174411) {
              if (e.getToken() === 8391476 && e.flags & 1) {
                return It(e, t, n, p, d, s, l);
              }
              if (!(~e.getToken() & 1073741824)) {
                return It(e, t, n, p, d, s, l);
              }
              d |= 256;
            }
            break;
          case 209009:
            if (e.getToken() !== 67174411) {
              if (e.getToken() === 8391476 && e.flags & 1) {
                return It(e, t, n, p, d, s, l);
              }
              if (!(~e.getToken() & 1073741824)) {
                return It(e, t, n, p, d, s, l);
              }
              d |= 512;
            }
            break;
          case 209010:
            if (e.getToken() !== 67174411 && !(e.flags & 1)) {
              if (!(~e.getToken() & 1073741824)) {
                return It(e, t, n, p, d, s, l);
              }
              if (e.features & 1) {
                d |= 1024;
              }
            }
        }
      } else if (f === 69271571) {
        d |= 2;
        p = vt(e, o, n, u);
      } else if (~f & 134217728) {
        if (f === 8391476) {
          d |= 8;
          Y(e, t);
        } else if (e.getToken() === 131) {
          d |= 8192;
          p = Ot(e, t | 16, n, 768);
        } else if (~e.getToken() & 1073741824) {
          if (c && f === 2162700) {
            return function (e, t, r, n, o, i) {
              return we(e, t = (t | 5764) ^ 5764 | 592128, r = (i = r) === null || i === undefined ? undefined : i.createChildScope(), n, {}, o, "StaticBlock");
            }(e, t | 16, r, n, l);
          }
          if (f === -2147483526) {
            p = ct(e, t);
            if (e.getToken() !== 67174411) {
              e.report(30, T[e.getToken() & 255]);
            }
          } else {
            e.report(30, T[e.getToken() & 255]);
          }
        } else {
          d |= 128;
        }
      } else {
        p = ut(e, t);
      }
      if (d & 1816) {
        if (e.getToken() & 143360 || e.getToken() === -2147483527 || e.getToken() === -2147483526) {
          p = ct(e, t);
        } else if (~e.getToken() & 134217728) {
          if (e.getToken() === 69271571) {
            d |= 2;
            p = vt(e, t, n, 0);
          } else if (e.getToken() === 131) {
            d |= 8192;
            p = Ot(e, t, n, d);
          } else {
            e.report(137);
          }
        } else {
          p = ut(e, t);
        }
      }
      if (!(d & 2)) {
        if (e.tokenValue === "constructor") {
          if (~e.getToken() & 1073741824) {
            if (!(d & 32) && e.getToken() === 67174411) {
              if (d & 920) {
                e.report(53, "accessor");
              } else if (!(t & 512)) {
                if (e.flags & 32) {
                  e.report(54);
                } else {
                  e.flags |= 32;
                }
              }
            }
          } else {
            e.report(131);
          }
          d |= 64;
        } else if (!(d & 8192) && d & 32 && e.tokenValue === "prototype") {
          e.report(52);
        }
      }
      if (d & 1024 || e.getToken() !== 67174411 && !(d & 768)) {
        return It(e, t, n, p, d, s, l);
      }
      const h = mt(e, t | 16, n, d, u, e.tokenStart);
      return e.finishNode(i({
        type: "MethodDefinition",
        kind: !(d & 32) && d & 64 ? "constructor" : d & 256 ? "get" : d & 512 ? "set" : "method",
        static: (d & 32) > 0,
        computed: (d & 2) > 0,
        key: p,
        value: h
      }, e.features & 1 ? {
        decorators: s
      } : null), l);
    }
    function Ot(e, t, r, n) {
      const {
        tokenStart: o
      } = e;
      Y(e, t);
      const {
        tokenValue: i
      } = e;
      if (i === "constructor") {
        e.report(130);
      }
      if (e.options.lexical) {
        if (!r) {
          e.report(4, i);
        }
        if (n) {
          r.addPrivateIdentifier(i, n);
        } else {
          r.addPrivateIdentifierRef(i);
        }
      }
      Y(e, t);
      return e.finishNode({
        type: "PrivateIdentifier",
        name: i
      }, o);
    }
    function It(e, t, r, n, o, a, s) {
      let c = null;
      if (o & 8) {
        e.report(0);
      }
      if (e.getToken() === 1077936155) {
        Y(e, t | 32);
        const {
          tokenStart: n
        } = e;
        if (e.getToken() === 537079928) {
          e.report(121);
        }
        const i = (o & 64 ? 0 : 16896) | 11264;
        c = $e(e, (t = (t | i) ^ i | (o & 8 ? 1024 : 0) | (o & 16 ? 2048 : 0) | (o & 64 ? 16384 : 0) | 65792) | 16, r, 2, 0, 1, 0, 1, n, 0, 1);
        if (!!(~e.getToken() & 1073741824) || !(~e.getToken() & 4194304)) {
          c = Ge(e, t | 16, r, c, 0, 0, n);
          c = qe(e, t | 16, r, 0, 0, n, c);
        }
      }
      Q(e, t);
      return e.finishNode(i({
        type: o & 1024 ? "AccessorProperty" : "PropertyDefinition",
        key: n,
        value: c,
        static: (o & 32) > 0,
        computed: (o & 2) > 0
      }, e.features & 1 ? {
        decorators: a
      } : null), s);
    }
    function Lt(e, t, r, n, o, i = 0) {
      if (e.getToken() & 143360 || !(t & 1) && e.getToken() === -2147483526) {
        return Rt(e, t, r, o, i);
      }
      if (~e.getToken() & 2097152) {
        e.report(30, T[e.getToken() & 255]);
      }
      const a = e.getToken() === 69271571 ? pt(e, t, r, n, 1, 0, 1, o, i) : gt(e, t, r, n, 1, 0, 1, o, i);
      if (e.destructible & 16) {
        e.report(50);
      }
      if (e.destructible & 32) {
        e.report(50);
      }
      return a;
    }
    function Rt(e, t, r, n, o = 0) {
      const i = e.getToken();
      if (t & 1) {
        if (~i & 537079808) {
          if (!(~i & 36864) || i === -2147483526) {
            e.report(120);
          }
        } else {
          e.report(121);
        }
      }
      if (!(~i & 20480)) {
        e.report(102);
      }
      if (i === 241771) {
        if (t & 1024) {
          e.report(32);
        }
        if (t & 2) {
          e.report(113);
        }
      }
      if ((i & 255) == 73 && n & 24) {
        e.report(100);
      }
      if (i === 209006) {
        if (t & 2048) {
          e.report(178);
        }
        if (t & 2) {
          e.report(112);
        }
      }
      const {
        tokenValue: a,
        tokenStart: s,
        currentLocation: c
      } = e;
      Y(e, t);
      if (r != null) {
        r.addVarOrBlock(t, a, n, s, c, o);
      }
      return e.finishNode({
        type: "Identifier",
        name: a
      }, s);
    }
    function Pt(e, t, r, n, o) {
      if (!n) {
        Z(e, t, 8456256);
      }
      if (e.getToken() === 8390721) {
        const i = function (e, t) {
          le(e);
          return e.finishNode({
            type: "JSXOpeningFragment"
          }, t);
        }(e, o);
        const [a, s] = function (e, t, r, n) {
          const o = [];
          while (true) {
            const i = Mt(e, t, r, n);
            if (i.type === "JSXClosingFragment") {
              return [o, i];
            }
            o.push(i);
          }
        }(e, t, r, n);
        return e.finishNode({
          type: "JSXFragment",
          openingFragment: i,
          children: a,
          closingFragment: s
        }, o);
      }
      if (e.getToken() === 8457014) {
        e.report(30, T[e.getToken() & 255]);
      }
      let i = null;
      let a = [];
      const s = function (e, t, r, n, o) {
        if (~e.getToken() & 143360 && ~e.getToken() & 4096) {
          e.report(0);
        }
        const i = Ut(e, t);
        const a = function (e, t, r) {
          const n = [];
          while (e.getToken() !== 8457014 && e.getToken() !== 8390721 && e.getToken() !== 1048576) {
            n.push(jt(e, t, r));
          }
          return n;
        }(e, t, r);
        const s = e.getToken() === 8457014;
        if (s) {
          Z(e, t | 1048576, 8457014);
        }
        if (e.getToken() !== 8390721) {
          e.report(25, T[65]);
        }
        if (n || !s) {
          le(e);
        } else {
          Y(e, t);
        }
        return e.finishNode({
          type: "JSXOpeningElement",
          name: i,
          attributes: a,
          selfClosing: s
        }, o);
      }(e, t, r, n, o);
      if (!s.selfClosing) {
        [a, i] = function (e, t, r, n) {
          const o = [];
          while (true) {
            const i = Bt(e, t, r, n);
            if (i.type === "JSXClosingElement") {
              return [o, i];
            }
            o.push(i);
          }
        }(e, t, r, n);
        const o = oe(i.name);
        if (oe(s.name) !== o) {
          e.report(157, o);
        }
      }
      return e.finishNode({
        type: "JSXElement",
        children: a,
        openingElement: s,
        closingElement: i
      }, o);
    }
    function Bt(e, t, r, n) {
      if (e.getToken() === 138) {
        return Ft(e);
      }
      if (e.getToken() === 2162700) {
        return Ht(e, t, r, 1, 0);
      }
      if (e.getToken() === 8456256) {
        const {
          tokenStart: o
        } = e;
        Y(e, t);
        if (e.getToken() === 8457014) {
          return function (e, t, r, n) {
            Z(e, t, 8457014);
            const o = Ut(e, t);
            if (e.getToken() !== 8390721) {
              e.report(25, T[65]);
            }
            if (r) {
              le(e);
            } else {
              Y(e, t);
            }
            return e.finishNode({
              type: "JSXClosingElement",
              name: o
            }, n);
          }(e, t, n, o);
        } else {
          return Pt(e, t, r, 1, o);
        }
      }
      e.report(0);
    }
    function Mt(e, t, r, n) {
      if (e.getToken() === 138) {
        return Ft(e);
      }
      if (e.getToken() === 2162700) {
        return Ht(e, t, r, 1, 0);
      }
      if (e.getToken() === 8456256) {
        const {
          tokenStart: o
        } = e;
        Y(e, t);
        if (e.getToken() === 8457014) {
          return function (e, t, r, n) {
            Z(e, t, 8457014);
            if (e.getToken() !== 8390721) {
              e.report(25, T[65]);
            }
            if (r) {
              le(e);
            } else {
              Y(e, t);
            }
            return e.finishNode({
              type: "JSXClosingFragment"
            }, n);
          }(e, t, n, o);
        } else {
          return Pt(e, t, r, 1, o);
        }
      }
      e.report(0);
    }
    function Ft(e) {
      const t = e.tokenStart;
      le(e);
      const r = {
        type: "JSXText",
        value: e.tokenValue
      };
      if (e.options.raw) {
        r.raw = e.tokenRaw;
      }
      return e.finishNode(r, t);
    }
    function Ut(e, t) {
      const {
        tokenStart: r
      } = e;
      de(e);
      let n = Vt(e, t);
      if (e.getToken() === 21) {
        return qt(e, t, n, r);
      }
      while (X(e, t, 67108877)) {
        de(e);
        n = Nt(e, t, n, r);
      }
      return n;
    }
    function Nt(e, t, r, n) {
      const o = Vt(e, t);
      return e.finishNode({
        type: "JSXMemberExpression",
        object: r,
        property: o
      }, n);
    }
    function jt(e, t, r) {
      const {
        tokenStart: n
      } = e;
      if (e.getToken() === 2162700) {
        return function (e, t, r) {
          const n = e.tokenStart;
          Y(e, t);
          Z(e, t, 14);
          const o = Ue(e, t, r, 1, 0, e.tokenStart);
          Z(e, t, 1074790415);
          return e.finishNode({
            type: "JSXSpreadAttribute",
            argument: o
          }, n);
        }(e, t, r);
      }
      de(e);
      let o = null;
      let i = Vt(e, t);
      if (e.getToken() === 21) {
        i = qt(e, t, i, n);
      }
      if (e.getToken() === 1077936155) {
        switch (ue(e, t)) {
          case 134283267:
            o = ut(e, t);
            break;
          case 8456256:
            o = Pt(e, t, r, 0, e.tokenStart);
            break;
          case 2162700:
            o = Ht(e, t, r, 0, 1);
            break;
          default:
            e.report(156);
        }
      }
      return e.finishNode({
        type: "JSXAttribute",
        value: o,
        name: i
      }, n);
    }
    function qt(e, t, r, n) {
      Z(e, t, 21);
      const o = Vt(e, t);
      return e.finishNode({
        type: "JSXNamespacedName",
        namespace: r,
        name: o
      }, n);
    }
    function Ht(e, t, r, n, o) {
      const {
        tokenStart: i
      } = e;
      Y(e, t | 32);
      const {
        tokenStart: a
      } = e;
      if (e.getToken() === 14) {
        return function (e, t, r, n) {
          Z(e, t, 14);
          const o = Ue(e, t, r, 1, 0, e.tokenStart);
          Z(e, t, 1074790415);
          return e.finishNode({
            type: "JSXSpreadChild",
            expression: o
          }, n);
        }(e, t, r, i);
      }
      let s;
      if (e.getToken() === 1074790415) {
        if (o) {
          e.report(159);
        }
        s = function (e, t) {
          return e.finishNode({
            type: "JSXEmptyExpression"
          }, t, e.tokenStart);
        }(e, {
          index: e.startIndex,
          line: e.startLine,
          column: e.startColumn
        });
      } else {
        s = Ue(e, t, r, 1, 0, a);
      }
      if (e.getToken() !== 1074790415) {
        e.report(25, T[15]);
      }
      if (n) {
        le(e);
      } else {
        Y(e, t);
      }
      return e.finishNode({
        type: "JSXExpressionContainer",
        expression: s
      }, i);
    }
    function Vt(e, t) {
      const r = e.tokenStart;
      if (!(e.getToken() & 143360)) {
        e.report(30, T[e.getToken() & 255]);
      }
      const {
        tokenValue: n
      } = e;
      Y(e, t | 1048576);
      return e.finishNode({
        type: "JSXIdentifier",
        name: n
      }, r);
    }
    const {
      version: Wt
    } = {
      version: "7.3.3"
    };
    e.isParseError = e => e instanceof D;
    e.parse = function (e, t) {
      return ge(e, t);
    };
    e.parseModule = function (e, t) {
      return ge(e, i(i({}, t), {}, {
        sourceType: "module"
      }));
    };
    e.parseScript = function (e, t) {
      return ge(e, i(i({}, t), {}, {
        sourceType: "script"
      }));
    };
    e.version = Wt;
  })(t);
};
