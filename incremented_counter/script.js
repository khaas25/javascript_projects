// const counters = document.querySelectorAll(".counter");

// //forEach itself is a function, we need to pass a function as an argument to froEach when we call it
// counters.forEach(function (counter) {
//   //   console.log(counter.innerText);
//   counter.innerText = "0";
//   function updateCounter() {
//     const target = Number(counter.getAttribute("data-target"));
//     console.log(target);
//     const c = Number(counter.innerText);
//     const increment = target / 200;
//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innertext = target;
//     }
//   };
//   updateCounter();
// });
// setTimeout is a built in JS Function, that takes two arguments, first argument is the function that gets called after a given time, 2nd argument is the time delay in milliseconds.


// setTimeout is async 
setTimeout(hey, 5000);


function hey() {
  console.log("hiii");
}

// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//   counter.innerText = "0";

//   const updateCounter = () => {
//     const target = +counter.getAttribute("data-target");
//     const c = +counter.innerText;

//     const increment = target / 500;

//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });
