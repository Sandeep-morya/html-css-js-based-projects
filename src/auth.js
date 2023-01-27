let auth = localStorage.getItem("auth") || "false";

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	let email = e.target[0].value;
	let pass = e.target[1].value;
	if (email && pass) {
		auth = "true";
		document.querySelector("h2").textContent =
			"Login Successfull ✅ Now You Can Download Any File You Want";
		setTimeout(closeDiv, 500);
	} else {
		document.querySelector(".message").textContent =
			"Both fields are required !";
		e.target.style.border = "1px solid red";
	}
});

document.querySelector(".fa-xmark").addEventListener("click", closeDiv);
function closeDiv() {
	let arr = document.querySelectorAll("form>*");
	arr.forEach((el) => (el.style.display = "none"));
	document.querySelector("form").style.width = "0";
	setTimeout(function () {
		document.querySelector("#login_page").style.display = "none";
	}, 1000);
}

function openLogin() {
	window.scrollTo(0, 0);
	document.querySelector("#login_page").style.display = "block";
	setTimeout(function () {
		let arr = document.querySelectorAll("form>*");
		arr.forEach((el) => (el.style.display = "block"));
		document.querySelector("form").style.width = "30%";
	}, 500);
}
