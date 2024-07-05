const btnOpen = document.querySelector(".j-btn-open");
const btnStart = document.querySelector(".j-btn-start");

// Кнопка открытия EventSource соединения с сервером
btnOpen.addEventListener("click", () => {
  const events = new EventSource("/events/");

  events.onmessage = (event) => {
    console.log("events.onmessage -> parsedData", JSON.parse(event.data));
  };

  btnOpen.style.display = "none";
  btnStart.style.display = "block";
});

// Кнопка запуска отправки данных в открытое соединение
btnStart.addEventListener("click", () => {
  btnStart.style.display = "none";
  fetch("/start/");
});
