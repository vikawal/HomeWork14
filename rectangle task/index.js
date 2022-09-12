var userName = 'Vika Wal';
var userAge = 36;
var bool = true;

var Array1 = ['Vika Wal', 36,true];
var Array2 = [userName,userAge];
var colors2 = ['black', 'white', 'tabby'];

var Animal = {
    typeOfAnimal:'Dog',
    paws: 4,
    canMeow: false,
    canBark: true,
    colors: colors2,
    weight: '10kg',
    baby: {
        typeOfAnimal: 'Puppy',
        paws: 4,
        tail: 1,
        weight: '2kg',
    },
    owner: {
        name: userName,
    }
}

//alert (Animal.typeOfAnimal + ' is parent of ' + Animal.baby.typeOfAnimal);
//console.log(Animal);