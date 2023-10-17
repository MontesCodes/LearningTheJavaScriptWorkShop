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

/// Array literal
var myArray = [1, 2, 3];
var myEmptyArray = [];

/// access Array using integer indexes
myValue = myArray[3];

/// array constructor - equivalent examples
var arr1 = [1, 2, 3];
var arr2 = new Array(1, 2, 3);

/// constructor form - passing a single integer
var arr = new Array(3);
console.log(arr);
// expected -> (3) [empty x3]

/// Array is the index - when using for...in
for (var i in myArray) {
  console.log(myArray[i]);
}

/// Array object provides the Length property
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

/// indexOf
var arr = [1, 'b', true];
arr.indexOf('b');
// expected -> 1

/// check array index is higher than -1
var searchedValue = 'b';
if (arr.indexOf(searchedValue) > -1) {
  console.log('match found');
}

/// if element exist within Array by reference
var obj = { name: 'bob' };
var arr = ['a', 99, obj];
console.log(arr.indexOf(obj));
// expected -> 2
console.log(arr.indexOf({ name: 'bob' }));
// expected -> -1

/// update the hour of the Date instance
var d = Date();
d.setHours(12);

/// calling the parse method:
var greatDate = Date.parse('November 3, 1976');
console.log(greatDate);

/// passing milliseconds to the Date constructor:
var millis = Date.parse('November 3, 1976');
var greatDate = new Date(millis);
console.log(greatDate);

//@ use a Date instance as a string
var d = new Date();
console.log(d);

//@ Date: override the toString function of the object
var toString = function (date) {
  date = date || this;
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var day = date.getDae();
  var mnth = date.getMonth();
  var year = date.getFullYear();
  return day + ' ' + months[mnth] + ' ' + year;
};
var d = new Date();
d.toString = toString;
console.log(d);

//@ Date: dates wish to difference in milliseconds
var date1 = new Date('Dec 25 2001').getTime();
var date2 = new Date('Dec 25 2019').getTime();
var diff = date2 - date1;
diff;

//@ convert that into a time unit
var day = 1000 * 60 * 60 * 24;
var numDays = diff / day;
numDays;

//@ Date: Roll over values that exceed the next largest unit
var d = new Date('apr 26 2023');
d.setMonth(d.getMonth() + 60);
d;

//@ Creating a To-Do Model
let todos = [];
function modelFindIndex(state, id) {
  for (let i = 0; i < state.length; i++) {
    if (state[i].id == id) {
      return i;
    }
  }
  return -1;
}
function modelStateChange(state, action, data) {
  if ((action = 'CREATE')) {
    data['createdAt'] = new Date();
    data['updatedAt'] = new Date();
    data['completed'] = false;
    console.log('created:', data);
    return state.concat(data);
  }
  if (action == 'REMOVE') {
    let item = modelFindIndex(state, data.id);
    if (item > -1) {
      console.log('removed', state[item]);
      delete state[item];
      return state;
    }
  }
  if (action == 'MODIFY') {
    let modifyItem = state.splice(item, 1);
    modifyItem[0]['updatedAt'] = new Date();
    modifyItem[0]['completed'] = data.completed;
    console.log('modified item', modifyItem[0]);
    state[item] = modifyItem[0];
    console.log('complete array:', state);
    return state;
  }
}
todos = modelStateChange(todos, 'CREATE', {
  id: 1,
  title: 'Learning JS',
  description: 'Getting the hang of Learning JS',
});
todos = modelStateChange(todos, 'CREATE', {
  id: 2,
  title: 'Learning Event',
  description: 'Getting the hang of Events in JS',
});
todos = modelStateChange(todos, 'MODIFY', {
  id: 2,
  completed: true,
});
todos = modelStateChange(todos, 'REMOVE', {
  id: '1',
});

//@ UnderstandingCoreConcepts: timer function
var timerFunction = function () {
  var time = new Date().getTime();
  console.log(time);
};
console.log(setInterval(timerFunction, 500));

//@ UnderstandingCoreConcepts: timer function 2
function main() {
  setInterval(() => console.log('executed'), 500);
  console.log('after execution');
  console.log('another message');
}
console.log(main());

//@ UnderstandingCoreConcepts: terminate interval loop
var ref = setInterval(someFunc, 100);
clearInterval(ref);

//@ UnderstandingCoreConcepts: delay process for period of time
setTimeout(someFunc, 500);

//@ UnderstandingCoreConcepts: cancel setTimeout before execute
var ref = setTimeout(() => console.log('fire!'), 200);
setInterval(function () {
  console.log('waiting...');
  clearTimeout(ref);
}, 100);

//@ UnderstandingCoreConcepts:setTimeout mimicked by setInterval
let ref = setInterval(function () {
  console.log('Boo!');
  clearInterval(ref);
}, 500);

//@ UnderstandingCoreConcepts:timer Additional parameters passed to callback
let handler = function (p1, p2) {
  console.log(p1, p2);
};
console.log(setTimeout(handler, 100, 'Hello,', 'World!'));

//@ UnderstandingCoreConcepts:older browser parameters passed to callback
setTimeout(function () {
  handler('Hello,', 'World!');
}, 100);

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:
