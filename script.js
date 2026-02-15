let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

let title = document.getElementById("title");
let artist = document.getElementById("artist");
let cover = document.getElementById("cover");

// playlist with full data
let songs = [
    {
        name: "Raanjhan",
        artist: "Parampara Tandon",
        file: "media/song1.mp3",
        cover: "media/1.jpg"
    },
    {
        name: "Mere Liye",
        artist: "Akhil Sachdeva",
        file: "media/song2.mp3",
        cover: "media/2.jpg"
    },
    {
        name: "kabira",
        artist: "Rochi Raina",
        file: "media/song3.mp3",
        cover: "media/3.jpg"
    },
    {
        name: "Saibo",
        artist: "Shreya Ghoshal",
        file: "media/song4.mp3",
        cover: "media/4.jpg"
    }
];

let songIndex = 0;

// load song function
function loadSong(index) {

    song.src = songs[index].file;

    title.innerHTML = songs[index].name;

    artist.innerHTML = "Singer - " + songs[index].artist;

    cover.src = songs[index].cover;

}

// first load
loadSong(songIndex);

// play pause
function playPause() {

    if (song.paused) {

        song.play();
        ctrlIcon.innerHTML = "&#9208;";

    } else {

        song.pause();
        ctrlIcon.innerHTML = "&#9654;";

    }

}

// next song
nextBtn.onclick = function () {

    songIndex++;

    if (songIndex >= songs.length) {
        songIndex = 0;
    }

    loadSong(songIndex);
    song.play();
    ctrlIcon.innerHTML = "&#9208;";

};

// previous song
prevBtn.onclick = function () {

    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songIndex);
    song.play();
    ctrlIcon.innerHTML = "&#9208;";

};

// progress bar
song.onloadedmetadata = function () {

    progress.max = song.duration;

};

song.ontimeupdate = function () {

    progress.value = song.currentTime;

};

progress.oninput = function () {

    song.currentTime = progress.value;

};

// auto next song
song.onended = function () {

    nextBtn.onclick();

};
