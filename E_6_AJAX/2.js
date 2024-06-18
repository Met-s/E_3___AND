const xhr = new XMLHttpRequest();

xhr.onload = function() {
  console.log('Статус: ${xhr.status}; Результат: ${xhr.response}')
};

xhr.onerror = function() {
  console.log('Ошибка запроса');
};

xhr.open("get", "https://fonwall.ru/collection-5e2f6d25d7b7a9015194db8f", true);
xhr.send();