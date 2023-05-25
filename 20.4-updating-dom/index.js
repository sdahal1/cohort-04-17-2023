
function shortenDescriptions(){
  //select all the descriptions
  const allDescriptions = document.querySelectorAll(".description-display")
  // console.log("all descriptions", allDescriptions)
  //foreach description: do
  allDescriptions.forEach((element)=>{
    //if the description elements innertext is more than 250 characters, 
    if(element.innerText.length > 250){
      //shorten it and add "..." at the end
      const first250Chars = element.innerText.slice(0,250)

      //update the element's innertext to be the shortened version
      element.innerText = first250Chars;
      // element.innerHTML += "<a href='#'>...</a>"
      element.innerHTML += "<button>Show more</button>"
    }
  })
}

function boldHighRatings(){
  //select all the ratings
  const allRatings = document.querySelectorAll(".rating-display .value");
  // console.log(allRatings)
  //for each rating do:
  allRatings.forEach((ratingDiv)=>{
    //check if the current rating has a value of over 4.7. If it does, change its style to be bold
    if(Number(ratingDiv.innerText)>4.7){
      // ratingDiv.style.color = "red";
      // ratingDiv.style.fontSize = "30px";
      // ratingDiv.style.backgroundColor = "yellow";
      // ratingDiv.style.fontWeight = "900"
      ratingDiv.classList.add("high-rating")
      // ratingDiv.classList.remove("value")
    }
  })
}

function addNewElement(){
  //select all the parks and get the number of parks found
  const numParks = document.querySelectorAll(".park-display").length;
  // console.log(numParks)

  //create an element h2
  const h2Element = document.createElement("h2");
  //give the element some content
  h2Element.innerText = `${numParks} parks for your travel time`;
  h2Element.classList.add("header-statement")
  // console.log(h2Element)

  //insert the element to the page (first select a location where i want to put it)
  const header = document.querySelector("header");
  //add the element we want to insert to the page as a child to the element that will add this new H2
  header.appendChild(h2Element);
}


function removeElement(){
  //find the parent of the thing to remove
  const parent = document.querySelector(".area-display")

  //find the element to remove
  const elementToRemove = document.querySelector(".area-display .value")

  parent.removeChild(elementToRemove)
}

function removePark(){
  const parent = document.querySelector("main");

  const allParks = document.querySelectorAll(".park-display");
  const elementToRemove = allParks[2];

  parent.removeChild(elementToRemove)
}

// const firstSection = document.querySelector("section");
// console.log(firstSection.innerText)
// console.log(firstSection.innerHTML)
shortenDescriptions();
boldHighRatings();
addNewElement();
removeElement();
removePark();