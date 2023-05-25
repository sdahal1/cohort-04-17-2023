//SANITY CHECK
// console.log("grrrrrr")
/*
NOTES:
- document.querySelector() --> to select the first element on the page that matches the query
- document.querySelectorAll() --> to select all elements on the page that matches the query

*/

const firstPark = document.querySelector("section")
// console.log(firstPark)

const firstDiv = document.querySelector("div")
// console.log(firstDiv)


// setTimeout(()=>{
//   firstPark.style.backgroundColor = "blue"
// },1000)

const allSections = document.querySelectorAll("section") //gets back an array looking thing called "node list"
// console.log(allSections[2])


// console.log(document.querySelector("#ganp"))

// 1. Select the first h1 selector
const firstHeader = document.querySelector("h1")
// console.log(firstHeader)


// 2. Select all h1 selectors
const allH1s = document.querySelectorAll("h1");

// 3. Select the first section with the class of park-display
const firstParkDisplay = document.querySelector(".park-display")

// 4. Select the first established date value
const firstDate = document.querySelector(".established-display .value")
console.log(firstDate)

// 5. Select all the established date values
const allDates = document.querySelectorAll(".established-display .value")

// 6. Select the first area value
const firstArea = document.querySelector(".area-display .value")
// console.log(firstArea)
// 6. Select all the area values
const allAreas = document.querySelectorAll(".area-display .value")

// 7. Write a statement that will find the Grand Canyon national park element by its ID.
const grandCanyon = document.querySelector("#gcnp")

// 8. Write a statement that will find the element containing the established date for the Grand Canyon national park.
const grandCanyonEstablishedDate = document.querySelector("#gcnp .established-display .value")
// console.log(grandCanyonEstablishedDate)

