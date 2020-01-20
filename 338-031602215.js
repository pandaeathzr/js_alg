/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let list = [0]
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      list[i] = list[i-1] +1
    } else {
      list[i] = list[i/2]
    }
  }
  return list
};