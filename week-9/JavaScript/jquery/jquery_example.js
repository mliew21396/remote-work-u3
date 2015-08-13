// U3.W9:JQuery


// I worked on this challenge by myself.
// This challenge took me 0.5 hours.

$(document).ready(function(){

//RELEASE 0:
  //link the image

//RELEASE 1:

  //Link this script and the jQuery library to the jQuery_example.html file and analyze what this code does.

$('body').css({'background-color': 'pink'})

//RELEASE 2:
  firsth1 = $('body > h1')


//RELEASE 3:
  firsth1.css({'color': 'red', 'border-color': 'blue','border-width': '1px','border-style': 'solid','visibility': 'visible'});
$('body > div > h1').html('Cicadas');

//RELEASE 4: Event Listener
$('img').on('mouseover', function(e){
  // e.preventDefault()
  $(this).attr('src', 'http://farm4.staticflickr.com/3173/2771927375_42f9fd3c04.jpg');
  $(this).animate({
    right: '100px',
    opacity: '0.2',
    height: '200px',
    width: '200px'
  });
});
$('img').on('mouseleave', function(e){
  $(this).attr('src', 'dbc_logo.png');
  $(this).animate({
    opacity: '0.8',
    height: '500px',
    width: '500px'
  })
});


//RELEASE 5: Experiment on your own
// This was a learning experience. I've heard of jquery and used it a bit. But after using so much vanilla JS DOM manipulation, I was grateful to have a library like jquery available. Traversing is soooo much easier. I hope to learn to better use jquery better when onsite next week!





})  // end of the document.ready function: do not remove or write DOM manipulation below this.
