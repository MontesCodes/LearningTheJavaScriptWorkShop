var keyNames = 'WASDwasd';
var keyName = keyNames.charAt(Math.floor(Math.random() * keyNames.length));
console.log('keyName:', keyName);

console.log('keyName:', keyName);
switch (keyName.toLowerCase()) {
  case 'a':
    console.log('move left');
  case 'd':
    console.log('move right');
  case 'w':
    console.log('move up');
  case 's':
    console.log('move down');
}
