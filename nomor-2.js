const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "undefined") {
    return "Bro where is the parameter";
  }
  if (typeof givenNumber !== "number") {
    return "ERROR : Invalid Data Type";
  }
  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
