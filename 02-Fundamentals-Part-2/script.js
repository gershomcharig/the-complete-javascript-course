"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Mispelt on purpose to show the use of strict mode
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";
const private = 123;
const if = 123
*/

/*
function logger() {
  console.log("My name is Gershom.");
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);
*/

/*
// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirementAge = 67 - age;
  // return retirementAge;
  return `${firstName} retires in ${retirementAge} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1988, "Gershom"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirementAge = 65 - age;

  if (retirementAge > 0) {
    console.log(`${firstName} retires in ${retirementAge} years`);
    return retirementAge;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }

  // return `${firstName} retires in ${retirementAge} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

function ageCalculator(currentYear, birthYear) {
  return currentYear - birthYear;
}

console.log(ageCalculator(2022, 1988));
*/

/*
// Coding challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgKoalas = calcAverage(44, 23, 71);
const avgDolphins = calcAverage(85, 54, 41);

// console.log(avgDolphins);
// console.log(avgDolphins * 2);

// console.log(avgKoalas);
// console.log(avgKoalas * 2);

const checkWinner = function (avgKoalas, avgDolphins) {
  if (avgKoalas >= avgDolphins * 2) {
    return `🐨 Koalas win! Final score is 🐨 ${avgKoalas} vs. 🐬 ${avgDolphins}.`;
  } else if (avgDolphins >= avgKoalas * 2) {
    return `🐬 Dolphins win! Final score is 🐨 ${avgKoalas} vs. 🐬 ${avgDolphins}.`;
  } else {
    return `❌ No winners this time! Final score is 🐨 ${avgKoalas} vs. 🐬 ${avgDolphins}.`;
  }
};

console.log(checkWinner(avgKoalas, avgDolphins));
*/

/*
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020); // This calls an Array function, but it's not very used.

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jane";
console.log(friends);

const firstName = "Gershom";
const gershom = [firstName, "Charig", 2022 - 1988, "Designer", friends];
console.log(gershom);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/

/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

friends.push(23);
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

/*
// Coding challenge #2

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

console.log(tip, total);
*/

/*
const gershom = {
  firstName: "Gershom",
  lastName: "Charig",
  age: 2037 - 1988,
  job: "designer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(gershom.lastName);

const nameKey = "Name";
console.log(gershom["first" + nameKey]);
console.log(gershom["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Gershom? Choose between firstName, lastName, age, job and friends"
// );

// if (gershom[interestedIn]) {
//   console.log(gershom[interestedIn]);
// } else {
//   console.log(
//     "You typed the wrong word. Choose between firstName, lastName, age, job and friends"
//   );
// }

gershom.location = "London";
gershom["twitter"] = "@gershomcharig";

console.log(gershom);

// Mini-challenge
console.log(
  `${gershom.firstName} has ${gershom.friends.length} friends, and his best friend is called ${gershom.friends[0]}.`
);
*/

/*
// const gershom = {
//   firstName: "Gershom",
//   lastName: "Charig",
//   birthYear: 1988,
//   job: "designer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicence: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };

// // console.log(gershom.calcAge(1988));
// // console.log(gershom["calcAge"](1988)); // Same as above but with bracket notation

// console.log(gershom.calcAge());

// console.log(gershom.age);

// Mini challenge

const gershom = {
  firstName: "Gershom",
  lastName: "Charig",
  birthYear: 1988,
  job: "designer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // getSummary: function () {
  //   if (this.hasDriversLicence) {
  //     return `${this.firstName} is a ${this.calcAge()}-old ${
  //       this.job
  //     }, and he has a driver's licence.`;
  //   } else {
  //     return `${this.firstName} is a ${this.calcAge()}-old ${
  //       this.job
  //     }, and he has no driver's licence.`;
  //   }
  // },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-old ${
      this.job
    }, and he has ${this.hasDriversLicence ? "a" : "no"} driver's licence.`;
  },
};

console.log(gershom.getSummary());
*/

/*
// Coding challenge #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}).`
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}).`
);
*/

/*
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/

/*
const gershom = [
  "Gershom",
  "Charig",
  2037 - 1988,
  "designer",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < gershom.length; i++) {
  console.log(gershom[i], typeof gershom[i]);

  // Filling an empty array with types from another array

  // types[i] = typeof gershom[i]; // same as below
  types.push(typeof gershom[i]);
}

console.log(types);

//

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break

console.log("---ONLY STRINGS---");
for (let i = 0; i < gershom.length; i++) {
  if (typeof gershom[i] !== "string") continue;
  console.log(gershom[i], typeof gershom[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < gershom.length; i++) {
  if (typeof gershom[i] === "number") break;
  console.log(gershom[i], typeof gershom[i]);
}
*/

/*
const gershom = [
  "Gershom",
  "Charig",
  2037 - 1988,
  "designer",
  ["Michael", "Peter", "Steven"],
];

for (let i = gershom.length - 1; i >= 0; i--) {
  console.log(i, gershom[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
  }
}
*/

/*
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // This avoids the browser entering infinite loop and crashing
  if (dice === 6) console.log("You rolled a 6!");
}
*/

// Coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bills) =>
  bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

//

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Same as writing sum = sum + arr[i]
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 6, 4]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
