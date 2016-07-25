var prompt = require('inquirer');
var letter = require('./word.js')['wordorator'];
var wordObject = new checkWOrd();

function inquirerer() {
    if(wordObject.guessCount === 0){
        console.log('You lose GOOD DAY SIR!');
        return console.log('The team was ' + wordObject.blankedWord.join(''));
    }; 
    inquire.prompt([
        {
            type: "input",
            name: "letter",
            message: "The team you are guessing is " + wordObject.blankedWord.join(' ') + "Guess a letter"
        }
    ]).then(function(user){
        var guess = user.letter.toLowerCase();
        if (guess.length > 1){
            console.log('Only one guess at a time');
            inquirerer(); 
        } else if(guess.length === 0){
            console.log("you have not entered a guess");
            inquirerer();
        } else if (wordObject.lettersGuessed.indexOf(guess) > -1){
            console.log('You already guessed that');
            inquirerer();
        } else{
            wordObject.takeLetters(guess);
            console.log('You have guessed these letters');
            console.log('You have ' + wordObject.numGuesses + 'guesses remaining.');
            if (wordObject.currentWord.join('') === wordObject.blankedWord.join('')){
                return console.log('You have won the game. High five!');
            } else {
                inquirerer();
            };
        };
    });
};

inquirerer();