// U3.W9: GroceryList Revisited


// I worked on this challenge with Nick.
// This challenge took me [#] hours.

//  Pseudocode



//  Initial Solution
// grocery_list = [];

// function list() {
//   this.display = function() {
//       console.log(grocery_list);
//   };

//   this.add = function(item){
//       grocery_list.push(item.name)
//         console.log(item.name + " added to list.");
//   };

//   this.remove = function (item) {
//       for (var count = 0; count < grocery_list.length; count++) {
//           if(grocery_list[count] === item.name) {
//              grocery_list.splice(count, 1);
//              console.log(item.name + " removed from list.");
//           } else if (count == grocery_list.length-1) {
//             console.log(item.name + " not found.");
//           };
//       };
//   };
// };


// entry1 = {
//   name: "milk",
//   quantity: 1
// };

// entry2 = {
//   name: "bread",
//   quantity: 2
// };

// entry3 = {
//   name: "beer",
//   quantity: 6
// }

// //make new instance
// var new_list = new list();
// new_list.display();
// new_list.add(entry1);
// new_list.add(entry2);
// new_list.remove(entry2);
// new_list.remove(entry3);

// new_list.display();
//  Refactored Solution
grocery_list = {};

function list() {
  this.display = function() {
      console.log(grocery_list);
  };

  this.add = function(item){
      grocery_list[item.name] = item.quantity;
        console.log(item.name + " added to list with quantity: " + item.quantity);
  };

  this.remove = function (item) {
    for (var key in grocery_list) {
      if (!grocery_list.hasOwnProperty(item.name)){
          console.log("No item to remove.");
        return;
      };
      if (key == item.name) {
        var quantity = grocery_list[key];
        var new_quantity = quantity - item.quantity;
        if (new_quantity <1) {
          delete grocery_list[key];
        };
        grocery_list[key] = new_quantity;
        console.log(item.name + " now has new amount: " + new_quantity)
      };

    }
  };

};


entry1 = {
  name: "milk",
  quantity: 5
};

entry2 = {
  name: "bread",
  quantity: 2
};

entry3 = {
  name: "beer",
  quantity: 6
}
entry4 = {
  name: "bread",
  quantity: 1
}

//make new instance
var new_list = new list();
new_list.display();
new_list.add(entry1);
new_list.add(entry2);
new_list.display();

new_list.remove(entry4);


new_list.remove(entry3);

new_list.display();







//  DRIVER TESTS GO BELOW THIS LINE






//  Reflection