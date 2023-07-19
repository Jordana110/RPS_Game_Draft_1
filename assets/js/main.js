"use strict";

//const for rock-paper-scissors
//rounds 5-10-15-20 const for that too
// 2 player and point fields user-comp^
//click of icon starts game
//restart resets game

//Rounds
const roundsDisplay = document.querySelector("#roundsdisplay");
const roundFive = document.querySelector("#five");
const roundTen = document.querySelector("#ten");
const roundFifteen = document.querySelector("#fifteen");
const roundTwenty = document.querySelector("#twenty");

//Results
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

//Textoutput
const textDescription = document.querySelector("#textd");

//Rock Paper Scissors (Player Selection)
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//Restart
const restart = document.querySelector("#restart");
let roundNumber = 0;
let compWin = 0;
let userWin = 0;
user.textContent = userWin;
comp.textContent = compWin;

let round = 0;
//Round nr = rounds function
function play(event) {
      const compArray = ["rock", "paper", "scissors"];
      let compPlay = compArray[Math.floor(Math.random() * 3)];

      if (roundFive.checked === true) {
            round = 5;
      } else if (roundTen.checked === true) {
            round = 10;
      } else if (roundFifteen.checked === true) {
            round = 15;
      } else if (roundTwenty.checked === true) {
            round = 20;
      }
      console.log(compPlay);

      //

      if (roundNumber < round) {
            textDescription.innerHTML = `<h1><span>${(roundNumber += 1)}</span>/<span>${round}</span></h1>`;

            if (event.currentTarget.id === compPlay) {
                  textDescription.textContent = `It was a draw! You both chose ${compPlay}`;
            }
            //
      } else if (event.currentTarget.id === "rock" && compPlay === "paper") {
            compWin++;
            textDescription.textContent =
                  "Paper (comp) beats Rock (user). YOU lOSE";
            //
      } else if (event.currentTarget.id === "rock" && compPlay === "scissors") {
            userWin++;
            textDescription.textContent =
                  "Rock (user) beats Scissors (comp). YOU WIN";
            //
      } else if (event.currentTarget.id === "paper" && compPlay === "rock") {
            userWin++;
            textDescription.textContent =
                  "Paper (user) beats Rock (comp). YOU WIN";
            //
      } else if (
            event.currentTarget.id === "paper" &&
            compPlay === "scissors"
      ) {
            compWin++;
            textDescription.textContent =
                  "Scissors (comp) beats Paper (user). YOU lOSE";
            //
      } else if (
            event.currentTarget.id === "scissors" &&
            compPlay === "paper"
      ) {
            userWin++;
            textDescription.textContent =
                  "Scissors (user) beats Paper (comp). YOU WIN";
            //
      } else if (event.currentTarget.id === "scissors" && compPlay === "rock") {
            compWin++;
            textDescription.textContent =
                  "Rock (comp) beats Scissors (user). YOU lOSE";
      }

      //
      if (roundNumber == round) {
            if (userWin > compWin) {
                  textDescription.textContent = "The user wins";
            } else if (userWin < compWin) {
                  textDescription.textContent = "The comp wins";
            } else {
                  textDescription.textContent = "Tie";
            }
      }
}
user.textContent = userWin;
comp.textContent = compWin;

//EVENTLISTENER
rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);
