// const arr = [1, 2, 3, 4, 5];
//
// arr.forEach(function(item){
//     console.log(item + 1)
// })
// --------Timeout--3cek
const sum = function(a, b){
    console.log(a + b)
}

// setTimeout(sum, 3000, 2, 5)
// setInterval(sum, 1000, 2,   3) // функция будет выполняться постоянно
const intervalId = setInterval(sum, 1000, 2,   3)
// setTimeout(function(){
//     clearInterval(intervalId)
// }, 5060) // Timeout 5cek
const timeoutId = setTimeout(function(){
    clearInterval(intervalId)
}, 5060)
clearTimeout(timeoutId)  // очищаем setTimeout и он не отрабатывает
