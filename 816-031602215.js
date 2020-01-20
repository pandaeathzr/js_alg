/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    const changeList = (list) => {
      return list.map(item => ~item + 2)
    }
    let length = A.length
    for (let i = 0; i < length; i++) {
      A[i][0] !== 1 && (A[i] = changeList(A[i]))
    }
    let listLength = A[0].length,
        result = 0
    for (let i = 1; i < listLength; i++) {
      let oneNum = 0,
          zeroNum = 0
      for (let j = 0; j < length; j++) {
        A[j][i] === 0 ? zeroNum++ : oneNum++
      }
      result += Math.max(oneNum, zeroNum) * (1 << listLength - i - 1)
    }
    return result += length * (1 << listLength - 1)
};
 
// matrixScore([[]])