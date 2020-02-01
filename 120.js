/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let length = triangle.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < i+1; j++) {
        if (i == 0 && j == 0) {
          continue;
        } else if (j == 0) {
          triangle[i][j] += triangle[i-1][j];
        } else if (j == i) {
          triangle[i][j] += triangle[i-1][j-1];
        } else {
          triangle[i][j] += Math.min(triangle[i-1][j-1], triangle[i-1][j]);
        }
      }
    }
    let min = 10000;
    for (let i = 0; i < triangle[length -1].length; i++) {
      min = Math.min(triangle[length -1][i], min);
    }
    return min;
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);