// #WpkK0ZH1
//
// – створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль

console.log(" -> Cтворити масив з 5 числових значень та вивести його в консоль")
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log(" -> Cтворити масив з 5 стічкових значень та вивести його в консоль")
let strings = ["olya", "julia", "ira", "oksana", "yana"];
for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
}

console.log(" -> Cтворити масив з 5 значень стрічкового, числового та булевого типу та вивести його в консоль")
let values = [1, 2, true, false, "artur"];
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// #4aDbSgh
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу.
// Вивести в консоль

console.log(" -> Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль")
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = i;
    console.log(arr[i]);
}

// #qLQLJSeN7i
// – є масив [2,17,13,6,22,31,45,66,100,-18]

let another_arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
document.write(`<h1 class="task-title"> Завдання qLQLJSeN7i </h1>`);

// 1. перебрати його циклом while
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати його циклом while");
document.write(`<h2 class="task-subtitle"> 1. Перебрати його циклом while </h2>`);
document.write(`<div class="task-block">`);
let count = 0;
while (count < another_arr.length) {
    document.write(`<div class="task-item">${another_arr[count]}</div>`);
    console.log(another_arr[count]);
    count++;
}
document.write(`</div>`);

// 2. перебрати його циклом for
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати його циклом for");
document.write(`<h2 class="task-subtitle"> 2. Перебрати його циклом for </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < another_arr.length; i++) {
    document.write(`<div class="task-item">${another_arr[i]}</div>`);
    console.log(another_arr[i]);
}
document.write(`</div>`);

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати циклом while та вивести числа тільки з непарним індексом");
document.write(`<h2 class="task-subtitle"> 3. Перебрати циклом while та вивести числа тільки з непарним індексом </h2>`);
document.write(`<div class="task-block">`);
count = 0;
while (count < another_arr.length) {
    if (count % 2 !== 0) {
        document.write(`<div class="task-item">${another_arr[count]}</div>`);
        console.log(another_arr[count]);
    }
    count++;
}
document.write(`</div>`);

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати циклом for та вивести числа тільки з непарним індексом");
document.write(`<h2 class="task-subtitle"> 4. Перебрати циклом for та вивести числа тільки з непарним індексом </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < another_arr.length; i++) {
    if (i % 2 !== 0) {
        document.write(`<div class="task-item">${another_arr[i]}</div>`);
        console.log(another_arr[i]);
    }
}
document.write(`</div>`);

// 5. перебрати циклом while та вивести числа тільки парні значення
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати циклом while та вивести числа тільки парні значення");
document.write(`<h2 class="task-subtitle"> 5. Перебрати циклом while та вивести числа тільки парні значення </h2>`);
document.write(`<div class="task-block">`);
count = 0;
while (count < another_arr.length) {
    if (another_arr[count] % 2 === 0) {
        document.write(`<div class="task-item">${another_arr[count]}</div>`);
        console.log(another_arr[count]);
    }
    count++;
}
document.write(`</div>`);

// 6. перебрати циклом for та вивести числа тільки парні значення
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати циклом for та вивести числа тільки парні значення");
document.write(`<h2 class="task-subtitle"> 6. Перебрати циклом for та вивести числа тільки парні значення </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < another_arr.length; i++) {
    if (another_arr[i] % 2 === 0) {
        document.write(`<div class="task-item">${another_arr[i]}</div>`);
        console.log(another_arr[i]);
    }
}
document.write(`</div>`);

// 7. замінити кожне число, кратне 3, на слово “okten”
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], замінити кожне число, кратне 3, на слово okten");
document.write(`<h2 class="task-subtitle"> 7. замінити кожне число, кратне 3, на слово okten </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < another_arr.length; i++) {
    if (another_arr[i] % 3 === 0) {
        another_arr[i] = 'okten';
    }
    document.write(`<div class="task-item">${another_arr[i]}</div>`);
    console.log(another_arr[i]);
}
document.write(`</div>`);

// 8. вивести масив у зворотньому порядку.
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], вивести масив у зворотньому порядку.");
document.write(`<h2 class="task-subtitle"> 8. замінити кожне число, кратне 3, на слово okten </h2>`);
document.write(`<div class="task-block">`);
for (let i = another_arr.length - 1; i >= 0; i--) {
    document.write(`<div class="task-item">${another_arr[i]}</div>`);
    console.log(another_arr[i]);
}
document.write(`</div>`);

// 9. Всі попередні завдання (окрім 8), але у зворотному циклі (задом наперед)
another_arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 9.1. Перебрати його циклом while задом наперед
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати його циклом while задом наперед");
document.write(`<h2 class="task-subtitle"> 9.1. Перебрати його циклом while задом наперед </h2>`);
document.write(`<div class="task-block">`);
count = another_arr.length - 1;
while (count >= 0) {
    document.write(`<div class="task-item-reverse">${another_arr[count]}</div>`);
    console.log(another_arr[count]);
    count--;
}
document.write(`</div>`);

// 9.2 Перебрати його циклом for
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати його циклом for задом наперед");
document.write(`<h2 class="task-subtitle"> 9.2. Перебрати його циклом for задом наперед </h2>`);
document.write(`<div class="task-block">`);
for (let i = another_arr.length - 1; i >= 0; i--) {
    document.write(`<div class="task-item-reverse">${another_arr[i]}</div>`);
    console.log(another_arr[i]);
}
document.write(`</div>`);

// 9.3. Перебрати циклом while та вивести числа тільки з непарним індексом
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати циклом while та вивести числа" +
    " тільки з непарним індексом задом наперед");
document.write(`<h2 class="task-subtitle"> 9.3. Перебрати циклом while та вивести числа тільки з непарним індексом задом наперед </h2>`);
document.write(`<div class="task-block">`);
count = another_arr.length - 1;
while (count >= 0) {
    if (count % 2 !== 0) {
        document.write(`<div class="task-item-reverse">${another_arr[count]}</div>`);
        console.log(another_arr[count]);
    }
    count--;
}
document.write(`</div>`);

// 9.4 Перебрати циклом for та вивести числа тільки з непарним індексом
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати циклом for" +
    " та вивести числа тільки з непарним індексом задом наперед");
document.write(`<h2 class="task-subtitle"> 9.4. Перебрати циклом for та вивести числа тільки з непарним індексом задом наперед </h2>`);
document.write(`<div class="task-block">`);
for (let i = another_arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        document.write(`<div class="task-item-reverse">${another_arr[i]}</div>`);
        console.log(another_arr[i]);
    }
}
document.write(`</div>`);

// 9.5 Перебрати циклом while та вивести числа тільки парні значення
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати циклом while та вивести" +
    " числа тільки парні значення задом наперед");
document.write(`<h2 class="task-subtitle"> 9.5. Перебрати циклом while та вивести числа тільки парні значення задом наперед </h2>`);
document.write(`<div class="task-block">`);
count = another_arr.length - 1;
while (count >= 0) {
    if (another_arr[count] % 2 === 0) {
        document.write(`<div class="task-item-reverse">${another_arr[count]}</div>`);
        console.log(another_arr[count]);
    }
    count--;
}
document.write(`</div>`);

// 9.6 Перебрати циклом for та вивести числа тільки парні значення
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18], перебрати циклом for" +
    " та вивести числа тільки парні значення задом наперед");
document.write(`<h2 class="task-subtitle"> 9.6. Перебрати циклом for та вивести числа тільки парні значення задом наперед </h2>`);
document.write(`<div class="task-block">`);
for (let i = another_arr.length - 1; i >= 0; i--) {
    if (another_arr[i] % 2 === 0) {
        document.write(`<div class="task-item-reverse">${another_arr[i]}</div>`);
        console.log(another_arr[i]);
    }
}
document.write(`</div>`);

// 9.7 Замінити кожне число, кратне 3, на слово “okten”
console.log(" -> Є масив [2,17,13,6,22,31,45,66,100,-18]," +
    " замінити кожне число, кратне 3, на слово okten задом наперед");
document.write(`<h2 class="task-subtitle"> 7. замінити кожне число, кратне 3, на слово okten </h2>`);
document.write(`<div class="task-block">`);
for (let i = another_arr.length - 1; i >= 0; i--) {
    if (another_arr[i] % 3 === 0) {
        another_arr[i] = 'okten';
    }
    console.log(another_arr[i]);
    document.write(`<div class="task-item-reverse">${another_arr[i]}</div>`);
}
document.write(`</div>`);
document.write(`<hr>`);

// #yHAwJOyiC
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log(" -> Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.")
let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let element of elements) {
    console.log(element);
}

// #GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
console.log(" -> Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.")
let letters = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k"];
for (let letter of letters) {
    console.log(letter);
}

// #Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log(" -> Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.")
let another_elements = [1, 2, 3, 4.5, 5.6, 6.7, 8.9, true, false, "olga"];
for (let element of another_elements) {
    console.log(element);
}

// #u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
console.log(" -> Створити масив з 10 елементів числового, стрічкового і булевого типу." +
    " За допомогою if та typeof вивести тільки булеві елементи")
let different_elements = [1, 2, 3, 4.5, 5.6, 6.7, 8.9, true, false, "olga"];
for (let element of different_elements) {
    if (typeof (element) === "boolean" || typeof (element) === "boolean") {
        console.log(element);
    }
}

// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
console.log(" -> Створити масив з 10 елементів числового, стрічкового і булевого типу." +
    " За допомогою if та typeof вивести тільки числові елементи")
for (let element of different_elements) {
    if (typeof (element) === "number") {
        console.log(element);
    }
}

// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
//     За допомогою if та typeof вивести тільки рядкові елементи
console.log(" -> Створити масив з 10 елементів числового, стрічкового і булевого типу." +
    " За допомогою if та typeof вивести тільки рядкові елементи")
for (let element of different_elements) {
    if (typeof (element) === "string") {
        console.log(element);
    }
}

// #0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
console.log(" -> Створити порожній масив. Наповнити його 10 елементами (різними за типами)" +
    " через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі. ")
let first_arr = []
for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        first_arr[i] = true;
    } else if (i % 4 === 0) {
        first_arr[i] = false;
    } else if (i % 5 === 0) {
        first_arr[i] = 1;
    } else {
        first_arr[i] = "olya";
    }
    console.log(first_arr[i]);
}

// #mDMWMW5a
// – Створити цикл for на 10 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
document.write(`<h1 class="task-title"> Завдання #mDMWMW5a </h1>`);
console.log(" -> Створити цикл for на 10 ітерацій з кроком 1." +
    " Вивести поточний номер кроку через console.log та document.write.");
document.write(`<h2 class="task-subtitle"> Створити цикл for на 10 ітерацій з кроком 1. 
Вивести поточний номер кроку через console.log та document.write. </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div class="task-item-reverse">${i}</div>`);
}
document.write(`</div>`);
document.write(`<hr>`);

// #4sXhaa5YMM
// – Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
document.write(`<h1 class="task-title"> Завдання #4sXhaa5YMM </h1>`);
console.log(" -> Створити цикл for на 100 ітерацій з кроком 1." +
    " Вивести поточний номер кроку через console.log та document.write.");
document.write(`<h2 class="task-subtitle"> Створити цикл for на 100 ітерацій з кроком 1. 
Вивести поточний номер кроку через console.log та document.write. </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div class="task-item-reverse">${i}</div>`);
}
document.write(`</div>`);
document.write(`<hr>`);

// #s24slNyz7
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write(`<h1 class="task-title"> Завдання #s24slNyz7 </h1>`);
console.log(" -> Створити цикл for на 100 ітерацій з кроком 2." +
    " Вивести поточний номер кроку через console.log та document.write.");
document.write(`<h2 class="task-subtitle"> Створити цикл for на 100 ітерацій з кроком 2. 
Вивести поточний номер кроку через console.log та document.write. </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < 200; i += 2) {
    console.log(i);
    document.write(`<div class="task-item-reverse">${i}</div>`);
}
document.write(`</div>`);
document.write(`<hr>`);

// #zananT5FR1
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write(`<h1 class="task-title"> Завдання #zananT5FR1 </h1>`);
console.log(" ->  Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write");
document.write(`<h2 class="task-subtitle"> Створити цикл for на 100 ітерацій. Вивести тільки парні кроки
 через console.log + document.write </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<div class="task-item-reverse">${i}</div>`);
    }
}
document.write(`</div>`);
document.write(`<hr>`);

// #Tfrwls7FM
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write(`<h1 class="task-title"> Завдання #Tfrwls7FM </h1>`);
console.log(" ->  Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки через console.log + document.write");
document.write(`<h2 class="task-subtitle"> Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки
 через console.log + document.write </h2>`);
document.write(`<div class="task-block">`);
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`<div class="task-item-reverse">${i}</div>`);
    }
}
document.write(`</div>`);
document.write(`<hr>`);

// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори, жанри).
// – знайти найбільшу книжку.
// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор

let books = [
    {
        title: "Fourth Wing",
        pages: 534,
        authors: ["Colleen Hoover", "Rebecca Yarros"],
        genres: ["fantasy", "Romance"]
    },
    {
        title: "Iron Flame",
        pages: 767,
        authors: ["Colleen Hoover", "Rebecca Yarros"],
        genres: ["fantasy", "Romance"]
    },
    {
        title: "Onyx Storm",
        pages: 510,
        authors: ["Colleen Hoover", "Rebecca Yarros"],
        genres: ["fantasy", "Romance"]
    },
    {
        title: "Murder in the orient express",
        pages: 300,
        authors: ["Agata Christie"],
        genres: ["Mystery"]
    },
    {
        title: "Death on the Nile",
        pages: 260,
        authors: ["Agata Christie"],
        genres: ["Mystery"]
    }
]

// знайти найбільшу книжку.
let max = books[0];
for(let book of books) {
    if(book.pages > max.pages)
    {
        max = book;
    }
}
console.log(" -> Найбільша книжка");
console.log(max);

// знайти книжку/ки з найбільшою кількістю жанрів
let maxNumber = 0;
for(let book of books) {
    if(book.genres.length > maxNumber)
    {
        maxNumber = book.genres.length;
    }
}
console.log(" -> Книжка/ки з найбільшою кількістю жанрів");
for(let book of books) {
    if(book.genres.length === maxNumber)
    {
        console.log(book);
    }
}

// знайти книжку/ки з найдовшою назвою
maxNumber = 0;
for(let book of books) {
    if(book.title.length > maxNumber)
    {
        maxNumber = book.title.length;
    }
}
console.log(" -> Книжка/ки з найдовшою назвою");
for(let book of books) {
    if(book.title.length === maxNumber)
    {
        console.log(book);
    }
}

// знайти книжку/ки, які писали 2 автори
console.log(" -> Книжка/ки, які писали 2 автори");
for(let book of books) {
    if(book.authors.length === 2)
    {
        console.log(book);
    }
}

// знайти книжку/ки, які писав 1 автор
console.log(" -> Книжка/ки, які писав 1 автори");
for(let book of books) {
    if(book.authors.length === 1)
    {
        console.log(book);
    }
}