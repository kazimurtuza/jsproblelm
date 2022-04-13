function flatten(arr) {
  let newarray = [];

  for (let val of arr) {
    if (val instanceof Array) {
      newarray.push(...flatten(val));
    } else {
      newarray.push(val);
    }
  }
  return newarray;
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
