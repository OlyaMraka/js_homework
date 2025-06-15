// #67kfznmiMl
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 3, "olya", "ira", 3.4, 5.6, true, false, "ivan", 0];
console.log(arr);

// #LARqoUj5I
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let firstBook = {
    title: "Fourth wing",
    pageCount: 568,
    genre: "fantasy"
};
let secondBook = {
    title: "Mr. Mercedes",
    pageCount: 523,
    genre: "horror"
}
let thirdBook = {
    title: "Once upon the broken heart",
    pageCount: 400,
    genre: "Romance"
}
console.log(firstBook, secondBook, thirdBook);

// #sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title, pageCount, genre, authors. Поле “автори” – являється масивом.
// Кожен автор має поля name та age.

let fourthBook = {
    title: "Hopeless",
    pageCount: 356,
    genre: "Romance",
    authors: [
        {
            name: "Rebecca",
            age: 25
        },
        {
            name: "Johnson",
            age: 26
        }
    ]
}
let fifthBook = {
    title: "Ugly love",
    pageCount: 268,
    genre: "Romance",
    authors: [
        {
            name: "Colleen",
            age: 35
        },
        {
            name: "Steve",
            age: 26
        }
    ]

}
let sixBook = {
    title: "November 9",
    pageCount: 511,
    genre: "Romance",
    authors: [
        {
            name: "Colleen",
            age: 35
        },
        {
            name: "Alina",
            age: 51
        }
    ]
}

// #jCHFnEbdmFd
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username, password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: "Ivan", username: "Volkov", password: "ivanvolkov1879"},
    {name: "Maria", username: "Koval", password: "mariakoval3425"},
    {name: "Oleg", username: "Kovalchuk", password: "oleg4536"},
    {name: "Sofia", username: "Bila", password: "sofia2435"},
    {name: "Danylo", username: "Shulhack", password: "danylo3426"},
    {name: "Olya", username: "Shulhack", password: "olya25364"},
    {name: "Nazar", username: "Oliynyk", password: "nazar5647"},
    {name: "Artur", username: "Oliynyk", password: "artur4639"},
    {name: "Yaryna", username: "Proc", password: "yaryna4536"},
    {name: "Maryna", username: "Vega", password: "3426"},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// #coYydZuaeEB
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив – вам потрібно подумати.
//     Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
let temperatures = [
    {
        day: "14 травня",
        indicators: {
            morning: 12, afternoon: 23, night: 7
        }
    },
    {
        day: "13 травня",
        indicators: {
            morning: 11, afternoon: 21, night: 5
        }
    },
    {
        day: "12 травня",
        indicators: {
            morning: 22, afternoon: 26, night: 15
        }
    },
    {
        day: "11 травня",
        indicators: {
            morning: 10, afternoon: 20, night: 11
        }
    },
    {
        day: "10 травня",
        indicators: {
            morning: 15, afternoon: 26, night: 10
        }
    },
    {
        day: "9 травня",
        indicators: {
            morning: 12, afternoon: 23, night: 7
        }
    },
    {
        day: "8 травня",
        indicators: {
            morning: 14, afternoon: 24, night: 11
        }
    }
]

// #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’,
// інакше виведіть ‘Невірно’. Перевірте скрипт при a, що дорівнює 1, 0, -3

let xValue = +prompt("Введіть значення змінної х: ");
if (xValue === 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

// #3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time = 23;
if (time >= 0 && time <= 15) {
    console.log("Перша чверть");
} else if (time >= 16 && time <= 30) {
    console.log("Друга чверть");
} else if (time >= 31 && time <= 45) {
    console.log("Третя чверть");
} else if (time >= 46 && time <= 59) {
    console.log("Четверта чверть");
} else {
    console.log("Сталась помилка!");
}

// #UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 23;
if (day >= 1 && day <= 10) {
    console.log("Перша частина місяця");
} else if (day >= 11 && day <= 20) {
    console.log("Друга частина місяця");
} else if (day >= 21 && day <= 31) {
    console.log("Третя частина місяця");
} else {
    console.log("Сталась помилка!");
}

// #KzrtqyQ
// – Скласти розклад на тиждень за домопогою switch.
//   Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день
//   (можна замість плану на день, назву дня англійською).

let dayNumber = +prompt("Введіть цифру від 1 до 7");
switch (dayNumber) {
    case 1:
        console.log(" -> Понеділок\n" +
            "  > Сходити на роботу\n" +
            "  > Почитати книжку\n" +
            "  > Приготувати вечерю\n");
        break;
    case 2:
        console.log(" -> Вівторок\n" +
            "  > Сходити на роботу\n" +
            "  > Купити штани\n");
        break;
    case 3:
        console.log(" -> Середа\n" +
            "  > Сходити на роботу\n" +
            "  > Приготувати борщ\n" +
            "  > Погуляти з Юлею\n");
        break;
    case 4:
        console.log(" -> Четвер\n" +
            "  > Сходити на роботу\n" +
            "  > Попрати одяг\n" +
            "  > Купити продукти\n");
        break;
    case 5:
        console.log(" -> П'ятниця\n" +
            "  > Сходити на роботу\n" +
            "  > Вирішити справи у банку\n" +
            "  > Купити продукти\n");
        break;
    case 6:
        console.log(" -> Субота\n" +
            "  > Поприбирати в хаті\n" +
            "  > Спекти печенько\n" +
            "  > Приготувати суп\n");
        break;
    case 7:
        console.log(" -> Неділя\n" +
            "  > Вихідний!!!\n");
        break;
}

// #uwsz1RnTQJ1
// – Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох.
//   Також потрібно врахувати, коли введені рівні числа.
let first = +prompt("Введіть перше число: ");
let second = +prompt("Введіть друге число: ");
if(first === second) {
    console.log("Числа рівні!");
}
else if(first > second) {
    console.log("Перше число більше!");
}
else{
    console.log("Друге число більше!");
}

// #iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно). Напишіть код,
// який буде присвоювати змінній х значення “default”,
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = undefined;
if(!(!!x))
{
    x = "default";
    console.log(x);
}

// #awLXL6TBzg
// з файлу arrays.js (лежить у вкладеннях) взяти масив coursesAndDurationArray.
// За допомогою іф перевірити кожен його елемент на тривалість навчання.
// У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course in coursesAndDurationArray) {
    if(course.monthDuration > 5)
    {
        console.log("Супер");
    }
}