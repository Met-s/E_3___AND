// функция для не глубокой копии объекта
function clone (obj) {
    const newObj = {};

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {  // если убрать условие, то будет
            // условно глубокое копирование объекта но не коректно
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

const a = { b: 1};
const b = clone(a);
console.log(b);
b.c = 1;
console.log(a, b)
