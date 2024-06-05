// В то время как примитивные типы данных копируются и сравниваются по значению:
// let a = 'hello';
// let b = a;
//
// console.log(a === b)  // true
// a = 100;
// console.log(a === b)  // false

// Объекты копируются и сравниваются по ссылке:
// const obj1 = {a: 1};
// const obj2 = obj1;
//
// console.log(obj1 === obj2)  // true
// obj1.b = 2;   // добавляем в obj1 значение b: 2
//
// console.log(obj1 === obj2)  // true
const obj = {a: 1, c: undefined};
console.log('a' in obj);  // true
console.log('b' in obj);  // false
console.log('c' in obj);  // true
