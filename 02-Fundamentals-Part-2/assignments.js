"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const finlandDescription = describeCountry("Finland", 6, "Helsinky");
const ukDescription = describeCountry("United Kingdom", 67, "London");
const italyDescription = describeCountry("Italy", 59, "London");
console.log(finlandDescription);
console.log(ukDescription);
console.log(italyDescription);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

//

const chinaPercentage1 = percentageOfWorld1(1441);
const finlandPercentage1 = percentageOfWorld1(6);
const italyPercentage1 = percentageOfWorld1(59);

console.log(
  `China has 1441 million people, so it's about ${chinaPercentage1}% of the world population`
);
console.log(
  `Finland has 6 million people, so it's about ${finlandPercentage1}% of the world population`
);
console.log(
  `Italy has 59 million people, so it's about ${italyPercentage1}% of the world population`
);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

//

const chinaPercentage2 = percentageOfWorld2(1441);
const finlandPercentage2 = percentageOfWorld2(6);
const italyPercentage2 = percentageOfWorld2(59);
console.log(
  `China has 1441 million people, so it's about ${chinaPercentage2}% of the world population`
);
console.log(
  `Finland has 6 million people, so it's about ${finlandPercentage2}% of the world population`
);
console.log(
  `Italy has 59 million people, so it's about ${italyPercentage2}% of the world population`
);

//

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const chinaPercentage3 = percentageOfWorld3(1441);
const finlandPercentage3 = percentageOfWorld3(6);
const italyPercentage3 = percentageOfWorld3(59);
console.log(
  `China has 1441 million people, so it's about ${chinaPercentage3}% of the world population`
);
console.log(
  `Finland has 6 million people, so it's about ${finlandPercentage3}% of the world population`
);
console.log(
  `Italy has 59 million people, so it's about ${italyPercentage3}% of the world population`
);

//

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("Finland", 6));
console.log(describePopulation("Italy", 59));

//

const populations = [59, 67, 1400, 5];

populations.length === 4
  ? console.log("The array HAS 4 elements")
  : console.log("The array HAS NOT 4 elements");

const percentages = [
  `${percentageOfWorld1(populations[0])}%`,
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

//

const neighbours = ["France", "Switzerland", "Austria", "Slovenia"];

neighbours.push("Utopia");
neighbours.pop();

!neighbours.includes("Germany")
  ? console.log("Not central European")
  : console.log("Central European");

neighbours[neighbours.indexOf("France")] = "Republic of France";
console.log(neighbours);

//

const myCountry = {
  country: "Italy",
  capital: "Rome",
  language: "italian",
  population: 59,
  neighbours: ["France", "Switzerland", "Austria", "Slovenia"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  // checkIsland: function () {
  //   // return this.neighbours.length === 0 ? console.log("Yes") : console.log("No"): // WRONG
  //   return (this.isIsland = this.neighbours.length === 0 ? true : false);
  // },

  checkIsland: function () {
    this.isIsland = Boolean(this.neighbours.lenght);
  },
};

//

myCountry.population = myCountry.population + 2;
myCountry["population"] = myCountry["population"] - 2;

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

//

console.log(myCountry.describe());
myCountry.checkIsland(); // just runs the method
console.log(myCountry.isIsland);

//

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting.`);
}

//

// const populations = [59, 67, 1400, 5];

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

//

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let topArray = 0; topArray < listOfNeighbours.length; topArray++) {
  for (
    let innerArray = 0;
    innerArray < listOfNeighbours[topArray].length;
    innerArray++
  ) {
    console.log(listOfNeighbours[topArray][innerArray]);
  }
}

//

const percentages3 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);

//
