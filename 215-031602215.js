/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let i = 0,
      j = nums.length - 1
  const quicklySort = (i, j) => {
    let keyValue = nums[i]
    return findSwap(i, j, keyValue)
  }

  const findSwap = (i, j, keyValue) => {
    let left = i,
        right = j
    while (i !== j) {
      while (nums[j] >= keyValue && i < j) {
        j--
      }
      while (nums[i] <= keyValue && i < j) {
        i++
      }
      i < j && ([nums[i], nums[j]] = [nums[j], nums[i]])
    }

    [nums[left], nums[j]] = [nums[j], nums[left]]

    if (i === nums.length - k) return nums[i]
    else if (i > nums.length - k) return quicklySort(left, i-1)
    else return quicklySort(i+1, right)
    }
  
  return quicklySort(i, j)
};

// console.log(findKthLargest([3,2,1,5,6,4],2))