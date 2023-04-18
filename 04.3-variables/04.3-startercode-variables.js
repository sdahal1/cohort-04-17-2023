// var -> don't use it anymore
// var name = "Rob"
// var favHobby = "Bball"

// declare variables using 'let' and 'const from now on. use 'let' for variables that can be reassigned
let winner = "Dallen";

let randomNum = Math.random();

if(randomNum < 0.5){
  winner = "No longer Dallen"
}

// console.log('winner is this: ', winner, randomNum)





// Using let in for loops

// for(let i = 0; i<10; i++){
//   console.log(i)
// }




// const is only for variables you don't want to be able to reassign
const numDaysInWeek = 7;

// numDaysInWeek = 9 // cannot reassign a const variable



// using const with arrays (push, pop, update at an index)

const favToppings = ["Pineapple", "Chicken", "onion", "ham", "Jalapeneos", "bacon", "pepperoni", "mushrooms"];
//you can update an index number still
favToppings[6] = "Uncured Pepperoni";
favToppings.push("Cheese") //insert at end
favToppings.pop() //remove end element
favToppings.unshift("Crab") //insert at front
favToppings.shift() //remove at front

console.log(favToppings)



// using const with objects ()

const greatestBallerOfAllTime = {name: "Lebron James", numChampionships: 4}

//cannot reassign the object that was declared using const
// greatestBallerOfAllTime = {name: "Patrick Beverly", numChampionships: 0}


// can add new key value pairs to the object
greatestBallerOfAllTime.totalPoints = 39000


greatestBallerOfAllTime.name = "MJ"
console.log(greatestBallerOfAllTime)

/* 
MAIN TAKEAWAYS:

1. Use const primarily; this will be your go-to. Moving forward, you'll want to declare most of your variables using const.

2. Use let if you need to reassign a value. This is a common requirement during for loops and sometimes with if statements.

3. Don't use var unless necessary, like when working in a codebase that uses it. However, that will likely only happen in the distant future. As mentioned above, there are other reasons to use (and to not use) var, but those will be covered in a different lesson. For now, just avoid it.

*/



