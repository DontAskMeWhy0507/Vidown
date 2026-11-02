// Module 615 - Savior Helper 615
export default function (moduleObj, exportsObj) {
  exportsObj["des-ecb"] = {
  key: 8,
  iv: 0
  }
  , exportsObj["des-cbc"] = exportsObj.des = {
  key: 8,
  iv: 8
  }
  , exportsObj["des-ede3-cbc"] = exportsObj.des3 = {
  key: 24,
  iv: 8
  }
  , exportsObj["des-ede3"] = {
  key: 24,
  iv: 0
  }
  , exportsObj["des-ede-cbc"] = {
  key: 16,
  iv: 8
  }
  , exportsObj["des-ede"] = {
  key: 16,
  iv: 0
  };
  };
