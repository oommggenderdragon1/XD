x = 0;
y = 0;
screen_width = 0;
screen_height= 0;
speech_data = 0;
draw_apple = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
to_number = 0;


function setup(){
canvas  = createCanvas(800,800);
}
screen_width = window.innerWidth;


function Start(){

    document.getElementById("status").innerHTML  = "System is listening please speak:";
    recognition.start();
    recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML  = "The speech recognised is :"+ content;
    if(content == "Apple"){
x = Math.floor(Math.random()*900);
y = Math.floor(Math.random()*900);
document.getElementById("status").innerHTML = "Started Drawing Apple";
draw_circle = "set";

}
for( i = 1; i <= 0, to_number; i++){
    x = Math.floor(Math.random);
    function preload(){
apple = loadImage("download(4).png");
console.log(createCanvas());
        
    }
    }
    
}

function draw(){
if(content){

    radius = Math.floor(Math.random()*100);
    circle(x,y,radius);
    document.getElementById("status").innerHTML = to_number+"Apple is drawn";
    draw_apple = "download(4).png";
  

    
}}}
