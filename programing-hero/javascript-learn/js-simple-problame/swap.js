var fast = 5;
var second = 7;

console.log(fast, second);

var temp = fast ;
 fast = second;
 second = temp ;

 console.log(fast, second);



[fast, second] = [second, fast];
console.log(fast, second);

