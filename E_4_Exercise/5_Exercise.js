class ElectAppliances{
    constructor(category, name, color, power, powerOn){
        this.category = category;
        this.name = name;
        this.voltage = '220v';
        this.color = color;
        this.power = power;
        this.powerOnOf = powerOn;
    };
}

class DeskLamp extends ElectAppliances{
    constructor(baseType, outputLight, category, name, color, power, powerOn) {
        super(category, name, color, power, powerOn)
        this.baseType = baseType;
        this.outputLight = outputLight;
    };
}

class ElectricKettle extends ElectAppliances{
    constructor(volume, category, name, color, power, powerOn) {
        super(category, name, color, power, powerOn)
        this.volume = volume;
    };
}

class TV extends ElectAppliances{
    constructor(diagonal, matrixType, category, name, color, power, powerOn) {
        super(category, name, color, power, powerOn)
        this.diagonal = diagonal;
        this.matrixType = matrixType;
    };
}

function sumPowerOn(device) {
    /*
    ** The sumPower() function takes an array of devices and,
    ** depending on the power value (false or true), whether
    ** the device is connected to the network or not. It outputs
    ** the total power of the connected devices to the console.
     */
        let sumPower = 0;
        device.forEach(device => {
            if (device.powerOnOf === true){
                sumPower += device.power;
            }
        });
        console.log(`Total power of all included devices: ${sumPower} w`);
    }

const tulip = new DeskLamp('E/14', 'white', 'Desk Lamp','Tulip','red',60, false);
const borc = new ElectricKettle('1.5l', 'Electric Kettle','Borc','black',1700, true);
const lg = new TV('40"', 'LCD', 'TV', 'LG', 'gray', 700, true);
const devices = [tulip, borc, lg];

console.log(tulip)
console.log(borc)
console.log(lg)

sumPowerOn(devices);

// Переписать консольное приложение из предыдущего юнита (4_Exercise) на
// классы.
//
// Общие требования:
//
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.
