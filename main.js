// I was thinking about it backwards - I was running the computer choice and then 
// wanted the browser to wait for the user's choice. 
// Instead, I should have only run computer choice, after user clicked on a button. 


let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let round = 0;
const humanScoreText = document.querySelector("#humanScoreText");
const computerScoreText = document.querySelector("#computerScoreText")

function initializeGame() {
    const rockBtn = document.querySelector("#rock")
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    const lastRound = document.querySelector("#lastRound");
    console.log(lastRound);
    

    rockBtn.addEventListener("click", () => {
        humanChoice = "rock"; 
        playRound();
    });
    
    paperBtn.addEventListener("click", () => {
        humanChoice = "paper";
        playRound();
    });
    
    scissorsBtn.addEventListener("click", () => {
        humanChoice = "scissors"
        playRound();
    }); 
    

}

function playRound() {
    getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            lastRound.textContent = "tied";
            console.log("tied");
            humanScoreText.textContent = humanScore;
            computerScoreText.textContent = computerScore;
        }
    
        else if (computerChoice === "paper") {
            console.log("paper beats rock"); 
            computerScore +=1;
            lastRound.textContent = "paper beats rock";
            humanScoreText.textContent = humanScore;
            computerScoreText.textContent = computerScore;
        }
        
        else if (computerChoice === "scissors") {
            console.log("rock beats scissors");
            humanScore +=1;
            lastRound.textContent = "rock beats scissors";
            humanScoreText.textContent = humanScore;
            computerScoreText.textContent = computerScore;
        }
    }
                
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
        console.log("tied");
        results.textContent = "tied";
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
        }
        
        else if (computerChoice === "rock") {
            console.log("paper beats rock"); 
            humanScore +=1;
            results.textContent = "paper beats rock - computer score: " + humanScore;
            humanScoreText.textContent = humanScore;
            computerScoreText.textContent = computerScore;
            
        }
        
        else if (computerChoice === "scissors") {
            console.log("scissors beats paper");
            computerScore +=1;
            results.textContent = "Scissors beats paper";
            humanScoreText.textContent = humanScore;
            computerScoreText.textContent = computerScore;
        }
    }
                
    
    else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            console.log("tied");
            results.textContent = "tied";
        }
        
        else if (computerChoice === "paper") {
            console.log("scissors beats paper"); 
            humanScore +=1;
        }
        
        else if (computerChoice === "rock") {
            console.log("rock beats scissors");
            computerScore +=1;
        }
    }
}


function getComputerChoice() { 

                let randomNumber = function() {
                    return Math.floor(Math.random() * 3);
                }
    
                y = randomNumber();
                
                // let computerChoice;
                if (y === 0) {
                    computerChoice = "rock"
                }
                else if (y === 1) {
                    computerChoice = "paper"
                }
                else if (y === 2) {
                    computerChoice = "scissors"
                }
                // return the string 
                return computerChoice;
}

document.addEventListener("DOMContentLoaded", initializeGame);

