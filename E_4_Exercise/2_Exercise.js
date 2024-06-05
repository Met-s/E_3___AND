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
