let resultsMsgEle = document.getElementById('results-msg');
let matchedMsgEle = document.getElementById('match-msg');
let noMatchMsgEle = document.getElementById('no-match-msg');
let numberToGuessEle = document.getElementById('number-to-guess');
let guessInputEle = document.getElementById('number-guessed');
let testButtonEle = document.getElementById('test-button');
testButtonEle.addEventListener('click', testMatch);

function testMatch(e) {
  //   console.log('Clicked!');
  let numberGuessed = parseInt(guessInputEle.value);
  if (!isNaN(numberGuessed) && numberGuessed > 0 && numberGuessed <= 10) {
    let numberToGuess = Math.floor(Math.random() * 10 + 1);
    if (numberGuessed == numberToGuess) {
      console.log('MATCHED!');
    } else {
      console.log('NOT MATCHED!');
    }
    console.log('Number gessed:', numberGuessed);
    console.log('Number to match:', numberToGuess);
  }
}
