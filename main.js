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
    }
    function modalLoaded(){
        console.log("Posenet is initialized");
    }
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
        }
        
    }