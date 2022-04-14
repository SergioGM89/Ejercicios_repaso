const day = 21;
const month = 9;
let dayOfWeek;
let numberForDayOfWeek = 0;
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];

for (let i = 1; i <= (month - 1); i++) {
    numberForDayOfWeek += daysPerMonth[(month - 1) - i];
}
numberForDayOfWeek += day;
while (numberForDayOfWeek > 7) {
    numberForDayOfWeek -= 7;
}

switch (numberForDayOfWeek) {
    case 1:
        dayOfWeek = "Viernes";
        break;

    case 2:
        dayOfWeek = "Sábado";
        break;

    case 3:
        dayOfWeek = "Domingo";
        break;

    case 4:
        dayOfWeek = "Lunes";
        break;

    case 5:
        dayOfWeek = "Martes";
        break;

    case 6:
        dayOfWeek = "Miércoles";
        break;

    case 7:
        dayOfWeek = "Jueves";
        break;
}

console.log(dayOfWeek);