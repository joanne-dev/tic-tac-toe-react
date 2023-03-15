import {useState} from "react";

export const WINNER_LINES = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

export const TURNS = { // turnos
	X: '❌',
	O: '⚪'
}
export const cells = [
	[0,1,2],
	[3,4,5],
	[6,7,8]
]

type StateBoard = {
	selected: boolean,
	turn: string
}
export const stateBoard = [
	{
		selected: false,
		turn: ''
	},
	{
		selected: false,
		turn: ''
	},
	{
		selected: false,
		turn: ''
	},
	{
		selected: false,
		turn: ''
	},
	{
		selected: false,
		turn: ''
	},
	{
		selected: false,
		turn: ''
	},
	{
		selected: false,
		turn: ''
	},
	{
		selected: false,
		turn: ''
	},
	{
		selected: false,
		turn: ''
	}
]

export const getBoardFromSessionStorage = (): StateBoard[]=>{
	const board = sessionStorage.getItem('board');
	return board ? JSON.parse(board): stateBoard;
}

export const restartBoard = ()=>{
	sessionStorage.setItem('board', JSON.stringify(stateBoard));
}

export const validateWinnerLines = (board: StateBoard[]) =>{
	let countX = 0;
	let countO = 0;
	let indexWin = -1;

	WINNER_LINES.forEach((lines, indexLines) =>{
		lines.forEach(position=>{
			board.forEach((box, index)=>{
				if(position === index && box.turn === TURNS.X){
					countX++;
				}
				if(countX === 3){
					indexWin = indexLines;
					countX = 0
				}
				if(position === index && box.turn === TURNS.O){
					countO++;
				}
				if(countO === 3){
					indexWin = indexLines;
					countO=0;
				}
			});
		});
		countX=0;
		countO=0;
	});
	return indexWin;
}
