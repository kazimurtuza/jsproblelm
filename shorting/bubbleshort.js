function bubbleshort(arr) {
  let swap = true;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(arr[j] + " " + arr[j + 1]);

      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swap = false;
      }
    }
    if (swap) break;
    console.log("-------------  ");
  }

  return arr;
}

let data = bubbleshort([9, 6, 5, 4, 3, 7, 1]);
console.log(data);
