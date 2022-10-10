// Arrays in JavaScript
//Array is one of the most important data types in javascript
// array starts from zero index
let fruits = ["Banana", "Blueberries", "Apples", "Mangoes", "Melons"];

let students = ["Nick", "Harry", "Sara", "David", "Mario"];

let marks = [10, 30, 40, 50];
let randomArray = ["banana", 10, "mangoes", 30, 40, "Apples"];
console.log(fruits.length);
console.log(students.length);
console.log(marks.length);
console.log(randomArray.length);
console.log(fruits);
console.log(fruits[3]);
console.log(fruits[0]);

// push adds at the end of array
fruits.push("Grapes");
console.log(fruits[5]);
console.log(fruits);

// unshift adds at the beginning of array
fruits.unshift("Oranges");
console.log(fruits);

fruits.sort();
console.log(fruits);

// loops in javascript
// 1. While loop 2. do while loop 3. for loop
let counterOne = 2;
counterOne = counterOne + 109;
console.log(counterOne);

// for (let counter = 1; counter < 100; counter++) {
//   console.log(counter);
// }
const number = parseInt(prompt("Enter an integer: "));

//creating a multiplication table
for (let i = 1; i <= 10; i++) {
  // multiply i with number
  const result = i * number;

  // display the result
  //   back ticks, template strings
  console.log(`${number} * ${i} = ${result}`);
}
