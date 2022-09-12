const numbers = [0, 1, 5, 7, 9, 27, 31, 45, 73];

let result = numbers.reduce((sum, current) => sum+current, 0);

console.log(result);