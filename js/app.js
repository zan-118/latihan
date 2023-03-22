class RockPaperScissorsGame {
  constructor() {
    this.playerChoice = null;
    this.computerChoice = null;
  }

  setPlayerChoice(choice) {
    this.playerChoice = choice;
    this.computerChoice = this.generateComputerChoice();
    this.displayChoices();
    this.displayResult();
  }

  generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  displayChoices() {
    const playerChoicesElem = document.getElementById("playerChoices");
    const computerChoicesElem = document.getElementById("computerChoices");
    playerChoicesElem.textContent = `Player: ${this.playerChoice}`;
    computerChoicesElem.textContent = `Computer: ${this.computerChoice}`;
    console.log(`Player: ${this.playerChoice}`);
    console.log(`COM: ${this.computerChoice}`);
  }

  displayResult() {
    const resultElem = document.getElementById("result");
    if (this.playerChoice === this.computerChoice) {
      resultElem.textContent = "DRAW!";
      resultElem.classList.add("draw");
      resultElem.classList.remove("player-wins", "computer-wins");
    } else if (
      (this.playerChoice === "rock" && this.computerChoice === "scissors") ||
      (this.playerChoice === "paper" && this.computerChoice === "rock") ||
      (this.playerChoice === "scissors" && this.computerChoice === "paper")
    ) {
      resultElem.textContent = "Player Win!";
      resultElem.classList.add("player-wins");
      resultElem.classList.remove("draw", "computer-wins");
    } else {
      resultElem.textContent = "Com Win!";
      resultElem.classList.add("computer-wins");
      resultElem.classList.remove("draw", "player-wins");
    }
  }

  resetGame() {
    this.playerChoice = null;
    this.computerChoice = null;
    const resultElem = document.getElementById("result");
    resultElem.textContent = "VS";
    resultElem.classList.add("vs");
    resultElem.classList.remove("draw", "player-wins", "computer-wins");
    const playerChoicesElem = document.getElementById("playerChoices");
    const computerChoicesElem = document.getElementById("computerChoices");
    playerChoicesElem.textContent = "Player:";
    computerChoicesElem.textContent = "Computer:";
  }
}

const game = new RockPaperScissorsGame();

document.querySelectorAll(".player-choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    game.setPlayerChoice(choice.dataset.value);
  });
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  game.resetGame();
});
