"use strict";

//Consts
const GRIDSIZE = 3;

//Variables
let resetButton = document.getElementById('NewGameButton');
let tictacBoard = document.getElementById('tictacBoard');
let gameOverModal = document.getElementById('GameOverModal');
let xMark = "X";
let oMark = "O";
let lastMark = "";
let boardArray = [
    ["","",""],
    ["","",""],
    ["","",""]
]
let gameOver = false;

//Event Listener
resetButton.addEventListener('click', ResetGame);

// FUNCTIONS 
function initialize() {

    // Draw board
    let htmlCode = "";
    let boxNumber = 0;
    let colSize = Math.round(12 / GRIDSIZE);
    let row = 0, col = 0;



    for (let i = 0; i < 3; i++) {

        htmlCode += '<div class="row h-25">';
        for (let i = 0; i < 3; i++) {

            htmlCode += '<div onClick="markIt(' + row + ',' + col + ')" id="' + row + '_' + col + '" class="col-' + colSize + ' text-light h-100 bg-primary border bg-gradient rounded border-info shadow d-flex align-items-center justify-content-center fs-1">' + boxNumber++ + '</div>';
            col++;
        }
        htmlCode += '</div>';
        row++;
        col = 0;
    };
    tictacBoard.innerHTML = htmlCode;

}

// Mark spot on the board 
function markIt(row, col) {
    if (gameOver){return}
    let mark;
    if (document.getElementById(row + '_' + col).innerHTML == "X" || document.getElementById(row + '_' + col).innerHTML == "O") { return }
    if (lastMark == 'X') { mark = oMark } else { mark = xMark }
    lastMark = mark;
    document.getElementById(row + '_' + col).innerHTML = mark;
    boardArray[row][col] = mark;

    // check if there's a winner
    let winner = checkBoard();
    if (winner != "") {
        gameOverModal.style.visibility = 'visible';
        document.getElementById('GameOverText').innerText = "Game Over, " + winner; 
        gameOver = true;
    }
    FlipTurnCounter(mark);
}

// Check for a Player Victory
function checkBoard() {
    //Retrieve board as a 2 Dimensional Array
    let flatBoardArray = boardArray.flat();

    let winConditions = [
        //X-Axis
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //Y-Axis
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //Slidey Stuff
        [0,4,8],
        [2,4,6],
    ]

    ///Check if a win condition has been reached
    for (let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = flatBoardArray[condition[0]];
        const cellB = flatBoardArray[condition[1]];
        const cellC = flatBoardArray[condition[2]];
        if (cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if (cellA == cellB && cellB == cellC){
            return cellA + " is the winner";
            break;
        }
    }
    return "";

}



//Change the position, text, and classes of the element tracking turns

function FlipTurnCounter(mark){
    let turnCounter = document.getElementById('TurnCounter');
    if (mark == "X"){
        turnCounter.classList.remove('float-start')
        turnCounter.classList.add('float-end')
        turnCounter.classList.remove('bg-info')
        turnCounter.classList.add('bg-warning')
        turnCounter.innerHTML = "O\'s Turn";
    } else if (mark == "O"){
        turnCounter.classList.remove('float-end')
        turnCounter.classList.add('float-start')
        turnCounter.classList.remove('bg-warning')
        turnCounter.classList.add('bg-info')
        turnCounter.innerHTML = "X\'s Turn";
    }
}

//Initialize Game
initialize();


//Resetting the Game
function ResetGame(){
    let htmlCode = "";
    let boxNumber = 0;
    let colSize = Math.round(12 / GRIDSIZE);
    let row = 0, col = 0;

    for (let i = 0; i < 3; i++) {

        htmlCode += '<div class="row h-25">';
        for (let i = 0; i < 3; i++) {

            htmlCode += '<div onClick="markIt(' + row + ',' + col + ')" id="' + row + '_' + col + '" class="col-' + colSize + ' text-light h-100 bg-primary border bg-gradient rounded border-info shadow d-flex align-items-center justify-content-center fs-1">' + boxNumber++ + '</div>';
            col++;
        }
        htmlCode += '</div>';
        row++;
        col = 0;
    };
    tictacBoard.innerHTML = htmlCode;
    let turnCounter = document.getElementById('TurnCounter');
    turnCounter.classList.remove('float-end')
    turnCounter.classList.add('float-start')
    turnCounter.classList.remove('bg-warning')
    turnCounter.classList.add('bg-info')
    turnCounter.innerHTML = "X\'s Turn";
    lastMark = "O";
    boardArray = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    gameOver = false;
    CloseModal();
}

//Modal Handler

function CloseModal(){
    gameOverModal.style.visibility = 'hidden';
}
