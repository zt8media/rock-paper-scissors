"use strict";

// Linking the javascript to the html with queryselctors 
//gets the elements on the page makes everything work together 
const computerImg = document.querySelector('.computer img');
const playerImg = document.querySelector('.player img');
const computerPoints = document.querySelector('.computerPoints');
const playerPoints = document.querySelector('.playerPoints');
const message = document.querySelector('.message');
const userChoiceInput = document.getElementById('userChoice');
const submitChoiceBtn = document.getElementById('submitChoice');
const resetGameBtn = document.getElementById('resetGame');


// 1st Create a function that will randomize rock paper or scissor (computerchoice)
function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//2. Create a way to compare the random choice and the choice I pick, player choice === computer choice
// if/else comparing 
// determineWinner .message puts the results on the screen 
// .textContent replaces whatever with the tesxt input 
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        message.textContent = 'It\'s a tie!';
        return 0; // Tie
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerPoints.textContent = parseInt(playerPoints.textContent) + 1;
        message.textContent = 'You win!';
        return 1; // Player wins
    } else {
        computerPoints.textContent = parseInt(computerPoints.textContent) + 1;
        message.textContent = 'Computer wins!';
        return -1; // Computer wins
    }
}

// .updateUI the UI with results
// changes the pictures on the screen
// takes inputs and corresponds with the images that I have
function updateUI(playerChoice, computerChoice) {
    playerImg.src = `left-${playerChoice}.png`;
    computerImg.src = `right-${computerChoice}.png`;
}

// Function to handle user input
//Try and use an arrow function 
//add click event listener to make submit button work
//add .lowert case to make whatever they submit lowercase so it can match up with the image selection
// if they dont enter R,P,S  than message will appear 
//call the randomizer function a
submitChoiceBtn.addEventListener('click', () => {
    const playerChoice = userChoiceInput.value.toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(playerChoice)) {
        const computerChoice = generateComputerChoice();
        determineWinner(playerChoice, computerChoice);
        updateUI(playerChoice, computerChoice);
        userChoiceInput.value = ''; // Clear input field
    } else {
        message.textContent = 'Please enter a valid choice (rock, paper, or scissors).';
    }
});

// Function to reset the game
//Reset scores
//Reset the images
//clear all the messages at the top 
//make the button do all this when you click so connect it to the function
function resetGame() {
    // Reset scores
    playerPoints.textContent = '0';
    computerPoints.textContent = '0';

    // Reset images to the default rock images
    playerImg.src = 'left-rock.png';
    computerImg.src = 'right-rock.png';

    // Clear any messages
    message.textContent = 'Choose An Option';
}

// Event listener for the reset button
resetGameBtn.addEventListener('click', resetGame);


//add a way to make the submit button work when it is pressed
//event listner? 