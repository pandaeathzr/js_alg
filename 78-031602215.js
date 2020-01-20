/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ws = [[]]
  for(let i=0; i < nums.length; ++i) {
      for(let j=0, len = ws.length; j < len; ++j) {
          ws.push(ws[j].concat([nums[i]]))
      }
  }
  return ws
};