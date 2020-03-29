/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  let str = String(n).split('');
  let length = str.length;
  for (let i = length-1; i > 0; i--) {
    let start = str[i];
    let end = str[i-1];
    if (start <= end) {
      continue;
    } else {
      let endIndex = i-1;
      let largerIndex;
      for (let j = endIndex + 1; j < length; j++) {
        if (str[j] > end) {
          largerIndex = j;
        } else {
          break;
        }
      }
      [str[endIndex], str[largerIndex]] = [str[largerIndex], str[endIndex]];
      let first = str.slice(0,endIndex + 1);
      let senond = str.slice(endIndex + 1).reverse();
      const result = Number(first.concat(senond).join(''))
      return 2147483647 > result ? result : -1;
    }
  }
  return -1;
};
console.log(nextGreaterElement(1999999999));