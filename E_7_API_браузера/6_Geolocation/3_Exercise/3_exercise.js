const button = document.getElementById('button');
const statusBox = document.getElementById('status-box');
const dataBox = document.getElementById('data-box');
const screenDataBox = document.getElementById('screen-data');

button.addEventListener('click', getMyPosition);

function getMyPosition() {
    statusBox.innerHTML = 'Finding geolocation data...';
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(geolocationData) {
    statusBox.innerHTML = 'Успех!';

    // GeolocationData can't be serialized to JSON,
    // so copy out all properties manually
    let preview = {
        coords: {
            accuracy: geolocationData.coords.accuracy,
            altitude: geolocationData.coords.altitude,
            altitudeAccuracy: geolocationData.coords.altitudeAccuracy,
            heading: geolocationData.coords.heading,
            latitude: geolocationData.coords.latitude,
            longitude: geolocationData.coords.longitude,
            speed: geolocationData.coords.speed,
        },
        timestamp: geolocationData.timestamp,
        screenWidth: window.screen.width,
        screenHeigth: window.screen.height
    };
    dataBox.innerHTML = JSON.stringify(preview, null, 2);
}

function onError(error) {
    statusBox.innerHTML = 'Информация о местоположении недоступна';
    dataBox.innerHTML = error.message;
}

// Задание 3.
//
// Сверстайте кнопку, клик на которую будет выводить на экран следующие данные:
//
// 1. Размеры экрана пользователя (ширина и высота).
// 2. Координаты местонахождения пользователя. Если пользователь отказался дать
// доступ к местоположению или данная функция недоступна в бразуере, вывести
// вместо координат сообщение «Информация о местоположении недоступна».