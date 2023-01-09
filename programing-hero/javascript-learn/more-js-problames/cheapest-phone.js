const phones = [
    { name:'samsung s5', price:6500, camera:10, storage:32,},
    { name:'walton m32', price:4500, camera:80, storage:64,},
    { name:'shaomi m3', price:10200, camera:120, storage:112,},
    { name:'oppo n95', price:3000, camera:20, storage:50,},
    { name:'htc h82', price:73800, camera:30, storage:20,},

];

let cheapest = phones[0];
for(const phone of phones) {
    if(phone.price < cheapest.price){
        cheapest = phone;
        
    }
     
}

console.log(cheapest);