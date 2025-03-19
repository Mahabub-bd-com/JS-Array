// sort
const persons = ['Murad', 'Milton', 'Dalton', 'Mukter', 'Saiful'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort

// Ascending Rules
const numbers = [4, 5, 2, 1, 6, 9, 8];

const numbers_asc = numbers.sort()
console.log(numbers_asc);

/**
 * Ascending -----> smaller to large:   [2, 3, 4, 5, 6, 7, 8]
 * Dedcending -----> larger to smaller: [9, 8, 7, 6, 5, 4, 3, 2, 1]
 */

// Dedcending Rules 
const number = [4, 5, 2, 1, 6, 9, 8, 10, 20];

const number_desc = number.sort((a, b) => b - a);
console.log(number_desc);

