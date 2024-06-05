const obj = {};
obj.a = 1;
obj.b = '25';
obj.c = 8;
obj.s = 4;
obj.f = function Iter() {
    for (let key in obj)
        console.log(`${key} : ${obj[key]}`)
};

delete obj.b;

console.log(obj);
obj.f()

// console.log(obj.f(obj))

