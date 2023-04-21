// FUNCTION DECLARATION
function ratingAsText(park) {
  // function body
  console.log("This is a function declaration.");
  return park.rating > 4 ? "Excellent!" : "Good";
  // end function body
}

const park1 = {
  name: "Arches",
  state: "Utah",
  rating: 5,
  geo: {
    lat: 38.68,
    lon: -109.57,
  },
};

// console.log(ratingAsText(park1));

// FUNCTION EXPRESSION- VARIABLE EQUALS TO A FUNCTION
const ratingAsText2 = function (park) {
  // function body
  console.log("This is a function expression.");
  return park.rating > 4 ? "Excellent!" : "Good";
  // end function body
};





// ARROW FUNCTION EXPRESSION-HOW DO WE CONVERT TO ARROW?
// ARROW REPLACES FUNCTION KEYWORD
const ratingAsText3 = (park) => {
  // function body
  console.log("This is a function declaration.");
  return park.rating > 4 ? "Excellent!" : "Good";
  // end function body
}


console.log(ratingAsText3(park1));




function getMula(name, amount){
  console.log("gettting the mula...");
  return `The person ${name} is getting this mula at the amount of ${amount}`
}

const getMula2 = (name, amount) => {
  console.log("gettting the mula...");
  return `The person ${name} is getting this mula at the amount of ${amount}`
}

// console.log(getMula2("Chedda bob", 25))


// NO () REQUIRED IF ONLY ONE PARAMETER
const getMula3 = name =>{
  console.log("gettting the mula...");
  return `The person ${name} is getting this mula at the amount of $100`
}

// IMPLICIT RETURN- WHEN THE ONLY LINE OF CODE INSIDE THE FUNCTION BODY IS A RETURN STATEMENT (OMIT THE {} AND THE RETURN)
const getMula4 = name => `The person ${name} is getting this mula at the amount of $100`

// console.log(getMula4("Chedda Bob"))



const ratingAsText5 = ({rating}) => {
  // function body
  console.log("This is a function declaration.");
  return rating > 4 ? "Excellent!" : "Good";
  // end function body
}

console.log(ratingAsText5(park1))


// POP QUIZ: CONVERT THESE TO ARROW FUNCTION
function getLocationCoordinates({ geo: { lat, lon } }, zoom = 10) {
  return `https://www.google.com/maps/@${lat},${lon},${zoom}z`;
}

const getLocationCoordinates = ({ geo: { lat, lon } }, zoom = 10) =>  `https://www.google.com/maps/@${lat},${lon},${zoom}z`;


const calculateCylinderVolume =  (radius, height) =>  Math.PI * radius ** 2 * height;
