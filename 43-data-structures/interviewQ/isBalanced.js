// Write a JavaScript function called isBalanced(expression) that takes a string expression as input and returns a boolean value. 
// The function should return true if the expression is balanced, and false otherwise.

function isBalanced(expression) {
    // The implementation of the function using a stack will be here
    const closing = [')', ']', '}'];
    const opening = ['(', '[', '{'];
    
    let needsToClose = [];
    for(let i = 0; i < expression.length; i++){
        // if check for closing bracket as the first
        //check if char is a bracket
        let indexOfOpening = opening.indexOf(expression[i]);
        let indexOfClosing = closing.indexOf(expression[i]);
        //check if is opening
        if(indexOfOpening !== -1){
            needsToClose.push(closing[indexOfOpening]);
        }else if(indexOfClosing !== -1 && needsToClose[needsToClose.length-1] === closing[indexOfClosing]){
            needsToClose.pop();
            continue;
        }
    }
    
    if(needsToClose.length === 0){
        return true;
    }else{
        return false
    }
}
  
console.log(isBalanced("(a + b)")); // Expected output: true
console.log(isBalanced("((a + b)")); // Expected output: false
console.log(isBalanced("{[a + b]}")); // Expected output: true
console.log(isBalanced("{[a + b)")); // Expected output: false
console.log(isBalanced("a + b)")); // Expected output: false
console.log(isBalanced("[a + b}")); // Expected output: false

//  not valid )(, [}, ([)], {()

