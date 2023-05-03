function download(url) {
  console.log(`Start downloading video from ${url} ...`);

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(url.length === 0) {
        return reject("Url not valid")
      }
      const fileName = url.split("/").pop();
      console.log(`Video downloaded from ${url} to ${fileName}.`);
      return resolve(fileName)
    }, 2000);
  })
}

function process(videoFile) {
  console.log(`Start processing ${videoFile} ...`);

  setTimeout(() => {
    console.log(`Video processing complete: ${videoFile}.`);
  }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";

download(url)
  .then((fileName)=>{
    console.log("code that will only run once the download() function's promise resolves")
    process(fileName)
  })
  .catch((error)=>{
    console.log(error)
  })

const result = download(url);

// setTimeout(()=>{
//   console.log(result)
// },2001)

console.log("code that can run without waiting for the downlaod function to resolve")
console.log('********************************************************')
console.log("more code")
console.log('********************************************************')


/* 
1. Identify the async code we want to be able to wait for
2. Wrap that async code in a promise and have that promise be returned by the function
3. Identify what value to resolve and what to reject and wrap resolve() and reject() around those
4. Identify what code needs to wait for the promise to resolve before running
5. Call the function that returns the promise, and wrap the code that needs to wait for the promise to resolve in the .then() of the funciton call

*/
