function hello(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("wazzaa")
    },1000)
  }).then((wordHere)=>{
    // console.log('wordHere is this', wordHere)
    return wordHere + " young mula"
  })
  
  // return Promise.resolve("wazzaaa");
}


hello()
  .then((helloResponse)=>{
    console.log(helloResponse)
  })
 
