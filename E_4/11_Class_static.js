class Amazing{
    static cool(){
        console.log('cool')
    }
    wow(){
        console.log('wow')
    }
}

class Wonderful extends Amazing{
    static awesome(){
        super.cool();
        console.log('awesome');
    }
    great(){
        super.cool();
        console.log('great')
    }
}
// так работает
// Amazing.cool()
// Wonderful.cool()
// Wonderful.awesome()

// так не работает
const instanse = new Wonderful();
// получим ошибку, вот и вся магия о статических методах
instanse.awesome();
instanse.great();
instanse.cool();
