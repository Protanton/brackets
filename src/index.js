module.exports = function check(str, bracketsConfig) {
  // your solution
  const arr = str.split('');
  start:
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let open = bracketsConfig[j][0];
      let close = bracketsConfig[j][1];
      if (arr[i] === open) {
        if (arr[i + 1] === close) {
          arr.splice(i, 2);
          i -= 2;
        } else {
          continue start;
        }
      }
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}
