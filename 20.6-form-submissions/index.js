// console.log("wazzaaap")


const submitHandler = (event)=>{
  //prevent the reload (thats the default behavior of a form submission event)
  event.preventDefault();
  console.log("submitted form!")

  //Option 1: collect the information from the form inputs individually
  // const nameInput = document.querySelector("#name-input")
  // const location = document.querySelector("#location-input")
  // const descriptionInput = document.querySelector("#description-input")
  // const establishedInput = document.querySelector("#established-input")
  // const areaInput = document.querySelector("#area-input")
  // const ratingInput = document.querySelector("#rating-input")

  // console.log(nameInput,location,descriptionInput,establishedInput,areaInput,ratingInput)


  //Option 2: collect the information from the form using FormData
  const formData = new FormData(event.target)


  
  //create a section element that looks like a park, but the information its populated with is info from the from
  const newParkSection = `<section class="park-display">
    <h2>${formData.get("name")}</h2>
    <div class="location-display">${formData.get("location")}</div>
    <div class="description-display">
      ${formData.get("description")}
    </div>
    <button class="rate-button" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established-display stat">
        <h3>Established</h3>
        <div class="value">${formData.get("established")}</div>
      </div>
      <div class="area-display stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}</div>
      </div>
      <div class="rating-display stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
    </div>
  </section>`

  //select the main element b/c it is the parent that will add the section as a child
  const main = document.querySelector("main")

  main.innerHTML += newParkSection

  // nameInput.value = "";
  // location.value = ""
  // descriptionInput.value = "";
  // establishedInput.value = "";
  // areaInput.value = "";
  // ratingInput.value = "";

  
}

const main =()=>{
  //select the form
  const form = document.querySelector("#park-form")
  //attach an event listener for a "submit" event to the form
  form.addEventListener("submit", submitHandler)
}

//only call the main function once the page is fully loaded
window.addEventListener("DOMContentLoaded",main)
