// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");
var Word = require("./Word.js");

var wordBank = ["tiger", "eagle", "barracuda", "rhino", "giraffe", "bear", "ostrich", "kangaroo"];

var randomWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);

var guesses = 8;

var playGame = function() {

    console.log("<><><><><><><><><><><><><><>");
    console.log("Animal Word Guess");
    console.log("           ");
    console.log(randomWord.toString());
    console.log("           ");
    console.log("Guesses Left: " + guesses);
    console.log("           ");
    console.log("<><><><><><><><><><><><><><>");

    inquirer.prompt([
        {
          name: "letter",
          message: "Guess a letter?"
        }
        ]).then(function(answer) {
            randomWord.checkLetter(answer.letter);
            guesses--;
            if (guesses > 0) {
                playGame();
            }
            else {
                console.log("GAME OVER!!!! New Guess Word Selected");
                guesses = 8;
                randomWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);
                playGame();
            };
        });
};

playGame();

