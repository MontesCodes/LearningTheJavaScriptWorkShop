var printType = function (val) {
  if (val === null) {
    console.log('Value really is null');
    return;
  }
  console.log('Value is', typeof val);
};
printType(12);
printType('I am a string');
printType({});
printType(null);
