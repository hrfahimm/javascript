var computer = {
    price:29000,
    storage:'173gb',
    procasor:'intel i9',
    color: 'silber',
};

// console.log(computer);

// console.log(computer.procasor);

// var computerPeice = computer.price;
var priceProparty = 'price';

computer.price =  20000 ;
computer['price'] = 23000;
computer[priceProparty] = 19000 ;


console.log(computer);
// console.log(computer.price);


