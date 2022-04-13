function insertion(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentval = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentval; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentval;
  }
  return arr;
}

let sort = insertion([2, 1, 9, 74, 4]);
console.log(sort);
