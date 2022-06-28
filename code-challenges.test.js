// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("personCapitalized", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  expect(personCapitalized(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// FAIL  ./code-challenges.test.js
// personCapitalized
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// b) Create the function that makes the test pass.

// PSEUDOCODE
// Declare a function named personCapitalized
// Assign array as parameter
// Use a method to map over the array
// Create a variable named capLetter to capitalize the first name
// Split name into an array
// Map over the array to capitalize index of first letter using toUpperCase
// Use slice to add the rest of the name to the capitalized letter and join back into string
// Use string interpolation to return sentence 

const personCapitalized = (array) => {
  return array.map(value => {
    let capLetter = value.name.split(" ").map(letter => letter[0].toUpperCase() + letter.slice(1)).join(" ")
    return `${capLetter} is ${value.occupation}.` 
  })
}

// PASS  ./code-challenges.test.js
// personCapitalized

// ---provided by Full Stacker Valerie

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe ("finalArray", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(finalArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(finalArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// personCapitalized
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// finalArray
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// b) Create the function that makes the test pass.
// PSEUDOCODE
// Create a function named finalArray that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// first you have to filter through the array and return only values with typof numbers since it is a mixed array with strings and boolean.
// iterate through the array of numbers and divide each index in the array by 3 and return only the remainders.

// const finalArray = (array) => {
//   let numArray = array.filter(value => typeof value === "number")
//   return numArray
// }
// ---> saw that received numbers

const finalArray = (array) => {
  let numArray = array.filter(value => typeof value === "number")
  for(i = 0; i < numArray.length; i++) {
    numArray[i] = numArray[i] % 3
  }
  return numArray
}

// PASS  ./code-challenges.test.js
// personCapitalized
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// finalArray
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ---provided by Full Stacker Jorge

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.
// PSEUDOCODE ---provided by Full Stacker Don

// // First declare function cubeSum that has a parameter of array
// const cubeSum = (array) => {
//   // First want to return an array with each element cubed. Then we want to sum them all up.
//   return array.map(value => value ** 3).reduce((sum, current)=> sum += current, 0)
// }
