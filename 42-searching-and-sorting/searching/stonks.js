// Problem: You are given a list of daily share prices for a stock. What is the
// maximum profit you could have made by buying a stock on one day, and selling
// on another?

// numbers will always be whole and positive
// what are example input output
// [7,1,5,3,6] --->  1 - 6 = 5
// if there is no max profit --> 0 
// each element can be viewed as M-F 
// cant calculate profit backwards

// O(n^2) T O(1) S
// function maxProfit(array) {
//     let maxPrice = 0;
//     for(let i = 0; i < array.length; i++){
//         for(let j = i + 1; j < array.length; j++){
//             let tempPrice = array[j] - array[i];
//             if ( tempPrice > maxPrice){
//                 maxPrice = tempPrice;
//             }
//         }
//     }
//     return maxPrice;
// }


// console.log(maxProfit([7,1,5,3,6])); // ---> 5


// O(n) T O(1) S
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6])); // 5

// -----------------------------------------------------------


function populateArrayRandom(length) {
    let arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 1000)); //1000 is the maximum
    }
    return arr;
}

const week = populateArrayRandom(5);
console.log("week:", week);

function findMaxProfit(week) {
    let min = {day: -1, value: Infinity};
    let max = {day: -1, value: 0};
    let pairs = [];
    for(let i = 0; i < week.length; i++) {
        //set max
        if (week[i] > max.value) {
            max.day = i;
            max.value = week[i];
        }
        //set min
        if (week[i] < min.value) {
            min.day = i;
            min.value = week[i];
        }

        //check if the max is behind us, if so discard it
        if (week[i] < max.value) {
            max = {day: -1, value: 0};
        }
        //if the max is not behind us add the min max pair to our pairs array
        else {
            pairs.push({
                days:[min.day, max.day],
                min: min.value,
                max: max.value,
                difference: max.value - min.value
            });
        }
    }

    console.log("pairs:", pairs);

    let maxDifference = {days: [], difference: 0};
    for(const pair of pairs) {
        if (pair.difference > maxDifference.difference) {
            maxDifference.days = pair.days;
            maxDifference.difference = pair.difference;
        }
    }

    if (maxDifference.difference <= 0) {
        return 0;
    }
    return maxDifference;
}

console.log(findMaxProfit(week));
