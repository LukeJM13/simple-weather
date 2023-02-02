const form = document.querySelector(".top-banner form");
let input = document.querySelector("input");
let inputVal = "";
form.addEventListener("submit", e => {
  e.preventDefault();
  const apiKey = "f8ac4b0a6e8232a4b87f3ab82c6f5931";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  console.log("Test");
  inputVal = input.value;
  console.log(inputVal);
  fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data 
  console.log(data);
  console.log(Math.round(data.main.temp));  
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city 😩";
  });
});