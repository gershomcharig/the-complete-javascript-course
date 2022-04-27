/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let PI = 3.1245;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);
*/

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)

console.log(typeof null)*/

/*let age = 30
age = 31

const birthYear = 1991
// birthYear = 1990
// const job;

var job = 'programmer'
job = 'teacher'

lastName = "Charig"
console.log(lastName)*/

/*// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2 ** 3 means to the power of 3 = 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

//  Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 25 * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
// Coding challenge #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2027;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving licence 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years ❌`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
// Coding challenge #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

/*
// Type concersion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old."); // 23 is automatically converted to string.
console.log("23" - "10" - 3); // 10: 23 and 10 are automatically converted to numbers.
console.log("23" + "10" + 3); // 23103: 3 automatically converted to string.
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

let n = "1" + 1; // '11'
n = n - 1; // '11' - 1 = 10
console.log(n);
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 0;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job`);
}

let height = 0;
if (height) {
  console.log("Variable defined");
} else {
  console.log("Variable UNDEFINED");
}
*/
/*
const age = 18;
if (age === 18) console.log("You just became an adult! (strict)");
if (age == 18) console.log("You just became an adult! (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 22) {
  console.log("Yay! 22 is the best!");
} else if (favourite === 7) {
  console.log("7 is pretty cool too.");
} else if (favourite === 9) {
  console.log("9 is ok.");
} else {
  console.log("This is not 22, nor 7, nor 9.");
}

if (favourite !== 22) console.log("Why not 22?");
*/

/*
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log("Sarah can drive!");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = false; // C

console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah can drive!");
} else {
  console.log("Someone else should drive.");
}
*/

/*
// Coding challenge #3

// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 91 + 110) / 3;

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log("Dolphins win!");
// } else if (avgScoreDolphins < avgScoreKoalas) {
//   console.log("Koalas win!");
// } else {
//   console.log("It's a draw!!!");
// }

// BONUS 1
// const avgScoreDolphins = (97 + 112 + 101) / 3; // 103
// const avgScoreKoalas = (109 + 95 + 123) / 3; // 109

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Dolphins win!");
// } else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
//   console.log("Koalas win!");
// } else if (
//   avgScoreDolphins === avgScoreKoalas &&
//   avgScoreDolphins >= 100 &&
//   avgScoreKoalas >= 100
// ) {
//   console.log("It's a draw!!!");
// } else {
//   console.log("Nobody wins.");
// }

// BONUS 2
const avgScoreDolphins = (97 + 112 + 101) / 3; // 103
const avgScoreKoalas = (109 + 95 + 106) / 3; // 109

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log("Dolphins win!");
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
  console.log("Koalas win!");
} else if (
  avgScoreDolphins === avgScoreKoalas &&
  avgScoreDolphins >= 100 &&
  avgScoreKoalas >= 100
) {
  console.log("It's a draw!!!");
} else {
  console.log("Nobody wins.");
}
*/

/*
const day = "Monday";

switch (day) {
  case "Monday": // day === Monday
    console.log("Plan the week.");
    console.log("Do the groceries.");
    break;
  case "Tuesday":
    console.log("Bring out the garbage.");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day.");
}

// This 👆 is the same as writing this 👇

if (day === "Monday") {
  console.log("Plan the week.");
  console.log("Do the groceries.");
} else if (day === "Tuesday") {
  console.log("Bring out the garbage.");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day.");
}
*/

/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine.")
  : console.log("I like to drink water.");

const drink = age >= 18 ? "wine" : "water"; // You can use a ternary to define the value of a variable!
console.log(drink);

let drink2; // same as ternary above, just longer
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I linke to drink ${age >= 18 ? "wine" : "water"}`); // Since the output of the ternary is a value, you can use it directly inside a string!!!
*/

// Coding challenge #4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // 15% == 15/100 == 0.15, 20% == 20/100 == 0.2

console.log(
  `The bill was £${bill}, the tip was £${tip}%, for a total of £${bill + tip}`
);
