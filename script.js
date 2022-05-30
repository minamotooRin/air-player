const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const modeBtn = document.getElementById('mode');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

class Player {
  constructor() {
    this.songs     = ['hey', 'summer', 'ukulele'];
    this.songIndex = 0;
    this.mode      = 0;
    this.loadSong()
  }

  isPlaying()
  {
    return musicContainer.classList.contains('play');
  }
  
  loadSong() {
    title.innerText = this.songs[this.songIndex];
    audio.src = `music/${this.songs[this.songIndex]}.mp3`;
    cover.src = `images/${this.songs[this.songIndex]}.jpg`;
  }

  prev()
  {
    this.songIndex--;
    if (this.songIndex < 0) {
      this.songIndex = this.songs.length - 1;
    }

    this.loadSong();
    this.playSong();
  }

  next()
  {
    this.songIndex++;
    if (this.songIndex > this.songs.length - 1) {
      this.songIndex = 0;
    }

    this.loadSong();
    this.playSong();
  }

  // Play song
  playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa').classList.remove('fa-play');
    playBtn.querySelector('i.fa').classList.add('fa-pause');
  
    audio.play();
  }

  // Pause song
  pauseSong() {
    musicContainer.classList.remove('play');
  //   playBtn.querySelector('i.fa').classList.add('fa-play');
  //   playBtn.querySelector('i.fa').classList.remove('fa-pause');
    document.getElementById('x').classList.add('fa-play');
    document.getElementById('x').classList.remove('fa-pause');
  
    audio.pause();
  }

  switchMode()
  {
    this.mode ++;
  }
}

let player = new Player();

// Previous song
function prevSong() {
  player.prev();
}

// Next song
function nextSong() {
  player.next();
}

function switchMode(e)
{
  player.switchMode();
}

// Update progress bar
function updateProgress(e) {
//   console.log(e.srcElement)
  const progressPercent = 100 * e.target.currentTime / e.target.duration;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  audio.currentTime = (e.offsetX / this.clientWidth) * audio.duration;
}

// Event listeners
playBtn.addEventListener('click', () => {

  if (player.isPlaying()) {
    player.pauseSong();
  } else {
    player.playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
modeBtn.addEventListener('click', switchMode);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);
