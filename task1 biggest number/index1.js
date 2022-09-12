//Task 1 variant 1
//let numberOfMonth = prompt ('Write number of the month to see the season', '');
//let message = (numberOfMonth==12 || numberOfMonth==1 || numberOfMonth==2) ? 'It is WINTER':
//(numberOfMonth > 2 && numberOfMonth <6) ? 'It is SPRING':
//(numberOfMonth >= 6 && numberOfMonth <= 8) ? 'It is SUMMER':
//(numberOfMonth >=9 && numberOfMonth <= 11) ? 'It is AUTUMN':
 //'Mistake';

//alert (message);

//Task 1 variant 2
let numberOfMonth = prompt ('Write number of the month to see the season', '');
 if (numberOfMonth==12 || numberOfMonth==1 || numberOfMonth==2) {
    message = 'It is WINTER';
}
  else if (numberOfMonth > 2 && numberOfMonth <6) {
    message = 'It is SPRING';  
}
  else if (numberOfMonth >= 6 && numberOfMonth <= 8) {
    message = 'It is SUMMER';   
}
   else if (numberOfMonth >=9 && numberOfMonth <= 11) {
    message = 'It is AUTUMN';  
}
   else {
    message = 'Mistake';
}
 alert (message);