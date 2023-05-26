// console.log("robbing a bank")

function favoritePark(){
  //select the first button on the page
  const allButtons = document.querySelectorAll("button");

  allButtons.forEach((button)=>{
    //tell the element that it needs to listen for an event (click, key press, etc;)
    button.addEventListener("click", (event)=>{
      //event.target gives you the element that the event happened on
      // console.log("button is click", event.target.parentNode);
      const parentSectionOfClickedButton = event.target.parentNode;
      //change the background color of the button's section to be yellow
      if(parentSectionOfClickedButton.style.backgroundColor === "yellow"){
        parentSectionOfClickedButton.style.backgroundColor = "white"
      }else{
        parentSectionOfClickedButton.style.backgroundColor = "yellow";
      }
    })

  })
}

favoritePark()


// SORTER CODE BELOW


/*
//select the name-sorter link
const nameSorterLink = document.querySelector("#name-sorter");

//when nameSorterLink is clicked, do something
nameSorterLink.addEventListener("click", (event)=>{
  event.preventDefault() //prevent the anchor tag click event from refreshing the page

  //select the main element which contains the sections
  const main = document.querySelector("main");
  //select all the park sections
  const allSections = document.querySelectorAll("section.park-display");
  //convert the parkSections nodelist to an array so we can do the .sort() method
  const arrayOfAllSection = Array.from(allSections)
  // console.log(arrayOfAllSection)

  //sort the array
  arrayOfAllSection.sort((sectionA, sectionB)=>{
    const sectionAName = sectionA.querySelector("h2").innerText;
    const sectionBName = sectionB.querySelector("h2").innerText;

    if(sectionAName < sectionBName) {
      return -1;
    }else{
      return 1;
    }

  })

  //clear out the main element (empty the inner text or html?)
  main.innerHTML = "";
  //insert the sorted sections into the main element
  arrayOfAllSection.forEach((section)=>{
    main.appendChild(section);
  })
})

*/


const sortByName = (sectionA, sectionB)=>{
  const sectionAName = sectionA.querySelector("h2").innerText;
  const sectionBName = sectionB.querySelector("h2").innerText;

  if(sectionAName < sectionBName) {
    return -1;
  }else{
    return 1;
  }
}

const sortByRating = (sectionA, sectionB)=>{
  const sectionARating = Number(sectionA.querySelector(".rating-display .value").innerText);
  const sectionBRating = Number(sectionB.querySelector(".rating-display .value").innerText);

  return sectionBRating - sectionARating;
}

const nameSorterClickHandler = (event)=>{
  event.preventDefault() //prevent the anchor tag click event from refreshing the page

  //select the main element which contains the sections
  const main = document.querySelector("main");
  //select all the park sections
  const allSections = document.querySelectorAll("section.park-display");
  //convert the parkSections nodelist to an array so we can do the .sort() method
  const arrayOfAllSection = Array.from(allSections)
  // console.log(arrayOfAllSection)

  //sort the array
  arrayOfAllSection.sort(sortByName)

   //clear out the main element (empty the inner text or html?)
   main.innerHTML = "";
   //insert the sorted sections into the main element
   arrayOfAllSection.forEach((section)=>{
     main.appendChild(section);
   })
}


const ratingSorterClickHandler = (event)=>{
  event.preventDefault() //prevent the anchor tag click event from refreshing the page

  //select the main element which contains the sections
  const main = document.querySelector("main");
  //select all the park sections
  const allSections = document.querySelectorAll("section.park-display");
  //convert the parkSections nodelist to an array so we can do the .sort() method
  const arrayOfAllSection = Array.from(allSections)
  // console.log(arrayOfAllSection)

  //sort the array
  arrayOfAllSection.sort(sortByRating)

   //clear out the main element (empty the inner text or html?)
   main.innerHTML = "";
   //insert the sorted sections into the main element
   arrayOfAllSection.forEach((section)=>{
     main.appendChild(section);
   })
}


//purpose of main() is to attach event listeners to name sorter and rating sorter
function main(){
  const nameSorterLink = document.querySelector("#name-sorter");
  nameSorterLink.addEventListener("click",nameSorterClickHandler)

  const ratingSorterLink = document.querySelector("#rating-sorter");
  ratingSorterLink.addEventListener("click",ratingSorterClickHandler)
}


window.addEventListener("DOMContentLoaded", main)