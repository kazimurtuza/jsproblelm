function findindex(arr, start = 0, end = arr.length - 1) {
  var startval = arr[start];
  var swpIdx = start;
  var swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  };

  for (let i = start + 1; i <= end; i++) {
    if (startval > arr[i]) {
      swpIdx++;

      swap(arr, swpIdx, i);
    }
  }
  swap(arr, swpIdx, start);

  return swpIdx;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let realindex = findindex(arr, left, right);
    //   left part
    quicksort(arr, left, realindex - 1);
    //   right part
    quicksort(arr, realindex + 1, right);
  }
  return arr;
}
let data = quicksort([3, 2, 1, 4, 5, 7, 6, 8]);
console.log(data);
