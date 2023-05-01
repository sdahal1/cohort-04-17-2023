

//get the average rating of all the artists form the given array
function getAverageRating(artists = []) {
    if(!artists.length)return null; //this guard clause will handle the edge case of empty dataset
    let sum = artists.reduce((sum, artistObj) => {
        sum += artistObj.rating;
        return sum;
    }, 0);
    let average = sum / artists.length;
    return Number(average.toFixed(1))
}




// get all the artists who are rated lower than a given number. If no artists in the array, return null
function getLowRatedArtists(artists = [], rating) {
    if(!artists.length)return null;
    return artists.filter((artist) => {
        return artist.rating < rating;
    });
}

// console.log(getLowRatedArtists(artists, 7));

module.exports = { getLowRatedArtists, getAverageRating };





/* 
garbage can

if(typeof getAverageRating === 'function'){
    console.log("test passed- getAverageRating is a function");
}else {
    console.log("getAverageRating() is not a function.");
}

const expected = 8.4;
const actual = getAverageRating(artists)

if(expected === actual){
    console.log(`test passed, expected ${actual} to be ${expected}`)
}else{
    console.log(`test failed, expected ${actual} to be ${expected}`)
}


const expected2 = null
const actual2 = getAverageRating([]) //null




*/