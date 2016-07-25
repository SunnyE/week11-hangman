function Letters(gameWord) {
    this.word = gameWord.split('');

    this.makeBlank = function() {
        var blanks = [];

        for (var i = 0; i < this.word.length; i++) {
            blanks.push('');
        };
        return blanks;
    };
    this.blanks = this.makeBlank();

    this.lettercheck = function(blankedword, actualWord, userIn, index) {
        if(actualWord[index].toLowercase()=== userIn){
            blankedword[index] = actualWord[index];
        };
        
    };
};

module.exports['letterator'] = letter;