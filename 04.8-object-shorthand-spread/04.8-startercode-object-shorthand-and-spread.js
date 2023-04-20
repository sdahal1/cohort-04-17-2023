/* 
Object shorthand: 
JavaScript syntax that supports the creation of objects using values stored in variables, where the variable name becomes the key and the stored value becomes the value in the key-value pair

*/


const title = "The Presence Process";
const author = "Michael Brown";
const numPages = 100;
const bookName = "Young mula"
// CREATE AN OBJECT USING THOSE VARIABLES AS KEYS AND THEIR VALUES AS VALUES- NAME IT "PRODUCT"
const product1 = {title:title, author:author}
const product2 = {title:"macbook", author: "Steve jobs"}
// console.log(product1)

//OBJECT SHORTHAND- EXAMPLE:
const productShort = {bookName, numPages, author: "Rob"}
// console.log(productShort)
// console.log(title)


const rating = 5;

//THE SPREAD OPERATOR-> USE IT TO MAKE A COPY OF AN OBJECT OR ARRAY
const productWithRating = {...productShort, rating, state: "Virginia"}
// console.log("productWithRating is this", productWithRating)

//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO ARRAYS INTO ONE
const ownedBooks = ["Infernal Devices", "Foundation"];
const wishlist = ["Good Omens", "Guards! Guards!"];


const combinedArray = ownedBooks.concat(wishlist) //THE CONCAT WAY-> OLD WAY

const combinedArray2 = [...ownedBooks, ...wishlist]
console.log(combinedArray2)

//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO OBJECTS INTO ONE
const salesTax = { state: "Washington", tax: 0.065 };
//combine salesTax with the product variable from above
const finalProduct = {...productWithRating, ...salesTax, x: "gon giv it to ya"}


//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO OBJECTS INTO ONE AND OVERWRITE ONE OF THE EXISTING KEYS 
const finalProduct2 = {...productWithRating, ...salesTax}
console.log(finalProduct2)
// console.log(salesTax)
