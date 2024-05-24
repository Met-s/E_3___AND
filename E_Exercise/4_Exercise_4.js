function prinTwoNum(a, b){
    for (let i = a; i <= b; i++){
        setTimeout(() => console.log(i), i * 2000);
    }
}

prinTwoNum(5, 15);

// async function prinTwoNum(a, b) {
//     for (let i = a; i < (b + 1); i++) {
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         console.log(i)
//     }
// }
//
// prinTwoNum(24, 32);

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо
// выводить в консоль, начиная от первого и заканчивая вторым. Используйте
// setInterval.
//
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно
// печататься число, начиная с 5 и заканчивая 15
// (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
