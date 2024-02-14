// Знайти мінімальний елемент масиву та його порядковий номер.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let minDigit = [0];
let minIndex = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minDigit) {
        minDigit = arr[i];
        minIndex = i;
    }
}

console.log(`Min digit is: ${minDigit}`);
console.log(`Min digit number is: ${minIndex + 1}`);