function quantEvenOdd(array){
    /*
    ** quantEvenOdd() - The function accepts an array. Displays the number
    ** of even and odd elements of an array to the console. If there is a
    ** null element, it is taken into account and output separately.
     */
    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number' && !isNaN(array[i])) {
			if (array[i] === 0) {
				zero += 1;
			} else if (array[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	}

console.log('Количество четных элементов: ', even)
console.log('Количество нечетных элементов: ', odd)
console.log('Количество нулей: ', zero)
}

const collection = [2, 3, 4, 5, 2, NaN, null, 0, 5, 'str', 7, 0]

quantEvenOdd(collection);
