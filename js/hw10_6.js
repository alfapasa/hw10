// Знайти кількість парних позитивних елементів.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positiveNumbersArr = [];

for (let i = 0; i < arr.length; i++) {
    if ((arr[i] > 0) && (arr[i] % 2 === 0)) {
        positiveNumbersArr.push(arr[i]);
    }
}

console.log(`The quantity of positive paired numbers is: ${positiveNumbersArr.length}`);