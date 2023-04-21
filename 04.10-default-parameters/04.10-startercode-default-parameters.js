// DEFAULT PARAMETERS-> BY SETTING DEFAULT PARAMETERS, DEVELOPERS CAN AVOID ERRORS THAT MAY ARISE WHEN FUNCTIONS ARE CALLED WITH MISSING OR INCORRECT ARGUMENTS. THIS CAN HELP IMPROVE THE OVERALL RELIABILITY AND STABILITY OF CODE. 



function calculatePriceInDollars(priceInCents=0) {
  console.log('price in cents is this', priceInCents)
  return priceInCents / 100;
}

// console.log(calculatePriceInDollars(100)); //> 1  (Returns 1 because 100 cents = 1 dollar)
// console.log(calculatePriceInDollars(250)); //> 2.5
// console.log(calculatePriceInDollars()); //> NaN -> HOW DO WE FIX THIS?




// DEFAULT PARAMETERS FOR OBJECTS AND ARRAYS
// Function definition
function calculateTotal(products=[], {discountPercentage=0,salesTax=0}={}) {
  let result = 0;
  for (let i = 0; i < products.length; i++) {
    const { priceInCents, quantity } = products[i];
    result += priceInCents * quantity;
  }

  if (discountPercentage) result *= 1 - discountPercentage;
  return result * (1 + salesTax);
}

// Inputs
const products = [
  {
    name: "Black Longline T-Shirt",
    priceInCents: 1500,
    size: "M",
    quantity: 2,
  },
  {
    name: "Light Wash Stretch Skinny Jeans",
    priceInCents: 6000,
    size: 32,
    quantity: 1,
  },
];
const options = { discountPercentage: 0.1, salesTax: 0.0825 };

// console.log(calculateTotal(products, options)); //> 8768.25

// NOW, IN THE CASE OF THE FUNCTION ABOVE, IMAGINE THAT THERE ARE NO DISCOUNTS, AND YOU JUST WANT TO USE A STANDARD SALES TAX. IN THIS SITUATION, YOU MAY WANT TO JUST CALL THE FUNCTION WITHOUT PASSING ANYTHING IN FOR OPTIONS
// console.log(calculateTotal(products)); 



//DEFAULT THE ARRAY TOO FOR THIS FUNCTION CALL
// console.log(calculateTotal()); 

// const person = {firstName: "Steph", lastName: "Curry"}
// const {firstName,team} = person;
// console.log(firstName, team)



function getPriceInDollars({priceInCents=0}={}) {
  return "$" + (priceInCents / 100).toFixed(2);
}

const product1 = {
  name: "Slip Dress",
  // priceInCents: 8800,
  availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
}

console.log(getPriceInDollars(product1))