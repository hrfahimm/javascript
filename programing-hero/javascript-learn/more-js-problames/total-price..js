const carts = [
    {name:'laptop', price:4300,quantity:1},
    {name:'shirt', price:300,quantity:4},
    {name:'watch', price:400,quantity:2},
    {name:'tv', price:7800,quantity:1},
    {name:'phone', price:55500,quantity:1}
]


let totalPrice = 0;

// for(const product of products){
//     totalPrice += product.price;
// }

// console.log(totalPrice);

for(const cart of carts){
    totalPrice += cart.price * cartWGT.quantity;
}

console.log(totalPrice);
