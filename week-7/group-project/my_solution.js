 // U3.W7: JavaScript Telephone

// My role in the group is: person 4 of 4

// Here is my part of the challenge:
// Refactored Solution:

function sum_mode_median(array) {

  var validArray = [];
  var sum = 0;
  var mode = 0;
  var median = 0;
  var returnArray = [];
  // Find the sum
  for(var i = 0; i < array.length; i++){
    if(!isNaN(array[i]))
    {
      validArray.push(array[i]);
      sum += array[i];
    }
  }
  returnArray.push(sum);

  // Find the mode or average?
  mode = sum / validArray.length;
  returnArray.push(mode);

  // Find the median
  validArray = validArray.sort(function (a, b) {return a - b;});
  var halfofLength = Math.floor(validArray.length/2);
  if(validArray.length % 2)
    median = validArray[halfofLength];
  else
    median = (validArray[halfofLength-1] + newArray[halfofLength]) / 2.0;
  returnArray.push(median);

  return returnArray;
}

// User Stories
// - There should be a function that takes an array of numbers
// - This array should only contain numbers
// - The function should return an array of 3 values: one being the sum of those values, the second being the mode(or average?), and the third should be the median or middle number.

//Refelction:
// I learned how key communication is on a development team. One miscommunication can be catastrophic towards the end. Our code didn't pass the tests because there was a problem since the beginning. This was a good lesson in really working as a team and how working individually can be so much worse than correcting a problem early.