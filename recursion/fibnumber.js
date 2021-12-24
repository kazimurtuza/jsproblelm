function findlasfib(num) {
  if (num == 0) return 0;
  if (num < 3 && num >= 1) return 1;
  let arr = [1, 1];
  function set(num) {
    if (num == 2) {
      return;
    }
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    set(num - 1);
  }
  set(num);
  return arr[arr.length - 1];
}

$data = findlasfib(35);

console.log($data);
