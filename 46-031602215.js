/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [],
      temp = []
  const goBlack = function(list) {
    if (list.length === 1) {
      temp.push(list[0])
      result.push([...temp])
      temp.pop()
      return
    } else {
      for (let i = 0 ;i < list.length; i++) {
        temp.push(list[i])
        let tempList = [...list]
        tempList.splice(i,1)
        goBlack(tempList)
        temp.pop()
      }
    }
  }
  goBlack(nums)
  return result
  
};

// permute([1,2,3])