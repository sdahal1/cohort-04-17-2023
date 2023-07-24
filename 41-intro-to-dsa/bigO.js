//O(1)
// Constant time 
// This occurs when an operation takes the same amount of time regardless of the size of the input.
function O_1(n) {
    let x = 2 + 2
    return n
}
// console.log(O_1(100000));
// our input n could be 100000000 the function executes basic operations regardless of the input


//O(logn)
// logarithmic time
// When the input size is reduced by half or we are doubling our input
// with binary search we halve our input to get our answers and with the O_log_2 function we are doubling
// our i while counting each time we do it.
function O_log_2(n) {
    count = 0;
    for (let i = 1; i < n; i = i * 2) {
        count++
    }
    return count;
}
function binarySearch(array, item) {
    let low = 0;
    let high = array.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];
        if(guess === item) {
            return mid;
        }
        if(guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}
// console.log(O_log_2(800));
// if you double your input and it takes only one more step to get your answer it is log n



//O(n)
// Linear Time
// the pattern to look out here is to go through all of your input. if you have a data set and need to search it
// it most likely is linear time. The time to complete an operation grows linearly with the size of the input.
function O_N(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        count++
    }
    return count;
}
console.log(O_N(1000));
// in this example whatever n is that is the amount of operations (count) we have to complete

// O(n log n)
// Linearithmic Time
// This happens when an operation's time complexity grows linearly and logarithmically with the size of the input.
// what to look out for here is doing something n times during a log n process.
// think divide-and-conquer algorithm that breaks the problem into smaller subproblems, solves each of those recursively
// and then combines the results. Like what we learned with MergeSort and QuickSort
function quickSort(array) {
    if(array.length < 2) {
        return array;
    } else {
        let pivot = array[0];
        let less = array.slice(1).filter(el => el <= pivot);
        let greater = array.slice(1).filter(el => el > pivot);
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}
console.log(quickSort([7,4,6,2,1,9,5]));


//O(n^2)
// Quadratic Time
// the pattern to look for here is nested for loops that DEPEND on each other. If you see nested for loops
// you might be looking at n^2 just make sure they depend on each other
function printPairsNotDependant(array) {
    let count = 0;
    let arrayLength = array.length;
    let newArray = ['a', 'b', 'c'];  // This array has a constant size
    for(let i = 0; i < arrayLength; i++) {
        for(let j = 0; j < newArray.length; j++) {
            count++
            console.log(array[i] + ', ' + newArray[j]);
        }
    }
    return count;
}
console.log(printPairsNotDependant([1,2,3,4,5,6,7,8,9]));
// note that this has an inner array that will always execute three step. this is nested for loops but is not
// O(n^2) the time complexity of the function is O(n).
// the example below the inner loop depends on the outer loop so it is O(n^2)
function printPairs(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            count++
            console.log(array[i] + ', ' + array[j]);
        }
    }
    return count
}
console.log(printPairs([1,2,3,4,5,6,7,8,9]));


