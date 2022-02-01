// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let strHello = 'hello';
// let strOwu = 'owu';
// let strCom = 'com';
// let strUa = 'ua';
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let pi = 3.14;
// let float = 2.7;
// let num5 = 16;
// let boolTrue = true;
// let boolFalse = false;
// console.log(strHello,strOwu,strCom,strUa,num1,num2,num3,num4,pi,float,num5,boolTrue,boolFalse);
// document.write(`${strHello}<br> ${strOwu}<br> ${strCom}<br> ${strUa}<br>`);
// document.write(`${num1}<br> ${num2}<br> ${num3}<br> ${num4}<br> ${pi}<br> ${float}<br> ${num5}<br>`)
// document.write(`${boolTrue}<br> ${boolFalse}<br>`)
// alert(strHello);
// alert(strOwu);
// alert(strCom);
// alert(strUa);
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(pi);
// alert(float);
// alert(num5);
// alert(boolTrue);
// alert(boolFalse);


///////////////////////////////////////////////////////////////////////////////////////////////
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let strHello = 'hello';
// let strOwu = 'owu';
// let strCom = 'com';
// let strUa = 'ua';
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let pi = 3.14;
// let float = 2.7;
// let num5 = 16;
// let boolTrue = true;
// let boolFalse = false;
//
// strHello = 'hello world';
// strOwu = 'okten';
// strCom = 'google.com';
// strUa = 'owu.com.ua';
// num1 = 2;
// num2 = 100;
// num3 = -2000;
// num4 = 456;
// pi = 3.1415;
// float = 2.79;
// num5 = 256;
// boolTrue = false;
// boolFalse = true;
// console.log(strHello,strOwu,strCom,strUa,num1,num2,num3,num4,pi,float,num5,boolTrue,boolFalse);
// document.write(`${strHello}<br> ${strOwu}<br> ${strCom}<br> ${strUa}<br>`);
// document.write(`${num1}<br> ${num2}<br> ${num3}<br> ${num4}<br> ${pi}<br> ${float}<br> ${num5}<br>`)
// document.write(`${boolTrue}<br> ${boolFalse}<br>`)
// alert(strHello);
// alert(strOwu);
// alert(strCom);
// alert(strUa);
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(pi);
// alert(float);
// alert(num5);
// alert(boolTrue);
// alert(boolFalse);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Solomenko';
// let middleName = 'Marina';
// let lastName = 'Vitalyevna';
// let person = `${firstName} ${middleName} ${lastName}`;
// console.log(person)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let middleName = prompt('Name');
// let lastName = prompt('Last Name');
// let age = prompt('Age');
// console.log(`Вітаю ${middleName} ${lastName}. Тобі ${age} років. `)

////////////////////////////////////////////////////////////////////////////////////////////////////////
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

//      let a = 100; let b = '100'; let c = true;
//
// console.log('a: '+typeof a);
// console.log('b: '+typeof b);
// console.log('c: '+typeof c);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// //     5 ? 6 -> true
// console.log(5<6);
//
// //      5 ? 6 -> false
// console.log(5==6);
//
// //      5 ? 6 -> false
// console.log(5===6);
//
// //      5 ? 6 -> false
// console.log(5>6);
//
// //      10 ? 10 -> true
// console.log(10===10);
//
// //      10 ? 10 -> true
// console.log(10<=10);
//
// //      10 ? 10 -> false
// console.log(10!==10);
//
// //      10 ? 10 -> false
// console.log(10!=10);
//
// //      10 ? 10 -> false
// console.log(10>10);
//
// //      123 ? '123' -> false
// console.log(123==='123');
//
// //      123 ? '123' -> true
// console.log(123=='123');

///////////////////////////////////////////////////////////////////////////////////////////
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
//     // Якщо додавати до string число, то буде рахуватись ніби число теж string,
//     // і буде просто писати у рядок наступні значеня, а не рахувати.
//     // Тому після першого ж додавання стрінга залишається стрінгою:
// console.log(typeof (str + a));
//     // "<br/>" - теж string.
// console.log(typeof (str + a + "<br/>"));
//
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
//     // В цих прикладах виконуютьється віднімання, множення та ділення, тобто дії які розраховані тільки на числа
//     // і ніяк не можуть бути застосовані до ряків, тому рядки перетворюються на числа.
//     // Отже після першої дії (-,*,/), ми маємо число:
// console.log(typeof (str - a));
// console.log(typeof (str * "2"));
// console.log(typeof (str / 2));
//     // Після цього ми додаємо змінну з типом string ("<br/>"), і усе назад перетворюється у string
//     // (але вже з обрахованою першою дією):
// console.log(typeof (str - a + "<br/>"));
// console.log(typeof (str * "2" + "<br/>"));
// console.log(typeof (str / 2 + "<br/>"));

