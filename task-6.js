'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число!');

    if (input === null) {
        break;
    }

    input = Number(input);
    const isNumber = Number.isNaN(input);

    if (isNumber) {
        alert('Было введено не число, попробуйте еще раз!');
        continue;
    }
    numbers.push(input);
}

if (numbers.length === 0) {
    alert('Вы ничего не ввели!');
} else {
    for (let i = 0; i < numbers.length; i += 1) {
        total = total + numbers[i];
    }
    alert(`Общая сумма чисел равна ${total}`);
}
console.log(numbers);