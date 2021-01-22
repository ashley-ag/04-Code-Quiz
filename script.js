var timer = 60;
var score = 0;
var endScore = '';
var userInitals = '';
var currentQuestion = 1;

//#startButton.on("click," function must start timer in #timer div and flip to #question1 div)
$("#startButton").on("click", function() {
    // Timer needs to show
    $("#timer").removeClass("hidden");
    // Timer needs to start
    setTime();
    // Next question needs to show 
    // start page needs to hide
    $("#startPage").addClass("hidden");
    $("#question" + currentQuestion).removeClass("hidden");
})

//clicked on the wrong answer "incorrect" populates
$(".answer").on("click", function() {
    if ($(this).data("answer") === $(this).parent().data("answer")) {
        //console.log("the answer is correct!")
        //add 10 points to score
        score += 10;
        //move to next question by doing the following:
        $("#question" + currentQuestion).addClass("hidden"); 
        currentQuestion++; 
        $("#question" + currentQuestion).removeClass("hidden"); 
    } else {
        console.log("answer is wrong.")
    //time -= 10
    //flip to next question
    //hide current question
    }
})

//time -= 10
//flip to next question
//hide current question



////use an if statement that addresses all of the question divs


//if the question was answered correctly "Correct!" must show on the screen, score +=10, flip to next question or #endPage div

//if timer===0 then game over flip to #endPage div or if all questions have been answered

//#endPage div must show your score, enter your intials, show score next to intials and save score
////use a for loop, .append(score), and local storage



function setTime() {
    var timerInterval = setInterval(function() {
        $("#timeLeft").text(timer);
        timer--;
        if(timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}
