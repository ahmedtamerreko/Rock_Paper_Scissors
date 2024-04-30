var humanScore = 0;
var computerScore = 0;

const score = (computerChoice) => {
    console.log(`computer chooses ${computerChoice}\nComputer score is now ${computerScore}\nYour score is now ${humanScore}\n`)
}

function getComputerChoice() {
    const comp = Math.floor(Math.random() * 3);
    if (comp === 0) {
        return "rock";
    } else if (comp === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter rock, paper, or scissors \n note: use console to see the game").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You won this round");
        humanScore++;
    } else {
        console.log("Computer won this round");
        computerScore++;
    }
    score(computerChoice);
}

while (computerScore !== 3 && humanScore !== 3) {
    var humanChoice = getHumanChoice();
    var computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

if (computerScore === 3) {
    console.log("Computer wins the game!");
} else {
    console.log("You win the game!");
}
