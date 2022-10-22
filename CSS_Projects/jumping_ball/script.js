let ball=document.querySelector(".one");
let v=randomColor();
ball.addEventListener("animationiteration",e=>{
    if(e.elapsedTime%2){
        v=randomColor();
        ball.style.backgroundColor=v;
        ball.style.boxShadow=v +"0px 15px 30px 0px";
    }
});

let ball2=document.querySelector(".two");
ball2.addEventListener("animationiteration",e=>{
        ball2.style.backgroundColor=v;
        ball2.style.boxShadow=v +"0px 15px 30px 0px";
});
let ball3=document.querySelector(".three");
ball3.addEventListener("animationiteration",e=>{
        ball3.style.backgroundColor=v;
        ball3.style.boxShadow=v +"0px 15px 30px 0px";
});
let ball4=document.querySelector(".four");
ball4.addEventListener("animationiteration",e=>{
        ball4.style.backgroundColor=v;
        ball4.style.boxShadow=v +"0px 15px 30px 0px";
});
let ball5=document.querySelector(".five");
ball5.addEventListener("animationiteration",e=>{
        ball5.style.backgroundColor=v;
        ball5.style.boxShadow=v +"0px 15px 30px 0px";
});
let ball6=document.querySelector(".six");
ball6.addEventListener("animationiteration",e=>{
        ball6.style.backgroundColor=v;
        ball6.style.boxShadow=v +"0px 15px 30px 0px";
});
let ball7=document.querySelector(".seven");
ball7.addEventListener("animationiteration",e=>{
        ball7.style.backgroundColor=v;
        ball7.style.boxShadow=v +"0px 15px 30px 0px";
});
let ball8=document.querySelector(".eight");
ball8.addEventListener("animationiteration",e=>{
        ball8.style.backgroundColor=v;
        ball8.style.boxShadow=v +"0px 15px 30px 0px";
});
let ball9=document.querySelector(".nine");
ball9.addEventListener("animationiteration",e=>{
        ball9.style.backgroundColor=v;
        ball9.style.boxShadow=v +"0px 15px 30px 0px";
});
let ball0=document.querySelector(".zero");
ball0.addEventListener("animationiteration",e=>{
        ball0.style.backgroundColor=v;
        ball0.style.boxShadow=v +"0px 15px 30px 0px";
});

function randomColor(){
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    let rgbValue="rgb("+x+","+y+","+z+")";
    return rgbValue;
}
