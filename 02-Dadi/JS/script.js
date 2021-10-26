// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
const rollDice = document.getElementById("btn")
const firstElement = document.getElementById("resoult-player")
const secondElement = document.getElementById("resoult-pc")
const gameWinner = document.getElementById("winner")


rollDice.addEventListener('click',

function(){
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    firstElement.innerHTML = dice1;
    secondElement.innerHTML = dice2;
    
    if(dice1 === dice2){
        gameWinner.innerHTML = "Siete Pari!";
    }else if(dice1 > dice2){
        gameWinner.innerHTML = "Hai vinto!";
    }else {
        gameWinner.innerHTML = "Ha vinto il computer!";
    };
}

);

