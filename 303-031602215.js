/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    this.dp[i] = this.dp[i-1] + nums[i]
  }
  this.dp.unshift(0)
  // console.log(this.dp)
};
/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.dp[j + 1] - this.dp[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// let obj = new NumArray([1,2,3,4,5,6,7])
// console.log(obj.sumRange(1,2))