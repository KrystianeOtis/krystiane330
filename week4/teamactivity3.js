const player1 = 'x';
const player2 = 'o';
let player = player1;

const allDivs = document.getElementById('board');

function whatPlayer(event) {
    console.log(event.target);
    event.target.innerHTML = player;
    if (player === player1) player = player2;
    else player = player1;

};


allDivs.addEventListener('click', whatPlayer);