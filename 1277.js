/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let result = 0;
    let f = [];
    for (let i = 0; i < matrix.length; i++) {
      f[i] = [];
      for (let j = 0; j < matrix[0].length; j++) {
        if (i == 0 || j == 0) {
          f[i][j] = matrix[i][j];
        } else if (matrix[i][j] == 0) {
          f[i][j] = 0;
        } else {
          f[i][j] = Math.min(f[i-1][j], f[i][j-1], f[i-1][j-1]) + 1;
        }
        result += f[i][j]
      }
    }
    console.table(matrix);
    console.table(f);
    return result;
};

countSquares([[1,0,1],[1,1,0],[1,1,0]]);