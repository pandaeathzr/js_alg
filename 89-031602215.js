/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let getCombin = (a) => {
    let c = []
    a.forEach(item => {
      c.push('0' + item)
    })
    a.reverse().forEach(item => {
      c.push('1' + item)
    })
    return c
  }
  // 使用递归合并返回值
  let getCode = (n) => {
    //题中的边界条件
    if (n === 0) {
      return [0]
    }
    else if (n === 1) {
      return [0, 1]
    }
    else {
      return getCombin(getCode(n - 1))
      // 3
      // getCombin(getCode(2))
      // getCombin(getCombin(getCode(1))))
      // getCombin(getCombin([0,1]))
    }
  }
  //最后把每一项转化为二进制
  return getCode(n).map(item => parseInt(item, 2))
}