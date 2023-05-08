const axios = require("axios");
const BASE_URL = "http://localhost:5001";


/* 
PROMISE.ALL() -> takes an array of promises, and lets you run code that will only run once ALL the promises resolve
  - the response from promise.all is an array of full response object rather than one full response object
  - if even one promise in the promise array rejects, then they all will reject. It will hit the .catch() for every promise


PROMISE.ALLSETTLED()-> similar to PROMISE.ALL() except, any rejected promise will hit the .catch() and the resolved promises will hit the .then()
*/
function bulkFind(ids=[]){
  // ids.forEach(id=>{
  //   console.log("id is this", id)
  //   axios.get(`${BASE_URL}/players/${id}`)
  //     .then((response)=>{
  //       console.log(response.data)
  //     })
  // })

  const arrayOfPromises = ids.map((id)=>{
    return axios.get(`${BASE_URL}/players/${id}`)
  })

  return Promise.all(arrayOfPromises)
    .then(responseArray=>{
      console.log(responseArray[1].data) //response from promise.all() is an array of full responses
    })
    .catch(err=>{
      console.log(err.message)
    })

}

// bulkFind([2,3,4,50,7])

function bulkDelete(ids=[]) {


  //TRANSFORM ARRAY OF IDS TO ARRAY OF PROMISES (DELETE REQUESTS)
  const arrayOfPromises = ids.map((id)=>{
    return axios.delete(`${BASE_URL}/players/${id}`)
      .then(response=>{
        return id
      })
  })

  return Promise.all(arrayOfPromises)
}

bulkDelete([2,3,4,5,7])
  .then(response=>{
    console.log(response)
  })
