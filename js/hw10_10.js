// Знайти найбільший серед елементів масиву, ост альні обнулити.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let maxNumber = [0];
let maxNumberIndex = 0;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
        maxNumberIndex = i;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxNumber) {
        arr[i] = 0;
    } 
}


console.log(`Max number is: ${maxNumber}`);
console.log(arr.join(" "));