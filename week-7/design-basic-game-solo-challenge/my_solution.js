 // U3.W7: Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description: Eat as many fishes with the penguin without getting eaten.
// Overall mission: Collect fishes
// Goals: Collect fishes, avoid polar bears
// Characters: Penguin, polar bears
// Objects:Penguin, fishes, polar bears
// Functions:move(up,left,right,down), collecting fishes adds counter

// Pseudocode
// create penguin object with a vertical-coordinate and a horizontal-coordinate
// create fish object with a vertical-coordinate and a horizontal-coordinate
//Generate Move method to act on penguin
  // Use a form at the bottom to receive inputs of which direction to move
  // Updates penguin movement
  // If penguin shares some coordinates as fish, penguin "eats" the fish
  // Cannot go off the screen
  // if it encounters polar bear, game over

// Initial Code
var penguin = {
        x_coord: 0,
        y_coord: 0,
        fish_counter: 0
      }
      var fish = {
        x_coord: 0,
        y_coord: 0,
      }
      var polar_bear = {
        x_coord: 0,
        y_coord: 0
      }

      //Main function when creating board/ loading page
      function initiateBoard(){
        generatePenguin();
        generateFish();
        generatePolarBear();
      };
      initiateBoard();

      //Move functions
      function moveUp () {
        resetFeedback();
        if (penguin.y_coord == 0) {
          wallWarning("up");
          return;
        };
        //setting new coordinates
        penguin.y_coord -= 1;
        move(0,-1);
        //check for fish
        eating_fish_check();
        polar_bear_check();
        if (document.getElementById('feedback').innerHTML == "You were Eaten! Game Over!") {
          removePenguin(0,-1);
        };
      };
      function moveDown () {
        resetFeedback();
        if (penguin.y_coord == 4) {
          wallWarning("down");
          return;
        };
        penguin.y_coord += 1;
        move(0,1);
        eating_fish_check();
        polar_bear_check();
        if (document.getElementById('feedback').innerHTML == "You were Eaten! Game Over!") {
          removePenguin(0,1);
        };
      };
      function moveLeft () {
        resetFeedback();
        if (penguin.x_coord == 0) {
          wallWarning("left");
          return;
        };
        penguin.x_coord -= 1;
        move(-1,0);
        eating_fish_check();
        polar_bear_check();
        if (document.getElementById('feedback').innerHTML == "You were Eaten! Game Over!") {
          removePenguin(-1,0);
        };
      };
      function moveRight () {
        resetFeedback();
        if (penguin.x_coord == 4) {
          wallWarning("right");
          return;
        };
        penguin.x_coord += 1;
        move(1,0);
        eating_fish_check();
        polar_bear_check();
        if (document.getElementById('feedback').innerHTML == "You were Eaten! Game Over!") {
          removePenguin(1,0);
        };
      };

      //CHILD FUNCTIONS
      //Feedback
      function resetFeedback () {
        document.getElementById('feedback').innerHTML = "Find more fish!";
      }
      function wallWarning (direction) {
          document.getElementById('feedback').innerHTML = "Can't move "+direction+". There's a wall there!";
      };
      //Generation
      function generatePenguin() {
        generateCoordinates(penguin);
        var penguinLoc = document.getElementById('mainDiv').children[penguin.y_coord].getElementsByTagName('div')[penguin.x_coord].children[0];
        penguinLoc.src = "http://www.clker.com/cliparts/z/X/z/P/G/v/confused-penguin-hi.png";
      };
      function generateFish() {
        do {
          generateCoordinates(fish);
        } while ((fish.x_coord == penguin.x_coord && fish.y_coord == penguin.y_coord)||(fish.x_coord == polar_bear.x_coord && fish.y_coord == polar_bear.y_coord))
        var fishLoc = document.getElementById('mainDiv').children[fish.y_coord].getElementsByTagName('div')[fish.x_coord].children[0];
        fishLoc.src = "http://emojipop.net/data/images/emoji_set_225.png";
      };
      function generatePolarBear () {
        do {
          generateCoordinates(polar_bear);
        } while ((polar_bear.x_coord == penguin.x_coord && polar_bear.y_coord == penguin.y_coord)||(polar_bear.x_coord == fish.x_coord && polar_bear.y_coord == fish.y_coord) )
        var polarBearLoc = document.getElementById('mainDiv').children[polar_bear.y_coord].getElementsByTagName('div')[polar_bear.x_coord].children[0];
        polarBearLoc.src = "https://chinesefontdesign.com/wp-content/uploads/2014/03/0957.gif";
      }
      function generateCoordinates (animal) {
        animal.y_coord = Math.floor(Math.random()*5);
        animal.x_coord = Math.floor(Math.random()*5);
      };
      //Movement
      function move (x,y) {
        var penguinLoc = document.getElementById('mainDiv').children[penguin.y_coord].getElementsByTagName('div')[penguin.x_coord].children[0];
        if ((penguin.y_coord == polar_bear.y_coord) && (penguin.x_coord == polar_bear.x_coord)) {
          return
        } else {
          penguinLoc.src = "http://www.clker.com/cliparts/z/X/z/P/G/v/confused-penguin-hi.png";
        };
        var prevPenguinLoc = document.getElementById('mainDiv').children[penguin.y_coord-y].getElementsByTagName('div')[penguin.x_coord-x].children[0].src = "";
        prevPenguinLoc.src = "";
      }
      function eating_fish_check () {
        if (penguin.y_coord == fish.y_coord && penguin.x_coord == fish.x_coord) {
          penguin.fish_counter += 1
          document.getElementById('fishes_eaten').innerHTML = "Fishes Eaten = "+penguin.fish_counter;
          document.getElementById('feedback').innerHTML = "Omp!";
          generateFish();
        };
      };
      function polar_bear_check () {
        if ((penguin.y_coord == polar_bear.y_coord) && (penguin.x_coord == polar_bear.x_coord)) {
          document.getElementById('feedback').innerHTML = "You were Eaten! Game Over!";
          replaceControlPad();

        };
      };
      function replaceControlPad () {
        document.getElementById('controlPad').style.display = 'none';
        document.getElementById('reset_button').style.display = 'inline';
      };
      function resetBoard () {
        var numImgs = document.getElementById('mainDiv').getElementsByTagName('img').length;
        var imgArray = document.getElementById('mainDiv').getElementsByTagName('img');
        for (var i = 0; i < numImgs; i++) {
          document.getElementById('mainDiv').getElementsByTagName('img')[i].src = "";
        };
        initiateBoard();
        displayControlPad();
        resetFeedback();
        penguin.fish_counter = 0;
        document.getElementById('fishes_eaten').innerHTML = "Fishes Eaten = "+penguin.fish_counter;
      };
      function displayControlPad () {
        document.getElementById('controlPad').style.display = 'inline';
        document.getElementById('reset_button').style.display = 'none';
      };
      function removePenguin (x,y) {
        var prevPenguinLoc = document.getElementById('mainDiv').children[penguin.y_coord-y].getElementsByTagName('div')[penguin.x_coord-x].children[0].src = "";
        prevPenguinLoc.src = "";
      };


// Refactored Code
// Visit the page that uses this JS!: http://mliew21396.github.io/projects/penguin_adventures.html
// I copied the HTML file below in case if you're curious. Here's the link to the github repo which would be much easier when reading: https://github.com/mliew21396/mliew21396.github.io/blob/master/projects/penguin_adventures.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <style type="text/css">
//       h3 {
//         width: 350px;
//         text-align: center;
//         margin: 15px;
//       }
//       p {
//         width: 350px;
//         margin: 10px 0px;
//       }
//       h4 {
//         margin: 0;
//       }
//       #mainDiv {
//           width: 350px;
//           height: 360px;
//       }
//       #mainDiv div {
//           width: 350px;
//           height: 70px;
//       }
//       #mainDiv div div {
//         width: 70px;
//         height: 70px;
//         outline: 1px dotted;
//         float: left;
//       }
//       #mainDiv div div img {
//         width: 100%;
//         height: 100%;
//         float: center;
//       }
//       #feedback {
//         width: 350px;
//         text-align: center;
//         float: left;
//         margin: 0;
//       }
//       #controlPad {
//         width: 350px;
//         height: 210px;
//       }
//       #controlPad div{
//         width: 350px;
//         height: 70px;
//       }
//       #controlPad div div {
//         width: 70px;
//         height: 70px;
//         float: left;
//       }
//       #controlPad img {
//         width: 100%;
//         height: 100%;
//         float: center;
//       }
//       .wrapper {
//         text-align: center;
//         width: 350px;
//       }
//       #reset_button {
//         display: none;
//       }
//     </style>
//   </head>
//   <body>
//     <h3>Penguin Adventures</h3>
//     <p>Click on the arrows to lead Mr. Blubbers to as many fishes as you can. Be careful, Mr. Blubbers isn't the only one hungry.</p>
//     <h4 id = "fishes_eaten">Fishes Eaten = 0</h4>
//     <div id="mainDiv">
//       <div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//       </div>
//       <div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//       </div>
//       <div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//       </div>
//       <div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//       </div>
//       <div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//         <div><img src=""></div>
//       </div>
//     </div>
//     <p id = "feedback">Welcome!</p>
//     <div id = "controlPad">
//       <div>
//         <div></div>
//         <div></div>
//         <div id = "top"><img src="http://www.clker.com/cliparts/3/f/4/a/1195423523162201924kuba_arrow_button_set_3.svg.med.png" onclick = "moveUp()"></div>
//         <div></div>
//         <div></div>
//       </div>
//       <div>
//         <div></div>
//         <div id = "left"><img src="http://www.clker.com/cliparts/2/9/c/f/11954229651703455648kuba_arrow_button_set_1.svg.med.png" onclick = "moveLeft()"></div>
//         <div></div>
//         <div id = "right"><img src="http://www.clker.com/cliparts/0/5/7/9/1195435734741708243kuba_arrow_button_set_2.svg.med.png" onclick = "moveRight()"></div>
//         <div></div>
//       </div>
//       <div>
//         <div></div>
//         <div></div>
//         <div id = "bottom"><img src="http://www.clker.com/cliparts/1/e/f/1/11954239071227223603kuba_arrow_button_set_4.svg.med.png" onclick = "moveDown()"></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//     <div class = "wrapper">
//       <button id = "reset_button" onclick = "resetBoard()">Reset Board</button>
//     </div>
//     <script type="text/javascript">
//       var penguin = {
//         x_coord: 0,
//         y_coord: 0,
//         fish_counter: 0
//       }
//       var fish = {
//         x_coord: 0,
//         y_coord: 0,
//       }
//       var polar_bear = {
//         x_coord: 0,
//         y_coord: 0
//       }

//       //Main function when creating board/ loading page
//       function initiateBoard(){
//         generatePenguin();
//         generateFish();
//         generatePolarBear();
//       };
//       initiateBoard();

//       //Move functions
//       function moveUp () {
//         resetFeedback();
//         if (penguin.y_coord == 0) {
//           wallWarning("up");
//           return;
//         };
//         //setting new coordinates
//         penguin.y_coord -= 1;
//         move(0,-1);
//         //check for fish
//         eating_fish_check();
//         polar_bear_check();
//         if (document.getElementById('feedback').innerHTML == "You were Eaten! Game Over!") {
//           removePenguin(0,-1);
//         };
//       };
//       function moveDown () {
//         resetFeedback();
//         if (penguin.y_coord == 4) {
//           wallWarning("down");
//           return;
//         };
//         penguin.y_coord += 1;
//         move(0,1);
//         eating_fish_check();
//         polar_bear_check();
//         if (document.getElementById('feedback').innerHTML == "You were Eaten! Game Over!") {
//           removePenguin(0,1);
//         };
//       };
//       function moveLeft () {
//         resetFeedback();
//         if (penguin.x_coord == 0) {
//           wallWarning("left");
//           return;
//         };
//         penguin.x_coord -= 1;
//         move(-1,0);
//         eating_fish_check();
//         polar_bear_check();
//         if (document.getElementById('feedback').innerHTML == "You were Eaten! Game Over!") {
//           removePenguin(-1,0);
//         };
//       };
//       function moveRight () {
//         resetFeedback();
//         if (penguin.x_coord == 4) {
//           wallWarning("right");
//           return;
//         };
//         penguin.x_coord += 1;
//         move(1,0);
//         eating_fish_check();
//         polar_bear_check();
//         if (document.getElementById('feedback').innerHTML == "You were Eaten! Game Over!") {
//           removePenguin(1,0);
//         };
//       };

//       //CHILD FUNCTIONS
//       //Feedback
//       function resetFeedback () {
//         document.getElementById('feedback').innerHTML = "Find more fish!";
//       }
//       function wallWarning (direction) {
//           document.getElementById('feedback').innerHTML = "Can't move "+direction+". There's a wall there!";
//       };
//       //Generation
//       function generatePenguin() {
//         generateCoordinates(penguin);
//         var penguinLoc = document.getElementById('mainDiv').children[penguin.y_coord].getElementsByTagName('div')[penguin.x_coord].children[0];
//         penguinLoc.src = "http://www.clker.com/cliparts/z/X/z/P/G/v/confused-penguin-hi.png";
//       };
//       function generateFish() {
//         do {
//           generateCoordinates(fish);
//         } while ((fish.x_coord == penguin.x_coord && fish.y_coord == penguin.y_coord)||(fish.x_coord == polar_bear.x_coord && fish.y_coord == polar_bear.y_coord))
//         var fishLoc = document.getElementById('mainDiv').children[fish.y_coord].getElementsByTagName('div')[fish.x_coord].children[0];
//         fishLoc.src = "http://emojipop.net/data/images/emoji_set_225.png";
//       };
//       function generatePolarBear () {
//         do {
//           generateCoordinates(polar_bear);
//         } while ((polar_bear.x_coord == penguin.x_coord && polar_bear.y_coord == penguin.y_coord)||(polar_bear.x_coord == fish.x_coord && polar_bear.y_coord == fish.y_coord) )
//         var polarBearLoc = document.getElementById('mainDiv').children[polar_bear.y_coord].getElementsByTagName('div')[polar_bear.x_coord].children[0];
//         polarBearLoc.src = "https://chinesefontdesign.com/wp-content/uploads/2014/03/0957.gif";
//       }
//       function generateCoordinates (animal) {
//         animal.y_coord = Math.floor(Math.random()*5);
//         animal.x_coord = Math.floor(Math.random()*5);
//       };
//       //Movement
//       function move (x,y) {
//         var penguinLoc = document.getElementById('mainDiv').children[penguin.y_coord].getElementsByTagName('div')[penguin.x_coord].children[0];
//         if ((penguin.y_coord == polar_bear.y_coord) && (penguin.x_coord == polar_bear.x_coord)) {
//           return
//         } else {
//           penguinLoc.src = "http://www.clker.com/cliparts/z/X/z/P/G/v/confused-penguin-hi.png";
//         };
//         var prevPenguinLoc = document.getElementById('mainDiv').children[penguin.y_coord-y].getElementsByTagName('div')[penguin.x_coord-x].children[0].src = "";
//         prevPenguinLoc.src = "";
//       }
//       function eating_fish_check () {
//         if (penguin.y_coord == fish.y_coord && penguin.x_coord == fish.x_coord) {
//           penguin.fish_counter += 1
//           document.getElementById('fishes_eaten').innerHTML = "Fishes Eaten = "+penguin.fish_counter;
//           document.getElementById('feedback').innerHTML = "Omp!";
//           generateFish();
//         };
//       };
//       function polar_bear_check () {
//         if ((penguin.y_coord == polar_bear.y_coord) && (penguin.x_coord == polar_bear.x_coord)) {
//           document.getElementById('feedback').innerHTML = "You were Eaten! Game Over!";
//           replaceControlPad();

//         };
//       };
//       function replaceControlPad () {
//         document.getElementById('controlPad').style.display = 'none';
//         document.getElementById('reset_button').style.display = 'inline';
//       };
//       function resetBoard () {
//         var numImgs = document.getElementById('mainDiv').getElementsByTagName('img').length;
//         var imgArray = document.getElementById('mainDiv').getElementsByTagName('img');
//         for (var i = 0; i < numImgs; i++) {
//           document.getElementById('mainDiv').getElementsByTagName('img')[i].src = "";
//         };
//         initiateBoard();
//         displayControlPad();
//         resetFeedback();
//         penguin.fish_counter = 0;
//         document.getElementById('fishes_eaten').innerHTML = "Fishes Eaten = "+penguin.fish_counter;
//       };
//       function displayControlPad () {
//         document.getElementById('controlPad').style.display = 'inline';
//         document.getElementById('reset_button').style.display = 'none';
//       }
//       function removePenguin (x,y) {
//         var prevPenguinLoc = document.getElementById('mainDiv').children[penguin.y_coord-y].getElementsByTagName('div')[penguin.x_coord-x].children[0].src = "";
//         prevPenguinLoc.src = "";
//       }
//     </script>
//   </body>
// </html>



// Reflection
// I had a really fun time with this solo challenge. Right off the bat I knew I wanted to use some DOM manipulation so I tried to keep the pseudocode straightforward to just JS and work on the pluses later(good html/css review too haha). My intial code I wanted to implement some OOD right off the bat instead of creating it and then refactoring later. I figured this will build a good mindset for later. This led me to start in the main function, but creating child functions below it so I could reuse those code snippets later. I soon had a lot of child functions and wasn't sure how to organize them so I hope my comments help a reader understand my groupings.
//As usual, my gut feelings were telling my that I was probably breaking some best practices but I wasn't sure. Hopefully I did as much separation of concerns as possible: generation, movement, checks, and resets. Please comment if you can think of any!
//In terms of what I've learned, I feel so much more fluent in vanilla JS. I've heard of the Jquery library and am curious how I could use it to improve my code above.
//I overall feel good about the learning competencies and hope to make another game similar to this later. Not sure if there is another language better for this or do all games inheriently use lots of lines of code? This was a fun challenge!
//
//
//
//