 // U3.W7: JavaScript Olympics

// I paired with: Bill on this challenge.

// This challenge took me 1 hours.


// 0. Warm Up
Mat = {name: "Mat", height: 67, sport:"Basketball", quote: "YOLO"}
Bill = {name: "Bill", height: 68, sport:"soccer", quote:"You miss 100% of the shots that you don't take."}

console.log(Mat.name == "Mat")
console.log(Bill.height == 68)
console.log(Mat.sport == "Basketball")
console.log(Bill.quote == "You miss 100% of the shots that you don't take.")

// 1. Bulk Up
// var winner = function(athlete) {
//   athlete.win = function() {
//     console.log((athlete.name + " won the " + athlete.sport));
//   }
// };

// function allWinners(array) {
//   return array.forEach(winner);
// }

function allWinners(array) {
  return array.forEach(function(athlete) {
    athlete.win = function() {
      console.log(athlete.name + " won the " + athlete.sport);
  }});
}

array = [Mat, Bill];
console.log(array);
allWinners(array);
console.log(array);
Mat.win();
Bill.win();


// 2. Jumble your words
function reverse(string) {
  answer = "";
  for (i = string.length - 1; i >= 0; i--) {
    answer += string[i]
  };
  return answer;
};

console.log(reverse("sentence") == "ecnetnes");

// 3. 2,4,6,8
// function isEven(num) {
//   return num % 2 == 0;
// }
// function evenOnly(array) {
//   return array.filter(isEven);
// }

function evenOnly(array) {
  return array.filter(function(num) {
    return num % 2 == 0;
  });
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(evenOnly(nums));


// 4. "We built this city"
function Athlete(name,height,sport,quote){
  this.name = name;
  this.height = height;
  this.sport = sport;
  this.quote = quote;
};

var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming", "It's medicinal I swear!")
console.log(michaelPhelps.constructor === Athlete)
console.log(michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.quote)



// 5. Reflection
//This challenge was good in that Bill and I reinforced our knowledge with JavaScript objects. We worked on manipulating, deleting, adding, and overall playing with JS objects. I enjoyed this challenge.