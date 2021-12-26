function capitalizeFirst(arr) {
  if (typeof arr === "string") {
    return arr[0].toUpperCase() + arr.slice(1);
  }
  let newarr = [];
  for (let row of arr) {
    newarr.push(capitalizeFirst(row));
  }
  return newarr;
}

$result = capitalizeFirst(["kazi", "jim", "mahadi"]);

console.log($result);
