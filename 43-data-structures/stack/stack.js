/*
A stack is a data structure that stores a collection of elements and follows the Last In First Out (LIFO) 
principle. This means that the last element added to the stack will be the first one to be removed.

Here is a simple text diagram of a stack:
|36|   <--- Top of stack
|24|
|16|
|12|
|11|   <--- Bottom of stack

Each box in the diagram represents an element in the stack. The top of the stack is the end where elements are added and removed, 
and the bottom of the stack is where elements are stored.

Operations that can be performed on a stack include:

push: adding an element to the top of the stack
pop: removing the top element from the stack
peek: looking at the top element of the stack without removing it
isEmpty: checking if the stack is empty
For example, if we perform the following operations on an empty stack:

push(1)
push(2)
push(3)

would give us
|3|   <--- Top of stack
|2|
|1|   <--- Bottom of stack

pop()

would give us
|2|   <--- Top of stack
|1|   <--- Bottom of stack
*/


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null; // LIFO
    }

    //adding a value to a stack
    push(value) {
        //create a new node
        let newNode = new Node(value, this.top);
        // newNode.next = this.top;
        this.top = newNode;

        return this;
    }
    //removing a value from a stack
    pop() {
        //put the top node in a variable
        let popped = this.top;
        //asking if stack is empty
        if (popped) {
            this.top = this.top.next; //make the next node the top
            return popped.value;
        }
        //return error
        return this;
    }
}