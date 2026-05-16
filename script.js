// TYPE EFFECT
function typeText(text, id, speed=50){
let i=0;
let el=document.getElementById(id);

let interval=setInterval(()=>{
el.innerHTML+=text[i];
i++;
if(i>=text.length) clearInterval(interval);
},speed);
}

// INTRO SEQUENCE
window.onload=function(){

let loader=document.getElementById("loader");

setTimeout(()=>{
loader.style.display="none";
},3000);

if(document.getElementById("typing")){
typeText("Loading our love story...", "typing");
}

}

// BLOW CANDLE
function blow(){

document.getElementById("flame").style.display="none";

confetti({particleCount:200,spread:120});

setTimeout(()=>{
window.location.href="letter.html";
},2000);

}

// FINAL
function end(){

confetti({particleCount:400,spread:180});

setTimeout(()=>{
alert("Our story never ends ❤️");
},1000);

}