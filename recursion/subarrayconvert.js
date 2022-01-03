function subarray(arr, siz) {
  let newarr = [];

  if (arr.length <= siz) {
    return [arr];
  } else {
    newarr.push(arr.splice(0, siz), ...subarray(arr, siz));
  }

  return newarr;
}

$data = subarray([1, 2, 3, 4, 5, 5, 6, 7], 2);

console.log($data);
