// First Project

// Game

// Math Quiz Grid

// This is a 1 player game.

// On the page
// - title
// - display 1 - to display who has won
// - 4 x 4 grid (could potentially be more)
// - display 2 - displays the question
// - 3 answer buttons - player selects answer 
// - a button to restart play after game ends
// - a timer

// Game play
// - the player will click on a tile and the question will appear in the display.
// - the player will then be able to pick 1 of 3 options by clicking the relevant button
// - if the player enters the correct answer, the tile will appear and a message will appear in the display 1, and the next player will take their turn.
// - if the player enters the incorrect answer, a message will appear in the display 1, and the player can try again/do another tile.
// - the game ends when the timer runs out.
// - the object of the game is to get as many tiles as possible.
// - at the end of game play a button will be displayed to restart play.


window.onload = function(){

  var squares = document.getElementsByTagName("li");
  var display = document.getElementsByClassName("display")[0];
  var number1 = document.getElementById("number1");
  var number2 = document.getElementById("number2"); 

  // getEquation();

  function getEquation(){
    // num1=document.getElementById("number1");
    // num2=document.getElementById("number2");   
    rnum1 = Math.floor((Math.random()*20)+1);
    rnum2 = Math.floor((Math.random()*20)+1);
    number1.innerHTML = rnum1
    number2.innerHTML = rnum2    
  }

  for (var i = 0; i < squares.length; i++) {
   squares[i].addEventListener("click", getEquation);
  }



// var numberOne
// var numberTwo
// var operator

//   $(function(){
//     $('li').on("click", updateButton);
//     })

//   function updateDisplay(){
//     console.log("clicked")
//   }

//   function updateButton(){
//     $('<p>Options</p>').appendTo('#button');
//   }






















}