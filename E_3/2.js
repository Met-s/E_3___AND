// Function Declaration

func1();  // 1
func2();  // ReferenceError: Cannot access 'func2' before initialization

function func1() {
    console.log(1)
}

// Function Expresion
// var, let, const

let func2 = function() {
    console.log(2)
}

func1();  // 1
func2();  // 2
