// let js = "amazing";
// if (js === 'amazing') alert('Chibuike is blessed');

//console.log(40 + 8 + 23 - 10);

// OPERATORS;
//MATHEMATICAL OPERATORS
/*
const now = 2037
const ageSara = now - 1991;
const ageBimbo = now - 2000;
console.log(ageSara, ageBimbo);

console.log(ageSara * 2, ageBimbo / 2, 2 ** 3);
//2 ** 3 means 2 raise to power 3

//addition
const firstName = "Chibuike";
const lastName = "Okehie";
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName); // the code alows space btw stings in addition

// ASSIGNMENT OPERATORS
let x = 10 + 5;
x += 10; // means x = x + 10 = 25
x *= 4; // means x = x*4 = 100
x /= 2; // x= x/2 = 5o
x++; // means x= x+1 = 51
x--; // means x= x-1 = 50
console.log(x);

// COMPARISON OPERTORS; used to produce boolean operatorsb
console.log(ageSara > ageBimbo); // other operators are <, >=, <=
console.log(ageBimbo >= 60);

const IsOldAge = ageBimbo >= 60; // used to store the value of wheter bimbo abv 60 or not
console.log(now - 1991 > now - 2000); // same as ageSara > ageBimbo
*/

// OPERATOR PRECEDENCE
/*
const now = 2037
const ageSara = now - 1991;
const ageBimbo = now - 2000;
console.log(now - 1991 > now - 2000); // Bracket, comes first
*/

//CODDING CHALLENGE
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
/*
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
/*
const MarkMass = 78;
const MarkHeight = 1.69;
const JohnMass = 92;
const JohnHeight = 1.95

console.log(MarkMass / (MarkHeight ** 2));
console.log(JohnMass / (JohnHeight ** 2));

const MarkBMI = MarkMass / (MarkHeight ** 2);
const JohnBMI = JohnMass / (JohnHeight ** 2);
console.log(MarkBMI > JohnBMI);

// STRINGS AND TEMPLATE LITERALS
// to write =  i'm Chibuike, a 31, year old programmer !
const firstName = 'Chibuike';
const job = 'programmer';
const birthyear = 1991;
const year = 2022;

const Chibuike = `i'm ${firstName}, a ${year - birthyear}, year old ${job} ! `
console.log(Chibuike); // output = i'm Chibuike, a 31, year old programmer !

console.log(`strings
with
multiple
lines`); // used to write strings in new lines/paragraphs
*/

// TAKING DECISIONS, IF/ELSE STATEMENTS
// to determine if someone is old enough to drive using a control structure.
/*
const age = 10
if (age >= 18) {
  console.log('serah is ready to drive');
} else {
  const yearsLeft = 18 - age;
  console.log(`sarah is too young to drive. wait another ${yearsLeft} years`);
}

// another example, to the century of birth of a person
const birthyear = 1995
let century;
if (birthyear <= 2000) {
  century = 20
} else {
  century = 21
}
console.log(century);
*/

// CODDING CHALLENGE
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
/*
const MarkMass = 78;
const MarkHeight = 1.69;
const JohnMass = 92;
const JohnHeight = 1.95;

console.log(MarkMass / (MarkHeight ** 2));
console.log(JohnMass / (JohnHeight ** 2));

const MarkBMI = MarkMass / (MarkHeight ** 2);
const JohnBMI = JohnMass / (JohnHeight ** 2);
console.log(MarkBMI > JohnBMI);

if (MarkBMI > JohnBMI) {
  console.log(`Mark has higher BMI`);
} else {
  console.log(`John has higher BMI`);
}

if (MarkBMI > JohnBMI) {
  console.log(`Mark's BMI (${MarkBMI}) is higher than John's BMI (${JohnBMI})`);
} else {
  console.log(`John's BMI (${JohnBMI}), is higher than Mark's BMI (${MarkBMI})`);
}
*/

//TYPE CONVERSION/COERSION
//a) type conversion
/*
const inputYear = '1991';
console.log(Number(inputYear) + 18); // adding number converts strings to a number

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23)); // coverts number to a string

// b) type coercion
console.log('I am ' + 23 + ' years old'); //number is converted to a string cos of + sign
console.log('23' - '10' - 3); // - sign doesnt affect maths answer, strings re convertd to numbers
console.log('23' / '2'); // strings re converted to number too, *(multiplictn) too

// example
let n = '1' + 1; // '11'
n = n - 1;
console.log(n); //answer is 10

//eg 2
2 + 3 + 4 + "5" // ="95"
'10' - '4' + 2 + "5" // ='85'

// TRUTHY AND FAULSY VALUES; they re values dt will be convertd to false wen we convert dem to a boolean
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // ans= false
console.log(Boolean(undefined)); // ans = false
console.log(Boolean('Jonas')); // ans true 
console.log(Boolean({})); // ans true
console.log(Boolean('')); // ans true

//eg 1
const money = 0; // 0 is a falsy value, d/4 the else statmnt wil run and vice versa
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

//eg 2
let height; // height is undefined d/4 its a faulty value, the else statmnt will run
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/


// EQUALITY OPERATORS
/*
const age = '18'; // dis is an asignment operator
if (age === 18) console.log('You just became an adult'); // dis is a strict operator returns only true or faulse

'18' == 18; //ans on consol wil be true cos == is a loose operator nd alows for type conversn
'18' === 18; // ans wil be false cos === is a strict operato nd doesnt alow type conversn
*/
//eg 1
// const favourite = (prompt("What's your favourite number?")); // ans is '23' nd if statmnt doesnt run cos ans is a string
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 is an amzaing number!')
// }

// eg 2
/*
const favourite = Number(prompt("what's ur favorite number"));
console.log(favourite);

if (favourite === 23) {
  console.log('cool 23 is an amazing number');
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

// is different operator
if (favourite !== 23) console.log('why not 23?'); // !== means 'its not'
*/

// LOGICAL OPERATORS (AND, OR, AND NOT)
/*
const hasDriversLicense = false; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision); //  AND; d both conditns mst be true to return true
console.log(hasDriversLicense || hasGoodVision); // OR; at least one conditn mst be true to return true
console.log(!hasDriversLicense); // AND NT; mst be false to return true

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...'); // this is reported
}

if (hasDriversLicense || hasGoodVision || !isTired) {
  console.log('Sarah is able to drive!');  // this is reported cos !isTired is True
} else {
  console.log('Someone else should drive...');
}
*/

// CODDING CHALLENGE
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphnAv = (96 + 108 + 89) / 3;
// const koalasAv = (88 + 91 + 110) / 3;
/*
const dolphnAv = (500 + 509 + 89) / 3;
const koalasAv = (500 + 509 + 89) / 3;
console.log(dolphnAv, koalasAv);

if (dolphnAv > koalasAv) {
  console.log('dolphin is the winner');
} else if (dolphnAv < koalasAv) {
  console.log('koalas is the winner');
} else if (dolphnAv === koalasAv) {
  console.log('its a draw');
}

const minimumScore = 100;

// bonus  1
if (dolphnAv > koalasAv && dolphnAv >= minimumScore) {
  console.log('Dolphin is the winner!');
} else if (dolphnAv < koalasAv && koalasAv >= minimumScore) {
  console.log('Koalas is the winner!');
} else {
  console.log('No winner');
}
// bonus 2
// if (dolphnAv === koalasAv && dolphnAv >= minimumScore) {
//   console.log('its a draw!');
// } else 
if (dolphnAv === koalasAv && (dolphnAv && koalasAv) >= minimumScore) {
  console.log('its a draw!');
} else {
  console.log('no draw or winner');
}
*/

// SWITCH STATEMENTS
/*
const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

// similar else if statements
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
*/

// STATEMENTS AND EXPRESSIONS
/*
3 + 4
1991
true && false && !false // the codes above re expresions, cos thy produc a value in javaScript

if (23 > 10) {  // this if statament is a Statemnt
  const str = '23 is bigger';
}
*/

// THE CONDITIONAL /TERNARY OPERATOR

const age = 12;
age >= 18 ? console.log('I like to drink wine 🍷') :
  console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

// using if/else comparism
let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

//best tenary operator code
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

//CODING CHALLENGE
/*
Steven wants to build a very simple tip calculator for whenever
 he goes eating in a resturant.
 In his country,
 it's usual to tip 15% if the bill value is between 50 and 300. 
 If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value.
 Create a variable called 'tip' for this. 
 It's not allowed to use an if/else statement 😅 (If it's easier for you,
  you can start with an if/else statement, 
  and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, 
the tip, and the final value (bill + tip). 
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
/*
const bill = 275 // try values 40 and 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
  bill * 0.20;
console.log(`the bill was 275, the tip was ${tip}, and the total value was ${bill + tip} `);
*/





