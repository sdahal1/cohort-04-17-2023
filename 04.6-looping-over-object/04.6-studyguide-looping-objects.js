const tournament1 = {
  "game 1": { homeTeam: 100, awayTeam: 85 },
  "game 2": { homeTeam: 98, awayTeam: 100 },
  "game 3": { homeTeam: 50, awayTeam: 51 },
  "game 4": { homeTeam: 10, awayTeam: 8 },
};

// Input
// Your input for both functions will be a tournament object

// calculateTotalPoints
//The calculateTotalPoints function will take in the tournament and return a total number of points scored from all teams in all games
function calculateTotalPoints(tournament){
  //extract all the values from the tournament object. Object.values() will return to us an array of values
  const values = Object.values(tournament)
  // console.log(values)

  let total = 0;

  for(let i = 0; i<values.length; i++){
    total = 0
    const eachGame = values[i];
    console.log(eachGame.homeTeam)
    total += eachGame.homeTeam + eachGame.awayTeam
  }

  return total
}

console.log(calculateTotalPoints(tournament1))



// printGameSummarys
// The printGameSummarys function will take in the tournament object of game objects and return a string, joined by \n, of the game results for each game

// For example:

function printGameSummarys(tournament){
  //create a accumulator string
  let result = "";
  //loop through tournament obj
  for(let key in tournament){
    // console.log('key is this',key) //game 1 or game 2
    const currentGame = tournament[key]
    let resultWord;
    // if(currentGame.homeTeam > currentGame.awayTeam){
    //   resultWord = 'beat'
    // }else{
    //   resultWord = 'lost to'
    // }
    const currentGameSummary = `${key}: The home team ${currentGame.homeTeam > currentGame.awayTeam ? 'beat' : 'lost to'} the away team ${currentGame.homeTeam}-${currentGame.awayTeam}\n`

    result += currentGameSummary;
    // console.log(currentGameSummary)
  }

  return result;
}

console.log(printGameSummarys(tournament1))
//printGameSummarys(tournament1); //> "Game 1: Home team beat the away team 100-85 \n Game 2: Home team lost to the away team 98-100 \n etc;"