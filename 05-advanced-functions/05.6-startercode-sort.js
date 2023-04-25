/* 

.sort() -> sort the elements in the array based on a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: SORTED ARRAY
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: TWO ELEMENTS TO BE COMPARED (elemA, elemB)
    -CB RULE: RETURN A NUMBER (POSITIVE, NEGATIVE, 0) - the callback function has to return a value indicating the relationship between the two elements.
      -NEGATIVE NUMBER: If the returned value is negative, the first element will be sorted before the second element. 
      -POSITIVE NUMBER: If the returned value is positive, the second element will be sorted before the first element. 
      -ZERO -If the returned value is zero, the order of the two elements will not change.

*/




/* EXAMPLE 1: SORTING NUMBERS- GIVEN AN ARRAY OF NUMBERS */
const numbers = [3,4,12,77,-3,-5,1]

//ASCENDING (LEAST TO GREATEST)
function sortAscending(nums){
  nums.sort((elemA, elemB)=>{
    return elemA - elemB
  })
  return nums
}

// console.log(sortAscending(numbers))

//DESCENDING
function sortDescending(nums){
  nums.sort((elemA, elemB)=>{
    return elemB - elemA
  })
  return nums
}

// console.log(sortDescending(numbers))


/*  EXAMPLE 2: SORTING NUMBERS- GIVEN AN ARRAY OF OBJECTS */
const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];

function sortDescendingObjects(parks){
  parks.sort((elemA, elemB)=>{
    return elemB.rating - elemA.rating
  })
  return parks
}

// console.log(sortDescendingObjects(parks))


/* EXAMPLE 3: SORTING STRINGS */
const names = ["Thomas", "michael", "David", "Saurabh", "josh", "Sam", "aaron"];

function sortStringAscending(names){
  names.sort((elemA, elemB)=>{
    // if(elemA > elemB){
    //   return 1
    // }else{
    //   return -1
    // }

    return elemA.toLowerCase() > elemB.toLowerCase() ? 1 : -1
  })
  return names
}

// console.log(sortStringAscending(names))
/* EXAMPLE 4: SORT STRINGS BY LENGTH */


function sortStringLengthAscending(names){
  names.sort((elemA, elemB)=>{
    // return elemA.length > elemB.length ? 1 : -1
    return elemA.length - elemB.length
  })
  return names
}

console.log(sortStringLengthAscending(names))




