let player = new Player();

window.onload = function(){
  player.loadSong()

  player.getList()
  var lis = playlist.getElementsByTagName('li');
  for (var p = 0; p < player.songs.length; p++) {
      lis[p].index = p
      lis[p].onclick = function(e){
        console.log(this.index)
        player.loadSong(this.index);
        player.playSong();
      }
  }
  
}

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

function setVolume(e){
  curr_track.volume = volume_slider.value / 100;
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
