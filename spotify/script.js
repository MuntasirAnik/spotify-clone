console.log("spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');

let progressBar = document.getElementById('progressBar');
let gif =document.getElementById('gif');
let masterSongName =document.getElementById('masterSongnName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[

    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sia - Unstopable", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV-Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "post Malone -Rockstar ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},

    {songName: "Janji-Heroest", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Bad Liar", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Stereo_hearts", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Hall of Fame", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Heart Attack", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}


]
songItems.forEach((element,i)=>{
   // console.log(i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName})


//audioElement.play();

//play/pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } 
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () =>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    progressBar.value = progress;
})
progressBar.addEventListener('change', ()=> {
    audioElement.currentTime = progressBar.value * audioElement.duration /100; 
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e);
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })   
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})