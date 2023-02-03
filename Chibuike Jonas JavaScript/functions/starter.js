'use strict';


///////////////////////////////////////
// Default Parameters
/*
const bookings = [];

const createBooking = function (///creating values/parameters
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

//createBooking(); 
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);///undefined is used to skip the unspeicified elemnt(numPasengers)


///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
//we pass a reference to a function, but we dont pass by reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';////this is just a copy, dosent change the original, COS Its not an object. points to a diff memory loacation
  passenger.name = 'Mr. ' + passenger.name;////changes the original cos its an object, the referenc points to same location in memory heap

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);//flight reamins same, while jonas changes
console.log(flight);
console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

//EXAMPLE case where pasing changes to an obj goes wrong
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
*/

////FIRST CLASS AND HIGHER OREDER FUNCTIONS

//N/B Higher oder functns recieves othr functions as an input
//N/B the function that is called as an input is called CALL BACK FUNCTION
//SEE IPHONE PICTURES FOR MORE DETAILS

//examples of highr order functns
// Functions Accepting Callback Functions
/*
const oneWord = function (str) {////ordinary functions
  return str.replace(/ /g, '').toLowerCase();///N/B; (/ /g,) refers to all the spaces, '' refers to empty str(does nt give space btw letters)
};

const upperFirstWord = function (str) {///ordinary functn
  const [first, ...others] = str.split(' ');//using destructing, rest pattern and split
  return [first.toUpperCase(), ...others].join(' ');//declaring output/return
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);///logs 'Chibuike is the best'
  console.log(`Transformed string: ${fn(str)}`); //logs 'CHIBUIKE is the best(cos fn(uperFirstword fnctn is applied))

  console.log(`Transformed by: ${fn.name}`); ///llogs Transformed by: upperFirstWord
};

transformer('Chibuike is the best', upperFirstWord);///transformer(HIGHER ORDER FUNCTN) calling another functn(uperfirstword) as input
///the calling pattern abov alows the function input to work on the string('Chibuike is the best')

transformer('JavaScript is the best!', oneWord);//////transformer(HIGHER ORDER FUNCTN) calling another functn(oneword) as input
///the calling pattern abov alows the function input to work on the string('JavaScript is the best')

////another illustration of higher order function and input/call back function
// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);//// 'addEventListener' is the HIGHER ORDER while 'high5' is the callback function

['Jonas', 'Martha', 'Adam'].forEach(high5);/// for each alows the (high5) operation to be done on each aray...ther/4 logs waving sign 3 times

///FUNCTIONS THAT RETURNS A NEW FUNCTION
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}  ${name}`);
  };
};

const greeterHey = greet('Hey');////greeterHey is now a function
greeterHey('ken');//logs Hey ken
greet('Jonas')('Schemtmann');///logs Jonas schmetman
greeterHey('Steven');//logs hey steph

/////TO RE-WRITE THE GREET FUNCTION ABOV USING THE ARROW FUNCTION WE HAVE;
// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);///this represents one arow function returning anoda arow functn

greetArr('Hi')('Jonas');//logs 'Hi Jonas'


////SETTING THE 'THIS' KEYWORD MANUALLY ND WHY
// THE CALL, APPLY AND BIND Methods, MANUALLY MANIPULATING THE THIS KEYWORD
*/
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) { ///this is a function in an obj
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );///using the 'THIS KEYWORD' to locate methds in an obj
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); ///pushes these contents into the bookings array
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');//logs (Jonas Schmedtmann booked a seat on Lufthansa flight LH239)
lufthansa.book(635, 'John Smith');
console.log(lufthansa);
console.log(typeof lufthansa); //logs 'object'

/////another example showing what happens if luphtanza airline changes name etc to Eurowings
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method of calling function methds
book.call(eurowings, 23, 'Sarah Williams');//N/B CALL is a functn methd. here we called the CALL METHD, the call methd called the BOOK FUNCTN, with the THIS KEYWORD set to EUROWINGS/ist argumnt of the call methd

console.log(eurowings);///booking is added to EUROWINGS. (check bookings)

book.call(lufthansa, 239, 'Mary Cooper'); ///here functn call is set to luftanza nd booking is added
console.log(lufthansa);

///ANOTHER EXAMPLE OF USING CALL METHD
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');////aaded to bookings on Swiss airline

////THE APPLY METHD;
// Apply method, KINDA OUTATED
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);///logs same as call metd

book.call(swiss, ...flightData);//modern way of writing (apply methd) using the SPREAD OPERATOR. LOGS same result as call too


/////USING THE BIND METHD

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);///a variable needs to be created for bind methd
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');///creates a booking on Eurowings for stephen williams

const bookEW23 = book.bind(eurowings, 23);////a case where flightNum has been preset
bookEW23('Jonas Schmedtmann');///booking wil ve same flightnum but diff names
bookEW23('Martha Cooper');///booking wil ve same flightnum but diff names

////BIND METHD WITH EVENT LISTENERS
// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;///allows an addition of 1
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));///using bind alows the THIS KEYWORD to point at luftanza instead of the button that ws selectd for event listener

///// ANOTHER USE CASE FOR THE BIND METHD IS FOR PARTIAL APPLICATION
//partial applicatn means dat we can preset parametrs

const addTax = (rate, value) => value + value * rate;//using arow functn
console.log(addTax(0.1, 200));///ans is 220(400 * 0.1)

const addVAT = addTax.bind(null, 0.23);///null is used cos there is no this keyword to bind as first argumnt, rate is now fixed at 0.23
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));///log 123
console.log(addVAT(23));///logs 28.29

///re writing the example abov using the technique of one functn returning another functn
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

////////CODING CHALLENGE
///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

////SOLUTION TO CODING CHALLENGE
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  ///NO 1
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`/// '\n' represents new line
      )
    );
    console.log(answer);

    ///Register answer
    typeof answer === 'number' &&////anwer is the feedback frm prompt
      answer < this.answers.length &&
      this.answers[answer]++;///logs in new count on each choice

    //console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') { /// NOS 3 ND 4
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);//logs 'Poll results are 0, 1, 0, 0'
    }
  },


};
//poll.registerNewAnswer();///prompts the question
//console.log(poll);

///NO 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));////to get the numbr of counts for each choice selected when poll button is clicked

////BONUS SOLUTIONS:
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });



///////////IMMEDIATLY INVOKED FUNCTN EXPRESSIONS
// IIFE
(function () { ///rapped in parentesis to enable it run
  console.log('This will never run again');
  const isPrivate = 23;
})();///  '()' is used to call it

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();/// arow function, also wraped in parenthesis to avoid 


///////////////////////////////////////
// CLOSURES...CHECK CHAPTER 10, SLIDE 12 for more illustrations
//the closure has more priority over the scope chain
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();///closure alows booker function to ve continous acces to the variables in its parent(secureBooking), any time its declared
booker();
booker();

console.dir(booker);

///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();///declared first
f();///declaratn works after g has been declared, else error msg wil pop 

// Re-assigning f function
h();
f();///closure helps f functn  nt to loose conectn to the variables at its most recent birthplace


// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  ///setTimeout(function(){}, 1000). this is the default format for writing set timers
  setTimeout(function () { ///this uses closure to acess the variables in this parent even after the parent has finished running
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);//N/B 1000m/s = 1 minute

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;///this wil not be used by setTimeout functn cos the closure more priority over the scope chain
boardPassengers(180, 3);


///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {///this functn was able to aces CONST HEADER VARIABLE DUE TO HELP OF CLOSURES
    header.style.color = 'blue';
  });
})();
