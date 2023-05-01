const {getAverageRating,getLowRatedArtists} = require("../src/main")
const expect = require("chai").expect; //importing chai's assertion library 
// DESCRIBE -> used to group tests for one function together

const artists = [
  { name: "Taylor Swift", rating: 9 },
  { name: "Drake", rating: 9.8 },
  { name: "J Cole", rating: 8 },
  { name: "Rob", rating: 6.25 },
  { name: "Kendrick Lamar", rating: 8.5 },
  { name: "Beatles", rating: 10 },
  {
      name: "Random guy from beach who asked people to follow his sound cloud",
      rating: 6,
  },
];


describe("getAverageRating()",()=>{
  //test the different cases (happy path, and edge cases). Each case uses "it"

  //getAverageRating is a function
  it("getAverageRating() is a function", ()=>{
    
    expect(getAverageRating).to.be.a("function")
  })

  //getAverageRating returns a number back
  it("should return back a number data type if it gets an array of objects to calculate rating",()=>{
    // const expected = "number";
    const actual = getAverageRating(artists)
    expect(actual).to.be.a("number");
  })

  //getAverageRating returns the correct average to the first decimal place when given an array of objects
  it("returns the correct average to the first decimal place when given an array of objects", ()=>{
    const expected = 8.2;
    const actual = getAverageRating(artists);

    expect(actual).to.equal(expected)
  })


  //EDGE CASE: getAverageRating returns null if the dataset is empty
  it("returns null if the dataset is empty", ()=>{
    const actual = getAverageRating([]);
    expect(actual).to.be.null;
  })
})


describe("getLowRatedArtists()", ()=>{
  //testing that it returns an array of objects that have rating less than given number
  it("it returns an array of objects that have rating less than given number", ()=>{
    const expected = [
      { name: "Rob", rating: 6.25 },
      {
        name: "Random guy from beach who asked people to follow his sound cloud",
        rating: 6,
      }
    ]

    const actual = getLowRatedArtists(artists,7)

    expect(actual).to.eql(expected);
  })
})
