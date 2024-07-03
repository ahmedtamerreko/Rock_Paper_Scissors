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

function playingRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        div.textContent = "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        div.textContent = "You won this round";
        humanScore++;
    } else {
        div.textContent = "Computer won this round";
        computerScore++;
    }
    ShowingTheScore(computerChoice);
}

function ShowingTheScore(computerChoice) {
    if (computerScore === 5) {
        div.textContent = "Computer wins";
        div.style.color = "purple"
        DisablingButtons();
    }
    else if (humanScore === 5) {
        div.textContent = "Congrats,You Win The Game"
        div.style.color = "red";
        DisablingButtons();
    }
    else {
        div.innerHTML = `<p><br>Computer chooses ${computerChoice}</p>`
        div.innerHTML += `<p style="color:purple">Computer score now is ${computerScore}</p>`
        div.innerHTML += `<p style="color:red">Your score now is ${humanScore}</p>`;
    }
}

function DisablingButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

var humanScore = 0;
var computerScore = 0;

const div = document.querySelector("div");
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

btnRock.addEventListener("click", () => {
    btnRock.style.background = "red";
    btnPaper.style.background = "white";
    btnScissors.style.background = "white";
    var computerChoice = getComputerChoice();
    playingRound("rock", computerChoice);
});

btnPaper.addEventListener("click", () => {
    btnRock.style.background = "white";
    btnPaper.style.background = "red";
    btnScissors.style.background = "white";
    var computerChoice = getComputerChoice();
    playingRound("paper", computerChoice);
});

btnScissors.addEventListener("click", () => {
    btnRock.style.background = "white";
    btnPaper.style.background = "white";
    btnScissors.style.background = "red";
    var computerChoice = getComputerChoice();
    playingRound("scissors", computerChoice);
});




