/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0,
        ten = 0
    for (let i = 0; i < bills.length; i++) {
      let item = bills[i]
      switch (item) {
        case 5:
          five++
          break
        case 10:
          if (five > 0) {
            five--
            ten++
          } else {
            return false
          }
          break
        case 20:
          if (ten > 0 && five > 0) {
            ten--
            five--
          } else if (five > 2) {
            five -= 3
          } else {
            return false
          }
          break
      }
      if (i === bills.length - 1) return true
    }
};


console.log(lemonadeChange([[5,5,5,10,20]]))