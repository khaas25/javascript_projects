// when you click on cross button, active class should be toggled.
const nav = document.querySelector("#nav");

const btn = document.querySelector("#toggle");

btn.addEventListener("click", function () {
  nav.classList.toggle("active");
});
