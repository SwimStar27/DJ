song="";
leftwx = 0;
leftwy = 0;
rightwx = 0;
rightwy= 0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(200,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video,0,0,200,400);
    fill("#FF0000");
    stroke("#FF0000");

    if(scorelw > 0.2){
    circle(leftwx,leftwy,24);
    Cheesecake = Number(leftwy);
    Brownie = floor(Cheesecake);
    Volume = Brownie/400;
    document.getElementById("volume").innerHTML="Volume:  " + Volume;
    song.setVolume(Volume);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
   if(results.length > 0){
    console.log(results);
    leftwx = results[0].pose.leftWrist.x;
    leftwy = results[0].pose.rightWrist.y;
    console.log("Left Wrist X:  " + leftwx + "Left Wrist Y:" + leftwy);

    scorelw = results[0].pose.keypoints[9].score;

    rightwx = results[0].pose.rightWrist.x;
    rightwy = results[0].pose.rightWrist.y;
    console.log(" Right Wrist X: " + rightwx + "Right Wrist Y: " + rightwy);
   } 
}