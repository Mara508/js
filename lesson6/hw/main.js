// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// arr.forEach(element => console.log(element + ', довжина стрінги ' + element.length));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// let newArr = [];
// arr.forEach(element => newArr.push(element.toUpperCase()));
// console.log(newArr);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// let newArr = [];
// arr.forEach(element => newArr.push(element.toLowerCase()));
// console.log(newArr);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let newStr = str.trim();
// console.log(newStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => str.split(' ');
// let arr = stringToarray(str);
// document.writeln(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, index) => {
//     return str.substring(0, index);
// }
// let s = delete_characters(str, 7);
// document.writeln(s);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => str.replaceAll(' ','-').toUpperCase();
// document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'qwerty';
// let upperCaseFirstChar = (str) => str.charAt(0).toUpperCase() + str.substring(1);
// let newStr = upperCaseFirstChar(str);
// console.log(newStr);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'у якому кожне слово починається з великої літери';
// let capitalize = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase()+word.substring(1)).join(' ');
// let newStr = capitalize(str);
// console.log(newStr);
