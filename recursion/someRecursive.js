function someRecursive(array, cb) {
  if (cb(array[0])) return true;

  if (array.length == 1) return false;
  return someRecursive(array.slice(1), cb);
}

$data = someRecursive([2, 4, 6, 8], (isodd) => {
  if (isodd % 2 !== 0) {
    return true;
  } else {
    return false;
  }
});

console.log($data);
