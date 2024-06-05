function ElectAppliances(){
    this.power = 0;
    this.powerOnOf = function(){
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
    this.powerOnOf = powerOn
}

function ElectricKettle(name, color, volume, power, powerOn){
    this.category = 'Electric Kettle'
    this.name = name
    this.color = color
    this.volume = volume
    this.power = power
    this.powerOnOf = powerOn
}

function TV(name, color, diagonal, matrixType, power, powerOn){
    this.category = 'TV'
    this.name = name
    this.color = color
    this.diagonal = diagonal
    this.matrixType = matrixType
    this.power = power
    this.powerOnOf = powerOn
}

DeskLamp.prototype = new ElectAppliances();
ElectricKettle.prototype = new ElectAppliances();
TV.prototype = new ElectAppliances();

function sumPowerOn(...devices){
    let sumPower = 0;
    devices.forEach(device => {
        if (device.powerOnOf === true){
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
