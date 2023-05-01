const {
  getAverageRating,
  getLowRatedArtists,
  assignGrade,
  partitionArtistsByRating,
} = require("../src/main");


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

describe("getAverageRating()", () => {
  //test the different cases (happy path, and edge cases). Each case uses "it"

  //getAverageRating is a function
  it("getAverageRating() is a function", () => {
    expect(typeof getAverageRating).toEqual("function");
  });

  //getAverageRating returns a number back
  it("should return back a number data type if it gets an array of objects to calculate rating", () => {
    // const expected = "number";
    const actual = getAverageRating(artists);
    expect(typeof actual).toEqual("number");
  });

  //getAverageRating returns the correct average to the first decimal place when given an array of objects
  it("returns the correct average to the first decimal place when given an array of objects", () => {
    const expected = 8.2;
    const actual = getAverageRating(artists);

    expect(actual).toEqual(expected);
  });

  //EDGE CASE: getAverageRating returns null if the dataset is empty
  it("returns null if the dataset is empty", () => {
    const actual = getAverageRating([]);
    expect(actual).toEqual(null)
  });
});

describe("getLowRatedArtists()", () => {
  //testing that it returns an array of objects that have rating less than given number
  it("it returns an array of objects that have rating less than given number", () => {
    const expected = [
      { name: "Rob", rating: 6.25 },
      {
        name: "Random guy from beach who asked people to follow his sound cloud",
        rating: 6,
      },
    ];

    const actual = getLowRatedArtists(artists, 7);

    expect(actual).toEqual(expected);
  });
});

describe("assignGrade", () => {
  //returns correct score for less than 70%
  it("should return the correct score for 70%- 79%", () => {
    const expected = "C";
    const actual = assignGrade(0.7);
    expect(actual).toEqual(expected);
  });
  it("should return the correct score for 80%-89%", () => {
    const expected = "B";
    const actual = assignGrade(0.84);
    expect(actual).toEqual(expected);
  });
});

describe("partitionArtistsByRating()", () => {
  //it should split artists by rating
  it("it should split artists by rating", () => {
    const expected = [
      [
        { name: "Rob", rating: 6.25 },
        {
          name: "Random guy from beach who asked people to follow his sound cloud",
          rating: 6,
        },
      ],
      [
        { name: "Taylor Swift", rating: 9 },
        { name: "Drake", rating: 9.8 },
        { name: "J Cole", rating: 8 },
        { name: "Kendrick Lamar", rating: 8.5 },
        { name: "Beatles", rating: 10 },
      ],
    ];

    const actual = partitionArtistsByRating(artists,7)

    expect(actual).toEqual(expected)
  });
});
