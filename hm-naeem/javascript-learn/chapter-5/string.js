

// var ste = 'something'

// var str2 = String('sometinng')
// console.log(str2)


// var n = 10
// var str = n
// console.log(str)

// var n = 10
// var str = n + ''
// console.log(str)


// var n = 10
// var str = n.toString
// console.log(str)


// var n = 10
// var str = String(n)
// console.log(str)


///


/////escape natation 

// var str = 'this is a String'
// console.log(str)

// var str = 'this is a \'String\' '
// console.log(str)

// var str = 'this is a \nString'        //linr break
// console.log(str)

// var str = 'this is a \tString'        //tab /gap
// console.log(str)




////

////string cmparison


// var a = 'abc'
// var b = 'bcd'

// console.log(a==b)



/////



// var a = 'I am '
// var b = 'hr fahim'
// var c = a.concat('',b)
// console.log(c)


// var a = 'I am '
// var b = 'hr fahim'
// var c = a.concat('',b)
// var d = c.substr(8,3)
// console.log(d)






////////////string lenght 


// var str = 'some string'
// var str2 = str.charAt(12)
// console.log(typeof str2)



var str = 'some string'

var lenght = 0

while (true) {
    if (str.charAt(lenght) == '') {
        break
    } else {
        lenght++
    }
}


console.log(lenght)


console.log(str.length)
console.log('fahim'.length)