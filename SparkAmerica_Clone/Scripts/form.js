let form=document.querySelector("form");
form[0].value=localStorage.getItem("email");
let sub=true;
let array=document.querySelectorAll(".notice");
let input=document.querySelectorAll("input");
let image=document.querySelector("body > img");
input.forEach(e=>{
    e.addEventListener("click",el=>{
        array.forEach(em=>{
            em.style.display="none";
            image.style.width="200%";
        })
    });
})

document.querySelector("button").addEventListener("click",e=>{
    e.preventDefault();
    for(let i=0; i<input.length-2; i++){
        if(input[i].value==""){
            sub=false;
            array[i].style.display="block";
            image.style.width="250%";
        }
    }
    
    if(!input[8].checked){
        array[8].style.display="block"
        sub=false;
    }
    if(!input[9].checked){
        array[9].style.display="block";
        sub=false;
    }
    if(input[1].value!=input[2].value){
        array[2].innerText="Password does not match"
        array[2].style.display="block";
        sub=false
    }

    if(sub){
        alert("Form Submitted \n THE END");
    }
})