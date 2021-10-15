const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  
  let copyOfLinkedList = l;
  // "cut off" the first listNode if his value = k
  if ( l.value === k ) {

    l = l.next;

  };
  // go through the ListNodes of the linked list
  while ( copyOfLinkedList.next ) { 

    if ( copyOfLinkedList.next.value === k ) {  // if node value = k:

      copyOfLinkedList.next = copyOfLinkedList.next.next; // change the link to over next node, node with value=k is "deleted"
    };

    copyOfLinkedList = copyOfLinkedList.next;  // copyOfLinkedList and l refer to the same object, so changing copyOfLinkedList we change l too
  };
  
  return l;
  
}
