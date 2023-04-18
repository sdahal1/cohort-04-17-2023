console.log("wazzaaap world");

let nums = [23,24,8,3,6] //Elements: the actual values in the array
//Index (Plural: Indices)-> The positions in the array

let topArtists = [
  {name: "Drake", rating: 9},
  {name: "AI Drake", rating: 10},
  {name: "Taylor Swift", rating: 10},
  {name: "J Cole", rating: 9},
  {name: "Kendrick Lamar", rating: 8},
  {name: "Beatles", rating: 10}
]


function getRandomArtist(artists) { //artists is a parameter-> a placeholder variable that will store whatever is fed to the function
  let randomNum = Math.floor(Math.random()*artists.length)
  let randomArtist = artists[randomNum];
  return randomArtist
}

//the value of a function call is whatever that function call returns
// console.log(getRandomArtist(topArtists))

// console.log(topartists[0]) //reference error-> topartists is not defined

console.log(getRandomArtist(topArtists));