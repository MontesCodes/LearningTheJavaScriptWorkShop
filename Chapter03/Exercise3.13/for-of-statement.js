var stopWatch = {
  elapsedTime: 0,
  resultsHistory: [],
  isTiming: true,
  isPaused: true,
  start: function () {
    console.log('start');
  },
  pause: function () {
    console.log('pause');
  },
  resume: function () {
    console.log('resume');
  },
  stop: function () {
    console.log('stop');
  },
};
// for (let name of stopWatch) {
//   console.log(name, ':', stopWatch[name]);
// }

let anyString = 'abcxyz123';
// for (const value of anyString) {
//   console.log(value);
// }
for (var i = 0; i < anyString.length; i++) {
  console.log(anyString.charAt(i));
}
