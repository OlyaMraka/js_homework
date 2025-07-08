//#XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = []
for (let i = 0; i < 10; i++) {
    users.push(new User(i, 'tolik', 'mraka', 'tolik@gmail.com', '+380956787345'));
}
console.log(users);

//#2ikXsE2WiKZ
// – Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

//#pOeHKct
// – Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

//#nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname ,
// email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

class Client {

    constructor(id, name, surname, email, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Alina', 'Koval', 'alina@gmail.com', 234),
    new Client(2, 'Alina', 'Koval', 'alina@gmail.com', 19),
    new Client(3, 'Alina', 'Koval', 'alina@gmail.com', 200),
    new Client(4, 'Alina', 'Koval', 'alina@gmail.com', 12),
    new Client(5, 'Alina', 'Koval', 'alina@gmail.com', 123),
    new Client(6, 'Alina', 'Koval', 'alina@gmail.com', 432),
    new Client(7, 'Alina', 'Koval', 'alina@gmail.com', 142),
    new Client(8, 'Alina', 'Koval', 'alina@gmail.com', 908),
    new Client(9, 'Alina', 'Koval', 'alina@gmail.com', 111),
    new Client(10, 'Alina', 'Koval', 'alina@gmail.com', 98),
];

//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання).
// Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((a, b) => a.order - b.order);
console.log(sortedClients);

//#vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, creator, year, maxSpeed, engineVolume) {
    this.model = model;
    this.creator = creator;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
}

Car.prototype.drives = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
};

Car.prototype.info = function () {
    console.log(` -> Model: ${this.model}\n    Creator: ${this.creator}
    Year: ${this.year}\n    Max Speed: ${this.maxSpeed}\n    Engine Volume: ${this.engineVolume}\n`);
}

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = newSpeed;
}

Car.prototype.changeYear = function (newYear) {
    this.year = newYear;
}

Car.prototype.addDriver = function (driver) {
    this.driver = driver;
}

let bmw = new Car('m8', 'Germany', 2021, 250, 100);
console.log(bmw);

bmw.drives();
bmw.info();
bmw.increaseMaxSpeed(300);
bmw.info();
bmw.changeYear(2025);
bmw.info();
bmw.addDriver('Olya');
console.log(bmw.driver);

//#5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
// — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
// — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
// — changeYear (newValue) – змінює рік випуску на значення newValue
//
// — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Automobile {
    constructor(model, creator, year, maxSpeed, engineVolume) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drives() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(` -> Model: ${this.model}\n    Creator: ${this.creator}
    Year: ${this.year}\n    Max Speed: ${this.maxSpeed}\n    Engine Volume: ${this.engineVolume}\n`);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    };

    changeYear(newYear) {
        this.year = newYear;
    };

    addDriver(driver) {
        this.driver = driver;
    }
}

let mercedes = new Automobile('maybach', 'Germany', 2021, 250, 100);
console.log(mercedes);

mercedes.drives();
mercedes.info();
mercedes.increaseMaxSpeed(300);
mercedes.info();
mercedes.changeYear(2025);
mercedes.info();
mercedes.addDriver('Olya');
console.log(mercedes.driver);

//#zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}

let popelushku = [
    new Popelushka('anna', 21, 36),
    new Popelushka('anna', 22, 37),
    new Popelushka('anna', 23, 38),
    new Popelushka('anna', 24, 38.5),
    new Popelushka('anna', 33, 35),
    new Popelushka('anna', 27, 35.5),
    new Popelushka('anna', 20, 39),
    new Popelushka('anna', 26, 40),
    new Popelushka('anna', 40, 36.5),
    new Popelushka('anna', 45, 41),
];

class Prince{
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.foundSize = feetSize;
    }
}

let Ivan = new Prince('Ivan', 26, 36);
let selected;
for (let popelushka of popelushku) {
    if(popelushka.feetSize === Ivan.foundSize){
        selected = popelushka;
        break;
    }
}
console.log(selected);

let selectedPopelushka = popelushku.find(p => p.feetSize === Ivan.foundSize);
console.log(selectedPopelushka);

//#gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (func) {
    for (let elem of this) {
        func(elem)
    }
}

let numbers = [1,2,3,4,5,6,7,8,9];
numbers.myForEach(elem => console.log(elem));

Array.prototype.myFilter = function (predicate) {
    let selected = [];
    for (let elem of this) {
        if(predicate(elem)) {
            selected.push(elem);
        }
    }
    return selected;
}

let selectedNumbers = numbers.myFilter(a => a % 2 === 0);
console.log(selectedNumbers);
