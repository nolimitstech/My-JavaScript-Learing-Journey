'use strict';

// Data needed for a later exercise
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  */
///////// Destructing of objects

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  ///copied out display ES6 Enhanced obj literals
  // openingHours: {
  //   thurs: {
  //     open: 12,
  //     close: 2,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 3,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 6,
  //   },
  // },
  ////ES6 ENHANCED OBJECT LITERAL FOR OPENING HOURS
  //openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  ////// to destructure the new orderDelivery object we use;
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(time, address, mainIndex, starterIndex);
    ////using template literal to view sole below
    console.log(`order Recieved! ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta ingredients ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },


};



console.log(restaurant);

/////to pass methds/elemnts to the order delivery object we use;
// restaurant.orderDelivery({
//   time: '21: 30',
//   address: '4 lakowe ibeju',
//   mainIndex: 2,
//   starterIndex: 2,
// });

/////// THE SPREAD OPERATOR; wheneva we need the elemnts of an array indiv, we use the spread operator
// const arr = [2, 5, 7];
// const newarr = [1, 2, ...arr]; /// the spread operator to add new array elemnts to arr
// console.log(newarr);
// console.log(...newarr); /// using spread to retriev array elemnts individualy

///////using spread oprator to add element to the restaurant mainmenu array
/ //////  'gnocci' nt added

///////using spread operator to create shalow copy of arrays
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

/////////using spread operstor to create shallow copies of objects with new methds
// const newRestaurant = {
//   foundedIn: '1990', founder: 'Chibuike', ...restaurant,
// }
// console.log(newRestaurant);

////////////////// to make a copy of restaurant with a diff name
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'restarante';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);



///////using spread operator to join the elemnts of two diff. arrays
// const jointMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(jointMenu);

// //////////using the spread operator to destructure a string
// const str = 'jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);//// the result is letters of jonas will be seperated into single elemnts

/*
////creating a prompt for ordering pizza
const ingredients = [prompt('let\'s make pasta! ingredient 1?'), prompt('ingredient 2?'), prompt('ingredient 3?'),];
console.log(ingredients);

//// using spread operator to merge orderpasta and ingredients in a prompt
restaurant.orderPasta(...ingredients)
*/
////////THE REST PATTERN; this is the opp of the spread oprator
///examples
/*
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others);
///another example
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//////////using the rest pattern to collect elements into a new object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
*/
//////example of using rest pattern to pass multiple values into an array
/*
const add = function (...numbers) {
  console.log(numbers);
}
add(2, 3);
add(5, 4, 6, 7);
add(3, 6, 9, 8);
*/

////////to sum up the numbers in each array
/*
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);

};
add(2, 3);
add(5, 4, 6, 7);
add(3, 6, 9, 8);


//////using rest pattern on the order pizza obj
restaurant.orderPizza('mushrooms', 'onions', 'pepper', 'carrot');
restaurant.orderPizza('mushrooms'); ///will return only mushroom with an empty array cos nothin was pased
*/

/*
////////// let destucture the restaurant obj
const { name, openingHours, categories } = restaurant; // while destructuring objects, the order of the element does nt matter
console.log(name, openingHours, categories);
console.log(restaurant);

/////////////using obj destructuring to create new variable
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//////setting default data value for non hard coded elements of an obj
const { menu = [], starterMenu: starters = [] } = restaurant; ///we use empty array to set default data
console.log(menu, starters);

/////////////mutating variables
let a = 111;
let b = 999;
const obj = { a: 27, b: 7, c: 14 };
({ a, b } = obj); //// puting every code in () helps to prevent errors
console.log(a, b);

////////destructuring nested objects (eg) openingHours;
const { fri: { open, close } } = openingHours;
console.log(open, close);
/// mutating the variables of nested objects/elemnts
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);


/////////////////////////////////////////////
// Data Structues and Operators
// example of destructuring of arrays
/*
const arr = [2, 3, 4];
const [x, y, z] = arr; // this is array destructuring
console.log(x, y, z); // result is 2, 3, 4
*/
// another example
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

}

let [first, , second] = restaurant.categories; // refers to catgories first and 3rd array elemnt
console.log(first, second); // result is 'italian' 'vegetarian'

// to switch/swap  the arrays position we use
[first, second] = [second, first];
console.log(first, second);
console.log(restaurant.order(2, 0));

// to destucture we use
const [starter, maindish] = restaurant.order(2, 0);
console.log(starter, maindish);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/

///////////////SHORT CIRCUTING "OR LOGICAL OPERATOR"
/*
console.log(3 || "jonas"); //// 3 will be reportd to console cos the first value is a truthy value

console.log(undefined || 0 || '' || 'Hello' || 23 || null); /////returns "Hello"cos its the first truthy value
/////example 2
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; /////means if nunGuests exists in the restaurant array it should returm restaurant.numGuests, else it should return 10
console.log(guest1);
////using 'OR' shortcircuting
const guest2 = restaurant.numGuests || 10; ////means if restaurant.numGuest isnt there return 10;
console.log(guest2);

///////////////SHORT CIRCUTING "AND LOGICAL OPERATOR"
console.log(0 && 'jonas'); ///resul is 0 cos '0' is a faulsy value ther/4 terminates operatn
console.log(7 && 'jonas'); // result is "jonas" cos 7 is a truthy value there/4 continues operation to jonas
console.log('hello' && 23 && null && 'jonas'); ///the result will be null

///practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

///the code can be rewritten using AND shortcircuting thus;
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

/////Nullish coalescent Operator
////Nullish values are Null and Undefined (Not 0 or '')
restaurant.numGuests = 0;
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3); //// result is 0, cos 0 is a nullish value nt null or undefined in this case

*/

/////////CODING CHALLENGE
///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this
challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are
 field players. For Bayern Munich (team 1) create one variable ('gk') with the
  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
  field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
 new array ('players1Final') containing all the original team1 players plus 'Thiago',
  'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1',
 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names
 (NOT an array) and prints each of them to the console, along with the number of
 goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
 team is more likely to win, WITHOUT using an if/else statement or the ternary
  operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  Club1: 'Bayern Munich',
  Club2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//////////SOLUTION TO CODING CHALLENGE
///1. destructing the game player array
const [player1, player2] = game.players;
console.log(player1, player2);

//2. Using the rest pattern
const [gk, ...fieldplayers] = player1;
console.log(gk, fieldplayers);

const [gk2, ...fieldplayers2] = player2;
console.log(gk2, fieldplayers2);

///3. using the spread operator
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

////4. to add the 3 substitutes to player1 final list
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perusic'];
console.log(players1Final);

////5. to create one variable for each odd

///dnt knw why code aint working
/*
const {
  odd: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
*/

/*
////6. to print the number of goals scored to the console
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);

}

printGoals('lewandowski', 'Muller', 'ken', 'james');

//// 7. to print the team more likely to win based on the odd variable
/// Logical operator is the best fit
//// n/b code nt working, Team1 is undefined
team1 > team2 && console.log('Team1 more likely to win');
team1 < team2 && console.log('Team2 more likely to win');

*/

///////////THE FOR OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item); /// it loops over the menu contents and produces the result individually

// ////to get the array index using the FOR OF LOOP
// for (const item of menu.entries()) {
//   console.log(item); /// this will produce the array idex to each item in the loop
// }

// ////To destructure the menu.entries we use, thereby making result better
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//// ENHANCED OBJECT LITERALS: this is a simpler to add objects that are outside an object
///SEE ILLUSTRATION IN THE RESTAURANT OBJECT ABOVE
////Example 2, see  1 above
//const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun',];

// const Hours = {
//   [days[2]]: {
//     open: 12,
//     close: 22,
//   },
//   [days[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [days[3]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// console.log(Hours);

// for (const item of days.entries()) {
//   console.log(item); /// this will add the array idex to each item in the loop
// }

////OPTIONAL CHAINNING (?)
////illustration using restaurant obj. without optional chaining

// if (restaurant.openingHours && restaurant.openingHours.mon)////means if both re available, then log to the console
//   console.log(restaurant.openingHours.mon.open); //// result willl be an errror

////USING OPTIONAL CHAINING to prevent the error msg at cpnsole  WE HAVE
// console.log(restaurant.openingHours.mon?.open); ////means if restaurant.openH.mon is available then log the opening hr, else log undefined instead of an error
// console.log(restaurant.openingHours?.mon?.open); ////this checks for both OPH AND MON

// //another example
// const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun',];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; ////using nullish operator(??) to take care of 0 OPH on sat
//   // console.log(day);
//   console.log(`on ${day}, we open at ${open}`);

// }



////Another example using methds
// console.log(restaurant.order?.(0, 1) ?? `Method does nt exist`); ////exists
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does nt exist`); //// does't exists

//////practical example of chaining and nullish operator
// const users = [{ name: 'jonas', email: 'johnken@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty 1'); ////will log name(jonas)
// console.log((users[0] && users[0].name) ?? 'User array empty 2'); /// will log name (jonas)


/////LOOPING OVER OBJECTS PROPERTY NAMES USING THE 'FOR OF LOOP'
// for (const day of Object.keys(openingHours)) { ///'obj.keys' is used to pull the elements of an object. resul will be thurs, fri ssat
//   console.log(day);
// }

// const properties = Object.keys(openingHours);
// console.log(properties); ////result will thurs, fri, sat

// console.log(`we are open on ${properties.length} days`); // will log 'we re open for 3 days

///to log 'we re open for 3 daYS: thurs, fri, sat' we use
// let openStr = `we are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

/////LOOPING OVER OBJECTS PROPERTY VALUES USING THE 'FOR OF LOOP'
// const values = Object.values(openingHours);
// console.log(values); ///logs the values/time for each opening day

///to log both names and values we use
// const entries = Object.entries(openingHours);
// console.log(entries); //wil log both day nd time

/// to loop over the obj we have...
// for (const [key, { open, close }] of entries); {
//   console.log(`On ${day} we open at ${open} and clode at ${close}`); ///this will log on thurs, we open at 12 ND close at 5. action wil be repeatd for other days
// }


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

////CODING CHALLENGE 2 SOLUTION
// solution 1
for (const [i, player] of game.scored.entries())//////player reps the entries in the scored obj
  console.log(`goal ${i + 1}: ${player}`); ///// 'i' reps the index numbers

///solution 2
const odds = Object.values(game.odds); ///creatin a variable for obj values
let average = 0; ////initial loop condition
for (const odd of odds) average += odd;///creatin a loop that sums up the odd values
average /= odds.length;///dividing the sum/lengt of the odds array
console.log(average); ///result is the average 3.6999

///solution 3
for (const [team, odd] of Object.entries(game.odds)) { ///used to generat odds per outcome
  console.log(team, odd); ////this logs the odds associated to each outcome in the odds array
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`; /// means if team = x, let draw be reportd else victory team name 
  console.log(`Odd of ${teamStr} ${odd}`);
}

/////////SETS: They re used to remov duplicates in arrays, 
const ordersSet = new Set([
  'pasta',
  'pasta',
  'pizza',
  'Risotto',
  'pizza',
  'Risotto',
]);
console.log(ordersSet); ///this will log 3 items without repetition
console.log(new Set('jonas')); ///this will log the letters of jonas seperatly

console.log(ordersSet.size); ///this logs the diff/unique contents of the array
console.log(ordersSet.has('pizza')); ///logs 'true' checks if an elemnt is available in the set
console.log(ordersSet.has('Bread')); ///logs 'false'
console.log(ordersSet.add('Garlic')); ///adds garlic to orderset
console.log(ordersSet.add('Garlic'));///ignored
console.log(ordersSet.delete('pasta')); ///pasta is deletd from orderset
//ordersSet.clear(); ///used to clear the contents of a set
console.log(ordersSet);

///TO LOOP OVER A SET WE USE;
for (const order of ordersSet) console.log(order); ///this will iterate over the contents of orderset nd loop over them

///practical example of using sets
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'cook']; ///N/B this is an array
// const staffUnique = new Set(staff);
// console.log(staffUnique); ///this will log unique set of staff without repetition in a set format

const staffUnique = [...new Set(staff)]; //use the "Spread Operator" to log the result in an aray format, seperatd with comas
console.log(staffUnique);

///to log the size of the staff array using set we have;
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'cook']).size);
console.log(new Set('Chibuikejohnkingsley').size); //another eg. logs the number of alphabets in the name


/////MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano'); ///This is hw maps re created/added/updated
rest.set(1, 'Firenze, Italy');///This is hw maps re created/added/updated
console.log(rest.set(2, 'Lisbon, Portugal'));///This is hw maps re created/added/updated


rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name')); ///used to retrieve elemnts from a map
console.log(rest.get(true));
console.log(rest.get(1));

///to retrieve the value of 'true' from the map, we can manipulate thus;
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); ////the result is 'we re open' which is the value of true in the map

///how to check for key/elemnts availabity in maps
console.log(rest.has('categories')); //result is true
console.log(rest.delete(2)); /// used to delete keys
console.log(rest.size); //used to know the size/number of the keys/elemnts in a map
//rest.clear(); //used to clear all map content

///TO ADD ARRAYS TO MAP WE USE;
const arr = [1, 2]; //create aray variable
rest.set(arr, 'Test');///add aray value to map
console.log(rest);
console.log(rest.get(arr));

//adding DOM elemnts to map thurs
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


///NEW METHOD OF POPULATING A MAP WITHOUT USING SET METHD
// Maps: Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

///How to convert objects to map. ie creating a map from an object
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

///Using a 'For Loop' to print the elemnts of 'question' to the consol
console.log(question.get("question"));
for (const [key, value] of question) {
  /// the for loop
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`); ///this wil print only keys 1, 2, 3 and their values
}

///example using a PROMPT
// const answer = Number(prompt("your answer"));
// console.log(answer);

///To log the TRUE KEY'S VALUE indirectly using the power of boolean we have;
// console.log(question.get(question.get("correct") === answer)); ///this wil print CORRECT if prompt answer is 3, same as corect key value in the map. it will print TRY AGAIN if answer is diff

console.log([...question]); ///TO convert map back to an array
console.log([...question.keys()]); ///to log all the keys
console.log([...question.values()]); /// to log all the values


///////////////////////////////////////
// CODING CHALLENGE #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);



///SOLUTIONS TO CHALLENGE
// 1.
const events = [...new Set(gameEvents.values())];/////code for events without duplicate
console.log(events);

// 2.
gameEvents.delete(64);////code deletes this event

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// const time = [...gameEvents.keys()].pop();////to calc average using 92 minutes as full time
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4.
for (const [min, event] of gameEvents) {////using for of loop to iterate the half each event ocured
  const half = min <= 45 ? 'FIRST' : 'SECOND';/////code for selectin the half event occured 
  console.log(`[${half} HALF] ${min}: ${event}`);
}

///////////////////////////////////////
// Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);///wil log A
// console.log(plane[1]);///wil log 3
// console.log(plane[2]);///wil log 2
// console.log('B737'[0]);///wil log B

// console.log(airline.length);///wil log 16
// console.log('B737'.length);///wil log 4

// console.log(airline.indexOf('r'));///wil log 6, counts both empty space
// console.log(airline.lastIndexOf('r'));///wil log 10(the last r in airline variable)
// console.log(airline.indexOf('portugal'));///this wil be -1 cos lower case p for portugal cant be found
// console.log(airline.indexOf('Portugal')); ///this wil log 8

// ////THE SLICE METHOD ON STRINGS; the results of slice are sub strings
// console.log(airline.slice(4));///Starts from the forth leter. result is 'Air Portugal'
// console.log(airline.slice(4, 7));///result is Air. 4 is beginng while 7 is the end

// console.log(airline.slice(0, airline.indexOf(' ')));///result is AIR, ie where the first space started
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //result is PORTUGAL, + 1 is used to remove the space b/4 portugal that was added too


// console.log(airline.slice(-2));///result wilbe 'al' cos it wil stat extracting frm the end
// console.log(airline.slice(1, -1));///rsult wil be AP Air Portuga, ist and last letters re cut off


// ///EXAMPLE, Checking if airline customer got midle seat or others
// const checkMiddleSeat = function (seat) { ///the functn
//   // B and E are middle seats
//   const s = seat.slice(-1);//using slice to pick the last letter in ticket number
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');//if conditional statmnt
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));


///////////////////////////////////////
// Working With Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());///changes letters to lowercase
console.log(airline.toUpperCase());///changes letters to Uppercase

// EXAMPLE 2, Fix capitalization in airline customer name name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);////answer is 'jonas'
console.log(passengerLower[0].toUpperCase());////answer is 'J'
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);//// 'J' + onas
console.log(passengerCorrect); /// Jonas wil be loged

// EXAMPLE 3, Comparing Passenger emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();///converts to lowercase then trims it by removin spaces nd junks
console.log(normalizedEmail);
console.log(email === normalizedEmail);////result is 'true' cos they re now same

// replacing parts of strngs(eg pounds bill to dollar bil writing format)
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');////N/B write the one to be replacd b4 the replacmnt value
console.log(priceUS);//the result wil be 288.97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));///works, but only replaces the first instanc 
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); ///to replace all instances, we use a regular expresion like this / /. 'g' stands for global

// STRING METHD THAT RETURN BOOLEANS
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); ///returns 'true'
console.log(plane.includes('Boeing'));///returns 'false'
console.log(plane.startsWith('Airb'));///returns 'true'

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise for checking pasenger baggages
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();///impt to change to lower/uppercase to harmonize the data input/recievd

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////
// Working With Strings - Part 3

// SPLIT AND JOIN

console.log('a+very+nice+string'.split('+'));///divides the str along the + signs and forms an array with result
console.log('Jonas Schmedtmann'.split(' ')); ///divides the string into arrays along the ' ' space

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');///using the power of destructuring to produce first nd lastName split
// console.log(firstName, lastName);//result wil be Jonas Schmedtmann

// to add mr and change sawname to uppercase we use;
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); ///result is Mr jonas SCHETMANN


//
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];///an empty aray for the loop

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));///to change first leter to upercas nd add to the word without firt leter

    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));///Another methd using the REPLACE APPROACH
  }
  console.log(namesUpper.join(' ')); ///wil log Jessica Ann Smith Davis
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// PADDING A STRING; means adding a number of character to a string until it reaches desired lenght
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+'));///adds + character in the begining until total character in messgae reches 20
console.log(message.padStart(20, '+').padEnd(30, '+'));////adds + sign to the begining to complet 20 and in the end to complet 30
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));


///EXAMPLE OF PADDING WITH A REAL WORLD PRACTICE
const maskCreditCard = function (number) {
  const str = number + '';///converts a number to string. N/B number + string = string
  const last = str.slice(-4);///logs only the last 4 digits of str
  return last.padStart(str.length, '*');///pads last from start up to the full length of str with '*"
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// REPEAT METHD; Allows us to repeat same string multiple times
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));///this repeats/logs the message2 five times


///a functn dat repeats plane availabilty at airport
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);//logs the amt of plane in line with plane imag repeated to the numbers
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


///////////////////////////////////////
////CODING CHALLENGE #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/////SOLUTION TO CODING CHALLENGE
document.body.append(document.createElement('textarea'));////TO create text area on body/page
document.body.append(document.createElement('button'));////TO create body on body/page



document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;///picks the value entred in the text area nd stord in variable
  // console.log(text);
  const rows = text.split('\n');/// '\n' alows you to split elemnts along new lines
  console.log(rows);

  //   for (const row of rows) {
  //     const [first, second] = row.toLowerCase().trim().split('_');///converts entries to lowercase, removes spaces nd splits it along the "_"

  //     const output = `${first}${second.replace(
  //       second[0],
  //       second[0].toUpperCase()
  //     )}`;////prints first split + replaced first letter of second split
  //     console.log(output);///output is thus; eg) ' firstName"
  //   }

  // });

  ////TO PRODUCE THE GREEN CHECKBOX OUTPUT WE HAVE;

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');///converts entries to lowercase, removes spaces nd splits it along the "_"

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;////prints first split + replaced first letter of second split
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }

});

///////////////////////////////////////
// STRINGS Methods PRACTICE/EXAMPLE

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

///////TO Convert the const flights info to the pattern above

///// const getCode = str => str.slice(0, 3).toUpperCase();///an arow function that prevents repetion

for (const flight of flights.split('+')) {///to divide the info along the '+' lines
  //console.log(flight);
  //console.log(flight.split(';'));///splits info along (';')
  const [type, from, to, time] = flight.split(';');////to destucture the info into four variables
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')///replaces all _ with an empty space
    } ${from.slice(0, 3).toUpperCase()} ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h') ///replaces : with h
    })`.padStart(36);///N/B slice(0,3) alows us select ist three letters, padstart alows us to creat empty space for alignment
  console.log(output);

  //ALTERNATIVE CODE
  // )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);///use of arrow function that avoids reppetion

}








