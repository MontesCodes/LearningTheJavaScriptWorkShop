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
/// Objects
var myObject = {};

var myObject = { foo: 'bar' };
console.log(myObject.foo);
// => "bar"

var myObject = { param1: 1, param2: 2 };

var myObject = {};
myObject.age = 21;
console.log(myObject.age);
// => 21

myObject['age'] = 32;
console.log(myObject.age);
// => 32

var obj = {};
obj[' '] = 99;
console.log(obj[' ']);
// => 99

/// objects - null assigned to object parameters
var obj = { key: 99 };
obj.key = null;
console.log(obj);
// => {key: null}

/// objects - delete keyword
var obj = { key: 'data' };
delete obj.key;
console.log(obj);
// => {}

/// Objects are mutable data
var myObj = { key: 44 };
function update(obj) {
  obj.key = 88;
  console.log(obj === myObj); // check they are the same object
}
update(myObj);
// => true
console.log(myObj.key);
// => 88

/// in operator iterating over iterable's key:
var myObj = { key: 'value' };
for (const key in myObj) {
  console.log(myObj[key]);
}

///  Object.keys() function
var keys = Object.keys(myObj);
for (let i = 0; i < keys.length; i++) {
  var key = keys[i];
  console.log(myObj[key]);
}

var keys = Object.keys(myObj);
for (const key of keys) {
  console.log(myObj[key]);
}

/// Object.values() function
var values = Object.values(myObj);
for (const value of values) {
  console.log(value);
}

/// Object.entries() function
var keyValues = Object.entries(myObj);
for (const kv of keyValues) {
  console.log(kv[0], kv[1]);
}

/// Avenue for bugs regarding Object Accessors
var gameState = {
  score: 0,
  enemies: 99,
  lives: 3,
};

/// restricting access to these properties
var gameState = {
  _score: 0,
  _enemies: 99,
  _lives: 3,
  addToScore: function (value) {
    this._score += value;
  },
  killEnemies: function (num) {
    this._enemies -= num;
  },
  killPlayer: function () {
    this._lives -= 1;
  },
};

/// syntax for accessors:
{
  /* <accessor_type><accessor_name> () {
  .. body..
  }
 */
}
/// restricting access to these properties, adding getter and setters
var gameState = {
  _score: 0,
  _enemies: 99,
  _lives: 3,
  get score() {
    return this._score;
  },
  set score(value) {
    this._score += value;
  },
  get enemies() {
    return this._enemies;
  },
  get killEnemies() {
    this._enemies--;
  },
  set killEnemies(num) {
    this._enemies -= num;
  },
  get lives() {
    return this._lives;
  },
  get killPlayer() {
    if (this.enemies <= 0) {
      this._lives = 3;
    } else {
      this._lives--;
    }
  },
};
