// U3.W7: Separate Numbers with Commas in JavaScript **Pairing Challenge**


// I worked on this challenge with: Paulo.

// 0. Pseudocode
// create comma function(int)
  //convert this to a string
  //create reverse string var, then reverse
  //iterate over the index (i)
    //if index modulus is 0, apply comma if this index to the reversed string

  // 15000

  // 0 - 0
  // 0 - 1
  // 0 - 2
  // if [i] % 3  reverse_string += "," + [i]


// 1. Initial Solution
function comma(integer) {
//   var reverse_string = "";
  var final_answer = "";
//   var reverse_string = integer.toString() //.reverse()
  var input_integer_as_string = integer.toString()

  function reverse(input_string){
    var temp = ""
    for (var i = input_string.length - 1; i >= 0;i--){
      temp += input_string[i]
    }
    return temp
  }
  var reverse_string = reverse(input_integer_as_string);

  for (var i = 0 ; i <= reverse_string.length - 1; i++){
//     for (var i = reverse_string.length - 1; i >= 0;i--){
    if (i % 3 == 0 && i != 0){
      final_answer += "," + reverse_string[i];
//       final_answer += reverse_string[i] +  ",";
    } else {
      final_answer += reverse_string[i];
//       final_answer += reverse_string[i];
    }
//     console.log(i + reverse_string[i]);
  }
  console.log(final_answer)
  console.log(reverse(final_answer))
  return reverse(final_answer)
}
comma(15000)

// 3. Refactored Solution
function comma(integer) {
  var final_answer = "";
  var input_integer_as_string = integer.toString()

  function reverse(input_string){
    var temp = ""
    for (var i = input_string.length - 1; i >= 0;i--){
      temp += input_string[i]
    }
    return temp
  }

  var reverse_string = reverse(input_integer_as_string);

  for (var i = 0 ; i <= reverse_string.length - 1; i++){
    if (i % 3 == 0 && i != 0){
      final_answer += "," + reverse_string[i];
    } else {
      final_answer += reverse_string[i];
    }
  }
  return reverse(final_answer)
}
comma(15000)



// 2. Your Own Tests (OPTIONAL)
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (comma(15000) == "15,000"),
  "The value of comma(15000) should be 15,000",
  "1. "
)

// assert(
//   (adam instanceof Object),
//   "The value of adam should be an Object.",
//   "1. "
// )

// assert(
//   (adam instanceof Object),
//   "The value of adam should be an Object.",
//   "1. "
// )



// 4. Reflection
// I enjoyed working with Paulo on this challenge. It was cool to see how he thought of doing it as well as me. We both had completely different ways to do it but it helped broaden both of our perspectives.