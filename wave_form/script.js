const labels = document.querySelectorAll(".form-control label");
// console.log(labels);

let name = "Kelsey";
console.log(name);
name = name.split("");

console.log(name);
name = name.join("");
console.log(name);
// name = name.map(function (character, idx) {
//   console.log(character);
//   return `<span style="transition-delay:${idx * 50}ms">${character}</span>`;
// });
// console.log(name);

labels.forEach(function (label) {
  // <label>Email</label>
  //chaining
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
  console.log(label.innerHTML);
});

// split and join are built in string methods.

//forEach and Map methd
//and differece between them
//pratcice
