const axios = require("axios");
const { index } = require("../src/requests");
const BASE_URL = "http://localhost:5000";

describe("requests.js", () => {
  describe("index()", () => {
    const fakeData = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
      {
        id: "dFBfdr",
        name: "Moon",
        meaning: "Sails",
        starsWithPlanets: 17,
        quadrant: "SQ3",
      },
    ];

    beforeEach(() => {
      jest.spyOn(axios, "get");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      //spy on the axios.get() call so that we can keep track if its being called with axios.get or not
      // jest.spyOn(axios, "get");

      //call the index() function and wait for it to finish
      await index();

      const expectedURL = `${BASE_URL}/constellations`;

      expect(axios.get).toHaveBeenCalledWith(expectedURL)

      jest.clearAllMocks();
    });

    it("should return a list of constellations with fewer than 10 stars with planets", async () => {
      // Write code here
      // jest.spyOn(axios, "get")

      //force the axios.get() call to resolve the data from 
      axios.get.mockImplementation(() => Promise.resolve({ data:fakeData }));

      //actually call the function and wait for the response
      const response = await index();
      const expected = fakeData.slice(0,2)
      expect(response).toEqual(expected);

      jest.clearAllMocks();
    });

    it("should log an error to the console", async () => {
      // Write code here
      // jest.spyOn(axios, "get");


      //when the axios.get call happens, force the call to reject and give use this new Error("Request failed.") as our rejected value
      axios.get.mockImplementation(() =>
        Promise.reject(new Error("Request failed."))
      );

      //spy on the console.error() to see if it gets called with the right error
      jest.spyOn(console, "error");

      await index();

      expect(console.error).toHaveBeenCalledWith("Request failed.")

      jest.clearAllMocks();
    });
  });
});
