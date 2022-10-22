let box = document.querySelector("input");
let line = document.querySelector("#inv");
let captext = document.querySelector("#captcha");
let email = false;
let recap = false;
document.querySelector("#content").addEventListener("mousedown", (e) => {
  line.style.visibility = "visible";
  if (!box.value.includes("@")&& !box.value.includes(".com")||box.value.includes(" ") || box.value=="") {
    email= false;
  } else {
    email = true;
  }
});

document.querySelector("#recap").addEventListener("click", (e) => {
  e.target.src = "./Images/common/captchaDone.png";
  captext.style.visibility = "hidden";
  recap = true;
});

box.addEventListener("focus", (e) => {
  line.style.visibility = "hidden";
  
});

document.querySelector("button").addEventListener("click", (e) => {
  if (!email) {
    line.style.visibility = "visible";
    line.innerText = "The EmailAddress field is not a valid e-mail address.";
    line.style.color = "Red";
  } else if (!recap) {
    captext.style.visibility = "visible";
    captext.innerText = "Captcha is not valid !";
    captext.style.color = "Red";
  } else {
    localStorage.setItem("email", box.value);
    window.location.href = "./form.html";
  }
});
