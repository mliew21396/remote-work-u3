[Week 8 Home](../)

#U3.W8: Tally Votes in JavaScript

## Learning Competencies
- Define local variables in JavaScript
- Define functions in JavaScript
- Create, add properties to, delete properties from, and access values in object literals
- Loop over an object's properties in JavaScript

## Summary:

In this challenge you will determine the winners of a class election.  You will be provided with three JavaScript objects: `votes`, `voteCount`, and `officers`.

```javascript
var votes = {
  "Alex": {
    president: "Bob",
    vicePresident: "Devin",
    secretary: "Gail",
    treasurer: "Kerry"
  },
  // continuing on for each voter ...
}

var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}
```

Your task is to go through `votes` and record each student's votes in `voteCount`. Once the votes have been tallied, assign the winners in `officers`.

For this challenge, you will want to be familiar with `for ... in ...` [looping over](http://stackoverflow.com/questions/921789/how-to-loop-through-javascript-object-literal-with-objects-as-members) an object's properties as well as bracket notation and accessing nested properties. See this article on [JavaScript basics](http://www.sitepoint.com/back-to-basics-javascript-object-syntax/) for help.

## Releases

## Release 0: Run the Tests

## Release 1: Write [pseudocode](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/pseudocode.md) for each failing test

## Release 2: Write an [initial solution](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/initial-solution.md) to pass each test

## Release 3: [Refactor](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/refactoring.md)

## Release 4: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md)

## Release 5: [Review](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/review.md) (Optional)
**Optional but HIGHLY encouraged!**
