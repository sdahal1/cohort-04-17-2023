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

describe("cards routes", () => {
  afterEach(resetDataStore);

  describe("GET /cards", () => {
    it("returns list of cards", () => {
      return supertest(app)
        .get("/cards")
        .expect(200, { data: cards });
    });
  });

  describe("POST /cards", () => {
    const validDeckId = decks[0].id;
    const validCard = {
      front: "front text",
      back: "back text",
      deckId: validDeckId,
    };

    it("with valid data, return 201 and inserts card in datastore", () => {
      const oldCardsLength = cards.length;
      return supertest(app)
        .post("/cards")
        .send({ data: validCard })
        .expect(201)
        .then(res => {
          const { data } = res.body;
          expect(data).toBeDefined();
          expect(data.id).toBeDefined();
          expect(data.front).toEqual(validCard.front);
          expect(data.back).toEqual(validCard.back);
          expect(data.deckId).toEqual(validCard.deckId);
          expect(cards.length).toEqual(oldCardsLength + 1);
        });
    });

    it("returns 400 with missing 'data' key", () => {
      const body = {};
      return supertest(app)
        .post("/cards")
        .send(body)
        .expect(400, { error: "Body must have 'data' key"});
    });

    const requiredFields = ["front","back","deckId"];
    requiredFields.forEach(field => {
      it(`returns 400 if ${field} is missing`, () => {
        const body = {
          data: {
            ...validCard
          }
        };
        delete body.data[field];

        return supertest(app)
          .post("/cards")
          .send(body)
          .expect(400, { error: `'${field}' is required` });
      });
    });

    it("returns 400 if deckId is not valid", () => {
      const body = {
        data: {
          ...validCard,
          deckId: "invalid"
        }
      };

      return supertest(app)
        .post("/cards")
        .send(body)
        .expect(400, { error: `Deck id invalid does not exist.` });
    });
  });

  describe("GET /cards/:cardId", () => {
    it("returns card", () => {
      const validCardId = cards[0].id;

      return supertest(app)
        .get(`/cards/${validCardId}`)
        .expect(200, { data: cards[0] });
    });

    it("returns 404 with invalid card id", () => {
      return supertest(app)
        .get("/cards/999")
        .expect(404, { error: "Card with id 999 not found." });
    });
  });

  describe("DELETE /cards/:cardId", () => {
    it("returns 204 and removes card with valid id", () => {
      const validCardId = cards[0].id;
      const oldCardsLength = cards.length;

      return supertest(app)
        .delete(`/cards/${validCardId}`)
        .expect(204)
        .then(() => {
          expect(cards.length).toEqual(oldCardsLength - 1);
        });
    });

    it("returns 404 with invalid card id", () => {
      return supertest(app)
        .get("/cards/999")
        .expect(404, { error: "Card with id 999 not found." });
    });
  });
});

