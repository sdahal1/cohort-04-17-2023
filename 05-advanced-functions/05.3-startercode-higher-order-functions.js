/* 
HIGHER ORDER FUNCTION-> 
  -FUNCTION THAT RETURNS A FUNCTION
  -FUNCTION THAT ACCEPTS A FUNCTION AS AN INPUT


.FOREACH()
  -Accepts a callback function as an input

arrayHere.forEach(callbackFunctionHere)
*/



// 1. GIVEN AN ARRAY OF FOOD ITEMS, PRINT EACH ITEM USING REGULAR FOR LOOP
const dishes = ["Calamari", "Pasta", "Lasagna", "Garlic Bread", "Salad", "Pizza"]
//                   0         1        2            3            4        5


function printItems(items=[]){
  for(let i = 0; i<items.length; i++){
    console.log(items[i]) //items[i] represents each element
  }
}

// printItems(dishes)


// 1.1 GIVEN AN ARRAY OF FOOD ITEMS, PRINT EACH ITEM USING .FOREACH()
function printItemsForEachWay(items=[]){
  items.forEach((element,idx)=>{
    console.log("element", element)
    console.log("idx", idx)
  })

}

// printItemsForEachWay(dishes)

// 2. USE FOREACH() TO LOOP THROUGH AN ARRAY OF OBJECTS AND SHOW THEIR DETAILS: "The rapper Drake earned 10000000 from rapping career with a fire level of 10."

const rappers = [
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "5",
    moneyEarnedFromRapping: 0
  }
];

function printRapperDetails(rappers=[]){
  rappers.forEach((rapperObj,idx)=>{
    console.log(`The rapper ${rapperObj.name} earned ${rapperObj.moneyEarnedFromRapping} from rapping career with a fire level of ${rapperObj.fireLevel}.`)
  })

  //THE DESTRUCTURED WAY
  // rappers.forEach(({name, moneyEarnedFromRapping,fireLevel},idx)=>{
  //   console.log(`The rapper ${name} earned ${moneyEarnedFromRapping} from rapping career with a fire level of ${fireLevel}.`)
  // })
}

// console.log(printRapperDetails(rappers))
/* 
GENERAL RULES OF .FOREACH()

.forEach() -> accepts a callbackfunction as its agrument. It will apply the callback function to each element in the array. 

-The first parameter in cb function represents current element in the loop
-The second parameter in cb function represents index number of current element
*/


// 3. USE FOREACH TO ADD UP THE FIRELEVELS OF THE ARTISTS ABOVE AND GIVE BACK THE TOTALFIRE AND AVERAGEFIRE

function calculateAverageFire(rappers=[]){
  let totalFire = 0;
  rappers.forEach((rapperObj)=>{
    totalFire = totalFire + Number(rapperObj.fireLevel)
  })

  return totalFire/rappers.length;
}

// console.log(calculateAverageFire(rappers))

// 4. USE FOREACH TO BUILD A STATEMENT FROM GIVEN DATA ABOVE "MY TOP RAPPERS LIST ARE: DRAKE, LUPE FIASCO, ROB D, AND THEY ARE ALL FUEGO.

function buildSentence(rappers=[]){
  let result = "MY TOP RAPPERS LIST ARE: ";
  rappers.forEach((rapperObj)=>{
    result+= `${rapperObj.name}, `;
  })

  result += "AND THEY ARE ALL FUEGO."

  return result;
}

console.log(buildSentence(rappers))

// 5. USE FOREACH TO LOG THE MONEYEARNEDFROMRAPPING FOR EACH ARTIST ABOVE AND FORMAT USING THE DOLLAR SIGN TO SHOW AMOUNT IN DOLLARS





