for (let i=1; i<=100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');  
  }
  else if (i % 5 === 0) {
  console.log ('Buzz');
  }
  else if (i % 3 === 0) {
    console.log('Fizz'); ;  
  }
else {
  console.log(i);
}
}

//cool one (not mine), but at least I can understand what's going on
// for (let j = 0; j <=100;)
// console.log (
//   (++j % 15 ? (j % 3 ? (j % 5 ? '' : 'Buzz') : 'Fizz') : 'FizzBuzz') || j
// );