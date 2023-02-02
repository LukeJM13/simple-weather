// Selecting DOM elements for use in script
const form = document.querySelector(".top-banner form");
const input = document.querySelector("input");
const apiKey = "f8ac4b0a6e8232a4b87f3ab82c6f5931";

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
    console.log(`The temperature in ${inputVal} is ${Math.round(data.main.temp)}°C`);
  })
  // If the user has entered an invalid city
  .catch(() => {
    console.log("No city found");
  });
});