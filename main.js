let gameResult=document.getElementById("gameResult");
let userInput=document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);

function checkGuess() {
    let guessedNumber=parseInt(userInput.value);

    if(guessedNumber > randomNumber) {
        gameResult.textContent="Too Highy, Try to Again"
        gameResult.style.backgroundColor="#1e217c"
    }

    else if (guessedNumber < randomNumber) {
        gameResult.textContent="Too Low, Try to Again"
        gameResult.style.backgroundColor="#1e217c"

    }

    else if (guessedNumber === randomNumber) {
        gameResult.textContent="Congratulations! You got it right"
        gameResult.style.backgroundColor="#1e217c"

    }

    else{
        gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "#1e217c";
 
    }
}