var timeRemaining = 5
var intervalId;
var question = [
    "What college did Gabriella Montez go to?",
    "What is the name of Zac Efron's character in the movie?",
    "QUESTION 3",
    "QUESTION 4",
    "QUESTION 5",
];


function question () {
    $("#question").html(question1);
}



for (var i = 0; i < question.length; i++) {
    var questionWeWant = question[i];
    console.log("THIS IS WORKING!!!");
} 



function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
function stop() {
    clearInterval(intervalId);s
  }

function decrement() {
    timeRemaining--;
    console.log(timeRemaining);
    $("#timeRemaining").html("Time Remaining: " + timeRemaining);
    if (timeRemaining === 0) {
      stop();
      alert("Time Up!");
    }
  }


  
run();
  