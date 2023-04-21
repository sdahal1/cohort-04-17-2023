const authors = [
  {
    id: 1,
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    series: ["His Dark Materials", "Sally Lockhart"],
  },
  {
    id: 2,
    name: {
      firstName: "Terry",
      lastName: "Pratchett",
    },
    series: ["Discworld", "Long Earth"],
  },
];

function getAllSeries(authors=[]) {
  const result = [];
  for (let i = 0; i < authors.length; i++) {
    const currentAuthor = authors[i]
    for (let j = 0; j < currentAuthor.series.length; j++) {
      result.push(currentAuthor.series[j]);
    }
  }
  return result;
}

// console.log(getAllSeries(authors))
//> [ 'His Dark Materials', 'Sally Lockhart', 'Discworld', 'Long Earth' ]



// AVOID BOOLEAN RETURNS-> if you're returning a boolean based on a condition, just return the condition b/c the condition will evaluate to a boolean
function moreThanThreeAuthors(authors=[]) {
  // if (authors.length > 3) {
  //   return true;
  // } else {
  //   return false;
  // }

  return authors.length > 3
}

// console.log(moreThanThreeAuthors(authors))


// console.log(5 < 2)




// RETURN EARLY

function getSeriesListById(authors, id) {
  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }

  if (id) {
    if (selected) {
      const message = `Series list: ${selected.series.join(", ")}`;
      return message;
    } else {
      return [];
    }
  } else {
    return "No ID provided.";
  }
}

function getSeriesListByIdRefactored(authors, id) {
  if(!id) return "No ID Provided";

  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }
  if (selected) {
    const message = `Series list: ${selected.series.join(", ")}`;
    return message;
  } else {
    return [];
  }
  
}




console.log(getSeriesListById(authors))