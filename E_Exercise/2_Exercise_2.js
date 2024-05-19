function definePrimNum(num) {
    if (typeof num == "number" && !isNaN(num) && (num <= 1000) && (num > 1)) {
        let divider = 0;
        for (let i = 1; i < (num + 1); i++) {
            if (num % i === 0) {
                divider += 1;
            }
        }
        if (divider <= 2) {
            console.log(`Число: ${num} простое`)
            } else {
            console.log(`Число: ${num} не простое`)
        }
    } else {
        console.log(`Данные неверны, введте число от 2 до 1000`)
    }

}

definePrimNum(73);

// 2, 3, 5, 7, 11, 13, 17 19 23	29	31	37	41	43	47
