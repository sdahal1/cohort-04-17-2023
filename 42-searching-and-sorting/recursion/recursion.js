// arrayDoubler([1, 2, 3])  -> [2, 4, 6]

// Space O(n) Time O(n) 
function arrayDoubler(arr, result = [], index = 0) {
    //base case
    if ( index === arr.length ) {
        return result;
    }
    result.push(arr[index] * 2)
    return arrayDoubler(arr, result, index + 1)
}

console.log(arrayDoubler([1, 2, 3]))  // -> [2, 4, 6]

function arrayDoubler(arr, result = []) {
    //base case
    if ( arr.length === 0 ) {
        return result;
    }
    result.push(arr[0] * 2)
     return arrayDoubler(arr.slice(1), result)
}

console.log(arrayDoubler([1, 2, 3]))  // -> [2, 4, 6]



// Fn = Fn-1+Fn-2
// time complexity O(2^n)
function fibonacci(n) {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8