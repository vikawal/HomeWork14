import { FizzBuzzGame } from './index.js';

const result = FizzBuzzGame(30);
const FizzBuzzOf15 = result === "FizzBuzz - because number multiples of both 3 and 5";
console.log(FizzBuzzOf15);

const result2 = FizzBuzzGame(6);
const FizzOf3 = result2 === "Fizz - because multiples of 3";
console.log(FizzOf3);

const result3 = FizzBuzzGame(10);
const BuzzOf5 = result3 === "Buzz - because multiples of 5";
console.log(BuzzOf5);

const result4 = FizzBuzzGame(4);
const justNumber2 = result4 === "Usual number";
console.log(justNumber2);

