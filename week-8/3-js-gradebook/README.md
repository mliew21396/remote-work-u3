[Week 8 and 9 Home](../../)

#U3.W8-9: A Gradebook from Names and Scores

## Learning Competencies
- Define local variables in JavaScript
- Define functions in JavaScript
- Create, add properties to, delete properties from, and access values in object literals

## Summary
For this challenge, assume there is a teacher with a list of students and a list of their respective test scores.  The teacher is providing you with this data which looks like ...

```javascript
var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]
```

You will take this data and transform it into a grade book.  The grade book will be a JavaScript object.

Follow the steps below to make the tests pass and complete the challenge in your [my_solution.js](my_solution.js) file.  The order of the steps
corresponds to the order of the tests.  After completing each step, run your code to be certain that the next test has passed.

In the past, you had the option of using dot notation or bracket notation. In this challenge you are forced to use bracket notation to reference some properties. Find out why here [medium article on dot vs bracket notation](https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d)


## Release 0: Create `gradebook`

Create a variable `gradebook` and assign it the value of an empty object.

## Release 1: Add property to `gradebook`

Make each student name in students a property of `gradebook` and assign each the value of a new object.

## Release 2: `testScores`

Give each student property of `gradebook` its own testScores property and assign it the value of the respective students scores from scores.

## Release 3: `addScore`

- addScore property to `gradebook` (assign it the value of a function that accepts name and score arguments)
- Have it push the score to the value of the testScore property of the `gradebook` property that matches the value of the name argument.

For example,
```javascript
    gradebook.addScore("Susan", 80) // would push the score 80 into the value of gradebook.Susan.testScores.
```
## Release 4: `getAverage`

Add the getAverage property to `gradebook` and assign it the value of a function.

## Release 5: Create the function  `average`

Have `average` accept an array of numbers and returns the average of those numbers.

## Release 6: Modify `getAverage`

Modify `getAverage` so that it accepts a name as a String (e.g., "Joseph") and returns the named students average. Use your average function you created in getAverage.

## Release 7: [Refactor](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/refactoring.md)

## Release 8: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md)