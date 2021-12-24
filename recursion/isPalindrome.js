function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] == str[str.length - 1]) {
    str = str.slice(1, -1);
  } else {
    return false;
  }
  return isPalindrome(str);
}

$data = isPalindrome("amanaplanacanalpanama");
console.log($data);

// second solve
function isPalindrome(str) {
  if (str.length === 0) return;
  function reverse(str) {
    if (str.length === 0) return "";
    return str.slice(-1) + reverse(str.slice(0, -1));
  }
  return str === reverse(str);
}
