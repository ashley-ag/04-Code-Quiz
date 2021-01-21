document.readyState(
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#highScores").hide();

    // GIVEN I am taking a code quiz
    // WHEN I click the start button
    $("#startButton").on("click", function {

        $("#startPage").hide();
        $("#question2").show();
        setTime();

function setTime() {
var secondsLeft = 60;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    $().text = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
    })

    // THEN a timer starts and I am presented with a question


    // WHEN I answer a question
    // THEN I am presented with another question


    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock


    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over



    // WHEN the game is over
    // THEN I can save my initials and my score



)