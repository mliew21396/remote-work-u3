[Week 8 and 9 Home](../)
# U3.W8: GPS 1.2 - JavaScript

**DO NOT READ THROUGH OR ATTEMPT THIS CHALLENGE BEFORE YOUR GUIDED PAIRING SESSION**

## Learning Competencies
1. Create and manipulate objects in JavaScript
2. Define functions in JavaScript
3. Use Javascript built in methods
4. Debug using Node's error messages


## Summary
It is finally time... For the Phase 0 Javascript Olympics! We will be completing a pentathlon of challenges to stretch you Javascript knowledge. We will be going through a variety of tasks, some of they you will know how to do already, some will test your research abilities.

Write your code in Stypi and run your code in Node.

## RELEASE 0: Warm up: Objects

Create your athlete profiles. What is your name, age, sport and quote. You can use object literal notation for this exercise. Test in Node to make sure your properties are defined properly.

## RELEASE 1: Bulk up! Adding Properties to objects
Create a function that can take an array of athletes and give them a property called win that prints to the console that the athlete won at their sport.

Would it make more sense to have this function defined as a function expression or a function declaration?

## RELEASE 2: !sdrow ruoy elbmuJ: Reverse a string

Create a function that accepts a string as an argument and reverses it.

Use the built in Javascript methods for strings and arrays to accomplish this. [ MDN string docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [MDN array docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Think about how you would write this in Ruby and translate!

## RELEASE 3: 2, 4, 6 ,8! Who do we appreciate!: Remove the odd numbers from an array

Create a function that accepts any length array of numbers and removes any odd numbers.

You can use the manual method to do this, or use one of the built in array methods in Javascript [MDN array docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Are you missing Ruby yet?

## RELEASE 4: We built this city! Create a constructor function

Test code is below, copy paste it to your my_solution.js file. Skim this excellent but old article to learn what a constructor is and why you would want to use it. [Constructor](http://code.tutsplus.com/tutorials/the-basics-of-object-oriented-javascript--net-7670)

You will have plenty of time to look at the article later, focus on constructor definition right now.

```javascript
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming", "It's medicinal I swear!")
console.log(michaelPhelps.constructor === Athlete)
console.log(michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.quote)
```


## Release 6: Reflect

Whew! Nice work, you must be exhausted, take some time to cool down and reflect.

In the reflection section of your 'my_solution.js` file, reflect on your learning using the [reflection guidelines](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md). ***NOTE: Reflections are mandatory!***
