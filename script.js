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
