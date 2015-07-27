// U3.W7: Eloquent JavaScript

// Run this file in your terminal using `node my_solution.js`. Make sure it works before moving on!

// Release 2: Program Structure (Ch. 2)
// Write your own variable and do something to it.

var a = "apple"
console.log(a)

// Complete one of the exercises: Looping a Triangle, FizzBuzz, or Chess Board
//Triangle
var hash = "#"
for (var i = 1; i < 8; i++) {
  console.log(hash)
  hash += "#"
};
//FizzBuzz
for (var i = 1; i < 101; i++) {
  if (i%3 == 0 && i%5 == 0) {
    console.log("Buzz")
  } else if (i%3 == 0) {
    console.log("Fizz")
  } else {
    console.log(i)
  };
};
//Chess board
var string = ""
var size = 8
for (var i = 1; i <= (size+1)*size; i++) {
  if (i%(size+1) == 0) {
    string += "\n"
  } else if (i%2 !== 0) {
    string += " "
  } else {
    string += "#"
  };
};
console.log(string)

// Release 3: Functions

// Complete the `minimum` exercise.
function min (arg1, arg2) {
  if (arg1 > arg2) {
    return arg2
  } else if (arg2 > arg1) {
    return arg1
  } else {
    return "They are equal"
  };
}
console.log(min(3,3))

// Release 4: Data Structures: Objects and Arrays
// Create an object called "me" that stores your name, age, 3 favorite foods, and a quirk below.
me = {name: "Mat", age: 25, fav_foods: "pizza","prime rib","sushi",quirk: "I love baths"}