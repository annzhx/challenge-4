let dt = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[dt.getDay()];
let currentTime = dt.getHours() + ":" + dt.getMinutes();
let currentDayTime = currentDay + " " + currentTime;
document.getElementById("date-time").innerHTML = currentDayTime;

function showCity(event) {
  event.preventDefault();
  let searchField = document.querySelector("#field");
  let city = document.querySelector("h1");
  city.innerHTML = searchField.value;
}

let message = document.querySelector("#float-left");
message.addEventListener("submit", showCity);

function convertCelsius(event) {
  event.preventDefault();
  let cels = document.querySelector("#temperature");
  cels.innerHTML = "19°";
}
let linkCelsius = document.querySelector("#celsius");
linkCelsius.addEventListener("click", convertCelsius);

function convertFahrenheit(event) {
  event.preventDefault();
  let fahr = document.querySelector("#temperature");
  fahr.innerHTML = "66°";
}

let linkFahr = document.querySelector("#fahrenheit");
linkFahr.addEventListener("click", convertFahrenheit);
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#field");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#float-left");
searchForm.addEventListener("submit", search);

function showTemperature(response) {
  let cityTemperature = document.querySelector("#temperature");
  console.log(cityTemperature);
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  cityTemperature.innerHTML = `${temperature} °C`;
}
function cityDisplay(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#field");
  let showCity = document.querySelector("#city");
  showCity.innerHTML = cityInput.value;
  let apiKey = "cd146490f6193ead021b1eefbd8b6230";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let cityForm = document.querySelector("#float-left");
cityForm.addEventListener("submit", cityDisplay);
