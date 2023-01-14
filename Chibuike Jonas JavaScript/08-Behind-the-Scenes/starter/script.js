'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(age, firstName); // age variable cannt be found outside the calcAge functn, only an iner scope can ve acces to the variables of an outer scope nt vice versa.
  // firstName var can be found cos it was deffined in an outer scope unlike the age variable
  return age;
  
}

const firstName = 'jonas';
calcAge(1991);
*/

// 2nd example
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // this will work outside of this block
      // // Creating NEW variable with same name as outer scope's variable
      // const firstName = 'Steven';

      // // Reasssigning outer scope's variable
      // output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str); // this wont work outside of this block scope

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3)); // this wont work outside the printAge scope
    }

  }
  printAge();

  return age; // this will make the age var to work
}

const firstName = 'jonas';
calcAge(1991);
*/

///////////////////////////////////////
// Hoisting and TDZ in Practice

/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) { // Functn declaratn can be called before its defined
  return a + b;
}

const addExpr = function (a, b) { // if fnctn exp is called b4 its defined,its result will be cannot acess addexp b4 init
  return a + b;
};

var addArrow = (a, b) => a + b; // if arrow functn is called b4 its defined,its result will be cannot acess addexp b4 init

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart(); // this is reported

var numProducts = 10; // this is undefined

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this); // result is a window parent

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // result is undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // result is undefined
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // the this here is the jonas obj.
    console.log(2037 - this.year); // THIS here is used to refer to a particular method in an object
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // the THIS keyword here is the matilda obj that called the calcAge methd

const f = jonas.calcAge;
f(); // the this here is undefined

*/
///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

  },

  greet: () => console.log(`Hey ${this.firstName}`), // an arrow functn does nt get its own THIS keyword, it gets its THIS keyword from the sorounding. THIS is a window obj while firstName is not
};
jonas.calcAge();
jonas.greet();

///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // result will be 31 due to change
console.log(oldAge); // result will remain 30, change does nt affect value in comp. memory for primitive data typs

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend); // name = jonas, age = 27
console.log('Me', me); // name = jonas, age = 27. b/cos the change in the obj methd affects the both. they ve same address in the comp memory

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // result is davis, williams

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica); // result of lastname is davis, 
console.log('After marriage: ', marriedJessica); // result of lastname is davis
// marriedJessica = {}; // this wont work cos the forml obj is saved as a const

//////////////// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // this allows you to assign new values to the method of two objs with same name
// Object.assign only works at first level ie shallow
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2); // result of lastname is williams, while new array is 4 in number 
console.log('After marriage: ', jessicaCopy); // result of lastname is davis, while new array is 4 in number 


