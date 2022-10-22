function header() {
  let header = document.querySelector("#header");
  let logo = document.createElement("div");
  logo.id = "logo";
  let logo_image = document.createElement("img");
  logo_image.src = "./Images/homepage/SparkAmericaLogo.png";
  logo_image.addEventListener("click",e=>{
    window.location.href="./index.html"
  });
  logo_image.style.cursor="pointer";
  logo.append(logo_image);

  let navbar = document.createElement("div");
  navbar.id = "navbar";
  let a2 = document.createElement("a");
  a2.href = "./joinTheMovement.html";
  a2.innerText = "JOIN THE MOVEMENT";

  let a3 = document.createElement("a");
  a3.href = "./partners.html";
  a3.innerText = "PARTNERS";

  let a4 = document.createElement("a");
  a4.href = "./calendar.html";
  a4.innerText = "CALENDAR";

  let a5 = document.createElement("a");
  a5.href = "./theApp.html";
  a5.innerText = "THE APP";

  let a6 = document.createElement("a");
  a6.href = "./contactUs.html";
  a6.innerText = "CONTACT US";

  let a7 = document.createElement("a");
  a7.href = "./register.html";
  a7.innerText = "REGISTER";

  let fb = document.createElement("img");
  fb.id = "fb";
  fb.src = "./Images/homepage/fb.png";

  let insta = document.createElement("img");
  insta.id = "insta";
  insta.src = "./Images/homepage/insta.png";

  navbar.append(a2, a3, a4, a5, a6, a7, fb, insta);
  header.append(logo, navbar);
}
header();

