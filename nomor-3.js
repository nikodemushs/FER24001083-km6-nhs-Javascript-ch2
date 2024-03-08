const dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8];

function getAngkaTerbesarKedua(dataNumbers) {
  if (typeof dataNumbers === "undefined") {
    console.log("Parameter is empty");
    return 0;
  }
  if (typeof dataNumbers !== "object") {
    return "ERROR : Invalid Data Type";
  }
  if (typeof dataNumbers === "object") {
    dataNumbers.sort(function (a, b) {
      return a - b;
    });
    return dataNumbers[dataNumbers.length - 1];
  }
}

console.log(getAngkaTerbesarKedua(dataNumbers));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
