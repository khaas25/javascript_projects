const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
console.log("script filer");
let load = 0;
// called blurring function after 30ms.  its delayed.  It needs two arguments.. the function and then the timer.
let int = setInterval(blurring, 30);

function blurring() {
  load++;
  console.log("inside blurring method");
  if (load > 99) {
    clearInterval(int);
  }
  loadingText.innerText = `${load}%`;
  //counter goes from 0 to 100.
  //opacity goes from 1 to 0
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
