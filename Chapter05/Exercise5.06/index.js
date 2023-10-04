function sendEmail(name, age, comments) {
  var age = Number(age);
  if (
    Number.isNaN(age) ||
    typeof name != 'string' ||
    typeof comments != 'string'
  ) {
    return null;
  }
  var body = `A user Has Posted A Comment From The Website:
  name: ${name}
  age: ${age}
  status: ${
    age < 18
      ? `${name} is not a valid user`
      : `${name} is a valid 
  user`
  }
  comments: ${comments}`;
  return body;
}
console.log(sendEmail('Kelly', 39, 'Your WebSite is Fantastic!'));
