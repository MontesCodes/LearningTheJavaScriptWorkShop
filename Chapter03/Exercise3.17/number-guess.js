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
  }
}
