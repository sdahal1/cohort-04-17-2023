//Concept: all strings are immutable (You can't update the existing characters)
let cool_quote = "how YOU DO anyTHInG is How You dO eVERyThING"
//can't modify existing characters in a string
cool_quote[0] = "H"


//can add to the end though
cool_quote += "!!!! Im motivated now. Yay."

// console.log(cool_quote)

// Strings have indices



// You can get length of a string

// console.log(cool_quote.length)



// You can loop through a string

// for(let idx = 0; idx < cool_quote.length; idx++){
//   console.log(cool_quote[idx])
// }



// lets create the sentence case function
// function sentenceCase(inputString){
//   //create new string for result
//   let result = inputString[0].toUpperCase()
//   for(let i = 1; i< inputString.length; i++){
//     result += inputString[i].toLowerCase()
//   }
//   return result;

// }

// console.log(sentenceCase("waZZAAAP though?")) //Wazzaaap though?


// the substring() method: Gives you a portion of a string
const categoryOfDish = "Thai Food";
// console.log(categoryOfDish.substring(0,4))



// lets do sentence case function using the substring method!
function sentenceCase(inputString){
  //create new string for result
  return inputString[0].toUpperCase() + inputString.substring(1).toLowerCase()
  
}

// console.log(sentenceCase("waZZAAAP though?")) //Wazzaaap though?




// Splitting a string: Split string at each indicated character and put it into an array: .split()

const sentence = "Neo is the main character in some movie, named Matrix, or something like that."

const splitUpSentence = sentence.split(" ")

// console.log(splitUpSentence)

// Joining elements from an array into a string: .join()

// console.log(splitUpSentence.join(" "))

// Explain how titelize works in platform using split and join

function titleize(title) {
  const words = title.split(" ");
  console.log(words)
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const capitalized = sentenceCase(words[i]);
    result.push(capitalized);
  }
  console.log(result)
  return result.join(" ");
}

// titleize("the light FANTASTIC"); //> "The Light Fantastic"


// Template literals
const famousPerson = "Kobe";
const activity = "holla"
const place = "Pyramid"
const noun = "mummy"
const funnyName = "Tedward"


const finalSentence = `${famousPerson} wants to ${activity} the ${noun} from the ${place}.\n${famousPerson} will rename themselve to ${funnyName}`
// const finalSentence2 = famousPerson + " " +"wants to" + activity + " the " ${noun} from the ${place}"


console.log(finalSentence)
// Escaping strings



// Study guide time!

