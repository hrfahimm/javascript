const greetings = ['hello', 'how', 'are','you']

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        console.log(letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;

    }
}

const reverse = reverseString(greetings);
console.log(reverse);