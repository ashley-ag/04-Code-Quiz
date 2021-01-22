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
       //console.log("answer is wrong.")
        timer -= 10;
        //flip to next question
        //hide current question
        $("#question" + currentQuestion).addClass("hidden"); 
        currentQuestion++; 
        $("#question" + currentQuestion).removeClass("hidden"); 
    }
})

//timer must hide
//score needs to show

if (currentQuestion === 2) {
    $("#timer").addClass("hidden");
    clearInterval(timerInterval);
}



var scoresFromStorage = JSON.parse(localStorage.getItem("scores"));

if (!scoresFromStorage){
    scoresFromStorage = [];
}

for (var i = 0; i < scoresFromStorage.length; i++){
    var paragraph = document.createElement("p");

    paragraph.innerText = scoresFromStorage[i].name + "'s score is " + scoresFromStorage[i].score;

    document.body.appendChild(paragraph);
}

var storeButton = document.getElementById("store");
var nameInput =  document.getElementById("initials");
var scoreInput =  document.getElementById("score");

storeButton.addEventListener("click", function(){
    var name = nameInput.value;
    var score = scoreInput.value;

    var newLocalStorageEntry = {
        name: name,
        score: score
    };

    scoresFromStorage.push(newLocalStorageEntry);

    localStorage.setItem("scores", JSON.stringify(scoresFromStorage));
})

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
