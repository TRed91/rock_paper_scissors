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
        
        if (playerSelection === "rock" && computerSelection === "scissors"){
            return `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}. You win!`
        }
        
        if (playerSelection === "scissors" && computerSelection === "paper"){
            return `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}. You win!`
        }

        if (playerSelection === "paper" && computerSelection === "rock"){
            return `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}. You win!`
        }

        if (playerSelection === "rock" && computerSelection === "paper"){
            return `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}. You lose!`
        }

        if (playerSelection === "paper" && computerSelection === "scissors"){
            return `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}. You lose!`
        }

        if (playerSelection === "scissors" && computerSelection === "rock"){
            return `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}. You lose!`
        }

        } else {
        return "Can't even type Rock, Paper or Scissors eh? Computer wins this round.";
     }
    }
  
    function playGame() {

        let winCounter = 0;

        for (let i = 0; i < 5; i++){

            const computerSelection = getComputerChoice();
            const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
            const result = playRound(playerSelection, computerSelection);

            if (result === `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}. You win!`){
                winCounter ++ ;
            } 
            if (result === `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}. You lose!` 
            || result === "Can't even type Rock, Paper or Scissors eh? Computer wins this round."){
                winCounter -- ;
             }

            console.log("You chose: "+ playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            console.log("Computer chose: " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
            console.log(result);
        }

        if (winCounter === 0) {
            return "The game ended in a tie."
        }else if (winCounter > 0) {
            return "Congratulations! You won!"
        }else {
            return "You lost. Better luck next time!"
        }
    }
console.log(playGame());
