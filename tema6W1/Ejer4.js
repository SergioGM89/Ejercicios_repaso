/*
No es lo que se pedía, pégale un repaso

let foo = doublePipe(double, add3, add1)
console.log(foo(1)) // Debería dar 12
*/
function doublePipe(...functions) {
    return function (n) {
        let result = n;
        for (let i = 0; i < 2; i++) {
            for (let h = 0; h < 2; h++) {
                result = functions[i](result);
            }
        }
        console.log(result);
    }
}


function doublePipe(...functions) {
    return function (n) {
        let result = n;
        result = functions.reduce(
            (acc, func) => {
                result = func(func(acc));
                return result;
            }
        , n)
        return result;
    }
}

function double(x) { return x * 2 }
function add3(x) { return x + 3 }

let multiplyPerFourAndAddSix = doublePipe(double, add3)
console.log(multiplyPerFourAndAddSix(10)) // 46 = (10*2*2+3+3)

let addSixAndMultiplyPerFour = doublePipe(add3, double)
console.log(addSixAndMultiplyPerFour(10)) // 64 = (10+3+3)*2*2

