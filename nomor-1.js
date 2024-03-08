function changeWord(selectedText, changedText, text) {
  return text.replace(selectedText, changedText);
}
const kalimat1 = "Ibu punya mobil merah dan motor merah";
const kalimat2 = "Saya suka banget bakso malang";

console.log(changeWord(/merah/g, "ijo", kalimat1));
console.log(changeWord("suka", "benci", kalimat2));
