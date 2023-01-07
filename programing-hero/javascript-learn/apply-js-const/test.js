// function cToF (c){
//     var f = (c * (9/5)+32);
//     return f;
// }

// var myC = 102;
// var f = cToF(myC);
// console.log('my c in f',f)


// function FToc (f){
//     var c = ((f - 32) * 5/9);
//     return c;
// }

// var myf = 123;
// var c = FToc(myf);
// console.log('my f in f',c)



var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}


