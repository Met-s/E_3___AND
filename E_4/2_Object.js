// const userIvanov = {
//     name: 'Andrei',
//     surname: 'Ivanov',
//     age: 18,
//     position: 'developer'
// }

// const obj = new Object();
const prop = 'property'
const obj = {
    a: 1,
    [prop]: '123',
}

obj.b = 1;  // добавляем в объект это называется точечной натацией
console.log(obj)
console.log(obj.a)  // обращение к свойству объекта
console.log(obj["a"])
console.log(obj.property)
