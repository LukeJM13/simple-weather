// Selecting DOM elements for use in script
const form = document.querySelector(".top-banner form");
const input = document.querySelector("input");
const apiKey = "f8ac4b0a6e8232a4b87f3ab82c6f5931";
const text = document.querySelector(".textField");

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
    let date = new Date(1675356616 * 1000);
    console.log(date.getHours() + ":" + date.getMinutes());
  })
  // If the user has entered an invalid city
  .catch(() => {
    text.textContent = "The city entered is not valid... Please try again";
  });
});

// Function to capitalize first letter of city
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}