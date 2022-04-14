let finalString = "";
for (let num = 1; num <= 300; num++) {
    let numString = num.toString();
    let justNum = numString.substring(numString.length-1, numString.length);
    let twoJustNum = numString.substring(numString.length-2, numString.length);

    if (twoJustNum === "15") {
        finalString += "fizzbuzz";
    }else if (justNum === "3") {
        finalString += "fizz";
    }else if (justNum === "5") {
        finalString += "buzz";
    }else {
        finalString += num.toString();
    }
    if (num !== 300) {
        finalString += ", ";
    }
}
console.log(finalString);