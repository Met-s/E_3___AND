const city = {
    m: 'Moscow',
    p: 'Piter',
    s: 'Samara',
}

function Overkill(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(`${i}: ${obj[i]}`)
        }
    }
}

Overkill(city)

// Написать, функцию, которая принимает в качестве аргумента объект и выводит
// в консоль все ключи и значения только собственных свойств. Данная функция
// не должна возвращать значение.
