/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 动态规划
  // let result = nums[0]
  // let sum = 0
  // for (const item of nums) {
  //   if (sum > 0 ) {
  //     sum += item
  //   } else {
  //     sum = item
  //   }
  //   result = Math.max(sum, result)
  // }
  // return result

  //分治
  if (nums.length === 1) {
    return nums[0]
  } else {
    const left = nums.slice(0, nums.length/2)
    const right = nums.slice(nums.length/2)
    const leftResult = maxSubArray(left)
    const rightResult = maxSubArray(right)
    let leftSum = 0
    let leftMax = left[left.length - 1]
    for (let i = left.length - 1 ; i >= 0 ; i--) {
      leftSum += left[i]
      leftMax = Math.max(leftMax, leftSum)
    }

    let rightSum = 0
    let rightMax = right[0]
    for (let i = 0 ; i < right.length ; i++) {
      rightSum += right[i]
      rightMax = Math.max(rightMax, rightSum)
    }
    let middleResult = leftMax + rightMax
    return Math.max(leftResult, rightResult, middleResult)
  }
  // maxSubArray()
}
// maxSubArray([1, 2])
// console.log(maxSubArray([1, 2, -3, 4]))