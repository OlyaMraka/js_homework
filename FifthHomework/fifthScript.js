// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

let calcRectangleSquare = (a, b) => a * b;

let result = calcRectangleSquare(3, 4);
console.log("Square of rectangle a = 3, b = 4: " + result);

// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

let calcCircleSquare = (r) => Math.PI * r * r;

result = calcCircleSquare(3);
console.log("Square of circle with r = 3: " + result.toFixed(4));

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let calcCylinderSquare = (h, r) => 2 * Math.PI * r * (h + r);

result = calcCylinderSquare(3, 4);
console.log("Square of cylinder with h = 3, r = 4: " + result.toFixed(4));

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let printArr = (arr) => {
    for (let elem in arr) {
        console.log(elem);
    }
}

printArr([1,2,3,4,5,6]);

// #59g0IsA
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

let createParagraph = (context) => {
    document.write(`<p>${context}</p>`)
}

createParagraph('Любіть Україну, як сонце любіть, як вітер трави і води,' +
    ' в годину щасливу і в радості мить, любіть у годину негоди.')

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createSimpleList = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createSimpleList("Olya");

// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createCustomList = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createCustomList("Olya", 6);

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createList = (array) => {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

createList([1,2,3,"olya", "ira", "nazar", true, false]);

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id, name, age,
//     та виводить їх в документ. Для кожного об’єкту окремий блок.

let createUsersList = (array) => {
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
        name: "Ivan",
        age: 18
    },
    {
        id: 2,
        name: "Artur",
        age: 19
    },
    {
        id: 3,
        name: "Nazar",
        age: 18
    },
    {
        id: 4,
        name: "Artem",
        age: 19
    },
]
createUsersList(users);

// #pghbnSB
// – створити функцію, яка повертає найменше число з масиву

let FindMin = (arr) => {
    let min = arr[0]
    for(let elem of arr)
    {
        if(elem < min)
            min = elem
    }
    return min;
}

let min = FindMin([1,2,3,4,5,6,7,8])
console.log(min);

// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад sum([1,2,10]) //->13

let FindSum = (arr) => {
    let sum = arr[0]
    for(let i = 1; i < arr.length; i++)
    {
        sum += arr[i]
    }
    return sum;
}

let sum = FindSum([1,2,3,4,5,6,7,8])
console.log(sum);

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

let swap = (arr, firstIndex, secondIndex) => {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
let testArray = [1,2,3,4,5,67,8];
console.log("Before swap: " + testArray);
swap(testArray, 1, 2);
console.log("Swap first and second: " + testArray);

// #mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
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
        value:40
    },
]
console.log("Convert 10000 uah into $" + exchange(10000, currencies, 'USD'));