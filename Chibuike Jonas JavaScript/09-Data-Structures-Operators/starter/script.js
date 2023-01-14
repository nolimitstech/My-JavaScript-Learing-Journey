'use strict';

// Data needed for a later exercise
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  */
///////// Destructing of objects

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

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



/////to pass methds/elemnts to the order delivery object we use; 
restaurant.orderDelivery({
  time: '21: 30',
  address: '4 lakowe ibeju',
  mainIndex: 2,
  starterIndex: 2,
});

/////// THE SPREAD OPERATOR; wheneva we need the elemnts of an array indiv, we use the spread operator
const arr = [2, 5, 7];
const newarr = [1, 2, ...arr]; /// the spread operator to add new array elemnts to arr
console.log(newarr);
console.log(...newarr); /// using spread to retriev array elemnts individualy

///////using spread oprator to add element to the restaurant mainmenu array
const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);
console.log(restaurant.mainMenu); //////  'gnocci' nt added

///////using spread operator to create shalow copy of arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

/////////using spread operstor to create shallow copies of objects with new methds
const newRestaurant = {
  foundedIn: '1990', founder: 'Chibuike', ...restaurant,
}
console.log(newRestaurant);

////////////////// to make a copy of restaurant with a diff name
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'restarante';
console.log(restaurantCopy.name);
console.log(restaurant.name);



///////using spread operator to join the elemnts of two diff. arrays
const jointMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(jointMenu);

//////////using the spread operator to destructure a string
const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(letters);//// the result is letters of jonas will be seperated into single elemnts

/*
////creating a prompt for ordering pizza
const ingredients = [prompt('let\'s make pasta! ingredient 1?'), prompt('ingredient 2?'), prompt('ingredient 3?'),];
console.log(ingredients);

//// using spread operator to merge orderpasta and ingredients in a prompt
restaurant.orderPasta(...ingredients)
*/
////////THE REST PATTERN; this is the opp of the spread oprator
///examples
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others);
///another example
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//////////using the rest pattern to collect elements into a new object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

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



