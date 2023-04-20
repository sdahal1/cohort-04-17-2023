
/* 
write a function named updatePlayer() that will accept a team name like "Celtics" and a player object like this: 
let player1 = {
    firstName: "Lebron",
    lastName: "James",
    points: 32000,
    teams: ["Cavs", "Heat"]
  }


And it will return a new object like this containing the team name added to the list of teams

{
  fullName: 'Lebron James',
  points: 32000,
  jerseyNumber: 6,
  teams: [ 'Cavs', 'Heat', 'Lakers' ]
}

*/
const player1 = {
  firstName: "Lebron",
  lastName: "James",
  points: 32000,
  jerseyNumber: 6,
  teams: ["Cavs", "Heat"]
}

const player2 = {
  firstName: "Chris",
  lastName: "Paul",
  points: 1800,
  jerseyNumber: 3,
  teams: ["Hornets", "Clippers", "Rockets", "Suns"]
}

function updatePlayer(teamName, playerObj) {
	//can't use player.points, or player.jerseyNumber in the answer
  const {firstName,lastName,points,jerseyNumber,teams} = playerObj
  const result = {
    fullName: `${firstName} ${lastName}`,
    points: points,
    jerseyNumber: jerseyNumber,
    // teams: [...teams, teamName]
    teams: [...teams, teamName]
  }
  
  //return a new object
  return result;
}

console.log(updatePlayer("Lakers", player1))


/* 

Write a function named joinTeams() that will take two different player objects and will return an array containing the teams of both players like this: [ 'Cavs', 'Heat', 'Hornets', 'Clippers', 'Rockets', 'Suns' ]
*/

function joinTeams(playerA, playerB) {
    return [...playerA.teams, ...playerB.teams]
}





console.log(joinTeams(player1, player2))
