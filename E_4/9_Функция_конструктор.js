// function Candy(weight){
//     this.tasty = 'delicious'
//     this.weight = weight
// }
// const twix = new Candy(47);
// const snikers = new Candy(50);
//
// console.log(twix, snikers)
// Candy { tasty: 'delicious', weight: 47 } Candy { tasty: 'delicious', weight: 50 }
// function Candy(weight){
//     this.tasty = 'delicious'
//     this.getWeight = function(){
//         console.log(`Weight is ${weight} g`)
//     }
// }
// const twix = new Candy(47);
// const snikers = new Candy(50);
//
// twix.getWeight()
// snikers.getWeight()
// Weight is 47 g
// Weight is 50 g
// function Candy(name){
//     this.tasty = 'delicious'
//     this.name = name
// }
//
// Candy.prototype.getWeight = function(weight){
//     console.log(`Weight is ${weight} g`)
// }
// function ChocoCandy(name, choco){
//     this.name = name
//     this.choco = choco
// }
// ChocoCandy.prototype = new Candy()  // делегирующая связь
//
// ChocoCandy.prototype.getWeight = function (weight){
//     console.log(`Candy weight is ${weight} g`)
// }
//
// const twix = new ChocoCandy('twix', 'milk');
// const snikers = new Candy('snikers');
//
// twix.getWeight(47)
// snikers.getWeight(50)
// console.log(twix)
// --------
function User(name){
    this.name = name;
    this.isAdmin = false;
}

let student = new User('Jack');
student.isAdmin = true;
// student.isAdmin(true);
console.log(student.name);
console.log(student.isAdmin);

console.log(student);