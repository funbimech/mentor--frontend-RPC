const choices = ["rock", "paper", "scissors"];
let playerscore = 0;
let computerscore = 0;
const container = document.querySelector(".container");
const playerchoice = document.querySelector(".playerchoice");
const computerchoice = document.querySelector(".computerchoice");
const buttonchoices = document.querySelectorAll(".buttonchoices");
const result = document.getElementById("result");
const btnchoice = document.querySelectorAll(".btnchoice");
const playscore = document.querySelector(".playscore");
const cmpscore = document.querySelector(".cmpscore");

const playround = (playerchoice, computerchoice) => {
  if (playerchoice === computerchoice) {
    result.textContent = ` you Tied! you both picked  ${playerchoice}`;
  } else if (playerchoice === "rock" && computerchoice === "scissors") {
    result.textContent = `yay you won  ${playerchoice} crushes ${computerchoice}`;
    playerscore += 1;
    playscore.textContent = playerscore;
  } else if (playerchoice === "paper" && computerchoice === "rock") {
    result.textContent = ` yay you win ${playerchoice} beats ${computerchoice} `;
    playerscore += 1;
    playscore.textContent = playerscore;
  } else if (playerchoice === "scissors" && computerchoice === "paper") {
    result.textContent = `yay you win ${playerchoice} beats ${computerchoice}`;
    playerscore += 1;
    playscore.textContent = playerscore;
  } else {
    result.textContent = `you lost try  harder ${computerchoice} beats ${playerchoice}`;
    computerscore += 1;
    cmpscore.textContent = computerscore;
  }
};

function computerplay() {
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}

btnchoice.forEach((button) => {
  button.addEventListener("click", () => {
    const playerchoice = button.getAttribute("id");
    const computerchoice = computerplay();
    playround(playerchoice, computerchoice);
  });
});
