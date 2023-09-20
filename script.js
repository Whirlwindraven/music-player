const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');

//music
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Elecrtic Chill Machine',
        artist: 'Jacinto Design',
    }, 
    {
        name: 'jacinto-3',
        displayName: 'Seven Nation Army Remix',
        artist: 'Jacinto Design',
    },

    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design',
    },
    {
        name: 'metric-1',
        displayName: 'Front Row Remix',
        artist: 'Metric ',
    }
];

// check if playing
let isPlaying = false;


function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    music.pause();
    playBtn.setAttribute('title', 'Play');
}

// play or pause 
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// update dom

function loadSong(song){
   title.textContent = song.displayName;
   artist.textContent = song.artist 
   music.src = `music/${song.name}.mp3`;
   image.src = `img/${song.name}.jpg`;
}

//current song
let songIndex = 0;


// on load 
loadSong(songs[songIndex]);

// event listner
prevBtn.addEventListener('click', prevSong);
nextvBtn.addEventListener('click', nextSong);