document.querySelectorAll("button").forEach(e => {
    e.addEventListener("mouseover",el=>{
        el.target.style.backgroundColor="#595959";
        el.target.style.outline="1px solid #595959"
    });
});

document.querySelectorAll("button").forEach(e => {
    e.addEventListener("mouseout",el=>{
        el.target.style.backgroundColor="#d7282f";
        el.target.style.outline="none";
    });
});