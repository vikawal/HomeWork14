let rectangle = document.getElementById('figureId');
console.log (rectangle);

let anotherColor = prompt('Which color of the rectangle do you want? Write color name or color CSS code, example: red');
console.log(anotherColor);
rectangle.style.background = anotherColor;


let anotherWidth = prompt('Which width of the rectangle in px do you want? Write number and px, example: 100px');
console.log(anotherWidth);
rectangle.style.width = anotherWidth;


let anotherHeight = prompt('Which height of the rectangle in px do you want? Write number and px, example: 100px');
console.log(anotherHeight);
rectangle.style.height = anotherHeight;


let anotherBorder = prompt('Which border of rectangle do you want? Write CSS styles for border: dotted, dashed, solid, double, groove, inset, ridge etc');
console.log(anotherBorder);
rectangle.style.border = anotherBorder;

let borderColour = prompt ('Which border of rectangle do you want? Write color name or color CSS code, example: red' );
console.log(borderColour);
rectangle.style.borderColor = borderColour;

let borderWidth = prompt('Which width of the rectangle border in px do you want? Write number and px, example: 10px');
console.log (borderWidth);
rectangle.style.borderWidth = borderWidth;

let firstValue = prompt ('Enter first value of the sum', '');
let secondValue = prompt ('Enter second value of the sum', '');
// alert (+firstValue + +secondValue); we've read that this variants also works
let result = parseFloat (firstValue) + parseFloat (secondValue);
alert (result);