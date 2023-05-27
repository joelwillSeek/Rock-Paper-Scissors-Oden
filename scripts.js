//remove 5 round logic
//add third button repressing rock paper scissions
//convert all to DOM

//declaration
let rock = 2;
let paper = 0;
let scissor = 1;
let scoreUser = 0;
let scorePc = 0;
let paperButton = document.querySelector(".paper");
let scissorButton = document.querySelector(".scissor");
let rockButton = document.querySelector(".rock");
let displayScoreElement = document.querySelector(".score");
//event listeners
paperButton.addEventListener("click", paperFunction);
rockButton.addEventListener("click", rockFunction);
scissorButton.addEventListener("click", scissorFunction);

//functions

function getComputerChoice() {
  //gets random number from 0 to 1 then converts it to 0,1 or 2
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return rock;
      break;
    case 1:
      return paper;
      break;
    case 2:
      return scissor;
      break;
    default:
      return -1;
  }
}

/**
 *
 * @param {String} am
 * @returns {Number}
 */
function getUserChoice(am) {
  switch (am) {
    case "ROCK":
      return rock;
      break;
    case "PAPER":
      return paper;
      break;
    case "SCISSOR":
      return scissor;
      break;
  }
}

/**
 *
 * @param {String} userChoiceDOM
 * @returns {void}
 */
function determineWinner(userChoiceDOM) {
  let pcChoice = getComputerChoice();
  let userChoice = getUserChoice(userChoiceDOM);
  //rock beats scissors
  //scissors beats paper
  //paper beats rock
  if (
    (userChoice == rock && pcChoice == scissor) ||
    (userChoice == scissor && pcChoice == paper) ||
    (userChoice == paper && pcChoice == rock)
  ) {
    ++scoreUser;
  } else {
    ++scorePc;
  }
  displayScoreElement.textContent = `User's Score:${scoreUser} : Pc Score:${scorePc}`;
  if (checkIfOver()) {
    paperButton.removeEventListener("click", paperFunction);
    rockButton.removeEventListener("click", rockFunction);
    scissorButton.removeEventListener("click", scissorFunction);
  }
}

function paperFunction() {
  determineWinner("PAPER");
}

function rockFunction() {
  determineWinner("ROCK");
}

function scissorFunction() {
  determineWinner("SCISSOR");
}

function checkIfOver() {
  if (scoreUser >= 5) {
    displayScoreElement.textContent = `User Wins with ${scoreUser}`;
    return true;
  } else if (scorePc >= 5) {
    displayScoreElement.textContent = `Pc Wins with ${scorePc}`;
    return true;
  }
  return false;
}
