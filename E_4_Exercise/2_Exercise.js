const num = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};
const a = 'two'
const b = 'five'
function Exam(a, obj) {
    return a in obj;
}

console.log(Exam(a, num))
console.log(Exam(b, num))

//Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.
