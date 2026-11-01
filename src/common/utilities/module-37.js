// Module 37 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    const r = ["features", "next", "ranges", "module", "sourceType", "globalReturn"];
    function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        if (t) {
          r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, r);
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          o(Object(n), true).forEach(function (t) {
            a(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          o(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function a(e, t, n) {
      if ((t = function (e) {
        var t = function (e, t) {
          if (typeof e != "object" || !e) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var r = n.call(e, t || "default");
            if (typeof r != "object") {
              return r;
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
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    (function (e) {
      "use strict";

      const t = ((e, t) => {
        const n = new Uint32Array(69632);
        let r = 0;
        let o = 0;
        while (r < 2597) {
          const i = e[r++];
          if (i < 0) {
            o -= i;
          } else {
            let a = e[r++];
            if (i & 2) {
              a = t[a];
            }
            if (i & 1) {
              n.fill(a, o, o += e[r++]);
            } else {
              n[o++] = a;
            }
          }
        }
        return n;
      })([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 63, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 64, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 58, 2, 7, 2, 6, 0, 4286643967, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191, 0, 929054175, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1885355487, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 69, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 9, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2151677951, 2, 29, 2, 10, 0, 909311, 3, 0, 2, 0, 814743551, 2, 48, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 108, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 9, 2, 18, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 10, 2, 0, 2, 127, 0, 4294960127, 2, 9, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, 0, 12288, 2, 54, 0, 1048577, 2, 84, 2, 14, -1, 2, 14, 0, 131042, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 88, 2, 2, 0, -16, 2, 89, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 2, 18, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 2, 0, 0, 4351, 2, 0, 2, 10, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 10, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, 2, 25, 0, 1638399, 0, 57344, 2, 107, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 65, 2, 6, 2, 12, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 23, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 47, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 125, 0, 4227858432, 2, 20, 2, 43, 2, 36, 2, 17, 2, 37, 2, 17, 2, 124, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 145, 2, 0, 2, 56, 2, 55, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 59, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 133, 0, 4190109695, 2, 52, -2, 2, 134, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 66, 2, 17, 2, 0, 2, 42, -3, 2, 31, -2, 2, 0, 2, 45, 2, 57, 2, 44, 2, 45, 2, 135, 2, 46, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 47, 2, 138, 0, 33259519, 2, 23, 2, 7, 2, 48, -7, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 8323099, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 90, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2, 155, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 58, 2, 98, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 17, 2, 49, 2, 0, 2, 32, -14, 2, 17, 2, 32, -6, 2, 17, 2, 12, -6, 2, 8, 0, 3225419775, -7, 2, 156, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 59, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -22116, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 63, 2, 0, 2, 34, -1, 2, 17, 2, 64, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 65, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 65279, 2, 0, 2, 48, -1, 2, 97, 2, 66, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 68, 2, 67, 0, 33554435, 2, 131, 2, 68, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1, 0, 4294828000, 0, 603979263, 0, 922746880, 0, 3, 0, 4294828001, 0, 602930687, 0, 1879048192, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 69, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 70, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 10, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 48, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 10, 0, 8160, -1, 2, 126, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776, 2, 9, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, -3, 2, 84, 2, 14, -3, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 88, 2, -17, 2, 89, 0, 524157950, 2, 4, 2, 0, 2, 90, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 25, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 0, 4294965179, 0, 7, 2, 0, 2, 10, 2, 93, 2, 10, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 38, 2, 20, 2, 97, 2, 35, 2, 98, 0, 2080440287, 2, 0, 2, 34, 2, 154, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, -3, 2, 107, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 108, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 65, 2, 6, 2, 30, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 17, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 124, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 96, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 125, -1, 2, 20, 2, 43, 2, 37, 2, 17, 0, 3, 2, 17, 2, 124, 2, 21, 2, 126, 2, 127, -1, 0, 2490368, 2, 126, 2, 25, 2, 17, 2, 34, 2, 126, 2, 38, 0, 4294901904, 0, 4718591, 2, 126, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 68, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 49, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 18, -3, 3, 0, 2, 2, 54, 2, 133, 0, 2147549183, 0, 2, -2, 2, 134, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 17, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 57, 2, 49, 0, 1, 2, 135, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, 2, 17, 2, 7, -8, 2, 35, 0, 4294836212, 2, 10, -3, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 9, -55, 3, 0, 17, 2, 42, 2, 8, 2, 17, 2, 0, 2, 8, 2, 17, 2, 58, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 71, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 67583, -1, 2, 105, -2, 0, 8126475, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 2, 145, -187, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 2, 154, -57, 2, 8, 2, 155, -7, 2, 17, 2, 0, 2, 58, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 17, 2, 58, 2, 0, 2, 18, -14, 2, 17, 2, 18, -6, 2, 17, 0, 81919, -6, 2, 8, 0, 3223273399, -7, 2, 156, 3, 0, 6, 2, 124, -1, 3, 0, 2, 0, 2063, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -138, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -28252], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1073741823, 1048575, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 4294901760, 4095, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294770687, 67043583, 1023, 32767, 15, 2047999, 67043343, 67051519, 2147483648, 4294902000, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 4294836224, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 252, 4294967288, 16777215, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 3774873592, 4194303999, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901761]);
      const n = e => !!(t[34816 + (e >>> 5)] >>> e & 1);
      const o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384, 0, 16384, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 16384, 0, 0];
      const s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
      const c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
      function l(e) {
        if (e <= 127) {
          return s[e] > 0;
        } else {
          return n(e);
        }
      }
      function u(e) {
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
      function f(e) {
        const t = e.currentChar;
        if ((t & 64512) != 55296) {
          return 0;
        }
        const n = e.source.charCodeAt(e.index + 1);
        if ((n & 64512) != 56320) {
          return 0;
        } else {
          return 65536 + ((t & 1023) << 10) + (n & 1023);
        }
      }
      function p(e, t) {
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
      function g(e) {
        return e === 160 || e === 65279 || e === 133 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 8201 || e === 65519;
      }
      function m(e) {
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
      function k(e, t, n, r, o, i) {
        if (r & 2) {
          e.report(0);
        }
        return b(e, t, n, o, i);
      }
      function b(e, t, n, r, i) {
        const {
          index: a
        } = e;
        e.tokenIndex = e.index;
        e.tokenLine = e.line;
        e.tokenColumn = e.column;
        while (e.index < e.end) {
          if (o[e.currentChar] & 8) {
            const n = e.currentChar === 13;
            h(e);
            if (n && e.index < e.end && e.currentChar === 10) {
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
          const n = {
            start: {
              line: i.line,
              column: i.column
            },
            end: {
              line: e.tokenLine,
              column: e.tokenColumn
            }
          };
          e.options.onComment(y[r & 255], t.slice(a, e.tokenIndex), i.index, e.tokenIndex, n);
        }
        return n | 1;
      }
      function _(e, t, n) {
        const {
          index: r
        } = e;
        while (e.index < e.end) {
          if (e.currentChar < 43) {
            let i = false;
            while (e.currentChar === 42) {
              if (!i) {
                n &= -5;
                i = true;
              }
              if (d(e) === 47) {
                d(e);
                if (e.options.onComment) {
                  const n = {
                    start: {
                      line: e.tokenLine,
                      column: e.tokenColumn
                    },
                    end: {
                      line: e.line,
                      column: e.column
                    }
                  };
                  e.options.onComment(y[1], t.slice(r, e.index - 2), r - 2, e.index, n);
                }
                e.tokenIndex = e.index;
                e.tokenLine = e.line;
                e.tokenColumn = e.column;
                return n;
              }
            }
            if (i) {
              continue;
            }
            if (o[e.currentChar] & 8) {
              if (e.currentChar === 13) {
                n |= 5;
                h(e);
              } else {
                p(e, n);
                n = n & -5 | 1;
              }
            } else {
              d(e);
            }
          } else if ((e.currentChar ^ 8232) <= 1) {
            n = n & -5 | 1;
            h(e);
          } else {
            n &= -5;
            d(e);
          }
        }
        e.report(18);
      }
      const T = {
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
      class S extends SyntaxError {
        constructor(e, t, n, ...r) {
          const o = T[n].replaceAll(/%(\d+)/g, (e, t) => r[t]);
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
      const x = ["end of source", "identifier", "number", "string", "regular expression", "false", "true", "null", "template continuation", "template tail", "=>", "(", "{", ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", "\"", "++", "--", "=", "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=", "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof", "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">", "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch", "class", "continue", "debugger", "default", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "new", "return", "super", "switch", "this", "throw", "try", "while", "with", "implements", "interface", "package", "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor", "get", "set", "accessor", "from", "of", "using", "enum", "eval", "arguments", "escaped keyword", "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral", "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template", "@", "target", "meta", "LineFeed", "Escaped", "JSXText"];
      const w = new Map([["this", 86111], ["function", 86104], ["if", 20569], ["return", 20572], ["var", 86088], ["else", 20563], ["for", 20567], ["new", 86107], ["in", 8673330], ["typeof", 16863275], ["while", 20578], ["case", 20556], ["break", 20555], ["try", 20577], ["catch", 20557], ["delete", 16863276], ["throw", 86112], ["switch", 86110], ["continue", 20559], ["default", 20561], ["instanceof", 8411187], ["do", 20562], ["void", 16863277], ["finally", 20566], ["async", 209005], ["await", 209006], ["class", 86094], ["const", 86090], ["constructor", 209007], ["debugger", 20560], ["export", 20564], ["extends", 20565], ["false", 86021], ["from", 209011], ["get", 209008], ["implements", 36964], ["import", 86106], ["interface", 36965], ["let", 241737], ["null", 86023], ["of", 471156], ["using", 209013], ["package", 36966], ["private", 36967], ["protected", 36968], ["public", 36969], ["set", 209009], ["static", 36970], ["super", 86109], ["true", 86022], ["with", 20579], ["yield", 241771], ["enum", 86134], ["eval", 537079927], ["as", 77932], ["arguments", 537079928], ["target", 209030], ["meta", 209031], ["accessor", 209010]]);
      const E = [...w.keys()].map(e => e.length);
      const A = Math.min(...E);
      const C = Math.max(...E);
      function O(e, t, n) {
        while (c[d(e)]);
        e.tokenValue = e.source.slice(e.tokenIndex, e.index);
        if (e.currentChar === 92 || e.currentChar > 126) {
          return N(e, t, 0, n);
        }
        const o = e.index - e.tokenIndex;
        if (o < A || o > C) {
          return 208897;
        } else {
          return w.get(e.tokenValue) ?? 208897;
        }
      }
      function I(e, t) {
        const n = R(e);
        if (!l(n)) {
          e.report(5);
        }
        e.tokenValue = String.fromCodePoint(n);
        return N(e, t, 1, o[n] & 4);
      }
      function N(e, t, n, r) {
        let i = e.index;
        while (e.index < e.end) {
          if (e.currentChar === 92) {
            e.tokenValue += e.source.slice(i, e.index);
            n = 1;
            const t = R(e);
            if (!u(t)) {
              e.report(5);
            }
            r = r && o[t] & 4;
            e.tokenValue += String.fromCodePoint(t);
            i = e.index;
          } else {
            const t = f(e);
            if (t > 0) {
              if (!u(t)) {
                e.report(20, String.fromCodePoint(t));
              }
              e.currentChar = t;
              e.index++;
              e.column++;
            } else if (!u(e.currentChar)) {
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
        if (r && a >= A && a <= C) {
          const r = w.get(e.tokenValue);
          if (r === undefined) {
            return (n ? -2147483648 : 0) | 208897;
          } else if (n) {
            if (r === 209006) {
              if (t & 2050) {
                return -2147483527;
              } else {
                return r | -2147483648;
              }
            } else if (t & 1) {
              if (r === 36970) {
                return -2147483526;
              } else if (~r & 36864) {
                if (~r & 20480) {
                  return -2147274629;
                } else if (t & 262144 && !(t & 8)) {
                  return r | -2147483648;
                } else {
                  return -2147483527;
                }
              } else {
                return -2147483526;
              }
            } else if (!(t & 262144) || t & 8 || ~r & 20480) {
              if (r === 241771) {
                if (t & 262144) {
                  return -2147274629;
                } else if (t & 1024) {
                  return -2147483527;
                } else {
                  return r | -2147483648;
                }
              } else if (r === 209005) {
                return -2147274629;
              } else if (~r & 36864) {
                return -2147483527;
              } else {
                return r | 12288 | -2147483648;
              }
            } else {
              return r | -2147483648;
            }
          } else {
            return r;
          }
        }
        return (n ? -2147483648 : 0) | 208897;
      }
      function D(e) {
        let t = d(e);
        if (t === 92) {
          return 131;
        }
        const n = f(e);
        if (n) {
          t = n;
        }
        if (!l(t)) {
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
          const n = e.currentChar;
          if (n === 123) {
            const n = e.index - 2;
            while (o[d(e)] & 64) {
              t = t << 4 | m(e.currentChar);
              if (t > 1114111) {
                throw new S({
                  index: n,
                  line: e.line,
                  column: e.column
                }, e.currentLocation, 104);
              }
            }
            if (e.currentChar !== 125) {
              throw new S({
                index: n,
                line: e.line,
                column: e.column
              }, e.currentLocation, 7);
            }
            d(e);
            return t;
          }
          if (!(o[n] & 64)) {
            e.report(7);
          }
          const r = e.source.charCodeAt(e.index + 1);
          if (!(o[r] & 64)) {
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
          t = m(n) << 12 | m(r) << 8 | m(i) << 4 | m(a);
          e.currentChar = e.source.charCodeAt(e.index += 4);
          e.column += 4;
          return t;
        }(e);
      }
      function L(e, t, n) {
        let r = e.currentChar;
        let i = 0;
        let a = 9;
        let s = n & 64 ? 0 : 1;
        let c = 0;
        let u = 0;
        if (n & 64) {
          i = "." + P(e, r);
          r = e.currentChar;
          if (r === 110) {
            e.report(12);
          }
        } else {
          if (r === 48) {
            r = d(e);
            if ((r | 32) == 120) {
              n = 136;
              r = d(e);
              while (o[r] & 4160) {
                if (r !== 95) {
                  u = 1;
                  i = i * 16 + m(r);
                  c++;
                  r = d(e);
                } else {
                  if (!u) {
                    e.report(154);
                  }
                  u = 0;
                  r = d(e);
                }
              }
              if (c === 0 || !u) {
                e.report(c === 0 ? 21 : 155);
              }
            } else if ((r | 32) == 111) {
              n = 132;
              r = d(e);
              while (o[r] & 4128) {
                if (r !== 95) {
                  u = 1;
                  i = i * 8 + (r - 48);
                  c++;
                  r = d(e);
                } else {
                  if (!u) {
                    e.report(154);
                  }
                  u = 0;
                  r = d(e);
                }
              }
              if (c === 0 || !u) {
                e.report(c === 0 ? 0 : 155);
              }
            } else if ((r | 32) == 98) {
              n = 130;
              r = d(e);
              while (o[r] & 4224) {
                if (r !== 95) {
                  u = 1;
                  i = i * 2 + (r - 48);
                  c++;
                  r = d(e);
                } else {
                  if (!u) {
                    e.report(154);
                  }
                  u = 0;
                  r = d(e);
                }
              }
              if (c === 0 || !u) {
                e.report(c === 0 ? 0 : 155);
              }
            } else if (o[r] & 32) {
              if (t & 1) {
                e.report(1);
              }
              n = 1;
              while (o[r] & 16) {
                if (o[r] & 512) {
                  n = 32;
                  s = 0;
                  break;
                }
                i = i * 8 + (r - 48);
                r = d(e);
              }
            } else if (o[r] & 512) {
              if (t & 1) {
                e.report(1);
              }
              e.flags |= 64;
              n = 32;
            } else if (r === 95) {
              e.report(0);
            }
          }
          if (n & 48) {
            if (s) {
              while (a >= 0 && o[r] & 4112) {
                if (r !== 95) {
                  u = 0;
                  i = i * 10 + (r - 48);
                  r = d(e);
                  --a;
                } else {
                  r = d(e);
                  if (r === 95 || n & 32) {
                    throw new S(e.currentLocation, {
                      index: e.index + 1,
                      line: e.line,
                      column: e.column
                    }, 154);
                  }
                  u = 1;
                }
              }
              if (u) {
                throw new S(e.currentLocation, {
                  index: e.index + 1,
                  line: e.line,
                  column: e.column
                }, 155);
              }
              if (a >= 0 && !l(r) && r !== 46) {
                e.tokenValue = i;
                if (e.options.raw) {
                  e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
                }
                return 134283266;
              }
            }
            i += P(e, r);
            r = e.currentChar;
            if (r === 46) {
              if (d(e) === 95) {
                e.report(0);
              }
              n = 64;
              i += "." + P(e, e.currentChar);
              r = e.currentChar;
            }
          }
        }
        const f = e.index;
        let p = 0;
        if (r === 110 && n & 128) {
          p = 1;
          r = d(e);
        } else if ((r | 32) == 101) {
          r = d(e);
          if (o[r] & 256) {
            r = d(e);
          }
          const {
            index: t
          } = e;
          if (!(o[r] & 16)) {
            e.report(11);
          }
          i += e.source.substring(f, t) + P(e, r);
          r = e.currentChar;
        }
        if (e.index < e.end && o[r] & 16 || l(r)) {
          e.report(13);
        }
        if (p) {
          e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
          e.tokenValue = BigInt(e.tokenRaw.slice(0, -1).replaceAll("_", ""));
          return 134283389;
        } else {
          e.tokenValue = n & 15 ? i : n & 32 ? parseFloat(e.source.substring(e.tokenIndex, e.index)) : +i;
          if (e.options.raw) {
            e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
          }
          return 134283266;
        }
      }
      function P(e, t) {
        let n = 0;
        let r = e.index;
        let i = "";
        while (o[t] & 4112) {
          if (t !== 95) {
            n = 0;
            t = d(e);
          } else {
            const {
              index: o
            } = e;
            if ((t = d(e)) === 95) {
              throw new S(e.currentLocation, {
                index: e.index + 1,
                line: e.line,
                column: e.column
              }, 154);
            }
            n = 1;
            i += e.source.substring(r, o);
            r = e.index;
          }
        }
        if (n) {
          throw new S(e.currentLocation, {
            index: e.index + 1,
            line: e.line,
            column: e.column
          }, 155);
        }
        return i + e.source.substring(r, e.index);
      }
      var B;
      var U;
      function M(e) {
        const t = e.index;
        let n = B.Empty;
        e: while (true) {
          const t = e.currentChar;
          d(e);
          if (n & B.Escape) {
            n &= ~B.Escape;
          } else {
            switch (t) {
              case 47:
                if (n) {
                  break;
                }
                break e;
              case 92:
                n |= B.Escape;
                break;
              case 91:
                n |= B.Class;
                break;
              case 93:
                n &= B.Escape;
            }
          }
          if (t === 13 || t === 10 || t === 8232 || t === 8233) {
            e.report(34);
          }
          if (e.index >= e.source.length) {
            return e.report(34);
          }
        }
        const r = e.index - 1;
        let o = U.Empty;
        let i = e.currentChar;
        const {
          index: a
        } = e;
        while (u(i)) {
          switch (i) {
            case 103:
              if (o & U.Global) {
                e.report(36, "g");
              }
              o |= U.Global;
              break;
            case 105:
              if (o & U.IgnoreCase) {
                e.report(36, "i");
              }
              o |= U.IgnoreCase;
              break;
            case 109:
              if (o & U.Multiline) {
                e.report(36, "m");
              }
              o |= U.Multiline;
              break;
            case 117:
              if (o & U.Unicode) {
                e.report(36, "u");
              }
              if (o & U.UnicodeSets) {
                e.report(36, "vu");
              }
              o |= U.Unicode;
              break;
            case 118:
              if (o & U.Unicode) {
                e.report(36, "uv");
              }
              if (o & U.UnicodeSets) {
                e.report(36, "v");
              }
              o |= U.UnicodeSets;
              break;
            case 121:
              if (o & U.Sticky) {
                e.report(36, "y");
              }
              o |= U.Sticky;
              break;
            case 115:
              if (o & U.DotAll) {
                e.report(36, "s");
              }
              o |= U.DotAll;
              break;
            case 100:
              if (o & U.Indices) {
                e.report(36, "d");
              }
              o |= U.Indices;
              break;
            default:
              e.report(35);
          }
          i = d(e);
        }
        const s = e.source.slice(a, e.index);
        const c = e.source.slice(t, r);
        e.tokenRegExp = {
          pattern: c,
          flags: s
        };
        if (e.options.raw) {
          e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
        }
        e.tokenValue = function (e, t, n) {
          try {
            return new RegExp(t, n);
          } catch (t) {
            if (!e.options.validateRegex) {
              return null;
            }
            e.report(34);
          }
        }(e, c, s);
        return 65540;
      }
      function V(e, t, n) {
        const {
          index: r
        } = e;
        let i = "";
        let a = d(e);
        let s = e.index;
        while (!(o[a] & 8)) {
          if (a === n) {
            i += e.source.slice(s, e.index);
            d(e);
            if (e.options.raw) {
              e.tokenRaw = e.source.slice(r, e.index);
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
              const n = H(e, t, a);
              if (n >= 0) {
                i += String.fromCodePoint(n);
              } else {
                j(e, n, 0);
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
      function H(e, t, n, r = 0) {
        switch (n) {
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
              let i = n - 48;
              let a = e.index + 1;
              let s = e.column + 1;
              if (a < e.end) {
                const n = e.source.charCodeAt(a);
                if (o[n] & 32) {
                  if (t & 1 || r) {
                    return -2;
                  }
                  e.currentChar = n;
                  i = i << 3 | n - 48;
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
                } else if (i !== 0 || o[n] & 512) {
                  if (t & 1 || r) {
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
              if (r || t & 1) {
                return -2;
              }
              let i = n - 48;
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
              const n = m(t);
              const r = d(e);
              if (o[r] & 64) {
                return n << 4 | m(r);
              } else {
                return -4;
              }
            }
          case 117:
            {
              const t = d(e);
              if (e.currentChar === 123) {
                let t = 0;
                let n = 0;
                while (o[d(e)] & 64) {
                  t = t << 4 | m(e.currentChar);
                  if (t > 1114111) {
                    return -5;
                  }
                  n++;
                }
                if (n === 0 || e.currentChar < 1 || e.currentChar !== 125) {
                  return -4;
                } else {
                  return t;
                }
              }
              {
                if (!(o[t] & 64)) {
                  return -4;
                }
                const n = e.source.charCodeAt(e.index + 1);
                if (!(o[n] & 64)) {
                  return -4;
                }
                const r = e.source.charCodeAt(e.index + 2);
                if (!(o[r] & 64)) {
                  return -4;
                }
                const i = e.source.charCodeAt(e.index + 3);
                if (o[i] & 64) {
                  e.index += 3;
                  e.column += 3;
                  e.currentChar = e.source.charCodeAt(e.index);
                  return m(t) << 12 | m(n) << 8 | m(r) << 4 | m(i);
                } else {
                  return -4;
                }
              }
            }
          case 56:
          case 57:
            if (r || t & 1) {
              return -3;
            }
            e.flags |= 4096;
          default:
            return n;
        }
      }
      function j(e, t, n) {
        switch (t) {
          case -1:
            return;
          case -2:
            e.report(n ? 2 : 1);
          case -3:
            e.report(n ? 3 : 14);
          case -4:
            e.report(7);
          case -5:
            e.report(104);
        }
      }
      function F(e, t) {
        const {
          index: n
        } = e;
        let r = 67174409;
        let o = "";
        let i = false;
        let a = d(e);
        while (a !== 96) {
          if (a === 36 && e.source.charCodeAt(e.index + 1) === 123) {
            d(e);
            r = 67174408;
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
                index: n,
                line: s,
                column: c
              } = e;
              const l = H(e, t | 1, a, 1);
              if (l >= 0) {
                o += String.fromCodePoint(l);
              } else {
                if (l !== -1 && t & 64) {
                  e.index = n;
                  e.line = s;
                  e.column = c;
                  o = null;
                  a = z(e, a, () => {
                    i = true;
                  });
                  if (a < 0) {
                    r = 67174408;
                  }
                  break;
                }
                j(e, l, 1);
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
        const s = e.source.slice(n + 1, e.index - (r === 67174409 ? 1 : 2));
        e.tokenRaw = i ? s.replaceAll(/\r\n?/g, "\n") : s;
        return r;
      }
      function z(e, t, n) {
        while (t !== 96) {
          switch (t) {
            case 13:
              n();
              break;
            case 36:
              {
                const n = e.index + 1;
                if (n < e.end && e.source.charCodeAt(n) === 123) {
                  e.index = n;
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
      function G(e, t) {
        if (e.index >= e.end) {
          e.report(0);
        }
        e.index--;
        e.column--;
        return F(e, t);
      }
      (function (e) {
        e[e.Empty = 0] = "Empty";
        e[e.Escape = 1] = "Escape";
        e[e.Class = 2] = "Class";
      })(B ||= {});
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
      })(U ||= {});
      const W = [129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128, 130, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 16842798, 134283267, 131, 208897, 8391477, 8390213, 134283267, 67174411, 16, 8391476, 25233968, 18, 25233969, 67108877, 8457014, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 21, 1074790417, 8456256, 1077936155, 8390721, 22, 133, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 69271571, 137, 20, 8389959, 208897, 132, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8389702, 1074790415, 16842799, 129];
      function q(e, t) {
        e.flags = (e.flags | 1) ^ 1;
        e.startIndex = e.index;
        e.startColumn = e.column;
        e.startLine = e.line;
        e.setToken(Y(e, t, 0));
      }
      function Y(e, t, r) {
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
            const n = W[a];
            switch (n) {
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
                return n;
              case 208897:
                return O(e, t, 0);
              case 4096:
                return O(e, t, 1);
              case 134283266:
                return L(e, t, 144);
              case 134283267:
                return V(e, t, a);
              case 132:
                return F(e, t);
              case 137:
                return I(e, t);
              case 131:
                return D(e);
              case 128:
                d(e);
                break;
              case 130:
                r |= 5;
                h(e);
                break;
              case 136:
                p(e, r);
                r = r & -5 | 1;
                break;
              case 8456256:
                {
                  const n = d(e);
                  if (e.index < e.end) {
                    if (n === 60) {
                      if (e.index < e.end && d(e) === 61) {
                        d(e);
                        return 4194332;
                      } else {
                        return 8390978;
                      }
                    }
                    if (n === 61) {
                      d(e);
                      return 8390718;
                    }
                    if (n === 33) {
                      const n = e.index + 1;
                      if (n + 1 < e.end && i.charCodeAt(n) === 45 && i.charCodeAt(n + 1) == 45) {
                        e.column += 3;
                        e.currentChar = i.charCodeAt(e.index += 3);
                        r = k(e, i, r, t, 2, e.tokenStart);
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
                  const n = e.currentChar;
                  if (n === 45) {
                    d(e);
                    if ((r & 1 || o) && e.currentChar === 62) {
                      if (!e.options.webcompat) {
                        e.report(114);
                      }
                      d(e);
                      r = k(e, i, r, t, 3, e.tokenStart);
                      continue;
                    }
                    return 33619994;
                  }
                  if (n === 61) {
                    d(e);
                    return 4194337;
                  } else {
                    return 25233969;
                  }
                }
              case 8457014:
                d(e);
                if (e.index < e.end) {
                  const n = e.currentChar;
                  if (n === 47) {
                    d(e);
                    r = b(e, i, r, 0, e.tokenStart);
                    continue;
                  }
                  if (n === 42) {
                    d(e);
                    r = _(e, i, r);
                    continue;
                  }
                  if (t & 32) {
                    return M(e);
                  }
                  if (n === 61) {
                    d(e);
                    return 4259875;
                  }
                }
                return 8457014;
              case 67108877:
                {
                  const n = d(e);
                  if (n >= 48 && n <= 57) {
                    return L(e, t, 80);
                  }
                  if (n === 46) {
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
                  const n = e.currentChar;
                  if (n === 61) {
                    d(e);
                    return 8390719;
                  }
                  if (n !== 62) {
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
                    const n = e.index + 1;
                    if (n < e.end && (t = i.charCodeAt(n), !(t >= 48) || !(t <= 57))) {
                      d(e);
                      return 67108991;
                    }
                  }
                  return 22;
                }
            }
          } else {
            if ((a ^ 8232) <= 1) {
              r = r & -5 | 1;
              h(e);
              continue;
            }
            const o = f(e);
            if (o > 0) {
              a = o;
            }
            if (n(a)) {
              e.tokenValue = "";
              return N(e, t, 0, 0);
            }
            if (g(a)) {
              d(e);
              continue;
            }
            e.report(20, String.fromCodePoint(a));
          }
        }
        return 1048576;
      }
      function K(e, t) {
        var n;
        var r;
        if (!(e.flags & 1) && ~e.getToken() & 1048576) {
          e.report(30, x[e.getToken() & 255]);
        }
        if (!J(e, t, 1074790417) && (n = (r = e.options).onInsertedSemicolon) !== null && n !== undefined) {
          n.call(r, e.startIndex);
        }
      }
      function X(e, t, n, r) {
        if (t - n < 13 && r === "use strict" && (!(~e.getToken() & 1048576) || e.flags & 1)) {
          return 1;
        } else {
          return 0;
        }
      }
      function $(e, t, n) {
        if (e.getToken() !== n) {
          return 0;
        } else {
          q(e, t);
          return 1;
        }
      }
      function J(e, t, n) {
        return e.getToken() === n && (q(e, t), true);
      }
      function Q(e, t, n) {
        if (e.getToken() !== n) {
          e.report(25, x[n & 255]);
        }
        q(e, t);
      }
      function Z(e, t) {
        switch (t.type) {
          case "ArrayExpression":
            {
              t.type = "ArrayPattern";
              const {
                elements: n
              } = t;
              for (let t = 0, r = n.length; t < r; ++t) {
                const r = n[t];
                if (r) {
                  Z(e, r);
                }
              }
              return;
            }
          case "ObjectExpression":
            {
              t.type = "ObjectPattern";
              const {
                properties: n
              } = t;
              for (let t = 0, r = n.length; t < r; ++t) {
                Z(e, n[t]);
              }
              return;
            }
          case "AssignmentExpression":
            t.type = "AssignmentPattern";
            if (t.operator !== "=") {
              e.report(71);
            }
            delete t.operator;
            Z(e, t.left);
            return;
          case "Property":
            Z(e, t.value);
            return;
          case "SpreadElement":
            t.type = "RestElement";
            Z(e, t.argument);
        }
      }
      function ee(e, t, n, r, o) {
        if (t & 1) {
          if (!(~r & 36864)) {
            e.report(120);
          }
          if (!o && !(~r & 537079808)) {
            e.report(121);
          }
        }
        if (!(~r & 20480) || r === -2147483527) {
          e.report(102);
        }
        if (n & 24 && (r & 255) == 73) {
          e.report(100);
        }
        if (t & 2050 && r === 209006) {
          e.report(112);
        }
        if (t & 1025 && r === 241771) {
          e.report(97, "yield");
        }
      }
      function te(e, t, n) {
        if (t & 1) {
          if (!(~n & 36864)) {
            e.report(120);
          }
          if (!(~n & 537079808)) {
            e.report(121);
          }
          if (n === -2147483526) {
            e.report(95);
          }
          if (n === -2147483527) {
            e.report(95);
          }
        }
        if (!(~n & 20480)) {
          e.report(102);
        }
        if (t & 2050 && n === 209006) {
          e.report(112);
        }
        if (t & 1025 && n === 241771) {
          e.report(97, "yield");
        }
      }
      function ne(e, t, n) {
        var r;
        if (n === 209006) {
          if (t & 2050) {
            e.report(112);
          }
          if (!(e.destructible & 128) && ((r = e.firstAwaitLocation) === null || r === undefined)) {
            e.firstAwaitLocation = {
              start: e.tokenStart,
              end: e.currentLocation
            };
          }
          e.destructible |= 128;
        }
        if (n === 241771 && t & 1024) {
          e.report(97, "yield");
        }
        return !(~n & 20480) || !(~n & 36864) || n == -2147483526;
      }
      function re(e, t, n, r) {
        while (t) {
          if (t["$" + n]) {
            if (r) {
              e.report(139);
            }
            return 1;
          }
          if (r && t.loop) {
            r = 0;
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
      function ae(e, t, n) {
        if (!(~n & 537079808)) {
          if (t & 1) {
            e.report(121);
          }
          e.flags |= 512;
        }
        if (!ie(t, n)) {
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
      function le(e, t) {
        e.startIndex = e.tokenIndex = e.index;
        e.startColumn = e.tokenColumn = e.column;
        e.startLine = e.tokenLine = e.line;
        e.setToken(o[e.currentChar] & 8192 ? function (e) {
          const t = e.currentChar;
          let n = d(e);
          const r = e.index;
          while (n !== t) {
            if (e.index >= e.end) {
              e.report(16);
            }
            if (n === 13) {
              if (e.source.charCodeAt(e.index + 1) === 10) {
                d(e);
              }
              e.column = -1;
              e.line++;
            } else if (n === 10 || n === 8232 || n === 8233) {
              e.column = -1;
              e.line++;
            }
            n = d(e);
          }
          if (n !== t) {
            e.report(16);
          }
          e.tokenValue = ce(e.source.slice(r, e.index));
          d(e);
          if (e.options.raw) {
            e.tokenRaw = e.source.slice(e.tokenIndex, e.index);
          }
          return 134283267;
        }(e) : Y(e, t, 0));
        return e.getToken();
      }
      function ue(e) {
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
        let n = false;
        while (e.index < e.end) {
          const r = e.source.charCodeAt(e.index);
          if (r === 13) {
            t |= 5;
            n = true;
            h(e);
          } else if (r === 10) {
            p(e, t);
            t = t & -5 | 1;
          } else if (r === 8232 || r === 8233) {
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
        const r = e.source.slice(e.tokenIndex, e.index);
        const i = n ? r.replaceAll("\r\n", "\n") : r;
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
          let n = e.currentChar;
          while (o[n] & 32770) {
            n = d(e);
          }
          e.tokenValue += e.source.slice(t, e.index);
          e.setToken(208897, true);
        }
        return e.getToken();
      }
      class fe {
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
            privateIdentifiers: n
          } = this;
          let r = t & 800;
          if (!(r & 768)) {
            r |= 768;
          }
          const o = n.get(e);
          if (this.hasPrivateIdentifier(e) && ((o & 32) != (r & 32) || o & r & 768)) {
            this.parser.report(148, e);
          }
          n.set(e, this.hasPrivateIdentifier(e) ? o | r : r);
        }
        addPrivateIdentifierRef(e) {
          var t;
          var n;
          if ((n = (t = this.refs)[e]) === null || n === undefined) {
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
                line: n,
                column: r
              } = this.refs[e][0];
              throw new S({
                index: t,
                line: n,
                column: r
              }, {
                index: t + e.length,
                line: n,
                column: r + e.length
              }, 4, e);
            }
          }
        }
        hasPrivateIdentifier(e) {
          return this.privateIdentifiers.has(e);
        }
      }
      class pe {
        constructor(e, t = 2, n) {
          a(this, "parser", undefined);
          a(this, "type", undefined);
          a(this, "parent", undefined);
          a(this, "scopeError", undefined);
          a(this, "variableBindings", new Map());
          this.parser = e;
          this.type = t;
          this.parent = n;
        }
        createChildScope(e) {
          return new pe(this.parser, e, this);
        }
        addVarOrBlock(e, t, n, r, o, i) {
          if (n & 4) {
            this.addVarName(e, t, n, r, o);
          } else {
            this.addBlockName(e, t, n, r, o, i);
          }
          if (i & 64) {
            this.parser.declareUnboundVariable(t);
          }
        }
        addVarName(e, t, n, r, o) {
          const {
            parser: i
          } = this;
          let a = this;
          while (a && !(a.type & 128)) {
            const {
              variableBindings: s
            } = a;
            const c = s.get(t);
            if (c && c & 248 && (!i.options.webcompat || e & 1 || (!(n & 128) || !(c & 68)) && (!(c & 128) || !(n & 68)))) {
              throw new S(r, o, 147, t);
            }
            if (a === this && c && c & 1 && n & 1) {
              a.recordScopeError(147, r, o, t);
            }
            if (c && (c & 256 || c & 512 && !i.options.webcompat)) {
              throw new S(r, o, 147, t);
            }
            a.variableBindings.set(t, n);
            a = a.parent;
          }
        }
        hasVariable(e) {
          return this.variableBindings.has(e);
        }
        addBlockName(e, t, n, r, o, i = 0) {
          var a;
          const {
            parser: s
          } = this;
          const c = this.variableBindings.get(t);
          if (c && !(c & 2)) {
            if (n & 1) {
              this.recordScopeError(147, r, o, t);
            } else if (!s.options.webcompat || e & 1 || !(i & 2) || c !== 64 || n !== 64) {
              throw new S(r, o, 147, t);
            }
          }
          if (this.type & 64 && (a = this.parent) !== null && a !== undefined && a.hasVariable(t) && !(this.parent.variableBindings.get(t) & 2)) {
            throw new S(r, o, 147, t);
          }
          if (this.type & 512 && c && !(c & 2) && n & 1) {
            this.recordScopeError(147, r, o, t);
          }
          if (this.type & 32 && this.parent.variableBindings.get(t) & 768) {
            throw new S(r, o, 161, t);
          }
          this.variableBindings.set(t, n);
        }
        recordScopeError(e, t, n, ...r) {
          var o;
          if ((o = this.scopeError) === null || o === undefined) {
            this.scopeError = {
              type: e,
              params: r,
              start: t,
              end: n
            };
          }
        }
        reportScopeError() {
          const {
            scopeError: e
          } = this;
          if (e) {
            throw new S(e.start, e.end, e.type, ...e.params);
          }
        }
      }
      function he(e, t, n, r, o) {
        const i = e.createScope().createChildScope(512);
        i.addBlockName(t, n, 1, r, o);
        return i;
      }
      class ge {
        constructor(e, t = {}) {
          var n;
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
              features: n,
              next: o,
              ranges: a,
              module: s,
              sourceType: c,
              globalReturn: l
            } = t;
            let u = function (e, t) {
              if (e == null) {
                return {};
              }
              var n;
              var r;
              var o = function (e, t) {
                if (e == null) {
                  return {};
                }
                var n = {};
                for (var r in e) {
                  if ({}.hasOwnProperty.call(e, r)) {
                    if (t.indexOf(r) !== -1) {
                      continue;
                    }
                    n[r] = e[r];
                  }
                }
                return n;
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) {
                  n = i[r];
                  if (t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n)) {
                    o[n] = e[n];
                  }
                }
              }
              return o;
            }(t, r);
            if (o) {
              n |= 7;
            }
            a = function (e, t, n, r) {
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
                    end: (n = e.end) !== null && n !== undefined && n,
                    range: (r = e.range) !== null && r !== undefined && r
                  };
                }
              }
            }(a);
            if (s && !c) {
              c = "module";
            }
            if (!!l && (!c || c === "script")) {
              c = "commonjs";
            }
            return i(i({}, u), {}, {
              ranges: a,
              features: n,
              sourceType: c
            });
          }(t);
          this.features = this.options.features;
          if (Array.isArray(this.options.onComment)) {
            this.options.onComment = (n = this.options.onComment, o = this.options, function (e, t, r, i, a) {
              const s = {
                type: e,
                value: t
              };
              const {
                ranges: c
              } = o;
              if (c) {
                if (c.start) {
                  s.start = r;
                }
                if (c.end) {
                  s.end = i;
                }
                if (c.range) {
                  s.range = [r, i];
                }
              }
              if (o.loc) {
                s.loc = a;
              }
              n.push(s);
            });
          }
          if (Array.isArray(this.options.onToken)) {
            this.options.onToken = function (e, t) {
              return function (n, r, o, i) {
                const a = {
                  token: n
                };
                const {
                  ranges: s
                } = t;
                if (s) {
                  if (s.start) {
                    a.start = r;
                  }
                  if (s.end) {
                    a.end = o;
                  }
                  if (s.range) {
                    a.range = [r, o];
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
            onToken: n
          } = this.options;
          if (n) {
            if (e !== 1048576) {
              const r = {
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
                n(...this.lastOnToken);
              }
              this.lastOnToken = [v(e), this.tokenIndex, this.index, r];
            } else if (this.lastOnToken) {
              n(...this.lastOnToken);
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
        finishNode(e, t, n) {
          const {
            ranges: r
          } = this.options;
          if (r) {
            const o = n ? n.index : this.startIndex;
            if (r.start) {
              e.start = t.index;
            }
            if (r.end) {
              e.end = o;
            }
            if (r.range) {
              e.range = [t.index, o];
            }
          }
          if (this.options.loc) {
            e.loc = {
              start: {
                line: t.line,
                column: t.column
              },
              end: n ? {
                line: n.line,
                column: n.column
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
          throw new S(this.tokenStart, this.currentLocation, e, ...t);
        }
        createScopeIfLexical(e, t) {
          if (this.options.lexical) {
            return this.createScope(e, t);
          }
        }
        createScope(e, t) {
          return new pe(this, e, t);
        }
        createPrivateScopeIfLexical(e) {
          if (this.options.lexical) {
            return new fe(this, e);
          }
        }
        cloneIdentifier(e) {
          return structuredClone(e);
        }
        cloneStringLiteral(e) {
          return structuredClone(e);
        }
      }
      function me(e, t = {}, n = 0) {
        const r = new ge(e, t);
        if (r.options.sourceType === "module") {
          n |= 3;
        }
        if (r.options.sourceType === "commonjs") {
          n |= 69632;
        }
        if (r.options.impliedStrict) {
          n |= 1;
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
        })(r);
        const o = r.createScopeIfLexical();
        let i;
        let a = "script";
        if (n & 2) {
          a = "module";
          i = function (e, t, n) {
            q(e, t | 32);
            const r = [];
            while (e.getToken() === 134283267) {
              const {
                tokenStart: n
              } = e;
              const o = e.getToken();
              r.push(we(e, t, lt(e, t), o, n));
            }
            while (e.getToken() !== 1048576) {
              r.push(ve(e, t, n));
            }
            return r;
          }(r, n | 8, o);
          if (o) {
            for (const e of r.exportedBindings) {
              if (!o.hasVariable(e)) {
                r.report(150, e);
              }
            }
          }
        } else {
          i = function (e, t, n) {
            q(e, t | 262176);
            const r = [];
            while (e.getToken() === 134283267) {
              const {
                index: n,
                tokenValue: o,
                tokenStart: i,
                tokenIndex: a
              } = e;
              const s = e.getToken();
              const c = lt(e, t);
              if (X(e, n, a, o)) {
                t |= 1;
                if (e.flags & 64) {
                  throw new S(e.tokenStart, e.currentLocation, 9);
                }
                if (e.flags & 4096) {
                  throw new S(e.tokenStart, e.currentLocation, 15);
                }
              }
              r.push(we(e, t, c, s, i));
            }
            while (e.getToken() !== 1048576) {
              r.push(ye(e, t, n, undefined, {}, 4));
            }
            return r;
          }(r, n | 8, o);
        }
        return r.finishNode({
          type: "Program",
          sourceType: a,
          body: i
        }, {
          index: 0,
          line: 1,
          column: 0
        }, r.currentLocation);
      }
      function ve(e, t, n) {
        let r;
        if (e.getToken() === 133) {
          Object.assign(e.leadingDecorators, {
            start: e.tokenStart,
            decorators: Et(e, t, undefined)
          });
        }
        switch (e.getToken()) {
          case 20564:
            r = function (e, t, n) {
              const r = e.leadingDecorators.decorators.length ? e.leadingDecorators.start : e.tokenStart;
              q(e, t | 32);
              const o = J(e, t | 32, 20561);
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
                    a = ut(e, t, n, undefined, 1, 1, 0, e.tokenStart, 4);
                    break;
                  case 133:
                    if (!(e.features & 1)) {
                      e.report(30, "@");
                    }
                  case 86094:
                    a = wt(e, t, n, undefined, 1);
                    break;
                  case 209005:
                    {
                      const {
                        tokenStart: r
                      } = e;
                      a = ct(e, t);
                      const {
                        flags: o
                      } = e;
                      if (!(o & 1)) {
                        if (e.getToken() === 86104) {
                          a = ut(e, t, n, undefined, 1, 1, 1, r, 4);
                        } else if (e.getToken() === 67174411) {
                          a = xt(e, t, undefined, a, 1, 1, o, r);
                          a = Ye(e, t, undefined, a, 0, 0, r);
                          a = je(e, t, undefined, 0, 0, r, a);
                        } else if (e.getToken() & 143360) {
                          n &&= he(e, t, e.tokenValue, e.tokenStart, e.currentLocation);
                          a = ct(e, t);
                          a = _t(e, t, n, undefined, [a], 1, r);
                        }
                      }
                      break;
                    }
                  default:
                    a = Me(e, t, undefined, 1, 0, e.tokenStart);
                    K(e, t | 32);
                }
                if (n) {
                  e.declareUnboundVariable("default");
                }
                return e.finishNode({
                  type: "ExportDefaultDeclaration",
                  declaration: a
                }, r);
              }
              switch (e.getToken()) {
                case 8391476:
                  {
                    q(e, t);
                    let o = null;
                    if (J(e, t, 77932)) {
                      if (n) {
                        e.declareUnboundVariable(e.tokenValue);
                      }
                      o = tt(e, t);
                    }
                    Q(e, t, 209011);
                    if (e.getToken() !== 134283267) {
                      e.report(105, "Export");
                    }
                    s = lt(e, t);
                    const i = {
                      type: "ExportAllDeclaration",
                      source: s,
                      exported: o,
                      attributes: Qe(e, t)
                    };
                    K(e, t | 32);
                    return e.finishNode(i, r);
                  }
                case 2162700:
                  {
                    q(e, t);
                    const r = [];
                    const o = [];
                    let a = 0;
                    while (e.getToken() & 143360 || e.getToken() === 134283267) {
                      const {
                        tokenStart: s,
                        tokenValue: c
                      } = e;
                      const l = tt(e, t);
                      let u;
                      if (l.type === "Literal") {
                        a = 1;
                      }
                      if (e.getToken() === 77932) {
                        q(e, t);
                        if (!(e.getToken() & 143360) && e.getToken() !== 134283267) {
                          e.report(106);
                        }
                        if (n) {
                          r.push(e.tokenValue);
                          o.push(c);
                        }
                        u = tt(e, t);
                      } else {
                        if (n) {
                          r.push(e.tokenValue);
                          o.push(e.tokenValue);
                        }
                        u = l.type === "Literal" ? e.cloneStringLiteral(l) : e.cloneIdentifier(l);
                      }
                      i.push(e.finishNode({
                        type: "ExportSpecifier",
                        local: l,
                        exported: u
                      }, s));
                      if (e.getToken() !== 1074790415) {
                        Q(e, t, 18);
                      }
                    }
                    Q(e, t, 1074790415);
                    if (J(e, t, 209011)) {
                      if (e.getToken() !== 134283267) {
                        e.report(105, "Export");
                      }
                      s = lt(e, t);
                      c = Qe(e, t);
                      if (n) {
                        r.forEach(t => e.declareUnboundVariable(t));
                      }
                    } else {
                      if (a) {
                        e.report(174);
                      }
                      if (n) {
                        r.forEach(t => e.declareUnboundVariable(t));
                        o.forEach(t => e.addBindingToExports(t));
                      }
                    }
                    K(e, t | 32);
                    break;
                  }
                case 133:
                  if (!(e.features & 1)) {
                    e.report(30, "@");
                  }
                case 86094:
                  a = wt(e, t, n, undefined, 2);
                  break;
                case 86104:
                  a = ut(e, t, n, undefined, 1, 2, 0, e.tokenStart, 4);
                  break;
                case 241737:
                  a = Oe(e, t, n, undefined, 8, 64);
                  break;
                case 86090:
                  a = Oe(e, t, n, undefined, 16, 64);
                  break;
                case 86088:
                  a = Ie(e, t, n, undefined, 64);
                  break;
                case 209005:
                  {
                    const {
                      tokenStart: r
                    } = e;
                    q(e, t);
                    if (!(e.flags & 1) && e.getToken() === 86104) {
                      a = ut(e, t, n, undefined, 1, 2, 1, r, 4);
                      break;
                    }
                  }
                default:
                  e.report(30, x[e.getToken() & 255]);
              }
              const l = {
                type: "ExportNamedDeclaration",
                declaration: a,
                specifiers: i,
                source: s,
                attributes: c
              };
              return e.finishNode(l, r);
            }(e, t, n);
            break;
          case 86106:
            if (e.leadingDecorators.decorators.length) {
              e.report(172);
            }
            r = function (e, t, n) {
              const r = e.tokenStart;
              let o;
              q(e, t);
              let a = false;
              let s = null;
              const {
                tokenStart: c
              } = e;
              let l = [];
              if (e.getToken() === 134283267) {
                o = lt(e, t);
              } else {
                if (e.getToken() & 143360) {
                  const r = e.getToken();
                  const {
                    tokenValue: i,
                    tokenStart: u,
                    currentLocation: d
                  } = e;
                  const f = e.features & 2 && !(r & -2147483648) && i == "defer";
                  const p = e.features & 4 && !(r & -2147483648) && i == "source";
                  if (f || p) {
                    const r = ct(e, t);
                    if (i === "defer") {
                      if (e.getToken() === 8391476) {
                        s = "defer";
                        l = [Le(e, t, n)];
                      } else if (e.getToken() === 209011 || e.getToken() === 18) {
                        if (n != null) {
                          n.addBlockName(t, i, 8, u, d);
                        }
                        l = [e.finishNode({
                          type: "ImportDefaultSpecifier",
                          local: r
                        }, c)];
                      } else {
                        e.report(108);
                      }
                    } else if (e.getToken() === 209011) {
                      const f = e.getToken();
                      const p = e.tokenStart;
                      const h = e.currentLocation;
                      const g = ct(e, t);
                      if (e.getToken() === 209011) {
                        ee(e, t, 16, f, 0);
                        if (n != null) {
                          n.addBlockName(t, g.name, 8, p, h);
                        }
                        s = "source";
                        l = [e.finishNode({
                          type: "ImportDefaultSpecifier",
                          local: g
                        }, p)];
                      } else {
                        if (n != null) {
                          n.addBlockName(t, i, 8, u, d);
                        }
                        l = [e.finishNode({
                          type: "ImportDefaultSpecifier",
                          local: r
                        }, c)];
                        if (e.getToken() !== 134283267) {
                          e.report(105, "Import");
                        }
                        o = lt(e, t);
                        a = true;
                      }
                    } else if (e.getToken() & 143360) {
                      s = "source";
                      const r = e.tokenStart;
                      const o = Re(e, t, n);
                      l = [e.finishNode({
                        type: "ImportDefaultSpecifier",
                        local: o
                      }, r)];
                    } else if (e.getToken() === 18) {
                      if (n != null) {
                        n.addBlockName(t, i, 8, u, d);
                      }
                      l = [e.finishNode({
                        type: "ImportDefaultSpecifier",
                        local: r
                      }, c)];
                    } else {
                      e.report(109);
                    }
                  } else {
                    const r = Re(e, t, n);
                    l = [e.finishNode({
                      type: "ImportDefaultSpecifier",
                      local: r
                    }, c)];
                  }
                  if (s === null && !a && J(e, t, 18)) {
                    switch (e.getToken()) {
                      case 8391476:
                        l.push(Le(e, t, n));
                        break;
                      case 2162700:
                        Pe(e, t, n, l);
                        break;
                      default:
                        e.report(107);
                    }
                  }
                } else {
                  switch (e.getToken()) {
                    case 8391476:
                      l = [Le(e, t, n)];
                      break;
                    case 2162700:
                      Pe(e, t, n, l);
                      break;
                    case 67174411:
                      return Ue(e, t, undefined, r);
                    case 67108877:
                      return Be(e, t, r);
                    default:
                      e.report(30, x[e.getToken() & 255]);
                  }
                }
                if (!a) {
                  o = function (e, t) {
                    Q(e, t, 209011);
                    if (e.getToken() !== 134283267) {
                      e.report(105, "Import");
                    }
                    return lt(e, t);
                  }(e, t);
                }
              }
              const u = i({
                type: "ImportDeclaration",
                specifiers: l,
                source: o,
                attributes: Qe(e, t)
              }, e.features & 2 || e.features & 4 ? {
                phase: s
              } : null);
              K(e, t | 32);
              return e.finishNode(u, r);
            }(e, t, n);
            break;
          default:
            r = ye(e, t, n, undefined, {}, 4);
        }
        return r;
      }
      function ye(e, t, n, r, o, i = 2) {
        const a = e.tokenStart;
        if (e.leadingDecorators.decorators.length && e.getToken() !== 86094) {
          e.report(172);
        }
        switch (e.getToken()) {
          case 86104:
            return ut(e, t, n, r, 1, 0, 0, a, i);
          case 133:
            if (!(e.features & 1)) {
              e.report(30, "@");
            }
          case 86094:
            return wt(e, t, n, r, 0);
          case 86090:
            return Oe(e, t, n, r, 16);
          case 241737:
            return function (e, t, n, r, o) {
              const {
                tokenValue: i,
                tokenStart: a,
                currentLocation: s
              } = e;
              const c = e.getToken();
              let l = ct(e, t);
              if (e.getToken() & 2240512 && ~e.getToken() & 20480) {
                const o = Ne(e, t, n, r, 8);
                K(e, t | 32);
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
                return Se(e, t, n, r, {}, i, l, c, 0, a, o);
              }
              if (e.getToken() === 10) {
                let n;
                if (e.options.lexical) {
                  n = he(e, t, i, a, s);
                }
                e.flags = (e.flags | 128) ^ 128;
                l = _t(e, t, n, r, [l], 0, a);
              } else {
                l = Ye(e, t, r, l, 0, 0, a);
                l = je(e, t, r, 0, 0, a, l);
              }
              if (e.getToken() === 18) {
                l = Ve(e, t, r, 0, a, l);
              }
              return Te(e, t, l, a);
            }(e, t, n, r, i);
          case 209013:
            return function (e, t, n, r, o, i) {
              const {
                tokenStart: a,
                tokenValue: s,
                currentLocation: c
              } = e;
              const l = e.getToken();
              const u = ct(e, t);
              if (!(e.flags & 1) && Ce(e.getToken())) {
                if (!!(i & 4) && !!(t & 8) && !(t & 2) && !(t & 4096)) {
                  e.report(30, x[e.getToken() & 255]);
                }
                return Oe(e, t, n, r, 16, i, "using", a, 1);
              }
              e.assignable = 1;
              if (e.getToken() === 10) {
                let n;
                if (e.options.lexical) {
                  n = he(e, t, s, a, c);
                }
                e.flags = (e.flags | 128) ^ 128;
                return Te(e, t, _t(e, t, n, r, [u], 0, a), a);
              }
              return be(e, t, n, r, o, 1, u, l, s, a, i);
            }(e, t, n, r, o, i);
          case 209006:
            if ((t & 2048 || t & 2 && t & 8) && function (e) {
              const {
                index: t,
                source: n
              } = e;
              let r = t;
              while (r < e.end) {
                const t = n.charCodeAt(r);
                if (t === 10 || t === 13 || t === 8232 || t === 8233) {
                  return false;
                }
                if (/\s/u.test(n[r])) {
                  r++;
                } else {
                  if (t !== 47 || n.charCodeAt(r + 1) !== 42) {
                    break;
                  }
                  for (r += 2; r < e.end;) {
                    const e = n.charCodeAt(r);
                    if (e === 10 || e === 13 || e === 8232 || e === 8233) {
                      return false;
                    }
                    if (e === 42 && n.charCodeAt(r + 1) === 47) {
                      r += 2;
                      break;
                    }
                    r++;
                  }
                }
              }
              if (n.slice(r, r + 5) !== "using") {
                return false;
              }
              const o = n.codePointAt(r + 5);
              return o === undefined || o !== 92 && !u(o);
            }(e)) {
              return function (e, t, n, r, o, i) {
                const a = e.tokenStart;
                let s;
                if (t & 524288) {
                  e.report(179);
                }
                q(e, t | 32);
                if (e.flags & 1 || e.getToken() !== 209013) {
                  s = qe(e, t, r, 0, 0, 1);
                } else {
                  const o = e.tokenStart;
                  const c = ct(e, t);
                  if (!(e.flags & 1) && Ce(e.getToken())) {
                    return Oe(e, t, n, r, 16, i, "await using", a, 1);
                  }
                  s = Ye(e, t, r, c, 0, 0, o);
                }
                if (e.getToken() === 8391735) {
                  e.report(33);
                }
                e.assignable = 2;
                const c = e.finishNode({
                  type: "AwaitExpression",
                  argument: s
                }, a);
                return be(e, t, n, r, o, 0, c, 1048576, "", a, i);
              }(e, t, n, r, o, i);
            } else {
              return ke(e, t, n, r, o, 1, i);
            }
          case 20564:
            e.report(103, "export");
          case 86106:
            q(e, t);
            switch (e.getToken()) {
              case 67174411:
                return Ue(e, t, r, a);
              case 67108877:
                return Be(e, t, a);
              default:
                e.report(103, "import");
            }
          case 209005:
            return xe(e, t, n, r, o, 1, i);
          default:
            return ke(e, t, n, r, o, 1, i);
        }
      }
      function ke(e, t, n, r, o, i, a = 0) {
        switch (e.getToken()) {
          case 86088:
            return Ie(e, t, n, r);
          case 20572:
            return function (e, t, n) {
              if (!(t & 4096)) {
                e.report(92);
              }
              const r = e.tokenStart;
              q(e, t | 32);
              const o = e.flags & 1 || e.getToken() & 1048576 ? null : He(e, t, n, 0, 1, e.tokenStart);
              K(e, t | 32);
              return e.finishNode({
                type: "ReturnStatement",
                argument: o
              }, r);
            }(e, t, r);
          case 20569:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t);
              Q(e, t | 32, 67174411);
              e.assignable = 1;
              const a = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t | 32, 16);
              const s = Ee(e, t, n, r, o);
              let c = null;
              if (e.getToken() === 20563) {
                q(e, t | 32);
                c = Ee(e, t, n, r, o);
              }
              return e.finishNode({
                type: "IfStatement",
                test: a,
                consequent: s,
                alternate: c
              }, i);
            }(e, t, n, r, o);
          case 20567:
            return function (e, t, n, r, o, i) {
              const a = e.tokenStart;
              q(e, t);
              const s = ((t & 2048) > 0 || (t & 2) > 0 && (t & 8) > 0) && J(e, t, 209006);
              Q(e, t | 32, 67174411);
              n = (i = n) === null || i === undefined ? undefined : i.createChildScope(1);
              let c;
              let l;
              let u = null;
              let d = null;
              let f = 0;
              let p = null;
              let h = e.getToken() === 86088 || e.getToken() === 241737 || e.getToken() === 86090 || e.getToken() === 209013;
              let g = false;
              const {
                tokenStart: m
              } = e;
              const v = e.getToken();
              if (h) {
                if (v === 241737) {
                  p = ct(e, t);
                  if (e.getToken() & 2240512 && ~e.getToken() & 20480) {
                    p = e.finishNode({
                      type: "VariableDeclaration",
                      kind: "let",
                      declarations: Ne(e, t | 131072, n, r, 8, 32)
                    }, m);
                    e.assignable = 1;
                  } else if (t & 1) {
                    e.report(67);
                  } else {
                    h = false;
                    e.assignable = 1;
                    p = Ye(e, t, r, p, 0, 0, m);
                    if (e.getToken() === 471156) {
                      e.report(117);
                    }
                  }
                } else if (v === 209013) {
                  const o = ct(e, t);
                  if (e.flags & 1 || !Ce(e.getToken())) {
                    h = false;
                    e.assignable = 1;
                    p = Ye(e, t, r, o, 0, 0, m);
                  } else if (e.getToken() === 471156) {
                    const i = e.tokenStart;
                    const a = e.currentLocation;
                    const s = e.getToken();
                    const l = e.tokenValue;
                    const u = ct(e, t);
                    if (e.getToken() !== 1077936155 && e.getToken() !== 8673330 && e.getToken() !== 1074790417 && e.getToken() !== 18) {
                      h = false;
                      g = true;
                      e.assignable = 1;
                      p = o;
                    } else {
                      var y;
                      c = "using";
                      ee(e, t, 16, s, 0);
                      if ((y = n) !== null && y !== undefined) {
                        y.addBlockName(t, l, 16, i, a, 32);
                      }
                      let o = null;
                      if (e.getToken() === 1077936155) {
                        q(e, t | 32);
                        o = Me(e, t | 131072, r, 1, 0, e.tokenStart);
                        if (!(~e.getToken() & 262144)) {
                          throw new S(i, e.currentLocation, 60, e.getToken() === 471156 ? "of" : "in");
                        }
                      } else if (e.getToken() !== 8673330) {
                        e.report(59, c);
                      }
                      const d = [e.finishNode({
                        type: "VariableDeclarator",
                        id: u,
                        init: o
                      }, i)];
                      const f = e.options.lexical ? new Set([l]) : undefined;
                      while (J(e, t | 131072, 18)) {
                        const o = De(e, t | 131072, n, r, 16, 32, c);
                        if (f) {
                          const {
                            name: t
                          } = o.id;
                          if (f.has(t)) {
                            e.report(147, t);
                          }
                          f.add(t);
                        }
                        d.push(o);
                      }
                      if (d.length > 1 && e.getToken() & 262144) {
                        e.report(61, x[e.getToken() & 255]);
                      }
                      p = e.finishNode({
                        type: "VariableDeclaration",
                        kind: c,
                        declarations: d
                      }, m);
                      e.assignable = 1;
                    }
                  } else {
                    c = "using";
                    p = e.finishNode({
                      type: "VariableDeclaration",
                      kind: c,
                      declarations: Ne(e, t | 131072, n, r, 16, 32, c)
                    }, m);
                    e.assignable = 1;
                  }
                } else {
                  q(e, t);
                  p = e.finishNode(v === 86088 ? {
                    type: "VariableDeclaration",
                    kind: "var",
                    declarations: Ne(e, t | 131072, n, r, 4, 32)
                  } : {
                    type: "VariableDeclaration",
                    kind: "const",
                    declarations: Ne(e, t | 131072, n, r, 16, 32)
                  }, m);
                  e.assignable = 1;
                }
              } else if (v === 209006 && (t & 2048 || t & 2 && t & 8)) {
                let o;
                if (t & 524288) {
                  e.report(179);
                }
                q(e, t | 32);
                if (e.flags & 1 || e.getToken() !== 209013) {
                  o = qe(e, t, r, 0, 0, 1);
                } else {
                  const i = e.tokenStart;
                  const a = ct(e, t);
                  if (e.flags & 1 || !Ce(e.getToken())) {
                    o = Ye(e, t, r, a, 0, 0, i);
                  } else {
                    c = "await using";
                    h = true;
                    p = e.finishNode({
                      type: "VariableDeclaration",
                      kind: c,
                      declarations: Ne(e, t | 131072, n, r, 16, 32, c)
                    }, m);
                    e.assignable = 1;
                  }
                }
                if (!h) {
                  if (e.getToken() === 8391735) {
                    e.report(33);
                  }
                  e.assignable = 2;
                  p = e.finishNode({
                    type: "AwaitExpression",
                    argument: o
                  }, m);
                }
              } else if (s && v === 209005) {
                const n = ct(e, t);
                e.assignable = 1;
                p = Ye(e, t | 131072, r, n, 0, 0, m);
              } else if (v === 1074790417) {
                if (s) {
                  e.report(82);
                }
              } else if (~v & 2097152) {
                p = qe(e, t | 131072, r, 1, 0, 1);
              } else {
                const n = e.tokenStart;
                p = v === 2162700 ? mt(e, t, undefined, r, 1, 0, 0, 2, 32) : ft(e, t, undefined, r, 1, 0, 0, 2, 32);
                f = e.destructible;
                if (f & 64) {
                  e.report(63);
                }
                e.assignable = f & 16 ? 2 : 1;
                p = Ye(e, t | 131072, r, p, 0, 0, n);
              }
              if (g || !(~e.getToken() & 262144)) {
                if (g || e.getToken() === 471156) {
                  if (e.assignable & 2) {
                    e.report(80, s ? "await" : "of");
                  }
                  Z(e, p);
                  if (!g) {
                    q(e, t | 32);
                  }
                  l = Me(e, t, r, 1, 0, e.tokenStart);
                  Q(e, t | 32, 16);
                  const i = Ae(e, t, n, r, o);
                  return e.finishNode({
                    type: "ForOfStatement",
                    left: p,
                    right: l,
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
                Z(e, p);
                q(e, t | 32);
                if (s) {
                  e.report(82);
                }
                l = He(e, t, r, 0, 1, e.tokenStart);
                Q(e, t | 32, 16);
                const i = Ae(e, t, n, r, o);
                return e.finishNode({
                  type: "ForInStatement",
                  body: i,
                  left: p,
                  right: l
                }, a);
              }
              if (s) {
                e.report(82);
              }
              if (!h) {
                if (f & 8 && e.getToken() !== 1077936155) {
                  e.report(80, "loop");
                }
                p = je(e, t | 131072, r, 0, 0, m, p);
              }
              if (e.getToken() === 18) {
                p = Ve(e, t, r, 0, m, p);
              }
              Q(e, t | 32, 1074790417);
              if (e.getToken() !== 1074790417) {
                u = He(e, t, r, 0, 1, e.tokenStart);
              }
              Q(e, t | 32, 1074790417);
              if (e.getToken() !== 16) {
                d = He(e, t, r, 0, 1, e.tokenStart);
              }
              Q(e, t | 32, 16);
              const k = Ae(e, t, n, r, o);
              return e.finishNode({
                type: "ForStatement",
                init: p,
                test: u,
                update: d,
                body: k
              }, a);
            }(e, t, n, r, o);
          case 20562:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t | 32);
              const a = Ae(e, t, n, r, o);
              Q(e, t, 20578);
              Q(e, t | 32, 67174411);
              const s = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t | 32, 16);
              J(e, t | 32, 1074790417);
              return e.finishNode({
                type: "DoWhileStatement",
                body: a,
                test: s
              }, i);
            }(e, t, n, r, o);
          case 20578:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t);
              Q(e, t | 32, 67174411);
              const a = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t | 32, 16);
              const s = Ae(e, t, n, r, o);
              return e.finishNode({
                type: "WhileStatement",
                test: a,
                body: s
              }, i);
            }(e, t, n, r, o);
          case 86110:
            return function (e, t, n, r, o, i) {
              const a = e.tokenStart;
              q(e, t);
              Q(e, t | 32, 67174411);
              const s = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t, 16);
              Q(e, t, 2162700);
              const c = [];
              let l = 0;
              for (n = (i = n) === null || i === undefined ? undefined : i.createChildScope(8); e.getToken() !== 1074790415;) {
                const {
                  tokenStart: i
                } = e;
                let a = null;
                const s = [];
                if (J(e, t | 32, 20556)) {
                  a = He(e, t, r, 0, 1, e.tokenStart);
                } else {
                  Q(e, t | 32, 20561);
                  if (l) {
                    e.report(89);
                  }
                  l = 1;
                }
                Q(e, t | 32, 21);
                while (e.getToken() !== 20556 && e.getToken() !== 1074790415 && e.getToken() !== 20561) {
                  const i = ye(e, t | 4, n, r, {
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
              Q(e, t | 32, 1074790415);
              return e.finishNode({
                type: "SwitchStatement",
                discriminant: s,
                cases: c
              }, a);
            }(e, t, n, r, o);
          case 1074790417:
            return function (e, t) {
              const n = e.tokenStart;
              q(e, t | 32);
              return e.finishNode({
                type: "EmptyStatement"
              }, n);
            }(e, t);
          case 2162700:
            return _e(e, t, n == null ? undefined : n.createChildScope(), r, o, e.tokenStart);
          case 86112:
            return function (e, t, n) {
              const r = e.tokenStart;
              q(e, t | 32);
              if (e.flags & 1) {
                e.report(90);
              }
              const o = He(e, t, n, 0, 1, e.tokenStart);
              K(e, t | 32);
              return e.finishNode({
                type: "ThrowStatement",
                argument: o
              }, r);
            }(e, t, r);
          case 20555:
            return function (e, t, n) {
              const r = e.tokenStart;
              q(e, t | 32);
              let o = null;
              if (!(e.flags & 1) && e.getToken() & 143360) {
                const {
                  tokenValue: r
                } = e;
                o = ct(e, t | 32);
                if (!re(e, n, r, 0)) {
                  e.report(140, r);
                }
              } else if (!(t & 132)) {
                e.report(69);
              }
              K(e, t | 32);
              return e.finishNode({
                type: "BreakStatement",
                label: o
              }, r);
            }(e, t, o);
          case 20559:
            return function (e, t, n) {
              if (!(t & 128)) {
                e.report(68);
              }
              const r = e.tokenStart;
              q(e, t);
              let o = null;
              if (!(e.flags & 1) && e.getToken() & 143360) {
                const {
                  tokenValue: r
                } = e;
                o = ct(e, t | 32);
                if (!re(e, n, r, 1)) {
                  e.report(140, r);
                }
              }
              K(e, t | 32);
              return e.finishNode({
                type: "ContinueStatement",
                label: o
              }, r);
            }(e, t, o);
          case 20577:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t | 32);
              const a = _e(e, t, n == null ? undefined : n.createChildScope(16), r, {
                $: o
              });
              const {
                tokenStart: s
              } = e;
              const c = J(e, t | 32, 20557) ? function (e, t, n, r, o, i, a, s) {
                let c = null;
                if (J(e, t, 67174411)) {
                  c = Dt(e, t, n = (a = n) === null || a === undefined ? undefined : a.createChildScope(4), r, ~e.getToken() & 2097152 ? 512 : 256);
                  if (e.getToken() === 18) {
                    e.report(86);
                  } else if (e.getToken() === 1077936155) {
                    e.report(87);
                  }
                  Q(e, t | 32, 16);
                }
                const l = _e(e, t, (s = n) === null || s === undefined ? undefined : s.createChildScope(32), r, {
                  $: o
                });
                return e.finishNode({
                  type: "CatchClause",
                  param: c,
                  body: l
                }, i);
              }(e, t, n, r, o, s) : null;
              let l = null;
              if (e.getToken() === 20566) {
                q(e, t | 32);
                l = _e(e, t, n == null ? undefined : n.createChildScope(4), r, {
                  $: o
                });
              }
              if (!c && !l) {
                e.report(88);
              }
              return e.finishNode({
                type: "TryStatement",
                block: a,
                handler: c,
                finalizer: l
              }, i);
            }(e, t, n, r, o);
          case 20579:
            return function (e, t, n, r, o) {
              const i = e.tokenStart;
              q(e, t);
              if (t & 1) {
                e.report(91);
              }
              Q(e, t | 32, 67174411);
              const a = He(e, t, r, 0, 1, e.tokenStart);
              Q(e, t | 32, 16);
              const s = ke(e, t, n, r, o, 0, 2);
              return e.finishNode({
                type: "WithStatement",
                object: a,
                body: s
              }, i);
            }(e, t, n, r, o);
          case 20560:
            return function (e, t) {
              const n = e.tokenStart;
              q(e, t | 32);
              K(e, t | 32);
              return e.finishNode({
                type: "DebuggerStatement"
              }, n);
            }(e, t);
          case 209005:
            return xe(e, t, n, r, o, 0, a);
          case 20557:
            e.report(164);
          case 20566:
            e.report(165);
          case 86104:
            e.report(t & 1 ? 76 : e.options.webcompat ? 77 : 78);
          case 86094:
            e.report(79);
          default:
            return function (e, t, n, r, o, i, a) {
              const {
                tokenValue: s,
                tokenStart: c
              } = e;
              const l = e.getToken();
              let u;
              if (l === 241737) {
                u = ct(e, t);
                if (t & 1) {
                  e.report(85);
                }
                if (e.getToken() === 69271571) {
                  e.report(84);
                }
              } else {
                u = Xe(e, t, r, 2, 0, 1, 0, 1, e.tokenStart, 0, 1);
              }
              return be(e, t, n, r, o, i, u, l, s, c, a);
            }(e, t, n, r, o, i, a);
        }
      }
      function be(e, t, n, r, o, i, a, s, c, l, u) {
        if (s & 143360 && e.getToken() === 21) {
          return Se(e, t, n, r, o, c, a, s, i, l, u);
        }
        let d = Ye(e, t, r, a, 0, 0, l);
        d = je(e, t, r, 0, 0, l, d);
        if (e.getToken() === 18) {
          d = Ve(e, t, r, 0, l, d);
        }
        return Te(e, t, d, l);
      }
      function _e(e, t, n, r, o, i = e.tokenStart, a = "BlockStatement") {
        const s = [];
        for (Q(e, t | 32, 2162700); e.getToken() !== 1074790415;) {
          s.push(ye(e, t, n, r, {
            $: o
          }));
        }
        Q(e, t | 32, 1074790415);
        return e.finishNode({
          type: a,
          body: s
        }, i);
      }
      function Te(e, t, n, r) {
        K(e, t | 32);
        return e.finishNode({
          type: "ExpressionStatement",
          expression: n
        }, r);
      }
      function Se(e, t, n, r, o, i, a, s, c, l, u) {
        ee(e, t, 0, s, 1);
        (function (e, t, n) {
          let r = t;
          while (r) {
            if (r["$" + n]) {
              e.report(138, n);
            }
            r = r.$;
          }
          t["$" + n] = 1;
        })(e, o, i);
        q(e, t | 32);
        const d = !c || t & 1 || !e.options.webcompat || e.getToken() !== 86104 ? ke(e, t, n, r, o, c, u) : ut(e, t, n == null ? undefined : n.createChildScope(), r, 0, 0, 0, e.tokenStart, u);
        return e.finishNode({
          type: "LabeledStatement",
          label: a,
          body: d
        }, l);
      }
      function xe(e, t, n, r, o, i, a) {
        const {
          tokenValue: s,
          tokenStart: c
        } = e;
        const l = e.getToken();
        let u = ct(e, t);
        if (e.getToken() === 21) {
          return Se(e, t, n, r, o, s, u, l, 1, c, a);
        }
        const d = e.flags & 1;
        if (!d) {
          if (e.getToken() === 86104) {
            if (!i) {
              e.report(125);
            }
            return ut(e, t, n, r, 1, 0, 1, c, a);
          }
          if (ie(t, e.getToken())) {
            u = St(e, t, r, 1, c);
            if (e.getToken() === 18) {
              u = Ve(e, t, r, 0, c, u);
            }
            return Te(e, t, u, c);
          }
        }
        if (e.getToken() === 67174411) {
          u = xt(e, t, r, u, 1, 1, d, c);
        } else {
          if (e.getToken() === 10) {
            ae(e, t, l);
            if (!(~l & 36864)) {
              e.flags |= 256;
            }
            u = kt(e, t | 2048, r, e.tokenValue, u, 0, 1, 0, c);
          }
          e.assignable = 1;
        }
        u = Ye(e, t, r, u, 0, 0, c);
        u = je(e, t, r, 0, 0, c, u);
        e.assignable = 1;
        if (e.getToken() === 18) {
          u = Ve(e, t, r, 0, c, u);
        }
        return Te(e, t, u, c);
      }
      function we(e, t, n, r, o) {
        const i = e.startIndex;
        if (r !== 1074790417) {
          e.assignable = 2;
          n = Ye(e, t, undefined, n, 0, 0, o);
          if (e.getToken() !== 1074790417) {
            n = je(e, t, undefined, 0, 0, o, n);
            if (e.getToken() === 18) {
              n = Ve(e, t, undefined, 0, o, n);
            }
          }
          K(e, t | 32);
        }
        const a = {
          type: "ExpressionStatement",
          expression: n
        };
        if (n.type === "Literal" && typeof n.value == "string") {
          a.directive = e.source.slice(o.index + 1, i - 1);
        }
        return e.finishNode(a, o);
      }
      function Ee(e, t, n, r, o) {
        const {
          tokenStart: i
        } = e;
        if (t & 1 || !e.options.webcompat || e.getToken() !== 86104) {
          return ke(e, t, n, r, {
            $: o
          }, 0);
        } else {
          return ut(e, t, n == null ? undefined : n.createChildScope(), r, 0, 0, 0, i);
        }
      }
      function Ae(e, t, n, r, o) {
        return ke(e, (t | 131072) ^ 131072 | 128, n, r, {
          loop: 1,
          $: o
        }, 0);
      }
      function Ce(e) {
        return !(~e & 143360) && !!(~e & 20480);
      }
      function Oe(e, t, n, r, o, i = 0, a, s = e.tokenStart, c = 0) {
        const l = s;
        if (!c) {
          q(e, t);
        }
        const u = Ne(e, t, n, r, o, i, a);
        K(e, t | 32);
        return e.finishNode({
          type: "VariableDeclaration",
          kind: a ?? (o & 8 ? "let" : "const"),
          declarations: u
        }, l);
      }
      function Ie(e, t, n, r, o = 0) {
        const i = e.tokenStart;
        q(e, t);
        const a = Ne(e, t, n, r, 4, o);
        K(e, t | 32);
        return e.finishNode({
          type: "VariableDeclaration",
          kind: "var",
          declarations: a
        }, i);
      }
      function Ne(e, t, n, r, o, i = 0, a) {
        let s = 1;
        const c = De(e, t, n, r, o, i, a);
        const l = [c];
        const u = a && e.options.lexical ? new Set([c.id.name]) : undefined;
        while (J(e, t, 18)) {
          s++;
          const c = De(e, t, n, r, o, i, a);
          if (u) {
            const {
              name: t
            } = c.id;
            if (u.has(t)) {
              e.report(147, t);
            }
            u.add(t);
          }
          l.push(c);
        }
        if (s > 1 && i & 32 && e.getToken() & 262144) {
          e.report(61, x[e.getToken() & 255]);
        }
        return l;
      }
      function De(e, t, n, r, o, i, a) {
        const {
          tokenStart: s
        } = e;
        const c = e.getToken();
        let l = null;
        if (!!a && !(~c & 2097152)) {
          e.report(50);
        }
        const u = Dt(e, t, n, r, o, i);
        if (e.getToken() === 1077936155) {
          q(e, t | 32);
          l = Me(e, t, r, 1, 0, e.tokenStart, i);
          if (i & 32 && (e.getToken() === 471156 || e.getToken() === 8673330 && (c & 2097152 || !(o & 4) || t & 1 || !e.options.webcompat))) {
            throw new S(s, e.currentLocation, 60, e.getToken() === 471156 ? "of" : "in");
          }
        } else if ((o & 16 || (c & 2097152) > 0) && ~e.getToken() & 262144) {
          e.report(59, a ?? (o & 16 ? "const" : "destructuring"));
        }
        return e.finishNode({
          type: "VariableDeclarator",
          id: u,
          init: l
        }, s);
      }
      function Re(e, t, n) {
        if (!ie(t, e.getToken())) {
          e.report(120);
        }
        if (!(~e.getToken() & 537079808)) {
          e.report(121);
        }
        if (n != null) {
          n.addBlockName(t, e.tokenValue, 8, e.tokenStart, e.currentLocation);
        }
        return ct(e, t);
      }
      function Le(e, t, n) {
        const {
          tokenStart: r
        } = e;
        q(e, t);
        Q(e, t, 77932);
        if (!(~e.getToken() & 134217728)) {
          throw new S(r, e.currentLocation, 30, x[e.getToken() & 255]);
        }
        return e.finishNode({
          type: "ImportNamespaceSpecifier",
          local: Re(e, t, n)
        }, r);
      }
      function Pe(e, t, n, r) {
        for (q(e, t); e.getToken() & 143360 || e.getToken() === 134283267;) {
          let {
            tokenValue: o,
            tokenStart: i,
            currentLocation: a
          } = e;
          const s = i;
          const c = e.getToken();
          const l = tt(e, t);
          let u;
          if (J(e, t, 77932)) {
            if (~e.getToken() & 134217728 && e.getToken() !== 18) {
              ee(e, t, 16, e.getToken(), 0);
            } else {
              e.report(106);
            }
            o = e.tokenValue;
            i = e.tokenStart;
            a = e.currentLocation;
            u = ct(e, t);
          } else if (l.type === "Identifier") {
            ee(e, t, 16, c, 0);
            u = e.cloneIdentifier(l);
          } else {
            e.report(25, x[108]);
          }
          if (n != null) {
            n.addBlockName(t, o, 8, i, a);
          }
          r.push(e.finishNode({
            type: "ImportSpecifier",
            local: u,
            imported: l
          }, s));
          if (e.getToken() !== 1074790415) {
            Q(e, t, 18);
          }
        }
        Q(e, t, 1074790415);
        return r;
      }
      function Be(e, t, n) {
        let r = $e(e, t, e.finishNode({
          type: "Identifier",
          name: "import"
        }, n), n);
        r = Ye(e, t, undefined, r, 0, 0, n);
        r = je(e, t, undefined, 0, 0, n, r);
        if (e.getToken() === 18) {
          r = Ve(e, t, undefined, 0, n, r);
        }
        return Te(e, t, r, n);
      }
      function Ue(e, t, n, r) {
        let o = Je(e, t, n, 0, r);
        o = Ye(e, t, n, o, 0, 0, r);
        if (e.getToken() === 18) {
          o = Ve(e, t, n, 0, r, o);
        }
        return Te(e, t, o, r);
      }
      function Me(e, t, n, r, o, i, a = 0) {
        let s = Xe(e, t, n, 2, 0, r, o, 1, i, a, t & 131072 ? 0 : 1);
        s = Ye(e, t, n, s, o, 0, i);
        return je(e, t, n, o, 0, i, s);
      }
      function Ve(e, t, n, r, o, i) {
        const a = [i];
        while (J(e, t | 32, 18)) {
          a.push(Me(e, t, n, 1, r, e.tokenStart));
        }
        return e.finishNode({
          type: "SequenceExpression",
          expressions: a
        }, o);
      }
      function He(e, t, n, r, o, i) {
        const a = Me(e, t, n, o, r, i);
        if (e.getToken() === 18) {
          return Ve(e, t, n, r, i, a);
        } else {
          return a;
        }
      }
      function je(e, t, n, r, o, i, a) {
        const s = e.getToken();
        if (!(~s & 4194304)) {
          if (e.assignable & 2) {
            e.report(26);
          }
          if (!(~s & 524288) && e.assignable & 4) {
            e.report(26);
          }
          if (!o && s === 1077936155 && a.type === "ArrayExpression" || a.type === "ObjectExpression") {
            Z(e, a);
          }
          q(e, t | 32);
          const c = Me(e, t, n, 1, r, e.tokenStart);
          e.assignable = 2;
          return e.finishNode(o ? {
            type: "AssignmentPattern",
            left: a,
            right: c
          } : {
            type: "AssignmentExpression",
            left: a,
            operator: x[s & 255],
            right: c
          }, i);
        }
        if (!(~s & 8388608)) {
          a = Ge(e, t, n, r, i, 4, s, a);
        }
        if (J(e, t | 32, 22)) {
          a = ze(e, t, n, a, i);
        }
        return a;
      }
      function Fe(e, t, n, r, o, i, a) {
        const s = e.getToken();
        q(e, t | 32);
        const c = Me(e, t, n, 1, r, e.tokenStart);
        a = e.finishNode(o ? {
          type: "AssignmentPattern",
          left: a,
          right: c
        } : {
          type: "AssignmentExpression",
          left: a,
          operator: x[s & 255],
          right: c
        }, i);
        e.assignable = 2;
        return a;
      }
      function ze(e, t, n, r, o) {
        const i = Me(e, (t | 131072) ^ 131072, n, 1, 0, e.tokenStart);
        Q(e, t | 32, 21);
        e.assignable = 1;
        const a = Me(e, t, n, 1, 0, e.tokenStart);
        e.assignable = 2;
        return e.finishNode({
          type: "ConditionalExpression",
          test: r,
          consequent: i,
          alternate: a
        }, o);
      }
      function Ge(e, t, n, r, o, i, a, s) {
        const c = -((t & 131072) > 0) & 8673330;
        let l;
        let u;
        for (e.assignable = 2; e.getToken() & 8388608 && (l = e.getToken(), u = l & 3840, (l & 524288 && a & 268435456 || a & 524288 && l & 268435456) && e.report(167), !(u + ((l === 8391735) << 8) - ((c === l) << 12) <= i));) {
          q(e, t | 32);
          s = e.finishNode({
            type: l & 524288 || l & 268435456 ? "LogicalExpression" : "BinaryExpression",
            left: s,
            right: Ge(e, t, n, r, e.tokenStart, u, l, qe(e, t, n, 0, r, 1, !(t & 131072) && u < 2048 ? 1 : 0)),
            operator: x[l & 255]
          }, o);
        }
        if (e.getToken() === 1077936155) {
          e.report(26);
        }
        return s;
      }
      function We(e, t, n, r, o, i, a = 0) {
        const {
          tokenStart: s
        } = e;
        e.flags &= -4161;
        Q(e, t | 32, 2162700);
        const c = [];
        if (e.getToken() !== 1074790415) {
          while (e.getToken() === 134283267) {
            const {
              index: n,
              tokenStart: r,
              tokenIndex: o,
              tokenValue: a
            } = e;
            const s = e.getToken();
            const l = lt(e, t);
            if (X(e, n, o, a)) {
              t |= 1;
              if (e.flags & 128) {
                throw new S(r, e.currentLocation, 66);
              }
              if (e.flags & 64) {
                throw new S(r, e.currentLocation, 9);
              }
              if (e.flags & 4096) {
                throw new S(r, e.currentLocation, 15);
              }
              if (i != null) {
                i.reportScopeError();
              }
            }
            c.push(we(e, t, l, s, r));
          }
          if (t & 1 && (o && (~o & 537079808 || e.report(121), ~o & 36864 || e.report(40)), e.flags & 512 && e.report(121), e.flags & 256)) {
            if (e.strictReservedRange) {
              throw new S(e.strictReservedRange[0], e.strictReservedRange[1], 120);
            }
            e.report(120);
          }
        }
        e.flags = (e.flags | 4928) ^ 4928;
        e.destructible = (e.destructible | 256) ^ 256;
        while (e.getToken() !== 1074790415) {
          c.push(ye(e, t, n, r, {}, 4));
        }
        Q(e, a & 24 ? t | 32 : t, 1074790415);
        e.flags &= -4289;
        if (e.getToken() === 1077936155) {
          e.report(26);
        }
        return e.finishNode({
          type: "BlockStatement",
          body: c
        }, s);
      }
      function qe(e, t, n, r, o, i, a = 0) {
        const s = e.tokenStart;
        return Ye(e, t, n, Xe(e, t, n, 2, 0, r, o, i, s, 0, a), o, 0, s);
      }
      function Ye(e, t, n, r, o, i, a) {
        if (~e.getToken() & 33619968 || e.flags & 1) {
          if (!(~e.getToken() & 67108864)) {
            t = (t | 131072) ^ 131072;
            switch (e.getToken()) {
              case 67108877:
                {
                  q(e, (t | 262152) ^ 8);
                  if (t & 16 && e.getToken() === 131 && e.tokenValue === "super") {
                    e.report(175);
                  }
                  e.assignable = ~e.flags & 2048 ? 1 : 2;
                  const o = Ke(e, t | 64, n, 1);
                  r = e.finishNode({
                    type: "MemberExpression",
                    object: r,
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
                    return r;
                  }
                  let i = false;
                  if (!(~e.flags & 2048)) {
                    i = true;
                    e.flags = (e.flags | 2048) ^ 2048;
                  }
                  q(e, t | 32);
                  const {
                    tokenStart: s
                  } = e;
                  const c = He(e, t, n, o, 1, s);
                  Q(e, t, 20);
                  e.assignable = i ? 2 : 1;
                  r = e.finishNode({
                    type: "MemberExpression",
                    object: r,
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
                    return r;
                  }
                  let i = false;
                  if (!(~e.flags & 2048)) {
                    i = true;
                    e.flags = (e.flags | 2048) ^ 2048;
                  }
                  const s = st(e, t, n, o);
                  if (t & 1 || !e.options.webcompat) {
                    e.assignable = 2;
                  } else {
                    e.assignable = 4;
                  }
                  r = e.finishNode({
                    type: "CallExpression",
                    callee: r,
                    arguments: s,
                    optional: false
                  }, a);
                  if (i) {
                    e.flags |= 2048;
                  }
                  break;
                }
              case 67108991:
                q(e, (t | 262152) ^ 8);
                e.flags |= 2048;
                e.assignable = 2;
                r = function (e, t, n, r, o) {
                  let i;
                  let a = false;
                  if ((e.getToken() === 69271571 || e.getToken() === 67174411) && !(~e.flags & 2048)) {
                    a = true;
                    e.flags = (e.flags | 2048) ^ 2048;
                  }
                  if (e.getToken() === 69271571) {
                    q(e, t | 32);
                    const {
                      tokenStart: a
                    } = e;
                    const s = He(e, t, n, 0, 1, a);
                    Q(e, t, 20);
                    e.assignable = 2;
                    i = e.finishNode({
                      type: "MemberExpression",
                      object: r,
                      computed: true,
                      optional: true,
                      property: s
                    }, o);
                  } else if (e.getToken() === 67174411) {
                    const a = st(e, t, n, 0);
                    if (t & 1 || !e.options.webcompat) {
                      e.assignable = 2;
                    } else {
                      e.assignable = 4;
                    }
                    i = e.finishNode({
                      type: "CallExpression",
                      callee: r,
                      arguments: a,
                      optional: true
                    }, o);
                  } else {
                    const a = Ke(e, t, n, 1);
                    e.assignable = 2;
                    i = e.finishNode({
                      type: "MemberExpression",
                      object: r,
                      computed: false,
                      optional: true,
                      property: a
                    }, o);
                  }
                  if (a) {
                    e.flags |= 2048;
                  }
                  return i;
                }(e, t, n, r, a);
                break;
              default:
                if (!(~e.flags & 2048)) {
                  e.report(168);
                }
                e.assignable = 2;
                r = e.finishNode({
                  type: "TaggedTemplateExpression",
                  tag: r,
                  quasi: e.getToken() === 67174408 ? ot(e, t | 64, n) : rt(e, t)
                }, a);
            }
            r = Ye(e, t, n, r, 0, 1, a);
          }
        } else {
          r = function (e, t, n, r) {
            if (e.assignable & 2) {
              e.report(55);
            }
            const o = e.getToken();
            q(e, t);
            e.assignable = 2;
            return e.finishNode({
              type: "UpdateExpression",
              argument: n,
              operator: x[o & 255],
              prefix: false
            }, r);
          }(e, t, r, a);
        }
        if (i === 0 && !(~e.flags & 2048)) {
          e.flags = (e.flags | 2048) ^ 2048;
          r = e.finishNode({
            type: "ChainExpression",
            expression: r
          }, a);
        }
        return r;
      }
      function Ke(e, t, n, r = 0) {
        if (!(e.getToken() & 143360) && e.getToken() !== -2147483527 && e.getToken() !== -2147483526 && (e.getToken() !== 131 || !r)) {
          e.report(162);
        }
        if (e.getToken() === 131) {
          return It(e, t, n, 0);
        } else {
          return ct(e, t);
        }
      }
      function Xe(e, t, n, r, o, a, s, c, l, u = 0, d = 0) {
        if (!(~e.getToken() & 143360)) {
          switch (e.getToken()) {
            case 209006:
              return function (e, t, n, r, o, i, a) {
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
                const s = yt(e, t, n);
                if (s.type === "ArrowFunctionExpression" || !(e.getToken() & 65536)) {
                  if (t & 2048) {
                    throw new S(i, e.startPosition, 178);
                  }
                  if (t & 2) {
                    throw new S(i, e.startPosition, 112);
                  }
                  if (t & 8192 && t & 2048) {
                    throw new S(i, e.startPosition, 112);
                  }
                  return s;
                }
                if (t & 8192) {
                  throw new S(i, e.startPosition, 31);
                }
                if (t & 2048 || t & 2 && t & 8) {
                  if (r) {
                    throw new S(i, e.startPosition, 0);
                  }
                  const o = qe(e, t, n, 0, 0, 1);
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
                  throw new S(i, e.startPosition, 98);
                }
                return s;
              }(e, t, n, o, s, l);
            case 241771:
              return function (e, t, n, r, o, i) {
                if (r) {
                  e.destructible |= 256;
                }
                if (t & 1024) {
                  q(e, t | 32);
                  if (t & 8192) {
                    e.report(32);
                  }
                  if (!o) {
                    e.report(26);
                  }
                  if (e.getToken() === 22) {
                    e.report(126);
                  }
                  let r = null;
                  let a = false;
                  if (e.flags & 1) {
                    if (e.getToken() === 8391476) {
                      e.report(30, x[e.getToken() & 255]);
                    }
                  } else {
                    a = J(e, t | 32, 8391476);
                    if (e.getToken() & 77824 || a) {
                      r = Me(e, t, n, 1, 0, e.tokenStart);
                    }
                  }
                  e.assignable = 2;
                  return e.finishNode({
                    type: "YieldExpression",
                    argument: r,
                    delegate: a
                  }, i);
                }
                if (t & 1) {
                  e.report(97, "yield");
                }
                return yt(e, t, n);
              }(e, t, n, s, a, l);
            case 209005:
              return function (e, t, n, r, o, i, a, s) {
                const c = e.getToken();
                const l = ct(e, t);
                const {
                  flags: u
                } = e;
                if (!(u & 1)) {
                  if (e.getToken() === 86104) {
                    return dt(e, t, n, 1, r, s);
                  }
                  if (ie(t, e.getToken())) {
                    if (!o) {
                      e.report(0);
                    }
                    if (!(~e.getToken() & 36864)) {
                      e.flags |= 256;
                    }
                    return St(e, t, n, i, s);
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
                    return kt(e, t, n, e.tokenValue, l, a, i, 0, s);
                  } else {
                    e.assignable = 1;
                    return l;
                  }
                } else {
                  return xt(e, t, n, l, i, 1, u, s);
                }
              }(e, t, n, s, c, a, o, l);
          }
          const {
            tokenValue: i
          } = e;
          const d = e.getToken();
          const f = ct(e, t | 64);
          if (e.getToken() === 10) {
            if (!c) {
              e.report(0);
            }
            ae(e, t, d);
            if (!(~d & 36864)) {
              e.flags |= 256;
            }
            return kt(e, t, n, i, f, o, a, 0, l, u);
          } else {
            if (!!(t & 16) && !(t & 32768) && !(t & 8192) && e.tokenValue === "arguments") {
              e.report(132);
            }
            if ((d & 255) == 73) {
              if (t & 1) {
                e.report(115);
              }
              if (r & 24) {
                e.report(100);
              }
            }
            e.assignable = t & 1 && !(~d & 537079808) ? 2 : 1;
            return f;
          }
        }
        if (!(~e.getToken() & 134217728)) {
          return lt(e, t);
        }
        switch (e.getToken()) {
          case 33619993:
          case 33619994:
            return function (e, t, n, r, o, i) {
              if (r) {
                e.report(56);
              }
              if (!o) {
                e.report(0);
              }
              const a = e.getToken();
              q(e, t | 32);
              const s = qe(e, t, n, 0, 0, 1);
              if (e.assignable & 2) {
                e.report(55);
              }
              e.assignable = 2;
              return e.finishNode({
                type: "UpdateExpression",
                argument: s,
                operator: x[a & 255],
                prefix: true
              }, i);
            }(e, t, n, o, c, l);
          case 16863276:
          case 16842798:
          case 16842799:
          case 25233968:
          case 25233969:
          case 16863275:
          case 16863277:
            return function (e, t, n, r, o) {
              if (!r) {
                e.report(0);
              }
              const {
                tokenStart: i
              } = e;
              const a = e.getToken();
              q(e, t | 32);
              const s = qe(e, t, n, 0, o, 1);
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
                operator: x[a & 255],
                argument: s,
                prefix: true
              }, i);
            }(e, t, n, c, s);
          case 86104:
            return dt(e, t, n, 0, s, l);
          case 2162700:
            return function (e, t, n, r, o) {
              const i = mt(e, t, undefined, n, r, o, 0, 2);
              if (e.destructible & 64) {
                e.report(63);
              }
              if (e.destructible & 8) {
                e.report(62);
              }
              return i;
            }(e, t, n, a ? 0 : 1, s);
          case 69271571:
            return function (e, t, n, r, o) {
              const i = ft(e, t, undefined, n, r, o, 0, 2);
              if (e.destructible & 64) {
                e.report(63);
              }
              if (e.destructible & 8) {
                e.report(62);
              }
              return i;
            }(e, t, n, a ? 0 : 1, s);
          case 67174411:
            return function (e, t, n, r, o, i, a, s) {
              e.flags = (e.flags | 128) ^ 128;
              const c = e.tokenStart;
              q(e, t | 262176);
              const l = (s = e.createScopeIfLexical()) === null || s === undefined ? undefined : s.createChildScope(512);
              if (J(e, t = (t | 131072) ^ 131072, 16)) {
                return bt(e, t, l, n, [], r, 0, i, a);
              }
              let u = 0;
              const d = e.destructible & 384;
              e.destructible &= -385;
              const f = e.firstAwaitLocation;
              let p;
              e.firstAwaitLocation = null;
              let h = [];
              let g = 0;
              let m = 0;
              let v = 0;
              const y = e.tokenStart;
              for (e.assignable = 1; e.getToken() !== 16;) {
                const {
                  tokenStart: r,
                  currentLocation: o
                } = e;
                const i = e.getToken();
                if (i & 143360) {
                  if (l != null) {
                    l.addBlockName(t, e.tokenValue, 1, r, o);
                  }
                  if (~i & 537079808) {
                    if (!(~i & 36864)) {
                      v = 1;
                    }
                  } else {
                    m = 1;
                  }
                  p = Xe(e, t, n, 1, 0, 1, 1, 1, r, 0);
                  if (e.getToken() === 16 || e.getToken() === 18) {
                    if (e.assignable & 2) {
                      u |= 16;
                      m = 1;
                    }
                  } else {
                    if (e.getToken() === 1077936155) {
                      m = 1;
                    } else {
                      u |= 16;
                    }
                    p = Ye(e, t, n, p, 1, 0, r);
                    if (e.getToken() !== 16 && e.getToken() !== 18) {
                      p = je(e, t, n, 1, 0, r, p);
                    }
                  }
                } else {
                  if (~i & 2097152) {
                    if (i === 14) {
                      p = ht(e, t, l, n, 16, 1, 0, 1, 0);
                      if (e.destructible & 16) {
                        e.report(74);
                      }
                      m = 1;
                      if (!!g && (e.getToken() === 16 || e.getToken() === 18)) {
                        h.push(p);
                      }
                      u |= 8;
                      break;
                    }
                    u |= 16;
                    p = Me(e, t, n, 1, 1, r);
                    if (!!g && (e.getToken() === 16 || e.getToken() === 18)) {
                      h.push(p);
                    }
                    if (e.getToken() === 18) {
                      if (!g) {
                        g = 1;
                        h = [p];
                      }
                    }
                    if (g) {
                      while (J(e, t | 32, 18)) {
                        h.push(Me(e, t, n, 1, 1, e.tokenStart));
                      }
                      e.assignable = 2;
                      p = e.finishNode({
                        type: "SequenceExpression",
                        expressions: h
                      }, y);
                    }
                    Q(e, t, 16);
                    e.destructible = u | d;
                    if (f) {
                      e.firstAwaitLocation = f;
                    }
                    if (e.options.preserveParens) {
                      return e.finishNode({
                        type: "ParenthesizedExpression",
                        expression: p
                      }, c);
                    } else {
                      return p;
                    }
                  }
                  p = i === 2162700 ? mt(e, t | 262144, l, n, 0, 1, 0, 1) : ft(e, t | 262144, l, n, 0, 1, 0, 1);
                  u |= e.destructible;
                  m = 1;
                  e.assignable = 2;
                  if (e.getToken() !== 16 && e.getToken() !== 18) {
                    if (u & 8) {
                      e.report(124);
                    }
                    p = Ye(e, t, n, p, 0, 0, r);
                    u |= 16;
                    if (e.getToken() !== 16 && e.getToken() !== 18) {
                      p = je(e, t, n, 0, 0, r, p);
                    }
                  }
                }
                if (!!g && (e.getToken() === 16 || e.getToken() === 18)) {
                  h.push(p);
                }
                if (!J(e, t | 32, 18)) {
                  break;
                }
                if (!g) {
                  g = 1;
                  h = [p];
                }
                if (e.getToken() === 16) {
                  u |= 8;
                  break;
                }
              }
              if (g) {
                e.assignable = 2;
                p = e.finishNode({
                  type: "SequenceExpression",
                  expressions: h
                }, y);
              }
              Q(e, t, 16);
              if (u & 16 && u & 8) {
                e.report(153);
              }
              u |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
              if (e.getToken() === 10) {
                if (u & 48) {
                  e.report(49);
                }
                if (t & 2050 && u & 128) {
                  const t = e.firstAwaitLocation;
                  if (t) {
                    throw new S(t.start, t.end, 31);
                  }
                  e.report(31);
                }
                if (t & 1025 && u & 256) {
                  e.report(32);
                }
                if (m) {
                  e.flags |= 128;
                }
                if (v) {
                  e.flags |= 256;
                }
                e.destructible |= d;
                if (f) {
                  e.firstAwaitLocation = f;
                }
                return bt(e, t, l, n, g ? h : [p], r, 0, i, a);
              }
              if (u & 64) {
                e.report(63);
              }
              if (u & 8) {
                e.report(146);
              }
              e.destructible = (e.destructible | 256) ^ 256 | u | d;
              if (f) {
                e.firstAwaitLocation = f;
              }
              if (e.options.preserveParens) {
                return e.finishNode({
                  type: "ParenthesizedExpression",
                  expression: p
                }, c);
              } else {
                return p;
              }
            }(e, t | 64, n, a, 0, l, u);
          case 86021:
          case 86022:
          case 86023:
            return function (e, t) {
              const n = e.tokenStart;
              const r = x[e.getToken() & 255];
              const o = {
                type: "Literal",
                value: e.getToken() === 86023 ? null : r === "true"
              };
              if (e.options.raw) {
                o.raw = r;
              }
              q(e, t);
              e.assignable = 2;
              return e.finishNode(o, n);
            }(e, t);
          case 86111:
            return function (e, t) {
              const {
                tokenStart: n
              } = e;
              q(e, t);
              e.assignable = 2;
              return e.finishNode({
                type: "ThisExpression"
              }, n);
            }(e, t);
          case 65540:
            return function (e, t) {
              const {
                tokenRaw: n,
                tokenRegExp: r,
                tokenValue: o,
                tokenStart: i
              } = e;
              q(e, t);
              e.assignable = 2;
              const a = {
                type: "Literal",
                value: o,
                regex: r
              };
              if (e.options.raw) {
                a.raw = n;
              }
              return e.finishNode(a, i);
            }(e, t);
          case 133:
            if (!(e.features & 1)) {
              e.report(30, "@");
            }
          case 86094:
            return function (e, t, n, r, o) {
              let a = null;
              let s = null;
              const c = Et(e, t, n);
              Q(e, t = (t | 16385) ^ 16384, 86094);
              if (e.getToken() & 4096 && e.getToken() !== 20565) {
                if (ne(e, t, e.getToken())) {
                  e.report(120);
                }
                if (!(~e.getToken() & 537079808)) {
                  e.report(121);
                }
                a = ct(e, t);
              }
              let l = t;
              if (J(e, t | 32, 20565)) {
                s = qe(e, t, n, 0, r, 0);
                l |= 512;
              } else {
                l = (l | 512) ^ 512;
              }
              const u = Ct(e, l, t, undefined, n, 2, r);
              e.assignable = 2;
              return e.finishNode(i({
                type: "ClassExpression",
                id: a,
                superClass: s,
                body: u
              }, e.features & 1 ? {
                decorators: c
              } : null), o);
            }(e, t, n, s, l);
          case 86109:
            return function (e, t) {
              const {
                tokenStart: n
              } = e;
              q(e, t);
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
              }, n);
            }(e, t);
          case 67174409:
            return rt(e, t);
          case 67174408:
            return ot(e, t, n);
          case 86107:
            return function (e, t, n, r) {
              const {
                tokenStart: o
              } = e;
              const i = ct(e, t | 32);
              const {
                tokenStart: a
              } = e;
              if (J(e, t, 67108877)) {
                if (t & 65536 && e.getToken() === 209030) {
                  e.assignable = 2;
                  return function (e, t, n, r) {
                    const o = ct(e, t);
                    return e.finishNode({
                      type: "MetaProperty",
                      meta: n,
                      property: o
                    }, r);
                  }(e, t, i, o);
                }
                e.report(94);
              }
              e.assignable = 2;
              if (!(~e.getToken() & 16842752)) {
                e.report(65, x[e.getToken() & 255]);
              }
              const s = Xe(e, t, n, 2, 1, 0, r, 1, a);
              t = (t | 131072) ^ 131072;
              if (e.getToken() === 67108991) {
                e.report(170);
              }
              const c = function e(t, n, r, o, i, a) {
                const s = t.getToken();
                if (s & 67108864) {
                  if (s === 67108877) {
                    q(t, n | 262144);
                    t.assignable = 1;
                    const i = Ke(t, n, r, 1);
                    return e(t, n, r, t.finishNode({
                      type: "MemberExpression",
                      object: o,
                      computed: false,
                      property: i,
                      optional: false
                    }, a), 0, a);
                  }
                  if (s === 69271571) {
                    q(t, n | 32);
                    const {
                      tokenStart: s
                    } = t;
                    const c = He(t, n, r, i, 1, s);
                    Q(t, n, 20);
                    t.assignable = 1;
                    return e(t, n, r, t.finishNode({
                      type: "MemberExpression",
                      object: o,
                      computed: true,
                      property: c,
                      optional: false
                    }, a), 0, a);
                  }
                  if (s === 67174408 || s === 67174409) {
                    t.assignable = 2;
                    return e(t, n, r, t.finishNode({
                      type: "TaggedTemplateExpression",
                      tag: o,
                      quasi: t.getToken() === 67174408 ? ot(t, n | 64, r) : rt(t, n | 64)
                    }, a), 0, a);
                  }
                }
                return o;
              }(e, t, n, s, r, a);
              e.assignable = 2;
              return e.finishNode({
                type: "NewExpression",
                callee: c,
                arguments: e.getToken() === 67174411 ? st(e, t, n, r) : []
              }, o);
            }(e, t, n, s);
          case 134283389:
            return nt(e, t);
          case 131:
            {
              if (!d) {
                e.report(30, "PrivateField");
              }
              const {
                tokenStart: r
              } = e;
              const o = It(e, t, n, 0);
              if (e.getToken() !== 8673330) {
                throw new S(r, e.startPosition, 151);
              }
              return o;
            }
          case 86106:
            return function (e, t, n, r, o, i) {
              let a = ct(e, t);
              if (e.getToken() === 67108877) {
                return $e(e, t, a, i, n, o, r);
              } else {
                if (r) {
                  e.report(144);
                }
                a = Je(e, t, n, o, i);
                e.assignable = 2;
                return Ye(e, t, n, a, o, 0, i);
              }
            }(e, t, n, o, s, l);
          case 8456256:
            if (e.options.jsx) {
              return Lt(e, t, n, 0, e.tokenStart);
            }
          default:
            if (ie(t, e.getToken())) {
              return yt(e, t, n);
            }
            e.report(30, x[e.getToken() & 255]);
        }
      }
      function $e(e, t, n, r, o, i = 0, a = 0) {
        const s = e.tokenStart;
        const c = e.currentLocation;
        q(e, t);
        const l = e.getToken();
        const u = e.features & 2 && !(l & -2147483648) && e.tokenValue === "defer";
        const d = e.features & 4 && !(l & -2147483648) && e.tokenValue === "source";
        if (u || d) {
          if (a) {
            e.report(144);
          }
          q(e, t);
          const n = Je(e, t, o, i, r, e.tokenValue);
          e.assignable = 2;
          return n;
        }
        if (!(t & 2)) {
          throw new S(s, c, 171);
        }
        if (l !== 209031 && e.tokenValue !== "meta") {
          e.report(176);
        } else if (l & -2147483648) {
          e.report(177);
        }
        e.assignable = 2;
        return e.finishNode({
          type: "MetaProperty",
          meta: n,
          property: ct(e, t)
        }, r);
      }
      function Je(e, t, n, r, o, a = null) {
        Q(e, t | 32, 67174411);
        if (e.getToken() === 14) {
          e.report(145);
        }
        const s = Me(e, t, n, 1, r, e.tokenStart);
        let c = null;
        if (e.getToken() === 18) {
          Q(e, t, 18);
          if (e.getToken() !== 16) {
            c = Me(e, (t | 131072) ^ 131072, n, 1, r, e.tokenStart);
          }
          J(e, t, 18);
        }
        const l = i({
          type: "ImportExpression",
          source: s,
          options: c
        }, e.features & 2 || e.features & 4 ? {
          phase: a
        } : null);
        Q(e, t, 16);
        return e.finishNode(l, o);
      }
      function Qe(e, t) {
        if (!J(e, t, 20579)) {
          return [];
        }
        Q(e, t, 2162700);
        const n = [];
        const r = new Set();
        while (e.getToken() !== 1074790415) {
          const o = e.tokenStart;
          const i = et(e, t);
          Q(e, t, 21);
          const a = Ze(e, t);
          const s = i.type === "Literal" ? i.value : i.name;
          if (r.has(s)) {
            e.report(147, s);
          }
          r.add(s);
          n.push(e.finishNode({
            type: "ImportAttribute",
            key: i,
            value: a
          }, o));
          if (e.getToken() !== 1074790415) {
            Q(e, t, 18);
          }
        }
        Q(e, t, 1074790415);
        return n;
      }
      function Ze(e, t) {
        if (e.getToken() === 134283267) {
          return lt(e, t);
        }
        e.report(30, x[e.getToken() & 255]);
      }
      function et(e, t) {
        if (e.getToken() === 134283267) {
          return lt(e, t);
        } else if (e.getToken() & 143360) {
          return ct(e, t);
        } else {
          e.report(30, x[e.getToken() & 255]);
          return;
        }
      }
      function tt(e, t) {
        if (e.getToken() === 134283267) {
          if (!e.tokenValue.isWellFormed()) {
            e.report(173);
          }
          return lt(e, t);
        } else if (e.getToken() & 143360) {
          return ct(e, t);
        } else {
          e.report(30, x[e.getToken() & 255]);
          return;
        }
      }
      function nt(e, t) {
        const {
          tokenRaw: n,
          tokenValue: r,
          tokenStart: o
        } = e;
        q(e, t);
        e.assignable = 2;
        const i = {
          type: "Literal",
          value: r,
          bigint: String(r)
        };
        if (e.options.raw) {
          i.raw = n;
        }
        return e.finishNode(i, o);
      }
      function rt(e, t) {
        e.assignable = 2;
        const {
          tokenValue: n,
          tokenRaw: r,
          tokenStart: o
        } = e;
        Q(e, t, 67174409);
        const i = [it(e, n, r, o, true)];
        return e.finishNode({
          type: "TemplateLiteral",
          expressions: [],
          quasis: i
        }, o);
      }
      function ot(e, t, n) {
        t = (t | 131072) ^ 131072;
        const {
          tokenValue: r,
          tokenRaw: o,
          tokenStart: i
        } = e;
        Q(e, t & -65 | 32, 67174408);
        const a = [it(e, r, o, i, false)];
        const s = [He(e, t & -65, n, 0, 1, e.tokenStart)];
        for (e.getToken() !== 1074790415 && e.report(83); e.setToken(G(e, t), true) !== 67174409;) {
          const {
            tokenValue: r,
            tokenRaw: o,
            tokenStart: i
          } = e;
          Q(e, t & -65 | 32, 67174408);
          a.push(it(e, r, o, i, false));
          s.push(He(e, t, n, 0, 1, e.tokenStart));
          if (e.getToken() !== 1074790415) {
            e.report(83);
          }
        }
        {
          const {
            tokenValue: n,
            tokenRaw: r,
            tokenStart: o
          } = e;
          Q(e, t, 67174409);
          a.push(it(e, n, r, o, true));
        }
        e.assignable = 2;
        return e.finishNode({
          type: "TemplateLiteral",
          expressions: s,
          quasis: a
        }, i);
      }
      function it(e, t, n, r, o) {
        const i = e.finishNode({
          type: "TemplateElement",
          value: {
            cooked: t,
            raw: n
          },
          tail: o
        }, r);
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
      function at(e, t, n) {
        const r = e.tokenStart;
        Q(e, (t = (t | 131072) ^ 131072) | 32, 14);
        const o = Me(e, t, n, 1, 0, e.tokenStart);
        e.assignable = 1;
        return e.finishNode({
          type: "SpreadElement",
          argument: o
        }, r);
      }
      function st(e, t, n, r) {
        q(e, t | 32);
        const o = [];
        if (e.getToken() === 16) {
          q(e, t | 64);
          return o;
        }
        while (e.getToken() !== 16 && (e.getToken() === 14 ? o.push(at(e, t, n)) : o.push(Me(e, t, n, 1, r, e.tokenStart)), e.getToken() === 18) && (q(e, t | 32), e.getToken() !== 16));
        Q(e, t | 64, 16);
        return o;
      }
      function ct(e, t) {
        const {
          tokenValue: n,
          tokenStart: r
        } = e;
        const o = n === "await" && !(e.getToken() & -2147483648);
        q(e, t | (o ? 32 : 0));
        return e.finishNode({
          type: "Identifier",
          name: n
        }, r);
      }
      function lt(e, t) {
        const {
          tokenValue: n,
          tokenRaw: r,
          tokenStart: o
        } = e;
        if (e.getToken() === 134283389) {
          return nt(e, t);
        }
        const i = {
          type: "Literal",
          value: n
        };
        if (e.options.raw) {
          i.raw = r;
        }
        q(e, t);
        e.assignable = 2;
        return e.finishNode(i, o);
      }
      function ut(e, t, n, r, o, i, a, s, c = 0) {
        var l;
        var u;
        q(e, t | 32);
        const d = o ? $(e, t, 8391476) : 0;
        let f;
        let p = null;
        let h = n ? e.createScope() : undefined;
        if (e.getToken() === 67174411) {
          if (!(i & 1)) {
            e.report(39, "Function");
          }
        } else {
          var g;
          const r = !(c & 4) || t & 8 && t & 2 ? (a ? 1024 : 0) | 64 | (d ? 1024 : 0) : 4;
          te(e, t, e.getToken());
          if (n) {
            n.addVarOrBlock(t, e.tokenValue, r, e.tokenStart, e.currentLocation, c);
            h = (g = h) === null || g === undefined ? undefined : g.createChildScope(128);
            if (i && i & 2) {
              e.declareUnboundVariable(e.tokenValue);
            }
          }
          f = e.getToken();
          if (e.getToken() & 143360) {
            p = ct(e, t);
          } else {
            e.report(30, x[e.getToken() & 255]);
          }
        }
        {
          const e = 28416;
          t = (t | e) ^ e | 65536 | (a ? 2048 : 0) | (d ? 1024 : 0) | (d ? 0 : 262144);
        }
        h = (l = h) === null || l === undefined ? undefined : l.createChildScope(256);
        const m = Tt(e, t & -524289 | 8192, h, r, 0, 1);
        const v = 524428;
        const y = We(e, (t | v) ^ v | 36864, (u = h) === null || u === undefined ? undefined : u.createChildScope(64), r, f, h, 8);
        return e.finishNode({
          type: "FunctionDeclaration",
          id: p,
          params: m,
          body: y,
          async: a === 1,
          generator: d === 1
        }, s);
      }
      function dt(e, t, n, r, o, i) {
        var a;
        var s;
        var c;
        q(e, t | 32);
        const l = $(e, t, 8391476);
        const u = (r ? 2048 : 0) | (l ? 1024 : 0);
        let d;
        let f = null;
        let p = e.createScopeIfLexical();
        const h = 552704;
        if (e.getToken() & 143360) {
          te(e, (t | h) ^ h | u, e.getToken());
          p = (a = p) === null || a === undefined ? undefined : a.createChildScope(128);
          d = e.getToken();
          f = ct(e, t);
        }
        t = (t | h) ^ h | 65536 | u | (l ? 0 : 262144);
        p = (s = p) === null || s === undefined ? undefined : s.createChildScope(256);
        const g = Tt(e, t & -524289 | 8192, p, n, o, 1);
        const m = We(e, t & -131229 | 36864, (c = p) === null || c === undefined ? undefined : c.createChildScope(64), n, d, p);
        e.assignable = 2;
        return e.finishNode({
          type: "FunctionExpression",
          id: f,
          params: g,
          body: m,
          async: r === 1,
          generator: l === 1
        }, i);
      }
      function ft(e, t, n, r, o, i, a, s, c = 0) {
        const {
          tokenStart: l
        } = e;
        q(e, t | 32);
        const u = [];
        let d = 0;
        for (t = (t | 131072) ^ 131072; e.getToken() !== 20;) {
          if (J(e, t | 32, 18)) {
            u.push(null);
          } else {
            let o;
            const {
              tokenStart: l,
              tokenValue: f,
              currentLocation: p
            } = e;
            const h = e.getToken();
            if (h & 143360) {
              o = Xe(e, t, r, s, 0, 1, i, 1, l);
              if (e.getToken() === 1077936155) {
                if (e.assignable & 2) {
                  e.report(26);
                }
                q(e, t | 32);
                if (n != null) {
                  n.addVarOrBlock(t, f, s, l, p, c);
                }
                const u = Me(e, t, r, 1, i, e.tokenStart);
                o = e.finishNode(a ? {
                  type: "AssignmentPattern",
                  left: o,
                  right: u
                } : {
                  type: "AssignmentExpression",
                  operator: "=",
                  left: o,
                  right: u
                }, l);
                d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
              } else if (e.getToken() === 18 || e.getToken() === 20) {
                if (e.assignable & 2) {
                  d |= 16;
                } else if (n != null) {
                  n.addVarOrBlock(t, f, s, l, p, c);
                }
                d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
              } else {
                d |= s & 1 ? 32 : s & 2 ? 0 : 16;
                o = Ye(e, t, r, o, i, 0, l);
                if (e.getToken() !== 18 && e.getToken() !== 20) {
                  if (e.getToken() !== 1077936155) {
                    d |= 16;
                  }
                  o = je(e, t, r, i, a, l, o);
                } else if (e.getToken() !== 1077936155) {
                  d |= e.assignable & 1 ? 32 : 16;
                }
              }
            } else if (h & 2097152) {
              o = e.getToken() === 2162700 ? mt(e, t, n, r, 0, i, a, s, c) : ft(e, t, n, r, 0, i, a, s, c);
              d |= e.destructible;
              e.assignable = e.destructible & 16 ? 2 : 1;
              if (e.getToken() === 18 || e.getToken() === 20) {
                if (e.assignable & 2) {
                  d |= 16;
                }
              } else if (e.destructible & 8) {
                e.report(71);
              } else {
                o = Ye(e, t, r, o, i, 0, l);
                d = e.assignable & 2 ? 16 : 0;
                if (e.getToken() !== 18 && e.getToken() !== 20) {
                  o = je(e, t, r, i, a, l, o);
                } else if (e.getToken() !== 1077936155) {
                  d |= e.assignable & 1 ? 32 : 16;
                }
              }
            } else if (h === 14) {
              o = ht(e, t, n, r, 20, s, 0, i, a, c);
              d |= e.destructible;
              if (e.getToken() !== 18 && e.getToken() !== 20) {
                e.report(30, x[e.getToken() & 255]);
              }
            } else {
              o = qe(e, t, r, 1, 0, 1);
              if (e.getToken() !== 18 && e.getToken() !== 20) {
                o = je(e, t, r, i, a, l, o);
                if (!(s & 3) && h === 67174411) {
                  d |= 16;
                }
              } else if (e.assignable & 2) {
                d |= 16;
              } else if (h === 67174411) {
                d |= e.assignable & 1 && s & 3 ? 32 : 16;
              }
            }
            u.push(o);
            if (!J(e, t | 32, 18)) {
              break;
            }
            if (e.getToken() === 20) {
              break;
            }
          }
        }
        Q(e, t, 20);
        const f = e.finishNode({
          type: a ? "ArrayPattern" : "ArrayExpression",
          elements: u
        }, l);
        if (!o && e.getToken() & 4194304) {
          return pt(e, t, r, d, i, a, l, f);
        } else {
          e.destructible = d;
          return f;
        }
      }
      function pt(e, t, n, r, o, i, a, s) {
        if (e.getToken() !== 1077936155) {
          e.report(26);
        }
        q(e, t | 32);
        if (r & 16) {
          e.report(26);
        }
        if (!i) {
          Z(e, s);
        }
        const {
          tokenStart: c
        } = e;
        const l = Me(e, t, n, 1, o, c);
        e.destructible = (r | 72) ^ 72 | (e.destructible & 128 ? 128 : 0) | (e.destructible & 256 ? 256 : 0);
        return e.finishNode(i ? {
          type: "AssignmentPattern",
          left: s,
          right: l
        } : {
          type: "AssignmentExpression",
          left: s,
          operator: "=",
          right: l
        }, a);
      }
      function ht(e, t, n, r, o, i, a, s, c, l = 0) {
        const {
          tokenStart: u
        } = e;
        q(e, t | 32);
        let d = null;
        let f = 0;
        const {
          tokenValue: p,
          tokenStart: h,
          currentLocation: g
        } = e;
        let m = e.getToken();
        if (m & 143360) {
          e.assignable = 1;
          d = Xe(e, t, r, i, 0, 1, s, 1, h);
          m = e.getToken();
          d = Ye(e, t, r, d, s, 0, h);
          if (e.getToken() !== 18 && e.getToken() !== o) {
            if (e.assignable & 2 && e.getToken() === 1077936155) {
              e.report(71);
            }
            f |= 16;
            d = je(e, t, r, s, c, h, d);
          }
          if (e.assignable & 2) {
            f |= 16;
          } else if (m === o || m === 18) {
            if (n != null) {
              n.addVarOrBlock(t, p, i, h, g, l);
            }
          } else {
            f |= 32;
          }
          f |= e.destructible & 128 ? 128 : 0;
        } else if (m === o) {
          e.report(41);
        } else {
          if (!(m & 2097152)) {
            f |= 32;
            d = qe(e, t, r, 1, s, 1);
            const {
              tokenStart: n
            } = e;
            const i = e.getToken();
            if (i === 1077936155) {
              if (e.assignable & 2) {
                e.report(26);
              }
              d = je(e, t, r, s, c, n, d);
              f |= 16;
            } else {
              if (i === 18) {
                f |= 16;
              } else if (i !== o) {
                d = je(e, t, r, s, c, n, d);
              }
              f |= e.assignable & 1 ? 32 : 16;
            }
            e.destructible = f;
            if (e.getToken() !== o && e.getToken() !== 18) {
              e.report(163);
            }
            return e.finishNode({
              type: c ? "RestElement" : "SpreadElement",
              argument: d
            }, u);
          }
          d = e.getToken() === 2162700 ? mt(e, t, n, r, 1, s, c, i, l) : ft(e, t, n, r, 1, s, c, i, l);
          m = e.getToken();
          if (m !== 1077936155 && m !== o && m !== 18) {
            if (e.destructible & 8) {
              e.report(71);
            }
            d = Ye(e, t, r, d, s, 0, h);
            f |= e.assignable & 1 ? 0 : 16;
            if (~e.getToken() & 4194304) {
              if (!(~e.getToken() & 8388608)) {
                d = Ge(e, t, r, 1, h, 4, m, d);
              }
              if (J(e, t | 32, 22)) {
                d = ze(e, t, r, d, h);
              }
              f |= e.assignable & 1 ? 32 : 16;
            } else {
              if (e.getToken() !== 1077936155) {
                f |= 16;
              }
              d = je(e, t, r, s, c, h, d);
            }
          } else {
            f |= o === 1074790415 && m !== 1077936155 ? 16 : e.destructible;
          }
        }
        if (e.getToken() !== o) {
          if (i & 1) {
            f |= a ? 16 : 32;
          }
          if (J(e, t | 32, 1077936155)) {
            if (f & 16) {
              e.report(26);
            }
            Z(e, d);
            const n = Me(e, t, r, 1, s, e.tokenStart);
            d = e.finishNode(c ? {
              type: "AssignmentPattern",
              left: d,
              right: n
            } : {
              type: "AssignmentExpression",
              left: d,
              operator: "=",
              right: n
            }, h);
            f = 16;
          } else {
            f |= 16;
          }
        }
        e.destructible = f;
        return e.finishNode({
          type: c ? "RestElement" : "SpreadElement",
          argument: d
        }, u);
      }
      function gt(e, t, n, r, o, i) {
        var a;
        const c = (r & 64 ? 0 : 16896) | 11264;
        t = (t | c) ^ c | (r & 8 ? 1024 : 0) | (r & 16 ? 2048 : 0) | (r & 64 ? 16384 : 0) | 98560;
        let l = e.createScopeIfLexical(256);
        const u = function (e, t, n, r, o, i, a) {
          Q(e, t, 67174411);
          const s = [];
          e.flags = (e.flags | 128) ^ 128;
          e.strictReservedRange = null;
          e.firstAwaitLocation = null;
          if (e.getToken() === 16) {
            if (o & 512) {
              e.report(37, "Setter", "one", "");
            }
            q(e, t);
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
          let l = 0;
          while (e.getToken() !== 18) {
            var u;
            let i = null;
            const {
              tokenStart: d
            } = e;
            if (e.getToken() & 143360) {
              if (!(t & 1)) {
                if (!(~e.getToken() & 36864)) {
                  e.flags |= 256;
                  if ((u = e.strictReservedRange) === null || u === undefined) {
                    e.strictReservedRange = [d, e.currentLocation];
                  }
                }
                if (!(~e.getToken() & 537079808)) {
                  e.flags |= 512;
                }
              }
              i = Rt(e, t, n, o | 1);
            } else {
              if (e.getToken() === 2162700) {
                i = mt(e, t, n, r, 1, a, 1, 1);
              } else if (e.getToken() === 69271571) {
                i = ft(e, t, n, r, 1, a, 1, 1);
              } else if (e.getToken() === 14) {
                i = ht(e, t, n, r, 16, 1, 0, a, 1);
              }
              l = 1;
              if (e.destructible & 48) {
                e.report(50);
              }
            }
            if (e.getToken() === 1077936155) {
              q(e, t | 32);
              l = 1;
              const n = Me(e, t, r, 1, 0, e.tokenStart);
              i = e.finishNode({
                type: "AssignmentPattern",
                left: i,
                right: n
              }, d);
            }
            c++;
            s.push(i);
            if (!J(e, t, 18)) {
              break;
            }
            if (e.getToken() === 16) {
              break;
            }
          }
          if (o & 512 && c !== 1) {
            e.report(37, "Setter", "one", "");
          }
          if (n != null) {
            n.reportScopeError();
          }
          if (l) {
            e.flags |= 128;
          }
          Q(e, t, 16);
          return s;
        }(e, t & -524289 | 8192, l, n, r, 0, o);
        l = (a = l) === null || a === undefined ? undefined : a.createChildScope(64);
        const d = We(e, t & -655373 | 36864, l, n, undefined, l?.parent);
        return e.finishNode({
          type: "FunctionExpression",
          params: u,
          body: d,
          async: (r & 16) > 0,
          generator: (r & 8) > 0,
          id: null
        }, i);
      }
      function mt(e, t, n, r, o, i, a, s, c = 0) {
        const {
          tokenStart: l
        } = e;
        q(e, t);
        const u = [];
        let d = 0;
        let f = 0;
        for (t = (t | 131072) ^ 131072; e.getToken() !== 1074790415;) {
          const {
            tokenValue: o,
            tokenStart: l,
            currentLocation: p
          } = e;
          const h = e.getToken();
          if (h === 14) {
            u.push(ht(e, t, n, r, 1074790415, s, 0, i, a, c));
          } else {
            let g;
            let m = 0;
            let v = null;
            if (e.getToken() & 143360 || e.getToken() === -2147483527 || e.getToken() === -2147483526) {
              if (e.getToken() === -2147483526) {
                d |= 16;
              }
              v = ct(e, t);
              if (e.getToken() === 18 || e.getToken() === 1074790415 || e.getToken() === 1077936155) {
                m |= 4;
                if (t & 1 && !(~h & 537079808)) {
                  d |= 16;
                } else {
                  ee(e, t, s, h, 0);
                }
                if (n != null) {
                  n.addVarOrBlock(t, o, s, l, p, c);
                }
                if (J(e, t | 32, 1077936155)) {
                  d |= 8;
                  const n = Me(e, t, r, 1, i, e.tokenStart);
                  d |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
                  g = e.finishNode({
                    type: "AssignmentPattern",
                    left: e.cloneIdentifier(v),
                    right: n
                  }, l);
                } else {
                  d |= (h === 209006 ? 128 : 0) | (h === -2147483527 ? 16 : 0);
                  g = e.cloneIdentifier(v);
                }
              } else if (J(e, t | 32, 21)) {
                const {
                  tokenStart: l,
                  currentLocation: u
                } = e;
                if (o === "__proto__") {
                  f++;
                }
                if (e.getToken() & 143360) {
                  const o = e.getToken();
                  const f = e.tokenValue;
                  g = Xe(e, t, r, s, 0, 1, i, 1, l);
                  const p = e.getToken();
                  g = Ye(e, t, r, g, i, 0, l);
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (p === 1077936155 || p === 1074790415 || p === 18) {
                      d |= e.destructible & 128 ? 128 : 0;
                      if (e.assignable & 2) {
                        d |= 16;
                      } else if (!(~o & 143360) && n != null) {
                        n.addVarOrBlock(t, f, s, l, u, c);
                      }
                    } else {
                      d |= e.assignable & 1 ? 32 : 16;
                    }
                  } else if (~e.getToken() & 4194304) {
                    d |= 16;
                    if (!(~e.getToken() & 8388608)) {
                      g = Ge(e, t, r, 1, l, 4, p, g);
                    }
                    if (J(e, t | 32, 22)) {
                      g = ze(e, t, r, g, l);
                    }
                  } else {
                    if (e.assignable & 2) {
                      d |= 16;
                    } else if (p !== 1077936155) {
                      d |= 32;
                    } else if (n != null) {
                      n.addVarOrBlock(t, f, s, l, u, c);
                    }
                    g = je(e, t, r, i, a, l, g);
                  }
                } else if (~e.getToken() & 2097152) {
                  g = qe(e, t, r, 1, i, 1);
                  d |= e.assignable & 1 ? 32 : 16;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else {
                    g = Ye(e, t, r, g, i, 0, l);
                    d = e.assignable & 2 ? 16 : 0;
                    if (e.getToken() !== 18 && h !== 1074790415) {
                      if (e.getToken() !== 1077936155) {
                        d |= 16;
                      }
                      g = je(e, t, r, i, a, l, g);
                    }
                  }
                } else {
                  g = e.getToken() === 69271571 ? ft(e, t, n, r, 0, i, a, s, c) : mt(e, t, n, r, 0, i, a, s, c);
                  d = e.destructible;
                  e.assignable = d & 16 ? 2 : 1;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else if (e.destructible & 8) {
                    e.report(71);
                  } else {
                    g = Ye(e, t, r, g, i, 0, l);
                    d = e.assignable & 2 ? 16 : 0;
                    if (~e.getToken() & 4194304) {
                      if (!(~e.getToken() & 8388608)) {
                        g = Ge(e, t, r, 1, l, 4, h, g);
                      }
                      if (J(e, t | 32, 22)) {
                        g = ze(e, t, r, g, l);
                      }
                      d |= e.assignable & 1 ? 32 : 16;
                    } else {
                      g = Fe(e, t, r, i, a, l, g);
                    }
                  }
                }
              } else if (e.getToken() === 69271571) {
                d |= 16;
                if (h === 209005) {
                  m |= 16;
                }
                m |= (h === 209008 ? 256 : h === 209009 ? 512 : 1) | 2;
                v = vt(e, t, r, i);
                d |= e.assignable;
                g = gt(e, t, r, m, i, e.tokenStart);
              } else if (e.getToken() & 143360) {
                d |= 16;
                if (h === -2147483527) {
                  e.report(95);
                }
                if (h === 209005) {
                  if (e.flags & 1) {
                    e.report(134);
                  }
                  m |= 17;
                } else if (h === 209008) {
                  m |= 256;
                } else if (h === 209009) {
                  m |= 512;
                } else {
                  e.report(0);
                }
                v = ct(e, t);
                g = gt(e, t, r, m, i, e.tokenStart);
              } else if (e.getToken() === 67174411) {
                d |= 16;
                m |= 1;
                g = gt(e, t, r, m, i, e.tokenStart);
              } else if (e.getToken() === 8391476) {
                d |= 16;
                if (h === 209008) {
                  e.report(42);
                } else if (h === 209009) {
                  e.report(43);
                } else if (h !== 209005) {
                  e.report(30, x[52]);
                }
                q(e, t);
                m |= (h === 209005 ? 16 : 0) | 9;
                if (e.getToken() & 143360) {
                  v = ct(e, t);
                } else if (~e.getToken() & 134217728) {
                  if (e.getToken() === 69271571) {
                    m |= 2;
                    v = vt(e, t, r, i);
                    d |= e.assignable;
                  } else {
                    e.report(30, x[e.getToken() & 255]);
                  }
                } else {
                  v = lt(e, t);
                }
                g = gt(e, t, r, m, i, e.tokenStart);
              } else if (~e.getToken() & 134217728) {
                e.report(135);
              } else {
                if (h === 209005) {
                  m |= 16;
                }
                m |= h === 209008 ? 256 : h === 209009 ? 512 : 1;
                d |= 16;
                v = lt(e, t);
                g = gt(e, t, r, m, i, e.tokenStart);
              }
            } else if (~e.getToken() & 134217728) {
              if (e.getToken() === 69271571) {
                v = vt(e, t, r, i);
                d |= e.destructible & 256 ? 256 : 0;
                m |= 2;
                if (e.getToken() === 21) {
                  q(e, t | 32);
                  const {
                    tokenStart: o,
                    tokenValue: l,
                    currentLocation: u
                  } = e;
                  const f = e.getToken();
                  if (e.getToken() & 143360) {
                    g = Xe(e, t, r, s, 0, 1, i, 1, o);
                    const p = e.getToken();
                    g = Ye(e, t, r, g, i, 0, o);
                    if (~e.getToken() & 4194304) {
                      if (e.getToken() === 18 || e.getToken() === 1074790415) {
                        if (p === 1077936155 || p === 1074790415 || p === 18) {
                          if (e.assignable & 2) {
                            d |= 16;
                          } else if (!(~f & 143360) && n != null) {
                            n.addVarOrBlock(t, l, s, o, u, c);
                          }
                        } else {
                          d |= e.assignable & 1 ? 32 : 16;
                        }
                      } else {
                        d |= 16;
                        g = je(e, t, r, i, a, o, g);
                      }
                    } else {
                      d |= e.assignable & 1 ? p === 1077936155 ? 0 : 32 : 16;
                      g = Fe(e, t, r, i, a, o, g);
                    }
                  } else if (~e.getToken() & 2097152) {
                    g = qe(e, t, r, 1, 0, 1);
                    d |= e.assignable & 1 ? 32 : 16;
                    if (e.getToken() === 18 || e.getToken() === 1074790415) {
                      if (e.assignable & 2) {
                        d |= 16;
                      }
                    } else {
                      g = Ye(e, t, r, g, i, 0, o);
                      d = e.assignable & 1 ? 0 : 16;
                      if (e.getToken() !== 18 && e.getToken() !== 1074790415) {
                        if (e.getToken() !== 1077936155) {
                          d |= 16;
                        }
                        g = je(e, t, r, i, a, o, g);
                      }
                    }
                  } else {
                    g = e.getToken() === 69271571 ? ft(e, t, n, r, 0, i, a, s, c) : mt(e, t, n, r, 0, i, a, s, c);
                    d = e.destructible;
                    e.assignable = d & 16 ? 2 : 1;
                    if (e.getToken() === 18 || e.getToken() === 1074790415) {
                      if (e.assignable & 2) {
                        d |= 16;
                      }
                    } else if (d & 8) {
                      e.report(62);
                    } else {
                      g = Ye(e, t, r, g, i, 0, o);
                      d = e.assignable & 2 ? d | 16 : 0;
                      if (~e.getToken() & 4194304) {
                        if (!(~e.getToken() & 8388608)) {
                          g = Ge(e, t, r, 1, o, 4, h, g);
                        }
                        if (J(e, t | 32, 22)) {
                          g = ze(e, t, r, g, o);
                        }
                        d |= e.assignable & 1 ? 32 : 16;
                      } else {
                        if (e.getToken() !== 1077936155) {
                          d |= 16;
                        }
                        g = Fe(e, t, r, i, a, o, g);
                      }
                    }
                  }
                } else if (e.getToken() === 67174411) {
                  m |= 1;
                  g = gt(e, t, r, m, i, e.tokenStart);
                  d = 16;
                } else {
                  e.report(44);
                }
              } else if (h === 8391476) {
                Q(e, t | 32, 8391476);
                m |= 8;
                if (e.getToken() & 143360) {
                  const n = e.getToken();
                  v = ct(e, t);
                  m |= 1;
                  if (e.getToken() !== 67174411) {
                    throw new S(e.tokenStart, e.currentLocation, n === 209005 ? 46 : n === 209008 || e.getToken() === 209009 ? 45 : 47, x[n & 255]);
                  }
                  d |= 16;
                  g = gt(e, t, r, m, i, e.tokenStart);
                } else if (~e.getToken() & 134217728) {
                  if (e.getToken() === 69271571) {
                    d |= 16;
                    m |= 3;
                    v = vt(e, t, r, i);
                    g = gt(e, t, r, m, i, e.tokenStart);
                  } else {
                    e.report(128);
                  }
                } else {
                  d |= 16;
                  v = lt(e, t);
                  m |= 1;
                  g = gt(e, t, r, m, i, e.tokenStart);
                }
              } else {
                e.report(30, x[h & 255]);
              }
            } else {
              v = lt(e, t);
              if (e.getToken() === 21) {
                Q(e, t | 32, 21);
                const {
                  tokenStart: l
                } = e;
                if (o === "__proto__") {
                  f++;
                }
                if (e.getToken() & 143360) {
                  g = Xe(e, t, r, s, 0, 1, i, 1, l);
                  const {
                    tokenValue: o,
                    tokenStart: u,
                    currentLocation: f
                  } = e;
                  const p = e.getToken();
                  g = Ye(e, t, r, g, i, 0, l);
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (p === 1077936155 || p === 1074790415 || p === 18) {
                      if (e.assignable & 2) {
                        d |= 16;
                      } else if (n != null) {
                        n.addVarOrBlock(t, o, s, u, f, c);
                      }
                    } else {
                      d |= e.assignable & 1 ? 32 : 16;
                    }
                  } else if (e.getToken() === 1077936155) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                    g = je(e, t, r, i, a, l, g);
                  } else {
                    d |= 16;
                    g = je(e, t, r, i, a, l, g);
                  }
                } else if (~e.getToken() & 2097152) {
                  g = qe(e, t, r, 1, 0, 1);
                  d |= e.assignable & 1 ? 32 : 16;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else {
                    g = Ye(e, t, r, g, i, 0, l);
                    d = e.assignable & 1 ? 0 : 16;
                    if (e.getToken() !== 18 && e.getToken() !== 1074790415) {
                      if (e.getToken() !== 1077936155) {
                        d |= 16;
                      }
                      g = je(e, t, r, i, a, l, g);
                    }
                  }
                } else {
                  g = e.getToken() === 69271571 ? ft(e, t, n, r, 0, i, a, s, c) : mt(e, t, n, r, 0, i, a, s, c);
                  d = e.destructible;
                  e.assignable = d & 16 ? 2 : 1;
                  if (e.getToken() === 18 || e.getToken() === 1074790415) {
                    if (e.assignable & 2) {
                      d |= 16;
                    }
                  } else if (~e.destructible & 8) {
                    g = Ye(e, t, r, g, i, 0, l);
                    d = e.assignable & 2 ? 16 : 0;
                    if (~e.getToken() & 4194304) {
                      if (!(~e.getToken() & 8388608)) {
                        g = Ge(e, t, r, 1, l, 4, h, g);
                      }
                      if (J(e, t | 32, 22)) {
                        g = ze(e, t, r, g, l);
                      }
                      d |= e.assignable & 1 ? 32 : 16;
                    } else {
                      g = Fe(e, t, r, i, a, l, g);
                    }
                  }
                }
              } else if (e.getToken() === 67174411) {
                m |= 1;
                g = gt(e, t, r, m, i, e.tokenStart);
                d = 16;
              } else {
                e.report(136);
              }
            }
            d |= e.destructible & 128 ? 128 : 0;
            e.destructible = d;
            u.push(e.finishNode({
              type: "Property",
              key: v,
              value: g,
              kind: m & 768 ? m & 512 ? "set" : "get" : "init",
              computed: (m & 2) > 0,
              method: (m & 1) > 0,
              shorthand: (m & 4) > 0
            }, l));
          }
          d |= e.destructible;
          if (e.getToken() !== 18) {
            break;
          }
          q(e, t);
        }
        Q(e, t, 1074790415);
        if (f > 1) {
          d |= 64;
        }
        const p = e.finishNode({
          type: a ? "ObjectPattern" : "ObjectExpression",
          properties: u
        }, l);
        if (!o && e.getToken() & 4194304) {
          return pt(e, t, r, d, i, a, l, p);
        } else {
          e.destructible = d;
          return p;
        }
      }
      function vt(e, t, n, r) {
        q(e, t | 32);
        const o = Me(e, (t | 131072) ^ 131072, n, 1, r, e.tokenStart);
        Q(e, t, 20);
        return o;
      }
      function yt(e, t, n) {
        const {
          tokenValue: r,
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
          const l = e.options.lexical ? he(e, t, r, o, i) : undefined;
          if (a) {
            e.flags |= 128;
          }
          if (s) {
            e.flags |= 256;
          }
          return _t(e, t, l, n, [c], 0, o);
        }
        return c;
      }
      function kt(e, t, n, r, o, i, a, s, c, l = 0) {
        if (!a) {
          e.report(57);
        }
        if (i) {
          e.report(51);
        }
        e.flags &= -129;
        return _t(e, t, e.options.lexical ? he(e, t, r, c, e.currentLocation) : undefined, n, [o], s, c, l);
      }
      function bt(e, t, n, r, o, i, a, s, c = 0) {
        if (!i) {
          e.report(57);
        }
        for (let t = 0; t < o.length; ++t) {
          Z(e, o[t]);
        }
        return _t(e, t, n, r, o, a, s, c);
      }
      function _t(e, t, n, r, o, i, a, s = 0) {
        var c;
        if (e.flags & 1) {
          e.report(48);
        }
        Q(e, t | 32, 10);
        const l = 535552;
        t = (t | l) ^ l | (i ? 2048 : 0);
        const u = e.getToken() !== 2162700;
        let d;
        if ((c = n) !== null && c !== undefined) {
          c.reportScopeError();
        }
        if (u) {
          e.flags = (e.flags | 4928) ^ 4928;
          d = Me(e, t, r, 1, 0, e.tokenStart);
        } else {
          var f;
          const o = 131084;
          d = We(e, (t | o) ^ o | 4096, n = (f = n) === null || f === undefined ? undefined : f.createChildScope(64), r, undefined, undefined, 16);
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
            e.report(30, x[e.getToken() & 255]);
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
          expression: u,
          generator: false
        }, a);
      }
      function Tt(e, t, n, r, o, i) {
        Q(e, t, 67174411);
        e.flags = (e.flags | 128) ^ 128;
        e.strictReservedRange = null;
        e.firstAwaitLocation = null;
        const a = [];
        if (J(e, t, 16)) {
          return a;
        }
        t = (t | 131072) ^ 131072;
        let s = 0;
        while (e.getToken() !== 18) {
          var c;
          let l;
          const {
            tokenStart: u
          } = e;
          const d = e.getToken();
          if (d & 143360) {
            if (!(t & 1)) {
              if (!(~d & 36864)) {
                e.flags |= 256;
                if ((c = e.strictReservedRange) === null || c === undefined) {
                  e.strictReservedRange = [u, e.currentLocation];
                }
              }
              if (!(~d & 537079808)) {
                e.flags |= 512;
              }
            }
            l = Rt(e, t, n, i | 1);
          } else {
            if (d === 2162700) {
              l = mt(e, t, n, r, 1, o, 1, i);
            } else if (d === 69271571) {
              l = ft(e, t, n, r, 1, o, 1, i);
            } else if (d === 14) {
              l = ht(e, t, n, r, 16, i, 0, o, 1);
            } else {
              e.report(30, x[d & 255]);
            }
            s = 1;
            if (e.destructible & 48) {
              e.report(50);
            }
          }
          if (e.getToken() === 1077936155) {
            q(e, t | 32);
            s = 1;
            const n = Me(e, t, r, 1, o, e.tokenStart);
            l = e.finishNode({
              type: "AssignmentPattern",
              left: l,
              right: n
            }, u);
          }
          a.push(l);
          if (!J(e, t, 18)) {
            break;
          }
          if (e.getToken() === 16) {
            break;
          }
        }
        if (s) {
          e.flags |= 128;
        }
        if ((s || t & 1) && n != null) {
          n.reportScopeError();
        }
        Q(e, t, 16);
        return a;
      }
      function St(e, t, n, r, o) {
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
        return kt(e, t & -524289 | 2048, n, e.tokenValue, ct(e, t), 0, r, 1, o);
      }
      function xt(e, t, n, r, o, i, a, s) {
        var c;
        q(e, t | 32);
        const l = (c = e.createScopeIfLexical()) === null || c === undefined ? undefined : c.createChildScope(512);
        const u = e.firstAwaitLocation;
        e.firstAwaitLocation = null;
        if (J(e, t = (t | 131072) ^ 131072, 16)) {
          if (e.getToken() === 10) {
            if (a & 1) {
              e.report(48);
            }
            return bt(e, t, l, n, [], o, 1, s);
          } else {
            if (t & 1 || !e.options.webcompat) {
              e.assignable = 2;
            } else {
              e.assignable = 4;
            }
            if (u) {
              e.firstAwaitLocation = u;
            }
            return e.finishNode({
              type: "CallExpression",
              callee: r,
              arguments: [],
              optional: false
            }, s);
          }
        }
        let d;
        let f = 0;
        let p = 0;
        e.destructible = (e.destructible | 384) ^ 384;
        const h = [];
        while (e.getToken() !== 16) {
          const {
            tokenStart: o,
            currentLocation: a
          } = e;
          const c = e.getToken();
          if (c & 143360) {
            if (l != null) {
              l.addBlockName(t, e.tokenValue, i, o, a);
            }
            if (~c & 537079808) {
              if (!(~c & 36864)) {
                e.flags |= 256;
              }
            } else {
              e.flags |= 512;
            }
            d = Xe(e, t, n, i, 0, 1, 1, 1, o);
            if (e.getToken() === 16 || e.getToken() === 18) {
              if (e.assignable & 2) {
                f |= 16;
                p = 1;
              }
            } else {
              if (e.getToken() === 1077936155) {
                p = 1;
              } else {
                f |= 16;
              }
              d = Ye(e, t, n, d, 1, 0, o);
              if (e.getToken() !== 16 && e.getToken() !== 18) {
                d = je(e, t, n, 1, 0, o, d);
              }
            }
          } else if (c & 2097152) {
            d = c === 2162700 ? mt(e, t, l, n, 0, 1, 0, i) : ft(e, t, l, n, 0, 1, 0, i);
            f |= e.destructible;
            p = 1;
            if (e.getToken() !== 16 && e.getToken() !== 18) {
              if (f & 8) {
                e.report(124);
              }
              d = Ye(e, t, n, d, 0, 0, o);
              f |= 16;
              if (!(~e.getToken() & 8388608)) {
                d = Ge(e, t, n, 1, s, 4, c, d);
              }
              if (J(e, t | 32, 22)) {
                d = ze(e, t, n, d, s);
              }
            }
          } else {
            if (c !== 14) {
              d = Me(e, t, n, 1, 0, o);
              f = 0;
              h.push(d);
              while (J(e, t | 32, 18)) {
                h.push(Me(e, t, n, 1, 0, o));
              }
              f |= e.assignable;
              Q(e, t, 16);
              e.destructible = f | 16;
              if (t & 1 || !e.options.webcompat) {
                e.assignable = 2;
              } else {
                e.assignable = 4;
              }
              if (u) {
                e.firstAwaitLocation = u;
              }
              return e.finishNode({
                type: "CallExpression",
                callee: r,
                arguments: h,
                optional: false
              }, s);
            }
            d = ht(e, t, l, n, 16, i, 1, 1, 0);
            f |= (e.getToken() === 16 ? 0 : 16) | e.destructible;
            p = 1;
          }
          h.push(d);
          if (!J(e, t | 32, 18)) {
            break;
          }
        }
        Q(e, t, 16);
        f |= (e.destructible & 256 ? 256 : 0) | (e.destructible & 128 ? 128 : 0);
        if (e.getToken() === 10) {
          if (f & 48) {
            e.report(27);
          }
          if (e.flags & 1 || a & 1) {
            e.report(48);
          }
          if (f & 128) {
            const t = e.firstAwaitLocation;
            if (t) {
              throw new S(t.start, t.end, 31);
            }
            e.report(31);
          }
          if (t & 1025 && f & 256) {
            e.report(32);
          }
          if (p) {
            e.flags |= 128;
          }
          return bt(e, t | 2048, l, n, h, o, 1, s);
        }
        if (f & 64) {
          e.report(63);
        }
        if (f & 8) {
          e.report(62);
        }
        if (t & 1 || !e.options.webcompat) {
          e.assignable = 2;
        } else {
          e.assignable = 4;
        }
        if (u) {
          e.firstAwaitLocation = u;
        }
        return e.finishNode({
          type: "CallExpression",
          callee: r,
          arguments: h,
          optional: false
        }, s);
      }
      function wt(e, t, n, r, o) {
        let a;
        let s;
        if (e.leadingDecorators.decorators.length) {
          a = e.leadingDecorators.start;
          s = [...e.leadingDecorators.decorators];
          e.leadingDecorators.decorators.length = 0;
        } else {
          a = e.tokenStart;
          s = Et(e, t, r);
        }
        Q(e, t = (t | 16385) ^ 16384, 86094);
        let c = null;
        let l = null;
        const {
          tokenValue: u,
          tokenStart: d,
          currentLocation: f
        } = e;
        if (e.getToken() & 4096 && e.getToken() !== 20565) {
          if (ne(e, t, e.getToken())) {
            e.report(120);
          }
          if (!(~e.getToken() & 537079808)) {
            e.report(121);
          }
          if (n) {
            n.addBlockName(t, u, 32, d, f);
            if (o && o & 2) {
              e.declareUnboundVariable(u);
            }
          }
          c = ct(e, t);
        } else if (!(o & 1)) {
          e.report(39, "Class");
        }
        let p = t;
        if (J(e, t | 32, 20565)) {
          l = qe(e, t, r, 0, 0, 0);
          p |= 512;
        } else {
          p = (p | 512) ^ 512;
        }
        const h = Ct(e, p, t, n, r, 2, 0, 8);
        return e.finishNode(i({
          type: "ClassDeclaration",
          id: c,
          superClass: l,
          body: h
        }, e.features & 1 ? {
          decorators: s
        } : null), a);
      }
      function Et(e, t, n) {
        const r = [];
        if (e.features & 1) {
          while (e.getToken() === 133) {
            r.push(At(e, t, n));
          }
        }
        return r;
      }
      function At(e, t, n) {
        const r = e.tokenStart;
        q(e, t | 32);
        const o = e.tokenStart;
        let i;
        if (e.getToken() === 67174411) {
          i = Xe(e, t, n, 2, 0, 1, 0, 1, r);
        } else {
          const r = e.getToken();
          if (~r & 143360 && !ie(t, r) || t & 1 && !(~r & 36864)) {
            e.report(30, x[r & 255]);
          }
          if (r === 209006 && t & 2050) {
            e.report(112);
          }
          if (r === 241771 && t & 1024) {
            e.report(97, "yield");
          }
          let a = ct(e, t | 64);
          while (e.getToken() === 67108877) {
            q(e, (t | 262152) ^ 8);
            const r = Ke(e, t | 64, n, 1);
            a = e.finishNode({
              type: "MemberExpression",
              object: a,
              computed: false,
              property: r,
              optional: false
            }, o);
          }
          i = a;
          if (e.getToken() === 67174411) {
            const r = st(e, t, n, 0);
            i = e.finishNode({
              type: "CallExpression",
              callee: a,
              arguments: r,
              optional: false
            }, o);
          }
        }
        return e.finishNode({
          type: "Decorator",
          expression: i
        }, r);
      }
      function Ct(e, t, n, r, o, i, a, s = 0) {
        const {
          tokenStart: c
        } = e;
        const l = e.createPrivateScopeIfLexical(o);
        Q(e, t | 32, 2162700);
        const u = 655360;
        t = (t | u) ^ u;
        const d = e.flags & 32;
        e.flags = (e.flags | 32) ^ 32;
        const f = [];
        while (e.getToken() !== 1074790415) {
          const o = e.tokenStart;
          const s = Et(e, t, l);
          if (s.length > 0 && e.tokenValue === "constructor") {
            e.report(111);
          }
          if (e.getToken() === 1074790415) {
            e.report(110);
          }
          if (J(e, t, 1074790417)) {
            if (s.length > 0) {
              e.report(122);
            }
          } else {
            f.push(Ot(e, t, r, l, n, i, s, 0, a, s.length > 0 ? o : e.tokenStart));
          }
        }
        Q(e, s & 8 ? t | 32 : t, 1074790415);
        if (l != null) {
          l.validatePrivateIdentifierRefs();
        }
        e.flags = e.flags & -33 | d;
        return e.finishNode({
          type: "ClassBody",
          body: f
        }, c);
      }
      function Ot(e, t, n, r, o, a, s, c, l, u) {
        let d = c ? 32 : 0;
        let f = null;
        const p = e.getToken();
        if (p & 176128 || p === -2147483527) {
          f = ct(e, t);
          switch (p) {
            case 36970:
              if (!c && e.getToken() !== 67174411 && ~e.getToken() & 1048576 && e.getToken() !== 1077936155) {
                return Ot(e, t, n, r, o, a, s, 1, l, u);
              }
              break;
            case 209005:
              if (e.getToken() !== 67174411 && !(e.flags & 1)) {
                if (!(~e.getToken() & 1073741824)) {
                  return Nt(e, t, r, f, d, s, u);
                }
                d |= ($(e, t, 8391476) ? 8 : 0) | 16;
              }
              break;
            case 209008:
              if (e.getToken() !== 67174411) {
                if (e.getToken() === 8391476 && e.flags & 1) {
                  return Nt(e, t, r, f, d, s, u);
                }
                if (!(~e.getToken() & 1073741824)) {
                  return Nt(e, t, r, f, d, s, u);
                }
                d |= 256;
              }
              break;
            case 209009:
              if (e.getToken() !== 67174411) {
                if (e.getToken() === 8391476 && e.flags & 1) {
                  return Nt(e, t, r, f, d, s, u);
                }
                if (!(~e.getToken() & 1073741824)) {
                  return Nt(e, t, r, f, d, s, u);
                }
                d |= 512;
              }
              break;
            case 209010:
              if (e.getToken() !== 67174411 && !(e.flags & 1)) {
                if (!(~e.getToken() & 1073741824)) {
                  return Nt(e, t, r, f, d, s, u);
                }
                if (e.features & 1) {
                  d |= 1024;
                }
              }
          }
        } else if (p === 69271571) {
          d |= 2;
          f = vt(e, o, r, l);
        } else if (~p & 134217728) {
          if (p === 8391476) {
            d |= 8;
            q(e, t);
          } else if (e.getToken() === 131) {
            d |= 8192;
            f = It(e, t | 16, r, 768);
          } else if (~e.getToken() & 1073741824) {
            if (c && p === 2162700) {
              return function (e, t, n, r, o, i) {
                return _e(e, t = (t | 5764) ^ 5764 | 592128, n = (i = n) === null || i === undefined ? undefined : i.createChildScope(), r, {}, o, "StaticBlock");
              }(e, t | 16, n, r, u);
            }
            if (p === -2147483526) {
              f = ct(e, t);
              if (e.getToken() !== 67174411) {
                e.report(30, x[e.getToken() & 255]);
              }
            } else {
              e.report(30, x[e.getToken() & 255]);
            }
          } else {
            d |= 128;
          }
        } else {
          f = lt(e, t);
        }
        if (d & 1816) {
          if (e.getToken() & 143360 || e.getToken() === -2147483527 || e.getToken() === -2147483526) {
            f = ct(e, t);
          } else if (~e.getToken() & 134217728) {
            if (e.getToken() === 69271571) {
              d |= 2;
              f = vt(e, t, r, 0);
            } else if (e.getToken() === 131) {
              d |= 8192;
              f = It(e, t, r, d);
            } else {
              e.report(137);
            }
          } else {
            f = lt(e, t);
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
          return Nt(e, t, r, f, d, s, u);
        }
        const h = gt(e, t | 16, r, d, l, e.tokenStart);
        return e.finishNode(i({
          type: "MethodDefinition",
          kind: !(d & 32) && d & 64 ? "constructor" : d & 256 ? "get" : d & 512 ? "set" : "method",
          static: (d & 32) > 0,
          computed: (d & 2) > 0,
          key: f,
          value: h
        }, e.features & 1 ? {
          decorators: s
        } : null), u);
      }
      function It(e, t, n, r) {
        const {
          tokenStart: o
        } = e;
        q(e, t);
        const {
          tokenValue: i
        } = e;
        if (i === "constructor") {
          e.report(130);
        }
        if (e.options.lexical) {
          if (!n) {
            e.report(4, i);
          }
          if (r) {
            n.addPrivateIdentifier(i, r);
          } else {
            n.addPrivateIdentifierRef(i);
          }
        }
        q(e, t);
        return e.finishNode({
          type: "PrivateIdentifier",
          name: i
        }, o);
      }
      function Nt(e, t, n, r, o, a, s) {
        let c = null;
        if (o & 8) {
          e.report(0);
        }
        if (e.getToken() === 1077936155) {
          q(e, t | 32);
          const {
            tokenStart: r
          } = e;
          if (e.getToken() === 537079928) {
            e.report(121);
          }
          const i = (o & 64 ? 0 : 16896) | 11264;
          c = Xe(e, (t = (t | i) ^ i | (o & 8 ? 1024 : 0) | (o & 16 ? 2048 : 0) | (o & 64 ? 16384 : 0) | 65792) | 16, n, 2, 0, 1, 0, 1, r, 0, 1);
          if (!!(~e.getToken() & 1073741824) || !(~e.getToken() & 4194304)) {
            c = Ye(e, t | 16, n, c, 0, 0, r);
            c = je(e, t | 16, n, 0, 0, r, c);
          }
        }
        K(e, t);
        return e.finishNode(i({
          type: o & 1024 ? "AccessorProperty" : "PropertyDefinition",
          key: r,
          value: c,
          static: (o & 32) > 0,
          computed: (o & 2) > 0
        }, e.features & 1 ? {
          decorators: a
        } : null), s);
      }
      function Dt(e, t, n, r, o, i = 0) {
        if (e.getToken() & 143360 || !(t & 1) && e.getToken() === -2147483526) {
          return Rt(e, t, n, o, i);
        }
        if (~e.getToken() & 2097152) {
          e.report(30, x[e.getToken() & 255]);
        }
        const a = e.getToken() === 69271571 ? ft(e, t, n, r, 1, 0, 1, o, i) : mt(e, t, n, r, 1, 0, 1, o, i);
        if (e.destructible & 16) {
          e.report(50);
        }
        if (e.destructible & 32) {
          e.report(50);
        }
        return a;
      }
      function Rt(e, t, n, r, o = 0) {
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
        if ((i & 255) == 73 && r & 24) {
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
        q(e, t);
        if (n != null) {
          n.addVarOrBlock(t, a, r, s, c, o);
        }
        return e.finishNode({
          type: "Identifier",
          name: a
        }, s);
      }
      function Lt(e, t, n, r, o) {
        if (!r) {
          Q(e, t, 8456256);
        }
        if (e.getToken() === 8390721) {
          const i = function (e, t) {
            ue(e);
            return e.finishNode({
              type: "JSXOpeningFragment"
            }, t);
          }(e, o);
          const [a, s] = function (e, t, n, r) {
            const o = [];
            while (true) {
              const i = Bt(e, t, n, r);
              if (i.type === "JSXClosingFragment") {
                return [o, i];
              }
              o.push(i);
            }
          }(e, t, n, r);
          return e.finishNode({
            type: "JSXFragment",
            openingFragment: i,
            children: a,
            closingFragment: s
          }, o);
        }
        if (e.getToken() === 8457014) {
          e.report(30, x[e.getToken() & 255]);
        }
        let i = null;
        let a = [];
        const s = function (e, t, n, r, o) {
          if (~e.getToken() & 143360 && ~e.getToken() & 4096) {
            e.report(0);
          }
          const i = Mt(e, t);
          const a = function (e, t, n) {
            const r = [];
            while (e.getToken() !== 8457014 && e.getToken() !== 8390721 && e.getToken() !== 1048576) {
              r.push(Ht(e, t, n));
            }
            return r;
          }(e, t, n);
          const s = e.getToken() === 8457014;
          if (s) {
            Q(e, t | 1048576, 8457014);
          }
          if (e.getToken() !== 8390721) {
            e.report(25, x[65]);
          }
          if (r || !s) {
            ue(e);
          } else {
            q(e, t);
          }
          return e.finishNode({
            type: "JSXOpeningElement",
            name: i,
            attributes: a,
            selfClosing: s
          }, o);
        }(e, t, n, r, o);
        if (!s.selfClosing) {
          [a, i] = function (e, t, n, r) {
            const o = [];
            while (true) {
              const i = Pt(e, t, n, r);
              if (i.type === "JSXClosingElement") {
                return [o, i];
              }
              o.push(i);
            }
          }(e, t, n, r);
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
      function Pt(e, t, n, r) {
        if (e.getToken() === 138) {
          return Ut(e);
        }
        if (e.getToken() === 2162700) {
          return Ft(e, t, n, 1, 0);
        }
        if (e.getToken() === 8456256) {
          const {
            tokenStart: o
          } = e;
          q(e, t);
          if (e.getToken() === 8457014) {
            return function (e, t, n, r) {
              Q(e, t, 8457014);
              const o = Mt(e, t);
              if (e.getToken() !== 8390721) {
                e.report(25, x[65]);
              }
              if (n) {
                ue(e);
              } else {
                q(e, t);
              }
              return e.finishNode({
                type: "JSXClosingElement",
                name: o
              }, r);
            }(e, t, r, o);
          } else {
            return Lt(e, t, n, 1, o);
          }
        }
        e.report(0);
      }
      function Bt(e, t, n, r) {
        if (e.getToken() === 138) {
          return Ut(e);
        }
        if (e.getToken() === 2162700) {
          return Ft(e, t, n, 1, 0);
        }
        if (e.getToken() === 8456256) {
          const {
            tokenStart: o
          } = e;
          q(e, t);
          if (e.getToken() === 8457014) {
            return function (e, t, n, r) {
              Q(e, t, 8457014);
              if (e.getToken() !== 8390721) {
                e.report(25, x[65]);
              }
              if (n) {
                ue(e);
              } else {
                q(e, t);
              }
              return e.finishNode({
                type: "JSXClosingFragment"
              }, r);
            }(e, t, r, o);
          } else {
            return Lt(e, t, n, 1, o);
          }
        }
        e.report(0);
      }
      function Ut(e) {
        const t = e.tokenStart;
        ue(e);
        const n = {
          type: "JSXText",
          value: e.tokenValue
        };
        if (e.options.raw) {
          n.raw = e.tokenRaw;
        }
        return e.finishNode(n, t);
      }
      function Mt(e, t) {
        const {
          tokenStart: n
        } = e;
        de(e);
        let r = zt(e, t);
        if (e.getToken() === 21) {
          return jt(e, t, r, n);
        }
        while (J(e, t, 67108877)) {
          de(e);
          r = Vt(e, t, r, n);
        }
        return r;
      }
      function Vt(e, t, n, r) {
        const o = zt(e, t);
        return e.finishNode({
          type: "JSXMemberExpression",
          object: n,
          property: o
        }, r);
      }
      function Ht(e, t, n) {
        const {
          tokenStart: r
        } = e;
        if (e.getToken() === 2162700) {
          return function (e, t, n) {
            const r = e.tokenStart;
            q(e, t);
            Q(e, t, 14);
            const o = Me(e, t, n, 1, 0, e.tokenStart);
            Q(e, t, 1074790415);
            return e.finishNode({
              type: "JSXSpreadAttribute",
              argument: o
            }, r);
          }(e, t, n);
        }
        de(e);
        let o = null;
        let i = zt(e, t);
        if (e.getToken() === 21) {
          i = jt(e, t, i, r);
        }
        if (e.getToken() === 1077936155) {
          switch (le(e, t)) {
            case 134283267:
              o = lt(e, t);
              break;
            case 8456256:
              o = Lt(e, t, n, 0, e.tokenStart);
              break;
            case 2162700:
              o = Ft(e, t, n, 0, 1);
              break;
            default:
              e.report(156);
          }
        }
        return e.finishNode({
          type: "JSXAttribute",
          value: o,
          name: i
        }, r);
      }
      function jt(e, t, n, r) {
        Q(e, t, 21);
        const o = zt(e, t);
        return e.finishNode({
          type: "JSXNamespacedName",
          namespace: n,
          name: o
        }, r);
      }
      function Ft(e, t, n, r, o) {
        const {
          tokenStart: i
        } = e;
        q(e, t | 32);
        const {
          tokenStart: a
        } = e;
        if (e.getToken() === 14) {
          return function (e, t, n, r) {
            Q(e, t, 14);
            const o = Me(e, t, n, 1, 0, e.tokenStart);
            Q(e, t, 1074790415);
            return e.finishNode({
              type: "JSXSpreadChild",
              expression: o
            }, r);
          }(e, t, n, i);
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
          s = Me(e, t, n, 1, 0, a);
        }
        if (e.getToken() !== 1074790415) {
          e.report(25, x[15]);
        }
        if (r) {
          ue(e);
        } else {
          q(e, t);
        }
        return e.finishNode({
          type: "JSXExpressionContainer",
          expression: s
        }, i);
      }
      function zt(e, t) {
        const n = e.tokenStart;
        if (!(e.getToken() & 143360)) {
          e.report(30, x[e.getToken() & 255]);
        }
        const {
          tokenValue: r
        } = e;
        q(e, t | 1048576);
        return e.finishNode({
          type: "JSXIdentifier",
          name: r
        }, n);
      }
      const {
        version: Gt
      } = {
        version: "7.3.3"
      };
      e.isParseError = e => e instanceof S;
      e.parse = function (e, t) {
        return me(e, t);
      };
      e.parseModule = function (e, t) {
        return me(e, i(i({}, t), {}, {
          sourceType: "module"
        }));
      };
      e.parseScript = function (e, t) {
        return me(e, i(i({}, t), {}, {
          sourceType: "script"
        }));
      };
      e.version = Gt;
    })(t);
  };
