//#8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');
block.innerText = 'Test block';
block.style.height = '50px';
block.style.backgroundColor = 'lightgreen';
block.style.color = 'green';
block.style.fontSize = '18px';
block.style.marginBottom = '10px';
document.body.appendChild(block);
let clone = block.cloneNode(true);
document.body.appendChild(clone);

//#OPLI89c9G
// – Є масив:
// ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ulList = document.createElement('ul');
let list = ['Main', 'Products', 'About us', 'Contacts'];

for(let item of list){
    let li = document.createElement('li');
    li.innerText = item;
    ulList.appendChild(li);
}

document.body.appendChild(ulList);

//#jeBqHV525U5
// – Є масив
// let coursesAndDurationArray = [
// 
//     {title: 'JavaScript Complex', monthDuration: 5},
// 
//     {title: 'Java Complex', monthDuration: 6},
// 
//     {title: 'Python Complex', monthDuration: 6},
// 
//     {title: 'QA Complex', monthDuration: 4},
// 
//     {title: 'FullStack', monthDuration: 7},
// 
//     {title: 'Frontend', monthDuration: 4}
// 
// ];
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let courseList = document.createElement('div');
courseList.classList.add('course-list');
for(let item of coursesAndDurationArray){
    let courseBlock = document.createElement('div');
    courseBlock.classList.add('course-block');

    let title = document.createElement('h2');
    title.innerText = 'Title: ' + item.title;
    title.classList.add('title');

    let duration = document.createElement('p');
    duration.innerText = 'Duration: ' + item.monthDuration;
    duration.classList.add('duration');

    courseBlock.appendChild(title);
    courseBlock.appendChild(duration);
    courseList.appendChild(courseBlock);
}

document.body.appendChild(courseList);

//#Kx1xgoKy8
// – Є масив
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
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’>,
// в якому буде <h1 class=’heading’> з title  елементу,
// та <p class=’description’> з monthDuration елементу.
//
// Завдання робити через цикли.

let customCourseList = document.createElement('div');
customCourseList.classList.add('course-list');
for(let item of coursesAndDurationArray){
    let courseBlock = document.createElement('div');
    courseBlock.classList.add('item');

    let title = document.createElement('h2');
    title.innerText = 'Title: ' + item.title;
    title.classList.add('heading');

    let duration = document.createElement('p');
    duration.innerText = 'Duration: ' + item.monthDuration;
    duration.classList.add('description');

    courseBlock.appendChild(title);
    courseBlock.appendChild(duration);
    customCourseList.appendChild(courseBlock);
}

document.body.appendChild(customCourseList);

//– Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

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

let courseBlock = document.createElement('div');
courseBlock.classList.add('course-list');
for(let course of coursesArray)
{
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course-div');

    let courseTitle = document.createElement('h2');
    courseTitle.innerText = 'Course title: ' + course.title;
    courseTitle.classList.add('course-title');
    courseDiv.appendChild(courseTitle);

    let courseDuration = document.createElement('div');
    courseDuration.classList.add('course-duration');
    let monthDuration = document.createElement('p');
    monthDuration.innerText = 'Month duration: ' + course.monthDuration;
    let hourDuration = document.createElement('p');
    hourDuration.innerText = 'Hour duration: ' + course.hourDuration;
    courseDuration.appendChild(monthDuration);
    courseDuration.appendChild(hourDuration);
    courseDiv.appendChild(courseDuration);

    let modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules-div');

    for(let module of course.modules){
        let moduleP = document.createElement('p');
        moduleP.classList.add('module-p');
        moduleP.innerText = 'Module: ' + module;
        modulesDiv.appendChild(moduleP);
    }
    courseDiv.appendChild(modulesDiv);

    courseBlock.appendChild(courseDiv);

}
document.body.appendChild(courseBlock);