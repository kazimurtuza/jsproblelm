var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

function objar(ob) {
  let total = 0;
  for (let vel in ob) {
    if (typeof ob[vel] === "object") {
      total += objar(ob[vel]);
    } else if (typeof ob[vel] === "number") {
      if (ob[vel] % 2 == 0) {
        total += ob[vel];
      }
    }
  }

  return total;
}

objar(obj2);
