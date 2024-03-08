// SOAL NO 12
var array = [1, 2, 3, 4, 5, 6];

const jumlah = array.reduce((prev, curr) => prev + curr, (initialValue = 0));

const kali = array.reduce((prev, curr) => prev * curr, (initialValue = 1));

console.log("Hasil Jumlah : " + jumlah);
console.log("Hasil Kali :  " + kali);
