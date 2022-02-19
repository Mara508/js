// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let a = +prompt('Введіть перше число:');
// let b = +prompt('Введіть друге число:');
// let c = +prompt('Введіть третє число:');
// function numMin(a,b,c) {
//     if (a<=c && a<=b){
//         console.log('Найменше число - '+a);
//     } else if (b<a && b<=c){
//         console.log('Найменше число - '+b);
//     } else if (c<b && c<a){
//         console.log('Найменше число - '+c);
//     }
// }
// numMin(a,b,c);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let a = +prompt('Введіть перше число:');
// let b = +prompt('Введіть друге число:');
// let c = +prompt('Введіть третє число:');
// function numMax(a,b,c) {
//     if (a>=c && a>=b){
//         console.log('Найбільше число - '+a);
//     } else if (b>a && b>=c){
//         console.log('Найбільше число - '+b);
//     } else if (c>b && c>a){
//         console.log('Найбільше число - '+c);
//     }
// }
// numMax(a,b,c);

// - створити функцію яка повертає найбільше число з масиву

// let arr = [];
// let length, a;
// function addElemArr(arr) {
//     length = +prompt('Задайте кількість елементів у масиві, який бажаєте створити:');
//     while (arr.length < length){
//     a = +prompt('Введіть число:');
//     arr[arr.length] = a;
//     }
//     return arr;
// }
// function numMax(arr) {
//     let max = arr[0];
//     for (let arrElement of arr) {
//         if (arrElement>=max){
//             max = arrElement;
//         }
//     }
//     return max;
// }
// console.log('найбільше число з масиву - '+numMax(addElemArr(arr)));

// - створити функцію яка повертає найменьше число з масиву

// let arr = [];
// let length, a;
// function addElemArr(arr) {
//     length = +prompt('Задайте кількість елементів у масиві, який бажаєте створити:');
//     while (arr.length < length){
//         a = +prompt('Введіть число:');
//         arr[arr.length] = a;
//     }
//     return arr;
// }
// function numMin(arr) {
//     let min = arr[0];
//     for (let arrElement of arr) {
//         if (arrElement<=min){
//             min = arrElement;
//         }
//     }
//     return min;
// }
// console.log('найменьше число з масиву - '+numMin(addElemArr(arr)));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1,2,10,1,2,10,1,2,10];
// function sumElemArr(arr) {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(sumElemArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [1,2,10,1,2,10,1,2,10];
// function middleSumElemArr(arr) {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum/arr.length;
// }
// console.log(middleSumElemArr(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function numMaxAndMin(...a) {
//     let max = a[0],min = a[0];
//     for (let aElement of a) {
//         if (aElement>max){
//             max = aElement;
//         }
//         if (aElement<min){
//             min = aElement;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(numMaxAndMin(1, 2, 10, 11, 21, 101, 12, 22, 102));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr = [];
// let length =+prompt('Введіть довжину масиву:');
// function addElemArr(length) {
//     while (arr.length<length){
//         arr.push(Math.round(Math.random()*100))
//     }
//     console.log(arr);
// }
// addElemArr(length);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
// let length =+prompt('Введіть довжину масиву:');
// let limit =+prompt('Введіть кінцеве значення діапазону:');
// function addElemArr(length,limit) {
//     while (arr.length<length){
//         arr.push(Math.round(Math.random()*limit))
//     }
//     console.log(arr);
// }
// addElemArr(length,limit);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1,2,3];
// function rArr(arr) {
//     let newArr = [];
//     for (let i = 0,j = arr.length - 1; j >= 0; i++,j--) {
//     newArr[i]= arr[j];
//     }
//     return newArr;
// }
// console.log(rArr(arr));

