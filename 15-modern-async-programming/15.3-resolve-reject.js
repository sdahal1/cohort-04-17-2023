// Lets look at examples from the learning module- USE CASE: WHAT IF YOU HAVE A FUNCTION THAT EITHER RETURNS A PROMISE OR RETURNS SYNC CODE BASED ON A CONDTION

const axios = require('axios');
const BASE_URL = "http://localhost:5001"

function updatePlayer(id, body){
  if(!id || !body) return Promise.reject("Id or Body is missing. Try again.");

  return axios.put(`${BASE_URL}/players/${id}`, body)
    .then((response)=>{
      console.log("updated player, response.data is this", response.data)
      return response.data;
    })
    .catch((err)=>{
      console.log("err.message", err.message)
      return err.message;
    })
}


const newUpdatedInfo =  {
  "name": "David",
  "team": "Warriors",
  "number_championships": 10,
  "state": "California"
}

// updatePlayer("CnLX3YF", newUpdatedInfo)
//   .then((updatedPlayerInfo)=>{
//     console.log(updatedPlayerInfo)
//   })
  // .then(console.log)

updatePlayer()
  .then((updatedPlayerInfo)=>{
    console.log(updatedPlayerInfo)
  })
  .catch((word)=>{
    console.log(word)
  })





// Promise.resolve("hello")
//   .then((value) => Promise.reject(value + " world"))
//   .then((result) => console.log("I said", result))
//   .catch((result) => console.log("They said: ", result));

Promise.resolve({ name: "Lebron" })
.then((value) => {
  return value.team ? Promise.reject(value) : Promise.resolve({ error: "Missing key." });
})
.then((result) => console.log("Success:", result))
.catch((result) => console.log("Failure:", result));

