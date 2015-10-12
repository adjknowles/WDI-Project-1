window.onload = function(){

  var question    = $("#question");
  var answer1     = $("#answer1");
  var answer2     = $("#answer2");
  var answer3     = $("#answer3");
  var timer       = $("#timer");
  var start       = $("#start");
  var res;
  var play;
  var playerScore = 0;
  var A;

  $("#start").on("click", updateTimer);
  $("#instructions").on("click", getInstructions);
  $('.answers').on("click", '.answer', chooseAnswer);
  $("li").on("click", getEquation);
  $("#newgame").on("click", newGame);

  function getInstructions(){
    $('#instruct').html("Click start to begin." + "<br/>" + "Select a square and pick the correct answer below." + "<br/>" + "Then move on to another square." + "<br/>" + "Answer as many squares as you can in 1 minute.");
  }

  function chooseAnswer(){
    var answer = $(this).text();

    $(".answers").html("")

    if (answer.toString() === res.toString()) {
      $(".guessing").removeClass("guessing").addClass("correct");
      playerScore++;
      question.html("")
    } else {
      $(".guessing").removeClass("guessing");
    };

    if ($(".correct").length === 5) {
      clearInterval(A);
      $("#question").hide();
      $(".grid").hide();
      return  $('#score').html("Well Done!" + "<br/>" + "You Scored The Maximum " + playerScore + " Points!");
    }
  }

  function generateRandomAnswer(correct){
    var answer; 
    if (Math.random() > 0.5) {
      answer = Math.floor(correct - (Math.random()*10));
    } else {
      answer = Math.floor(correct + (Math.random()*10));
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

    $(".answers").html('<button class="answer">'+parseFloat(myArray[0].toFixed(2))+
      '</button>' + '<button class="answer">'+parseFloat(myArray[1].toFixed(2))+
      '</button>' + '<button class="answer">'+parseFloat(myArray[2].toFixed(2))+'</button>');
  }

  function updateTimer(){
    var counter = 30;
    play = true;

    $("#instruct").hide();

    A = setInterval(function(){
      counter --;
      if(counter >= 0){
        return timer.html(counter);
      } else {
        $("#question").hide();
        timer.hide();
        $(".grid").hide();
        return $('#score').html("GAME OVER!" + "<br/>" + "You Scored " + playerScore + " Points");
        play = false;
      }
    }, 1000);
  }

  function newGame(){
    setTimeout(location.reload(true), 5000)
    playerScore = 0
    res = 0;
    play = false;
    var $lis = $("li")
    $.each($lis, function(index, li){
      $(li).removeClass("correct");
    });
    $(".grid").show();
    $('#score').html("");
    updateTimer();
  }
}