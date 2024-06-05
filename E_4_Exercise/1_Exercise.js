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
