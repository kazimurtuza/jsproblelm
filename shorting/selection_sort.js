function selection(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }

      console.log("i=" + i + ",j=" + j + ",sm=", lowest);
    }
    console.log("---------------------");

    if (i !== lowest) {
      let temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }

  return array;
}

let data = selection([4, 7, 8, 2, 9, 1, 3]);
console.log(data);
