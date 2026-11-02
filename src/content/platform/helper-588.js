// Module 588 - Savior Helper 588
export default function (moduleObj, exportsObj, requireFn) {
  (exportsObj = moduleObj.exports = requireFn(462)).Stream = exportsObj, exportsObj.Readable = exportsObj,
  exportsObj.Writable = requireFn(465), exportsObj.Duplex = requireFn(143), exportsObj.Transform = requireFn(
  466), exportsObj.PassThrough = requireFn(593);
  };
