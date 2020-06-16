// Scoreboard
let scoreboard = {
    player: 0,
    computer: 0,
};

function displayScoreboard() {
    const container = document.querySelector('#scoreboard');
    container.innerHTML = `
        <p>Player ${scoreboard.player}</p>
        <p>Computer ${scoreboard.computer}</p>
    `;
}

// Modal
const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const closeButton = document.querySelector('#close-btn');

// Close the modal
closeButton.addEventListener('click', () => {
    modal.classList.toggle('open');
    modalOverlay.classList.toggle('open');
});

// Choices
const choices = document.querySelectorAll('.choice');
const choicesArray = Array.from(choices);
choicesArray.forEach((item) =>
    item.addEventListener('click', () => play(item.id))
);

// Game
function play(playerChoice) {
    let computerChoice;
    switch (getRandomInt()) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    const finalWinner = decideWinner(playerChoice, computerChoice);
    displayWinner(finalWinner, computerChoice);
    modal.classList.toggle('open');
    modalOverlay.classList.toggle('open');
    displayScoreboard();
}

function displayWinner(status, computerChoice) {
    const modalContainer = document.querySelector('#modal-container');
    if (status === 'draw') {
        modalContainer.innerHTML = `
        <h1>Draw!</h1>
        <a href="#" id="${computerChoice}" class="choice"
        ><i class="far fa-hand-${computerChoice}"></i
        ></a>
        `;
    } else if (status === 'player') {
        modalContainer.innerHTML = `
        <h1>You Win!</h1>
        <a href="#" id="${computerChoice}" class="choice"
        ><i class="far fa-hand-${computerChoice}"></i
        ></a>
        `;
        scoreboard.player++;
    } else {
        modalContainer.innerHTML = `
        <h1>You Lose!</h1>
        <a href="#" id="${computerChoice}" class="choice"
        ><i class="far fa-hand-${computerChoice}"></i
        ></a>
        `;
        scoreboard.computer++;
    }
}

function decideWinner(player, computer) {
    if (player === computer) return 'draw';
    else if (player === 'rock') {
        if (computer === 'paper') return 'computer';
        else return 'player';
    } else if (player === 'paper') {
        if (computer === 'rock') return 'player';
        else return 'computer';
    } else {
        if (computer === 'rock') return 'computer';
        else return 'player';
    }
}

function getRandomInt() {
    let max = 3; //Choices : 0, 1, 2
    return Math.floor(Math.random() * Math.floor(max));
}

// Reset Scoreboard
const reset = document.querySelector('#reset-btn');
reset.addEventListener('click', () => {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    displayScoreboard();
});
