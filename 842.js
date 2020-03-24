/**
 * @param {string} S
 * @return {number[]}
 */

var splitIntoFibonacci = function(num) {
  const MAX = Math.pow(2,31) - 1;
  var dfs = function(num, i, j, k) {
    if((num[i]=='0'&&j-i>1)||(num[j]=='0'&&k-j>1)) return false;
    let a = num.substring(i, j);
    let b = num.substring(j, k);
    let sum = Number(a)+Number(b);
    console.log(sum, sum > MAX)
    if (sum > MAX ) return false
    let n = sum.toString().length - 1;
    if( k + n > num.length - 1 || sum !== Number(num.substring(k,k + n + 1))) return false
    if (k + n === num.length -1) {
      arr.push(a,b,num.substring(k,k + n + 1))
      return true
    }
    arr.push(a);
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
    return result.split('').reverse().join('');
  }
  let arr = [];
  let i = 0;
  for (let j = i + 1; j <= num.length - 1; j++) {
    for (let k = j + 1; k <= num.length - 1; k++) {
      if (dfs.call(splitIntoFibonacci,num, i, j, k,arr)) return arr;
      else arr = []
    }
  }
  return arr;
};


console.log(splitIntoFibonacci('3611537383985343591834441270352104793375145479938855071433500231900737525076071514982402115895535257195564161509167334647108949738176284385285234123461518508746752631120827113919550237703163294909'))
console.log(Math.pow(2,31)-1)