var timeRemaining = 5
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    console.log("this works");
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

  function stop() {
    clearInterval(intervalId);
  }

  run();