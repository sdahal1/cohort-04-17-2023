function showTopSongs(songs) {
  //if there are 0 songs, return a string that says "There are no songs in your playlist"
  if(songs.length === 0){
    return "There are no songs in your playlist"
  }
  //if there is only one song in the playlist, return a string that says "There is only 1 song: SONG_NAME_HERE"
  if(songs.length === 1){
    return `There is only 1 song: ${songs[0].title}`
  }
  //if there are only two songs exactly, then return "There are only 2 songs: SONG_1_NAME and SONG_2_NAME.`
  if(songs.length === 2){
    return `There are only 2 songs: ${songs[0].title} and ${songs[1].title}`
  }

  //get only the titles
  // const titlesOnly = [];
  // for(let i = 0; i<songs.length; i++){
  //   titlesOnly.push('and ' + songs[i].title)
  // }
  // //if there are more than two songs, then return "There are NUMBER_OF_SONGS_HERE songs in this playlist: song1_here, song2_here, song3_here."
  // return `There are ${songs.length} songs in this playlist: ${titlesOnly.join(", ")}`

  let result = `There are ${songs.length} songs in this playlist: `;
  for(let i = 0; i<songs.length; i++){
    if(i === songs.length-1){
      result += `and ${songs[i].title}.`
    }else{
      result += `${songs[i].title}, `
    }
    
  }
  return result;
}

let robsPlaylist = [
  {
      title: "Blessings",
      artist: "Chance The Rapper",
      albums: ["A", "B", "C"],
  },
  {
      title: "Hussle and Motivate",
      artist: "Nipsey Hussle",
      albums: ["D", "E", "F"],
  },
  {
      title: "Hotel California",
      artist: "Eagles",
      albums: ["G", "H", "I"],
  },
  {
      title: "Let It Be",
      artist: "Beatles",
      albums: ["J", "K", "L"],
  },
];

console.log(showTopSongs(robsPlaylist));