'use strict';


///////////////////////////////////////
// Default Parameters
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