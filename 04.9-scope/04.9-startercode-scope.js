//GLOBAL VARIABLE- variables that are created outside of functions, and are visible anywhere in the file after they are declared

let firstName = "Rob";


sayHi()
//GLOBAL FUNCTION - functions that are created outside of other functions, and are visible anywhere in the file that they are declared in
function sayHi(){
  console.log("hi " + firstName)
}

//FUNCTIONS CREATE THEIR OWN SCOPE-> ANYTHING CREATED INSIDE A FUNCTION IS ONLY VISIBLE WITHIN THAT FUNCTION
function sayBye(){
  //goodbyemessage is declared inside of a function -> functional/local scope-> its only accessible within the function its defined in
  let goodbyemessage = "Peace out";
  console.log(goodbyemessage)
}


//LOOPS AND CONDITIONALS (BLOCKS) CREATE THEIR OWN SCOPE-> ANYTHING CREATED INSIDE A BLOCK IS ONLY VISIBLE WITHIN THAT BLOCK

// console.log(goodbyemessage)
let i = 0
for(let idx=i; idx<5; idx++){
  console.log(i)
}

console.log(i)

let messsage;
if(i === 0){
  message = "that is 0"
}

console.log(message)


