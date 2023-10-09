// Arrow Function
var myFun = (param, param) => param + 1;
var myFun = param => {
  return param + 1;
};
var myFun = param => param + 1;

// Generator Function
var myFun = function* (params) {
  /*body*/
};
var myFun = function* () {
  for (let i = 0; i < 3; i++) {
    yield i;
  }
};
var myFun = function* () {
  var count = 0;
  for (let i = 0; i < 3; i++) {
    yield i;
    count += i;
  }
  yield count;
};
// call and apply
var fun = function () {
  return arguments.length;
};
fun.call(this, 1, 2, 3);
// => 3
fun.apply(this, [1, 2, 3]);
// => 3
