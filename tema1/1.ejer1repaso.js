let numbers = [1, 5, 8, 40, 100, -3, 2.5, 3000];

let smallResults = [];
let bigResults = [];
let halfNumbers = numbers.length/2;
numbers.sort(function(a, b){return a-b});

for(let i=0; i< numbers.length; i++){
    if(i < halfNumbers){
        smallResults.push(numbers[i]);
    }else{
        bigResults.push(numbers[i]);
    }
};
console.log(`Pequeños: ${smallResults}`);
console.log(`Grandes: ${bigResults}`);
