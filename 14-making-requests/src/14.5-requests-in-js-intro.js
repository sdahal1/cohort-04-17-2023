const axios = require("axios");


// MAKE AN API CALL TO THE CRYPTOCURRENCY SERVER AND LOG ALL THE COINS
function getCryptoCoins(){
  
  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response)=>{
      // console.log("Got something back from the api, here it is", response.data)
      const arrayOfCoins = response.data;
      arrayOfCoins.sort((elemA, elemB)=>{
        return elemA.price_change_percentage_24h - elemB.price_change_percentage_24h
      })
      console.log(arrayOfCoins.slice(0,3))
    })
    .catch((error)=>{
      console.log("oops, something happend", error.message)
    })
}

getCryptoCoins()

// MAKE AN API CALL TO THE POKEMON API AND LOG ALL THE POKEMON
function getPokemon(){
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response)=>{
      console.log("response is this", response.data.results)
    })
    .catch((err)=>{
      console.log("errors", err.message)
    })
}

// getPokemon()


// MAKE AN API CALL TO OUR PLAYERS SERVER (LOCALLY RUN SERVER) AND LOG ALL THE PLAYERS
function getAllPlayers(){
  // http://localhost:5001/players
  axios.get("http://localhost:5001/players")
    .then(({data})=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log("err", err.message)
    })
}

// getAllPlayers()


// MAKE AN API CALL TO OUR PLAYERS SERVER AND SHOW ONLY THE NAMES OF THE PLAYERS IN AN ARRAY
function getPlayerNamesOnly(){
  axios.get("http://localhost:5001/players")
    .then((response)=>{
      // response.data.forEach((playerObj)=>{
      //   console.log(playerObj.name)
      // })
      const arrayOfNames = response.data.map((playerObj)=>{
        return playerObj.name
      })
      console.log(arrayOfNames)

    })
}

// getPlayerNamesOnly()

// MAKE AN API CALL TO OUR PLAYERS SERVER AND SHOW ONLY PLAYERS FROM A GIVEN STATE
function getPlayersByState(stateName){
  axios.get("http://localhost:5001/players")
  .then((response)=>{
   const playersArray = response.data;
   const playersFromCali = playersArray.filter((playerObj)=>{
    return playerObj.state === stateName
   })
   console.log(playersFromCali);
  })
}


// getPlayersByState("California");

