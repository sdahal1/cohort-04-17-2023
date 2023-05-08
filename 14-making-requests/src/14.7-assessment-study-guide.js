const axios = require('axios');
const BASE_URL = 'http://localhost:5001'

//GET, POST, PUT, DELETE

//GET ALL PLAYERS
function findAllPlayers(){
  axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      console.log(response.data);
      return response.data
    })
    .catch(err=>{
      return err.message
    })
}

// findAllPlayers()
//     .then((word)=>{
//       console.log('word is', word)
//       foundData = word;
//   })

//GET ONE PLAYER BY ID
function findPlayerById(id){
// localhost:5001/players/6Z7ea6X
  return axios.get(`${BASE_URL}/players/${id}`)
    .then((response)=>{
      console.log("response.data is this", response.data)
      return response.data;
    })
    .catch((err)=>{
      console.log("err.message is this", err.message)
      return err.message
    })
}

// findPlayerById(5)

const newPlayerToAdd = {
  "name": "Brett",
  "team": "Nets",
  "number_championships": 7,
  "state": "New York"
}
//CREATE A NEW PLAYER
function createPlayer(body){
  return axios.post(`${BASE_URL}/players`,body)
    .then((response)=>{
      console.log('response.data after post request is this', response.data)
      return response.data
    })
    .catch((err)=>{
      console.log("err.message is this", err.message)
      return err.message
    })
} 

// createPlayer(newPlayerToAdd)

//UPDATE PLAYER BY ID

let newUpdatedInfo = {
  "name": "David",
  "team": "Bulls",
  "number_championships": 8,
  "state": "Illinois"
}
function updatePlayer(id,body){
  return axios.put(`${BASE_URL}/players/${id}`, body)
    .then((response)=>{
      console.log('response.data from update is this', response.data)
      return response.data;
    })
    .catch((err)=>{
      console.log("err.message is this", err.message)
      return err.message
    })
}

// updatePlayer("CnLX3YF",newUpdatedInfo)

//DELETE PLAYER BY ID
function deletePlayer(id){
  return axios.delete(`${BASE_URL}/players/${id}`)
  .then((response)=>{
    console.log('response.data from update is this', response.data)
    return response.data;
  })
  .catch((err)=>{
    console.log("err.message is this", err.message)
    return err.message
  })
}


// deletePlayer(1)