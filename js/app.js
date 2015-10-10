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
  var operator = document.getElementById("operator");

  function generateRandomAnswer(correct){
    var answer; 
    if (Math.random() > 0.5) {
      answer = Math.floor(correct - (Math.random()*(correct/Math.random() * 10)));
    } else {
      answer = Math.floor(correct + (Math.random()*(correct/Math.random() * 10)));
    }
    if (correct === answer) return false;
    return answer;
  }

  function shuffleAnswers(o){
  
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }


  function getEquation(){
    var operators = ['+','-','*','/'];

    rnum1 = Math.floor((Math.random()*20)+1);
    rnum2 = Math.floor((Math.random()*10)+1);
    op = operators[Math.floor(Math.random()*4)];

    var res;
    switch (op) {
      case '+': res = rnum1 + rnum2; 
      break;
      case '-': res = rnum1 - rnum2;
      break;
      case '*': res = rnum1 * rnum2;
      break;
      case '/': res = rnum1 / rnum2;
      break;
    }
    
    number1.innerHTML = rnum1;
    number2.innerHTML = rnum2;
    operator.innerHTML = op;
    result.innerHTML = res;

    var answers = [res];
    while (answers.length < 3) {
      var answer = generateRandomAnswer(res)
      if (answer && answers.indexOf(answer) === -1) {
        answers.push(answer);
      }
    }
    console.log(answers);

    var myArray = answers;
    shuffleAnswers(myArray);

    console.log(myArray)

    // Shuffle array
    // The values to the answer boxes
    
  }

  for (var i = 0; i < squares.length; i++) {
   squares[i].addEventListener("click", getEquation);
  }

  


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