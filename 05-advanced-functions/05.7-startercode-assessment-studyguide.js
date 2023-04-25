const books = [
  {
    id: 1,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },

  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    publisher: {
      name: "Warner Books",
      state: "California",
    },
  },
  {
    id: 3,
    title: "How to win friends and influence People",
    author: "Dale Carnegie",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    publisher: {
      name: "Penguin Books",
      state: "Maryland",
    },
  },
];

const students = {
  Spongebob: {
    finished: [1, 2],
    notFinished: [3, 4],
  },
  Squidward: {
    finished: [1],
    notFinished: [2, 3, 4],
  },
  Sandy: {
    finished: [1, 3, 4],
    notFinished: [2],
  },
};

/*
1. GET BOOKS BY PUBLISHER NAME


*/
function getBooksByPublisher(books=[], publisherName="") {
  const result = books.filter((element)=>{
    //return a condition that evaluates to a boolean
    return element.publisher.name === publisherName
  })

  return result;
}

// console.log(getBooksByPublisher(books, "Simon & Schuster"));

/* 
2. GET A STUDENTS FINISHED BOOKS

WRITE A FUNCTION THAT TAKES AN ARRAY OF BOOKS, OBJECT CONTAINING ALL STUDENTS, AND A STUDENT NAME.
IT WILL RETURN AN ARRAY OF BOOK OBJECTS THAT REPRESENT THE BOOKS THAT THE GIVEN USER HAS FINISHED.
*/

function getFinishedBooksFromStudent(books=[], students={}, studentName=""){
  //look in the students object at the key represented by studentName
  const finishedBookIds = students[studentName].finished

  // const result = finishedBookIds.map((id)=>{
  //   //find the book in the books array that has the matching id
  //   const matchingBook = books.find((bookObj)=>{
  //     return bookObj.id === id
  //   })

  //   return matchingBook
  // })

  // return result

  // SHOUTOUT TO JOSH for this one
  return books.filter((book)=>{
    return finishedBookIds.includes(book.id)
  }) 

}

// console.log(getFinishedBooksFromStudent(books, students, "Spongebob"))

/* 
3. FIND IF A GIVEN STUDENT HAS READ ALL THE BOOKS FROM A GIVEN PUBLISHER. RETURN TRUE OR FALSE

FUNCTION INPUTS: LIST OF BOOKS, OBJECT CONTAINING ALL STUDENTS, PUBLISHER NAME, STUDENT NAME

*/

function hasStudentReadAllBooksFromPublisher(books, students, publisherName, studentName){
  //look in the students object at the key represented by studentName
  const finishedBookIds = students[studentName].finished
  //get the books from a given publisher
  const booksFromGivenPublisher = getBooksByPublisher(books,publisherName);
  
  //check if every book's id from the booksFromPublisher array is included in the finishedBookIds of the givenStudent
  const result = booksFromGivenPublisher.every((bookObj)=>{
    //return a condition that evaluates to a boolean
    return finishedBookIds.includes(bookObj.id)
  })  

  return result;

}


console.log(hasStudentReadAllBooksFromPublisher(books, students, "Simon & Schuster", "Spongebob"))

/* 
4. GIVEN AN OBJECT CONTAINING ALL STUDENTS, AND TWO STUDENT NAMES, DETERMINE IF THE FIRST STUDENT HAS READ ANY BOOKS THAT THE SECOND STUDENT HAS NOT READ YET. IF SO, RETURN TRUE. IF THE FIRST STUDENT HAS NOT READ ANY BOOKS THE SECOND STUDENT HAS NOT READ, RETURN FALSE.

*/

function hasStudentReadOtherStudentsUnfinishedBooks(students, studentA, studentB){

}

// console.log(hasStudentReadOtherStudentsUnfinishedBooks(students, "Spongebob", "Sandy"))
/* 
5. RETURN ALL THE STUDENT NAMES WHO HAVE READ ANY BOOK IN THE GIVEN STUDENT'S NOTFINISHED BOOKS

INPUTS: OBJECT OF STUDENTS, STUDENT NAME

*/


function studentsWhoHaveRead(students, studentName){

}

// console.log(studentsWhoHaveRead(students, "Spongebob"))
