const names = ['abul', 'babul', 'sabul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names){
    const unique = [];
    // for(let i = 0; i < names.lenght; i++){
    //     const element = names[i];
    //     // console.log(element);
    // }
    for (const element of names) {
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);