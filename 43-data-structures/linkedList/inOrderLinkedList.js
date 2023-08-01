// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position

// what if the linked list is empty

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(items) {
        this.head = null;

        items.forEach(item => this.push(item));
    }

    push(item) {
        if (this.head === null) {
            this.head = new Node(item, null);
            return;
        }

        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = new Node(item, null);
    }

    show() {
        let node = this.head;
        while (node !== null) {
            process.stdout.write(`${node.value}, `);
            node = node.next;
        }
        process.stdout.write("\n");
    }

    insertSorted(value) {
        //pseudo code here

        //for ascending linked list only
        //need to check if next value is greater than value given
        //if it is then stop and insert
        //if not keep traversing 
        let node = this.head;
        //if the value needs to be the first in the linked list
        if(node.value > value){
            this.head = new Node(value, node)
            return this;
        }
        while(node !== null){
            //if the next value in the linked list is greater than
            if(node.next.value > value){
                //temp variable to save the next for the node we're putting in
                let temp = node.next;
                //create new node as the next, send in the temp as new nodes next
                node.next = new Node(value, temp);
                //end looping
                break;
            }else{
                //continue looping through values
                node = node.next
            }
        }
    }
}
//                                  
let l = new LinkedList([1, 3, 5, 6, 7, 9]);
l.insertSorted(8);
l.show(); // 1, 3, 5, 6, 7, 8, 9

