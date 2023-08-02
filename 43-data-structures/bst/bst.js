const Queue = require("../queue/queue")

class BST {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // we should check if the tree is empty
        if (this.key === null) { //making a root node
            this.key = key;
            this.value = value;
        } else if (key < this.key) { //check if we need to go left
            //check if we can't go left
            if (!this.left) {
                //we need to set the new BST here
                this.left = new BST(key,value,this)
            } else {
                //there is a left child so make a recursive call
                this.left.insert(key, value)
            }
        } else { // check right
            if (this.right === null) {
                this.right = new BST(key,value,this)
            } else {
                this.right.insert(key, value)
            }
        }
        return this;
    }

    find(key) {
        //have we found our node
        if (key === this.key) {
            return [this.key, this.value];
        } else if (key < this.key && this.left) { //do i need to go left and can i go left
            return this.left.find(key) 
        } else if (key > this.key && this.right) {
            return this.right.find(key) 
        } else {
            return null;
        }
    }

    remove(key) {
        // if this is the node we have to remove
        if (key === this.key) {
            //check to see if it has two children
            if (this.left && this.right) {
                //find the max on the left or the min on the right
                let nodeToPromote = this.right._findMin();
                //let nodeToPromote = this.left._findMax();
                this.key = nodeToPromote.key;
                this.value = nodeToPromote.value;
                // remove the duplicate node
                nodeToPromote.remove(nodeToPromote.key);
            } else if (this.left) { //do you have one child
                this._replaceWith(this.left)
            } else if (this.right) {
                this._replaceWith(this.right)
            } else {
                this._replaceWith(null)
            }
        }
        //traverse
        else if (key < this.key && this.left) { // should i go to the left and go to the left
            this.left.remove(key); // going left 
        } else if (key > this.key && this.right) { // should i go to the right and go to the right
            this.right.remove(key); // going right
        } else {
            return null;
        }
    }

    _replaceWith(node) {
        //check the node we are replacing has a parent
        if (this.parent) {
            //current node to be replaced is on the left of the parent
            if (this.parent.left === this) {
                //tell the parent that the left is the node to replace with
                this.parent.left = node;
            } else if (this.parent.right === this) {
                this.parent.right = node;
            }
            // replace the replacements node parent refrence
            if (node) {
                node.parent = this.parent;
            }
        } else { // the node is a root node and we will just copy over properties
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else { //user passsed in null
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    //find min helper
    _findMin(node) {
        if (!this.left) { // if i cant go left aka left is null
            return this; //return me that node
        }
        return this.left._findMin(); // keep traversing right recursively
    }

    //find max helper
    _findMax(node) {
        if (!this.right) { // if i cant go right aka right is null
            return this; //return me that node
        }
        return this.right._findMax(); // keep traversing left recursively
    }

    //pre order we push the root node first
    dfsPreOrder(values = []) {
        //process
        values.push(this.value);
        //step left recursively
        if (this.left) {
            this.left.dfsPreOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPreOrder(values);
        }
        return values
    }

    //post order we push the root node at the end
    dfsPostOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsPostOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPostOrder(values);
        }
        //process
        values.push(this.value);
        return values
    }

    //traversal that gives us our tree sorted
    dfsInOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsInOrder(values);
        }
        //process
        values.push(this.value);
        //step right recursively
        if (this.right) {
            this.right.dfsInOrder(values);
        }
        return values
    }

    breadthFirstSearch(values = []) {
        //utilize q constant time for enQ dQ
        let queue = new Queue; //init our Q
        queue.enqueue(this); //put the root node in the Q
        let node = queue.dequeue(); // take out node to start traversing
        
        //Q   
        //V   [4,2,6,1,3,5,7]
        while (node) {
            // process
            values.push(node.value);
            //going to check the left
            if (node.left) { //this.left
                //put the left child in Q
                queue.enqueue(node.left)
            }
            //going to check the righ
            if (node.right) { //this.right
                //put the right child in Q
                queue.enqueue(node.right)
            }
            //move on the next node
            node = queue.dequeue();
        }
        return values;
    }
}


let BTS = new BST()
BTS.insert(4, 4).insert(2, 2).insert(6, 6).insert(1, 1).insert(3, 3).insert(5, 5).insert(7, 7)
// BTS.remove(4)
console.log(BTS.dfsPreOrder()); // [4,2,1,3,6,5,7]
console.log(BTS.dfsPostOrder()); // [1,3,2,5,7,6,4]
console.log(BTS.dfsInOrder()); // [1,2,3,4,5,6,7]
console.log(BTS.breadthFirstSearch());


/*
        4
    2       6
  1   3   5   7
*/
