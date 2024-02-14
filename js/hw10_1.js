
// ● push - додавання в кінець масиву
// ● pop - видалення з кінця масиву
// ● unshift - додавання на початок масиву
// ● shift - видалення з початку масиву
// ● slice - повертає частину масиву
// ● splice - повертає частину масиву, видаляючи її з початкового масиву
// ● reverse, toReversed
// ● sort, toSorted
// ● join

// Object:
// const person = {firstName:"John", lastName:"Doe", age:46};

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let summ = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        summ += i;
}}

console.log(`Summ is: ${summ}`);
let newArr = arr;
console.log(`The quantity of positive digits is: ${newArr.length}`);