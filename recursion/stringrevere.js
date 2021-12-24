function revers(str) {
  if (str.length == 0) return "";

  return str.slice(-1) + revers(str.slice(0, -1));
}
$data = revers("bangladesh");

console.log($data);
