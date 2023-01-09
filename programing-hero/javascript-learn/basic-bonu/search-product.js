const products = [
    {name: 'samsung phone ', price: 73900},
    {name: 'samsung watch ', price: 8300},
    {name: 'readmi key ', price: 3700},
    {name: 'ximi phone ', price: 3600},
    {name: 'htc watch ', price: 7400},
    {name: 'iphone laptop ', price: 300},
    {name: 'samsung land phone ', price: 4700},
]
function searchProducts(products, searchText) {
    const matched = [];
    for(const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1){
            matched.push(product);
        }
    }
    return matched;
}

const matched = searchProducts(products, 'phone');
console.log(matched);