// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2,17,13,6,22,31,45,66,100,-18];
console.log(arr);
//     1. перебрати його циклом while

// let i = 0;
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

//     2. перебрати його циклом for

// for (let number of arr) {
//     console.log(number);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i<arr.length){
//     if (i%2 === 1){
//         console.log(arr[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arr.length; i++) {
//     if (i%2 === 1){
//         console.log(arr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i<arr.length){
//     if (arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%3 === 0){
//         arr[i] = "okten";
//     }
// }
// console.log(arr);

// 8. вивести масив в зворотньому порядку.

// let newArr = [];
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr[j] = arr[i];
//     j++;
// }
// console.log(newArr);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
////     9.1. перебрати його циклом while, але в зворотньому циклі
//
// let i = arr.length-1;
// while (i >= 0){
//     console.log(arr[i]);
//     i--;
// }

// 9.2. перебрати його циклом for, але в зворотньому циклі

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом, але в зворотньому циклі

// let i = arr.length-1;
// while (i >= 0){
//     if (i%2 === 1){
//         console.log(arr[i]);
//     }
//     i--;
// }

// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом, але в зворотньому циклі

// for (let i = arr.length - 1; i >= 0; i--) {
//         if (i%2 === 1){
//         console.log(arr[i]);
//         }
// }

// 9.5. перебрати циклом while та вивести  числа тільки парні  значення, але в зворотньому циклі

// let i = arr.length-1;
// while (i >= 0){
//     if (arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
//     i--;
// }

// 9.6. перебрати циклом for та вивести  числа тільки парні  значення, але в зворотньому циклі

// for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i]%2 === 0){
//         console.log(arr[i]);
//         }
// }

// 9.7. замінити кожне число кратне 3 на слово "okten", але в зворотньому циклі

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i]%3 === 0){
//         arr[i] = "okten";
//     }
// }
// console.log(arr);

