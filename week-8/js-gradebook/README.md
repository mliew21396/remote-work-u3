[Week 8 Home](../)

#U3.W8: A Gradebook from Names and Scores

## Learning Competencies
- Define local variables in JavaScript
- Define functions in JavaScript
- Create, add properties to, delete properties from, and access values in object literals

## Summary
In this challenge you will be taking your knowledge of JavaScript to the next level! Assume there is a teacher with a list of students and a list of their respective test scores.  The teacher is providing you with this data which looks like ...

```javascript
var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100], // Joseph's cores
               [85, 80, 90, 90], // Susan's scores
               [75, 70, 80, 75], // William's scores
               [100, 90, 95, 85] ] // Elizabeth's scores
```

You will take this data and transform it into a grade book.  The grade book will be a JavaScript object.

Follow the steps below to make the tests pass and complete the challenge in your [my_solution.js](my_solution.js) file. The order of the steps
corresponds to the order of the tests. After completing each step, run the code to check it has passed the test.

In the past, you had the option of using dot notation or bracket notation. In this challenge you need to use bracket notation to reference some properties. Find out why in this [medium article](https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d) on dot vs. bracket notation.

## Releases
## Release 0: Create `gradebook`

Create a variable `gradebook` and assign it the value of an empty object.

## Release 1: Add property to `gradebook`

Make each student name in `students` a property of `gradebook` and assign each the value of a new object.

## Release 2: `testScores`

Give each `student` property of `gradebook` its own `testScores` property and assign it the value of the respective students scores from scores.

## Release 3: `addScore`

- Assign an `addScore` property to `gradebook`. Give it the value of a function that accepts `name` and `score` arguments.
- Have `addScore` push the score to the value of the `testScore` property of the `gradebook` property that matches the value of the `name` argument.

For example,
```javascript
    gradebook.addScore("Susan", 80) // would push the score 80 into the value of gradebook.Susan.testScores.
```
## Release 4: `getAverage`

Add the `getAverage` property to `gradebook` and assign it the value of a function.

## Release 5: Create the function `average`

Have `average` accept an array of integers and return the average of those integers.

NOTE: `getAverage` and `average` are different functions.

## Release 6: Modify `getAverage`

Modify `getAverage` so that it accepts a `name` as a String (e.g., "Joseph") and returns that student's average score. Use the average function you created in Release 5.

## Release 7: [Refactor](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/refactoring.md)

## Release 8: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md)

## Release 9: [Review](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/review.md) (Optional)
**Optional but HIGHLY encouraged!**
