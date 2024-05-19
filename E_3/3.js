const sum = function(a, b) {
    a + b;
};

console.log(sum(1, 2));  // undefinid
// ------------

function getSum(a, b) {
    const result = a + b
    return result;
}

const str = `Сумма двух чисел равна ${getSum(1, 2)}`
console.log(str)
