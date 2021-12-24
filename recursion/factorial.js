// factorial problem solve using for loop

function factorialcount(num) {
  let i = num;
  let total = 1;
  for (i; i > 1; i--) {
    total *= i;
  }
  return total;
}
$a = factorialcount(4);
console.log($a);

// factorial problem solve using  recursion

function ractorialcount2(num) {
  if (num === 1) return 1;

  return num * ractorialcount2(num - 1);
  //  working process
  //   5 * ractorialcount2(4);
  //          4 * ractorialcount2(3);
  //                 3 * ractorialcount2(2);
  //                        2 * ractorialcount2(1);
  //                               1*1
}

$b = ractorialcount2(5);
console.log(`ractorialcount2=`, $b);
