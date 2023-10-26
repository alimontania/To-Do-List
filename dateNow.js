const days = ["Domingo", "lunes" , "Martes", "Mierercoles", "Jueves", "vienes" , "Sabado"]
const months = ["Ene", "Feb", "Mar", "Abri", "May", "Jun", "Jul", "Ago", "Sep", "Oct" , "Nob" , "Dic"];

const numberDay = (date = new Date) => date.getDate();
const day = (date = new Date) => days[date.getDay()];
const month = (date = new Date) =>  months[date.getMonth()];

const dateNowText = document.getElementById("dateNow");
dateNowText.textContent = day() + ", " + numberDay() + " de " + month();
