const availableCoins = [0.10, 0.5, 1, 2, 5];
let change = 9.50;
let result = "";
let cont = 0;
let maxCoin = availableCoins.length-1;

while(change !== 0){
    if(change/availableCoins[maxCoin-cont]>=1){
        let amount = Math.trunc(change/availableCoins[maxCoin-cont]);
        result = `${availableCoins[maxCoin-cont]}x${amount} ` + result;
        change -= (availableCoins[maxCoin-cont]*amount);
    }
    cont++;
}

console.log(`Result: ${result}`);