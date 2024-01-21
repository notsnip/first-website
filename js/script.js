// kursor.js config
let k1 = new kursor({
    type: 1,
    color: '#DCDCDC',
    removeDefaultCursor: true
  })

let songs=[
  {
    "name":"Fly Me To The Moon",
    "url":"https://ia903405.us.archive.org/24/items/fly-me-to-the-moon-lofi-cover-prod.-yung-rhythm/Fly%20Me%20To%20The%20Moon%20-%20Lofi%20Cover%20%28Prod.%20YungRhythm%29.mp3"
  } , {
    "name":"Powfu Death Bed",
    "url":"https://ia802805.us.archive.org/35/items/powfudeathbed/Powfu%20-%20death%20bed.mp3"
  },
]

let songsname= document.querySelector("#song_name")
let songsdom= document.querySelector("#song")
songsname.innerHTML=songs[0].name
let songIndex= songs[0].url
var audio = new Audio(songIndex);
audio.play();
audio.volume = 0.1;

function pause(){
  audio.volume= 0;
}



