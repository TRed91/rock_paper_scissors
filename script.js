const btnContainer = document.querySelector("#btnContainer");
const body = document.querySelector('body');

btnContainer.addEventListener('click', playRound);

let playerScore = 0;
let computerScore = 0; 
const resultText = document.createElement("div");
const displayScore = document.createElement("div");
const announceWinner = document.createElement("div");
body.appendChild(resultText);
body.appendChild(displayScore);
body.appendChild(announceWinner);

function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1:
        return "rock";
  
      case 2: 
        return "paper";
  
      case 3:
        return "scissors";
    }
  }

function getPlayerChoice (target) {
  switch (target.id) {
    case 'btnRock': return 'rock';
    case 'btnPaper': return 'paper';
    case 'btnScissors': return 'scissors';
  }
}

function playerInputConversion(playerSelection) {
  return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function compSelectionConv(computerSelection) {
  return computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
}

function resultCalc(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
    return `You both chose ${playerInputConversion(playerSelection)}. It's a tie!`;


   } else if ( playerSelection === "rock" && computerSelection === "scissors" ||
         playerSelection === "paper" && computerSelection === "rock" ||
         playerSelection === "scissors" && computerSelection === "paper" ) {
          playerScore += 1;
     return `${playerInputConversion(playerSelection)} beats ${compSelectionConv(computerSelection)}. Player wins!`;


   } else if ( playerSelection === "rock" && computerSelection === "paper" ||
         playerSelection === "paper" && computerSelection === "scissors" ||
         playerSelection === "scissors" && computerSelection === "rock" ) {
          computerScore += 1;
     return `${compSelectionConv(computerSelection)} beats ${playerInputConversion(playerSelection)}. Computer wins.`;

    } 
}

function playRound(event) {
    
    let target = event.target;
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice(target);
    const result = resultCalc(playerSelection, computerSelection);
    

    resultText.textContent = result;
    displayScore.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
    if (playerScore < 5 && computerScore < 5) {
      announceWinner.textContent = '';
    } else {
      if (playerScore >= 5) {
        announceWinner.setAttribute('style', 'color: greenyellow')
        announceWinner.textContent = 'Player wins the game!';
        playerScore = 0;
        computerScore = 0;
      } 
  
      if (computerScore >= 5) {
        announceWinner.setAttribute('style', 'color: red')
        announceWinner.textContent = 'Computer wins the game!';
        playerScore = 0;
        computerScore = 0;
      }
    }
  }
  
 

  
 
