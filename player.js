
//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
  }
  
class Player {
    constructor() {

      this.songs     = ['hey', 'summer', 'ukulele'];
      this.songIndex = 0;
  
      this.modelist2func  = 
      { 
        "repeat":()=>{return 0},
        "circle":()=>{return 1},
        "random":()=>{return randomNum(1, this.songs.length - 1)}
      };
      this.modelist2icon  = 
      { 
        "repeat":["fa", "fa-music"],
        "circle":["fa", "fa-rotate-right"],
        "random":["fa", "fa-gratipay"]
      };
      this.modelist  = Object.keys(this.modelist2func);
      this.mode      = 1;
      
      this.loadSong()
    }
  
    isPlaying()
    {
      return musicContainer.classList.contains('play');
    }
    
    loadSong(index) {
      if (arguments.length == 1)
      {
        this.songIndex = index
      }
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
      this.songIndex += this.modelist2func[this.modelist[this.mode]]();
      if (this.songIndex >= this.songs.length) {
        this.songIndex %= this.songs.length;
      }
  
      this.loadSong();
      this.playSong();
    }
  
    // Play song
    playSong() {
      musicContainer.classList.add('play');
      
      x.classList.remove('fa-play');
      x.classList.add('fa-pause');
    
      audio.play();
    }
  
    // Pause song
    pauseSong() {
      musicContainer.classList.remove('play');
      // playBtn.querySelector('i.fa').classList.add('fa-play');
      // playBtn.querySelector('i.fa').classList.remove('fa-pause');
      x.classList.add('fa-play');
      x.classList.remove('fa-pause');
    
      audio.pause();
    }
  
    switchMode()
    {
      this.mode ++;
      if (this.mode >= this.modelist.length) {
        this.mode = 0;
      }

      mode_icon.classList = "";
      mode_icon.classList.add(...this.modelist2icon[this.modelist[this.mode]]);
    }

    getList()
    {
        for (var p = 0; p < this.songs.length; p++) {
            playlist.innerHTML += '<li>'+'<img src="images/'+this.songs[p]+'.jpg" alt="No cover">'
              +'<span>'+this.songs[p]+'</span>'
            //   +'<a href="#">'+''+this.songer[p]+'</a><li>';
        };
    }
  }
  