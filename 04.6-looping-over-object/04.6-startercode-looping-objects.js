const player = {
  firstName: "Lebron",
  'last name': "James",
  age: 38,
  awards: ["MVP", "Finals MVP", "Points leader of all time", "GOAT"],
  team: {
    name: "Lakers",
    city: "Los Angeles",
    salary: 38000000
  }
}

// - OBJECTS HAVE KEY VALUE PAIRS (KEYS ARE ALSO PROPERTIES)

// - KEYS NEED TO BE IN STRINGS IF THEY HAVE A SPACE OR '-' IN IT

 
// - DOT NOTATION VS BRACKET NOTATION TO ACCESS VALUES IF WE KNOW THE EXACT NAME OF THE KEY:
console.log(player.age)
console.log(player['last name']) //bracket notation on last name b/c last name has a space
console.log(player.firstName)
console.log(player['firstName']) //if you know the property name, you can also use bracket notation but wrap the property in quotes
console.log(player.team.name)

// - DOT NOTATION VS BRACKET NOTATION TO ADD THE FOLLOWING KEYS: 'NUMBEROFCHAMPIONSHIPS', 'HOMETOWN': akron
player.numberOfChampionships = 4;
// player.hometown = "Akron"
player['hometown'] = "Akron"

// - DOT NOTATION VS BRACKET NOTATION TO UPDATE AN EXISTING KEY VALUE PAIR

player.age++
player.age = 28;
player['firstName'] = "King"
console.log(player)


// - VARIABLES GO IN BRACKET NOTATION- IF YOU HAVE A VARIABLE THAT REPERESENTS A PROPERTY NAME, THEN USE BRACKET NOTATION WITHOUT QUOTES
const x = "firstName";
console.log(player[x])

// function givePlayerStats(randomKeyName){
//   console.log(player[randomKeyName])
// }

// console.log(givePlayerStats("age"))


// - FOR IN LOOP TO LOOP OVER OBJECTS  (foreign object)
for(let key in player){
  console.log("key is this:", key)
  console.log("value at this key is this:", player[key])
}


// - OBJECT.KEYS() AND OBJECT.VALUES() GIVE US BACK ARRAYS THAT WE CAN LOOP THROUGH KEYS AND VALUES WITH
const allKeysFromPlayer = Object.keys(player)

const allValuesFromPlayer = Object.values(player)
// - FOR OF LOOP TO LOOP OVER ARRAYS

console.log(allKeysFromPlayer)
for(let i = 0; i< allKeysFromPlayer.length; i++){
  const eachKey = allKeysFromPlayer[i]
  console.log(player[eachKey])
}






