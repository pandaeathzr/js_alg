/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  cost.push(0)
  let tempList = [cost[0], cost[1]]
  let length = cost.length
  for (let i = 2; i < length; i++) {
    tempList[i] = cost[i] + Math.min(tempList[i-1], tempList[i-2])
  }
  return tempList[length-1]
};