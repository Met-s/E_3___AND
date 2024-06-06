function ElectAppliances(){
    this.power = 0;
    this.isPoweredOn = function(){
        return this.power;
    }
}

function DeskLamp(name, color, baseType, outputLight, power, powerOn){
    this.category = 'Desk Lamp'
    this.name = name
    this.color = color
    this.baseType = baseType
    this.outputLight = outputLight
    this.voltage = '220v'
    this.power = power
    this.isPoweredOn = powerOn
}

function ElectricKettle(name, color, volume, power, powerOn){
    this.category = 'Electric Kettle'
    this.name = name
    this.color = color
    this.volume = volume
    this.power = power
    this.isPoweredOn = powerOn
}

function TV(name, color, diagonal, matrixType, power, powerOn){
    this.category = 'TV'
    this.name = name
    this.color = color
    this.diagonal = diagonal
    this.matrixType = matrixType
    this.power = power
    this.isPoweredOn = powerOn
}

DeskLamp.prototype = new ElectAppliances();
ElectricKettle.prototype = new ElectAppliances();
TV.prototype = new ElectAppliances();

function sumPowerOn(...devices){
    let sumPower = 0;
    devices.forEach(device => {
        if (device.isPoweredOn === true){
            sumPower += device.power;
        }
    });
    return sumPower;
}

const tulip = new DeskLamp('Tulip', 'red','E/14', 'white', 60, true);
const borc = new ElectricKettle('Borc', 'black', '1.5l', 1700, false);
const lg = new TV('LG', 'gray', '40"', 'LCD', 700, true);

console.log(tulip);
console.log(borc);
console.log(lg);
const sumPower = sumPowerOn(tulip, borc, lg);
console.log(`Total power of all included devices: ${sumPower} w`);

// Реализовать следующее консольное приложение подобно примеру, который
// разбирался в видео. Реализуйте его на прототипах.

// Определить иерархию электроприборов. Включить некоторые в розетку.
// Посчитать потребляемую мощность.

// Таких приборов должно быть, как минимум, два (например, настольная лампа
// и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
// 1.Определить родительскую функцию с методами, которые включают/выключают
//      прибор из розетки.
// 2.Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3.У каждого из приборов должны быть собственные свойства и, желательно,
//      методы, отличные от родительских методов.
// 4.Создать экземпляры каждого прибора.
// 5.Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

// Общие требования:
//
// 1.Имена функций, свойств и методов должны быть информативными.
// 2.Соблюдать best practices:
//   • использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//   • информативные имена (а не a, b);
//   • четкая связь между классом и его экземплярами (класс описывает
//      множество, а экземпляр конкретную реализацию);
//   • использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.
