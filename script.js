// Selecting DOM elements for use in script
const form = document.querySelector(".top-banner form");
const input = document.querySelector("input");
const apiKey = "f8ac4b0a6e8232a4b87f3ab82c6f5931";
const text = document.querySelector(".textField");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const sunriseArea = document.querySelector(".textMiddleLeft");
const sunriseIcon = document.createElement("img");
sunriseIcon.src = "/Images/sunrise.png";
const sunsetArea = document.querySelector(".textMiddleRight");
const sunsetIcon = document.createElement("img");
sunsetIcon.src = "/Images/sunset.png";
const weather = document.querySelector(".weather");

// Submit button event
form.addEventListener("submit", e => {
  // Prevents spam of submit button
  e.preventDefault();
  const inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  // Requests the data for given city from OpenWeather
  fetch(url)
  .then(response => response.json())
  .then(data => {
    // If the user has entered a valid city
    text.textContent = `The temperature in ${capitalize(inputVal)} is ${Math.round(data.main.temp)}°C`;
    sunrise.textContent = `Sunrise today is ${(new Date(data.sys.sunrise * 1000)).getHours()}:${(new Date(data.sys.sunrise * 1000)).getMinutes()} GMT`;
    sunset.textContent = `Sunset today is ${(new Date(data.sys.sunset * 1000)).getHours()}:${(new Date(data.sys.sunset * 1000)).getMinutes()} GMT`;
    sunriseArea.appendChild(sunriseIcon);
    sunsetArea.appendChild(sunsetIcon);
    weather.textContent = `Current weather: ${data.weather[0].main}`;
  })
  // If the user has entered an invalid city
  .catch(() => {
    text.textContent = "The city entered is not valid... Please try again";
    sunriseArea.removeChild(sunriseIcon);
    sunsetArea.removeChild(sunsetIcon);
    sunrise.textContent = "";
    sunset.textContent = "";
    weather.textContent = "";
  });
});

// Function to capitalize first letter of city
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}