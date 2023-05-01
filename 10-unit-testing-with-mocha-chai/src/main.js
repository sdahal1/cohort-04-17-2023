

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

function assignGrade(score=0) {
    let result = "F";
    if(score>1){
        result = "You cheated"
    }
    else if (score >= 0.9) {
      result = "A"
    } else if (score >= 0.8) {
      result = "B";
    } else if (score >= 0.7) {
      result = "C";
    }
  
    return result;
}

function partitionArtistsByRating(artists=[], rating=0){
    const lowRatedArtists = artists.filter((artist)=>{
        return artist.rating < rating
    })
    const highRatedArtists = artists.filter((artist)=>{
        return artist.rating >= rating
    })

    return [lowRatedArtists,highRatedArtists]
}

module.exports = { getLowRatedArtists, getAverageRating, assignGrade, partitionArtistsByRating };





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