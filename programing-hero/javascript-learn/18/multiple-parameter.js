function addTwoNumbers (number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 21;
var secondNumber = 59;
//addTwoNumbers( firstNumber, secondNumber)
var result = addTwoNumbers( secondNumber, firstNumber);

console.log('result value:', result);


function multiplyTwoNumber(num1, num2){
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumber(5, 100);
console.log('toctal after multyply', total);


function divaidedTwoNumber(dnum1, dnum2){
    var result = dnum1 / dnum2;
    return result;
}

var total = divaidedTwoNumber(20, 2);
console.log('total after divaded ', total);


function biyogTwoNumber(bnum1, bnum2){
    var result = bnum1 - bnum2;
    return result;
}

var total = biyogTwoNumber(20, 2);
console.log('total after biyog', total);