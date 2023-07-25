// R - Repeat problem
// E - Example input/output
// A - Approach
// C - Coding
// T - Testing / Code review
// O - Optimization / Follow-up questions


// Given an array of numbers, find the largest product formed by two of the numbers. For example, 
// if the input array is [1, 5, 3, 4, 2,], the largest product that can be formed by two of the numbers is 20, 
// which is the product of 5 and 4. Can you write code to solve this problem?

// will it have dupe numbers -> there can be
// what happens if you get an empty array -> throw me an error check if there is only 2
// will there be neg nums -> yes still give largest product


//O(n log n) *
arr = [1, 5, 7, -6, -6];


// [-6,-6,1,5] [5,1,-6,-6]
function largestProduct(arr) {
  //hold number
 if (arr.length === 0) {
    throw new Error('Error');
  }
  const sortedNeg = arr.sort((a, b) => {
    return a - b;
  });

  console.log(sortedNeg);

  const sortedPos = arr.sort((a, b) => {
    return b - a;
  });

  const highNeg = sortedNeg[0] * sortedNeg[1];
  const highPos = sortedPos[0] * sortedPos[1];

  console.log(highNeg);

  if (highNeg > highPos) {
    return highNeg;
  } else {
    return highPos;
  }
}
console.log(largestProduct(arr)); // 90 this isnt working


// sorting 
// [-,6,-6,1,5] [5,1,-6,-6]
// sort both ascending and descending
// multiply first two el on each arr
//compare and return biggest product (MATH.max)

function largestSum(arr){
  let largest = 0;
  let largest2 = 0;

  for(let i = 0; i < arr.length; i++){
      if(arr[i] > largest){
        largest = arr[i];
        arr.splice(i, 1)
        i--
      }
  }
 

  return largest * largest2;
}

arr = [1, 5, -6,-6];
console.log(largestSum(arr));

// //O(n^2)
// // brute force
// // set a max prod that will be the first two el multiplied
// // for loop to go thru the arr
//     // another for loop to start at i + 1
//         // if this prod is bigger replace og answer


// //O(n)
// //  s2  s2      l1 l2
// // [-,6,-6,1,5] [5,1,-6,-6]
// // we are going to look for the two smallest nums & two biggest nums
// // scan the array and fill in those four values
// // multiply 2 smallest and 2 largest
// // return the biggest prod

// function largestProduct(arr) {
//   if (arr.length < 2) {
//     return undefined;
//   }

//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   let smallest = Infinity;
//   let secondSmallest = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     if (value > largest) {
//       secondLargest = largest;
//       largest = value;
//     } else if (value > secondLargest) {
//       secondLargest = value;
//     }
//     if (value < smallest) {
//       secondSmallest = smallest;
//       smallest = value;
//     } else if (value < secondSmallest) {
//       secondSmallest = value;
//     }
//   }

//   const largestProduct = largest * secondLargest;
//   const smallestProduct = smallest * secondSmallest;

//   if (largestProduct > smallestProduct) {
//     return largestProduct;
//   }
//   else {
//     return smallestProduct;
//   }
// }