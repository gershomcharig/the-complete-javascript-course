// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Coding challenge
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
PROBLEMS
- How to output a string for each value of an array?
- How to output an increasing number for each value of an array?
- How to merge an indefinite amount of strings into one?
TASKS
- Create a cycle that, for each value of an array, generates a piece of string that displays the value itself and its index position +1.
    - Each string should probably be a variable.
- Create a cycle that, for each value of an array, concatenates the generated strings into a single one.
    - The final string should be a variable that equals to the concatenations of the other variables generated.
    - string.concat(string1, string2, ..., stringX) // https://www.w3schools.com/jsref/jsref_concat_string.asp
- Instead of a cycle, I could use forEach(), which calls a function for each element in an array and also simply returns the current value of the array and its position without having to calculate it. https://www.w3schools.com/jsref/jsref_foreach.asp

OUTPUT
console.log(`... ${arr[0]}°C in ${arr[0].index + 1} days ... ${arr[1]}°C in ${arr[1].index + 1} days ... ${arr[n]}°C in ${arr[n].index + 1} days ... )
*/

// TEST 1 - Try with just one value (it works)
// const printForecast = function (arr) {
//   console.log(`... ${arr[0]}°C in ${arr.indexOf(arr[0]) + 1} days ...`);
// };
// printForecast([3]);

const temperatures = [17, 21, 23];

// MY SOLUTION WITH forEach

let forecast = "...";

temperatures.forEach(printForecast);

function printForecast(currentValue, index) {
  forecast += ` ${currentValue}°C in ${index + 1} days ...`;
}
console.log(forecast);

// Course solution with loops

let forecast2 = "...";

function printForecast2(arr) {
  for (let i = 0; i < arr.length; i++) {
    forecast2 += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(forecast2);
}

printForecast2(temperatures);
