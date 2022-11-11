const toggleBtns = document.querySelectorAll(".faq-toggle");

console.log(toggleBtns);
toggleBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.parentNode.classList.toggle("active");
    console.log(btn);
  });
});
