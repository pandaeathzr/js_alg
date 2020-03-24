/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  let i = 0;
  for (let j = i + 1; j <= num.length - 1; j++) {
    for (let k = j + 1; k <= num.length - 1; k++) {
      if (dfs(num, i, j, k)) return true;
    }
  }
  return false;
};

var dfs = function(num, i, j, k) {
  if((num[i]=='0'&&j-i>1)||(num[j]=='0'&&k-j>1)) return false;
  let a = num.substring(i, j);
  let b = num.substring(j, k);
  let sum = add(a, b);
  let n = sum.length - 1;
  console.log(k,k+n,sum, num.substring(k,k + n + 1));
  if( k + n > num.length - 1 || sum !== num.substring(k,k + n + 1)) return false
  if (k + n === num.length -1) return true
  return dfs(num, j, k, k + n + 1);
}
var add = function (a, b) {
  let n1 = a.length - 1;
  let n2 = b.length - 1;
  let flag = 0;
  let result = '';
  while(n1 >= 0|| n2 >= 0|| flag > 0) {
    let t1 = n1 >= 0 ? Number(a[n1--]) : 0 ;
    let t2 = n2 >= 0 ? Number(b[n2--]) : 0 ;
    result += String((t1 + t2 + flag) % 10);
    flag = (t1 + t2 + flag)>=10 ? 1 : 0;
  }
  console.log(a, b,result.split('').reverse().join(''))
  return result.split('').reverse().join('');
}
console.log(isAdditiveNumber('123'));