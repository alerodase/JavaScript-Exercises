const body = document.querySelector("body");
const p = document.querySelectorAll(".fn-remove-me");

p.forEach(p => {
    p.parentNode.removeChild(p)
});



