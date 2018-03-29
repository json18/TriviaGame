var timeRemaining = 5
var intervalId;
var question = [
    "What college did Gabriella Montez go to?",
    "What is the name of Zac Efron's character in the movie?",
    "QUESTION 3",
    "QUESTION 4",
    "QUESTION 5",
];
var answer1 = [
    "Stanford",
    "UC Berkeley",
    "UC Irvine",
    "Harvard",
];
var userAnswer;
var correctAnswer1 = answer1[0];
console.log(correctAnswer1);

question1();

function question1(){
    $("#question").text("What college did Gabriella Montez go to?");
    $("#answer1").empty();
    for (var i=0; i< answer1.length; i++) {
        buttons = $("<button>");
        buttons.addClass("answer-btn");
        buttons.attr("data-name"),answer1[i];
        buttons.text(answer1[i]);
        $("#answer1").append(buttons);
    }
   
    $("#answer1").click(function(event) {
        userAnswer = event.target.id;
        console.log(userAnswer);
        if (userAnswer === correctAnswer1) {
          console.log("You win!");
        }
        else {
          
        }
      });

}   




/*
      $("#answer1").on("click", function(event) { 
        $("#correctGif").html("<img src='assets/images/correctGif.gif' width='200px'/>");
    })


    $(".answer1[0]").on("click", function() {
        $("#correctGif").html("<img src='assets/images/correctGif.gif' width='200px'/>");
        console.log("this works");
    });




    $("#answer1").on("click", ".answer-button", function() {
        var b = $("<div>");
        b.addclass("giphy");
        b.text($(this).attr("data-name"));
        main.find("display").append(b);
        console.log('HELLO!!!!!!!');
    });
    
    

}





function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(".question").text(question);
    console.log(question);
  }

function stop() {
    clearInterval(intervalId);
  }

function decrement() {
    timeRemaining--;
    $("#timeRemaining").html("Time Remaining: " + timeRemaining);
    if (timeRemaining === 0) {
      stop();
    }
  }


  
run();

*/
