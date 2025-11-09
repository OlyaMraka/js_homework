//#sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let firstTitle = document.createElement("h1");
firstTitle.innerText = "First task";
document.body.appendChild(firstTitle);

let item = document.createElement('div');
item.id = "text";
document.body.appendChild(item);

let hideButton = document.createElement('button');
hideButton.innerText = "Hide"
document.body.appendChild(hideButton);

hideButton.onclick = function () {
    let invisible = document.getElementById("text");
    invisible.style.display = "none";
}

let showButton = document.createElement('button');
showButton.innerText = "Show"
document.body.appendChild(showButton);
showButton.onclick = function () {
    let invisible = document.getElementById("text");
    invisible.style.display = "block";
}

//#j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік,
// чи менше він за 18, та повідомити про це користувача

let secondTitle = document.createElement("h1");
secondTitle.innerText = "Second task";
document.body.appendChild(secondTitle);


let form = document.createElement('form');
let input = document.createElement('input');
form.appendChild(input);
let button = document.createElement('button');
let resultDiv = document.createElement('div');
resultDiv.className = "resultDiv";
button.onclick = function (ev) {
    ev.preventDefault();
    if(input.value < 18) {
        resultDiv.innerText = "Вік менший за 18!"
    }
    else{
        resultDiv.innerText = "Вік більший за 18!"
    }
}
button.innerText = "Зчитати інформацію"
form.appendChild(button);
document.body.appendChild(form);
document.body.appendChild(resultDiv);

//#ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let thirdTitle = document.createElement("h1");
thirdTitle.innerText = "Third task";
document.body.appendChild(thirdTitle);

let userForm = document.createElement('form');
userForm.className = "userForm";

let nameLabel = document.createElement('label');
let nameInput = document.createElement('input');
nameLabel.innerText = "Введіть ім'я:";
userForm.appendChild(nameLabel);
userForm.appendChild(nameInput);

let surnameLabel = document.createElement('label');
let surnameInput = document.createElement('input');
surnameLabel.innerText = "Введіть прізвище:";
userForm.appendChild(surnameLabel);
userForm.appendChild(surnameInput);

let ageLabel = document.createElement('label');
let ageInput = document.createElement('input');
ageLabel.innerText = "Введіть вік:";
userForm.appendChild(ageLabel);
userForm.appendChild(ageInput);

let submitButton = document.createElement('button');
submitButton.innerText = "Показати користувача"
submitButton.onclick = function (ev) {
    ev.preventDefault();
    let userDiv = document.createElement('div');
    userDiv.className = "userDiv";
    let user = {
        name: nameInput.value,
        surname: surnameInput.value,
        age: ageInput.value,
    }
    for(let field in user)
    {
        let valueBlock = document.createElement("h4")
        valueBlock.innerText = user[field];
        userDiv.appendChild(valueBlock);
    }
    document.body.appendChild(userDiv);
}
userForm.appendChild(submitButton);

document.body.appendChild(userForm);

//#2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let fourthTitle = document.createElement("h1");
fourthTitle.innerText = "Fourth task";
document.body.appendChild(fourthTitle);

let number = 11;
let numberDiv = document.createElement("div");
numberDiv.className = "numberDiv";
numberDiv.innerText = number.toString();

if(!localStorage.getItem("Number"))
{
    localStorage.setItem("Number", number.toString());
}
else{
    let value = +localStorage.getItem("Number");
    value += 1;
    numberDiv.innerText = value.toString();
    localStorage.setItem("Number", value.toString());
}

document.body.appendChild(numberDiv);

//#Jg0gPO00
//
// створити конвертор ваги з кг у фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let kiloLabel = document.createElement("label");
document.body.appendChild(kiloLabel);
let kiloInput = document.createElement("input");
document.body.appendChild(kiloInput);

let funtDiv = document.createElement("div");
document.body.appendChild(funtDiv);
kiloInput.addEventListener("input", function () {
    let value = kiloInput.value || 0;
    funtDiv.innerText = (value * 2.20462).toString();
})

//#RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

let first = [1,2,3,4,5,6];
localStorage.setItem("first", JSON.stringify(first));
let second = ["ira", "olya", "julia"];
localStorage.setItem("second", JSON.stringify(second));

function addToLocalStorage(arrayName, newItem){
    let ourArr = JSON.parse(localStorage.getItem(arrayName));
    ourArr.push(newItem);
    localStorage.setItem(arrayName, JSON.stringify(ourArr));
}

addToLocalStorage('first', 7)
addToLocalStorage('second', 'ivan')

// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

let fifthTitle = document.createElement("h1");
fifthTitle.innerText = "Fifth task";
document.body.appendChild(fifthTitle);

let inputForm = document.createElement('div')
inputForm.className = "inputForm";
let inputTitles = ["Введіть кількість рядків: ", "Введіть кількість стовпців: ", "Введіть вміст: "]
for(let i = 0; i < 3; i++){
    let inputBlock = document.createElement("div");
    inputBlock.className = "inputBlock";
    let inputElem = document.createElement("input");
    inputElem.className = "inputElem";
    let title = document.createElement("h2");
    title.className = "title";
    title.innerText = inputTitles[i];

    inputBlock.append(title, inputElem);
    inputForm.appendChild(inputBlock);
}
let buttonElem = document.createElement("button");
buttonElem.className = "buttonElem";
buttonElem.innerText = "Сформувати табличку"
inputForm.appendChild(buttonElem);

document.body.appendChild(inputForm);

buttonElem.onclick = function (ev) {
    ev.preventDefault();

    let inputs = inputForm.getElementsByClassName("inputElem");
    let rows = +inputs[0].value;
    let cols = +inputs[1].value;
    let value = inputs[2].value;

    let table = document.createElement("table");
    for(let i = 0; i < rows; i++){
        let row = document.createElement("tr");
        row.className = "row";
        for(let j = 0; j < cols; j++){
            let elem = document.createElement("td");
            elem.innerHTML = value.toString();
            elem.className = "rowElem";
            row.appendChild(elem);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення “100 грн”
// при перезавантаженні сторінки до значення додається по 10 грн,
// але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

let sixTitle = document.createElement("h1");
sixTitle.innerText = "Six task";
document.body.appendChild(sixTitle);

let currentPrice = document.createElement("div");

window.onload = function () {
    let value = JSON.parse(localStorage.getItem("DivValue")) || 100;
    let prevLoad = localStorage.getItem("PrevLoad") ?
        new Date(localStorage.getItem("PrevLoad")) : new Date();

    let current = new Date();

    if((current - prevLoad)/1000 > 10){
        value += 10;
    }

    currentPrice.innerText = value;
    localStorage.setItem("DivValue", value.toString());
    localStorage.setItem("PrevLoad", current.toString());
}

currentPrice.className = "currentPrice";

document.body.appendChild(currentPrice);


// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let taskContainer = document.createElement("div");
taskContainer.className = "taskContainer";

let arrContainer = document.createElement("div");
arrContainer.className = "arrContainer";

taskContainer.appendChild(arrContainer);

let buttonPrev = document.createElement("button");
buttonPrev.className = "buttonElem";
buttonPrev.innerText = "Prev"
let buttonNext = document.createElement("button");
buttonNext.className = "buttonElem";
buttonNext.innerText = "Next"

taskContainer.append(buttonPrev, buttonNext);

let page = 0;

let bigArr = []
for (let i = 0; i < 100; i++){
    bigArr.push(`Item: ${i + 1}`);
    if (i < 10){
        let elemDiv = document.createElement("div");
        elemDiv.className = "elemDiv";
        elemDiv.innerText = bigArr[i];
        arrContainer.appendChild(elemDiv);
    }
}

document.body.appendChild(taskContainer);

buttonNext.onclick = function (ev) {
    ev.preventDefault();
    if(page === 9){
        return;
    }

    ++page;
    FillContainer(page);
}

buttonPrev.onclick = function (ev) {
    ev.preventDefault();
    if(page === 0){
        return;
    }

    --page;
    FillContainer(page)
}

function FillContainer(page){
    arrContainer.replaceChildren();

    let index = page*10;
    for (let i = 0; i < 10; i++){
        if(!bigArr[index]){
            return;
        }
        let elemDiv = document.createElement("div");
        elemDiv.className = "elemDiv";
        elemDiv.innerText = bigArr[index];
        ++index;
        arrContainer.appendChild(elemDiv);
    }
}





