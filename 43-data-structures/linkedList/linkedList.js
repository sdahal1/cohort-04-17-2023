class Node {
    constructor(value, next = null) { //constructor; how to make our objects
        //properties of our objects
        this.value = value;
        this.next = next;
    }
    //methods of our objects
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    //methods
    //adding to front
    addToFront(value) {
        let newNode = new Node(value);
        if ( this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        return this;
    }
    
    //finding
    find(isMatch) { // (node, index) => node.value === "11"
        let index = 0;
        let node = this.head//our node that will traverse the list
        while (node) {
            //if we find what we are looking for
            if ( isMatch(node, index) ) {
                return node;
            }
            //continue searching
            index++;
            //tell our node to be the next node
            // 11 | --> 7 | --> 13 | --> o
            node = node.next
        }
    }

    //inserting in the middle or end
    insert(value, isMatch) {
        if (this.head) { //check to see if not empty
            //determine where to insert  
            //find the node to insert after
            let previousNode = this.find(isMatch);
            //if we didnt find the node
            if (!previousNode) throw new Error("no node silly");
            let newNode = new Node(64, previousNode.next);
            previousNode.next = newNode;
        } else {
            this.addToFront(value) //call if sll is empty
        }
    }

}

let sll = new LinkedList()
sll.addToFront(7).addToFront(11).addToFront(13)
console.log(sll);
