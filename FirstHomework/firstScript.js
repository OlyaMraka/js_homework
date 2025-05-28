//#dYQNrBV
// Створити змінні. Присвоїти кожному з них значення:
// ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let comm = 'com';
console.log(comm);
let ua = 'ua';
console.log(ua);
let one = 1;
console.log(one);
let ten = 10;
console.log(ten);
let nine = -999;
console.log(nine);
let oneTwoThree = 123;
console.log(oneTwoThree);
let pi = 3.14;
console.log(pi);
let twoSeven = 2.7;
console.log(twoSeven);
let sixteen = 16;
console.log(sixteen);
let tr = true;
console.log(tr);
let fl = false;
console.log(fl);

// #6Qb97gsv
// – Створити 3 змінних firstName, middleName, lastName,
// наповнити їх своїм ПІБ. З’єднати їх в одну змінну person
// (Не об’єкт, просто за допомогою конкатенації)

let firstName = 'Olya';
let middleName = 'Ihorivna';
let lastName = 'Mraka';
let person = firstName + ' ' + lastName + ' ' + middleName;
console.log(person);

// #4N0y5tufA
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = ‘100’; let c = true;

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// #ruUtWDUI
// Додаткове для тих, хто цікавився prompt`oм
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками.
// Та вивести в консоль

let name = prompt("Enter your name: ");
let mName = prompt("Enter your middle name: ");
let age = prompt("Enter your age: ");
console.log(` -> ${name} ${mName} - ${age}`);