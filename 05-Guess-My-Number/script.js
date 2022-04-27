"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber; // This is not to be use in the final version.
let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // When there is no input. "!guess" means "when guess is not true", and empty field is 0, which is a falsy value
    // document.querySelector(".message").textContent =
    //   "🛑 Please input a number...";
    displayMessage("🛑 Please input a number...");
  } else if (guess === secretNumber) {
    // When the guess is correct
    document.querySelector(".number").textContent = secretNumber;
    // document.querySelector(".message").textContent = "🏆 You guessed right!";
    displayMessage("🏆 You guessed right!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "100%";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // When the guess is wrong
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too high..." : "Too low...";
      displayMessage(guess > secretNumber ? "Too high..." : "Too low...");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   "❌❌❌ GAME OVER ❌❌❌";
      displayMessage("❌❌❌ GAME OVER ❌❌❌");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#8B0000";
    }
  }
  // else if (guess < secretNumber) {
  //   // When the guess is too low
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low...";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "GAME OVER ❌";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess > secretNumber) {
  //   // When the guess is too high
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high...";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "GAME OVER ❌";
  //     document.querySelector(".score").textContent = 0;
  //   }
});

// Coding challenge #1

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?"; // Hides the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Calculates another secret number
  document.querySelector(".guess").value = ""; // Resets the input field
  document.querySelector(".message").textContent = "Start guessing..."; // Resets the message
  score = 20; // Resets the score variable
  document.querySelector(".score").textContent = score; // Resets the score message
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//
