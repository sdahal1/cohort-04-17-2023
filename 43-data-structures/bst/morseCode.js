class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function createMorseCodeTree() {
    let tree = new Node("START");

    // 1st Level
    tree.left = new Node("E");
    tree.right = new Node("T");

    // 2nd Level
    tree.left.left = new Node("I");
    tree.left.right = new Node("A");
    tree.right.left = new Node("N");
    tree.right.right = new Node("M");

    // 3rd Level
    tree.left.left.left = new Node("S");
    tree.left.left.right = new Node("U");
    tree.left.right.left = new Node("R");
    tree.left.right.right = new Node("W");

    tree.right.left.left = new Node("D");
    tree.right.left.right = new Node("K");
    tree.right.right.left = new Node("G");
    tree.right.right.right = new Node("O");

    // 4th Level
    tree.left.left.left.left = new Node("H");
    tree.left.left.left.right = new Node("V");
    tree.left.left.right.left = new Node("F");
    tree.left.left.right.right = new Node("");

    tree.left.right.left.left = new Node("L");
    tree.left.right.left.right = new Node("");
    tree.left.right.right.left = new Node("P");
    tree.left.right.right.right = new Node("J");

    tree.right.left.left.left = new Node("B");
    tree.right.left.left.right = new Node("X");
    tree.right.left.right.left = new Node("C");
    tree.right.left.right.right = new Node("Y");

    tree.right.right.left.left = new Node("Z");
    tree.right.right.left.right = new Node("Q");
    tree.right.right.right.left = new Node("");
    tree.right.right.right.right = new Node("");

    return tree;
}

let morseTree = createMorseCodeTree();
// console.log(morseTree);


function decodeMorse(message, tree, result = "", counter = 0) {
    let array = message.split(" ");
    if (counter === array.length) {
        return result;
    }
    let letter = array[counter];
    let node = tree;

    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === ".") {
            node = node.left;
        }
        if (letter[i] === "-") {
            node = node.right;
        }
    }
    result += node.value;
    counter++;
    return decodeMorse(message, tree, result, counter);
}

// curNode = morseTree
// loop thru the string
//  if dot
//      go left on curNode
//  if slash
//      go right on curNode
//  if space
//      go back to start

let message = ".... . .-.. .-.. --- .-- --- .-. .-.. -..";
let ayayron = "... . -. -.. .... . .-.. .--. --..--  ..  -.. --- -. -  ..- -. - .-. ... - .- -. -..  .-  - .... .. -. --.  .-  - .... .. -. --. .";
console.log(decodeMorse(message, morseTree)); // HELLOWORLD
