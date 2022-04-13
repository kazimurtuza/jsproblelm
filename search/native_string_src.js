function nativesrc(str, findstr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < findstr.length; j++) {
      if (str[i + j] != findstr[j]) break;

      if (j == findstr.length - 1) count++;
    }
  }
  return count;
}

let data = nativesrc("ka kazimutuza whereareu kazi", "ka");
console.log(data);

let ar = [23, 55, 43, 1, 2, 77, 89, 34];

let atr = ["mim", "jim", "kazimaha", "rajjak", "shopon"];

console.log(atr.sort());
