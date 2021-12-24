function recursion(num) {
  if (num == 1) return 1;
  return num + recursion(num - 1);
}
let a = recursion(4);
console.log(a);
