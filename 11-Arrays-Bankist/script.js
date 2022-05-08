"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovement = function (movements) {
  // Create a function to display the movements

  containerMovements.innerHTML = "";
  // Manipulates the HTML code to empty the initial content of the div.

  movements.forEach(function (mov, i) {
    // For each element of the "movements" array

    const type = mov > 0 ? "deposit" : "withdrawal";
    // A variable to determine whether the movement is a deposit or a withdrawal. This is needed in the next block.

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    // The HTML code that we need to add to the DOM for each element of the array, saved into a variable

    containerMovements.insertAdjacentHTML("afterbegin", html);
    // This adds the HTML specified before, immediately after the beginning of the ".movements" block.
  });
};
displayMovement(account1.movements);
// Calls the above function for account1

const calcPrintBalance = function (movements) {
  const balance = movements.reduce(
    (accumulator, movement) => accumulator + movement,
    0
  );
  labelBalance.textContent = `${balance} EUR`;
};
calcPrintBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const expenses = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${expenses}€`;
  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

// const user = "Steven Thomas Williams"; // We want to call this user "stw"
// const username = user
//   .toLowerCase()
//   // "steven thomas williams"
//   .split(" ")
//   // ["steven", "thomas", "williams"]
//   .map((name) => name[0])
//   // ["s", "t", "w"]
//   .join("");
//   // "stw"
// // Turns the string to lower case, then splits it in 3 different words using the space character. Then we use map method to return a new array with only the first letter of each word (arrow function). Then join to put it together into one string.

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
  // For each account in the "accounts" array we take the "owner" property, turn it into a username which is the first letters of the name in lowercase, then store it back into the object as a new "username" property.
};

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ["a", "b", "c", "d", "f"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "f"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2); // Similar to CONCAT

// JOIN
console.log(letters.join(" - "));

//

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// Getting the last element
console.log(arr3[arr3.length - 1]); // The old way of returning the last element of an array
console.log(arr3.slice(-1)[0]); // Returns the last element of an array
console.log(arr3.at(-1)); // Returns the last element of an array
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movements > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
}
// Classic for ... of loop

console.log("--- forEach ---");
movements.forEach(function (movement, i, arr) {
  if (movements > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
});
// Using "forEach", this is how it runs:
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// etc...
*/
/*
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (element, index, array) {
  console.log(`${index}: ${element}`);
});

// Set

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (element, index, array) {
  console.log(`${index}: ${element}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (juliaDogs, kateDogs) {
  const dogs = juliaDogs.slice(1, -2).concat(kateDogs);
  dogs.forEach(function (age, i) {
    age < 3
      ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
      : console.log(`Dog number ${i + 1} is an adult and is ${age} years old.`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
/*
const eurToUsd = 1.1;

const movementsUsd = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsDescriptions = movements.map(
  (movement, i) =>
    `Movement ${i + 1}: you ${
      movement > 0 ? "deposited" : "withdrew"
    } ${Math.abs(movement)}`
);
*/

/*
const deposits = movements.filter((mov) => mov > 0);
const withdrawals = movements.filter((mov) => mov < 0);
// Accumulator -> snowball effect
const balance = movements.reduce(function (accumulator, element, index, array) {
  return accumulator + element;
}, 0);

console.log(deposits, withdrawals, balance);

// Maximum value of movements

const max = movements.reduce((accumulator, movement) => {
  if (accumulator > movement) {
    return accumulator;
  } else {
    return movement;
  }
}, movements[0]);

console.log(max);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((humanAge) => humanAge >= 18);
  return humanAges.reduce((a, b) => a + b, 0) / humanAges.length;
};

console.log(
  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]),
  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
);
*/

// --- Chaining methods ---
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// --- Creating dates ---

// Create a date
const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));
// console.log(new Date(account1.movementDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(0)); // This is unix 0 date
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Create a date that is 3 days after the 0 date. It reads "3 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds". The operation returns "259200000", which is called timestamp

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // day of the month
console.log(future.getDay()); // day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(588207600000)); // Mon Aug 22 1988 00:00:00 GMT+0100 (British Summer Time)

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// const birthDate = new Date(1988, 7, 22);

// console.log(birthDate); // Mon Aug 22 1988 00:00:00 GMT+0100 (British Summer Time)
// console.log(birthDate.getFullYear()); // 1988
// console.log(birthDate.getMonth()); // 7 (zero-based)
// console.log(birthDate.getDate()); // 22 (day of the month)
// console.log(birthDate.getDay()); // 1 (day of the week)
// console.log(birthDate.getHours()); // 0
// console.log(birthDate.getMinutes()); // 0
// console.log(birthDate.getSeconds()); // 0
// console.log(birthDate.toISOString()); // 1988-08-21T23:00:00.000Z
// console.log(birthDate.getTime()); // 588207600000

// --- Operations with dates ---

console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);

// --- Internationalising dates ---
