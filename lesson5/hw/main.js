// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника

// let s = (a,b) => a*b;
// let a = +prompt('Введіть а:');
// let b = +prompt('Введіть b:');
// console.log(s(a,b));

// - створити функцію яка обчислює та повертає площу кола

// let r = +prompt('Введіть радіус кола:');
// let s = (r) => 3.14*(r**2);
// console.log(s(r));

// - створити функцію яка обчислює та повертає площу циліндру

// let r = +prompt('Введіть радіус циліндра:');
// let h = +prompt('Введіть висоту циліндра:');
// let s = (r,h) => 2*3.14*r*h;
// console.log(s(r,h));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [ 101, 102, 111, 201, 122, 112, 210, 211, 120, 222, 100];
// let element = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// element(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let pText = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// let text = prompt('Введіть текст:');
// pText(text);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let createUl = (txt) => {
//         document.write(`<ul>`);
//         document.write(`<li>${txt}</li>`);
//         document.write(`<li>${txt}</li>`);
//         document.write(`<li>${txt}</li>`);
//         document.write(`</ul>`);
// }
// let txt = prompt('Введіть текст:');
// createUl(txt);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let num =+prompt('Введіть кількість пунктів:');
// let txt = prompt('Введіть текст:');
// let createUl = (num,txt) => {
//     document.write(`<ul>`);
//     for (let i = 1; i <= num; i++) {
//         document.write(`<li>${txt}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createUl(num,txt);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1,'two','three',4,5,true,false,'seven','eight',9,'ten'];
// let createUlForElem = (arr) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createUlForElem(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 12, name: 'vasya', age: 31},
//     {id: 31, name: 'petya', age: 30},
//     {id: 14, name: 'kolya', age: 29},
//     {id: 15, name: 'olya', age: 28},
//     {id: 61, name: 'max', age: 30},
//     {id: 17, name: 'anya', age: 31},
//     {id: 18, name: 'oleg', age: 28},
//     {id: 19, name: 'andrey', age: 29},
//     {id: 21, name: 'masha', age: 30},
//     {id: 72, name: 'olya', age: 31},
//     {id: 51, name: 'max', age: 31}
// ];
// let obj = (arr) => {
//     for (let arrElement of arr) {
//         document.write(`<div> id: ${arrElement.id}, name: ${arrElement.name}, age: ${arrElement.age}</div>`);
//     }
// }
// obj(users);
