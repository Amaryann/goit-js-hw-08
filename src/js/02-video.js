import Player from '@vimeo/player'
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
player.on("timeupdate", ()=>{
    localStorage.setItem(videoplayer-current-time, player.getCurrentTime());
    console.log(player.getCurrentTime());
})
player.on("play", ()=>{
    player.setCurrentTime(localStorage.videoplayer-current-time);
})