//var userName = 'Vika Wal';
//var userAge = 36;
//var bool = true;

//var Array1 = ['Vika Wal', 36,true];
//var Array2 = [userName,userAge];
//var colors2 = ['black', 'white', 'tabby'];

//var Animal = {
    //typeOfAnimal:'Dog',
    //paws: 4,
    //canMeow: false,
    //canBark: true,
    //colors: colors2,
    //weight: '10kg',
    //baby: {
        //typeOfAnimal: 'Puppy',
        //paws: 4,
        //tail: 1,
        //weight: '2kg',
    //},
   // owner: {
       // name: userName,
   // }
//}

//alert (Animal.typeOfAnimal + ' is parent of ' + Animal.baby.typeOfAnimal);
//console.log(Animal);

//task 2 variant 1
//let a = prompt ('Enter first value (A)', '');
//let b = prompt ('Enter second value (B)', '');
//let c = prompt ('Enter third value (C)', '');
//let message1 = (+a > +b && +a > +c) ? 'Biggest value is A':
//(+b > +a && +b > +c) ? 'Biggest value is B':
//(+c > +a && +c > +b) ? 'Biggest value is C':
//(+a == +b && +b == +c)? 'Values are equal':
//(+a == +b && +a > +c)? 'Biggest values are A and B, they are equal':
//(+a == +b && +a < +c)? 'Biggest value is C, values A and B are equal':
//(+a == +c && +a > +b)? 'Biggest values are A and C, they are equal':
//(+a == +c && +a < +b)? 'Biggest value is B, values A and C are equal':
//(+b == +c && +b > +a)? 'Biggest values are B and C, they are equal':
//(+b == +c && +b < +a)? 'Biggest value is A, values B and C are equal':
//'Mistake';
//alert (message1);

//task 2 variant 2
//let a = prompt ('Enter first value (A)', '');
//let b = prompt ('Enter second value (B)', '');
//let c = prompt ('Enter third value (C)', '');
//if (+a > +b && +a > +c) {
 //message1 = 'Biggest value is A';
 //}
//else if (+b > +a && +b > +c) {
//message1 = 'Biggest value is B';
//}
//else if (+c > +a && +c > +b) {
    //message1 = 'Biggest value is C';
//}
//else if (+a == +b && +b == +c) {
   // message1 = 'Values are equal';
//}
//else if (+a == +b && +a > +c) {
    //message1 = 'Biggest values are A and B, they are equal';
//}
//else if (+a == +b && +a < +c) {
 //   message1 = 'Biggest value is C, values A and B are equal';
//}
//else if (+a == +c && +a > +b) {
    //message1 = 'Biggest values are A and C, they are equal';
//}
//else if (+a == +c && +a < +b) {
 //   message1 = 'Biggest value is B, values A and C are equal';
//}
//else if  (+b == +c && +b > +a) {
 //  message1 = 'Biggest values are B and C, they are equal'; 
//}
//else if (+b == +c && +b < +a) {
//message1 = 'Biggest value is A, values B and C are equal';
//}
//else {
 //  message1 = 'Mistake';
//}
//alert (message1);

//Task 2 variant 3
//let a = prompt ('Enter first value (A)', '');
//let b = prompt ('Enter second value (B)', '');
//let c = prompt ('Enter third value (C)', '');
//let result = Math.max(+a, +b, +c);
//alert (result);