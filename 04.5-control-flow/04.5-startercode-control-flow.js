const product = {
  priceInCents: 2100,
  name: "Red Beanie",
  size: "L",
  onSale: true,
};

// BASIC IF STATEMENTS
function getPrice(product) {
  let price = product.priceInCents;
  if (product.onSale) {
    price = price * 0.9;
  }

  return price;
}

// SINGLE LINE IF STATEMENTS- refactor the above function
function getPrice2(product) {
  let price = product.priceInCents;
  if (product.onSale) price = price * 0.9;

  return price;
}

// CONDITIONAL OPERATOR (ternary operator)- refactor getPrice()
function getPrice3(product) {
  let price = product.priceInCents;

  product.onSale ? (price = price * 0.9) : null;

  return price;
}

// CONDITIONAL OPERATOR WITH RETURNS - refactor getPrice()
function getPrice4(product) {
  let price = product.priceInCents;
  // if (product.onSale) {
  //   return price * 0.9;
  // }else{
  //   return price
  // }

  return product.onSale ? price * 0.9 : price;
}

// console.log(getPrice4(product)); //> 1890

// MULTIPLE CONDITIONAL IF-ELSE STATEMENTS
function calculateTax(stateAbbreviation) {
  let result;
  if (stateAbbreviation === "CA") {
    result = 0.0725;
  } else if (stateAbbreviation === "CO") {
    result = 0.029;
  } else if (stateAbbreviation === "GA") {
    result = 0.04;
  } else if (stateAbbreviation === "VT") {
    result = 0.06;
  } else {
    result = 0;
  }

  return result;
}

// SWITCH STATEMENTS -> When you have multiple if, else if, else statements that all compare the same variable, use the switch statements: refactor calculateTax()

function calculateTax2(stateAbbreviation) {
  let result;
  switch (stateAbbreviation) {
    case "CA":
      result = 0.0725;
      break;
    case "CO":
      result = 0.029;
      break;
    case "GA":
      result = 0.04;
      break;
    case "VT":
      result = 0.06;
      break;
    default:
      result = 0;
  }

  return result;
}

console.log(calculateTax2("CA"));
