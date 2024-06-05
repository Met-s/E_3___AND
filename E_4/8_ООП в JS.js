// function A() {
//
// }
// function B() {
//
// }
// B.prototype = A
//
// class A {}
// class B extends A {}
//  --------

// 1 как метод объекта
// const user = {
//     name: 'Ivan',
//     getName: function (){
//         console.log(this)
//     }
// }
// user.getName()
// call, apply, bind
// user.getName.call({ surname: "Ivanov" })

// 2 как обычная функция, объявленная через function
// function func(){
//     console.log(this)
// }
// func()

// 3 как функция конструктор
// const ex = new func();
// -------
// стрелочная функция не имеет своего контекста (this), она берёт родительский
//      и она неможет быть конструктором
const user = {
    name: 'Ivan',
    getName: () => console.log(this)
}

user.getName()
// -----
'use strict'
