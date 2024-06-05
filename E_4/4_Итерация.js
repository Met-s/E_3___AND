const obj = {a: 1, b: 2};
for (let key in obj) {
    // выводим все названия свойств
    console.log(key);  // a , b

    // выводим все значения свойств
    console.log(obj[key]);  // 1 , 2
}
