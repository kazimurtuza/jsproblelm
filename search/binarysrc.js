let arr = [4, 6, 8, 9, 11, 44, 67, 81, 89, 90];

function binaryerc(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  if (arr[end] < val || arr[start] > val) {
    return -1;
  }
  while (arr[mid] !== val) {
    console.log(start + " " + mid + " " + end);
    if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }
  return mid;
}

let ab = binaryerc(arr, 90);
console.log(ab);
