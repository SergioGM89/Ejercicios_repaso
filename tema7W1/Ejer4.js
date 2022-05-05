const asyncRequest = require(`./asyncRequest`);

let divisible3 = num => (num % 3 === 0);

function fizz(num) {
  let randomDelay = Math.round(Math.random() * 1000) + 100;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (num.toString().includes("3") || divisible3(num)) {
        return resolve(true);
      }
      return resolve(false);
    }, randomDelay);
  });
}

const AMOUNT = 110;
let finalArray = [];

for (let num = 1; num <= AMOUNT; num++) {
  fizz(num)
  .then((boolean) => { 
    if (boolean) { 
      finalArray[num] = "fizz";
    } else { 
      finalArray[num] = num;
    } 
    orderResources(); 
  });
}

function orderResources() {
  for (let i = 1; i < finalArray.length; i++) {
    if (finalArray[i] !== undefined) {
      printResource(i);
    } else {
      return;
    }
  }
}

function printResource(n) {
  if (!isPrinted(finalArray[n])) {
    console.log(finalArray[n]);
    finalArray[n] = "printed";
  }
}

function isPrinted(resource) {
  return resource === "printed";
}