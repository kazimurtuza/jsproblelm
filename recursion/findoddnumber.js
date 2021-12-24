function findodd(arr) {
  let newarr = [];
  if (arr.length == 0) {
    return newarr;
  }
  if (arr[0] % 2 !== 0) {
    newarr.push(arr[0]);
  }
  $oddlist = newarr.concat(findodd(arr.slice(1)));
  return $oddlist;
  // [1].concat(findodd([2, 3, 4, 5]));
  //           [].concat(findodd([3,4,5,]));
  //                      [3].concat(findodd([4,5]));
  //                            [].concat(findodd([5]));
  //                                      [5].concat(findodd([]));
  //                                                 [];
}
$a = findodd([1, 2, 3, 4, 5]);

console.log($a);
