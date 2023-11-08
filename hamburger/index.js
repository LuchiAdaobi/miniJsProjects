const btn = document.getElementById("btn");
const btnx = document.getElementById("btn-x");
const nav = document.getElementById("nav");

function toggleActive() {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
  btnx.classList.toggle("active");
}
btn.addEventListener("click", () => {
  toggleActive()
});
btnx.addEventListener("click", () => {
toggleActive()
});
