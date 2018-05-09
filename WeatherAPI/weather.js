class Weather {
  constructor(city, state) {
    this.apiKey = '2b1c734b262fad33';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  // by adding asyn this will return a promise
  // so where we call async function
  // we need to treat it like a promise
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}