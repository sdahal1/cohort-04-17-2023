//importing is done by "require()"
const {findPlantById,sayWazza} = require('./functions')


let plants = [
  { id: 1, name: "Garden Rocket Arugula" },
  { id: 2, name: "Watercress" },
  { id: 3, name: "Royal Rose Radicchio" },
];

console.log(findPlantById(plants,2))
console.log(sayWazza("Rob"))
