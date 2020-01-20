/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
var mergeKLists = function(lists) {
  // 自己构造链
  // let ArrayNode = []
  // for (const item of lists) {
  //   let head = new ListNode(item[0])
  //   let temp = head
  //   for (let i = 1; i < item.length; i++) {
  //     temp.next = new ListNode(item[i])
  //     temp = temp.next
  //   }
  //   ArrayNode.push(head)
  // }
  const mergeDoubleLists = (first, second) => {
    if (!second) return first
    if (!first) return second
    if (first.val < second.val) {
      first.next = mergeDoubleLists(first.next, second)
      return first
    } else {
      second.next = mergeDoubleLists(first, second.next)
      return second
    }
  }

  const mergeLists = (lists) => {
    
    let ArrayList = []
    for (let i = 0; i < lists.length; i = i + 2) {
      let node = mergeDoubleLists(lists[i], lists[i+1])
      ArrayList.push(node)
    }
    if (ArrayList.length === 1) return ArrayList[0]
    return mergeLists(ArrayList)
  }
  if(lists.length === 0) return null
  return mergeLists(lists)
};

// console.log(mergeKLists([]))