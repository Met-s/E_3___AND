// https://developer.mozilla.org/ru/
// Ctrl+Shift+I  открывает панель разработчика в Google-Chrome

// https://jsbin.com/migutefimu/edit?js,console
JavaScript

function a() {
  console.log(this)
}

a()
// Выдаст в консоле this = object Window глобальный объект для JS кода

window.outerWidth  // ширина окна всего браузера где находится страница
window.innerWidth  // ширина окна
window.location  // возвращает  информацию об текущем расположении документа
window.history   // история сессии
// Рендеринг Объект Window

// Навигация и классификация узлов
parentNode  // для всех узлов вернёт любого родителя
parentElement  // для узлов элементов вернёт узел-элемент
childNodes
children   // потомки
previousSibling, nextSibling   // соседние узлы
previousElementSibling, nextElementSibling  // соседние элементы

// console в Google-hromme
const body = document.body
body.parentElement
body.parentNode
body.childNodes
body.children
body.firstElementChild
body.firstChild
body.lastChild
body.previousElementSibling
// Поиск элемента в DOM
document.getElementById("оптимизация_и_производительность") // поиск
// элемента по Id
document.getElementsByTagName("div") // поиск элемента по тэгу
document.getElementsByClassName("section-content")  // поиск элемента по
// названию класса
document.querySelector("#place top container")
document.querySelector("div")
document.querySelector("#top-banner fallback")
document.querySelector(".top-banner fallback")
document.querySelectorAll(".top-banner fallback")
