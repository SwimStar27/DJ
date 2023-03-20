song="";

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(400,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,600);
}

function play(){
    song.play();
}