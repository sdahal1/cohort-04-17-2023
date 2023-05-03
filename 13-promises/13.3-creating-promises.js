//use js to retrieve quotes from another file and display a random quote

const fs = require("fs"); //sync



// function readFile(fileName){
//   return new Promise((resolve, reject)=>{
//   //   //inside of the body of a promise, you will have async code that you want to be able to wait for

//     fs.readFile(fileName, (error, buffer) => { //async code
//       if (error) {
//         return reject(error);
//       }
//       const lines = buffer.toString().split("\n");
//       quote = lines[Math.floor(Math.random() * lines.length)];
//       resolve(quote);
//     });
//   })
// }

// console.log("Looking for a quote");

// readFile('quotes.txt')
//   .then((resolvedValue)=>{
//     //this is the code that will run only once the readFile function has completed it async process
//     console.log("The random quote is", resolvedValue)
//     console.log("eat the food")
//     console.log("get a carry out box")
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

// console.log("texting a friend")
// console.log("wash hands")
// console.log("check youtube")



function readRandomQuoteFromFile(fileName){
  return new Promise((resolve,reject)=>{ //async
    fs.readFile(fileName, (error, buffer) => { //async
      if (error) {
        return reject(error);
      }
      const lines = buffer.toString().split("\n");
      let quote = lines[Math.floor(Math.random() * lines.length)];
      return resolve(quote)
    });
  })
}



console.log("other tasks that can run before we get the quote, or before we get our food, while we are waiting for the async task to complete, or while we are waiting for our food to be ready")


function sayTheQuoteLikeYouAreAngry(quote){
  console.log(`Your quote is: ${quote}`.toUpperCase());
}

// readRandomQuoteFromFile("quotes.txt").then((resolvedValue)=>{
//   console.log("finished waitinng, now its time to use the found quote for our needs")
//   sayTheQuoteLikeYouAreAngry(resolvedValue); //sync
// })

readRandomQuoteFromFile("youngMulaBabay.txt")
  .then((resolvedQuote)=>{
    //the code in the .then's cb body will only run once the promise from readRandomQuoteFromFile() has resolved
    sayTheQuoteLikeYouAreAngry(resolvedQuote); //sync
  })
  .catch((error)=>{
    console.log("ooops error encountered here are the details", error)
  })

console.log("wzzaaapp app still up tho!")

/* 
PROMISES

WHY: WE USE PROMISES WHEN WE HAVE A SITUATION WHERE WE NEED TO WAIT FOR ASYNC CODE BEFORE RUNNING SOME OTHER CODE. MAYBE WE DEPEND ON SOME ASYNC CODE TO RETRIEVE US SOME DATA BEFOERE WE CAN USE THAT DATA.

HOW: 
  1. WRAP YOUR ASYNC CODE IN A PROMISE
  2. HAVE IT RESOLVE SOME VALUE THAT WE CAN EXTRACT ONE WE ARE DONE WAITING FOR IT (.THEN())

*/


