/* 
PRIMITIVE DATA TYPES- PASSED BY VALUE:
String
Number
Boolean
Undefined
Null



REFERENCE DATA TYPES- PASSED BY REFERENCE:
Arrays
Objects
Functions


METAPHOR TIME!-> SHARED APPETIZER (FRIES) VS INDIVIDUAL FRIES
  SHARED APPETIZER-> REFERENCE TYPE
  INDIVIDUAL FRIES-> PRIMITIVE TYPE

*/






// WHEN A PRIMITIVE DATA TYPE IS ASSIGNED TO A VARIABLE, THAT VARIABLE GETS ITS OWN COPY
let num1 = 5; //STORES THE VALUE 5
let num2 = num1; //num2 is also set to the VALUE 5,

//BUT NUM2 AND NUM1 ARE SEPARATE COPIES. SO AFFECTING NUM2 WILL NOT AFFECT NUM1 or vice versa
num1--
// console.log(num1, num2)


let word1 = "hi"
let word2 = word1;

word1+= "there friend!"

// console.log(word1, word2)








// WHEN A REFERENCE DATA TYPE IS ASSIGNED TO A VARIABLE, THAT VARIABLE JUST POINTS TO THAT DATA IN MEMORY (IT REFERENCES THAT DATA RATHER THAN MAKING A SEPARATE COPY)

let sharedAppetizer = ["a", "b", "c"]
let anothaOne = sharedAppetizer

sharedAppetizer.pop()

console.log(sharedAppetizer, anothaOne)

// LETS SEE WHAT HAPPENS IN FUNCTIONS WITH PRIMITIVE TYPES AND REFERNCE TYPES
const x = [1,2,3,4]

function addToend(arr){
  arr.push(5)
}

addToend(x);
console.log(x)


// let a = [10]
// let b = a;
// a = 0;
// console.log(b)



let color = {name:"blue", hex:"3423"};
let a = {color: color};
let b = a;
color.hex = "who dis";
console.log(b)

/* 
color= {name:"blue", hex:"who dis"};
a = {color: {name:"blue", hex:"who dis"}}
b = a

*/