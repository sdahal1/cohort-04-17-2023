const moment = require('moment'); // require
const faker = require('faker');

console.log("running app");

console.log("The current date is: " + moment().format("MMM Do, YYYY")); //Apr 20th, 2023

console.log(faker.name.findName())


function generateSportsTeam(){
  //team name
  //team primary color
  //team secondary color
  //team city
  const fakeTeam = {
    teamName: faker.company.companyName(),
    primaryColor: faker.commerce.color(),
    secondaryColor: faker.commerce.color(),
    city: faker.address.city()
  }

  return fakeTeam
}


console.log(generateSportsTeam())