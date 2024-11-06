let scorePlayer = 0
let scoreComputer = 0

const results = document.querySelector('h2')
const yourChoice = document.querySelector('#yourChoice')
const computerChoice = document.querySelector('#computerChoice')
const scores = document.querySelector('#scores')
const buttons = document.querySelectorAll('button')
const game = document.querySelector('#game')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        const selectionName = button.id
        playRound(selectionName)
        gameOver()
    })
})
function gameOver () {
    if(scorePlayer === 5) {
        game.textContent = `You win the game!`
        scoreComputer = 0
        scorePlayer = 0
    } else if(scoreComputer === 5) {
        game.textContent = `You lose the game!`
        scoreComputer = 0
        scorePlayer = 0
    } else {
        game.textContent = ''
    }
}

function scorelog () {
    scores.textContent = 'Computer score: ' + scoreComputer + '\n' + 'Your score: ' + scorePlayer
}

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock'
    } else if (random === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound (choice) {
    let computer = getComputerChoice()
    yourChoice.textContent = 'Computer picked: ' + computer
    computerChoice.textContent = 'You picked: ' + choice

    if (choice === 'rock' && computer === 'scissors') {
        results.textContent = 'You win! Rock beats scissors'
        scorePlayer += 1
        scorelog()
    } else if (choice === 'paper' && computer === 'rock') {
        results.textContent = 'You win! Paper beats rock!'
        scorePlayer += 1
        scorelog()
    } else if (choice === 'scissors' && computer === 'paper') {
        results.textContent = 'You win! Scissors beat paper!'
        scorePlayer += 1
        scorelog()
    } else if (computer === 'rock' && choice === 'scissors') {
        results.textContent = 'You lose! Rock beats scissors!'
        scoreComputer += 1
        scorelog()
    } else if (computer === 'paper' && choice === 'rock') {
        results.textContent = 'You lose! Paper beats rock!'
        scoreComputer += 1
        scorelog()
    } else if (computer === 'scissors' && choice === 'paper') {
        results.textContent = 'You lose! Scissors beats paper!'
        scoreComputer += 1
        scorelog()
    } else {
        scorelog()
        results.textContent = 'Draw!'
    }

}









