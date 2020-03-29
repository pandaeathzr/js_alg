/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let reg = /(\w)\1/g;
  let result = S;
  let flag = reg.test(result);
  while(flag) {
    result = result.replace(reg,'');
    flag = reg.test(result);
  }
  return result;
};
console.log(removeDuplicates('abbaca'));