// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

function calculateSquare(a, b) {
    return a * b;
}

console.log(`Square of rectangle a = 3 and b = 4: ${calculateSquare(3, 4)}`);

// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function circleSquare(rValue) {
    return Math.PI * rValue * rValue;
}

console.log(`Square of circle with r = 3: ${circleSquare(3).toFixed(3)}`)

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderSquare(rValue, hValue) {
    return 2 * Math.PI * rValue * (hValue + rValue);
}

console.log(`Square of cylinder with r = 3, h = 4: ${cylinderSquare(3, 4).toFixed(3)}`)

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
}

let arr = [1, 2, 3, 4, 5, 6];
printArray(arr);

// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write.
//   Текст задати через аргумент

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph("У вишах стартує базова загальновійськова підготовка: 90 годин теорії, 210 годин практики." +
    " Стрільби, стройова, присяга.");

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
//   Текст li задати через аргумент всім однаковий

function createList(first, second, third) {
    document.write(`<ul>`);
    document.write(`<li>${first}</li>`);
    document.write(`<li>${second}</li>`);
    document.write(`<li>${third}</li>`);
    document.write(`</ul>`);
}

createList("olya", "ira", "julia");

// #0Kxco1edSN
// – створити функцію, яка створює ul з елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл) та виводить його через document.write

function createCustomList(text, numberOfLi) {
    document.write(`<ul>`);
    for (let i = 0; i < numberOfLi; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createCustomList("ira", 5);

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві),
//   та будує для них список (ul li) та виводить його через document.write

function createListForArray(array) {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

let customArr = [1, 2, true, false, "Ira", "Julia"];
createListForArray(customArr);

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id, name, age,
//   та виводить їх в документ. Для кожного об’єкту окремий блок.

function createListOfUsers(array) {
    document.write(`<div class="users-block">`);
    for (let item of array) {
        document.write(`<div class="user">
            <h4>Id: ${item.id}</h4>
            <h2>Name: ${item.name}</h2>
            <h3>Age: ${item.age}</h3>
        </div>`);
    }
    document.write(`</div>`);
}

let users = [
    {
        id: 1,
        name: "Olya",
        age: 18
    },
    {
        id: 2,
        name: "Artur",
        age: 19
    },
    {
        id: 3,
        name: "Oleg",
        age: 18
    },
    {
        id: 4,
        name: "Emelia",
        age: 19
    },
]
createListOfUsers(users);

// #pghbnSB
// – створити функцію яка повертає найменьше число з масиву

function findMinimal(array){
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}
let testArray = [2, 3, 56, 78, -9, 99];
console.log("Min value in your array is: "+findMinimal(testArray));

// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10])

function calculateSum(arr){
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}
console.log("Sum of your array is: " + calculateSum(testArray));

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
console.log("Before swap: " + testArray);
swap(testArray, 1, 2)
console.log("Swap first and second: " + testArray);

// #mkGDenYnNjn.html
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency)
{
    for(let value of currencyValues)
    {
        if(value.currency === exchangeCurrency)
        {
            return sumUAH/value.value;
        }
    }
}
let currencies = [
    {
        currency:"EUR",
        value:42
    },
    {
        currency:"USD",
        value:25
    },
]
console.log("Convert 400 uah into $" + exchange(400, currencies, 'USD'));