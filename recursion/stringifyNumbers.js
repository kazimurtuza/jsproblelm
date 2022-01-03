// function stringifyNumbers(obj) {
//   //   typeof value == "number";

//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value == "nimber") {
//       obj.key = "sdjf";
//     } else if (typeof value == "object") {
//       stringifyNumbers(value);
//     }
//   }
//   return obj;
// }

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

$data = stringifyNumbers(obj);
console.log($data);
