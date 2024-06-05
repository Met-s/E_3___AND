const person = {
    city: "Moscow",
}

const student = Object.create(person);
student.ownCity = "Piter";

for(let key in student) {
    if(student.hasOwnProperty(key)){
        console.log(key)
    }
}

// console.log(student.city)
// console.log(Object.getPrototypeOf(student))