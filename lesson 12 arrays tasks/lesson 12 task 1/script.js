//method 1
const arr =[0, 1, 2];
function increaseNumbersByOne(numbers) {
for (let i = 0; i < numbers.length; i++) {
  numbers[i]++;
}
  return numbers;
} 
const increasedArray = increaseNumbersByOne(arr);
console.log (increasedArray);

//method 2 experiment
//let arr3 = [0,1,2,3,4,5,];
let arr2= [10,20,30,40,50];
arr2.plus = function increaseNumbersByX (x) {
  return this.map(i => i + x);
}
console.log(arr2.plus(1));

//method 3 with MAP
const arr4 = [0, 1, 2, 3];
const increasedArrayBy2 = arr4.map(function increaseNumbersByTwo(numbers, index, arr) {
  return (numbers+2);
});
console.log(increasedArrayBy2);

//method 4 forEach (one by one) - not as in task, but training
const arr5 = [ 1, 2, 3, 4];
const newArr5 = arr5.forEach(function(items) {
	items += 10;
	console.log(items);
});