//What will be logged?
function one(){
  let fortune = null; //sync
  
  if (!fortune) { //sync
    setTimeout(() => { //async
      fortune = "A pleasant surprise is waiting for you.";
    });
  }
  
  console.log(`Your fortune is: ${fortune}`); //sync
}



//What will be the state of the promise below after 1,000 milliseconds?
function two(){
  const promise = new Promise((resolve, reject) => { //async
    setTimeout(() => {
      resolve('Completed!');
    }, 100);
  });

  promise.then((x)=>{
    console.log(x)
  })
}

two();


//What will be the state of the promise below after 1,000 milliseconds?
function three(){
  const promise = new Promise((resolve, reject) => { //async
    console.log('Completed!');
  });
}

// three()