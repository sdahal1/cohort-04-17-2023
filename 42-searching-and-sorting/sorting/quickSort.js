//like merge sort, exploit the fact that arrays of 0 or 1 are sorted
//we select a pivot and the index of where the pivot should end up
//essentially all the nums < than pivot are to the left and > are to the right

/*time complexity  
O( n log n)  * could be O(n^2)
                 p   
                [5,2,1,8,4,7,6,3]
                       5              5 is in the right spot idx of 4
              p                       do the same on the left side
              3,2,1,4      7,6,8
                3                     3 is in the right spot idx of 2
            p      
            1,2   4
            1                         1 is in the right spot idx of 0  
              2 
                          p
                          7,6,8      time for the right side
                          7          7 is in the right spot idx of 6
                        6   8 
            1 , 2 ,3 ,4 ,5 ,6 ,7 ,8
Space complexity  O(1) 
*/ 
function compare(a, b) {
    return a - b
}
// + a is greater
// - a is less
// 0 both equal


//  l             u   
// [5,2,1,8,4,7,6,3]
// l     u p l   u
//[2,1,4,3,5,8,7,6,]
function quickSort(compare, arr, lowerIndex = 0, upperIndex = arr.length - 1) {
    //base case
    if ( lowerIndex < upperIndex ) {
        //recursive case
        //call partition to get pivot index
        const index = partition(compare, arr, lowerIndex, upperIndex) // 4
        //sort to left
        quickSort(compare, arr, lowerIndex, index - 1);
        //sort to the right
        quickSort(compare, arr, index + 1, upperIndex)
    }
    return arr;
}
//  l           u
//  p           s         
// [3,5,2,7,12,40]
function partition(compare, arr, lowerIndex = 0, upperIndex = arr.length - 1) {
    //choose the pivot value (time complexity can be affected by this choice)
    let pivotValue = arr[lowerIndex];
    //keep track of how many things are less than the pivot value
    let partitionIndex = lowerIndex + 1;

    //search thru the subsection of the arr
    for (let index = lowerIndex + 1; index <= upperIndex; index++) {
        const comparison = compare(arr[index], pivotValue);
        if ( comparison < 0 ) { // element must be less than the pivot
            // swap(i, storeIndex); ++storeIndex
            [arr[index], arr[partitionIndex]] = [arr[partitionIndex], arr[index]];
            partitionIndex++
        }
    }
    // at the end swap our pivotvalue with the pIndex
    [arr[lowerIndex], arr[partitionIndex - 1]] = [arr[partitionIndex - 1], arr[lowerIndex]];
    return partitionIndex - 1;
}

console.log(partition(compare, [5,2,1,8,4,7,6,3]));