const supertest = require("supertest");

const app = require("../src/app");
const { cards, decks } = require("../src/dataStore");
const { makeCards, makeDecks } = require("./fixtures");

function resetDataStore() {
  const newCards = makeCards();
  const newDecks = makeDecks();
  cards.length = 0;
  decks.length = 0;
  cards.push(...newCards);
  decks.push(...newDecks);
}

describe("decks routes", () => {
  afterEach(resetDataStore);

  describe("GET /decks", () => {
    it("returns list of decks", () => {
      return supertest(app)
        .get("/decks")
        .expect(200, { data: decks });
    });
  });

  describe("POST /decks", () => {
    const validDeck = {
      name: "Deck Name",
      description: "deck description",
    };

    it("with valid data, return 201 and inserts deck in datastore", () => {
      const oldDecksLength = decks.length;
      return supertest(app)
        .post("/decks")
        .send({ data: validDeck })
        .expect(201)
        .then(res => {
          const { data } = res.body;
          expect(data).toBeDefined();
          expect(data.id).toBeDefined();
          expect(data.name).toEqual(validDeck.name);
          expect(data.description).toEqual(validDeck.description);
          expect(decks.length).toEqual(oldDecksLength + 1);
        });
    });

    it("returns 400 with missing 'data' key", () => {
      const body = {};
      return supertest(app)
        .post("/decks")
        .send(body)
        .expect(400, { error: "Body must have 'data' key"});
    });

    const requiredFields = ["name","description"];
    requiredFields.forEach(field => {
      it(`returns 400 if ${field} is missing`, () => {
        const body = {
          data: {
            ...validDeck
          }
        };
        delete body.data[field];

        return supertest(app)
          .post("/decks")
          .send(body)
          .expect(400, { error: `'${field}' is required` });
      });
    });
  });

  describe("GET /decks/:deckId", () => {
    it("returns deck", () => {
      const validDeckId = decks[0].id;

      return supertest(app)
        .get(`/decks/${validDeckId}`)
        .expect(200, { data: decks[0] });
    });

    it("returns 404 with invalid deck id", () => {
      return supertest(app)
        .get("/decks/999")
        .expect(404, { error: "Deck with id 999 not found." });
    });
  });

  describe("DELETE /decks/:deckId", () => {
    it("with valid id, returns 204 and removes deck + related cards", () => {
      const validDeckId = decks[0].id;
      const oldDecksLength = decks.length;
      const oldCardsLength = cards.length;

      return supertest(app)
        .delete(`/decks/${validDeckId}`)
        .expect(204)
        .then(() => {
          expect(decks.length).toEqual(oldDecksLength - 1);
          expect(cards.length).toBeLessThan(oldCardsLength);
        });
    });

    it("returns 404 with invalid deck id", () => {
      return supertest(app)
        .get("/decks/999")
        .expect(404, { error: "Deck with id 999 not found." });
    });
  });
});

