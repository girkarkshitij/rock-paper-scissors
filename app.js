// Close the modal
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#close-btn');

closeButton.addEventListener('click', () => modal.classList.toggle('open'));
const choices = document.querySelectorAll('.choice');
const choicesArray = Array.from(choices);
choicesArray.forEach((item) =>
    item.addEventListener('click', () => play(item.id))
);

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
    } else {
        modalContainer.innerHTML = `
        <h1>You Lose!</h1>
        <a href="#" id="${computerChoice}" class="choice"
        ><i class="far fa-hand-${computerChoice}"></i
        ></a>
    `;
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
