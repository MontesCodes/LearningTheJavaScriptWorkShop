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

//@ UnderstandingCoreConcepts: Real-Time Clock
var secs,
  mins,
  hrs,
  date,
  setTime = function () {
    date = new Date();
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    document.body.innerHTML = `${hrs}: ${mins}:${secs}`;
  };
console.log(setInterval(setTime, 500));

//@ UnderstandingCoreConcepts:attribute accessors
var document = document.documentElement;
var bodyNode = document.body;
console.log(bodyNode);

//@ UnderstandingCoreConcepts:property return null or empty array
var image = document.body.firstChild.firstChild;
console.log(image);
let btn = image.parentNode.nextSibling.firstChild.childNodes[1];
console.log(btn);

//@ UnderstandingCoreConcepts:getElementById method of the document object
let node = document.getElementById('myTagId');

//@ UnderstandingCoreConcepts: addEventListener
document.body.addEventListener('click', () => alert('I was clicked'));

//@ UnderstandingCoreConcepts: MouseEvent objects
document.body.addEventListener('click', function (evt) {
  console.log(evt);
});

//@ UnderstandingCoreConcepts: functionReferenceNoDisplayed
var display = () => console.log('Clicked');
document.body.addEventHandler('click', () => console.log('I was Clicked'));
document.body.addEventHandler('click', () => console.log('I was Clicked'));
document.body.addEventHandler('click', display);
document.body.addEventHandler('click', display); //@ this one will not be output

//@ UnderstandingCoreConcepts: removeEventListener
document.body.removeEventListener('click', display);

//@ UnderstandingCoreConcepts:Exercise Tabbed Content
var button1 = document.getElementById('btn1'),
  button2 = document.getElementById('btn2'),
  button3 = document.getElementById('btn3'),
  container = document.getElementById('container');
var content1 = 'Button 1 was pressed';
content2 = 'Button 2 was pressed';
content3 = 'Button 3 was pressed';
button1.addEventListener('click', () => (container.innerHTML = content1));
button2.addEventListener('click', () => (container.innerHTML = content2));
button3.addEventListener('click', () => (container.innerHTML = content3));

//@ UnderstandingCoreConcepts: useCapture parameter
var clickHandler = () => console.log('clicked');
document.body.addEventListener('click', clickHandler);

//@ UnderstandingCoreConcepts: capturing/bubbling:function called twice
let clickHandler = () => console.log('clicked');
document.body.addEventListener('click', clickHandler);
document.body.addEventListener('click', clickHandler, true);

//@ UnderstandingCoreConcepts:remove and event already added with useCapture
document.body.removeEventListener('click', clickHandler, true);

//@ UnderstandingCoreConcepts: stopImmediatePropagation
let handler1 = function (ev) {
  if (ev.target.value.length < 6) {
    ev.stopImmediatePropagation();
  }
};

//@ UnderstandingCoreConcepts: stopEventActions
let handler3 = function (ev) {
  ev.preventDefault();
};

//@ UnderstandingCoreConcepts: callBothTypesOfMethod
let handler4 = function (ev) {
  ev.stopPropagation();
  ev.preventDefault();
};

//@ UnderstandingCoreConcepts: setCancelable
let handler5 = function (ev) {
  if (ev.cancelable) {
    ev.preventDefault();
  }
};

//@ UnderstandingCoreConcepts:instance of an Event
let ev = new Event('click');
someNode.dispatchEvent(ev);

//@ UnderstandingCoreConcepts:detail property parameter
let event2 = CustomEvent('click', { detail: 1234 });

//@ UnderstandingCoreConcepts:referencing detail property parameter
let handler6 = function (ev) {
  let value = ev.detail;
};

//@ UnderstandingCoreConcepts:any Named String can be passed into event object
let event3 = new CustomEvent2('myEvent', { detail: 421 });
someContainer1.addEventListener('myEvent', someEventHandler);
someNode.dispatchEvent(event3);

//@ UnderstandingCoreConcepts:event Attributes
<div id='someNode' onclick='someFunction();'></div>;

//@ UnderstandingCoreConcepts:semi-colon distinguish separate statements
<div id='someNode' onclick='someFun1(); someFun2();'></div>;

//@ UnderstandingCoreConcepts:return false value handling jQuery event
function formHandler1(ev) {
  if (document.getElementById('password').value().length < 3) {
    alert('Password is too short');
    return false;
  }
}

//@ UnderstandingCoreConcepts:reset method: form node
document.getElementsByTagName('form')[0].reset();

//@ UnderstandingCoreConcepts:assigning form reset event
document
  .getElementsByTagName('form')[0]
  .addEventListener('reset', myResetHandler);

//@ UnderstandingCoreConcepts: Regex Email Validation
const emailValidations1 = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

//@ UnderstandingCoreConcepts: Email Validation
const emailValidations2 = email => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

const validate = () => {
  const $result = $('#result');
  const email = $('#email').val();
  $result.text('');

  if (emailValidations2(email)) {
    $result.text(email + ' is valid.');
    $result.css('color', 'green');
  } else {
    $result.text(email + ' is invalid.');
    $result.css('color', 'red');
  }
  return false;
};

$('#email').on('input', validate);

//@ UnderstandingCoreConcepts: textarea value attribute in JavaScript
let desc = document.getElementsByName('description')[0];
console.log(desc.value); // => outputs 'Some default text'
desc.value = 'Some new text'; // => changes the value of the textarea to 'Some new text'
let desc2 = document.getElementsByName('description2')[0].value;
console.log(desc2.value); // => outputs 'Some default text' from the textarea
desc2.value = 'Some new text 2'; // => changes the value of the textarea to 'Some new text 2'

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:

//@ UnderstandingCoreConcepts:
