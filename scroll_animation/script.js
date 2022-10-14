const boxes = document.querySelectorAll(".box");
// let fruits = ["Apple", "Mango", "Banana"];

// fruits = fruits.map(function (fruit, index) {
//   console.log(fruit, index);
//   return fruit + "s";
// });

// console.log(fruits);
window.addEventListener("scroll", checkboxes);
function checkboxes() {
  const triggerBottom = window.innerHeight - 0.2 * window.innerHeight;
  console.log(triggerBottom);

  //forEach is loop , that takes a function as it's argument
  //   forEach only targets one element at a time
  boxes.forEach(function (arrayElement) {
    console.log(arrayElement);
    const boxTop = arrayElement.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      arrayElement.classList.add("show");
    } else {
      arrayElement.classList.remove("show");
    }
  });
}

// ! attached event listener on entire window on line 10.  If the top of the box is less than the window height we add the class on line 20/21.   otherwise we remove the class on line 23.

//10 is the argument
// checkboxes(10);
