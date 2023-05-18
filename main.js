song1="song1.mp3";
song2="song2.mp3";

function preload(){
    song=loadSound("song1.mp3");
    song=loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0 , 0 ,600 , 500)
}