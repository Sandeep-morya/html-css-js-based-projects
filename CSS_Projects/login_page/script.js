let input = document.querySelectorAll("input");
let label = document.querySelectorAll("label");

input[0].addEventListener("focus", () => {
  animLabel(label[0]);
});

input[1].addEventListener("focus", () => {
  animLabel(label[1]);
});

input[0].addEventListener("blur", (e) => {
  resetAnim(label[0], e);
});

input[1].addEventListener("blur", (e) => {
  resetAnim(label[1], e);
});

function animLabel(x) {
  x.style.top = "-13%";
  x.style.fontSize = "12px";
  x.style.padding = "0 1%";
  x.style.left = "4%";
}
function resetAnim(x, y) {
  if (y.target.value == "") {
    x.style.fontSize = "16px";
    x.style.padding = "0";
    x.style.left = "7%";
    x.style.top = "30%";
  }
}
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.style.display = "none";
  document.querySelector("img").style.display = "block";
  setTimeout(function(){
    document.querySelector("img").style.display = "none";
    e.target.style.display = "grid";
  },3500)
});
