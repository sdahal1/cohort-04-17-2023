// import "./styles.css";
// console.log("wazzaa")
/**
  Write the addheadings() function here
*/

function addHeadings(){
  //select all the articles
  const allArticles = document.querySelectorAll("article");
  // console.log(allArticles)
  //go through all the articles and for each article do:
  allArticles.forEach((articleElement)=>{
    //give each article an h2 element- first create an h2 element
    const h2 = document.createElement("h2");
    h2.innerText = articleElement.innerText;
    console.log(h2)
    articleElement.innerText = "";
    articleElement.appendChild(h2)
  })
}

/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles(){ 
//   //select all the article elements on the page
//   //for each article element in the list of article elements do this:
//     //check if the current article element's innert text includes the word "Article". If so:
//       //add the class "article" to that element
//     //otherwise:
//       //add the class "tutorial" to that element
}

/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials(){
  //select the section with the class of 'articles' because this is the parent element that we will remove articles from - name it articlesSection

  //Create a new section element and give it the class 'tutorials' - name it tutorialsSection

  //select all article elements

  //for each article element, do:
    //if the article elements inner text contains the word "Tutorial"
      //remove it from the articlesSection 
      //put that article element into the tutorials section
}
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
