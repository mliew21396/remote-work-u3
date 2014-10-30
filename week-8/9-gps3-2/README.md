[Week 8 and 9 Home](../)
# U3.W8: GPS 1.2 - JavaScript

**DO NOT READ THROUGH OR ATTEMPT THIS CHALLENGE BEFORE YOUR GUIDED PAIRING SESSION**

## Learning Competencies
1. Create and manipulate objects in JavaScript
2. Define functions in JavaScript
3. Use Javascript built in methods
4. Debug using Node's error messages


## Summary
It is finally time... For the Phase 0 Javascript Olympics! You will be completing a pentathlon of challenges to stretch your JavaScript knowledge. You will be going through a variety of tasks, some of them you will know how to do already, some will test your research abilities.

Write your code in Stypi and run your code in Node.

## RELEASE 0: Warm up: Objects

Create athlete profiles for yourself. What is your name, height, sport and quote. You can use object literal notation for this exercise. Test in Node to make sure your properties are defined properly.

## RELEASE 1: Bulk up: Add properties to objects

Create a function that can take an array of athletes and and adds a property called `win`. `win` should print "{name} won the {event}!"

Would it make more sense to have `win` be defined as a function expression or a function declaration?

## RELEASE 2: !sdrow ruoy elbmuJ: Reverse a string

Create a function that accepts a string as an argument and reverses it.

Use the built in Javascript methods for strings and arrays to accomplish this. [MDN string docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [MDN array docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**HINT:** Think about how you would write this in Ruby and translate!

## RELEASE 3: 2, 4, 6 ,8! Who do we appreciate?: Remove odd numbers from an array

Create a function that accepts an array of numbers. Return an array with only the even numbers present.

You can do this manually or use built-in [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Are you missing Ruby yet?

## RELEASE 4: "We Built this City": Build a constructor function

Test code has been provided for you. Copy paste it to your my_solution.js file. Read the definition of a constructor function from this [excellent albeit old article](http://code.tutsplus.com/tutorials/the-basics-of-object-oriented-javascript--net-7670). This is a great article to return to when you have the time to learn more about constructor functions.


```javascript
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming", "It's medicinal I swear!")
console.log(michaelPhelps.constructor === Athlete)
console.log(michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.quote)
```


## Release 6: Reflect

Whew! Nice work, you must be exhausted, take some time to cool down and reflect individually after the session is over. This should take about 10-15 minutes.

In the reflection section of your 'my_solution.js` file, reflect on your learning using the [reflection guidelines](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md). ***NOTE: Reflections are mandatory!***
