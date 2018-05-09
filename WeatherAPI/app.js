// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather obj
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  // getting the values from document
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state)

  // Get and display weather
  getWeather();

  // close module
  // JQuery Script
  $('#locModal').modal('hide');
})

// Get Weather from the async method
function getWeather() {
  weather.getWeather()
    .then(results => {
      // console.log(results);
      // Painting the UI with the results returned
      ui.paint(results);
    })
    .catch(err => console.log(err));
}