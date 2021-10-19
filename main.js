function setup(){
canvas=createCanvas(640 , 420);
canvas.center();

objectIdentifier=ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML="Status = Detecting Object";
}

function modelLoaded(){
console.log("Model Is Loaded");
Status=true;
objectIdentifier.detect(img , gotResults);
}

function gotResults(error , results){
if(error){
console.error(error);
}
console.log(results);
}

img="";
Status="";

function preload(){
img=loadImage("dog_cat.jpg");
}

function draw(){
image(img , 0 , 0 , 640 , 420);
fill("#FF0000");
text("Dog" , 45 , 75);
noFill();
stroke("#FF0000");
rect(30 , 60 , 450 , 350);

fill("#FF0000");
text("Cat" , 320 , 120);
noFill();
stroke("#FF0000");
rect(300 , 90 , 270 , 320);
}