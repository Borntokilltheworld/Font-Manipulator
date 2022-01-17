noseX= 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX =0;

function setup(){
video = createCapture(VIDEO);
video.size(550,500);


canvas = createCanvas(550,500);
canvas.position(560,150);

poseNet = ml5.poseNet(video,modalLoaded);
poseNet.on('pose',gotPoses);

}
function draw(){
    background("#FF0000");
    document.getElementById("font_side").innerHTML = "Size of the font will be "+difference+"px";
    fill("#0000FF");
  text('Games are the best',noseX,noseY);
    text-size(difference);
}
function modalLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX- "+noseX,"noseY- "+noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWristX- "+leftwristX,"rightWristX- "+rightwristX)
    }
    
}