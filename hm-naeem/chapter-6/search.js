

var arr = [4, 7, 2, 3, 6, 8, 9, ]

var find = 9 

var isFound = false

for (var i = 0; i < arr.length ; i++){
    if (arr[i] === find ) {
        console.log('data found at index' +  i)
        isFound = true
        break ;
    } 
}


if (!isFound){
    console.log('data not found')
}

