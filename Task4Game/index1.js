//Task 2

//Rewrite code using arrow function

//const plantNeedsWater = function(day) {
// if (day === 'Wednesday') {
 //  return true;
 //} else {
  // return false;
// }
//};
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
   let day = "Wednesday";
   console.log(plantNeedsWater(day));