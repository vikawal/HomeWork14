// Tasks:
// 1.
// 2. 
// 3.Replace repeating loops with a function. Function should: 
//   1. Accept any array
//   2. Iterate through array
//   3. On each iteration create a <li> and put element of array      inside as text
//   4. Attach <li> to the list


// Declaring arrays
const fruits = ['Apples', 'Tangerines', 'Grapes', 'Pears'];
const dairy = ['Cheese', 'Milk', 'Yoghurt'];
const vegetables = ['Tomatoes', 'Cucumbers', 'Carrots'];
const drinks = ['Juice', 'Water', 'Vodka', 'Cola'];

const groceries = [...fruits, ...dairy, ...vegetables, ...drinks]; //making new big array from 4 old small arrays with 'spread'
//console.log (groceries); //OR with 'concat'-->

const groceries1 = [].concat(fruits, dairy, vegetables, drinks);
//console.log (groceries1);

// Declaring function which accepts text and outputs <li> html element
function createListItem(text) {
  // Creating <li> element
  const listItem = document.createElement('li');
  // Creating text node
  const textNode = document.createTextNode(text);
  // Putting text node inside of <li> HTML element
  listItem.appendChild(textNode);
  // Returning listItem
  return listItem;
}

// Getting <ul> element from HTML to which we will attach list elements later
const list = document.getElementById('shopping-list');

// adding drinks to the list ---->
//for(let i = 0; i < drinks.length; i++) {
//  const drink = createListItem(drinks[i]);
//  list.appendChild(drink);
//}


//iterate, create <li> and add it in <ul> for newArray ----->
//function addListItem(groceries) {
//for (let i = 0; i < groceries.length; i++) {
 //const item = createListItem(groceries[i]);
  //list.appendChild(item);
//}
 //} 
//const newArr = addListItem (groceries);
//console.log (newArr);

//any array function

function newLiForUl(anyArr) {
    for (oneListItem of anyArr) {
        let item = createListItem(oneListItem);
        list.appendChild(item);
    }
}
newLiForUl(groceries);