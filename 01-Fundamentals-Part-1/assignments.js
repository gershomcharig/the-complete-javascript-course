const country = "United Kingdom";
const continent = "Europe";
let population = 57;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;
const language = "English";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
// population++;
console.log(population);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
const avgCountryPopulation = 33;
console.log(population > avgCountryPopulation);
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  "M people speak " +
  language;
console.log(description);

const descriptionNew = `${country} is in ${continent}, and its ${population}M people speak ${language}.`;
console.log(descriptionNew);

if (population >= avgCountryPopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      avgCountryPopulation - population
    }M below average.`
  );
}

/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log(`${numNeighbours} borders!`);
} else {
  console.log("No borders.");
}
*/

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} doesn't meet your criteria.`);
}

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too!");
}

console.log(
  `${country}'s population is ${
    population >= avgCountryPopulation ? "above" : "below"
  } average.`
);
