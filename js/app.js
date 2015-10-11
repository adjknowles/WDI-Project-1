window.onload = function(){

  var question = $("#question");
  var answer1 = $("#answer1");
  var answer2 = $("#answer2");
  var answer3 = $("#answer3");
  var timer = $("#timer");
  var start = $("#start");
  var res;
  var play;

  $("#start").on("click", updateTimer);
  $('.answers').on("click", '.answer', chooseAnswer);
  $("li").on("click", getEquation);

  function chooseAnswer(){
    var answer = $(this).text();

    // Remove buttons
    $(".answers").html("")

    if (answer.toString() === res.toString()) {
      $(".guessing").removeClass("guessing").addClass("correct");
    } else {
      $(".guessing").removeClass("guessing");
    };

    if ($(".correct").length === 16) {
      // Stop timer
      // Display score?
      return  $('h1').html("Win!");
    }
  }

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
    if (!play) return false;

    $(".guessing").removeClass("guessing")
    $(this).addClass("guessing");

    var operators = ['+','-','*','/'];

    rnum1 = Math.floor((Math.random()*20)+1)
    rnum2 = Math.floor((Math.random()*10)+1)
    op = operators[Math.floor(Math.random()*4)];

    switch (op) {
      case '+': 
      res = rnum1 + rnum2; 
      break;
      case '-': 
      res = rnum1 - rnum2;
      break;
      case '*': 
      res = rnum1 * rnum2;
      break;
      case '/': 
      res = rnum1 / rnum2;
      break;
    }
    
    res = parseFloat(res.toFixed(2));

    result.innerHTML = res;
    question.html("What is " + rnum1 + " " + op + " " + rnum2 + " ?");

    var answers = [res];
    while (answers.length < 3) {
      var answer = generateRandomAnswer(res)
      if (answer && answers.indexOf(answer) === -1) {
        answers.push(answer);
      }
    }

    var myArray = answers;
    shuffleAnswers(myArray);

    $(".answers").append('<button class="answer">'+parseFloat(myArray[0].toFixed(2))+'</button>');
    $(".answers").append('<button class="answer">'+parseFloat(myArray[1].toFixed(2))+'</button>');
    $(".answers").append('<button class="answer">'+parseFloat(myArray[2].toFixed(2))+'</button>');
  }

  function updateTimer(){
    play = true;
    var counter = 10;

    setInterval(function(){
      counter --;
      if(counter >= 0){
        return timer.html(counter);
      } else {
        return $('h1').html("GAME OVER!")
        play = false;
        // Clear all squares and everything else!
      }
    }, 1000);
  }
}