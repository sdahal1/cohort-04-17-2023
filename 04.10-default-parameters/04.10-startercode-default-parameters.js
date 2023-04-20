// DEFAULT PARAMETERS-> BY SETTING DEFAULT PARAMETERS, DEVELOPERS CAN AVOID ERRORS THAT MAY ARISE WHEN FUNCTIONS ARE CALLED WITH MISSING OR INCORRECT ARGUMENTS. THIS CAN HELP IMPROVE THE OVERALL RELIABILITY AND STABILITY OF CODE. 



function calculatePriceInDollars(priceInCents) {
  return priceInCents / 100;
}

calculatePriceInDollars(100); //> 1  (Returns 1 because 100 cents = 1 dollar)
calculatePriceInDollars(250); //> 2.5
calculatePriceInDollars(); //> NaN -> HOW DO WE FIX THIS?



// DEFAULT PARAMETERS FOR OBJECTS AND ARRAYS
// Function definition
function calculateTotal(products, { discountPercentage, salesTax }) {
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

// calculateTotal(products, options); //> 8768.25

// NOW, IN THE CASE OF THE FUNCTION ABOVE, IMAGINE THAT THERE ARE NO DISCOUNTS, AND YOU JUST WANT TO USE A STANDARD SALES TAX. IN THIS SITUATION, YOU MAY WANT TO JUST CALL THE FUNCTION WITHOUT PASSING ANYTHING IN. 
// calculateTotal(products); 



//DEFAULT THE ARRAY TOO FOR THIS FUNCTION CALL
// calculateTotal(); 


