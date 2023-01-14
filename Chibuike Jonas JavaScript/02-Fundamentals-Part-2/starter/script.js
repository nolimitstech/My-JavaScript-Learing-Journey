'use strict';
////////////////////////////////////////////
// FUNCTIONS
// function logger() {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

/*
function fruitProcessor(apples, oranges) { // apples nd oranges here re parameters ie placeholder
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0); // this is saved to be able to return the functn as below
const appleJuice = fruitProcessor(5, 0); // 5, 0 re called arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
/*
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

///////////////////////////////////////
// Arrow functions
// eg1
/*
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);
*/

//eg 2
/*
const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
const yearsLeft = yearsUntilRetirement(1991, 'Chioma');
console.log(yearsLeft);  // OR you can send to console direct as seen below without creating a variable

console.log(yearsUntilRetirement(2000, 'Amaka'));
*/

///////////////////////////////////////
// Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/


///////////////////////////////////////
// Reviewing Functions
/*
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated
(so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team.
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters
('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// CHALLENGE SOLUTION
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);  // use let cos variable can be reassigned
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

///////////////////////////////////////
// ARRAYS
/*

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); // used to call all stored variable

const years = new Array(1991, 1984, 2008, 2020); // another methd of storing arrays

console.log(friends[0]); // to call first var
console.log(friends[2]); // to call third var

console.log(friends.length); // to check for total number of arrays/var stored, nt zero based
console.log(friends[friends.length - 1]); // used to get the last value in the array

friends[2] = 'Jay'; // used to change the 3rd value in the array
console.log(friends)

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise to determine the age using diff. birthyears
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

///////////////////////////////////////
// Basic Array Operations (Methods)
//const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
/*
const newLength = friends.push('Jay'); // to add a value to the last list/end in an array
console.log(friends);
console.log(newLength);

friends.unshift('John'); //used to place a value in the begining of an array
console.log(friends);

// Remove elements
friends.pop(); // used to remove the last elemnt
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // used to remove the first elemnt
console.log(friends);

console.log(friends.indexOf('Steven')); //used to get the index no of array an array value..eg this one is 1
console.log(friends.indexOf('Bob')); // returns -1 cos bob isnt part of the array

friends.push(23);
console.log(friends.includes('Steven')); // 'includes' returns true/false dependin on whether the elemnt is part of the array
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {  // using include for conditionals
  console.log('You have a friend called Steven');
}
*/

////CODING CHALLENGE  #2
/*
Steven is still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// const bill = 100 // try values 40 and 430
// // const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
// //   bill * 0.20;
// console.log(tip);

// CHALLENGE SOLUTION
// no 2 solution
/*
const bills = [125, 555, 44];

// no 1 solution
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.20;

}

// no 3 solution
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);

//no 4 bonus solution
const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2]),];
console.log(total);
*/

///////////////////////////////////////
// Introduction to Objects
/*
const jonasArray = [ // NORMAL ARRAYS METHOD
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

// OBJECTS METHOD OF ARRAYS: objects elemnts can be called or retriev unlike arrays in no particular order
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

jonas.location = 'Portugal'; ///used to add element/value by dot methd
jonas['twitter'] = '@jonasschmedtman';  ///used to add element/value by bracket methd
console.log(jonas);

// Dot vs. Bracket Notation methds of retieving object values
console.log(jonas.lastName); // dot methd
console.log(jonas['lastName']); // bracket methd

// another bracket method
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// another example of bracket methd in a prompt
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

// Challenge
// write  "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

///////////////////////////////////////
// Object Methods
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,


  // calcAge: function () {
  //   console.log(this.job); // this here is used to call the job method/value
  //   console.log(this); // 'this' here is used to call the JONAS object
  //   return 2037 - this.birthYeah; // 'this' is used to refer to the birthyeah methd or value
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;  // 'this.age' is used to add a new methd "age" to the obj
    // return this;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge()); // runs the function with the this
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


console.log(jonas.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, 
mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate
 the BMI (the same method on both objects). Store the BMI value to a property, 
 and also return it from the method.
3. Log to the console who has the higher BMI, 
together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀


// SOLUTION
const John = {
  fullName: `John Smith`,
  Mass: 92,
  Height: 1.95,

  calcBMI: function () {
    console.log(this);
    this.bmi = this.Mass / this.Height ** 2;
    return this.bmi
  }

};

console.log(John.calcBMI());

const Mark = {
  fullName: `Mark Miller`,
  Mass: 78,
  Height: 1.69,

  calcBMI: function () {
    console.log(this);
    this.bmi = this.Mass / this.Height ** 2;
    return this.bmi
  },

};


console.log(Mark.calcBMI());
if (Mark.bmi > John.bmi) {
  console.log(`Marks ${Mark.bmi} is higher than John's ${John.bmi}`);
} else if (John.bmi > Mark.bmi) {
  console.log(`John's ${John.bmi} is higher than John's ${Mark.bmi}`);
}
*/

///////////////////////////////////////
// Iteration: The for Loop

// for loop keeps running while condition is TRUE, its used for repeated occurences
/*
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);


// eg 2
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);  // pushes the answer to end of ages array loopwise
}
console.log(ages); // ans is  [46, 30, 68, 17] ie the age of the diiff birthyears

// continue and break

//'continue' example
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}
U*/

///////////////////////////////////////
// Looping Backwards and Loops in Loops
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// example of loop inside a loop for 3 diff excercises done 5x each

for (let exercise = 1; exercise < 4; exercise++) {   // first loop 
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {  //loop in a loop
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
*/


///////////////////////////////////////
// The WHILE Loop (used when you dont know hw many times a loop shld run)
/*
for (let rep = 1; rep <= 10; rep++) { // this is here for comparism sake
  
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {  // the while loop doesnt really need a counter unlike the for loop
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}
*/

// the dice rolling for a SIX example
/*
let dice = Math.trunc(Math.random() * 6) + 1; // math.trunc is used to remove decimals
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array.
 This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. 
  To do the addition, start by creating a variable 'sum' that starts at 0. 
  Then loop over the array using a for loop. In each iteration, 
  add the current value to the 'sum' variable. This way, by the end of the loop, 
  you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the 
  length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// SOLUTION TO CHALLENGE
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);  // const cant be defind outside cos of the 'i'
  tips.push(tip);
  totals.push(tip + bills[i]);
  // console.log(tip);
}
console.log(bills, tips, totals);

// OR ANOTHER METHD

for (let i = 0; i < bills.length; i++) {
  // const tip = calcTip(bills[i]);
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(bills, tips, totals);


// Bonus solution
const calcAverage = function (arr) {
  let sum = 0; // sum starts with 0 and adds as loop goes on
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    // sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));  // sums up total bill and divive with aray lenght
console.log(calcAverage(tips));  // sums up total tips and divive with aray lenght













