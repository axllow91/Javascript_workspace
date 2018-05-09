class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Bucharest';
    this.defaultState = 'RO';
  }

  getLocationData() {
    // If localStorage city is null
    // set it to default city otherwise get the city
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

  // If localStorage state is null
    // set it to default state otherwise get the state
    if(localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }

    // return the city and state
    return {
      city: this.city,
      state: this.state
    }

  }

  setLocationData(city, state) {
    // setting the item as they are city - city | state - state
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}