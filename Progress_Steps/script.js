const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

// circles.forEach(function (circle) {
//   circle.addEventListener("click", function () {
//     circles.forEach(function (circle) {
//       circle.classList.remove("active");
//     });
//     addActiveClass(circle);
//   });
// });
// function addActiveClass(circle) {
//   circle.classList.add("active");
// }

let currentActive = 1;
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > 4) {
    currentActive = 4;
  }
  update();
});

function update() {
  circles.forEach(function (element, index) {
    element.classList.remove("active");
    if (index < currentActive) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  console.log(((actives.length - 1) / (circles.length - 1)) * 100 + "%");
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
// prev.style.width = "200px";
