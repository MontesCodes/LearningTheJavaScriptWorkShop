var getRandomStringCharacter = source => {
  var returnCharacter = '';
  if (source != undefined && source.length > 0) {
    returnCharacter = source.charAt(Math.floor(Math.random() * source.length));
  }
  returnCharacter;
};
