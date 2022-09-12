let mark;
function count () {
let value1 = document.getElementById('Value1').value;
let value2 = document.getElementById('Value2').value;
let result;
switch (mark) {
    case "+":
        result = parseFloat(value1)+parseFloat(value2);
        break;
    case "-":
        result = parseFloat(value1)-parseFloat(value2);
        break;
    case "*":
        result = parseFloat(value1)*parseFloat(value2);
        break;
    case "/":
        if (value2 !=0) {
            result = parseFloat(value1)/parseFloat(value2);
        } 
        else {
            result = "You cannot devide on zero";
        }
        break;
}
document.getElementById("result").innerHTML = result;
}