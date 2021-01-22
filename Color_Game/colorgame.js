var numSquares=6;
var color=generateRandomColor(numSquares);
var pickedColor=pickcolor();
var h1=document.querySelector("h1");
var square=document.getElementsByClassName("square");
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;

var message=document.querySelector("#message");

var reset=document.querySelector("#reset");

reset.addEventListener("click",function(){
    color=generateRandomColor(numSquares);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    reset.textContent="New Colors";
    message.textContent="";
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor=color[i];
    }
    h1.style.background="steelblue";
    
});

for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor=color[i];
    square[i].addEventListener("click",function(){
       var clickedColor=this.style.backgroundColor;
       if(clickedColor===pickedColor){
            message.textContent="Correct" ;
            reset.textContent="Try again? ";
            changeColor(pickedColor);
            h1.style.backgroundColor=pickedColor;
            h1.style.background=pickedcolor;
       } 
       else{
            this.style.backgroundColor="#232323";
            message.textContent="Try Again";
       }
    });
}

function changeColor(color){
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor=pickedColor;
    }
}

function pickcolor(){
    var random=Math.floor(Math.random()*color.length)
    return color[random];
}
function generateRandomColor(num) {
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(generateColor());
    }
    return arr;
}

function generateColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", "+ g +", " + b +")";

}
var hard=document.getElementById("hard");
var easy=document.getElementById("easy");

easy.addEventListener("click",function() {
    numSquares=3;
    hard.classList.remove("selected");
    easy.classList.add("selected");
    color=generateRandomColor(numSquares);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++){
        if(color[i]){
            square[i].style.backgroundColor=color[i];
        }
        else{
            square[i].style.display="none";
        }
    }
});

hard.addEventListener("click",function(){
    numSquares=6;
    easy.classList.remove("selected");
    hard.classList.add("selected");
    color=generateRandomColor(numSquares);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++){
        
        square[i].style.backgroundColor=color[i];
    
        square[i].style.display="block";
        
    }
   
});