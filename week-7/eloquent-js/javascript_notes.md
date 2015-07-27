U3.W7: Eloquent JavaScript

I worked on this challenge [by myself, with:]

You should complete any coding sections in the [my_solution.js](my_solution.js) file unless prompted to do so here. You can run the file using node. Similar to Ruby simply go to your terminal and type `node file_name.js`.

## Release 0: Introduction

- Did you learn anything new about JavaScript or programming in general?
I didn't know that version for of JS was going to be an overhaul but was abandoned. I'm curious if the task was too daunting and complex.
- What do you still feel uncomfortable with?
I still feel uncomfortable on the history of JS. I may do my own research to get more details.

## Release 1: Chapter 1: Values, Types, and Operators

- Identify 2 similarities and 2 differences between JavaScript and Ruby syntax with regard to numbers, arithmetic, strings, booleans, and various operators you noticed.
Differences: JS uses short-circuiting of logical operators where it evaluates the first input first and only looks at the second as backup. Ruby on the other-hand looks at both. Also, JS does type conversion which can get confusing so I have to be careful of this.
Similarities:Arithmetics and strings act the same.

## Release 2: Chapter 2: Program Structure

- What is an expression?
Every value that is written literally
- What is the purpose of semicolons in JavaScript? Are they always required?
They define the end of a statement.
- What is the cause of a variable returning "undefined?"
when you try to display a not-a-number(NaN)
- Write your own variable and do something to it in the [my_solution.js](my_solution.js) file.

- What does console.log do and when would you use it? What Ruby method is this similar to?
it prints to the screen. Similar to puts, put, and p

- Write a program that asks for a user to input their favorite food. After they hit return have the program say: "Hey! That's my favorite too!"


**Use the browser console (in Dev Tools) to do this one. Node does not support the `prompt` or `alert` function. Paste your solution in the box below.**

```javascript

prompt("What's your favorite food?")
confirm("That's my favorite food too!")

```

- Describe `while` and `for` loops
while loops are exactly the same as in ruby. for loops take 3 parameters unlike ruby - the first is variable declaration, the second is the conditional, and the third is the block of code.
- Did you notice any other similarities or differences between Ruby and JavaScript in this section?
the biggest difference i noticed was how for loop is used.
- Complete at least one of the exercises (Looping a Triangle, FizzBuzz, or Chess Board) in the [my_solution.js](my_solution.js) file.


## Release 3: Functions

- Compare local and global variables
Local variables are available within a scope, while global variables are accessible anytime/anywhere
- When should you use functions?
use functions when you want to act on an object. functions can be thought of the verbs of coding.
- What is a function declaration?
creates a function that can be used later in the program
- Complete the `minimum` exercise in the [my_solution.js](my_solution.js) file.

## Release 4: Data Structures: Objects and Arrays

- What is the difference between using a dot and bracket to look up a property? Ex. array.max vs. array[max]
They both call the variable max but dot notation does not take variables with spaces or beginning with numbers

- Create an object called "me" that stores your name, age, 3 favorite foods, and a quirk in your [my_solution.js](my_solution.js) file.


- What is a JavaScript object with a name and value property similar to in Ruby?
length
```

## Release 6: Reflection
Javascript seems to be a less organized Ruby. I like javascript for it's simplicity straightforwardness, but miss the classes/OOD from ruby. I'm curious how JS is used in more OOD.
