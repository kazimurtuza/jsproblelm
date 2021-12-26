let newarray = [];
function flatten(arr) {
  for (let val of arr) {
    if (val instanceof Array) {
      console.log(val);
      flatten(val);
    } else {
      newarray.push(val);
    }
  }
  return newarray;
}

let result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
console.log(result);

// let a = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];
// [[[1], [[[2]]], [[[[[[[3]]]]]]]]];
// [[1], [[[2]]], [[[[[[[3]]]]]]]];
// [1], [[[2]]], [[[[[[[3]]]]]]];
// 1, [[[2]]], [[[[[[[3]]]]]]];
// 1, [[2]], [[[[[[[3]]]]]]];
// 1, [2], [[[[[[[3]]]]]]];
// 1, 2, [[[[[[[3]]]]]]];
// 1, 2, [[[[[[3]]]]]];
// 1, 2, [[[[[3]]]]];
// 1, 2, [[[[3]]]];
// ...
// 1, 2, 3;
// console.log(a[0] instanceof Array);
