import Player from '@vimeo/player'
import throttle from "lodash.throttle"
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
player.on("timeupdate", throttle((()=>{
    player.getCurrentTime().then(value => {localStorage.setItem("videoplayer-current-time", value)});
}), 1000))
player.on("play", ()=>{
    if (localStorage.getItem("videoplayer-current-time") != null){
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    }
})
