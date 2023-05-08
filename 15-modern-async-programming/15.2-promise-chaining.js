const axios = require("axios");
const BASE_URL = "http://localhost:5001";

const player = {
  name: "Obi One kanobie",
  team: "Lakers",
  number_championships: 4,
  state: "California"
}

// PROBLEM: WE NEED TO CHECK IF A PLAYER BY A GIVEN NAME EXISTS, IF THEY DO NOT, THEN WE WILL CREATE A PLAYER BY THAT NAME
function createIfNotExists(body={}){
  //check if someone exists with the name given name - GET
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      const arrayOfPlayers = response.data;
      const foundPlayer = arrayOfPlayers.find((playerObj)=>{
        return playerObj.name === body.name;
      })

      console.log('found player is this', foundPlayer);

      //if the player is found, throw an errror so we don't create duplicate players
      if(foundPlayer) throw "Player with that name exists, please try again"
      
      return axios.post(`${BASE_URL}/players`, body)
    })
    .then((response)=>{
      console.log("response.data from post request", response.data)
      return response.data;
    })
    .catch(err=>{
      console.log(err)
    })
  //if nobody is found with that name, create someone - POST
}

// createIfNotExists(player)

function updateIfExists(id, body) {
  //get request to get player by id
  return axios.get(`${BASE_URL}/players/${id}`)
    .then((response)=>{
      //if it gets to the .then() that means the player with the given id is found
      console.log("response.data from getting one player", response.data)
      return axios.put(`${BASE_URL}/players/${id}`,body)
    })
    .then((response)=>{
      console.log("response.data from put request", response.data)
    })
    .catch(err=>{
      console.log("error finding player", err.message)
    })
}

const newData = {
  name: "Obi One kanobie Son Run from the ones its fun",
  team: "Lakers",
  number_championships: 4,
  state: "California"
}
updateIfExists("100", newData)