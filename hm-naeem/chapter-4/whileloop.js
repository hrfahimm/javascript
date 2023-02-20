
// var i = 0

// while ( i < 10 ){
//     console.log('hr fahim')
//     i++
// }



var isrunning = true 

while(isrunning){
    var rand =Math.floor( Math.random()* 10 + 1 )
    if (rand == 9) {
        console.log( 'winner winner chicken dinner ' )
        isrunning = false
    } else {
        console.log( ' yOU HAVE got ' + rand  )
    }
}