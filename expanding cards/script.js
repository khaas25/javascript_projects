// this will return a node list
// a node in html is an html tag
const panels = document.querySelectorAll(".panel");
const h3 = document.getElementById("h3");
console.log(panels);
// console.log(panels);
// console.log(panels.length);
const randomArray = [1, 1, 1, 1];
console.log(randomArray);
//arrays, nodelist, htmlCollection

//forEach is higher order array Method

// let panels = ['Div', 'Div', 'Div', 'Div', 'Div']
panels.forEach(function (elementToLoopThrough) {
  elementToLoopThrough.addEventListener("mouseover", function () {
    removeActiveClass();
    elementToLoopThrough.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
