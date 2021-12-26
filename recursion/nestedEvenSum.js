let sum = 0;
function nestedEvenSum(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value == "number" && value % 2 == 0) {
      sum += value;
    } else if (typeof value == "object") {
      nestedEvenSum(value);
    }
  }
  return sum;
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

let result = nestedEvenSum(obj2); // 6
// nestedEvenSum(obj2); // 10
console.log(result);
