function bringSingara(taka){
    console.log('singarar jonno dica', taka);
    console.log('mama singara dan ');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 250 ;
var singara = bringSingara(money);

console.log('ai nan singara', singara);