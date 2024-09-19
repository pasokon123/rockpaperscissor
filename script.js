let scoreHuman = 0
let scoreComputer = 0


function getHumanChoice() {
    const choice = prompt('Rock Paper Scissor Game')
    return choice.toLowerCase()
}


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock'
    } else if (random === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound() {

    let human = getHumanChoice()
    let computer = getComputerChoice()
    console.log('Computer picked: ' + computer)

    if (human === 'rock' && computer === 'scissors') {
        console.log('You win! Rock beats scissors')
        return scoreHuman += 1
    } else if (human === 'paper' && computer === 'rock') {
        console.log('You win! Paper beats rock!')
        return scoreHuman += 1
    } else if (human === 'scissors' && computer === 'paper') {
        console.log('You win! Scissors beat paper!')
        return scoreHuman += 1
    } else if (computer === 'rock' && human === 'scissors') {
        console.log('You lose! Rock beats scissors!')
        return scoreComputer += 1
    } else if (computer === 'paper' && human === 'rock') {
        console.log('You lose! Paper beats rock!')
        return scoreComputer += 1 
    } else if (computer === 'scissors' && human === 'paper') {
        console.log('You lose! Scissors beats paper!')
        return scoreComputer += 1 
    } else {
        console.log('Draw!')       
    }
}

for (let i = 0; i < 5; i++) {
    playRound()
}

console.log('Computer score: ' + scoreComputer)
console.log('Your score: ' + scoreHuman)