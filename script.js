"use strict";

function computerPlay() {
	let option = Math.floor(Math.random() * 3);
	return option;
}

function playRound(computer, player) {
	if (computer == player) {return 'tie'}
	return (player === 0 && computer === 2) ? true : (player > computer && !(player == 2 && computer == 0));
}
function inputUser() {
	let x = false;
	while (!x) {
		x = prompt('select: rock, paper or scissor?');
		x = x.toLowerCase();
		x = (x == 'rock') ? 1 :
			(x == 'paper') ? 2 :
				(x == 'scissor') ? 3 :
					false
	}
	return x;
}

function numbToLink(n) {
	return (n == 0) ? 'img/rock.jpg' :
		(n == 1) ? 'img/paper.jpg' :
			'img/scissors.jpg';
}

function numbToStr(n) {
	let names = ['rock', 'paper', 'scissor'];

	return names[n];
}

function play() {
	console.log('Welcome to the world\'s most famous game!')
	let results = []

	for (let i = 0; i < 5; i++) {
		let player = inputUser() - 1;
		let computer = computerPlay();

		results.push(playRound(computer, player));
		console.log(`${numbToStr(player)} vs ${numbToStr(computer)}`);
		results.slice(-1) == 'tie' ? console.log("it's a tie!") :
			results.at(-1) ? console.log('You won for this time...') :
				console.log("I win HAHAHHA");
	}
	let count = 0;
	for (let item of results) {
		if (!isNaN(item)) {
			item ? count++ : count--;
		}
	}
	count == 0 ? console.log('You just tied me because I wanted') :
		count > 0 ? console.log('Th-th-that\'s impossible! a Human can\'t beat a machine!') :
			console.log("Once again, the computer beat the useless human, Mr Anderson...")
}
function playButton(input) {
	let machine = computerPlay();
	userSelecion.src = numbToLink(input);
	ourSelection.src = numbToLink(machine)
	return playRound(machine, input)
}

function uploadScore(result) {
	result == 'tie' ? userScoreCount -= 1 : null;
	result ? userScoreCount += 1 : machineScoreCount += 1;
	resultImage.src = result == 'tie' ? 'img/tie.jpg' : result ? 'img/win.jpg' : 'img/loose.jpg';
	userScore.textContent = userScoreCount;
	ourScore.textContent = machineScoreCount;
}

function playUser(input) {
	let result = playButton(input);
	uploadScore(result)
}

const userScore = document.querySelector('#player-score')
const ourScore = document.querySelector('#machine-score')
const userSelecion = document.querySelector('#player-selection')
const ourSelection = document.querySelector('#machine-selection')
const resultImage = document.querySelector('#result')

const rockButton = document.querySelector('#op1');
const paperButton = document.querySelector('#op2');
const scissorsButton = document.querySelector('#op3')

rockButton.addEventListener('click', () => {
	playUser(0)
})
paperButton.addEventListener('click', () => {
	playUser(1)
})
scissorsButton.addEventListener('click', () => {
	playUser(2)
})

let userScoreCount = 0;
let machineScoreCount = 0;

