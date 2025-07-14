let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

//за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

let mapped = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        ...value
    }
});

console.log(mapped);

//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function foo(){
    console.log("tralala");
}
console.log(typeof foo);

// function deepCopy(item)
// {
//     if(item)
//     {
//         let fields = JSON.stringify(item);
//         let copy = JSON.parse(fields);
//         for(let field in item)
//         {
//             //copy = { ...copy, [field]: item[field] };
//             item.field.bind(copy)
//         }
//         return copy;
//     }
//     return "Invalid object";
// }

function deepCopy(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }

        console.log(cloneObj);
        return cloneObj

    }

    throw new Error('!!!!!');

}


let user = {
    name: "Olya",
    age: 18,
    greeting: function (){
        console.log(`Hello I'm ${this.name}!`)
    }
}
let copy = deepCopy(user);
console.log(copy);

console.log(user.greeting === copy.greeting);