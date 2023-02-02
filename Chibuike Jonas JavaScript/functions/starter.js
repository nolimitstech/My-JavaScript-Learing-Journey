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
git
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

