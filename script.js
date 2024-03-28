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
  
function playerInputConversion(playerSelection) {
  return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function compSelectionConv(computerSelection) {
  return computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
}

  function playRound(playerSelection, computerSelection) {
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
  
  function playGame() {
  
    let winCounter = 0;
  
    for (let i = 0; i < 5; i++) {
      
      const playerSelection = prompt("Pick 'Rock', 'Paper' or 'Scissors': ").toLowerCase();
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      console.log("Player chose: " + playerInputConversion(playerSelection) + ", Computer chose: " + compSelectionConv(computerSelection));
      console.log(result);
      
      if (result === `${playerInputConversion(playerSelection)} beats ${compSelectionConv(computerSelection)}. Player wins!`) {
        winCounter ++;
      } else if (result === `${compSelectionConv(computerSelection)} beats ${playerInputConversion(playerSelection)}. Computer wins.`) {
        winCounter --;
      }

    }
  
    if (winCounter > 0) {
      return "Player wins!";
    } else if (winCounter < 0) {
      return "Computer wins!";
    } else {
      return "It's a tie!";
     }
  }
  
  console.log(playGame())
