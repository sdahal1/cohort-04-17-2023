// import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  
  //select all buttons with the class "expand_button"
  const allButtons = document.querySelectorAll(".expand_button");
  //foreach button from all buttons list, attach an event listener for a "click" event. Event handler will need to do the following:
  allButtons.forEach((button)=>{
    button.addEventListener("click", (event)=>{
      // Find the article in which the button that was clicked belongs.
      // const article = event.target.parentNode.parentNode.parentNode;
      const article = event.target.closest("article")
      const articleBody = article.querySelector(".article_body")
      //If the text on the button that was clicked is not a V, then set the display property of the article's body to block. Also set the text on the button to V.
      if(event.target.innerText === ">"){
        event.target.innerText = "V";
        //select the articles article_body div
        articleBody.style.display = "block";
      }else{
        //If the text on the button that was clicked is a V, then set the display property of the article's body to none. Also set the text on the button to >.
        event.target.innerText = ">"
        articleBody.style.display = "none";
      }
    })
  })
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  //first select all buttons with the class .highlightBtn

  //foreach button, add a click event listener that does the following:
    //within the event handler- find the article in which the button belongs
    //If the text on the button is +, then add the .highlight class to the article and set the text on the button to -
    //If the text on the button is not +, then remove the .highlight class from the article and set the text on the button to +
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
