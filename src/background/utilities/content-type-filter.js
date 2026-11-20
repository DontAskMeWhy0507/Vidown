// Module 706 [utilities] - MIME content-type filter and detector
export default function (moduleObj, exportsObj, requireFn) {
  moduleObj.exports = function (queryStr) {
    if (!queryStr || typeof queryStr !== 'string') return {};
    const params = new URLSearchParams(queryStr);
    const result = {};
    for (const [key, val] of params.entries()) result[key] = val;
    return result;
  };
};
