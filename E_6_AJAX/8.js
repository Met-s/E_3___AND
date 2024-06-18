let xhr = new XMLHttpRequest();
xhr.open("get", "https://api.gismeteo.net/v2/weather/current/4368/", true);
xhr.onload = function() {
    if (xhr.status != 200){
        console.log('Статус ответа:',xhr.status );
    }else{
        console.log('Результат:', JSON.parse(xhr.response));
    }

};
xhr.onprogress = function (event) {
    console.log(`Загружено ${event.loaded} из ${event.total}`)
};
xhr.onerror = function() {
    console.log('Ошибка запроса', xhr.status);
};


xhr.send();