const root = document.querySelector("html");

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Following extra cursor element
const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
	console.log(e);
	setPosition(follower, e);
	setPosition(cursor, e);
});

function setPosition(element, e) {
	element.style.transform = `perspective(500px) translate3d(${e.layerX-10}px, ${e.layerY}px, 0)`;
}
