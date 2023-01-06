/*
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1 *
6! = 6 * 5 * 4 * 3 * 2 * 1
7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
*/


// for(var i = 1; i<=7; i++){
//     console.log(i);
//     var factorial = 1;
//     factorial = factorial * i;
// // } 


// function getFactorial(number){
//     let factorial = 1 ;
//     for(let i = 1 ; i <= number ;i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// m
// var firstFactorial = getFactorial(7);
// console.log('factorial of 7 is', firstFactorial);

// var secondFactorial = getFactorial(9);
// console.log('factorial of 9 is', secondFactorial);


function getFactorial(number){
    let factorial = 1;
    let i = number ;
    while( i >= 1){
        factorial = factorial * i ;
        i--;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);