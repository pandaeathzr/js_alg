/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // let i = 0;
  // let flag = 0;
  // for (const item of s) {
  //   while (i < t.length) {
  //     if (item === t[i]) {
  //       flag++;
  //       i++;
  //       break;
  //     }
  //     i++;
  //   }
  //   if(flag == s.length) break;
  // }
  // return flag == s.length;
  let key = 0;
  for (const item of s) {
    key = t.indexOf(item, key);
    if (key == -1) break;
    key++;
  }
  return !(key == -1);
};

console.log(isSubsequence('axc', 'ahjdkjbefksc'))