function preload(){

}

function setup(){

canvas = creatCanvas(720,480);
canvas.center();
video = createCapture(VIDEO);
video.size(720,480);
video.hide();

}

function draw(){
    
}

function take_Snapshot(){
    save('naren.png');
}