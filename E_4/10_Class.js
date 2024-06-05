// const person = {
//     city: "Moscow"
// }
//
// const student = Object.create(person);
//
// student.ownCity = 'Piter';
// console.log(student.city);
// console.log(Object.getPrototypeOf(student))
// -------

// --class
// class Parent {
//     constructor(ownCity) {
//         this.ownCity = ownCity;
//         this.hasFlat = true;
//     }
//     getInfo() {
//         console.log(`I live in ` + this.ownCity);
//     }
// }
// const parent = new Parent('Moscow');
// parent.getInfo();

// --constructor function
// function Parent(ownCity) {
//     this.ownCity = ownCity;
//     this.hasFlat = true;
// }
//
// Parent.prototype.getInfo() {
//     console.log('I live in ' + this.ownCity);
// }

// --class_наследование
class Parent {
    constructor(ownCity) {
        this.ownCity = ownCity || 'Moscow';
        this.hasFlat = true;
    }
    getInfo() {
        console.log(`I live in ` + this.ownCity);
    }
}
class Child extends Parent {
    constructor(isStudent, city, ownCity) {
        super(ownCity);
        this.isStudent = isStudent;
        this.city = isStudent ? city : ownCity;
    }
    getInfo(){
        if (this.isStudent) {
            return 'I study in ' + this.city
        } else {
            return super.getInfo()
        }
    }
}
const student = new Child(true, 'Piter');
// console.log(student.getInfo())
//
// const employee = new Child(false, 'New York');
// console.log(employee.getInfo())
console.log(student instanceof Child) // проверка является ли объект
// экземпляром этого класса
