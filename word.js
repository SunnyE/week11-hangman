var wordSelector = require('./game.js')['wordpicker'];
var letterfromUser = require('./letter.js')['letterator'];
var letterObject = new userLetter(wordpicker());

var wordObject = new Word();

function Word (wrd) {
    this.lettersGuessed = [];
    this.guessCount = 8;
    this.wordUsed = letterObject.word;

    this.blankedWord = letterObject.blanks;

    this.getLetters = function(userIn){

        if(this.wordUsed.indexOf(userIn.toLowerCase()) >= 0 || this.wordUsed.indexOf(userIn.toUpperCase())>= 0){
            console.log(' ');
            console.log('You have guessed correctly!');
            this.lettersGuessed.push(userIn);

            for(var i=0; i < this.wordUsed.length; i++){
                letterObject.lettercheck(this.blankedWord, this.wordUsed, userIn, i);
            };
        } else {
            console.log('  ');
            console.log('That guess is wrong sorry');

            this.guessCount --;
            this.lettersGuessed.push(userIn);
        };
    };

};

module.exports['wordorator'] = Word;