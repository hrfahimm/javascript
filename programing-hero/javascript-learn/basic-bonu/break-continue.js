const products = [
    {name: 'samsung phone ', price: 73900},
    {name: 'samsung watch ', price: 8300},
    {name: 'readmi key ', price: 3700},
    {name: 'ximi phone ', price: 3600},
    {name: 'htc watch ', price: 7400},
    {name: 'iphone laptop ', price: 300},
    {name: 'samsung land phone ', price: 700},
];

// for (const product of products){
//     if(product.price < 1000){
//         break;
//     }
//     console.log(product);
// }

for(const product of products){
    if (product.price < 10000){
        continue
    }
    console.log(product);
}