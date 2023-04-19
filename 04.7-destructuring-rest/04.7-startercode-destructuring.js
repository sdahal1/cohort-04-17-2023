/* 
Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way. Some of the key benefits of destructuring in JavaScript are:
*/

const product = {
  title: "The Golden Compass",
  priceInCents: 799,
  author: {
    firstName: "Philip",
    surname: "Pullman",
  },
};

// - EXAMPLE WITHOUT DESTRUCTURING

function printAuthorAndTitle(product) {
    return `${product.title} by ${product.author.firstName} ${product.author.surname}`;
}

// console.log(printAuthorAndTitle(product))



// - EXAMPLE WITHOUT DESTRUCTURING BUT USING VARIABLES INSTEAD
function printAuthorAndTitle2(product) {
  const author = product.author;
  const title = product.title;

  return `${title} by ${author.firstName} ${author.surname}`;
}

// - EXAMPLE WITH DESTRUCTURING

function printAuthorAndTitle3(product) {
  // const {keyNameHere,anotherKeyNameHere} = objectNameHere
  // you have to wrap the variables you want to unpack in the curly braces because theyre coming from an object- DG
  const {title, author, supplier} = product;
  return `${title} by ${author.firstName} ${author.surname} And the supplier is ${supplier}`;
}




// - WHAT HAPPENS IF THERE ARE MISSING KEYS? - Undefined!


// - DESTRUCTURING A NESTED OBJECT WITH NESTED KEYS
function printAuthorAndTitle4(product) {
  
  const {title, author:{firstName,surname}, supplier} = product;
  return `${title} by ${firstName} ${surname} And the supplier is ${supplier}`;
}


// - RENAMING A DESTRUCTURED VARIABLE TO BE DIFFERENT FROM THE KEY NAME
function printAuthorAndTitle5(product) {
  //renaming the variable for title to productName. now title is no longer a variable that is accessible
  const {title:productName, author:{firstName,surname:lastName}, supplier} = product;
  return `${productName} by ${firstName} ${lastName} And the supplier is ${supplier}`;
}

// console.log(printAuthorAndTitle5(product))


// - DESTRUCTURING ARRAYS

const genres = [
  "Fantasy",
  "Fiction",
  "Nonfiction",
  "Science Fiction",
  "Young Adult",
];



// - THE REST OPERATOR ON OBJECTS
// const [elementAtIndex0, elementAtIndex1] = arrayNameHere
const [,,first, , third,fourth] = genres
console.log(first,third,fourth)


// - THE REST OPERATOR ON ARRAYS (Rest operator is: ...)
const [,,...erthangElse] = genres //this skips teh first two, and puts the rest of the elements inside 'erthangElse'
console.log(erthangElse)


// - DESTRUCTURING PARAMETERS
function printAuthorAndTitle6({title, author:{firstName,surname:lastName}, supplier}) {
  // const {keyNameHere,anotherKeyNameHere} = objectNameHere
  // you have to wrap the variables you want to unpack in the curly braces because theyre coming from an object- DG
  // const {title, author, supplier} = product;
  return `${title} by ${firstName} ${lastName} And the supplier is ${supplier}`;
}

console.log(printAuthorAndTitle6(product))