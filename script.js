var timer = 60;
var score = 0;
var endScore = '';
var userInitals = '';
var currentQuestion = 1;
var timerInterval; 
var scoresFromStorage = JSON.parse(localStorage.getItem("scores"));
var highScores = [];



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
    //debugger;
    if ($(this).data("answer") === $(this).parent().data("answer")) {
        //console.log("the answer is correct!")
        //add 10 points to score
        score += 10;
        $("#feedback").removeClass("hidden"); 
        $("#feedback").addClass("correct");
        $("#feedback").text("CORRECT");
        //move to next question by doing the following:
        $("#question" + currentQuestion).addClass("hidden"); 
        currentQuestion++; 
        $("#question" + currentQuestion).removeClass("hidden"); 
        setTimeout(function(){
            $("#feedback").addClass("hidden");
            $("#feedback").removeClass("correct");
        }, 1000)
    } else {
       //console.log("answer is wrong.")
        timer -= 10;
        $("#feedback").removeClass("hidden");
        $("#feedback").addClass("incorrect");
        $("#feedback").text("INCORRECT");
        //flip to next question
        //hide current question
        $("#question" + currentQuestion).addClass("hidden"); 
        currentQuestion++; 
        $("#question" + currentQuestion).removeClass("hidden"); 
        setTimeout(function(){
            $("#feedback").addClass("hidden");
            $("#feedback").removeClass("correct");
        }, 1000)
    }
    if (currentQuestion === 4) {
        //debugger;
        console.log("yay we are here");
        $("#timer").addClass("hidden");
        $("#score").text(score);
        $("#scorePage").removeClass("hidden");
        clearInterval(timerInterval);
    }
})

//timer must hide
//score needs to show

if (!scoresFromStorage){
    highScores = [];
} else {
    highScores = scoresFromStorage;
}

var storeButton = document.getElementById("submit");
var nameInput =  document.getElementById("initials");
var scoreInput =  document.getElementById("score");

storeButton.addEventListener("click", function(){
    var name = nameInput.value;

    var newLocalStorageEntry = {
        name: name,
        score: score,
    };

    highScores.push(newLocalStorageEntry);

    localStorage.setItem("scores", JSON.stringify(highScores));

    var paragraph = document.createElement("p");
    paragraph.innerText = newLocalStorageEntry.name + "'s score is " + newLocalStorageEntry.score;
    document.body.appendChild(paragraph);
})



function setTime() {
    timerInterval = setInterval(function() {
        $("#timeLeft").text(timer);
        timer--;
        if(timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}
