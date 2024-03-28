const btnContainer = document.querySelector("#btnContainer");
const body = document.querySelector('body');

btnContainer.addEventListener('click', playRound);

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
     return `${playerInputConversion(playerSelection)} beats ${compSelectionConv(computerSelection)}. Player wins!`;


   } else if ( playerSelection === "rock" && computerSelection === "paper" ||
         playerSelection === "paper" && computerSelection === "scissors" ||
         playerSelection === "scissors" && computerSelection === "rock" ) {
     return `${compSelectionConv(computerSelection)} beats ${playerInputConversion(playerSelection)}. Computer wins.`;

    } else {
    return "Invalid input";
    }
}

function playRound(event) {
    let target = event.target;
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice(target);
    const result = resultCalc(playerSelection, computerSelection);
    const resultText = document.createElement("div");
    resultText.textContent = result;
    body.appendChild(resultText);
  }
  
 

  
 
