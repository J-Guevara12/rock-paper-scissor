"use strict";

function computerPlay() {
	let option = Math.floor(Math.random() * 3);
	return option;
}

function playRound(computer, player) {
	if (computer == player) {return 'tie'}
	return (player === 0 && computer === 2) ? true : (player > computer && player !== 2 && computer !== 0);
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
play()
