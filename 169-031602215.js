/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 摩尔投票法
  // let count = 0 ,
  //     mostNum = nums[0]
  // for (const item of nums) {
  //   if (item === mostNum) {
  //     count ++
  //   } else {
  //     count --
  //   }
  //   if (count === 0) {
  //     mostNum = item
  //     count = 1
  //   }
  // }
  // return mostNum

  // 分治法
  if (nums.length === 1) return nums[0]
  let leftNums = nums.slice(0, nums.length/2),
      rightNums = nums.slice(nums.length/2)
  let leftMostNum = majorityElement(leftNums),
      rightMostNum = majorityElement(rightNums)

  if (leftMostNum === rightMostNum) {
    return leftMostNum
  } else {
    let NumTemp = 0
    for (const item of leftNums) {
      if (item === leftMostNum) NumTemp++
      else if (item === rightMostNum) NumTemp--
    }
    for (const item of rightNums) {
      if (item === leftMostNum) NumTemp++
      else if (item === rightMostNum) NumTemp--
    }
    if (NumTemp > 0) return leftMostNum
    return rightMostNum
  }
};


// majorityElement([2,2,1,1,1,2,2])