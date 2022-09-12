function FizzBuzz(i)
{
  if (i % 3 === 0 && i % 5 === 0) {
    return true;  
  }
   else {
    return false;
  }
}
function Fizz (i)
 {
  if (i % 3 === 0) {
    return true;  
  }
   else {
    return false;
  }
}

function Buzz (i)
 {
  if (i % 5 === 0) {
    return true;  
  }
   else {
    return false;
  }
}
export function FizzBuzzGame (i1) {
let i = parseFloat(i1);
 
  if (FizzBuzz(i)) {
    return "FizzBuzz - because number multiples of both 3 and 5";
  } else if (Fizz(i)) {
    return "Fizz - because multiples of 3";
  } else if (Buzz(i)) {
    return "Buzz - because multiples of 5";
  } else {
    return "Usual number"; 
  }
}


 
