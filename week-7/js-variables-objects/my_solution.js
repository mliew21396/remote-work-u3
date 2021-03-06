// U3.W7: JavaScript Variables and Objects

// I paired by myself on this challenge.

// __________________________________________
// Write your code below.
secretNumber = 7
password = "just open the door"
allowedIn = false
members = ["John", "Joe", "Moe", "Mary"]





// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here.
//This challenge was fun, I liked using error driven testing to get more hands on. I hope we have more challenges like this since I learned where my weakpoints and strengths were after doing the readings.
//
//
//
//
//


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

// Reflection
//This challenge was good in introducing TDD. I enjoyed seeing how the syntax of these tests work. I'm interested in taking these tests to the next level.