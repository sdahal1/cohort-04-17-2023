/* 
.find() -> loop through the array to find the first element that matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: FOUND ELEMENT OR UNDEFINED
  -CALLBACK FUNCTION DETAILS:
    - CB PARAMETERS: ELEMENT AND INDEX
    - CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .find() method will LOOP and return the FIRST ELEMENT that the condition evaluates true for or undefined if the condition is falsy for every element


.filter() -> loop through the array to create a new array with elements that match a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: NEW ARRAY WITH MATCHING ELEMENTS or [] 
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .filter() method will create a new array with elements that the condition evaluates true for.


.map() -> loop through the array to create a new array with transformed elements.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: NEW ARRAY WITH TRANSFORMED ELEMENTS
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A TRANSFORMATION - the callback function has to return a transformed value for each element. The .map() method will create a new array with the transformed elements.


.some() -> loop through the array to check if at least one element matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: BOOLEAN
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .some() method will return true if the condition evaluates true for at least one element or false if the condition is falsy for every element.


.every() -> loop through the array to check if every element matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: BOOLEAN
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .every() method will return true if the condition evaluates true for every element or false if the condition is falsy for at least one element.

*/

const employees = [
  {
    name: "Lebron James",
    salary: 110000,
    company: {
      name: "Google",
      city: "Reston",
      state: "Virginia",
    },
    languages: ["Javascript", "Java", "Python"],
  },
  {
    name: "Scooby Doo",
    salary: 200000,
    company: {
      name: "GreenChef",
      city: "New York City",
      state: "New York",
    },
    languages: ["Html", "Css"],
  },
  {
    name: "Larry David",
    salary: 80000,
    company: {
      name: "Comedy Central",
      city: "Los Angeles",
      state: "California",
    },
    languages: ["Javascript", "Java", "Python"],
  },
  {
    name: "Beyonce",
    salary: 900000,
    company: {
      name: "Google",
      city: "Brooklyn",
      state: "New York",
    },
    languages: ["Javascript", "Java", "Python"],
  },
];

//find an employee who is named "Larry David" (findParkByName)
function findEmployeeByNameForEachWay(employees=[], name) {
  //declare a variable to store the found element in
  let foundEmployee = undefined;
  employees.forEach((element, idx)=>{
    if(element.name === name){
      foundEmployee = element
    }
  })

  return foundEmployee;
}


function findEmployeeByName(employees=[],name){
  // arrayNameHere.find(callbackfunctionHere)
  const foundEmployee = employees.find((element, idx)=>{
    //RETURN A CONDITION HERE
    return element.name === name
  })

  // ONE LINE IMPLICIT RETURN WAY
  // const foundEmployee = employees.find((element, idx)=>element.name === name)

  return foundEmployee
}

// console.log(findEmployeeByNameForEachWay(employees, "Mark Cuban"))
// console.log(findEmployeeByName(employees, "Larry David"))



//get all the employees who are making over a given amount 
function findHighEarners(employees=[], amount) {
  const result = employees.filter((element,index)=>{
    //RETURN A CONDITION
    return element.salary > amount
  })

  return result;

}

// console.log(findHighEarners(employees,100000))


//give back a new array containing only the company names and city for each employee in the given list
function giveCompanyNamesAndCity(employees=[]) {
  const result = employees.map(({name,company})=>{
    // Drake works at Circuit City
    return `${name} works at ${company.name}`
  })

  return result;
}

//shortWay
const giveCompanyNamesAndCityShortWay = (employees=[]) =>  employees.map(({name,company})=>`${name} works at ${company.name}`)

// console.log(giveCompanyNamesAndCityShortWay(employees));

//use .some() to check if any employees are from a company with the name "Comedy Central"
function doesCompanyHaveEmployee(employees, companyName) {
  const result = employees.some((element,index)=>{
    return element.company.name === companyName
  })

  return result;
}

// console.log(doesCompanyHaveEmployee(employees,"Comedy Central"))

//use .every() to indicate whether every employee is making over a certain salary ()
function areAllEmployeesGettingPaidGivenAmount(employees, amount) {
  const result = employees.every((element,index)=>{
    return element.salary >= amount;
  })

  return result;
}

// console.log(areAllEmployeesGettingPaidGivenAmount(employees,100000))

/* YOU CAN ALSO COMBINE THE BUILT IN ARRAY METHODS!! */

/* USE FILTER() AND MAP() TO GIVE BACK A NEW ARRAY CONTAINING ONLY THE COMPANY NAMES AND CITY FOR EACH EMPLOYEE IN THE GIVEN LIST WHO HAVE A SALARY GREATER THAN OR EQUAL TO A GIVEN AMOUNT

HINT: USE .FILTER() TO GET BACK ONLY THE EMPLOYEES WHO MAKE A GIVEN AMOUNT OR MORE, THEN USE .MAP TO TRANSFORM THAT DATA TO A NEW ARRAY CONTAINING THE COMPANY NAMES AND CITY OF THOSE EMPLOYEES
*/


function namesOfHighPayingCompanies(employees, amount){
  //filter the data to only have high paying elements
  const highPayingElements = employees.filter((element,idx)=>{
    return element.salary >= amount
  })

  //transform the filtered dataset to only get the names from the highPayingElements
  const result = highPayingElements.map((element,index)=>{
    return element.company.name
  })

  return result
}

const namesOfHighPayingCompaniesShortWay = (employees, amount)=> employees.filter(({salary})=> salary >= amount).map(({company})=> company.name)


// console.log((namesOfHighPayingCompaniesShortWay(employees,100000))) //["Google", "GreenChef"]



/* USE FILTER() AND SOME() METHOD TO FIND IF ANY EMPLOYEE FROM A GIVEN STATE HAS A SALARY OF OVER A GIVEN AMOUNT */

function doesStateHaveHighEarner(employees=[], stateName="", amount=0){
  //filter to get the newyork only dataset
  const newYorkEmployees = employees.filter((element)=>{
    return element.company.state === stateName
  })

  const result = newYorkEmployees.some((element)=>{
    return element.salary >= amount
  })

  return result;

}

console.log(doesStateHaveHighEarner(employees,"New York", 100000))