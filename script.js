let player_choice = "";

let rock_btn = document.querySelector("#rock-btn");
let paper_btn = document.querySelector("#paper-btn");
let scissors_btn = document.querySelector("#scissors-btn");

let result_statement = document.querySelector(".resultstatement");

let win_or_loss = document.querySelector(".win-or-loss");

rock_btn.addEventListener("click", () => {
  player_choice = "rock";
  // console.log(player_choice);

  console.log(playGame(player_choice));
});

paper_btn.addEventListener("click", () => {
  player_choice = "paper";
  // console.log(player_choice);

  console.log(playGame(player_choice));
});

scissors_btn.addEventListener("click", () => {
  player_choice = "scissors";
  // console.log(player_choice);

  console.log(playGame(player_choice));
});

function getComputerChoice() {
  num = Math.random();

  if (num < 0.333) {
    return "rock";
  } else if (num < 0.666) {
    return "paper";
  } else if (num < 0.999) {
    return "scissors";
  }
}

function playGame(player_choice) {
  computer_choice = getComputerChoice();

  console.log(player_choice);
  console.log(computer_choice);

  result_statement_string =
    "player chooses " +
    player_choice +
    " and computer chooses " +
    computer_choice +
    ", so";
  result_statement.innerHTML = result_statement_string;

  if (
    (player_choice === "rock" && computer_choice === "scissors") ||
    (player_choice === "paper" && computer_choice === "rock") ||
    (player_choice === "scissors " && computer_choice === "paper")
  ) {
    win_or_loss.innerHTML = "player wins!";
    win_or_loss.style.color = "darkgreen";
    return "player wins!";
  }

  if (player_choice === computer_choice) {
    win_or_loss.innerHTML = "tie!";
    win_or_loss.style.color = "black";
    return "Tie!";
  } else {
    win_or_loss.innerHTML = "player loses!";
    win_or_loss.style.color = "darkred";
    return "player loses!";
  }
}
