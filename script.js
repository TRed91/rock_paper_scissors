// Create prompt input for player to choose either rock, paper or scrissors
    //store the choice inside a variable = playerSelection

// PC picks rock, paper or scissors in a function
    //generate random number between 1 and 3 and store in variable
    //create if or switch command based on the value of that variable
    //in each case store a string with either "rock", "paper" or "scrisors" in another variable called computerSelection
    //return computerSelection variable

//Play a round of rock paper scissors by calling a function
    //create function playRound with playerSelection and computerSelection as parameters
    //compare playerSelection to computerSelection 
                    //if computerSelection and playerSelection are equal it's a tie
                    //if computerSelection is rock and palyerSelection is paper => player wins
                    //and so on

//Make playGame function that runs the playRound 5 times.

//Call playGame function to start the game


function getComputerChoice(){

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNumber){
        case 3:
        return "rock";
    
        case 2:
        return "paper";
    
        default:
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

     if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        
        if (playerSelection === computerSelection){
            return `You both chose '${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}' It's a tie!`;
        }
        
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                winCounterComputer += 1;
               return "'Paper' beats 'Rock'. You lose.";
            } else {
                winCounterPlayer += 1;
                return "'Rock' beats 'Scissors'. You win!";
            }
        }
        
        if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                winCounterComputer += 1;
                return "'Scissors' beats 'Paper'. You lose.";
             } else {
                winCounterPlayer += 1;
                return "'Paper' beats 'Rock'. You win!";
            }
        }
        
        if (playerSelection === "scissors") {
            if (computerSelection === "rock") { 
                winCounterComputer += 1;
                return "'Rock' beats 'Scissors'. You lose." ; 
            } else {
                winCounterPlayer += 1;
                return "'Scissors' beats 'Paper'. You win!";
            }
        }
      
     } else {
        winCounterComputer += 1;
        return "Can't even type Rock, Paper or Scissors eh? Computer wins.";
     }
    }
  
    function playGame() {

        for (let i = 0; i < 5; i++){

            const computerSelection = getComputerChoice();
            const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
            playRound(playerSelection, computerSelection);
            console.log("You chose: "+ playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            console.log("Computer chose: " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
            console.log(playRound(playerSelection, computerSelection));
        }
    }

    function compareCounters(winCounterPlayer, winCounterComputer) {
        if (winCounterComputer === winCounterPlayer) {
            return "It's a tie";
        } else if (winCounterPlayer > winCounterComputer) {
            return "You win!";
        } else {
            return "You lose."
        }
    }

let winCounterPlayer = 0;
let winCounterComputer = 0;

playGame();
console.log(compareCounters(winCounterPlayer, winCounterComputer));
