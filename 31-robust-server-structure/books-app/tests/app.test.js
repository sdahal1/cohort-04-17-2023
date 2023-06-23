const request = require('supertest');
// 2 other useful things:
// 1. our app (so we can run our code to test it)
const app = require('../src/app');
// 2. our data (so we can mess with it)
const books = require('../src/data/books');

beforeEach(() => {
  // empty out the books array
  books.splice(0, books.length);
})
describe('/books', () => {
  // going to test 2 cases: an empty array of books, and an array with some data in it
  test('GET method returns all of the books', async () => {
    // 1. set up the input data
    const expectedBooks = [
      {
        id: 17,
        title: 'The Fellowship of the Ring',
        author: 'JRR Tolkien'
      },
      {
        id: 26,
        title: 'The Giver',
        author: 'Lois Lowry'
      }
    ]
    books.push(...expectedBooks);
    // 2. call our code
    const response = await request(app).get('/books');
    // 3. assert things about the response we got
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual(expectedBooks);
  })
  test('GET method with no data returns an empty array', async () => {
    // 1. set up the input data
    // it's already set up as an empty array
    // hooray
    // 2. call our code
    const response = await request(app).get('/books');
    // 3. assert that we got an empty array back
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual([]);
  })
});

describe('/books/:id', () => {
  // 1 book in my array of books & request that 1 book
  // 404 for a book that does not exist
  // multiple books in the array, look for different books
  test('GET method for a book in the array returns that book', async () => {
    // 1. set up input data
    const book = {
      id: 26,
      title: 'The Giver',
      author: 'Lois Lowry'
    };
    books.push(book);
    // 2. make a request to my code
    const response = await request(app).get('/books/26')
    // 3. assert things
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual(book);
  });
  test('GET method for a book that does not exist gives a 404 error', async () => {
    // 1. set up input data
    const book = {
      id: 26,
      title: 'The Giver',
      author: 'Lois Lowry'
    };
    books.push(book);
    // 2. make a request
    const response = await request(app).get('/books/8772156')
    // 3. make assertions
    expect(response.statusCode).toBe(404);
    // I expect that the response contains the ID that I specified
    expect(response.text).toContain('8772156')
  })
})
// read /books/:id
// create /books