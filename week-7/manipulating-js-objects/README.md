[Week 7 Home](../)

# U3.W7: Manipulating JavaScript Objects

## Learning Competencies
- Define local variables in JavaScript
- Create, add properties to, delete properties from, and access values from JavaScript Object literals
- Use pre-written tests to drive development

## Summary

In this challenge you will work with the following JavaScript object that has been assigned to the variable `terah`. You will have to complete each task without modifying the object itself. That means everything must be done outside of the curly braces.

```javascript
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
```

##Releases

## Release 0: Run the tests
You will find test code in the [my_solution.js](./my_solution.js) file associated with this challenge. Run the code from the command line using Node.js. All tests will log `true` in the console when they pass--`false`, otherwise.

## Release 1: Pass the Tests
You'll want to follow the outline below. Note that each step should build on but not modify any of the code before it.

1. Define a variable adam and use object literal notation to assign this variable the value of an object with no properties

2. Give `adam` a name property with the value "Adam".

3. Add a spouse property to `terah` and assign it the value of `adam`.

4. Change the value of the `terah` weight property to 125.

5. Remove the eyeColor property from `terah`.

6. Add a spouse property to `adam` and assign it the value of `terah`.

7. Add a children property to `terah` and use object literal notation to assign
 this variable to an empty object.

8. Add a `carson` property to the value of the `terah` children property. `carson` should be an object with a property `name` with the value "Carson".

9. Add a `carter` property to the value of the `terah` children property. `carter` should be an object with a property `name` with the value "Carter".

10. Add a `colton` property to the value of the `terah` children property. `colton` should be an object with a property `name` with the value "Colton".

11. Add a children property to `adam` and assign it the value of `terah.children`.

Follow the steps below to make the tests pass and complete the challenge.
The order of the steps corresponds to the order of the tests. After completing
each step, run your code to be certain that the next test has passed.

When all of the tests have passed, your final `terah` object will be logged to the console.

## Release 2: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md)

## Release 3: Commit and push your changes!

## Release 4: [Review other's solutions](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/review.md) **(Optional, but strongly recommended)**
Were there differences in the way you implemented the code based on the tests? Leave an issue telling the student what they did well and can do better next time. Be kind, specific and actionable. (You are expected to leave at least two comments for this challenge).
