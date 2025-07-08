//#dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

console.log("Довжина 'hello world' : " + 'hello world'.length);
console.log("Довжина 'lorem ipsum' : " + 'lorem ipsum'.length);
console.log("Довжина 'javascript is cool' : " + 'javascript is cool'.length);

// #8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
//   ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let toUpperFirst = 'hello world'.toUpperCase();
console.log(toUpperFirst);

let toUpperSecond = 'lorem ipsum'.toUpperCase();
console.log(toUpperSecond);

let toUpperThird = 'javascript is cool'.toUpperCase();
console.log(toUpperThird);

//#ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//   ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let toLowerFirst = 'HELLO WORLD'.toLowerCase();
console.log(toLowerFirst);

let toLowerSecond = 'LOREM IPSUM'.toLowerCase();
console.log(toLowerSecond);

let toLowerThird = 'JAVASCRIPT IS COOL'.toLowerCase();
console.log(toLowerThird);

// #0b89BkYZwu
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let cleanString = ' dirty string   '.trim();
console.log(cleanString);

// #bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

function stringToArray(str) {
    return str.split(' ');
}

let str = 'Ревуть воли як ясла повні';
console.log(stringToArray(str));

// #Rbr5kEQ
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомоги map перетворити всі об’єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings = numbers.map(elem => elem.toString());
console.log(strings);

//#5hqyKTfmc
// – створити функцію sortNums(array,direction), яка приймає масив чисел,
// та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

function sortNums(nums, predicate) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (predicate(nums[i], nums[j])) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
}

let nums = [11, 21, 3];
sortNums(nums, (a, b) => a > b);
console.log(nums);
sortNums(nums, (a, b) => a < b);
console.log(nums);

//#yo06d74c1C
// 
// – є масив
// 
// let coursesAndDurationArray = [
// 
//     {title: ‘JavaScript Complex’, monthDuration: 5},
// 
//     {title: ‘Java Complex’, monthDuration: 6},
// 
//     {title: ‘Python Complex’, monthDuration: 6},
// 
//     {title: ‘QA Complex’, monthDuration: 4},
// 
//     {title: ‘FullStack’, monthDuration: 7},
// 
//     {title: ‘Frontend’, monthDuration: 4}
// 
// ];
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sorted = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sorted);

let filtered = coursesAndDurationArray.filter(elem => elem.monthDuration > 5);
console.log(filtered);

let mapped = coursesAndDurationArray.map(elem => {
    return {id: coursesAndDurationArray.indexOf(elem) + 1, ...elem};
});
console.log(mapped);

// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let result = coursesArray
    .reduce((acc, curr) => {
        if (curr.modules.includes('docker')) {
            acc.dockerModule.push(curr)
        }
        if (curr.modules.includes('sass')) {
            acc.sassModule.push(curr)
        }
        return acc;
    }, {sassModule: [], dockerModule: []});
console.log(result.sassModule);
console.log(result.dockerModule);

//#bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше

let suits = ['spade', 'heart', 'diamond', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

let cards = [];
for (let i = 0; i < suits.length; i++) {
    for (let k = 0; k < values.length; k++) {
        cards.push({
            cardSuit: suits[i],
            value: values[k],
            color: ((suits[i] === 'heart' || suits[i] === 'diamond') ? 'red' : 'black')
        });
    }
}
console.log(cards);

let spadeAce = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

let sixValues = cards.filter(card => card.value === '6');
console.log(sixValues);

let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

let diamondCards = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamondCards);

let highClubs = cards.filter(card => card.cardSuit === 'clubs' && card.value >= '9');
console.log(highClubs);

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

let packedCards = cards.reduce((acc, curr) => {
    switch (curr.cardSuit) {
        case 'spade':
            acc.spades.push(curr);
            break;
        case 'heart':
            acc.hearts.push(curr);
            break;
        case 'diamond':
            acc.diamonds.push(curr);
            break;
        case 'clubs':
            acc.clubs.push(curr);
            break;
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(packedCards);
