function findPlantById(plants, id) {
  let result = null;
  for (let i = 0; i < plants.length; i++) {
    let plant = plants[i];
    if (plant.id === id) {
      result = plant;
    }
  }
  return result;
}

function sayWazza(person){
  console.log(`wazzaaa ${person}`)
}




module.exports = {findPlantById, sayWazza}