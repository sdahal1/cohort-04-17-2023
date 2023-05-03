const { welcome, goodbye, tell } = require("../utils/fortune-teller");

//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS!

// let result = welcome();

// result.then((resolvedVal)=>{
//   console.log(resolvedVal)
// })

// //WHAT EVER IS RETURNED IN ONE .THEN() CAN BE EXTRACTED ON ANOTHER .THEN() THAT'S CHAINED ON IT

// tell("should i freestyle a song?")
//   .then((resolvedFortune)=>{
//     console.log(resolvedFortune)
//     return "wazza"
//   })
//   .then((word)=>{
//     console.log(word)
//   })
//   .catch((rejectedMessage)=>{
//     console.log(rejectedMessage)
//   })

//   // .then(console.log)
//   // .catch(console.log)



const chatHistory = [];
//we will be greeted by the fortuen teller and record their greeting
//we will ask the fortune teller a question, record our question, and their answer

// welcome()
//   .then((welcomeMsg)=>{
//     chatHistory.push(welcomeMsg);
//     const question = "Should I go for a run today?"
//     chatHistory.push(question)
//     tell(question)
//       .then((fortuneMsg)=>{
//         chatHistory.push(fortuneMsg);
//         goodbye()
//         .then((goodbyeMsg)=>{
//           chatHistory.push(goodbyeMsg)
//           console.log(chatHistory)
//           })
//       })

//   })


//PROMISE CHAINING
// welcome()
//   .then((welcomeMsg)=>{
//     chatHistory.push(welcomeMsg);
//     const question = "Should I go for a run today?"
//     chatHistory.push(question)
//     return tell(question)
//   })
//   .then((fortuneMsg)=>{
//     chatHistory.push(fortuneMsg);
//     return goodbye()
//   })
//   .then((goodbyeMsg)=>{
//     chatHistory.push(goodbyeMsg)
//     console.log(chatHistory)
//     })
  
tell().then(()=>{
  console.log("got it!")
})