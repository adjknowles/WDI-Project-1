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
    $('#instruct').toggle();
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

    if ($(".correct").length === 16) {
      clearInterval(A);
      $("#question").hide();
      $(".grid").hide();
      $('#timer').removeClass("animated infinite pulse")
      $('#newgame').addClass("animated infinite pulse")
      return  $('.game-over').html("Well Done!" + "<br/>" + "You Scored The Maximum " + "<br/>" + playerScore + " Points!");
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

    rnum1 = Math.ceil((Math.random()*20)+1)
    rnum2 = Math.ceil((Math.random()*10)+1)
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

    // result.innerHTML = res;
    question.html("<span id='what-is'>What is:</span><br> " + rnum1 + " " + op + " " + rnum2 + " ?");

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
    $('#start').removeClass("animated infinite pulse")
    $('#timer').addClass("animated infinite pulse")
    var counter = 31;
    play = true;

    $("#instruct").hide();

    A = setInterval(function(){
      counter --;
      if(counter >= 0){
        return timer.html(counter);
      } else {
        $("#question").hide();
        $(".answers").hide();
        $('#timer').removeClass("animated infinite pulse")
        timer.html("0");
        $(".grid").hide();
        $('#newgame').addClass("animated infinite pulse")
        return $('.game-over').html("GAME OVER!" + "<br/>" + "You Scored " + playerScore + " Points");
        play = false;
      }
    }, 1000);
  }

  function newGame(){
    setTimeout(location.reload(true), 5000)
    // playerScore = 0
    // res = 0;
    // play = false;
    // var $lis = $("li")
    // $.each($lis, function(index, li){
    //   $(li).removeClass("correct");
    // });
    // $(".grid").show();
    // $('#score').html("");
    // updateTimer();
  }
}