/* 

.sort() -> sort the elements in the array based on a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: SORTED ARRAY
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: TWO ELEMENTS TO BE COMPARED
    -CB RULE: RETURN A NUMBER (POSITIVE, NEGATIVE, 0) - the callback function has to return a value indicating the relationship between the two elements.
      -NEGATIVE NUMBER: If the returned value is negative, the first element will be sorted before the second element. 
      -POSITIVE NUMBER: If the returned value is positive, the second element will be sorted before the first element. 
      -ZERO -If the returned value is zero, the order of the two elements will not change.

*/




/* EXAMPLE 1: SORTING NUMBERS- GIVEN AN ARRAY OF NUMBERS */
const numbers = [23,4,12,77,-3,-5,1]

//ASCENDING (LEAST TO GREATEST)
function sortAscending(nums){

}

// console.log(sortAscending(numbers))

//DESCENDING
function sortDescending(nums){

}

// console.log(sortDescending(numbers))


/*  EXAMPLE 2: SORTING NUMBERS- GIVEN AN ARRAY OF OBJECTS */
const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];



/* EXAMPLE 3: SORTING STRINGS */


/* EXAMPLE 4: SORT STRINGS BY LENGTH */


