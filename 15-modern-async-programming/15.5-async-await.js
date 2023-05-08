const axios = require('axios');
const BASE_URL = 'http://localhost:5001'

//GET, POST, PUT, DELETE

//GET ALL PLAYERS
async function findAllPlayers(){
  try{
    const response = await axios.get(`${BASE_URL}/players`) //async
    // console.log(response.data); //sync
    return response.data
  }catch(err){
    // console.log(err.message);
    return err.message
  }
}

// const findAllPlayers = async ()=>{
//   try{
//     const response = await axios.get(`${BASE_URL}/players`) //async
//     // console.log(response.data); //sync
//     return response.data
//   }catch(err){
//     // console.log(err.message);
//     return err.message
//   }
// }

// findAllPlayers()
//     .then((word)=>{
//       console.log('word is', word)
//       foundData = word;
//     })
// console.log('hi')

//GET ONE PLAYER BY ID
async function findPlayerById(id){
// localhost:5001/players/6Z7ea6X
  try{
    const response = await axios.get(`${BASE_URL}/players/${id}`)
    return response.data;
  }catch(err){
    return err.message;
  }
}

// findPlayerById(5)

const newPlayerToAdd = {
  "name": "Brett",
  "team": "Nets",
  "number_championships": 7,
  "state": "New York"
}
//CREATE A NEW PLAYER
async function createPlayer(body){
  try{
    const response =  await axios.post(`${BASE_URL}/players`,body)
    return response.data;
    // return await axios.post(`${BASE_URL}/players`,body).data
    // return (axios.post(`${BASE_URL}/players`, body));
  }catch(err){
    console.log("err.message is this", err.message)
    return err.message
  }
}

createPlayer(newPlayerToAdd)
  .then(info=>{
    console.log(info)
  })

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