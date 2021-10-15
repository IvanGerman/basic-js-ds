const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {

    this.queue = {};
  
  }


  getUnderlyingList() {
     
    return this.queue;

  }

  enqueue(value) {
     
    if ( Object.keys(this.queue).length === 0 ) {   // if a Queue instance is an empty object {}

      this.queue = new ListNode(value);

    } else {

      let changingQueueNode = this.queue;

      while ( changingQueueNode.next ) {

        changingQueueNode = changingQueueNode.next;        // executes for all ListNodes, except the case when this.  queue.next = null,                        
      }; // this way we are getting the last ListNode of the queue

      changingQueueNode.next = new ListNode(value);

    }

  }

  dequeue() {
    
    let topElementOfTheQueue = this.queue.value;
    this.queue = this.queue.next; // first ListNode is 'deleted' / replaced with second ListNode
    return topElementOfTheQueue;

  }

}
