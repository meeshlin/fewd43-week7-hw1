$(document).ready(function() {

  //Set up our variables to use later
  var computerChoice;

  //Get a random value for the computer choice
  var computerChoiceVal = Math.random();

  //Turn the random value into a choice for the computer
  if (computerChoiceVal < 0.34) {
    computerChoice = "rock";
  } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  //Player
  $(document).on("click", ".choice", function() {
    var playerChoice = $(this).attr("id");

    alert(playerChoice);

    if (playerChoice === computerChoice) {
      alert ("It's a tie!");
    } else if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        //Alert ("You win!");
        $(this).addClass("success green-background");
      } else {
        alert ("You lose :(");
      };
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        //Alert ("You win!");
        $(this).addClass("success green-background");
      } else {
        alert ("You lose :(");
      };
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        //Alert ("You win!");
        $(this).addClass("success green-background");
      } else {
        alert ("You lose :(");
      };
    }
  });
});
