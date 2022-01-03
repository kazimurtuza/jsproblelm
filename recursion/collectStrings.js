// let arr = [];
// function collectStrings(obj) {
//   for (const [Key, val] of Object.entries(obj)) {
//     if (typeof val == "string") {
//       arr.push(val);
//     } else if (typeof val == "object") {
//       collectStrings(val);
//     }
//   }
//   return arr;
// }

function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

let data = collectStrings(obj); // ["foo", "bar", "baz"])
console.log(data);
