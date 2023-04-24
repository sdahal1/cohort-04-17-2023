/* 
.find() -> loop through the array to find the first element that matches a condition
  - accepts a callback function just like forEach does
  - the callback function accepts parameters for element and index, just like forEach does
  - the callback function has to return a condition. the .find() method will stop and return the first element that the condition evaluates true for
  - .find() will return the ELEMENT that condition returns true on.......OR if no element gets a truthy condition, it will return undefined


.filter() -> loop through the array to find the all the elements that matches a condition and will return to you an array of these elements
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function has to return a condition. the filter() method will stop after going through a full array
  - .filter() will return the ARRAY that contains elements where the condition returns true on.......OR if no elements gets a truthy condition, it will return an empty array


.map() -> loop through the array to transform each element to something else without modifying the original dataset
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function can return anything that we want each element from the original array to "map" or "transform" into
  - .map() will return the ARRAY that contains transformed elements (of whatever is returned from the callback)


.some() -> loops through the array to check if "at least one" or "some" elements match the condition in the .some()'s callback function
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function needs to return a CONDITION.
  - .some() will return BOOLEAN-> TRUE  if any of the elements match that condition in the callbackfunction  or FALSE if NONE of the elements match the condition in the cb


.every() -> loops through the array to check if "every" element matches the condition in the .every()'s callback function
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function needs to return a CONDITION.
  - .every() will return BOOLEAN-> TRUE if every one of the elements match that condition in the cb, or FALSE if even one element does not match teh condition in the cb

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
    salary: 90000,
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
function findHighEarners(employees, amount) {}

//give back a new array containing only the company names and city for each employee in the given list
function findCompanyNamesAndCity(employees) {}

//use .some() to check if any employees are from a company with the name "Comedy Central"
function doesCompanyHaveEmployee(employees, companyName) {}

//use .every() to indicate whether every employee is making over a certain salary ()
function areAllEmployeesGettingPaidGivenAmount(employees, amount) {}

/* YOU CAN ALSO COMBINE THE BUILT IN ARRAY METHODS!! */

/* USE FILTER() AND MAP() TO GIVE BACK A NEW ARRAY CONTAINING ONLY THE COMPANY NAMES AND CITY FOR EACH EMPLOYEE IN THE GIVEN LIST WHO HAVE A SALARY GREATER THAN OR EQUAL TO A GIVEN AMOUNT

HINT: USE .FILTER() TO GET BACK ONLY THE EMPLOYEES WHO MAKE A GIVEN AMOUNT OR MORE, THEN USE .MAP TO TRANSFORM THAT DATA TO A NEW ARRAY CONTAINING THE COMPANY NAMES AND CITY OF THOSE EMPLOYEES
*/

/* USE FILTER() AND SOME() METHOD TO FIND IF ANY EMPLOYEE FROM A GIVEN STATE HAS A SALARY OF OVER A GIVEN AMOUNT */
