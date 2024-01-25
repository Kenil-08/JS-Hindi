let randomNumber = Math.round(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessNum");
const btn = document.querySelector("#btn");
const guessSlot = document.querySelector("#guesses");
const guessRemain = document.querySelector("#lastRemaining");
const status = document.querySelector(".lowOrHigh");
const resultPara = document.querySelector(".resultPara");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please! Enter valid number !");
    }else if(guess > 100 || guess < 0){
        alert("Please! Enter a number between 1 to 100.");
    }else{  
        if(numGuess >= 10){
            displayGuess(guess);
            displayMessage(`Game Over ! Random number was ${randomNumber}`);
            endGame();
        }else{
            prevGuess.push(guess);
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

function checkGuess(guess){
    if(randomNumber ===  guess){
        displayMessage(`You Guess it right!`);
        endGame();
    } else if(guess > randomNumber){
        displayMessage(`You guess a high number!`);
    }
    else{
        displayMessage(`You guess a low number!`);
    }
};

function displayGuess(guess){
    userInput.value = '';
    numGuess++;
    guessSlot.innerText += `${guess}, `;
    guessRemain.innerHTML = `${11-numGuess}`;
};

function displayMessage(message){
    status.innerHTML = `<h2>${message}</h2>`;
};

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    resultPara.appendChild(p);
    playGame = false;
    newGame();
};

function newGame(){
    const newButton = document.querySelector("#newGame");
    newButton.addEventListener('click',(e)=>{
        randomNumber = Math.round(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        guessRemain.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        resultPara.removeChild(p);

        playGame = true;
    });
};
