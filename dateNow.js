const days = ["dom", "lun"];
const months = ["ene", "feb"];

const numberDay = (date = new Date) => date.getDate();
const day = (date = new Date) => days[date.getDay()];
const month = (date = new Date) =>  months[date.getMonth()];

const dateNowText = document.getElementById("dateNow");
dateNowText.textContent = day() + ", " + numberDay() + " de " + month();
