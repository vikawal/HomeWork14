const numbers = [0, 1, 5, 7, 9, 27, 31, 45, 73];
const minimalNumber = 10;

function filterByMinimalNumber(value) {
  return value > minimalNumber;
}

const filteredArray = numbers.filter(filterByMinimalNumber);
console.log(filteredArray);