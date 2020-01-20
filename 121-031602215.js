/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  let buy = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if ((prices[i] - buy) <= 0) {
      buy = prices[i]
    } else {
      max = Math.max((prices[i] - buy), max)
    }
  }
  return max
};

// maxProfit([7,6,4,3,1])