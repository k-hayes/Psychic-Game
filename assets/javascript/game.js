
//set up alphabet array for computerChoice and userGuess
var alphaChoices = ["a", "b", "c", "d", "e", "f", "g", "h", 
	"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
	"u", "v", "w", "x", "y", "z"]

//variables for win/loss tally as well as guess counter and letter choices
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesRecord = [];

//Variable for computer letter choice
	var computerChoice = alphaChoices[Math.floor(Math.random() * alphaChoices.length)];

//Recording key presses from the User
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//Recording letter guesses and placing them in the guessesRecord array to display on counter
	if(guessesRecord.indexOf(userGuess) < 0 && alphaChoices.indexOf(userGuess) >= 0){
		guessesRecord[guessesRecord.length]=userGuess;
	}

//If User chooses Computer selection, user wins and vice versa if user does not choose same letter
//If user wins, game resets at 9 lives, 0 letter choices and computer chooses new letter at random
	if(userGuess === computerChoice){
		wins++;
		guessesLeft = 9;
		guessesRecord = [];
		computerChoice = alphaChoices[Math.floor(Math.random() * alphaChoices.length)];
	}else{
		guessesLeft--;
	}

//When guess counter meets 0, game resets at 9 lives and 0 recorded letters and resets computer choice
	if(guessesLeft === 0){
		losses++;
		guessesLeft = 9;
		guessesRecord = [];
		computerChoice = alphaChoices[Math.floor(Math.random() * alphaChoices.length)];
	}

//Recording win/loss tally to the html document and guess counter and letter selection
	document.getElementById('wins').innerHTML = "Wins: " + wins;
	document.getElementById('losses').innerHTML = "Losses: " + losses;
	document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
	document.getElementById('guessesRecord').innerHTML = "Your guesses so far: " + guessesRecord;

}