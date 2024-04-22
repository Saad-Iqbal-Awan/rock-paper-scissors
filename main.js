// check external js file is linked using console
console.log("it works")
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let round = 0;

// Build function for computer to select one option
function playGame() { 
    for (i = 0; i < 5; i++) {
        function getComputerChoice() { 
            // Use math.floor and math.random to get function
            // that gets one number from 3 numbers - 0, 1 or 2 
            // MDN docs helped get the function - the math checks out - 
            // multiplying by 3 and flooring it gets equal opp for 0, 1 or 2 
            function getRandomInt() {
                return Math.floor(Math.random() * 3);
            }; 

            // create variable to store integer
            let y; 
            // run getRandom function to generate integer
            y = getRandomInt();
            // run if-else conditionals to assign rock as choice if 0 
            // scissors in case of 1 and paper otherwise 
            let computerChoice;
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
        // new global variable - computerChoice which runs function to get it
        computerChoice = getComputerChoice()
        console.log("Computer choice: ", computerChoice) 
        // create getHumanChoice function - 
        // function asks user for string - prompt function 
        // the string is converted to lowercase 
        // the string is checked against rock, paper and scissors to 
        // make sure that the option is right, else it runs the function again and gets human choice. 
        // return human choice from within if and else and then from within function
        function getHumanChoice() {
            humanChoice = prompt("The computer has made its choice. Choose either rock, paper or scissors. Make sure to spell it correctly.");
            // console.log(humanChoice);
            humanChoice = humanChoice.toLowerCase(); 
            // console.log(humanChoice);

            if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
                // console.log("great.");
                return humanChoice;
                }
            else {
                console.log("Please choose either rock, paper or scissors only - numbers and other input not allowed")
                humanChoice = getHumanChoice();
                    
                }
                return humanChoice
        }

        // global variable humanChoice runs the function to get rock, paper or scissor from user - case insensitive. 
        humanChoice = getHumanChoice();
        console.log("Human choice: ", humanChoice);
        
        // write playRound function - 
        // function takes in humanChoice and computerChoice             // it checks if humanChoice is rock and then runs three conditions and prints result and increments humanScore

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === "rock") {
                if (computerChoice === "rock") {
                        console.log("tied");
                    }
                else if (computerChoice === "paper") {
                    console.log("paper beats rock"); 
                        computerScore +=1;
                    }
                else if (computerChoice === "scissors") {
                        console.log("rock beats scissors");
                        humanScore +=1;
                    }
                }

            else if (humanChoice === "paper") {
                    if (computerChoice === "paper") {
                        console.log("tied");
                    }
                    else if (computerChoice === "rock") {
                        console.log("paper beats rock"); 
                        humanScore +=1;
                    }
                    else if (computerChoice === "scissors") {
                        console.log("scissors beats paper");
                        computerScore +=1;
                    }
                }

            else if (humanChoice === "scissors") {
                    if (computerChoice === "scissors") {
                        console.log("tied");
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

            playRound(humanChoice, computerChoice);



        

        

        console.log(humanChoice);
        console.log(computerChoice);
        console.log("human score: ", humanScore);
        console.log(computerScore);

    }
}

playGame()

if (humanScore >= 3) {
    console.log("You win!");
}

else if (computerScore >= 3) {
    console.log("Computer wins!");

}

else {
    console.log("It's a tie!")
}

