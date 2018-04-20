// const sayHello = function() {
//   console.log('Hello');
// }

// Arrow function (more like lambdas in Java)
// const sayHello = () => {
//   console.log('Hello');
// }

// Arrow function One line functions does not need braces
// const sayHello = () => console.log('Hiellow');

const sayHello = () => 'Hello'
console.log(sayHello());

// Return object
const sayHiello = () => ({msg: 'HiellowDouble'});
console.log(sayHiello());

const something = (name, age) => console.log(`Name: ${name}`, `\nAge: ${age}`);
something('Marian', 26);

// Multiple param need param
const sayMyName = (firstName, lastName) => console.log(`Hello, ${firstName} ${lastName}!`); 
sayMyName('Marian', 'Dobre');

const sayMyName_Age = (first, last, age) => console.log(`Hello, ${first} ${last} and your age ${age}`);
sayMyName_Age('Marian', 'Dubre', '33');

// array
const users1 = ['Nathan', 'John', 'William'];
// getting the length of each of this users
const nameLengths1 = users1.map(function(userName) {
  return userName.length;
});
console.log(nameLengths1);

// Using the arrow function
const users2 = ['Marian', 'Ion', 'Willian'];
const nameLengths2 =  users2.map((userName) =>{ 
  return userName.length 
});
console.log(nameLengths2);

// Shortest
const nameLengths3 = users2.map(name => name.length);
console.log(nameLengths3);