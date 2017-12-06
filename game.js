//Random word is selected and exported
var wordsToGuess = ["Woody", "Buzz Lightyear", "Andy", "Bo Peep", "Rexasaurus", "Mr Spell", "Jessie", "Potato Head", "Slinky Dog", "Ham", "Bullseye"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;