/* 
.reduce() -> loop through the array and accumulate a value based on a condition.
  -INPUT: CALLBACK FUNCTION, INITIAL VALUE
  -RETURNS: ACCUMULATED VALUE
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ACCUMULATOR, ELEMENT AND INDEX
    -CB RULE: RETURN AN ACCUMULATION - the callback function has to return a value that will be accumulated with the previous values on each iteration.
*/





const numbers = [768, 1004.2, 433.1];

function sumNumsForEachWay(nums){
  let accumulator = 0;
  nums.forEach((element)=>{
    accumulator+= element
  })
  return accumulator;
}

// console.log(sumNumsForEachWay(numbers))

function sumNums(nums){
  const result = nums.reduce((accumulator,element)=>{
    accumulator+= element //accumulate to the accumulator
    return accumulator
  },0)

  return result;
}

// console.log(sumNums(numbers))


const movies = [
  {
      title: "Austin Powers",
      views: 1000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
  {
      title: "Finding Nemo",
      views: 2000,
      producer: { 
          name: "Disney",
          city: "Orlando"
      }
  },
  {
      title: "Forrest Gump",
      views: 3000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
];


/* ADD UP ALL THE VIEWS FROM ALL THE MOVIE OBJECTS IN THE MOVIES ARRAY */

function totalViews(movies){
  const result = movies.reduce((accumulator, element)=>{
    //accumulate
    accumulator+= element.views //accumulate to the accumulator
    //return the accumulation
    return accumulator
  },0)

  return result;
}

console.log(totalViews(movies))



/* HOW TO ACCUMULATE ONTO OBJECTS- GIVEN AN ARRAY OF MOVIE OBJECTS, RETURN AN OBJECT WHERE EACH KEY IS A MOVIE TITLE, AND THE VALUE IS THE PRODUCER NAME 
EXAMPLE OUTPUT:
{
  'Austin Powers': 'Universal Studios',
  'Finding Nemo': 'Disney',
  'Forrest Gump': 'Universal Studios'
}
*/

function movieAndProducerName(movies){
  const result = movies.reduce((accumulator,element)=>{
    //create a key in the accumulator object that represents the current element's title (Austin Powers, Finding nemo, etc), and set the value to be the current elements' producer name
    accumulator[element.title] = element.producer.name;
    return accumulator;
  },{})

  return result
}


// console.log(movieAndProducerName(movies));

/* ADVANCED PROBLEM- HINT FOR YOUR ASSESSMENT:  GIVEN AN ARRAY OF MOVIE OBJECTS, RETURN AN OBJECT WHERE EACH KEY IS THE PRODUCER NAME, AND EACH VALUE IS AN ARRAY OF MOVIES ASSOCIATED WITH THAT PRODUCER NAME 

EXAMPLE OUTPUT: 

{
  'Universal Studios': [
      { title: 'Austin Powers', views: 1000, producer: [Object] },
      { title: 'Forrest Gump', views: 3000, producer: [Object] }
    ],
  Disney: [ { title: 'Finding Nemo', views: 2000, producer: [Object] } ]
}


{
  "Universal Studios": [{AustinPowers}, {forrestGump}],
  "Disney": [{FindingNemo}]
}

*/

function movieByProducer(movies){
  const result = movies.reduce((accumulator, element)=>{
    if(accumulator[element.producer.name] === undefined){
      //accumulate to the accumulator
      accumulator[element.producer.name] = [element]
    }else{
      accumulator[element.producer.name].push(element)
    }
    //return the accumulator
    return accumulator
  },{})

  return result;
}

console.log(movieByProducer(movies))