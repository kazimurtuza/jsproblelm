function getdigit(num, i) {
  console.log(
    Math.abs(num) +
      "/" +
      Math.pow(10, i) +
      "=" +
      Math.floor(Math.abs(num) / Math.pow(10, i))
  );
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitcount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function getmaxdigit(num) {
  var maxdigit = 0;
  for (i = 0; i < num.length; i++) {
    maxdigit = Math.max(maxdigit, digitcount(num[i]));
  }
  return maxdigit;
}

function radixsort(number) {
  let maxdigit = getmaxdigit(number);
  for (let i = 0; i < maxdigit; i++) {
    let arrlist = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < number.length; k++) {
      let digit = getdigit(number[k], i);
      console.log(
        number[k] +
          "" +
          "k=" +
          k +
          "  " +
          "i=" +
          i +
          "" +
          " " +
          "number=" +
          digit
      );

      arrlist[digit].push(number[k]);
    }

    number = [].concat(...arrlist);
    console.log(arrlist);
  }

  return number;
}

let data = radixsort([234, 7, 123, 788, 22, 5, 9, 1]);
console.log(data);
