var levelCounter=1;
var colorArr=["green","red","yellow","blue"];
var soundArr=["sounds/green.mp3","sounds/red.mp3","sounds/yellow.mp3","sounds/blue.mp3"];
var map=new Map();
for(var i=0;i<colorArr.length;i++){
    map.set(colorArr[i],soundArr[i]);
}
var pattern=[];
$(document).on("keypress",function(event){
    $("h1").text("Level "+levelCounter);
    play();
});

function generatePattern(){
    return Math.round(Math.random()*3);
}

function play(){
    var num=generatePattern();
    var colorChoosen=colorArr[num];
    animateAndSound(colorChoosen);
    pattern.push(colorChoosen);
}

function animateAndSound(colorChoosen){
    $("#"+colorChoosen).addClass("pressed");
    
}