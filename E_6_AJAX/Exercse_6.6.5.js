const numberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.floor(Math.random() * 100 + 1);
        if (number % 2) {
            reject(number);
        } else {
            resolve(number);
        }
    }, 3000);
});

numberPromise
    .then(result => {
        console.log("Завершено успешно. Сгенерированное число - " + result);
        })
    .catch(result => {
        console.log("Завершено с ошибкой. Сгенерированное число - " + result);
    });



// Ваша задача — создать Promise, в котором c задержкой в 3 секунды
// сгенерировать случайное целое число от 1 до 100. Для создания задержки
// использовать setTimeout. Если сгенерированное число четное, Promise
// выполнится успешно (resolve),
// если нечетное — выполнится с ошибкой (reject).
//
// После разрешения Promise обработать результат его выполнения и вывести
// сообщение в консоль:
//
// • «Завершено успешно. Сгенерированное число — number», если Promise
// завершился успешно. Вместо number подставить сгенерированное число.

// • «Завершено с ошибкой. Сгенерированное число — number», если Promise
// завершился с ошибкой. Вместо number подставить сгенерированное число.