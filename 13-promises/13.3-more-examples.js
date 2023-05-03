function download(url) {
  console.log(`Start downloading video from ${url} ...`); //sync
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
        fileName = url.split("/").pop();
        console.log(`Video downloaded from ${url} to ${fileName}.`);
        resolve(fileName)
    }, 2000); //async
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
  .then((resolvedValue)=>{
    process(fileName);
  })

console.log("doing other things while waiting for the download")
