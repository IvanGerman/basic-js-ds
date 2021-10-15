const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.node = null;  
  }

  root() {
    return this.node
  }

  add( data ) {

    if ( this.node === null ) {
      this.node = new Node(data);
      return;
    };

    let chosenNode = this.node;
    // go through the nodes of the class instance
    
    while (true) {
      // 2 cases below will work when we are on the extreme/last node of the tree
      if ( chosenNode.left === null && chosenNode.data > data ) {
         chosenNode.left = new Node(data);
        return;
      } else if ( chosenNode.right === null && chosenNode.data < data ) {
         chosenNode.right = new Node(data);
        return;
      }
      // if there is more than just a parent node:
      if ( chosenNode.data < data) {
        chosenNode =  chosenNode.right;  
      } else {
        chosenNode =  chosenNode.left; 
      };
    }
  }

  find(data) {

    let chosenNode = this.node;

    if ( chosenNode === undefined ) { return null };

    // go through the nodes of the class instance
    while ( chosenNode ) { 

      if (data > chosenNode.data) {

        chosenNode = chosenNode.right;

      } else if (data < chosenNode.data) {

        chosenNode = chosenNode.left;

      } else if (data == chosenNode.data) {

        return chosenNode;

      }
    }

    return null;
  }

  has(data) {

    return this.find(data) !== null;

  }

  remove(data) {
    
    if ( this.has(data) ) {

      this.node = replaceWithChild( this.node, data ); //change parent node property value

      function replaceWithChild( node, data ) { 

        if ( node.data == data ) {                          // if there is just

          if (node.right === null && node.left === null) {  // a root node only

            return null;

          } else if ( node.left === null ) {  // if there is a right node too

            node = node.right;
            return node;   // parent node will be replaced with 'return node'= right child node

          } else if (node.right === null) { // if there is a left node too

            node = node.left; // left node got parent node now
            return node;     // parent node will be replaced with 'return node' = left child node

          } else { // if node.right != null & node.left != null, both child nodes are there
                   
            if (node.right.left == null) { // if node.right left child does not exists

              node.data = node.right.data; // parent node disappear and on his place now is the right child
              node.right = node.right.right; // 'pool up' right childs
              return node;

            }
            // if node.right left child does exists:
            let smallestLeftChild = findSmallestLeftChild(node.right);
            node = replaceWithChild(node, smallestLeftChild.data);// removing the smallest left child
            node.data = smallestLeftChild.data; // the smallest left child go on the place of parent node

            function findSmallestLeftChild(node) { // searching for the smallest left child of the 
                                                   // parent right child branch

              while (node.left) {

                node = node.left;   // 'pool up' left childs

              };

              return node;
            };

            return node;
          };
        };

        if (node.data < data) {

          node.right = replaceWithChild(node.right, data);
          return node;

        } else {

          node.left = replaceWithChild(node.left, data);
          return node;

        };
      };
    };
  }

  min() {

    let chosenNode = this.node;

    while ( chosenNode.left ) {

      chosenNode = chosenNode.left;

    }
    return chosenNode.data;
  }

  max() {

    let chosenNode = this.node;

    while ( chosenNode.right ) {

      chosenNode = chosenNode.right;

    }
    return chosenNode.data;
  }

}