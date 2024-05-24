function numSum(a){
    return function(b){
        return (a + b)
      // console.log(a + b)
    }
}

const resultFunc = numSum(4)
console.log(resultFunc(5));

// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
