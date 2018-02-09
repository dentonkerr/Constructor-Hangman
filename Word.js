// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// Word.js should only require Letter.js
// ----------------------------------------------

var letterFile = require("./Letter.js");

var Word = function(word) {
    var tempArr = [];
    for (var i = 0; i < word.length; i++) {
        tempArr.push(new letterFile(word[i]));
    };
    this.letterArr = tempArr;
    this.toString = function() {
        var tempStr = "";
        for (var i = 0; i < this.letterArr.length; i++) {
            tempStr += this.letterArr[i].toString() + " ";
        }
        return tempStr;
        };
    this.checkLetter = function(letter) {
        for (var i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].guess(letter);
        };
    };
};

module.exports = Word;