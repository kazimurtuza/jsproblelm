function mergesort(arr1, arr2) {
  let sorted_arr = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted_arr.push(arr1[i]);

      i++;
    } else if (arr1[i] >= arr2[j]) {
      sorted_arr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sorted_arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sorted_arr.push(arr2[j]);
    j++;
  }
  return sorted_arr;
}

function mergefirststep(arr) {
  let arrsiz = arr.length;
  if (arrsiz <= 1) return arr;
  let mid = Math.floor(arrsiz / 2);
  let left = mergefirststep(arr.slice(0, mid));
  let right = mergefirststep(arr.slice(mid));
  return mergesort(left, right);
}

let data = mergefirststep([82, 2, 1, 3, 5, 42, 22, 10, 11]);

console.log(data);
